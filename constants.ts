export const UA_MAX_LENGTH = 512;

export const SEC_CH_UA_HEADERS: {
  readonly AGENT: string;
  readonly ARCH: string;
  readonly BITNESS: string;
  readonly FULL_VERSION_LIST: string;
  readonly FULL_VERSION: string;
  readonly MOBILE: string;
  readonly MODEL: string;
  readonly PLATFORM_VERSION: string;
  readonly PLATFORM: string;
  readonly WOW64: string;
} = Object.freeze({
  AGENT: "sec-ch-ua",
  ARCH: "sec-ch-ua-arch",
  BITNESS: "sec-ch-ua-bitness",
  FULL_VERSION_LIST: "sec-ch-ua-full-version-list",
  FULL_VERSION: "sec-ch-ua-full-version",
  MOBILE: "sec-ch-ua-mobile",
  MODEL: "sec-ch-ua-model",
  PLATFORM_VERSION: "sec-ch-ua-platform-version",
  PLATFORM: "sec-ch-ua-platform",
  WOW64: "sec-ch-ua-wow64",
} as const);

export const WINDOWS_VERSION_MAP: {
  readonly "4.90": string;
  readonly "NT 10.0": string;
  readonly "NT 5.0": string;
  readonly "NT 5.1": string;
  readonly "NT 5.2": string;
  readonly "NT 6.0": string;
  readonly "NT 6.1": string;
  readonly "NT 6.2": string;
  readonly "NT 6.3": string;
  readonly "NT 6.4": string;
  readonly "NT3.51": string;
  readonly "NT4.0": string;
  readonly ARM: string;
} = Object.freeze({
  "4.90": "ME",
  "NT 10.0": "10",
  "NT 5.0": "2000",
  "NT 5.1": "XP",
  "NT 5.2": "XP",
  "NT 6.0": "Vista",
  "NT 6.1": "7",
  "NT 6.2": "8",
  "NT 6.3": "8.1",
  "NT 6.4": "10",
  "NT3.51": "NT 3.11",
  "NT4.0": "NT 4.0",
  ARM: "RT",
} as const);

export const FORM_FACTOR_MAP: {
  readonly Automotive: string;
  readonly Desktop: string;
  readonly EInk: string;
  readonly Mobile: string;
  readonly Tablet: string;
  readonly TV: string;
  readonly Unknown: string;
  readonly VR: string;
  readonly Watch: string;
  readonly XR: string;
} = Object.freeze({
  Automotive: "embedded",
  Desktop: "desktop",
  EInk: "tablet",
  Mobile: "mobile",
  Tablet: "tablet",
  TV: "smarttv",
  Unknown: "desktop",
  VR: "wearable",
  Watch: "wearable",
  XR: "wearable",
} as const) satisfies Record<string, Device>;

export const BROWSER_TYPES: {
  readonly APP: string;
  readonly BOT: string;
  readonly BROWSER: string;
  readonly EMAIL: string;
} = Object.freeze({
  APP: "app",
  BOT: "bot",
  BROWSER: "browser",
  EMAIL: "email",
} as const);

export type BrowserType = (typeof BROWSER_TYPES)[keyof typeof BROWSER_TYPES];

