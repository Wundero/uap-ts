/* eslint-disable no-useless-escape */
import { parsersFromRegexes } from ".";

const p = parsersFromRegexes<"engine">;

export const parsers = [
  [
    // Uncommon
    p([/(presto)\/([\w\.]+)/i], (match) => {
      return {
        name: "Presto",
        version: match[2],
      };
    }),
    p([/(webkit)\/([\w\.]+)/i], (match) => {
      return {
        name: "WebKit",
        version: match[2],
      };
    }),
    p([/(trident)\/([\w\.]+)/i], (match) => {
      return {
        name: "Trident",
        version: match[2],
      };
    }),
    p([/(netfront)\/([\w\.]+)/i], (match) => {
      return {
        name: "NetFront",
        version: match[2],
      };
    }),
    p([/(netsurf)\/([\w\.]+)/i], (match) => {
      return {
        name: "NetSurf",
        version: match[2],
      };
    }),
    p([/(amaya)\/([\w\.]+)/i], (match) => {
      return {
        name: "Amaya",
        version: match[2],
      };
    }),
    p([/(lynx)\/([\w\.]+)/i], (match) => {
      return {
        name: "Lynx",
        version: match[2],
      };
    }),
    p([/(w3m)\/([\w\.]+)/i], (match) => {
      return {
        name: "w3m",
        version: match[2],
      };
    }),
    p([/(goanna)\/([\w\.]+)/i], (match) => {
      return {
        name: "Goanna",
        version: match[2],
      };
    }),
    p([/ekioh(flow)\/([\w\.]+)/i], (match) => {
      return {
        name: "Flow",
        version: match[2],
      };
    }),
    p([/(khtml)[\/ ]\(?([\w\.]+)/i], (match) => {
      return {
        name: "KHTML",
        version: match[2],
      };
    }),
    p([/(tasman)[\/ ]\(?([\w\.]+)/i], (match) => {
      return {
        name: "Tasman",
        version: match[2],
      };
    }),
    p([/(links)[\/ ]\(?([\w\.]+)/i], (match) => {
      return {
        name: "Links",
        version: match[2],
      };
    }),
    p([/(icab)[\/ ]([23]\.[\d\.]+)/i], (match) => {
      return {
        name: "iCab",
        version: match[2],
      };
    }),
    p([/\b(libweb)/i], (match) => {
      return {
        name: "LibWeb",
        version: match[2],
      };
    }),
    p([/windows.+ edge\/([\w\.]+)/i], (match) => {
      return {
        name: "EdgeHTML",
        version: match[1],
      };
    }),
  ],
  [
    // Common
    p([/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], (match) => {
      return {
        name: "Blink",
        version: match[1],
      };
    }),
    p([/rv\:([\w\.]{1,9})\b.+(gecko)/i], (match) => {
      return {
        name: "Gecko",
        version: match[1],
      };
    }),
  ],
].flatMap((b, i) => {
  return b.map((p) => {
    p.specificity ||= i;
    return p;
  });
});
