/* eslint-disable no-useless-escape */
import { parsersFromRegexes } from "./index";

const p: typeof parsersFromRegexes<"browser"> = (r, mf, s) => {
  return parsersFromRegexes<"browser">(
    r,
    (match) => {
      const evaluated = mf(match);
      evaluated.major = majorize(evaluated.version);
      evaluated.type ??= "browser";
      return evaluated;
    },
    s,
  );
};

function majorize(version?: string) {
  if (!version) {
    return version;
  }
  return version.replace(/[^\d\.]/g, "").split(".")[0];
}

/**
 * Collection of parsers for browser info
 */
export const parsers = [
  [
    // Safari
    p([/version\/([\w\.\,]+) .*mobile(?:\/\w+ | ?)safari/i], (match) => {
      return {
        name: "Mobile Safari",
        version: match[1],
      };
    }),
    p([/iphone .*mobile(?:\/\w+ | ?)safari/i], (match) => {
      return {
        name: "Mobile Safari",
        version: match[1],
      };
    }),
    p([/version\/([\w\.\,]+) .*(safari)/i], (match) => {
      return {
        name: "Safari",
        version: match[1],
      };
    }),
    p([/webkit.+?(safari)(\/[\w\.]+)/i], (match) => {
      return {
        name: "Safari",
        version: match[2],
      };
    }),
    p([/webkit.+?(mobile ?safari)(\/[\w\.]+)/i], (match) => {
      return {
        name: "Mobile Safari",
        version: match[2],
      };
    }),
    p([/(webkit)\/([\w\.]+)/i], (match) => {
      return {
        name: "WebKit",
        version: match[2],
      };
    }),
    p([/(khtml)\/([\w\.]+)/i], (match) => {
      return {
        name: "KHTML",
        version: match[2],
      };
    }),
    p(
      [
        /(apple(?:coremedia|))\/([\w\._]+)/i, // Generic Apple CoreMedia
        /(coremedia) v([\w\._]+)/i,
      ],
      (match) => {
        return {
          name: "Apple CoreMedia",
          version: match[2],
        };
      },
    ),
  ],
  [
    // Chrome
    p([/\b(?:crmo|crios)\/([\w\.]+)/i], (match) => {
      return {
        name: "Mobile Chrome",
        version: match[1],
      };
    }),

    p([/(chromium)[\/ ]([-\w\.]+)/i], (match) => {
      return {
        name: "Chromium",
        version: match[2],
      };
    }),

    p([/(chrome)\/v?([\w\.]+)/i], (match) => {
      return {
        name: "Chrome",
        version: match[2],
      };
    }),

    p([/headlesschrome(?:\/([\w\.]+)| )/i], (match) => {
      return {
        name: "Chrome Headless",
        version: match[1],
      };
    }),

    p([/ wv\).+(chrome)\/([\w\.]+)/i], (match) => {
      return {
        name: "Chrome WebView",
        version: match[2],
      };
    }),

    p([/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], (match) => {
      return {
        name: "Android Browser",
        version: match[1],
      };
    }),

    p([/chrome\/([\w\.]+) mobile/i], (match) => {
      return {
        name: "Mobile Chrome",
        version: match[1],
      };
    }),
  ],
  [
    // Firefox
    p([/\bfocus\/([\w\.]+)/i], (match) => {
      return {
        name: "Firefox Focus",
        version: match[1],
      };
    }),

    p([/fxios\/([\w\.-]+)/i], (match) => {
      return {
        name: "Mobile Firefox",
        version: match[1],
      };
    }),

    p([/(?:mobile|tablet);.*(firefox)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Mobile Firefox",
        version: match[2],
      };
    }),

    p([/mobile vr; rv:([\w\.]+)\).+firefox/i], (match) => {
      return {
        name: "Firefox Reality",
        version: match[1],
      };
    }),

    p([/(firefox)\/([\w\.]+)/i], (match) => {
      return {
        name: "Firefox",
        version: match[2],
      };
    }),

    p([/(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i], (match) => {
      return {
        name: "Mozilla",
        version: match[2],
      };
    }),
  ],
  [
    // Edge
    p([/edg(?:e|ios|a)?\/([\w\.]+)/i], (match) => {
      return {
        name: "Edge",
        version: match[1],
      };
    }),
  ],
  [
    // Opera
    p(
      [
        /(opera mini)\/([-\w\.]+)/i, // Opera Mini
      ],
      (match) => {
        return {
          name: "Opera Mini",
          version: match[2],
        };
      },
    ),
    p([/opios[\/ ]+([\w\.]+)/i], (match) => {
      return {
        name: "Opera Mini",
        version: match[1],
      };
    }),
    p(
      [
        /(opera [mobile]{3,6})\b.+version\/([-\w\.]+)/i, // Opera Mobi
      ],
      (match) => {
        return {
          name: "Opera Mobi",
          version: match[2],
        };
      },
    ),
    p(
      [
        /(opera [table]{3,6})\b.+version\/([-\w\.]+)/i, // Opera Mobi/Tablet
      ],
      (match) => {
        return {
          name: "Opera Tablet",
          version: match[2],
        };
      },
    ),
    p(
      [
        /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i, // Opera
      ],
      (match) => {
        return {
          name: "Opera",
          version: match[2],
        };
      },
    ),
    p([/\bopr\/([\w\.]+)/i], (match) => {
      return {
        name: "Opera",
        version: match[1],
      };
    }),
    p([/\bopt\/([\w\.]+)/i], (match) => {
      return {
        name: "Opera Touch",
        version: match[1],
      };
    }),
    p([/coast\/([\w\.]+)/i], (match) => {
      return {
        name: "Opera Coast",
        version: match[1],
      };
    }),
  ],
  [
    // IE
    p([/(iemobile)\s?(?:browser)?[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "IE Mobile",
        version: match[2],
      };
    }),
    p([/(?:ms|\()(ie) ([\w\.]+)/i], (match) => {
      return {
        name: "IE",
        version: match[2],
      };
    }),
    p([/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], (match) => {
      return {
        name: "IE",
        version: match[1],
      };
    }),
  ],
  [
    // Misc
    p([/(unknown)/i], () => {
      return {
        name: "Unknown",
      };
    }),
    p([/\bb[ai]*d(?:uhd|[ub]*[aekoprswx]{5,6})[\/ ]?([\w\.]+)/i], (match) => {
      return {
        name: "Baidu Browser",
        version: match[1],
      };
    }),
    p([/(kindle)\/([\w\.]+)/i], (match) => {
      return {
        name: "Kindle",
        version: match[2],
      };
    }),
    p([/(lunascape)[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Lunascape",
        version: match[2],
      };
    }),
    p([/(maxthon)[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Maxthon",
        version: match[2],
      };
    }),
    p([/(netfront)[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "NetFront",
        version: match[2],
      };
    }),
    p([/(jasmine)[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Jasmine",
        version: match[2],
      };
    }),
    p([/(blazer)[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Blazer",
        version: match[2],
      };
    }),
    p([/(avant)\s?(?:browser)?[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Avant",
        version: match[2],
      };
    }),
    p([/(slim)\s?(?:browser)?[\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "SlimBrowser",
        version: match[2],
      };
    }),
    p([/(flock)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Flock",
        version: match[2],
      };
    }),

    p([/(rockmelt)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Rockmelt",
        version: match[2],
      };
    }),

    p([/(midori)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Midori",
        version: match[2],
      };
    }),

    p([/(epiphany)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Epiphany",
        version: match[2],
      };
    }),

    p([/(silk)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Silk",
        version: match[2],
      };
    }),

    p([/(skyfire)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Skyfire",
        version: match[2],
      };
    }),
    p([/(ovibrowser)\/([-\w\.]+)/i], (match) => {
      return {
        name: "OviBrowser",
        version: match[2],
      };
    }),
    p([/(bolt)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Bolt",
        version: match[2],
      };
    }),
    p([/(iron)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Iron",
        version: match[2],
      };
    }),
    p([/(vivaldi)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Vivaldi",
        version: match[2],
      };
    }),
    p([/(iridium)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Iridium",
        version: match[2],
      };
    }),
    p([/(phantomjs)\/([-\w\.]+)/i], (match) => {
      return {
        name: "PhantomJS",
        version: match[2],
      };
    }),
    p([/(bowser)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Bowser",
        version: match[2],
      };
    }),
    p([/(quark)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Quark",
        version: match[2],
      };
    }),
    p([/(qupzilla)\/([-\w\.]+)/i], (match) => {
      return {
        name: "QupZilla",
        version: match[2],
      };
    }),
    p([/(falkon)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Falkon",
        version: match[2],
      };
    }),
    p([/(rekonq)\/([-\w\.]+)/i], (match) => {
      return {
        name: "rekonq",
        version: match[2],
      };
    }),
    p([/(puffin)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Puffin",
        version: match[2],
      };
    }),
    p([/(brave)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Brave",
        version: match[2],
      };
    }),
    p([/(whale(?!.+naver))\/([-\w\.]+)/i], (match) => {
      return {
        name: "Whale",
        version: match[2],
      };
    }),
    p([/(qqbrowserlite)\/([-\w\.]+)/i], (match) => {
      return {
        name: "QQBrowserLite",
        version: match[2],
      };
    }),
    p([/(qq)\/([-\w\.]+)/i], (match) => {
      return {
        name: "QQBrowser",
        version: match[2],
      };
    }),
    p([/(duckduckgo)\/([-\w\.]+)/i], (match) => {
      return {
        name: "DuckDuckGo",
        version: match[2],
      };
    }),
    p([/(heytap)browser\/([\d\.]+)/i], (match) => {
      return {
        name: "HeyTap",
        version: match[2],
      };
    }),
    p([/(ovi)browser\/([\d\.]+)/i], (match) => {
      return {
        name: "OviBrowser",
        version: match[2],
      };
    }),
    p([/(weibo)__([\d\.]+)/i], (match) => {
      return {
        name: "Weibo",
        version: match[2],
      };
    }),
    p([/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], (match) => {
      return {
        name: "UCBrowser",
        version: match[1],
      };
    }),
    p(
      [
        /microm.+\bqbcore\/([\w\.]+)/i, // WeChat Desktop for Windows Built-in Browser
        /\bqbcore\/([\w\.]+).+microm/i,
        /micromessenger\/([\w\.]+)/i, // WeChat
      ],
      (match) => {
        return {
          name: "WeChat",
          version: match[1],
        };
      },
    ),
    p([/konqueror\/([\w\.]+)/i], (match) => {
      return {
        name: "Konqueror",
        version: match[1],
      };
    }),
    p([/ya(?:search)?browser\/([\w\.]+)/i], (match) => {
      return {
        name: "Yandex",
        version: match[1],
      };
    }),
    p([/slbrowser\/([\w\.]+)/i], (match) => {
      return {
        name: "Smart Lenovo Browser",
        version: match[1],
      };
    }),
    p([/(avast|avg)\/([\w\.]+)/i], (match) => {
      return {
        name: "Avast Secure Browser",
        version: match[2],
      };
    }),
    p([/coc_coc\w+\/([\w\.]+)/i], (match) => {
      return {
        name: "Coc Coc",
        version: match[1],
      };
    }),
    p([/dolfin\/([\w\.]+)/i], (match) => {
      return {
        name: "Dolphin",
        version: match[1],
      };
    }),
    p([/miuibrowser\/([\w\.]+)/i], (match) => {
      return {
        name: "MIUI Browser",
        version: match[1],
      };
    }),
    p([/\bqihu|(qi?ho?o?|360)browser/i], () => {
      return {
        name: "360 Browser",
      };
    }),
    p([/(oculus)browser\/([\w\.]+)/i], (match) => {
      return {
        name: "Oculus Browser",
        version: match[2],
      };
    }),
    p([/(sailfish)browser\/([\w\.]+)/i], (match) => {
      return {
        name: "Sailfish Browser",
        version: match[2],
      };
    }),
    p([/(huawei)browser\/([\w\.]+)/i], (match) => {
      return {
        name: "Huawei Browser",
        version: match[2],
      };
    }),
    p([/(vivo)browser\/([\w\.]+)/i], (match) => {
      return {
        name: "Vivo Browser",
        version: match[2],
      };
    }),
    p([/samsungbrowser\/([\w\.]+)/i], (match) => {
      return {
        name: "Samsung Internet",
        version: match[1],
      };
    }),
    p([/(comodo_dragon)\/([\w\.]+)/i], (match) => {
      return {
        name: "Comodo Dragon",
        version: match[2],
      };
    }),
    p([/metasr[\/ ]?([\d\.]+)/i], (match) => {
      return {
        name: "Sogou Explorer",
        version: match[1],
      };
    }),
    p([/(sogou)mo\w+\/([\d\.]+)/i], (match) => {
      return {
        name: "Sogou Mobile",
        version: match[2],
      };
    }),
    p([/(electron)\/([\w\.]+) safari/i], (match) => {
      return {
        name: "Electron",
        version: match[2],
      };
    }),
    p([/(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i], (match) => {
      return {
        name: "Tesla",
        version: match[2],
      };
    }),
    p([/m?(qqbrowser)[\/ ]?([\w\.]+)/i], (match) => {
      return {
        name: "QQBrowser",
        version: match[2],
      };
    }),
    p([/m?(2345Explorer)[\/ ]?([\w\.]+)/i], (match) => {
      return {
        name: "2345Explorer",
        version: match[2],
      };
    }),
    p([/(lbbrowser)/i], () => {
      return {
        name: "LBBROWSER",
      };
    }),
    p([/(Klarna)\/([\w\.]+)/i], (match) => {
      return {
        name: "Klarna",
        version: match[2],
      };
    }),
    p([/(kakao(?:talk|story))[\/ ]([\w\.]+)/i], (match) => {
      return {
        name: "KakaoTalk",
        version: match[2],
      };
    }),
    p([/(naver)\(.*?(\d+\.[\w\.]+).*\)/i], (match) => {
      return {
        name: "Naver",
        version: match[2],
      };
    }),

    p([/(omniweb)\/v?([\w\.]+)/i], (match) => {
      return {
        name: "OmniWeb",
        version: match[2],
      };
    }),

    p([/(arora)\/v?([\w\.]+)/i], (match) => {
      return {
        name: "Arora",
        version: match[2],
      };
    }),

    p([/(tizen ?browser)\/v?([\w\.]+)/i], (match) => {
      return {
        name: "Tizen Browser",
        version: match[2],
      };
    }),

    p([/(nokia ?browser)\/v?([\w\.]+)/i], (match) => {
      return {
        name: "Nokia Browser",
        version: match[2],
      };
    }),

    p([/(navigator|netscape\d?)\/([-\w\.]+)/i], (match) => {
      return {
        name: "Netscape",
        version: match[2],
      };
    }),

    p([/ekiohf.+(flow)\/([\w\.]+)/i], (match) => {
      return {
        name: "Flow",
        version: match[2],
      };
    }),
    p([/(swiftfox)/i], () => {
      return {
        name: "Swiftfox",
      };
    }),
    p([/(icedragon)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "IceDragon",
        version: match[2],
      };
    }),
    p([/(iceweasel)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "IceWeasel",
        version: match[2],
      };
    }),
    p([/(camino)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "Camino",
        version: match[2],
      };
    }),
    p([/(chimera)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "Chimera",
        version: match[2],
      };
    }),
    p([/(fennec)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "Fennec",
        version: match[2],
      };
    }),
    p([/(maemo browser)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "Maemo Browser",
        version: match[2],
      };
    }),
    p([/(conkeror|klar)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "Minimo",
        version: match[2],
      };
    }),
    p([/(conkeror)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "Conkeror",
        version: match[2],
      };
    }),
    p([/(klar)[\/ ]?([\w\.\+]+)/i], (match) => {
      return {
        name: "Klar",
        version: match[2],
      };
    }),
    p([/(seamonkey)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "SeaMonkey",
        version: match[2],
      };
    }),
    p([/(k-meleon)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "K-Meleon",
        version: match[2],
      };
    }),
    p([/(icecat)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "IceCat",
        version: match[2],
      };
    }),
    p([/(iceape)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "IceApe",
        version: match[2],
      };
    }),
    p([/(firebird)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "Firebird",
        version: match[2],
      };
    }),
    p([/(phoenix)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "Phoenix",
        version: match[2],
      };
    }),
    p([/(palemoon)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "PaleMoon",
        version: match[2],
      };
    }),
    p([/(basilisk)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "Basilisk",
        version: match[2],
      };
    }),
    p([/(waterfox)\/([-\w\.]+)$/i], (match) => {
      return {
        name: "Waterfox",
        version: match[2],
      };
    }),
    p([/(polaris)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Polaris",
        version: match[2],
      };
    }),
    p([/(lynx)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Lynx",
        version: match[2],
      };
    }),
    p([/(dillo)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Dillo",
        version: match[2],
      };
    }),
    p([/(icab)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "iCab",
        version: match[2],
      };
    }),
    p([/(doris)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Doris",
        version: match[2],
      };
    }),
    p([/(amaya)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Amaya",
        version: match[2],
      };
    }),
    p([/(w3m)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "w3m",
        version: match[2],
      };
    }),
    p([/(netsurf)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Netsurf",
        version: match[2],
      };
    }),
    p([/(sleipnir)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Sleipnir",
        version: match[2],
      };
    }),
    p([/(obigo)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Obigo",
        version: match[2],
      };
    }),
    p([/(mosaic)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Mosaic",
        version: match[2],
      };
    }),
    p([/(go[\. ]?browser)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "Go Browser",
        version: match[2],
      };
    }),
    p([/(ice[\. ]?browser)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "ICE Browser",
        version: match[2],
      };
    }),
    p([/(up[\. ]?browser)[-\/ ]?v?([\w\.]+)/i], (match) => {
      return {
        name: "UP.Browser",
        version: match[2],
      };
    }),
    p([/(links) \(([\w\.]+)/i], (match) => {
      return {
        name: "Links",
        version: match[2],
      };
    }),
    p([/panasonic;(viera)/i], (match) => {
      return {
        name: "Viera",
        version: match[1],
      };
    }),
    p([/(cobalt)\/([\w\.]+)/i], (match) => {
      return {
        name: "Cobalt",
        version: match[2]?.replace(/[^\d\.]+./, ""),
      };
    }),
    p([/(aqualung)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Aqualung",
        version: match[2],
      };
    }),
    p([/(lyssna)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Lyssna",
        version: match[2],
      };
    }),
    p([/(htc_one_s)\/([\d\.]+)/i], (match) => {
      return {
        name: "HTC One S",
        version: match[2],
      };
    }),

    p([/(nero home)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Nero Home",
        version: match[2],
      };
    }),
    p([/(nero scout)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Nero Scout",
        version: match[2],
      };
    }),
    p([/(nokia\d+)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Nokia",
        version: match[2],
      };
    }),
  ],
  [
    // Media Players

    p([/(bsplayer)\/([\w\.-]+)/i], (match) => {
      return {
        name: "BSPlayer",
        version: match[2],
      };
    }),
    p([/(ares)\s([\w\.-]+)/i], (match) => {
      return {
        name: "Ares",
        version: match[2],
      };
    }),
    p([/(ossproxy)\s([\w\.-]+)/i], (match) => {
      return {
        name: "OSSProxy",
        version: match[2],
      };
    }),
    p([/(audacious)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Audacious",
        version: match[2],
      };
    }),
    p([/(audimusicstream)\/([\w\.-]+)/i], (match) => {
      return {
        name: "AudiMusicStream",
        version: match[2],
      };
    }),
    p([/(amarok)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Amarok",
        version: match[2],
      };
    }),
    p([/(bass)\/([\w\.-]+)/i], (match) => {
      return {
        name: "BASS",
        version: match[2],
      };
    }),
    p([/(core)\/([\w\.-]+)/i], (match) => {
      return {
        name: "OpenCORE",
        version: match[2],
      };
    }),
    p([/(dalvik)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Dalvik",
        version: match[2],
      };
    }),
    p([/(gnomemplayer)\/([\w\.-]+)/i], (match) => {
      return {
        name: "GnomeMplayer",
        version: match[2],
      };
    }),
    p([/(music on console)\/([\w\.-]+)/i], (match) => {
      return {
        name: "MoC",
        version: match[2],
      };
    }),
    p([/(nsplayer)\/([\w\.-]+)/i], (match) => {
      return {
        name: "NSPlayer",
        version: match[2],
      };
    }),
    p([/(psp-internetradioplayer)\/([\w\.-]+)/i], (match) => {
      return {
        name: "PSP-InternetRadioPlayer",
        version: match[2],
      };
    }),
    p([/(videos)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Videos",
        version: match[2],
      };
    }),
    p([/(clementine)\s([\w\.-]+)/i], (match) => {
      return {
        name: "Clementine",
        version: match[2],
      };
    }),
    p([/(music player daemon)\s([\w\.-]+)/i], (match) => {
      return {
        name: "MPD",
        version: match[2],
      };
    }),
    p(
      [/(lg player)\s([\d\.]+)/i, /player\/(lg player)\s([\w\.-]+)/i],
      (match) => {
        return {
          name: "LG Player",
          version: match[2],
        };
      },
    ),
    p(
      [
        /(nexplayer)\s([\d\.]+)/i,
        /player\/(nexplayer)\s([\w\.-]+)/i,
        /(nexplayer)\s([\w\.-]+)/i,
      ],
      (match) => {
        return {
          name: "NexPlayer",
          version: match[2],
        };
      },
    ),
    p([/(flrp)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Flip Player",
        version: match[2],
      };
    }),
    p([/(fstream)/i], () => {
      return {
        name: "FStream",
      };
    }),
    p([/(nativehost)/i], () => {
      return {
        name: "NativeHost",
      };
    }),
    p([/(gstreamer) souphttpsrc.+libsoup\/([\w\.-]+)/i], (match) => {
      return {
        name: "Gstreamer",
        version: match[2],
      };
    }),
    p([/(htc streaming player)\s[\w_]+\s\/\s([\d\.]+)/i], (match) => {
      return {
        name: "HTC Streaming Player",
        version: match[2],
      };
    }),
    p(
      [
        /(mplayer)(?:\s|\/)(?:(?:sherpya-){0,1}svn)(?:-|\s)(r\d+(?:-\d+[\w\.-]+))/i,
      ],
      (match) => {
        return {
          name: "MPlayer SVN",
          version: match[2],
        };
      },
    ),
    p(
      [/(mplayer)(?:\s|\/)([\w\.-]+)/i, /(mplayer) unknown-([\w\.\-]+)/i],
      (match) => {
        return {
          name: "MPlayer",
          version: match[2],
        };
      },
    ),
    p([/(mplayer)/i], () => {
      return {
        name: "MPlayer",
      };
    }),
    p([/(yourmuze)/i], () => {
      return {
        name: "YourMuze",
      };
    }),
    p([/(media player classic)/i], () => {
      return {
        name: "Media Player CLassic",
      };
    }),
    p([/(nero showtime)/i], () => {
      return {
        name: "Nero ShowTime",
      };
    }),
    p([/\s(songbird)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Songbird",
        version: match[2],
      };
    }),
    p(
      [
        /(winamp)\s([\w\.-]+)/i,
        /(winamp)mpeg\/([\w\.-]+)/i,
        /(winamp)3 version ([\w\.-]+)/i,
      ],
      (match) => {
        return {
          name: "Winamp",
          version: match[2],
        };
      },
    ),
    p([/(tapinradio)/i], () => {
      return {
        name: "Tap In Radio",
      };
    }),
    p([/(tunein radio)/i], () => {
      return {
        name: "TuneIn",
      };
    }),
    p([/(winamp)/i], () => {
      return {
        name: "Winamp",
      };
    }),
    p([/(inlight radio)/i], () => {
      return {
        name: "Inlight Radio",
      };
    }),
    p([/(quicktime)\/([\w\.-]+)/i], (match) => {
      return {
        name: "QuickTime",
        version: match[2],
      };
    }),
    p([/(rma)\/([\w\.-]+)/i], (match) => {
      return {
        name: "RealMedia",
        version: match[2],
      };
    }),
    p([/(radioapp)\/([\w\.-]+)/i], (match) => {
      return {
        name: "RadioApp",
        version: match[2],
      };
    }),
    p([/(radioclientapplication)\/([\w\.-]+)/i], (match) => {
      return {
        name: "RadioClientApplication",
        version: match[2],
      };
    }),
    p([/(soundtap)\/([\w\.-]+)/i], (match) => {
      return {
        name: "SoundTap",
        version: match[2],
      };
    }),
    p([/(totem)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Totem",
        version: match[2],
      };
    }),
    p([/(stagefright)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Stagefright",
        version: match[2],
      };
    }),
    p([/(streamium)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Streamium",
        version: match[2],
      };
    }),
    p([/(smp)([\d\.]+)/i], (match) => {
      return {
        name: "SMP",
        version: match[2],
      };
    }),
    p(
      [/(vlc) media player - version ([\w\.]+)/i, /(vlc)\/([\w\.-]+)/i],
      (match) => {
        return {
          name: "VLC",
          version: match[2],
        };
      },
    ),
    p([/(xbmc)\/([\w\.-]+)/i], (match) => {
      return {
        name: "XBMC",
        version: match[2],
      };
    }),
    p([/(gvfs)\/([\w\.-]+)/i], (match) => {
      return {
        name: "gvfs",
        version: match[2],
      };
    }),
    p([/(xine)\/([\w\.-]+)/i], (match) => {
      return {
        name: "Xine",
        version: match[2],
      };
    }),
    p([/(xmms)\/([\w\.-]+)/i], (match) => {
      return {
        name: "XMMS",
        version: match[2],
      };
    }),
    p([/(irapp)\/([\w\.-]+)/i], (match) => {
      return {
        name: "irapp",
        version: match[2],
      };
    }),
    p([/(foobar2000)\/([\d\.]+)/i], (match) => {
      return {
        name: "Foobar2000",
        version: match[2],
      };
    }),
    p([/(itunes)\/([\d\.]+)/i], (match) => {
      return {
        name: "iTunes",
        version: match[2],
      };
    }),
    p(
      [/(wmplayer)\/([\w\.-]+)/i, /(windows-media-player)\/([\w\.-]+)/i],
      (match) => {
        return {
          name: "Windows Media Player",
          version: match[2],
        };
      },
    ),
    p(
      [
        /windows\/([\w\.-]+) upnp\/[\d\.]+ dlnadoc\/[\d\.]+ (home media server)/i,
      ],
      (match) => {
        return {
          name: "Windows Media Server",
          version: match[1],
        };
      },
    ),
    p([/(radio.(?:de|at|fr))\s([\d\.]+)/i, /(rad.io)\s([\d\.]+)/i], (match) => {
      return {
        name: "Rad.io",
        version: match[2],
      };
    }),
    p([/(com\.riseupradioalarm)\/([\d\.]*)/i], (match) => {
      return {
        name: "RiseUP Radio Alarm",
        version: match[2],
      };
    }),
  ],
  [
    // Non-browser apps
    p([/chatlyio\/([\d\.]+)/i], (match) => {
      return {
        name: "Slack",
        version: match[1],
        type: "app",
      };
    }),

    p([/\[(linkedin)app\]/i], () => {
      return {
        name: "LinkedIn",
        type: "app",
      };
    }),
    p(
      [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
      (match) => {
        return {
          name: "Facebook",
          version: match[2],
          type: "app",
        };
      },
    ),
    p([/safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i], (match) => {
      return {
        name: "Line",
        version: match[2],
        type: "app",
      };
    }),
    p([/(alipay)client\/([\w\.]+)/i], (match) => {
      return {
        name: "Alipay",
        version: match[2],
        type: "app",
      };
    }),
    p([/(instagram)[\/ ]([-\w\.]+)/i], (match) => {
      return {
        name: "Instagram",
        version: match[2],
        type: "app",
      };
    }),
    p([/(snapchat)[\/ ]([-\w\.]+)/i], (match) => {
      return {
        name: "Snapchat",
        version: match[2],
        type: "app",
      };
    }),
    p([/\bgsa\/([\w\.]+) .*safari\//i], (match) => {
      return {
        name: "GSA",
        version: match[1],
        type: "app",
      };
    }),
    p([/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i], (match) => {
      return {
        name: "TikTok",
        version: match[1],
        type: "app",
      };
    }),
  ],
  [
    // Bots
    p([/((?:google)bot(?:[\-imagevdo]{0,6}))\/([\w\.]+)/i], (match) => {
      return {
        name: "Google",
        version: match[2],
        type: "bot",
      };
    }),
    p(
      [/((?:bing)bot(?:[\-imagevdo]{0,6})|bingpreview)\/([\w\.]+)/i],
      (match) => {
        return {
          name: "Bing",
          version: match[2],
          type: "bot",
        };
      },
    ),
    p([/((?:msn)bot(?:[\-imagevdo]{0,6}))\/([\w\.]+)/i], (match) => {
      return {
        name: "msn",
        version: match[2],
        type: "bot",
      };
    }),
    p([/((?:facebook)bot(?:[\-imagevdo]{0,6}))\/([\w\.]+)/i], (match) => {
      return {
        name: "Facebook",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(gptbot)\/([\w\.]+)/i], (match) => {
      return {
        name: "GPTBot",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(slack(?:bot)?(?:-imgproxy|-linkexpanding)?) ([\w\.]+)/i], (match) => {
      return {
        name: "Slack",
        version: match[2],
        type: "bot",
      };
    }),
    p([/\b(axios)\/([\w\.]+)/i], (match) => {
      return {
        name: "Axios",
        version: match[2],
        type: "bot",
      };
    }),
    p([/\b(jsdom)\/([\w\.]+)/i], (match) => {
      return {
        name: "jsdom",
        version: match[2],
        type: "bot",
      };
    }),
    p([/\b(scrapy)\/([\w\.]+)/i], (match) => {
      return {
        name: "Scrapy",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(wget)\/([\w\.-_]+)/i], (match) => {
      return {
        name: "wget",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(curl)\/([\w\.]+)/i, /(libcurl)\/([\w\.-_]+)/i], (match) => {
      return {
        name: "cURL",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(lynx)\/([\w\.]+)/i], (match) => {
      return {
        name: "Lynx",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(queryseekspider)/i], () => {
      return {
        name: "QuerySeekSpider",
        type: "bot",
      };
    }),
    p([/(ia-archiver|facebookexternalhit)/i], () => {
      return {
        name: "IA Archiver",
        type: "bot",
      };
    }),
    p([/(facebookexternalhit)/i], () => {
      return {
        name: "facebookexternalhit",
        type: "bot",
      };
    }),
    p([/(java)\/([\w\.-_]+)/i], (match) => {
      return {
        name: "Java",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(python-urllib)\/([\w\.-_]+)/i], (match) => {
      return {
        name: "urllib",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(python-requests)\/([\w\.-_]+)/i], (match) => {
      return {
        name: "requests",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(lavf)([\d\.]+)/i], (match) => {
      return {
        name: "ffMPEG",
        version: match[2],
        type: "bot",
      };
    }),
    p([/(ocms-bot)/i], () => {
      return {
        name: "OCMS-bot",
        type: "bot",
      };
    }),
  ],
  [
    // Email Clients
    p([/(microsoft outlook)[\s\/]([\w\.]+)/i], (match) => {
      return {
        name: "Microsoft Outlook",
        version: match[2],
        type: "email",
      };
    }),
    p([/(thunderbird)[\s\/]([\w\.]+)/i], (match) => {
      return {
        name: "Thunderbird",
        version: match[2],
        type: "email",
      };
    }),
  ],
].flatMap((b, i) => {
  return b.map((p) => {
    p.specificity ||= i;
    return p;
  });
});