export const BROWSERS: {
  readonly _2345_EXPLORER: string;
  readonly _360: string;
  readonly ALIPAY: string;
  readonly AMAROK: string;
  readonly AMAYA: string;
  readonly ANDROID: string;
  readonly AQUALUNG: string;
  readonly ARES: string;
  readonly ARORA: string;
  readonly AUDACIOUS: string;
  readonly AUDIMUSICSTREAM: string;
  readonly AVANT: string;
  readonly AVAST: string;
  readonly AVG: string;
  readonly AXIOS: string;
  readonly BAIDU: string;
  readonly BASILISK: string;
  readonly BASS: string;
  readonly BING: string;
  readonly BLAZER: string;
  readonly BOLT: string;
  readonly BOWSER: string;
  readonly BRAVE: string;
  readonly BSPLAYER: string;
  readonly CAMINO: string;
  readonly CHIMERA: string;
  readonly CHROME_HEADLESS: string;
  readonly CHROME_MOBILE: string;
  readonly CHROME_WEBVIEW: string;
  readonly CHROME: string;
  readonly CHROMIUM: string;
  readonly CLEMENTINE: string;
  readonly COBALT: string;
  readonly COC_COC: string;
  readonly COMODO_DRAGON: string;
  readonly CONKEROR: string;
  readonly COREMEDIA: string;
  readonly CURL: string;
  readonly DALVIK: string;
  readonly DILLO: string;
  readonly DOLPHIN: string;
  readonly DORIS: string;
  readonly DUCKDUCKGO: string;
  readonly EDGE: string;
  readonly ELECTRON: string;
  readonly EPIPHANY: string;
  readonly FACEBOOK: string;
  readonly FACEBOOKEXTERNALHIT: string;
  readonly FALKON: string;
  readonly FENNEC: string;
  readonly FFMPEG: string;
  readonly FIREBIRD: string;
  readonly FIREFOX_FOCUS: string;
  readonly FIREFOX_MOBILE: string;
  readonly FIREFOX_REALITY: string;
  readonly FIREFOX: string;
  readonly FLIP_PLAYER: string;
  readonly FLOCK: string;
  readonly FLOW: string;
  readonly FOOBAR2000: string;
  readonly FSTREAM: string;
  readonly GNOMEMPLAYER: string;
  readonly GO: string;
  readonly GOOGLE_SEARCH: string;
  readonly GOOGLE: string;
  readonly GPTBOT: string;
  readonly GSTREAMER: string;
  readonly GVFS: string;
  readonly HEYTAP: string;
  readonly HTC_ONE_S: string;
  readonly HTC_STREAMING_PLAYER: string;
  readonly HUAWEI: string;
  readonly IA_ARCHIVER: string;
  readonly ICAB: string;
  readonly ICE: string;
  readonly ICEAPE: string;
  readonly ICECAT: string;
  readonly ICEDRAGON: string;
  readonly ICEWEASEL: string;
  readonly IE_MOBILE: string;
  readonly IE: string;
  readonly INLIGHT_RADIO: string;
  readonly INSTAGRAM: string;
  readonly IRAPP: string;
  readonly IRIDIUM: string;
  readonly IRON: string;
  readonly ITUNES: string;
  readonly JASMINE: string;
  readonly JAVA: string;
  readonly JSDOM: string;
  readonly K_MELEON: string;
  readonly KAKAO: string;
  readonly KHTML: string;
  readonly KINDLE: string;
  readonly KLAR: string;
  readonly KLARNA: string;
  readonly KONQUEROR: string;
  readonly LENOVO: string;
  readonly LG_PLAYER: string;
  readonly LIEBAO: string;
  readonly LINE: string;
  readonly LINKEDIN: string;
  readonly LINKS: string;
  readonly LUNASCAPE: string;
  readonly LYNX: string;
  readonly LYSSNA: string;
  readonly MAEMO: string;
  readonly MAXTHON: string;
  readonly MEDIA_PLAYER_CLASSIC: string;
  readonly MICROSOFT_OUTLOOK: string;
  readonly MIDORI: string;
  readonly MINIMO: string;
  readonly MIUI: string;
  readonly MOC: string;
  readonly MOSAIC: string;
  readonly MOZILLA: string;
  readonly MPD: string;
  readonly MPLAYER_SVN: string;
  readonly MPLAYER: string;
  readonly MSN: string;
  readonly NATIVEHOST: string;
  readonly NAVER: string;
  readonly NERO_HOME: string;
  readonly NERO_SCOUT: string;
  readonly NERO_SHOWTIME: string;
  readonly NETFRONT: string;
  readonly NETSCAPE: string;
  readonly NETSURF: string;
  readonly NEXPLAYER: string;
  readonly NOKIA_BROWSER: string;
  readonly NOKIA: string;
  readonly NSPLAYER: string;
  readonly OBIGO: string;
  readonly OCMS_BOT: string;
  readonly OCULUS: string;
  readonly OMNIWEB: string;
  readonly OPENCORE: string;
  readonly OPERA_COAST: string;
  readonly OPERA_MINI: string;
  readonly OPERA_MOBI: string;
  readonly OPERA_TABLET: string;
  readonly OPERA_TOUCH: string;
  readonly OPERA: string;
  readonly OSSPROXY: string;
  readonly OVI: string;
  readonly PALEMOON: string;
  readonly PHANTOMJS: string;
  readonly PHOENIX: string;
  readonly POLARIS: string;
  readonly PSP_INTERNETRADIOPLAYER: string;
  readonly PUFFIN: string;
  readonly QQ_LITE: string;
  readonly QQ: string;
  readonly QUARK: string;
  readonly QUERYSEEKSPIDER: string;
  readonly QUICKTIME: string;
  readonly QUPZILLA: string;
  readonly RAD_IO: string;
  readonly RADIOAPP: string;
  readonly RADIOCLIENTAPPLICATION: string;
  readonly REALMEDIA: string;
  readonly REKONQ: string;
  readonly REQUESTS: string;
  readonly RISEUP_RADIO_ALARM: string;
  readonly ROCKMELT: string;
  readonly SAFARI_MOBILE: string;
  readonly SAFARI: string;
  readonly SAILFISH: string;
  readonly SAMSUNG: string;
  readonly SCRAPY: string;
  readonly SEAMONKEY: string;
  readonly SILK: string;
  readonly SKYFIRE: string;
  readonly SLACK: string;
  readonly SLEIPNIR: string;
  readonly SLIMBROWSER: string;
  readonly SMP: string;
  readonly SNAPCHAT: string;
  readonly SOGOU_EXPLORER: string;
  readonly SOGOU_MOBILE: string;
  readonly SONGBIRD: string;
  readonly SOUNDTAP: string;
  readonly STAGEFRIGHT: string;
  readonly STREAMIUM: string;
  readonly SWIFTFOX: string;
  readonly TAP_IN_RADIO: string;
  readonly TESLA: string;
  readonly THUNDERBIRD: string;
  readonly TIKTOK: string;
  readonly TIZEN: string;
  readonly TOTEM: string;
  readonly TUNEIN: string;
  readonly UC: string;
  readonly UNKNOWN: string;
  readonly UP: string;
  readonly URLLIB: string;
  readonly VIDEOS: string;
  readonly VIERA: string;
  readonly VIVALDI: string;
  readonly VIVO: string;
  readonly VLC: string;
  readonly W3M: string;
  readonly WATERFOX: string;
  readonly WEBKIT: string;
  readonly WECHAT: string;
  readonly WEIBO: string;
  readonly WGET: string;
  readonly WHALE: string;
  readonly WINAMP: string;
  readonly WINDOWS_MEDIA_PLAYER: string;
  readonly WINDOWS_MEDIA_SERVER: string;
  readonly XBMC: string;
  readonly XINE: string;
  readonly XMMS: string;
  readonly YANDEX: string;
  readonly YOURMUZE: string;
} = Object.freeze({
  _2345_EXPLORER: "2345Explorer",
  _360: "360 Browser",
  ALIPAY: "Alipay",
  AMAROK: "Amarok",
  AMAYA: "Amaya",
  ANDROID: "Android Browser",
  AQUALUNG: "Aqualung",
  ARES: "Ares",
  ARORA: "Arora",
  AUDACIOUS: "Audacious",
  AUDIMUSICSTREAM: "AudiMusicStream",
  AVANT: "Avant",
  AVAST: "Avast Secure Browser",
  AVG: "AVG Secure Browser",
  AXIOS: "Axios",
  BAIDU: "Baidu Browser",
  BASILISK: "Basilisk",
  BASS: "BASS",
  BING: "Bing",
  BLAZER: "Blazer",
  BOLT: "Bolt",
  BOWSER: "Bowser",
  BRAVE: "Brave",
  BSPLAYER: "BSPlayer",
  CAMINO: "Camino",
  CHIMERA: "Chimera",
  CHROME_HEADLESS: "Chrome Headless",
  CHROME_MOBILE: "Mobile Chrome",
  CHROME_WEBVIEW: "Chrome WebView",
  CHROME: "Chrome",
  CHROMIUM: "Chromium",
  CLEMENTINE: "Clementine",
  COBALT: "Cobalt",
  COC_COC: "Coc Coc",
  COMODO_DRAGON: "Comodo Dragon",
  CONKEROR: "Conkeror",
  COREMEDIA: "Apple CoreMedia",
  CURL: "cURL",
  DALVIK: "Dalvik",
  DILLO: "Dillo",
  DOLPHIN: "Dolphin",
  DORIS: "Doris",
  DUCKDUCKGO: "DuckDuckGo",
  EDGE: "Edge",
  ELECTRON: "Electron",
  EPIPHANY: "Epiphany",
  FACEBOOK: "Facebook",
  FACEBOOKEXTERNALHIT: "facebookexternalhit",
  FALKON: "Falkon",
  FENNEC: "Fennec",
  FFMPEG: "ffMPEG",
  FIREBIRD: "Firebird",
  FIREFOX_FOCUS: "Firefox Focus",
  FIREFOX_MOBILE: "Mobile Firefox",
  FIREFOX_REALITY: "Firefox Reality",
  FIREFOX: "Firefox",
  FLIP_PLAYER: "Flip Player",
  FLOCK: "Flock",
  FLOW: "Flow",
  FOOBAR2000: "Foobar2000",
  FSTREAM: "FStream",
  GNOMEMPLAYER: "GnomeMplayer",
  GO: "Go Browser",
  GOOGLE_SEARCH: "GSA",
  GOOGLE: "Google",
  GPTBOT: "GPTBot",
  GSTREAMER: "Gstreamer",
  GVFS: "gvfs",
  HEYTAP: "HeyTap",
  HTC_ONE_S: "HTC One S",
  HTC_STREAMING_PLAYER: "HTC Streaming Player",
  HUAWEI: "Huawei Browser",
  IA_ARCHIVER: "IA Archiver",
  ICAB: "iCab",
  ICE: "ICE Browser",
  ICEAPE: "IceApe",
  ICECAT: "IceCat",
  ICEDRAGON: "IceDragon",
  ICEWEASEL: "IceWeasel",
  IE_MOBILE: "IE Mobile",
  IE: "IE",
  INLIGHT_RADIO: "Inlight Radio",
  INSTAGRAM: "Instagram",
  IRAPP: "irapp",
  IRIDIUM: "Iridium",
  IRON: "Iron",
  ITUNES: "iTunes",
  JASMINE: "Jasmine",
  JAVA: "Java",
  JSDOM: "jsdom",
  K_MELEON: "K-Meleon",
  KAKAO: "KakaoTalk",
  KHTML: "KHTML",
  KINDLE: "Kindle",
  KLAR: "Klar",
  KLARNA: "Klarna",
  KONQUEROR: "Konqueror",
  LENOVO: "Smart Lenovo Browser",
  LG_PLAYER: "LG Player",
  LIEBAO: "LBBROWSER",
  LINE: "Line",
  LINKEDIN: "LinkedIn",
  LINKS: "Links",
  LUNASCAPE: "Lunascape",
  LYNX: "Lynx",
  LYSSNA: "Lyssna",
  MAEMO: "Maemo Browser",
  MAXTHON: "Maxthon",
  MEDIA_PLAYER_CLASSIC: "Media Player CLassic",
  MICROSOFT_OUTLOOK: "Microsoft Outlook",
  MIDORI: "Midori",
  MINIMO: "Minimo",
  MIUI: "MIUI Browser",
  MOC: "MoC",
  MOSAIC: "Mosaic",
  MOZILLA: "Mozilla",
  MPD: "MPD",
  MPLAYER_SVN: "MPlayer SVN",
  MPLAYER: "MPlayer",
  MSN: "msn",
  NATIVEHOST: "NativeHost",
  NAVER: "Naver",
  NERO_HOME: "Nero Home",
  NERO_SCOUT: "Nero Scout",
  NERO_SHOWTIME: "Nero ShowTime",
  NETFRONT: "NetFront",
  NETSCAPE: "Netscape",
  NETSURF: "Netsurf",
  NEXPLAYER: "NexPlayer",
  NOKIA_BROWSER: "Nokia Browser",
  NOKIA: "Nokia",
  NSPLAYER: "NSPlayer",
  OBIGO: "Obigo",
  OCMS_BOT: "OCMS-bot",
  OCULUS: "Oculus Browser",
  OMNIWEB: "OmniWeb",
  OPENCORE: "OpenCORE",
  OPERA_COAST: "Opera Coast",
  OPERA_MINI: "Opera Mini",
  OPERA_MOBI: "Opera Mobi",
  OPERA_TABLET: "Opera Tablet",
  OPERA_TOUCH: "Opera Touch",
  OPERA: "Opera",
  OSSPROXY: "OSSProxy",
  OVI: "OviBrowser",
  PALEMOON: "PaleMoon",
  PHANTOMJS: "PhantomJS",
  PHOENIX: "Phoenix",
  POLARIS: "Polaris",
  PSP_INTERNETRADIOPLAYER: "PSP-InternetRadioPlayer",
  PUFFIN: "Puffin",
  QQ_LITE: "QQBrowserLite",
  QQ: "QQBrowser",
  QUARK: "Quark",
  QUERYSEEKSPIDER: "QuerySeekSpider",
  QUICKTIME: "QuickTime",
  QUPZILLA: "QupZilla",
  RAD_IO: "Rad.io",
  RADIOAPP: "RadioApp",
  RADIOCLIENTAPPLICATION: "RadioClientApplication",
  REALMEDIA: "RealMedia",
  REKONQ: "rekonq",
  REQUESTS: "requests",
  RISEUP_RADIO_ALARM: "RiseUP Radio Alarm",
  ROCKMELT: "Rockmelt",
  SAFARI_MOBILE: "Mobile Safari",
  SAFARI: "Safari",
  SAILFISH: "Sailfish Browser",
  SAMSUNG: "Samsung Internet",
  SCRAPY: "Scrapy",
  SEAMONKEY: "SeaMonkey",
  SILK: "Silk",
  SKYFIRE: "Skyfire",
  SLACK: "Slack",
  SLEIPNIR: "Sleipnir",
  SLIMBROWSER: "SlimBrowser",
  SMP: "SMP",
  SNAPCHAT: "Snapchat",
  SOGOU_EXPLORER: "Sogou Explorer",
  SOGOU_MOBILE: "Sogou Mobile",
  SONGBIRD: "Songbird",
  SOUNDTAP: "SoundTap",
  STAGEFRIGHT: "Stagefright",
  STREAMIUM: "Streamium",
  SWIFTFOX: "Swiftfox",
  TAP_IN_RADIO: "Tap In Radio",
  TESLA: "Tesla",
  THUNDERBIRD: "Thunderbird",
  TIKTOK: "TikTok",
  TIZEN: "Tizen Browser",
  TOTEM: "Totem",
  TUNEIN: "TuneIn",
  UC: "UCBrowser",
  UNKNOWN: "Unknown",
  UP: "UP.Browser",
  URLLIB: "urllib",
  VIDEOS: "Videos",
  VIERA: "Viera",
  VIVALDI: "Vivaldi",
  VIVO: "Vivo Browser",
  VLC: "VLC",
  W3M: "w3m",
  WATERFOX: "Waterfox",
  WEBKIT: "WebKit",
  WECHAT: "WeChat",
  WEIBO: "Weibo",
  WGET: "wget",
  WHALE: "Whale",
  WINAMP: "Winamp",
  WINDOWS_MEDIA_PLAYER: "Windows Media Player",
  WINDOWS_MEDIA_SERVER: "Windows Media Server",
  XBMC: "XBMC",
  XINE: "Xine",
  XMMS: "XMMS",
  YANDEX: "Yandex",
  YOURMUZE: "YourMuze",
} as const);

