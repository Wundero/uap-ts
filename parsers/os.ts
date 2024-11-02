/* eslint-disable no-useless-escape */
import type { OS } from "../constants";
import { parsersFromRegexes } from "./index";
import { WINDOWS_VERSION_MAP } from "../constants";

const p = parsersFromRegexes<"os">;

/**
 * Collection of parsers for operating systems
 */
export const parsers = [
  // Desktop
  [
    p([/microsoft (windows) (vista|xp)/i], (match) => {
      return {
        name: "Windows",
        version: match[2],
        typeGuess: "desktop",
      };
    }),
    p(
      [
        /windows nt 6\.2; (arm)/i, // Windows RT
        /windows[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i,
        /(?:win(?=3|9|n)|win 9x )([nt\d\.]+)/i,
      ],
      (match) => {
        let version = match[1];
        if (version && version in WINDOWS_VERSION_MAP) {
          version =
            WINDOWS_VERSION_MAP[version as keyof typeof WINDOWS_VERSION_MAP];
        }
        return {
          name: "Windows",
          typeGuess: "desktop",
          version,
        };
      },
    ),
    p(
      [
        /(mac os x) ?([\w\. ]*)/i,
        /(macintosh|mac_powerpc\b)(?!.+haiku)/i, // Mac OS
      ],
      (match) => {
        return {
          name: "macOS",
          version: match[2]?.replace(/_/g, "."),
          typeGuess: "desktop",
        };
      },
    ),
    p([/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], (match) => {
      return {
        name: "Chrome OS",
        version: match[2],
        typeGuess: "desktop",
      };
    }),
    p(
      [
        /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, // Joli/Palm
        /(mint)[\/\(\) ]?(\w*)/i, // Mint
        /(mageia|vectorlinux)[; ]/i, // Mageia/VectorLinux
        /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i,
        // Ubuntu/Debian/SUSE/Gentoo/Arch/Slackware/Fedora/Mandriva/CentOS/PCLinuxOS/RedHat/Zenwalk/Linpus/Raspbian/Plan9/Minix/RISCOS/Contiki/Deepin/Manjaro/elementary/Sabayon/Linspire
        /(hurd|linux) ?([\w\.]*)/i, // Hurd/Linux
        /(gnu) ?([\w\.]*)/i, // GNU
        /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, // FreeBSD/NetBSD/OpenBSD/PC-BSD/GhostBSD/DragonFly
        /(haiku) (\w+)/i, // Haiku
        /((?:open)?solaris)[-\/ ]?([\w\.]*)/i, // Solaris
        /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, // AIX
        /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, // BeOS/OS2/AmigaOS/MorphOS/OpenVMS/Fuchsia/HP-UX/SerenityOS
        /(unix) ?([\w\.]*)/i, // UNIX
      ],
      (match) => {
        return {
          name: match[1] as OS | undefined,
          version: match[2],
          typeGuess: "desktop",
        };
      },
    ),
    p([/(sunos) ?([\w\.\d]*)/i], (match) => {
      return {
        name: "Solaris",
        version: match[2],
        typeGuess: "desktop",
      };
    }),
  ],
  // Mobile
  [
    p([/(windows (?:phone(?: os)?))[\/ ]?([\d\.\w ]*)/i], (match) => {
      let version = match[2];
      if (version && version in WINDOWS_VERSION_MAP) {
        version =
          WINDOWS_VERSION_MAP[version as keyof typeof WINDOWS_VERSION_MAP];
      }
      return {
        name: "Windows Phone",
        typeGuess: "mobile",
        version,
      };
    }),
    p([/(windows (?:mobile))[\/ ]?([\d\.\w ]*)/i], (match) => {
      let version = match[2];
      if (version && version in WINDOWS_VERSION_MAP) {
        version =
          WINDOWS_VERSION_MAP[version as keyof typeof WINDOWS_VERSION_MAP];
      }
      return {
        name: "Windows Mobile",
        typeGuess: "mobile",
        version,
      };
    }),
    p(
      [
        /ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, // iOS
        /(?:ios;fbsv\/|iphone.+ios[\/ ])([\d\.]+)/i,
        /cfnetwork\/.+darwin/i,
      ],
      (match) => {
        return {
          name: "iOS",
          typeGuess: "mobile",
          version: match[1]?.replace(/_/g, "."),
        };
      },
    ),
    p([/(android)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Android",
        typeGuess: "mobile",
        version: match[2],
      };
    }),
    p([/(webos)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "WebOS",
        typeGuess: "smarttv",
        version: match[2],
      };
    }),
    p([/(qnx)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "QNX",
        typeGuess: "mobile",
        version: match[2],
      };
    }),
    p([/(bada)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Bada",
        typeGuess: "mobile",
        version: match[2],
      };
    }),
    p([/(rim tablet os)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "RIM Tablet OS",
        typeGuess: "tablet",
        version: match[2],
      };
    }),
    p([/(maemo)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Maemo",
        typeGuess: "mobile",
        version: match[2],
      };
    }),
    p([/(meego)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "MeeGo",
        typeGuess: "mobile",
        version: match[2],
      };
    }),
    p([/(sailfish)[-\/ ]?([\w\.]*)/i], (match) => {
      return {
        name: "Sailfish",
        typeGuess: "mobile",
        version: match[2],
      };
    }),
    p([/(blackberry)\w*\/([\w\.]*)/i], (match) => {
      return {
        name: "BlackBerry",
        version: match[2],
        typeGuess: "mobile",
      };
    }),
    p([/(tizen)[\/ ]([\w\.]+)/i], (match) => {
      return {
        name: "Tizen",
        version: match[2],
        typeGuess: "smarttv",
      };
    }),
    p([/(kaios)[\/ ]([\w\.]+)/i], (match) => {
      return {
        name: "KaiOS",
        typeGuess: "smarttv",
        version: match[2],
      };
    }),
    p(
      [
        /\((series40);/i, // Series 40
      ],
      () => {
        return {
          name: "Series40",
          typeGuess: "mobile",
        };
      },
    ),
    p([/\(bb(10);/i], (match) => {
      return {
        name: "BlackBerry",
        version: match[1],
        typeGuess: "mobile",
      };
    }),
    p(
      [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
      (match) => {
        return {
          name: "Symbian",
          version: match[1],
          typeGuess: "mobile",
        };
      },
    ),
    p(
      [/mozilla\/[\d\.]+ \((?:mobile(?:; [\w ]+)?); rv:.+ gecko\/([\w\.]+)/i],
      (match) => {
        return {
          name: "Firefox OS",
          version: match[1],
          typeGuess: "mobile",
        };
      },
    ),
    p([/mozilla\/[\d\.]+ \((?:tablet); rv:.+ gecko\/([\w\.]+)/i], (match) => {
      return {
        name: "Firefox OS",
        version: match[1],
        typeGuess: "tablet",
      };
    }),
    p([/mozilla\/[\d\.]+ \((?:tv); rv:.+ gecko\/([\w\.]+)/i], (match) => {
      return {
        name: "Firefox OS",
        version: match[1],
        typeGuess: "smarttv",
      };
    }),
    p(
      [
        /web0s;.+rt(tv)/i,
        /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i, // WebOS
      ],
      (match) => {
        return {
          name: "WebOS",
          version: match[1],
          typeGuess: "smarttv",
        };
      },
    ),
    p([/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], (match) => {
      return {
        name: "watchOS",
        version: match[1],
        typeGuess: "wearable",
      };
    }),
    p([/crkey\/([\d\.]+)/i], (match) => {
      return {
        name: "Chromecast",
        version: match[1],
        typeGuess: "embedded",
      };
    }),
    p([/droid ([\w\.]+)\b.+(android[- ]x86)/i], (match) => {
      return {
        name: "Android-x86",
        version: match[1],
        typeGuess: "mobile",
      };
    }),
    p([/droid ([\w\.]+)\b.+(harmonyos)/i], (match) => {
      return {
        name: "HarmonyOS",
        version: match[1],
        typeGuess: "mobile",
      };
    }),
    p([/panasonic;(viera)/i], (match) => {
      return {
        name: "Viera",
        version: match[2],
        typeGuess: "smarttv",
      };
    }),
    p(
      [
        /(netrange)mmh/i, // Netrange
      ],
      (match) => {
        return {
          name: "NetRange",
          version: match[2],
          typeGuess: "smarttv",
        };
      },
    ),
    p(
      [
        /(nettv)\/(\d+\.[\w\.]+)/i, // NetTV
      ],
      (match) => {
        return {
          name: "NetTV",
          version: match[2],
          typeGuess: "smarttv",
        };
      },
    ),
    p([/(nintendo) (\w+)/i], (match) => {
      return {
        name: "Nintendo",
        version: match[2],
        typeGuess: "console",
      };
    }),
    p([/(nintendo|playstation) (\w+)/i], (match) => {
      return {
        name: "PlayStation",
        version: match[2],
        typeGuess: "console",
      };
    }),
    p([/(xbox); +xbox ([^\);]+)/i], (match) => {
      return {
        name: "Xbox",
        version: match[2],
        typeGuess: "console",
      };
    }),
  ],
].flatMap((b, i) => {
  return b.map((p) => {
    p.specificity ||= i;
    return p;
  });
});
