/* eslint-disable no-useless-escape */
import type { Browser, BrowserInfo, OS, Parser, Result } from "../constants";
import { SEC_CH_UA_HEADERS } from "../constants";
import { parsers as archParsers } from "./arch";
import { parsers as browserParsers } from "./browser";
import { parsers as deviceParsers } from "./device";
import { parsers as engineParsers } from "./engine";
import { parsers as osParsers } from "./os";

export function parsersFromRegexes<T extends keyof Result>(
  regexes: RegExp[],
  handle: (match: RegExpMatchArray) => Result[T],
  specificity = 0,
): Parser<T> {
  return {
    specificity,
    parse(userAgent) {
      for (const regex of regexes) {
        const match = userAgent.match(regex);
        if (match) {
          return handle(match);
        }
      }
      return null;
    },
  };
}

function runParsers<T extends keyof Result>(
  parsers: Parser<T>[],
  userAgent: string,
): Result[T] {
  const sorted = parsers.sort((a, b) => b.specificity - a.specificity);
  for (const parser of sorted) {
    const result = parser.parse(userAgent);
    if (result) {
      return result;
    }
  }
  return {};
}

export function parse<T extends keyof Result>(
  type: T,
  data: string,
): Result[T] {
  switch (type) {
    case "os":
      return runParsers(osParsers, data) as Result[T];
    case "cpu":
      return runParsers(archParsers, data) as Result[T];
    case "browser":
      return runParsers(browserParsers, data) as Result[T];
    case "device":
      return runParsers(deviceParsers, data) as Result[T];
    case "engine":
      return runParsers(engineParsers, data) as Result[T];
  }
  return {};
}

function majorize(version?: string) {
  if (!version) {
    return version;
  }
  return version.replace(/[^\d\.]/g, "").split(".")[0];
}

function brandListToArray(header?: string | null) {
  if (!header) return undefined;
  const arr: {
    brand?: string;
    version?: string;
  }[] = [];
  const tokens = header.replace(/\\?\"/g, "").split(",");
  for (const token of tokens) {
    if (token.includes(";")) {
      const splitToken = token.replace(/^\s\s*/, "").split(";v=");
      arr.push({ brand: splitToken[0], version: splitToken[1] });
    } else {
      arr.push({ brand: token, version: undefined });
    }
  }
  return arr;
}
export function parseCHHeaders<T extends keyof Result>(
  itemType: T,
  headers: Headers,
): Result[T] {
  const brandsList = brandListToArray(headers.get(SEC_CH_UA_HEADERS.AGENT));
  const fullVersionList = brandListToArray(
    headers.get(SEC_CH_UA_HEADERS.FULL_VERSION_LIST),
  );
  const isMobile = (headers.get(SEC_CH_UA_HEADERS.MOBILE) ?? "").includes("?1");
  const model = headers.get(SEC_CH_UA_HEADERS.MODEL)?.replace(/\\?\"/g, "");
  const platform = headers
    .get(SEC_CH_UA_HEADERS.PLATFORM)
    ?.replace(/\\?\"/g, "");
  const platformVersion = headers
    .get(SEC_CH_UA_HEADERS.PLATFORM_VERSION)
    ?.replace(/\\?\"/g, "");
  const arch = headers.get(SEC_CH_UA_HEADERS.ARCH)?.replace(/\\?\"/g, "");
  const bitness = headers.get(SEC_CH_UA_HEADERS.BITNESS)?.replace(/\\?\"/g, "");
  switch (itemType) {
    case "browser": {
      const brands = (fullVersionList ?? brandsList) as
        | { brand: string; version: string }[]
        | undefined;
      const out: BrowserInfo = {};
      if (brands) {
        brands.forEach(({ brand, version }, i) => {
          if (
            !/not.a.brand/i.test(brand) &&
            (i < 1 || /chromi/i.test(out.name as string))
          ) {
            out.name = brand.replace("Google ", "") as Browser;
            out.version = version;
            out.major = majorize(version);
          }
        });
      }
      return out as Result[T];
    }
    case "cpu":
      if (arch) {
        if (bitness === "64") {
          return parse("cpu", arch + "64") as Result[T];
        } else {
          return parse("cpu", arch) as Result[T];
        }
      }
      break;
    case "device":
      if (isMobile) {
        return {
          model,
          type: "mobile",
        } as Result[T];
      } else if (platform) {
        const osValue = parse("os", platform);
        if (!osValue.typeGuess) {
          return {
            model,
          } as Result[T];
        }
        return {
          model,
          type: osValue.typeGuess,
        } as Result[T];
      } else {
        return {
          model,
        } as Result[T];
      }
    case "os":
      if (platform) {
        if (platform === "Windows") {
          return {
            name: "Windows",
            version:
              parseInt(majorize(platformVersion) ?? "10", 10) >= 13
                ? "11"
                : "10",
          } as Result[T];
        } else {
          const out: Result["os"] = {
            name: platform as OS,
            version: platformVersion,
          };
          return out as Result[T];
        }
      }
      break;
  }
  return {};
}

export function parseUA(userAgent: string): Result {
  const output = {
    os: runParsers(osParsers, userAgent),
    cpu: runParsers(archParsers, userAgent),
    browser: runParsers(browserParsers, userAgent),
    device: runParsers(deviceParsers, userAgent),
    engine: runParsers(engineParsers, userAgent),
  };
  if (!output.device.type) {
    output.device.type = output.os.typeGuess;
    return output;
  } else {
    return output;
  }
}

export function guess(ua: string, headers?: Headers): Result {
  if (!headers) {
    return parseUA(ua);
  }
  const result = parseUA(ua);
  const extra = {
    browser: parseCHHeaders("browser", headers),
    cpu: parseCHHeaders("cpu", headers),
    device: parseCHHeaders("device", headers),
    os: parseCHHeaders("os", headers),
  };
  return {
    ...result,
    os: {
      ...result.os,
      ...extra.os,
    },
    browser: {
      ...result.browser,
      ...extra.browser,
    },
    cpu: {
      ...result.cpu,
      ...extra.cpu,
    },
    device: {
      ...result.device,
      ...extra.device,
    },
  };
}

export default guess;