export type Browser = (typeof BROWSERS)[keyof typeof BROWSERS];

export const ARCHITECTURES: {
  readonly ARM_64: string;
  readonly ARM_HF: string;
  readonly ARM: string;
  readonly AVR_32: string;
  readonly AVR: string;
  readonly IA64: string;
  readonly IRIX_64: string;
  readonly IRIX: string;
  readonly M68K: string;
  readonly MIPS_64: string;
  readonly MIPS: string;
  readonly PA_RISC: string;
  readonly PPC: string;
  readonly SPARC_64: string;
  readonly SPARC: string;
  readonly X86_64: string;
  readonly X86: string;
} = Object.freeze({
  ARM_64: "arm64",
  ARM_HF: "armhf",
  ARM: "arm",
  AVR_32: "avr32",
  AVR: "avr",
  IA64: "ia64",
  IRIX_64: "irix64",
  IRIX: "irix",
  M68K: "68k",
  MIPS_64: "mips64",
  MIPS: "mips",
  PA_RISC: "pa-risc",
  PPC: "ppc",
  SPARC_64: "sparc64",
  SPARC: "sparc",
  X86_64: "amd64",
  X86: "ia32",
} as const);

export type CPU = (typeof ARCHITECTURES)[keyof typeof ARCHITECTURES];

