export const UA_MAX_LENGTH = 512;

export const SEC_CH_UA_HEADERS: {
  AGENT: "sec-ch-ua";
  ARCH: "sec-ch-ua-arch";
  BITNESS: "sec-ch-ua-bitness";
  FULL_VERSION_LIST: "sec-ch-ua-full-version-list";
  FULL_VERSION: "sec-ch-ua-full-version";
  MOBILE: "sec-ch-ua-mobile";
  MODEL: "sec-ch-ua-model";
  PLATFORM_VERSION: "sec-ch-ua-platform-version";
  PLATFORM: "sec-ch-ua-platform";
  WOW64: "sec-ch-ua-wow64";
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
  "4.90": "ME";
  "NT 10.0": "10";
  "NT 5.0": "2000";
  "NT 5.1": "XP";
  "NT 5.2": "XP";
  "NT 6.0": "Vista";
  "NT 6.1": "7";
  "NT 6.2": "8";
  "NT 6.3": "8.1";
  "NT 6.4": "10";
  "NT3.51": "NT 3.11";
  "NT4.0": "NT 4.0";
  ARM: "RT";
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
  Automotive: "embedded";
  Desktop: "desktop";
  EInk: "tablet";
  Mobile: "mobile";
  Tablet: "tablet";
  TV: "smarttv";
  Unknown: "desktop";
  VR: "wearable";
  Watch: "wearable";
  XR: "wearable";
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
  APP: "app";
  BOT: "bot";
  BROWSER: "browser";
  EMAIL: "email";
} = Object.freeze({
  APP: "app",
  BOT: "bot",
  BROWSER: "browser",
  EMAIL: "email",
} as const);

export type BrowserType = (typeof BROWSER_TYPES)[keyof typeof BROWSER_TYPES];

