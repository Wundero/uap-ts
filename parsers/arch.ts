/* eslint-disable no-useless-escape */
import { parsersFromRegexes } from "./index";

const p = parsersFromRegexes<"cpu">;

/**
 * Collection of parsers for CPU architecture
 */
export const parsers = [
  [
    p([/\b(?:(amd|x|x86[-_]?|wow|win)64)\b/i], () => {
      return { architecture: "amd64" };
    }),
    p([/(ia32(?=;))/i, /((?:i[346]|x)86)[;\)]/i], () => {
      return { architecture: "ia32" };
    }),
    p([/\b(aarch64|arm(v?8e?l?|_?64))\b/i], () => {
      return { architecture: "arm64" };
    }),
    p([/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], () => {
      return { architecture: "armhf" };
    }),
    p([/windows (ce|mobile); ppc;/i], () => {
      return { architecture: "arm" };
    }),
    p([/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], () => {
      return {
        architecture: "ppc",
      };
    }),
    p([/(sun4\w)[;\)]/i], () => {
      return { architecture: "sparc" };
    }),
    p([/(?:ia64(?=;))/i], () => {
      return { architecture: "ia64" };
    }),
    p([/(?:avr32)/i], () => {
      return { architecture: "avr32" };
    }),
    p([/(68k(?=\)))/i], () => {
      return { architecture: "68k" };
    }),
    p([/\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)/i], () => {
      return { architecture: "arm64" };
    }),
    p([/(?=atmel )avr/i], () => {
      return { architecture: "avr" };
    }),
    p([/(?:irix)\b/i], () => {
      return { architecture: "irix" };
    }),
    p([/(?:irix)(?:64)\b/i], () => {
      return { architecture: "irix64" };
    }),
    p([/(?:mips)\b/i], () => {
      return { architecture: "mips" };
    }),
    p([/(?:mips)(?:64)\b/i], () => {
      return { architecture: "mips64" };
    }),
    p([/(?:sparc)\b/i], () => {
      return { architecture: "sparc" };
    }),
    p([/(?:sparc)(?:64)\b/i], () => {
      return { architecture: "sparc64" };
    }),
    p([/(pa-risc)/i], () => {
      return { architecture: "pa-risc" };
    }),
  ],
].flatMap((b, i) => {
  return b.map((p) => {
    p.specificity ||= i;
    return p;
  });
});