export const DEVICES: {
  readonly CONSOLE: string;
  readonly DESKTOP: string;
  readonly EMBEDDED: string;
  readonly MOBILE: string;
  readonly SMARTTV: string;
  readonly TABLET: string;
  readonly WEARABLE: string;
} = Object.freeze({
  CONSOLE: "console",
  DESKTOP: "desktop",
  EMBEDDED: "embedded",
  MOBILE: "mobile",
  SMARTTV: "smarttv",
  TABLET: "tablet",
  WEARABLE: "wearable",
} as const);

export type Device = (typeof DEVICES)[keyof typeof DEVICES];

export const VENDORS: {
  readonly ACER: string;
  readonly ALCATEL: string;
  readonly AMAZON: string;
  readonly APPLE: string;
  readonly ARCHOS: string;
  readonly ASUS: string;
  readonly ATT: string;
  readonly BARNES_AND_NOBLE: string;
  readonly BENQ: string;
  readonly BLACKBERRY: string;
  readonly DELL: string;
  readonly DRAGON_TOUCH: string;
  readonly ENVIZEN: string;
  readonly ESSENTIAL: string;
  readonly FACEBOOK: string;
  readonly FAIRPHONE: string;
  readonly GEEKSPHONE: string;
  readonly GENERIC: string;
  readonly GIGASET: string;
  readonly GOOGLE: string;
  readonly HP: string;
  readonly HTC: string;
  readonly HUAWEI: string;
  readonly INFINIX: string;
  readonly INSIGNIA: string;
  readonly JOLLA: string;
  readonly KOBO: string;
  readonly LE_PAN: string;
  readonly LENOVO: string;
  readonly LG: string;
  readonly LVTEL: string;
  readonly MACHSPEED: string;
  readonly MEIZU: string;
  readonly MICROSOFT: string;
  readonly MOTOROLA: string;
  readonly NEXIAN: string;
  readonly NEXTBOOK: string;
  readonly NINTENDO: string;
  readonly NOKIA: string;
  readonly NOOK: string;
  readonly NUVISION: string;
  readonly NVIDIA: string;
  readonly ONEPLUS: string;
  readonly OPPO: string;
  readonly OUYA: string;
  readonly PALM: string;
  readonly PANASONIC: string;
  readonly PEBBLE: string;
  readonly POLYTRON: string;
  readonly RCA: string;
  readonly REALME: string;
  readonly RIM: string;
  readonly ROKU: string;
  readonly ROTOR: string;
  readonly SAMSUNG: string;
  readonly SHARP: string;
  readonly SIEMENS: string;
  readonly SONY: string;
  readonly SPRINT: string;
  readonly SWISS: string;
  readonly TECHNISAT: string;
  readonly TECNO: string;
  readonly TESLA: string;
  readonly TRINITY: string;
  readonly ULEFONE: string;
  readonly VERIZON: string;
  readonly VIVO: string;
  readonly VODAFONE: string;
  readonly VOICE: string;
  readonly XBOX: string;
  readonly XIAOMI: string;
  readonly ZEBRA: string;
  readonly ZEKI: string;
  readonly ZTE: string;
} = Object.freeze({
  ACER: "Acer",
  ALCATEL: "Alcatel",
  AMAZON: "Amazon",
  APPLE: "Apple",
  ARCHOS: "Archos",
  ASUS: "ASUS",
  ATT: "AT&T",
  BARNES_AND_NOBLE: "Barnes & Noble",
  BENQ: "BenQ",
  BLACKBERRY: "BlackBerry",
  DELL: "Dell",
  DRAGON_TOUCH: "Dragon Touch",
  ENVIZEN: "Envizen",
  ESSENTIAL: "Essential",
  FACEBOOK: "Facebook",
  FAIRPHONE: "Fairphone",
  GEEKSPHONE: "GeeksPhone",
  GENERIC: "Generic",
  GIGASET: "Gigaset",
  GOOGLE: "Google",
  HP: "HP",
  HTC: "HTC",
  HUAWEI: "Huawei",
  INFINIX: "Infinix",
  INSIGNIA: "Insignia",
  JOLLA: "Jolla",
  KOBO: "Kobo",
  LE_PAN: "Le Pan",
  LENOVO: "Lenovo",
  LG: "LG",
  LVTEL: "LvTel",
  MACHSPEED: "MachSpeed",
  MEIZU: "Meizu",
  MICROSOFT: "Microsoft",
  MOTOROLA: "Motorola",
  NEXIAN: "Nexian",
  NEXTBOOK: "NextBook",
  NINTENDO: "Nintendo",
  NOKIA: "Nokia",
  NOOK: "Nook",
  NUVISION: "NuVision",
  NVIDIA: "Nvidia",
  ONEPLUS: "OnePlus",
  OPPO: "OPPO",
  OUYA: "Ouya",
  PALM: "Palm",
  PANASONIC: "Panasonic",
  PEBBLE: "Pebble",
  POLYTRON: "Polytron",
  RCA: "RCA",
  REALME: "Realme",
  RIM: "RIM",
  ROKU: "Roku",
  ROTOR: "Rotor",
  SAMSUNG: "Samsung",
  SHARP: "Sharp",
  SIEMENS: "Siemens",
  SONY: "Sony",
  SPRINT: "Sprint",
  SWISS: "Swiss",
  TECHNISAT: "TechniSAT",
  TECNO: "Tecno",
  TESLA: "Tesla",
  TRINITY: "Trinity",
  ULEFONE: "Ulefone",
  VERIZON: "Verizon",
  VIVO: "Vivo",
  VODAFONE: "Vodafone",
  VOICE: "Voice",
  XBOX: "Xbox",
  XIAOMI: "Xiaomi",
  ZEBRA: "Zebra",
  ZEKI: "Zeki",
  ZTE: "ZTE",
} as const);