export const BROWSERS: {
  _2345_EXPLORER: "2345Explorer";
  _360: "360 Browser";
  ALIPAY: "Alipay";
  AMAROK: "Amarok";
  AMAYA: "Amaya";
  ANDROID: "Android Browser";
  AQUALUNG: "Aqualung";
  ARES: "Ares";
  ARORA: "Arora";
  AUDACIOUS: "Audacious";
  AUDIMUSICSTREAM: "AudiMusicStream";
  AVANT: "Avant";
  AVAST: "Avast Secure Browser";
  AVG: "AVG Secure Browser";
  AXIOS: "Axios";
  BAIDU: "Baidu Browser";
  BASILISK: "Basilisk";
  BASS: "BASS";
  BING: "Bing";
  BLAZER: "Blazer";
  BOLT: "Bolt";
  BOWSER: "Bowser";
  BRAVE: "Brave";
  BSPLAYER: "BSPlayer";
  CAMINO: "Camino";
  CHIMERA: "Chimera";
  CHROME_HEADLESS: "Chrome Headless";
  CHROME_MOBILE: "Mobile Chrome";
  CHROME_WEBVIEW: "Chrome WebView";
  CHROME: "Chrome";
  CHROMIUM: "Chromium";
  CLEMENTINE: "Clementine";
  COBALT: "Cobalt";
  COC_COC: "Coc Coc";
  COMODO_DRAGON: "Comodo Dragon";
  CONKEROR: "Conkeror";
  COREMEDIA: "Apple CoreMedia";
  CURL: "cURL";
  DALVIK: "Dalvik";
  DILLO: "Dillo";
  DOLPHIN: "Dolphin";
  DORIS: "Doris";
  DUCKDUCKGO: "DuckDuckGo";
  EDGE: "Edge";
  ELECTRON: "Electron";
  EPIPHANY: "Epiphany";
  FACEBOOK: "Facebook";
  FACEBOOKEXTERNALHIT: "facebookexternalhit";
  FALKON: "Falkon";
  FENNEC: "Fennec";
  FFMPEG: "ffMPEG";
  FIREBIRD: "Firebird";
  FIREFOX_FOCUS: "Firefox Focus";
  FIREFOX_MOBILE: "Mobile Firefox";
  FIREFOX_REALITY: "Firefox Reality";
  FIREFOX: "Firefox";
  FLIP_PLAYER: "Flip Player";
  FLOCK: "Flock";
  FLOW: "Flow";
  FOOBAR2000: "Foobar2000";
  FSTREAM: "FStream";
  GNOMEMPLAYER: "GnomeMplayer";
  GO: "Go Browser";
  GOOGLE_SEARCH: "GSA";
  GOOGLE: "Google";
  GPTBOT: "GPTBot";
  GSTREAMER: "Gstreamer";
  GVFS: "gvfs";
  HEYTAP: "HeyTap";
  HTC_ONE_S: "HTC One S";
  HTC_STREAMING_PLAYER: "HTC Streaming Player";
  HUAWEI: "Huawei Browser";
  IA_ARCHIVER: "IA Archiver";
  ICAB: "iCab";
  ICE: "ICE Browser";
  ICEAPE: "IceApe";
  ICECAT: "IceCat";
  ICEDRAGON: "IceDragon";
  ICEWEASEL: "IceWeasel";
  IE_MOBILE: "IE Mobile";
  IE: "IE";
  INLIGHT_RADIO: "Inlight Radio";
  INSTAGRAM: "Instagram";
  IRAPP: "irapp";
  IRIDIUM: "Iridium";
  IRON: "Iron";
  ITUNES: "iTunes";
  JASMINE: "Jasmine";
  JAVA: "Java";
  JSDOM: "jsdom";
  K_MELEON: "K-Meleon";
  KAKAO: "KakaoTalk";
  KHTML: "KHTML";
  KINDLE: "Kindle";
  KLAR: "Klar";
  KLARNA: "Klarna";
  KONQUEROR: "Konqueror";
  LENOVO: "Smart Lenovo Browser";
  LG_PLAYER: "LG Player";
  LIEBAO: "LBBROWSER";
  LINE: "Line";
  LINKEDIN: "LinkedIn";
  LINKS: "Links";
  LUNASCAPE: "Lunascape";
  LYNX: "Lynx";
  LYSSNA: "Lyssna";
  MAEMO: "Maemo Browser";
  MAXTHON: "Maxthon";
  MEDIA_PLAYER_CLASSIC: "Media Player CLassic";
  MICROSOFT_OUTLOOK: "Microsoft Outlook";
  MIDORI: "Midori";
  MINIMO: "Minimo";
  MIUI: "MIUI Browser";
  MOC: "MoC";
  MOSAIC: "Mosaic";
  MOZILLA: "Mozilla";
  MPD: "MPD";
  MPLAYER_SVN: "MPlayer SVN";
  MPLAYER: "MPlayer";
  MSN: "msn";
  NATIVEHOST: "NativeHost";
  NAVER: "Naver";
  NERO_HOME: "Nero Home";
  NERO_SCOUT: "Nero Scout";
  NERO_SHOWTIME: "Nero ShowTime";
  NETFRONT: "NetFront";
  NETSCAPE: "Netscape";
  NETSURF: "Netsurf";
  NEXPLAYER: "NexPlayer";
  NOKIA_BROWSER: "Nokia Browser";
  NOKIA: "Nokia";
  NSPLAYER: "NSPlayer";
  OBIGO: "Obigo";
  OCMS_BOT: "OCMS-bot";
  OCULUS: "Oculus Browser";
  OMNIWEB: "OmniWeb";
  OPENCORE: "OpenCORE";
  OPERA_COAST: "Opera Coast";
  OPERA_MINI: "Opera Mini";
  OPERA_MOBI: "Opera Mobi";
  OPERA_TABLET: "Opera Tablet";
  OPERA_TOUCH: "Opera Touch";
  OPERA: "Opera";
  OSSPROXY: "OSSProxy";
  OVI: "OviBrowser";
  PALEMOON: "PaleMoon";
  PHANTOMJS: "PhantomJS";
  PHOENIX: "Phoenix";
  POLARIS: "Polaris";
  PSP_INTERNETRADIOPLAYER: "PSP-InternetRadioPlayer";
  PUFFIN: "Puffin";
  QQ_LITE: "QQBrowserLite";
  QQ: "QQBrowser";
  QUARK: "Quark";
  QUERYSEEKSPIDER: "QuerySeekSpider";
  QUICKTIME: "QuickTime";
  QUPZILLA: "QupZilla";
  RAD_IO: "Rad.io";
  RADIOAPP: "RadioApp";
  RADIOCLIENTAPPLICATION: "RadioClientApplication";
  REALMEDIA: "RealMedia";
  REKONQ: "rekonq";
  REQUESTS: "requests";
  RISEUP_RADIO_ALARM: "RiseUP Radio Alarm";
  ROCKMELT: "Rockmelt";
  SAFARI_MOBILE: "Mobile Safari";
  SAFARI: "Safari";
  SAILFISH: "Sailfish Browser";
  SAMSUNG: "Samsung Internet";
  SCRAPY: "Scrapy";
  SEAMONKEY: "SeaMonkey";
  SILK: "Silk";
  SKYFIRE: "Skyfire";
  SLACK: "Slack";
  SLEIPNIR: "Sleipnir";
  SLIMBROWSER: "SlimBrowser";
  SMP: "SMP";
  SNAPCHAT: "Snapchat";
  SOGOU_EXPLORER: "Sogou Explorer";
  SOGOU_MOBILE: "Sogou Mobile";
  SONGBIRD: "Songbird";
  SOUNDTAP: "SoundTap";
  STAGEFRIGHT: "Stagefright";
  STREAMIUM: "Streamium";
  SWIFTFOX: "Swiftfox";
  TAP_IN_RADIO: "Tap In Radio";
  TESLA: "Tesla";
  THUNDERBIRD: "Thunderbird";
  TIKTOK: "TikTok";
  TIZEN: "Tizen Browser";
  TOTEM: "Totem";
  TUNEIN: "TuneIn";
  UC: "UCBrowser";
  UNKNOWN: "Unknown";
  UP: "UP.Browser";
  URLLIB: "urllib";
  VIDEOS: "Videos";
  VIERA: "Viera";
  VIVALDI: "Vivaldi";
  VIVO: "Vivo Browser";
  VLC: "VLC";
  W3M: "w3m";
  WATERFOX: "Waterfox";
  WEBKIT: "WebKit";
  WECHAT: "WeChat";
  WEIBO: "Weibo";
  WGET: "wget";
  WHALE: "Whale";
  WINAMP: "Winamp";
  WINDOWS_MEDIA_PLAYER: "Windows Media Player";
  WINDOWS_MEDIA_SERVER: "Windows Media Server";
  XBMC: "XBMC";
  XINE: "Xine";
  XMMS: "XMMS";
  YANDEX: "Yandex";
  YOURMUZE: "YourMuze";
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
  ARM_64: "arm64";
  ARM_HF: "armhf";
  ARM: "arm";
  AVR_32: "avr32";
  AVR: "avr";
  IA64: "ia64";
  IRIX_64: "irix64";
  IRIX: "irix";
  M68K: "68k";
  MIPS_64: "mips64";
  MIPS: "mips";
  PA_RISC: "pa-risc";
  PPC: "ppc";
  SPARC_64: "sparc64";
  SPARC: "sparc";
  X86_64: "amd64";
  X86: "ia32";
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
  CONSOLE: "console";
  DESKTOP: "desktop";
  EMBEDDED: "embedded";
  MOBILE: "mobile";
  SMARTTV: "smarttv";
  TABLET: "tablet";
  WEARABLE: "wearable";
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
  ACER: "Acer";
  ALCATEL: "Alcatel";
  AMAZON: "Amazon";
  APPLE: "Apple";
  ARCHOS: "Archos";
  ASUS: "ASUS";
  ATT: "AT&T";
  BARNES_AND_NOBLE: "Barnes & Noble";
  BENQ: "BenQ";
  BLACKBERRY: "BlackBerry";
  DELL: "Dell";
  DRAGON_TOUCH: "Dragon Touch";
  ENVIZEN: "Envizen";
  ESSENTIAL: "Essential";
  FACEBOOK: "Facebook";
  FAIRPHONE: "Fairphone";
  GEEKSPHONE: "GeeksPhone";
  GENERIC: "Generic";
  GIGASET: "Gigaset";
  GOOGLE: "Google";
  HP: "HP";
  HTC: "HTC";
  HUAWEI: "Huawei";
  INFINIX: "Infinix";
  INSIGNIA: "Insignia";
  JOLLA: "Jolla";
  KOBO: "Kobo";
  LE_PAN: "Le Pan";
  LENOVO: "Lenovo";
  LG: "LG";
  LVTEL: "LvTel";
  MACHSPEED: "MachSpeed";
  MEIZU: "Meizu";
  MICROSOFT: "Microsoft";
  MOTOROLA: "Motorola";
  NEXIAN: "Nexian";
  NEXTBOOK: "NextBook";
  NINTENDO: "Nintendo";
  NOKIA: "Nokia";
  NOOK: "Nook";
  NUVISION: "NuVision";
  NVIDIA: "Nvidia";
  ONEPLUS: "OnePlus";
  OPPO: "OPPO";
  OUYA: "Ouya";
  PALM: "Palm";
  PANASONIC: "Panasonic";
  PEBBLE: "Pebble";
  POLYTRON: "Polytron";
  RCA: "RCA";
  REALME: "Realme";
  RIM: "RIM";
  ROKU: "Roku";
  ROTOR: "Rotor";
  SAMSUNG: "Samsung";
  SHARP: "Sharp";
  SIEMENS: "Siemens";
  SONY: "Sony";
  SPRINT: "Sprint";
  SWISS: "Swiss";
  TECHNISAT: "TechniSAT";
  TECNO: "Tecno";
  TESLA: "Tesla";
  TRINITY: "Trinity";
  ULEFONE: "Ulefone";
  VERIZON: "Verizon";
  VIVO: "Vivo";
  VODAFONE: "Vodafone";
  VOICE: "Voice";
  XBOX: "Xbox";
  XIAOMI: "Xiaomi";
  ZEBRA: "Zebra";
  ZEKI: "Zeki";
  ZTE: "ZTE";
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
  AMAYA: "Amaya";
  BLINK: "Blink";
  EDGEHTML: "EdgeHTML";
  FLOW: "Flow";
  GECKO: "Gecko";
  GOANNA: "Goanna";
  ICAB: "iCab";
  KHTML: "KHTML";
  LIBWEB: "LibWeb";
  LINKS: "Links";
  LYNX: "Lynx";
  NETFRONT: "NetFront";
  NETSURF: "NetSurf";
  PRESTO: "Presto";
  TASMAN: "Tasman";
  TRIDENT: "Trident";
  W3M: "w3m";
  WEBKIT: "WebKit";
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
  AIX: "AIX";
  AMIGA_OS: "Amiga OS";
  ANDROID_X86: "Android-x86";
  ANDROID: "Android";
  ARCH: "Arch";
  BADA: "Bada";
  BEOS: "BeOS";
  BLACKBERRY: "BlackBerry";
  CENTOS: "CentOS";
  CHROME_OS: "Chrome OS";
  CHROMECAST: "Chromecast";
  CONTIKI: "Contiki";
  DEBIAN: "Debian";
  DEEPIN: "Deepin";
  DRAGONFLY: "DragonFly";
  ELEMENTARY_OS: "elementary OS";
  FEDORA: "Fedora";
  FIREFOX_OS: "Firefox OS";
  FREEBSD: "FreeBSD";
  FUCHSIA: "Fuchsia";
  GENTOO: "Gentoo";
  GHOSTBSD: "GhostBSD";
  GNU: "GNU";
  HAIKU: "Haiku";
  HARMONYOS: "HarmonyOS";
  HP_UX: "HP-UX";
  HURD: "Hurd";
  IOS: "iOS";
  JOLI: "Joli";
  KAIOS: "KaiOS";
  LINPUS: "Linpus";
  LINSPIRE: "Linspire";
  LINUX: "Linux";
  MACOS: "macOS";
  MAEMO: "Maemo";
  MAGEIA: "Mageia";
  MANDRIVA: "Mandriva";
  MANJARO: "Manjaro";
  MEEGO: "MeeGo";
  MINIX: "Minix";
  MINT: "Mint";
  MORPH_OS: "Morph OS";
  NETBSD: "NetBSD";
  NETRANGE: "NetRange";
  NETTV: "NetTV";
  NINTENDO: "Nintendo";
  OPENBSD: "OpenBSD";
  OPENVMS: "OpenVMS";
  OS2: "OS/2";
  PALM: "Palm";
  PC_BSD: "PC-BSD";
  PCLINUXOS: "PCLinuxOS";
  PLAN9: "Plan9";
  PLAYSTATION: "PlayStation";
  QNX: "QNX";
  RASPBIAN: "Raspbian";
  REDHAT: "RedHat";
  RIM_TABLET_OS: "RIM Tablet OS";
  RISC_OS: "RISC OS";
  SABAYON: "Sabayon";
  SAILFISH: "Sailfish";
  SERENITYOS: "SerenityOS";
  SERIES40: "Series40";
  SLACKWARE: "Slackware";
  SOLARIS: "Solaris";
  SUSE: "SUSE";
  SYMBIAN: "Symbian";
  TIZEN: "Tizen";
  UBUNTU: "Ubuntu";
  UNIX: "Unix";
  VECTORLINUX: "VectorLinux";
  VIERA: "Viera";
  WATCHOS: "watchOS";
  WEBOS: "WebOS";
  WINDOWS_MOBILE: "Windows Mobile";
  WINDOWS_PHONE: "Windows Phone";
  WINDOWS: "Windows";
  XBOX: "Xbox";
  ZENWALK: "Zenwalk";
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
