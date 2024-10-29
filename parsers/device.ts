/* eslint-disable no-useless-escape */
import type { Vendor } from "../constants";
import { parsersFromRegexes } from "./index";

const p = parsersFromRegexes<"device">;

export const parsers = [
  // Mobile
  [
    // Apple
    p([/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i], (match) => {
      return {
        model: match[1],
        vendor: "Apple",
        type: "mobile",
      };
    }),
    p(
      [
        /\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i,
        /samsung[- ]([-\w]+)/i,
        /sec-(sgh\w+)/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Samsung",
          type: "mobile",
        };
      },
    ),
    p([/(microsoft); (lumia[\w ]+)/i], (match) => {
      return {
        model: match[2],
        vendor: "Microsoft",
        type: "mobile",
      };
    }),
    p([/(kin\.[onetw]{3})/i], (match) => {
      return {
        model: match[1]?.replace(/\./g, " "),
        vendor: "Microsoft",
        type: "mobile",
      };
    }),
    p([/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], (match) => {
      return {
        model: match[1],
        vendor: "Google",
        type: "mobile",
      };
    }),
    p(
      [
        /droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Sony",
          type: "mobile",
        };
      },
    ),
    p(
      [
        / (kb2005|in20[12]5|be20[12][59])\b/i,
        /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "OnePlus",
          type: "mobile",
        };
      },
    ),
    p([/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], (match) => {
      return {
        model: match[1] && `Fire Phone ${match[1]}`,
        vendor: "Amazon",
        type: "mobile",
      };
    }),
    p(
      [
        /\b((?:bb[a-f]|st[hv])100-\d)/i,
        /\(bb10; (\w+)/i, // BlackBerry 10
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "BlackBerry",
          type: "mobile",
        };
      },
    ),
    p([/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], (match) => {
      return {
        model: match[1],
        vendor: "ASUS",
        type: "mobile",
      };
    }),
    p([/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "HTC",
        type: "mobile",
      };
    }),
    p([/(zte)[- ]([\w ]+?)(?: bui|\/|\))/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "ZTE",
        type: "mobile",
      };
    }),
    p([/; ((?:power )?armor(?:[\w ]{0,8}))(?: bui|\))/i], (match) => {
      return {
        model: match[1],
        vendor: "Ulefone",
        type: "mobile",
      };
    }),
    p([/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], (match) => {
      return {
        model: match[1],
        vendor: "Zebra",
        type: "mobile",
      };
    }),
    p([/droid [\d\.]+; (fp\du?)(?: b|\))/i], (match) => {
      return {
        model: match[1],
        vendor: "Fairphone",
        type: "mobile",
      };
    }),
    p([/(sprint) (\w+)/i], (match) => {
      return {
        model: match[2],
        vendor: "Sprint",
        type: "mobile",
      };
    }),
    p([/(blackberry)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "BlackBerry",
        type: "mobile",
      };
    }),
    p([/(benq)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "BenQ",
        type: "mobile",
      };
    }),
    p([/(palm(?=\-))[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Palm",
        type: "mobile",
      };
    }),
    p([/(sonyericsson)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Sony",
        type: "mobile",
      };
    }),
    p([/(acer)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Acer",
        type: "mobile",
      };
    }),
    p([/(asus)[-_ ]?([-\w]*)/i, /(asus)-?(\w+)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "ASUS",
        type: "mobile",
      };
    }),
    p([/(dell)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Dell",
        type: "mobile",
      };
    }),
    p([/(meizu)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Meizu",
        type: "mobile",
      };
    }),
    p([/(motorola)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Motorola",
        type: "mobile",
      };
    }),
    p([/(polytron)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Polytron",
        type: "mobile",
      };
    }),
    p([/(infinix)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Infinix",
        type: "mobile",
      };
    }),
    p([/(tecno)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Tecno",
        type: "mobile",
      };
    }),
    p([/(hp) ([\w ]+\w)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "HP",
        type: "mobile",
      };
    }),
    p([/(alcatel)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Alcatel",
        type: "mobile",
      };
    }),
    p([/(geeksphone)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "GeeksPhone",
        type: "mobile",
      };
    }),
    p([/(nexian)[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Nexian",
        type: "mobile",
      };
    }),
    p([/(panasonic(?!(?:;|\.)))[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Panasonic",
        type: "mobile",
      };
    }),
    p([/(sony(?!-bra))[-_ ]?([-\w]*)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Sony",
        type: "mobile",
      };
    }),
    p([/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], (match) => {
      return {
        model: match[1],
        vendor: "Acer",
        type: "mobile",
      };
    }),
    p([/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], (match) => {
      return {
        model: match[1],
        vendor: "Meizu",
        type: "mobile",
      };
    }),
    p([/(jolla)/i], (match) => {
      return {
        model: match[1],
        vendor: "Jolla",
        type: "mobile",
      };
    }),
    p([/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], (match) => {
      return {
        model: match[1],
        vendor: "Sharp",
        type: "mobile",
      };
    }),
    p(
      [
        /(?:huawei|honor)([-\w ]+)[;\)]/i,
        /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Huawei",
          type: "mobile",
        };
      },
    ),
    p(
      [
        /\b(poco[\w ]+|m2\d{3}j\d\d[a-z]{2})(?: bui|\))/i, // Xiaomi POCO
        /\b; (\w+) build\/hm\1/i, // Xiaomi Hongmi 'numeric' models
        /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, // Xiaomi Hongmi
        /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, // Xiaomi Redmi
        /oid[^\)]+; (m?[12][0-389][01]\w{3,6}[c-y])( bui|; wv|\))/i, // Xiaomi Redmi 'numeric' models
        /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i, // Xiaomi Mi
      ],
      (match) => {
        return {
          model: match[1]?.replace(/_/g, " "),
          vendor: "Xiaomi",
          type: "mobile",
        };
      },
    ),
    p(
      [
        /; (\w+) bui.+ oppo/i,
        /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "OPPO",
          type: "mobile",
        };
      },
    ),
    p([/(oppo) ?([\w ]+) bui/i], (match) => {
      return {
        model: match[2],
        vendor: "OPPO",
        type: "mobile",
      };
    }),
    p(
      [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
      (match) => {
        return {
          model: match[1],
          vendor: "Vivo",
          type: "mobile",
        };
      },
    ),
    p([/\b(rmx[1-3]\d{3})(?: bui|;|\))/i], (match) => {
      return {
        model: match[1],
        vendor: "Realme",
        type: "mobile",
      };
    }),
    p(
      [
        /\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i,
        /\bmot(?:orola)?[- ](\w*)/i,
        /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Motorola",
          type: "mobile",
        };
      },
    ),
    p(
      [
        /(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i,
        /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i,
        /\blg-?([\d\w]+) bui/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "LG",
          type: "mobile",
        };
      },
    ),
    p([/(lenovo)[-_ ]?([-\w]+)/i], (match) => {
      return {
        model: match[2]?.replace(/_/g, " "),
        vendor: "Lenovo",
        type: "mobile",
      };
    }),
    p(
      [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
      (match) => {
        return {
          model: match[1]?.replace(/_/g, " "),
          vendor: "Nokia",
          type: "mobile",
        };
      },
    ),
    p([/(u304aa)/i], (match) => {
      return {
        model: match[1],
        vendor: "AT&T",
        type: "mobile",
      };
    }),
    p([/\bsie-(\w*)/i], (match) => {
      return {
        model: match[1],
        vendor: "Siemens",
        type: "mobile",
      };
    }),
    p([/\b(nx\d{3}j) b/i], (match) => {
      return {
        model: match[1],
        vendor: "ZTE",
        type: "mobile",
      };
    }),
    p([/\b(gen\d{3}) b.+49h/i], (match) => {
      return {
        model: match[1],
        vendor: "Swiss",
        type: "mobile",
      };
    }),
    p([/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], (match) => {
      return {
        model: match[2],
        vendor: "Voice",
        type: "mobile",
      };
    }),
    p([/\b(lvtel\-)?(v1[12]) b/i], (match) => {
      return {
        model: match[2],
        vendor: "LvTel",
        type: "mobile",
      };
    }),
    p([/\b(ph-1) /i], (match) => {
      return {
        model: match[1],
        vendor: "Essential",
        type: "mobile",
      };
    }),
    p(
      [/droid .+?; ([^;]+?)(?: bui|; wv\)|\) applew).+? mobile safari/i],
      (match) => {
        return {
          model: match[1],
          type: "mobile",
        };
      },
    ),
    p([/(android[-\w\. ]{0,9});.+buil/i], (match) => {
      return {
        model: match[1],
        type: "mobile",
      };
    }),
    p(
      [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
      () => {
        return {
          type: "mobile",
        };
      },
    ),
  ],
  // Tablet
  [
    p(
      [
        /\((ipad);[-\w\),; ]+apple/i, // iPad
        /applecoremedia\/[\w\.]+ \((ipad)/i,
        /\b(ipad)\d\d?,\d\d?[;\]].+ios/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Apple",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Samsung",
          type: "tablet",
        };
      },
    ),
    p([/(surface duo)/i], (match) => {
      return {
        model: match[1],
        vendor: "Microsoft",
        type: "tablet",
      };
    }),
    p([/(pixel c)\b/i], (match) => {
      return {
        model: match[1],
        vendor: "Google",
        type: "tablet",
      };
    }),
    p(
      [
        /(alexa)webm/i,
        /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, // Kindle Fire without Silk / Echo Show
        /(kf[a-z]+)( bui|\)).+silk\//i, // Kindle Fire HD])
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Amazon",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(kindle)\/([\w\.]+)/i, // Kindle
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Amazon",
          type: "tablet",
        };
      },
    ),
    p([/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], () => {
      return {
        model: "Xperia Tablet",
        vendor: "Sony",
        type: "tablet",
      };
    }),
    p([/(playbook);[-\w\),; ]+(rim)/i], (match) => {
      return {
        model: match[1],
        vendor: "BlackBerry",
        type: "tablet",
      };
    }),
    p(
      [
        /(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "ASUS",
          type: "tablet",
        };
      },
    ),
    p([/(nexus 9)/i], (match) => {
      return {
        model: match[1],
        vendor: "HTC",
        type: "tablet",
      };
    }),
    p([/droid.+; ([c6]+|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], (match) => {
      return {
        model: match[1],
        vendor: "Zebra",
        type: "tablet",
      };
    }),
    p([/(shield[\w ]+) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Nvidia",
        type: "tablet",
      };
    }),
    p(
      [
        /(kobo)\s(ereader|touch)/i, // Kobo
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Kobo",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(archos) (gamepad2?)/i, // Archos
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Archos",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(hp).+(touchpad(?!.+tablet)|tablet)/i, // HP TouchPad
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "HP",
          type: "tablet",
        };
      },
    ),
    p(
      [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
      (match) => {
        return {
          model: match[1],
          vendor: "Huawei",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /oid[^\)]+; (2\d{4}(283|rpbf)[cgl])( bui|\))/i, // Redmi Pad
        /\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i, // Mi Pad tablets
      ],
      (match) => {
        return {
          model: match[1]?.replace(/_/g, " "),
          vendor: "Xiaomi",
          type: "tablet",
        };
      },
    ),
    p([/\b(mz60\d|xoom[2 ]{0,2}) build\//i], (match) => {
      return {
        model: match[1],
        vendor: "Motorola",
        type: "tablet",
      };
    }),
    p(
      [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
      (match) => {
        return {
          model: match[1],
          vendor: "LG",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(ideatab[-\w ]+)/i,
        /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i,
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Lenovo",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(nook)[\w ]+build\/(\w+)/i, // Nook
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Nook",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(dell) (strea[kpr\d ]*[\dko])/i, // Dell Streak
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Dell",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, // Le Pan Tablets
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Le Pan",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(trinity)[- ]*(t\d{3}) bui/i, // Trinity Tablets
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Trinity",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(gigaset)[- ]+(q\w{1,9}) bui/i, // Gigaset Tablets
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Gigaset",
          type: "tablet",
        };
      },
    ),
    p(
      [
        /(vodafone) ([\w ]+)(?:\)| bui)/i, // Vodafone
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Vodafone",
          type: "tablet",
        };
      },
    ),
    p([/\b(rct\w+) b/i], (match) => {
      return {
        model: match[1],
        vendor: "RCA",
        type: "tablet",
      };
    }),
    p([/\b(venue[\d ]{2,7}) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Dell",
        type: "tablet",
      };
    }),
    p([/\b(q(?:mv|ta)\w+) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Verizon",
        type: "tablet",
      };
    }),
    p([/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Barnes & Noble",
        type: "tablet",
      };
    }),
    p([/\b(tm\d{3}\w+) b/i], (match) => {
      return {
        model: match[1],
        vendor: "NuVision",
        type: "tablet",
      };
    }),
    p([/\b(k88) b/i], (match) => {
      return {
        model: match[1],
        vendor: "ZTE",
        type: "tablet",
      };
    }),
    p([/\b(zur\d{3}) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Swiss",
        type: "tablet",
      };
    }),
    p([/\b((zeki)?tb.*\b) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Zeki",
        type: "tablet",
      };
    }),
    p([/\b(ns-?\w{0,9}) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Insignia",
        type: "tablet",
      };
    }),
    p([/\b((nxa|next)-?\w{0,9}) b/i], (match) => {
      return {
        model: match[1],
        vendor: "NextBook",
        type: "tablet",
      };
    }),
    p(
      [
        /\b([yr]\d{2}) b/i,
        /\b(?:dragon[- ]+touch |dt)(\w{5}) b/i, // Dragon Touch Tablet
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Dragon Touch",
          type: "tablet",
        };
      },
    ),
    p([/\b(v(100md|700na|7011|917g).*\b) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Envizen",
        type: "tablet",
      };
    }),
    p([/\b(trio[-\w\. ]+) b/i], (match) => {
      return {
        model: match[1],
        vendor: "MachSpeed",
        type: "tablet",
      };
    }),
    p([/\btu_(1491) b/i], (match) => {
      return {
        model: match[1],
        vendor: "Rotor",
        type: "tablet",
      };
    }),
    p(
      [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
      (match) => {
        return {
          model: match[1],
          type: "tablet",
        };
      },
    ),
    p([/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], () => {
      return {
        type: "tablet",
      };
    }),
  ],
  // Desktop
  [
    p([/(macintosh);/i], () => {
      return {
        model: "Macintosh",
        vendor: "Apple",
        type: "desktop",
      };
    }),
  ],
  // TV
  [
    p([/smart-tv.+(samsung)/i], () => {
      return {
        vendor: "Samsung",
        type: "smarttv",
      };
    }),
    p([/hbbtv.+maple;(\d+)/i], (match) => {
      return {
        vendor: "Samsung",
        type: "smarttv",
        model: match[1]?.replace(/^/, "SmartTV"),
      };
    }),
    p([/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], () => {
      return {
        vendor: "LG",
        type: "smarttv",
      };
    }),
    p([/(apple) ?tv/i], () => {
      return {
        vendor: "Apple",
        type: "smarttv",
      };
    }),
    p([/crkey/i], () => {
      return {
        model: "Chromecast",
        vendor: "Google",
        type: "smarttv",
      };
    }),
    p([/droid.+aft(\w+)( bui|\))/i], (match) => {
      return {
        model: match[1],
        vendor: "Amazon",
        type: "smarttv",
      };
    }),
    p(
      [
        /\(dtv[\);].+(aquos)/i,
        /(aquos-tv[\w ]+)\)/i, // Sharp
      ],
      (match) => {
        return {
          model: match[1],
          vendor: "Sharp",
          type: "smarttv",
        };
      },
    ),
    p([/(bravia[\w ]+)( bui|\))/i], (match) => {
      return {
        model: match[1],
        vendor: "Sony",
        type: "smarttv",
      };
    }),
    p([/(mitv-\w{5}) bui/i], (match) => {
      return {
        model: match[1],
        vendor: "Xiaomi",
        type: "smarttv",
      };
    }),
    p([/Hbbtv.*(technisat) (.*);/i], (match) => {
      return {
        model: match[2],
        vendor: "TechniSAT",
        type: "smarttv",
      };
    }),
    p(
      [
        /\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, // Roku
      ],
      (match) => {
        return {
          model: match[2],
          vendor: "Roku",
          type: "smarttv",
        };
      },
    ),
    p(
      [
        /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i, // HbbTV devices
      ],
      (match) => {
        return {
          vendor: match[1] as Vendor, // Coercion, unknown vendor name
          model: match[2],
          type: "smarttv",
        };
      },
    ),
    p([/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], () => {
      return {
        type: "smarttv",
      };
    }),
  ],
  // Consoles
  [
    p([/(nintendo) (\w+)/i], (match) => {
      return {
        model: match[2],
        vendor: "Nintendo",
        type: "console",
      };
    }),
    p([/(ouya)/i], () => {
      return {
        vendor: "Ouya",
        type: "console",
      };
    }),
    p([/droid.+; (shield) bui/i], (match) => {
      return {
        model: match[1],
        vendor: "Nvidia",
        type: "console",
      };
    }),
    p([/(playstation \w+)/i], (match) => {
      return {
        model: match[1],
        vendor: "Sony",
        type: "console",
      };
    }),
    p([/\b(xbox(?: one)?(?!; xbox))[\); ]/i], (match) => {
      return {
        model: match[1],
        vendor: "Microsoft",
        type: "console",
      };
    }),
  ],
  // Wearables
  [
    p([/((pebble))app/i], (match) => {
      return {
        model: match[1],
        vendor: "Pebble",
        type: "wearable",
      };
    }),
    p([/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], (match) => {
      return {
        model: match[1],
        vendor: "Apple",
        type: "wearable",
      };
    }),
    p([/droid.+; (glass) \d/i], (match) => {
      return {
        model: match[1],
        vendor: "Google",
        type: "wearable",
      };
    }),
    p([/droid.+; (wt63?0{2,3})\)/i], (match) => {
      return {
        model: match[1],
        vendor: "Zebra",
        type: "wearable",
      };
    }),
    p([/(quest( 2| pro)?)/i], (match) => {
      return {
        model: match[1],
        vendor: "Facebook",
        type: "wearable",
      };
    }),
  ],
  // Embedded
  [
    p([/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], (match) => {
      return {
        model: match[1],
        vendor: "Tesla",
        type: "embedded",
      };
    }),
    p([/(aeobc)\b/i], (match) => {
      return {
        model: match[1],
        vendor: "Amazon",
        type: "embedded",
      };
    }),
  ],
].flat();