export type Vendor = (typeof VENDORS)[keyof typeof VENDORS];

export const ENGINES: {
  readonly AMAYA: string;
  readonly BLINK: string;
  readonly EDGEHTML: string;
  readonly FLOW: string;
  readonly GECKO: string;
  readonly GOANNA: string;
  readonly ICAB: string;
  readonly KHTML: string;
  readonly LIBWEB: string;
  readonly LINKS: string;
  readonly LYNX: string;
  readonly NETFRONT: string;
  readonly NETSURF: string;
  readonly PRESTO: string;
  readonly TASMAN: string;
  readonly TRIDENT: string;
  readonly W3M: string;
  readonly WEBKIT: string;
} = Object.freeze({
  AMAYA: "Amaya",
  BLINK: "Blink",
  EDGEHTML: "EdgeHTML",
  FLOW: "Flow",
  GECKO: "Gecko",
  GOANNA: "Goanna",
  ICAB: "iCab",
  KHTML: "KHTML",
  LIBWEB: "LibWeb",
  LINKS: "Links",
  LYNX: "Lynx",
  NETFRONT: "NetFront",
  NETSURF: "NetSurf",
  PRESTO: "Presto",
  TASMAN: "Tasman",
  TRIDENT: "Trident",
  W3M: "w3m",
  WEBKIT: "WebKit",
} as const);

export type Engine = (typeof ENGINES)[keyof typeof ENGINES];

export const OS: {
  readonly AIX: string;
  readonly AMIGA_OS: string;
  readonly ANDROID_X86: string;
  readonly ANDROID: string;
  readonly ARCH: string;
  readonly BADA: string;
  readonly BEOS: string;
  readonly BLACKBERRY: string;
  readonly CENTOS: string;
  readonly CHROME_OS: string;
  readonly CHROMECAST: string;
  readonly CONTIKI: string;
  readonly DEBIAN: string;
  readonly DEEPIN: string;
  readonly DRAGONFLY: string;
  readonly ELEMENTARY_OS: string;
  readonly FEDORA: string;
  readonly FIREFOX_OS: string;
  readonly FREEBSD: string;
  readonly FUCHSIA: string;
  readonly GENTOO: string;
  readonly GHOSTBSD: string;
  readonly GNU: string;
  readonly HAIKU: string;
  readonly HARMONYOS: string;
  readonly HP_UX: string;
  readonly HURD: string;
  readonly IOS: string;
  readonly JOLI: string;
  readonly KAIOS: string;
  readonly LINPUS: string;
  readonly LINSPIRE: string;
  readonly LINUX: string;
  readonly MACOS: string;
  readonly MAEMO: string;
  readonly MAGEIA: string;
  readonly MANDRIVA: string;
  readonly MANJARO: string;
  readonly MEEGO: string;
  readonly MINIX: string;
  readonly MINT: string;
  readonly MORPH_OS: string;
  readonly NETBSD: string;
  readonly NETRANGE: string;
  readonly NETTV: string;
  readonly NINTENDO: string;
  readonly OPENBSD: string;
  readonly OPENVMS: string;
  readonly OS2: string;
  readonly PALM: string;
  readonly PC_BSD: string;
  readonly PCLINUXOS: string;
  readonly PLAN9: string;
  readonly PLAYSTATION: string;
  readonly QNX: string;
  readonly RASPBIAN: string;
  readonly REDHAT: string;
  readonly RIM_TABLET_OS: string;
  readonly RISC_OS: string;
  readonly SABAYON: string;
  readonly SAILFISH: string;
  readonly SERENITYOS: string;
  readonly SERIES40: string;
  readonly SLACKWARE: string;
  readonly SOLARIS: string;
  readonly SUSE: string;
  readonly SYMBIAN: string;
  readonly TIZEN: string;
  readonly UBUNTU: string;
  readonly UNIX: string;
  readonly VECTORLINUX: string;
  readonly VIERA: string;
  readonly WATCHOS: string;
  readonly WEBOS: string;
  readonly WINDOWS_MOBILE: string;
  readonly WINDOWS_PHONE: string;
  readonly WINDOWS: string;
  readonly XBOX: string;
  readonly ZENWALK: string;
} = Object.freeze({
  AIX: "AIX",
  AMIGA_OS: "Amiga OS",
  ANDROID_X86: "Android-x86",
  ANDROID: "Android",
  ARCH: "Arch",
  BADA: "Bada",
  BEOS: "BeOS",
  BLACKBERRY: "BlackBerry",
  CENTOS: "CentOS",
  CHROME_OS: "Chrome OS",
  CHROMECAST: "Chromecast",
  CONTIKI: "Contiki",
  DEBIAN: "Debian",
  DEEPIN: "Deepin",
  DRAGONFLY: "DragonFly",
  ELEMENTARY_OS: "elementary OS",
  FEDORA: "Fedora",
  FIREFOX_OS: "Firefox OS",
  FREEBSD: "FreeBSD",
  FUCHSIA: "Fuchsia",
  GENTOO: "Gentoo",
  GHOSTBSD: "GhostBSD",
  GNU: "GNU",
  HAIKU: "Haiku",
  HARMONYOS: "HarmonyOS",
  HP_UX: "HP-UX",
  HURD: "Hurd",
  IOS: "iOS",
  JOLI: "Joli",
  KAIOS: "KaiOS",
  LINPUS: "Linpus",
  LINSPIRE: "Linspire",
  LINUX: "Linux",
  MACOS: "macOS",
  MAEMO: "Maemo",
  MAGEIA: "Mageia",
  MANDRIVA: "Mandriva",
  MANJARO: "Manjaro",
  MEEGO: "MeeGo",
  MINIX: "Minix",
  MINT: "Mint",
  MORPH_OS: "Morph OS",
  NETBSD: "NetBSD",
  NETRANGE: "NetRange",
  NETTV: "NetTV",
  NINTENDO: "Nintendo",
  OPENBSD: "OpenBSD",
  OPENVMS: "OpenVMS",
  OS2: "OS/2",
  PALM: "Palm",
  PC_BSD: "PC-BSD",
  PCLINUXOS: "PCLinuxOS",
  PLAN9: "Plan9",
  PLAYSTATION: "PlayStation",
  QNX: "QNX",
  RASPBIAN: "Raspbian",
  REDHAT: "RedHat",
  RIM_TABLET_OS: "RIM Tablet OS",
  RISC_OS: "RISC OS",
  SABAYON: "Sabayon",
  SAILFISH: "Sailfish",
  SERENITYOS: "SerenityOS",
  SERIES40: "Series40",
  SLACKWARE: "Slackware",
  SOLARIS: "Solaris",
  SUSE: "SUSE",
  SYMBIAN: "Symbian",
  TIZEN: "Tizen",
  UBUNTU: "Ubuntu",
  UNIX: "Unix",
  VECTORLINUX: "VectorLinux",
  VIERA: "Viera",
  WATCHOS: "watchOS",
  WEBOS: "WebOS",
  WINDOWS_MOBILE: "Windows Mobile",
  WINDOWS_PHONE: "Windows Phone",
  WINDOWS: "Windows",
  XBOX: "Xbox",
  ZENWALK: "Zenwalk",
} as const);

export type OS = (typeof OS)[keyof typeof OS];

export interface BrowserInfo {
  name?: Browser;
  version?: string;
  major?: string;
  type?: BrowserType;
}

export interface CPUInfo {
  architecture?: CPU;
}

export interface DeviceInfo {
  type?: Device;
  vendor?: Vendor;
  model?: string;
}

export interface EngineInfo {
  name?: Engine;
  version?: string;
}

export interface OSInfo {
  name?: OS;
  version?: string;
  typeGuess?: Device;
}

export interface Result {
  browser: BrowserInfo;
  cpu: CPUInfo;
  device: DeviceInfo;
  engine: EngineInfo;
  os: OSInfo;
}

export interface Parser<T extends keyof Result> {
  specificity: number;
  parse: (userAgent: string) => Result[T] | null;
}

export interface Parsers {
  browser: Parser<"browser">[];
  cpu: Parser<"cpu">[];
  device: Parser<"device">[];
  engine: Parser<"engine">[];
  os: Parser<"os">[];
}
