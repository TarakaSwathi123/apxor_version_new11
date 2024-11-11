(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = global || self, global.Apxor = factory());
}(this, (function () { 'use strict';

  function _iterableToArrayLimit(r, l) {
    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
    if (null != t) {
      var e,
        n,
        i,
        u,
        a = [],
        f = !0,
        o = !1;
      try {
        if (i = (t = t.call(r)).next, 0 === l) {
          if (Object(t) !== t) return;
          f = !1;
        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
      } catch (r) {
        o = !0, n = r;
      } finally {
        try {
          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
        } finally {
          if (o) throw n;
        }
      }
      return a;
    }
  }
  function ownKeys(e, r) {
    var t = Object.keys(e);
    if (Object.getOwnPropertySymbols) {
      var o = Object.getOwnPropertySymbols(e);
      r && (o = o.filter(function (r) {
        return Object.getOwnPropertyDescriptor(e, r).enumerable;
      })), t.push.apply(t, o);
    }
    return t;
  }
  function _objectSpread2(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = null != arguments[r] ? arguments[r] : {};
      r % 2 ? ownKeys(Object(t), !0).forEach(function (r) {
        _defineProperty(e, r, t[r]);
      }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
        Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
      });
    }
    return e;
  }
  function _typeof(o) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
      return typeof o;
    } : function (o) {
      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
    }, _typeof(o);
  }
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
    }
  }
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    Object.defineProperty(Constructor, "prototype", {
      writable: false
    });
    return Constructor;
  }
  function _defineProperty(obj, key, value) {
    key = _toPropertyKey(key);
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    return obj;
  }
  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }
  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }
  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }
  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }
  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
    return arr2;
  }
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  function _toPrimitive(input, hint) {
    if (typeof input !== "object" || input === null) return input;
    var prim = input[Symbol.toPrimitive];
    if (prim !== undefined) {
      var res = prim.call(input, hint || "default");
      if (typeof res !== "object") return res;
      throw new TypeError("@@toPrimitive must return a primitive value.");
    }
    return (hint === "string" ? String : Number)(input);
  }
  function _toPropertyKey(arg) {
    var key = _toPrimitive(arg, "string");
    return typeof key === "symbol" ? key : String(key);
  }

  var SDK_VERSION = 301;
  var DEFAULT_COOKIE_EXPIRATION = 730; // Days

  var DEFAULT_CONFIG = {
    enable: true,
    api_root: "https://server.apxor.com/v2/api",
    auto_track_events: ["click", "submit"],
    cookie_expiration: DEFAULT_COOKIE_EXPIRATION,
    name: "",
    domain: "",
    cookie_prefix: "_apx_",
    idle_time_out: 1800,
    //secs
    ed_t_time: -1,
    // Default: 1800000ms => 30 mins
    sct_time: 10800000,
    // Deafult: 10800000 => 3 hours
    events: {
      stop: [],
      action: []
    }
  };
  var DEFAULT_CLIENT_CONFIG = {
    debug: false,
    honorDNT: false,
    idle_time_out: 1800,
    //Secs
    client_id: null,
    session_id: null,
    plugins: [],
    version: "ALL",
    events_upload_time: -1,
    retry_time: -1,
    bulk_upload: true,
    auto_event_logging: false
  };
  var APX_PREFIX = "apx_";
  var LOCAL_STORAGE = "local_storage";
  var SESSION_STORAGE = "session_storage";
  var showEventsList = ["inline_shown", "inapp_shown", "apx_onboarding_screen_shown"];
  var surveyShowEventsList = ["apx_survey_dialog_launched", "apx_survey_launched"];
  var dismissEventsList = ["inline_dismissed", "walk_through_cancelled", "inapp_dismissed", "apx_onboarding_completed", "apx_onboarding_screen_dismissed"];
  var surveyDismissEventsList = ["apx_survey_completed"];
  var actionEventsList = ["apx_app_opened", "install", "apx_context_evaluated", "InlineTargetViewClicked", "InAppBackButtonPressed", "InAppRedirectionFailed", "inapp_show_failed", "InAppXIconClicked", "apx_video_inapp_button_clicked", "apx_video_inapp_close_button_clicked", "apx_video_inapp_failed", "apx_video_inapp_maximised", "apx_video_inapp_minimised", "apx_video_inapp_volume_button_clicked"];
  var surveyActionEventsList = ["apx_survey_dialog_yes_clicked", "apx_survey_dialog_close_icon_clicked", "apx_survey_close_button_clicked", "apx_survey_back_button_pressed", "apx_survey_dialog_no_clicked", "apx_survey_question_asked", "apx_survey_question_answered", "apx_survey_skip_button_clicked", "apx_survey_back_button_clicked", "apx_survey_"];
  var ON_KEY = "on";
  var BROWSERS = {
    OperaMini: "Opera Mini",
    Opera: "Opera",
    BlackBerry: "BlackBerry",
    IEMobile: "Internet Explorer Mobile",
    Edge: "Microsoft Edge",
    FB: "Facebook Mobile",
    Chrome: "Chrome",
    ChromeIOS: "Chrome iOS",
    UC: "UC Browser",
    FirefoxIOS: "Firefox iOS",
    SafariMobile: "Mobile Safari",
    Safari: "Safari",
    AndroidMobile: "Android Mobile",
    Konqueror: "Konqueror",
    Firefox: "Firefox",
    IE: "Internet Explorer",
    Mozilla: "Mozilla",
    Brave: "Brave"
  };

  /**
   * Permanent Keys
   */
  var APXOR_USER_ID = "apx_id";
  var APX_CONFIG_KEY = "_apx_config"; // this key is fixed

  var APX_USER_ATTR_KEY = "_apx_ua"; // this key is fixed

  var APX_SYNC = "_apx_sc"; // this key is fixed

  var APX_EVENTS_LOGGED = "_apx_evl";
  var APX_LAST_ENABLE_DISABLE_TIME = "_apx_ledt";
  var APX_LAST_ENABLED_FLAG = "_apx_lef";
  var APX_CONFIG_HASH = "_apx_ch";
  var APX_LAST_CONFIG_TIME = "_apx_lct";
  var APX_USER_INFO_HASH = "_apx_uih";
  var APX_INSTALL_KEY = "apx_in";
  var APP_VERSION_KEY = "apx_ver";
  var APX_LAST_BG_TIME_KEY = "apx_lbgt";
  var DETAILS_KEY = "details";
  var APXOR_STATUS_KEY = "apxor_status";
  var APXOR_STATUS_SUCCESS = "APXOR_STATUS_SUCCESS";
  var VISIBLE = "visible";
  var FOREGROUND = "FOREGROUND";
  var BACKGROUND = "BACKGROUND";
  var APX_PAGE_OPENED = "APX_PAGE_OPENED";
  var APX_APP_OPENED = "apx_app_opened";
  var REFERRER_KEY = "referrer";
  var AUTOMATION_KEY = "automation";
  var PLATFORM_KEY = "platform";
  var DATA_SAVE_MODE_KEY = "data_save_mode";
  var NETWORK_KEY = "network";
  var SYSTEM_EVENT = "SYSTEM_EVENT";
  var NAVIGATION_EVENT = "NAVIGATION_EVENT";
  var APP_EVENT = "APP_EVENT";
  var CLIENT_EVENT = "CLIENT_EVENT";
  var REATINED_SESSIONS = "apx_retained_session";
  var QE_STATE = "qe_state";
  var DEVICE_TYPE = "device_type";

  //Chunk and Session keys
  var APX_LAST_EVENT_TIME = "_apx_lEt";
  var APX_SESSION_ID = "_apx_sId";
  var APX_CURRENT_CHUNK = "_apx_cd";
  var OLD_SESSIONS_DATA = "_apx_od";
  var APX_LT_COUNT = "_apx_lt_count";
  var APX_UNSENT_CHUNK_DETAILS = "_apx_use";
  var APX_SESSION_CHUNK_NUMBER_MAP = "_apx_scnm";
  var APX_RETAINED_DAYS = "apx_retained_days";
  var APX_SESSION_START_TIME = "apx_sst";

  //TERMINATION KEYS
  var APX_TERMINATION_ID = "apx_termination_ID";
  var apxorKeys = ["apx_debug_enable", "apx_log_level", "_apx_config", "apx_id", "apx_ver", "apx_ver", "apx_in", "_apx_od", "_apx_use", "_apx_cd", "qe_state", "apx_retained_session", "apx_retained_days", "_apx_ua", "_apx_sc", "_apx_ledt", "_apx_lef", "_apx_ch", "_apx_lct", "_apx_uih", "apx_lbgt", "_apx_lEt", "_apx_sId", "_apx_lt_count", "apx_sst", "apx_termination_ID", "_apx_ew", "_apx_scnm", "0__lcfht", "1__lcfht", "_apx_td", "apx-last-shown-times", "apx-last-shown-session", "apx_survey_list"];

  /* eslint-disable strict */

  /**
   * Add integers, wrapping at 2^32.
   * This uses 16-bit operations internally to work around bugs in interpreters.
   *
   * @param {number} x First integer
   * @param {number} y Second integer
   * @returns {number} Sum
   */
  function safeAdd(x, y) {
    var lsw = (x & 0xffff) + (y & 0xffff);
    var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
    return msw << 16 | lsw & 0xffff;
  }

  /**
   * Bitwise rotate a 32-bit number to the left.
   *
   * @param {number} num 32-bit number
   * @param {number} cnt Rotation count
   * @returns {number} Rotated number
   */
  function bitRotateLeft(num, cnt) {
    return num << cnt | num >>> 32 - cnt;
  }

  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} q q
   * @param {number} a a
   * @param {number} b b
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5cmn(q, a, b, x, s, t) {
    return safeAdd(bitRotateLeft(safeAdd(safeAdd(a, q), safeAdd(x, t)), s), b);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ff(a, b, c, d, x, s, t) {
    return md5cmn(b & c | ~b & d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5gg(a, b, c, d, x, s, t) {
    return md5cmn(b & d | c & ~d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5hh(a, b, c, d, x, s, t) {
    return md5cmn(b ^ c ^ d, a, b, x, s, t);
  }
  /**
   * Basic operation the algorithm uses.
   *
   * @param {number} a a
   * @param {number} b b
   * @param {number} c c
   * @param {number} d d
   * @param {number} x x
   * @param {number} s s
   * @param {number} t t
   * @returns {number} Result
   */
  function md5ii(a, b, c, d, x, s, t) {
    return md5cmn(c ^ (b | ~d), a, b, x, s, t);
  }

  /**
   * Calculate the MD5 of an array of little-endian words, and a bit length.
   *
   * @param {Array} x Array of little-endian words
   * @param {number} len Bit length
   * @returns {Array<number>} MD5 Array
   */
  function binlMD5(x, len) {
    /* append padding */
    x[len >> 5] |= 0x80 << len % 32;
    x[(len + 64 >>> 9 << 4) + 14] = len;
    var i;
    var olda;
    var oldb;
    var oldc;
    var oldd;
    var a = 1732584193;
    var b = -271733879;
    var c = -1732584194;
    var d = 271733878;
    for (i = 0; i < x.length; i += 16) {
      olda = a;
      oldb = b;
      oldc = c;
      oldd = d;
      a = md5ff(a, b, c, d, x[i], 7, -680876936);
      d = md5ff(d, a, b, c, x[i + 1], 12, -389564586);
      c = md5ff(c, d, a, b, x[i + 2], 17, 606105819);
      b = md5ff(b, c, d, a, x[i + 3], 22, -1044525330);
      a = md5ff(a, b, c, d, x[i + 4], 7, -176418897);
      d = md5ff(d, a, b, c, x[i + 5], 12, 1200080426);
      c = md5ff(c, d, a, b, x[i + 6], 17, -1473231341);
      b = md5ff(b, c, d, a, x[i + 7], 22, -45705983);
      a = md5ff(a, b, c, d, x[i + 8], 7, 1770035416);
      d = md5ff(d, a, b, c, x[i + 9], 12, -1958414417);
      c = md5ff(c, d, a, b, x[i + 10], 17, -42063);
      b = md5ff(b, c, d, a, x[i + 11], 22, -1990404162);
      a = md5ff(a, b, c, d, x[i + 12], 7, 1804603682);
      d = md5ff(d, a, b, c, x[i + 13], 12, -40341101);
      c = md5ff(c, d, a, b, x[i + 14], 17, -1502002290);
      b = md5ff(b, c, d, a, x[i + 15], 22, 1236535329);
      a = md5gg(a, b, c, d, x[i + 1], 5, -165796510);
      d = md5gg(d, a, b, c, x[i + 6], 9, -1069501632);
      c = md5gg(c, d, a, b, x[i + 11], 14, 643717713);
      b = md5gg(b, c, d, a, x[i], 20, -373897302);
      a = md5gg(a, b, c, d, x[i + 5], 5, -701558691);
      d = md5gg(d, a, b, c, x[i + 10], 9, 38016083);
      c = md5gg(c, d, a, b, x[i + 15], 14, -660478335);
      b = md5gg(b, c, d, a, x[i + 4], 20, -405537848);
      a = md5gg(a, b, c, d, x[i + 9], 5, 568446438);
      d = md5gg(d, a, b, c, x[i + 14], 9, -1019803690);
      c = md5gg(c, d, a, b, x[i + 3], 14, -187363961);
      b = md5gg(b, c, d, a, x[i + 8], 20, 1163531501);
      a = md5gg(a, b, c, d, x[i + 13], 5, -1444681467);
      d = md5gg(d, a, b, c, x[i + 2], 9, -51403784);
      c = md5gg(c, d, a, b, x[i + 7], 14, 1735328473);
      b = md5gg(b, c, d, a, x[i + 12], 20, -1926607734);
      a = md5hh(a, b, c, d, x[i + 5], 4, -378558);
      d = md5hh(d, a, b, c, x[i + 8], 11, -2022574463);
      c = md5hh(c, d, a, b, x[i + 11], 16, 1839030562);
      b = md5hh(b, c, d, a, x[i + 14], 23, -35309556);
      a = md5hh(a, b, c, d, x[i + 1], 4, -1530992060);
      d = md5hh(d, a, b, c, x[i + 4], 11, 1272893353);
      c = md5hh(c, d, a, b, x[i + 7], 16, -155497632);
      b = md5hh(b, c, d, a, x[i + 10], 23, -1094730640);
      a = md5hh(a, b, c, d, x[i + 13], 4, 681279174);
      d = md5hh(d, a, b, c, x[i], 11, -358537222);
      c = md5hh(c, d, a, b, x[i + 3], 16, -722521979);
      b = md5hh(b, c, d, a, x[i + 6], 23, 76029189);
      a = md5hh(a, b, c, d, x[i + 9], 4, -640364487);
      d = md5hh(d, a, b, c, x[i + 12], 11, -421815835);
      c = md5hh(c, d, a, b, x[i + 15], 16, 530742520);
      b = md5hh(b, c, d, a, x[i + 2], 23, -995338651);
      a = md5ii(a, b, c, d, x[i], 6, -198630844);
      d = md5ii(d, a, b, c, x[i + 7], 10, 1126891415);
      c = md5ii(c, d, a, b, x[i + 14], 15, -1416354905);
      b = md5ii(b, c, d, a, x[i + 5], 21, -57434055);
      a = md5ii(a, b, c, d, x[i + 12], 6, 1700485571);
      d = md5ii(d, a, b, c, x[i + 3], 10, -1894986606);
      c = md5ii(c, d, a, b, x[i + 10], 15, -1051523);
      b = md5ii(b, c, d, a, x[i + 1], 21, -2054922799);
      a = md5ii(a, b, c, d, x[i + 8], 6, 1873313359);
      d = md5ii(d, a, b, c, x[i + 15], 10, -30611744);
      c = md5ii(c, d, a, b, x[i + 6], 15, -1560198380);
      b = md5ii(b, c, d, a, x[i + 13], 21, 1309151649);
      a = md5ii(a, b, c, d, x[i + 4], 6, -145523070);
      d = md5ii(d, a, b, c, x[i + 11], 10, -1120210379);
      c = md5ii(c, d, a, b, x[i + 2], 15, 718787259);
      b = md5ii(b, c, d, a, x[i + 9], 21, -343485551);
      a = safeAdd(a, olda);
      b = safeAdd(b, oldb);
      c = safeAdd(c, oldc);
      d = safeAdd(d, oldd);
    }
    return [a, b, c, d];
  }

  /**
   * Convert an array of little-endian words to a string
   *
   * @param {Array<number>} input MD5 Array
   * @returns {string} MD5 string
   */
  function binl2rstr(input) {
    var i;
    var output = "";
    var length32 = input.length * 32;
    for (i = 0; i < length32; i += 8) {
      output += String.fromCharCode(input[i >> 5] >>> i % 32 & 0xff);
    }
    return output;
  }

  /**
   * Convert a raw string to an array of little-endian words
   * Characters >255 have their high-byte silently ignored.
   *
   * @param {string} input Raw input string
   * @returns {Array<number>} Array of little-endian words
   */
  function rstr2binl(input) {
    var i;
    var output = [];
    output[(input.length >> 2) - 1] = undefined;
    for (i = 0; i < output.length; i += 1) {
      output[i] = 0;
    }
    var length8 = input.length * 8;
    for (i = 0; i < length8; i += 8) {
      output[i >> 5] |= (input.charCodeAt(i / 8) & 0xff) << i % 32;
    }
    return output;
  }

  /**
   * Calculate the MD5 of a raw string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rstrMD5(s) {
    return binl2rstr(binlMD5(rstr2binl(s), s.length * 8));
  }

  /**
   * Calculates the HMAC-MD5 of a key and some data (raw strings)
   *
   * @param {string} key HMAC key
   * @param {string} data Raw input string
   * @returns {string} Raw MD5 string
   */
  function rstrHMACMD5(key, data) {
    var i;
    var bkey = rstr2binl(key);
    var ipad = [];
    var opad = [];
    var hash;
    ipad[15] = opad[15] = undefined;
    if (bkey.length > 16) {
      bkey = binlMD5(bkey, key.length * 8);
    }
    for (i = 0; i < 16; i += 1) {
      ipad[i] = bkey[i] ^ 0x36363636;
      opad[i] = bkey[i] ^ 0x5c5c5c5c;
    }
    hash = binlMD5(ipad.concat(rstr2binl(data)), 512 + data.length * 8);
    return binl2rstr(binlMD5(opad.concat(hash), 512 + 128));
  }

  /**
   * Convert a raw string to a hex string
   *
   * @param {string} input Raw input string
   * @returns {string} Hex encoded string
   */
  function rstr2hex(input) {
    var hexTab = "0123456789abcdef";
    var output = "";
    var x;
    var i;
    for (i = 0; i < input.length; i += 1) {
      x = input.charCodeAt(i);
      output += hexTab.charAt(x >>> 4 & 0x0f) + hexTab.charAt(x & 0x0f);
    }
    return output;
  }

  /**
   * Encode a string as UTF-8
   *
   * @param {string} input Input string
   * @returns {string} UTF8 string
   */
  function str2rstrUTF8(input) {
    return unescape(encodeURIComponent(input));
  }

  /**
   * Encodes input string as raw MD5 string
   *
   * @param {string} s Input string
   * @returns {string} Raw MD5 string
   */
  function rawMD5(s) {
    return rstrMD5(str2rstrUTF8(s));
  }
  /**
   * Encodes input string as Hex encoded string
   *
   * @param {string} s Input string
   * @returns {string} Hex encoded string
   */
  function hexMD5(s) {
    return rstr2hex(rawMD5(s));
  }
  /**
   * Calculates the raw HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function rawHMACMD5(k, d) {
    return rstrHMACMD5(str2rstrUTF8(k), str2rstrUTF8(d));
  }
  /**
   * Calculates the Hex encoded HMAC-MD5 for the given key and data
   *
   * @param {string} k HMAC key
   * @param {string} d Input string
   * @returns {string} Raw MD5 string
   */
  function hexHMACMD5(k, d) {
    return rstr2hex(rawHMACMD5(k, d));
  }

  /**
   * Calculates MD5 value for a given string.
   * If a key is provided, calculates the HMAC-MD5 value.
   * Returns a Hex encoded string unless the raw argument is given.
   *
   * @param {string} string Input string
   * @param {string} [key] HMAC key
   * @param {boolean} [raw] Raw output switch
   * @returns {string} MD5 output
   */
  var md5 = function md5(string, key, raw) {
    if (!key) {
      if (!raw) {
        return hexMD5(string);
      }
      return rawMD5(string);
    }
    if (!raw) {
      return hexHMACMD5(key, string);
    }
    return rawHMACMD5(key, string);
  };

  var EventHandler = /*#__PURE__*/_createClass(function EventHandler() {
    var _this = this;
    _classCallCheck(this, EventHandler);
    _defineProperty(this, "notifyListeners", function (type, event) {
      // If there are no listeners, no need to notify listeners
      if (!_this._listeners[type]) {
        return;
      }
      var listeners = _this._listeners[type];

      // Notify all listeners
      for (var index = 0; index < listeners.length; index++) {
        var listener = listeners[index];
        listener(event);
      }
    });
    /**
     * Register a successCallback for given event type
     *
     * @param type
     * @param callback
     */
    _defineProperty(this, "registerForEvent", function (type, callback) {
      if (!isFunction(callback)) {
        return;
      }
      var listeners;
      if (_this._listeners[type]) {
        listeners = _this._listeners[type];
      } else {
        listeners = [];
      }
      listeners.push(callback);
      _this._listeners[type] = listeners;
    });
    /**
     * Unregisters the successCallback for the given event type
     * @param type
     * @param callback
     */
    _defineProperty(this, "unregisterFromEvent", function (type, callback) {
      if (_this._listeners[type]) {
        var listeners = _this._listeners[type];
        var updatedListeners = [];
        for (var index = 0; index < listeners.length; index++) {
          var listener = listeners[index];
          if (listener !== callback) {
            updatedListeners.push(listener);
          }
        }
        _this._listeners[type] = updatedListeners;
      }
    });
    _defineProperty(this, "tearDown", function () {
      _this._listeners = {};
    });
    this._listeners = {};
  });

  var ALL = "ALL";

  /**
   *
   * @param name
   * @param time
   * @returns {{name: *, time: number}}
   */
  var makeSystemEvent = function makeSystemEvent(name, time) {
    return {
      name: name === VISIBLE ? FOREGROUND : BACKGROUND,
      time: isNumber(time) ? toDecimalPoints(time) : 0
    };
  };

  /**
   *
   * @param name {String}
   * @param additional_info {Object}
   * @param category {String} [Optional]
   * @param time
   * @returns {{name: *, additional_info: *, time: number}}
   */
  var makeEvent = function makeEvent(name) {
    var additional_info = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var category = arguments.length > 2 ? arguments[2] : undefined;
    var time = arguments.length > 3 ? arguments[3] : undefined;
    if (isString(name) && isObject(additional_info)) {
      return {
        name: name,
        additional_info: additional_info,
        category: isDefined(category) ? isString(category) ? category : undefined : undefined,
        time: isNumber(time) ? toDecimalPoints(time) : 0
      };
    }
    return undefined;
  };

  /**
   *
   * @param siteName  // can consider site title if any
   * @param domain //can set in _session properties
   * @param installationTime //timestamp [launch_time if is_first_session = true]
   * @param appMode //localhost || production
   * @param appVersion
   * @returns {{app_name: *, app_version: string, bundle_id: *, installationTime: *, appMode: *}}
   */
  var makeAppInfo = function makeAppInfo(siteName, domain, installationTime, appMode, appVersion) {
    appVersion = isDefined(appVersion) ? appVersion : ALL;
    return {
      app_name: siteName,
      app_version: appVersion,
      bundle_id: domain,
      installation_time: installationTime,
      //sdk_first_run_time_web: Option[Long],
      app_mode: appMode
    };
  };

  /**
   *
   * @param id
   * @param hardware_model
   * @param dimensions
   * @param os_version
   * @param dpi
   * @param dimensions_in_pixels
   * @returns {{id: *, hardware_model: *, dimensions: *, os_version: *, platform: string, dpi: *, dimensions_in_pixels: *}}
   */
  var makeDeviceInfo = function makeDeviceInfo(id, hardware_model, dimensions, os_version, dpi, dimensions_in_pixels, browser, browser_version) {
    return {
      id: id,
      hardware_model: hardware_model,
      //Android, iOS
      dimensions: dimensions,
      os_version: os_version,
      platform: "web",
      dpi: dpi,
      dimensions_in_pixels: dimensions_in_pixels,
      browser: browser,
      browser_version: browser_version
    };
  };
  var makeNavigationEvent = function makeNavigationEvent(url, pageTitle, duration) {
    var time = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    return {
      navigation_id: url,
      name: pageTitle,
      duration: isNumber(duration) ? toDecimalPoints(duration) : 0,
      //sec
      transition_time: isNumber(time) ? toDecimalPoints(time) : 0
    };
  };
  var DEFAULT_CHUNK_DETAILS = {
    navigation_events: [],
    app_events: [],
    system_events: [],
    user_events: [],
    chunk_attributes: {},
    user_attributes: {},
    session_attributes: {}
  };
  var getSdkInfo = function getSdkInfo(launch_time) {
    return {
      sdk_version: SDK_VERSION,
      config_id: "apx",
      // default
      tick_interval: 1,
      // Sec
      chunk_retry_window: 1800,
      // default
      sdk_start_time: launch_time // timestamp
    };
  };

  var chunkInitialState = function chunkInitialState(sdkStartTime, sessionStartTime, sessionId) {
    var chunkNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    Logger.debug("Model : Building the initial state of the Chunk");
    return {
      sdk_info: getSdkInfo(sdkStartTime),
      session_info: {
        id: sessionId,
        launch_time: sessionStartTime,
        // timestamp
        launch_time_string: formatDatetime(new Date(sessionStartTime)),
        startup_time: 0,
        // Double
        is_background: false,
        is_first_session: false,
        duration: 0,
        total_duration: 0,
        process_name: "",
        is_fatal: false,
        launch_type: "normal"
      },
      app_info: {
        app_name: "",
        app_version: ALL,
        bundle_id: "",
        installation_time: Controller.getInstance().getInstallationTime(getNow()),
        app_mode: "production"
      },
      device_info: getDeviceInfo(window),
      chunk_meta: {
        id: sessionId + ":" + chunkNumber,
        number: chunkNumber,
        reporting_times: []
      },
      chunk_details: _objectSpread2(_objectSpread2({}, DEFAULT_CHUNK_DETAILS), {}, {
        user_attributes: {},
        session_attributes: {}
      })
    };
  };

  var Request = /*#__PURE__*/_createClass(
  /**
   *
   * @param window
   */
  function Request() {
    var _this = this;
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    _classCallCheck(this, Request);
    /**
     *
     * @param url
     * @param data
     * @param callback
     * @param sync
     */
    _defineProperty(this, "post", function (url) {
      var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var callback = arguments.length > 2 ? arguments[2] : undefined;
      var headers = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
      var sync = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : true;
      var XMLHttpRequest = _this.window.XMLHttpRequest;
      Logger.debug("Request : POST request with data");
      if (XMLHttpRequest) {
        _this._makeXmlHttpRequest(url, data, callback, headers, sync);
      } else {
        Logger.error("Request : Unknown browser");
        callback(403, "Unknown");
      }
      Logger.debug("Request : Sent request to server");
    });
    _defineProperty(this, "get", function (url, callback) {
      var _this$window = _this.window,
        fetch = _this$window.fetch,
        XMLHttpRequest = _this$window.XMLHttpRequest;
      if (fetch) {
        fetch(url).then(function (res) {
          try {
            if (res.ok) {
              return res.json();
            }
          } catch (e) {
            Logger.debug("Request : Error while parsing the response ".concat(e));
          }
          return null;
        }).then(function (json) {
          if (isDefined(json)) {
            callback(200, json);
          } else {
            Logger.error("Request : API request failed. ".concat(JSON.stringify(json)));
            callback(500, {});
          }
        })["catch"](function (err) {
          Logger.error("Request : API request failed. ".concat(err));
          callback(500, err);
        });
      } else if (XMLHttpRequest) {
        //For rest
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url, true);
        xhr.onreadystatechange = function () {
          if (xhr.readyState === 4) {
            callback(xhr.status, xhr.responseText);
          }
        };
        xhr.send();
      } else {
        Logger.error("Request : Unknown browser");
        callback(403, "Unknown");
      }
      Logger.debug("Request : sent request to server");
    });
    _defineProperty(this, "_makeXmlHttpRequest", function (url, data, callback, headers, sync) {
      var xhr = new XMLHttpRequest();
      xhr.onerror = function (err) {
        Logger.error("Request : API request failed. ".concat(err));
        callback(500, null);
      };
      xhr.open("POST", url, sync);
      xhr.setRequestHeader("Content-Type", "application/json; charset=UTF-8");
      var keys = Object.keys(headers !== null && headers !== void 0 ? headers : {});
      keys.forEach(function (key) {
        xhr.setRequestHeader(key, headers[key]);
      });
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          var response = xhr.responseText;
          // Check if the Synchronous XHR is not allowed upon page dismissal, if yes make async request
          var expr = response.match(/Failed to execute 'send' on 'XMLHttpRequest'/);
          if (!isNull(expr) && !isUndefined(expr) && !isNull(expr[0]) && !isUndefined(expr[0]) && expr[0] === "Failed to execute 'send' on 'XMLHttpRequest'") {
            _this._makeXmlHttpRequest(url, data, callback, true);
            return;
          }
          try {
            response = JSON.parse(response);
          } catch (e) {
            Logger.debug("Request : Error while parsing the response ".concat(e));
          }
          callback(xhr.status, response);
        }
      };
      try {
        xhr.send(JSON.stringify(data));
      } catch (e) {
        Logger.error("Request : API request failed. ".concat(e));
        callback(500, e);
      }
    });
    this.window = window;
  });

  var CHUNKS_API = "/chunks?appId=<app-id>&isTestDevice=<test-device>";
  var CONFIG_API = "/config/<app-id>/web";
  var SDK_ENABLED_API = "/sdk/<app-id>/enabled-status?platform=web&version=" + SDK_VERSION;
  var POST_USER_INFO_API = "/user?appId=<app-id>";
  var API_ROOT = DEFAULT_CONFIG.api_root;
  var _makeAPI = function _makeAPI(api, siteId) {
    return API_ROOT + api.replace("<app-id>", siteId);
  };
  var API = /*#__PURE__*/_createClass(function API(siteId) {
    var _this = this;
    var window = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    _classCallCheck(this, API);
    _defineProperty(this, "_callback", function () {
      var resolve = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {
        return null;
      };
      var reject = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
        return null;
      };
      return function (responseCode, response) {
        Logger.debug("XHR Response: [".concat(responseCode, "]"));
        if (responseCode < 400) {
          // FIXME need better handling
          if (response && response[APXOR_STATUS_KEY] === APXOR_STATUS_SUCCESS) {
            if (response[DETAILS_KEY]) {
              resolve(response[DETAILS_KEY]);
            } else {
              resolve(response);
            }
          } else if (responseCode === 200) {
            resolve(response);
          } else {
            reject(responseCode, response);
          }
        } else if (reject && isFunction(reject)) {
          reject(responseCode, response);
        }
      };
    });
    _defineProperty(this, "checkIfSDKEnabled", function (resolve, reject) {
      _this.makeGetRequest(_this.sdkEnabledStatusAPI, resolve, reject);
    });
    // V2 config request is of type GET
    _defineProperty(this, "getConfig", function (resolve, reject) {
      _this.makeGetRequest(_this.configAPI, resolve, reject);
    });
    // Updated user attributes will be posted to the server for every session
    _defineProperty(this, "postUserInfo", function (data, resolve, reject) {
      _this.request.post(_this.userInfoAPI, data, _this._callback(resolve, reject), {});
    });
    _defineProperty(this, "postChunk", function (data, resolve, reject) {
      var sync = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
      Logger.debug("Posting chunk");
      _this.request.post(_this.chunksAPI, data, _this._callback(resolve, reject), {}, sync);
    });
    _defineProperty(this, "makeGetRequest", function (url, resolve, reject) {
      _this.request.get(url, _this._callback(resolve, reject));
    });
    _defineProperty(this, "makePostRequest", function (url, data, headers, resolve, reject) {
      _this.request.post(url, data, _this._callback(resolve, reject), headers);
    });
    this.request = new Request(window);
    this.configAPI = _makeAPI(CONFIG_API, siteId);
    this.chunksAPI = _makeAPI(CHUNKS_API, siteId);
    this.chunksAPI = this.chunksAPI.replace("<test-device>", Controller.getInstance().isTestDevice());
    this.sdkEnabledStatusAPI = _makeAPI(SDK_ENABLED_API, siteId);
    this.userInfoAPI = _makeAPI(POST_USER_INFO_API, siteId);
  });

  var SessionHandler = /*#__PURE__*/_createClass(function SessionHandler() {
    var _this = this;
    var totalBgTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    _classCallCheck(this, SessionHandler);
    _defineProperty(this, "_lastBackgroundTime", -1);
    _defineProperty(this, "_totalBackgroundTime", 0);
    _defineProperty(this, "getTotalBackgroundTime", function () {
      return _this._totalBackgroundTime;
    });
    _defineProperty(this, "getLastBackgroundTime", function () {
      return _this._lastBackgroundTime;
    });
    _defineProperty(this, "reset", function () {
      _this._lastBackgroundTime = -1;
      _this._totalBackgroundTime = 0;
    });
    _defineProperty(this, "_onSystemEvent", function (event) {
      var eventName = event.name;
      if (eventName === FOREGROUND) {
        if (_this._lastBackgroundTime !== -1) {
          // Need to update the totalBackgroundTime
          // If new session needs to be created, this should not give wrong times to newly created session
          // Also, If new session gets created `totalBackgroundTime` will reset to 0 and value of `time` will be milliseconds
          var time = Math.round(millisToSeconds(Date.now() - _this._lastBackgroundTime));

          // Upon every foreground, calculate total background time
          _this._totalBackgroundTime += time;

          // If event is FOREGROUND, check sessionId is modified in some other tab
          var sessionId = Controller.getInstance().getFromStorage(APX_SESSION_ID);
          if (isDefined(sessionId) && Controller.getInstance().getSessionId() !== sessionId) {
            // New session is created due to idle time out in some other tab or window
            // We should not loose any data if it is logged and we should not create new session
            Controller.getInstance().createANewChunk();

            // Overwrite totalBgTime
            var _Controller$getInstan = Controller.getInstance().getSessionInfo(),
              total_duration = _Controller$getInstan.total_duration,
              duration = _Controller$getInstan.duration;
            _this._totalBackgroundTime = total_duration > duration ? total_duration - duration : 0;
          }
        }
      } else {
        _this._lastBackgroundTime = Date.now();
        Controller.getInstance().persistToStorage(APX_LAST_BG_TIME_KEY, _this._lastBackgroundTime);
      }
    });
    Controller.getInstance().registerForEvent(SYSTEM_EVENT, this._onSystemEvent);
    this._totalBackgroundTime = totalBgTime;

    // The value must be reset
    Controller.getInstance().persistToStorage(APX_LAST_BG_TIME_KEY, this._lastBackgroundTime);
  });

  /**
   * Either LocalStorage or SessionStorage
   */
  var Storage = /*#__PURE__*/function () {
    /**
     * @param storageType {string}
     */
    function Storage(_storageType) {
      var _this = this;
      _classCallCheck(this, Storage);
      _defineProperty(this, "_isStorageAvailable", false);
      /**
       *
       * @returns {boolean}
       */
      _defineProperty(this, "_isSupported", function (storageType) {
        var supported = true;
        try {
          var key = "_apx_",
            val = "apx";
          if (window[storageType]) {
            window[storageType].setItem(key, val);
            if (window[storageType].getItem(key) !== val) {
              supported = false;
            }
            window[storageType].removeItem(key);
          } else {
            supported = false;
          }
        } catch (err) {
          supported = false;
        }
        if (!supported) {
          Logger.error("Storage : LocalStorage not supported");
        }
        return supported;
      });
      /**
       *
       * @param error
       */
      _defineProperty(this, "logError", function (error) {
        Logger.error("".concat(_this.storageType, " Error: "), error);
      });
      /**
       *
       * @param key
       * @returns {*}
       */
      _defineProperty(this, "get", function (key) {
        try {
          return _this.storage.getItem(key);
        } catch (err) {
          Logger.error("Storage : Error while getting the ".concat(key, " from storage - ").concat(err));
        }
        return null;
      });
      /**
       *
       * @param key
       * @returns {*}
       */
      _defineProperty(this, "getParsed", function (key) {
        try {
          return JSON.parse(_this.storage.getItem(key));
        } catch (err) {
          Logger.error("Storage : Error while parsing ".concat(key, "'s value from storage - ").concat(err));
        }
        return null;
      });
      /**
       *
       * @param key
       * @param value
       */
      _defineProperty(this, "set", function (key, value) {
        try {
          _this.storage.setItem(key, value);
        } catch (err) {
          Logger.error("Storage : Error while setting the ".concat(key, "'s value to storage - ").concat(err));
        }
      });
      /**
       *
       * @param key
       */
      _defineProperty(this, "remove", function (key) {
        try {
          _this.storage.removeItem(key);
        } catch (err) {
          Logger.error("Storage : Error while removing the ".concat(key, " from storage - ").concat(err));
        }
      });
      _defineProperty(this, "clear", function () {
        try {
          _this.storage.removeItem(APX_CONFIG_KEY);
          _this.storage.removeItem(APX_USER_ATTR_KEY);
          _this.storage.removeItem(APX_LAST_EVENT_TIME);
          _this.storage.removeItem(APX_SESSION_ID);
          _this.storage.removeItem(APX_SYNC);
          _this.storage.removeItem(APXOR_USER_ID);
          _this.storage.removeItem(APX_INSTALL_KEY);
          _this.storage.removeItem(APP_VERSION_KEY);
          _this.storage.removeItem(APX_LAST_BG_TIME_KEY);
          _this.storage.removeItem(APX_CURRENT_CHUNK);
          _this.storage.removeItem(OLD_SESSIONS_DATA);
          _this.storage.removeItem(APX_LT_COUNT);
          _this.storage.removeItem(APX_UNSENT_CHUNK_DETAILS);
          _this.storage.removeItem(APX_SESSION_CHUNK_NUMBER_MAP);
          _this.storage.removeItem(APX_LAST_CONFIG_TIME);
          _this.storage.removeItem(APX_CONFIG_HASH);
          _this.storage.removeItem(APX_LAST_ENABLED_FLAG);
          _this.storage.removeItem(APX_LAST_ENABLE_DISABLE_TIME);
        } catch (err) {
          Logger.error("Storage : Error while clearing the storage - ".concat(err));
        }
      });
      this._isStorageAvailable = this._isSupported(_storageType);
      if (!this._isStorageAvailable) {
        this.storageType = _storageType;
        this.storage = {
          length: 0,
          getItem: function getItem() {},
          setItem: function setItem() {},
          removeItem: function removeItem() {},
          clear: function clear() {},
          get: function get() {},
          set: function set() {},
          remove: function remove() {},
          getParsed: function getParsed() {}
        };
      } else {
        this.storage = window[_storageType];
        this.storageType = _storageType;
      }
    }

    /**
     * @static
     * @function waitForBrowserStorage
     * @description After every 100ms interval checks if the browsers localstorage is available or not. Max checks it does is 15.
     * @param {function} callBack - callBack to call after the browsers localStorage is available
     */
    _createClass(Storage, [{
      key: "isStorageAvailable",
      value: function isStorageAvailable() {
        return this._isStorageAvailable;
      }
    }], [{
      key: "waitForBrowserStorage",
      value: function waitForBrowserStorage(callBack) {
        var maxTestsForStorage = 15;
        var storageWaitIntervalId = setInterval(function () {
          maxTestsForStorage--;
          if (Storage.isLocalStorageEnabled() || maxTestsForStorage <= 0) {
            Logger.debug("Storage : Local storage available");
            clearInterval(storageWaitIntervalId);
            callBack();
          } else {
            Logger.debug("Storage : Local storage not available yet");
          }
        }, 100);
      }

      /**
       * @static
       * @function    isLocalStorageEnabled
       * @description Checks if the localStorage of the browser is available or not
       * @returns     true  - If the storage is available
       *              false - If the storage is not available
       */
    }, {
      key: "isLocalStorageEnabled",
      value: function isLocalStorageEnabled() {
        try {
          var key = "__apx_storage_test__";
          window.localStorage.setItem(key, "test");
          var value = window.localStorage.getItem(key);
          window.localStorage.removeItem(key);
          if (value === "test") return true;else return false;
        } catch (e) {
          Logger.debug("Browser storage is not enabled yet : ".concat(e));
          return false;
        }
      }
    }]);
    return Storage;
  }();
  function storage () {
    return new Storage("localStorage");
  }
  function sessionStorage() {
    return new Storage("sessionStorage");
  }

  /**
   * Resource: //quirksmode.org/js/cookies.html
   */
  var Cookie = /*#__PURE__*/_createClass(function Cookie() {
    _classCallCheck(this, Cookie);
  });
  _defineProperty(Cookie, "isCookieAvailable", function () {
    try {
      var date = new Date().getTime() + 24 * 60 * 60 * 1000;
      document.cookie = "cookie_set=cookie_value; expires=" + date;
      var cookies = document.cookie.split(";");
      for (var index = 0; index < cookies.length; index++) {
        var cookie = cookies[index];
        if (cookie.indexOf("cookie_set") !== -1) {
          document.cookie = "cookie_set=cookie_value; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
          return true;
        }
      }
      return false;
    } catch (err) {
      return false;
    }
  });
  /**
   *
   * @param name
   * @returns {*}
   */
  _defineProperty(Cookie, "get", function (name) {
    if (window.document) {
      var nameEQ = name + "=";
      var ca = window.document.cookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) === " ") {
          c = c.substring(1, c.length);
        }
        if (c.indexOf(nameEQ) === 0) {
          return decodeURIComponent(c.substring(nameEQ.length, c.length));
        }
      }
    }
    return null;
  });

  var DataManager = /*#__PURE__*/function () {
    function DataManager(siteId) {
      var _this = this;
      _classCallCheck(this, DataManager);
      _defineProperty(this, "_siteId", "");
      _defineProperty(this, "getExistingConfig", function () {
        var _config;
        var config = _this.storage.get(APX_CONFIG_KEY);
        if (isDefined(config)) {
          try {
            config = JSON.parse(decode(_this._siteId, config));
          } catch (e) {
            config = null;
          }
        }
        return (_config = config) !== null && _config !== void 0 ? _config : DEFAULT_CONFIG;
      });
      _defineProperty(this, "persistConfig", function (config) {
        _this.storage.set(APX_CONFIG_KEY, encode(_this._siteId, JSON.stringify(config)));
      });
      _defineProperty(this, "persistUserId", function (id) {
        _this.storage.set(APXOR_USER_ID, id);
      });
      _defineProperty(this, "getUserId", function () {
        var userId = null;
        //Log an exception if any when gettting the user id.
        // This could be because of the Storage excess or inaccessible storage
        try {
          userId = _this.storage.get(APXOR_USER_ID);
        } catch (e) {
          Logger.debug("Datamaager : Can not get user id from storage-" + e);
        }
        return userId;
      });
      _defineProperty(this, "persistAppVersion", function (version) {
        return _this.storage.set(APP_VERSION_KEY, version);
      });
      _defineProperty(this, "getAppVersion", function () {
        var appVersion = _this.storage.get(APP_VERSION_KEY);
        if (!isDefined(appVersion) && Cookie.isCookieAvailable()) {
          // Check in Cookies
          var storedAppVersion = Cookie.get(APP_VERSION_KEY);
          if (isDefined(storedAppVersion)) {
            // Copy value from cookie and store it in LocalStorage
            _this.storage.set(APP_VERSION_KEY, storedAppVersion);
            return storedAppVersion;
          }
        }
        return appVersion;
      });
      _defineProperty(this, "persist", function (key, value) {
        var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LOCAL_STORAGE;
        if (storage === LOCAL_STORAGE) {
          _this.storage.set(key, value);
        } else if (storage === SESSION_STORAGE) {
          _this.sessionStorage.set(key, value);
        }
      });
      _defineProperty(this, "getItem", function (key) {
        var encoded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LOCAL_STORAGE;
        var data;
        if (storage === LOCAL_STORAGE) {
          data = _this.storage.get(key);
        } else if (storage === SESSION_STORAGE) {
          data = _this.sessionStorage.get(key);
        }
        if (encoded) {
          var jsonData = getJSONOrNull(data);
          if (jsonData === null) {
            try {
              data = JSON.parse(decode(_this._siteId, data));
            } catch (e) {
              Logger.debug("Datamanager : ".concat(key, " - value not found in storage"));
              data = null;
            }
          } else {
            data = jsonData;
          }
        }
        Logger.debug("Datamanager : ".concat(key, "'s value from storage is ").concat(JSON.stringify(data)));
        return data;
      });
      _defineProperty(this, "getItemOrDefault", function (key, defaultValue) {
        var encoded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var storage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : LOCAL_STORAGE;
        var value = _this.getItem(key, encoded, storage);
        if (isDefined(value)) {
          return value;
        } else {
          Logger.debug("Datamanager : ".concat(key, "'s value is not defined. Returning default-").concat(JSON.stringify(defaultValue)));
          return defaultValue;
        }
      });
      _defineProperty(this, "clearStorage", function () {
        _this.storage.clear();
        _this.sessionStorage.clear();
      });
      /**
       * @function removeUserAttributes
       * @description Removes the user properties from the storage
       */
      _defineProperty(this, "resetUserProperties", function () {
        Logger.debug("Datamanager : Removing the user attributes form the storage");
        _this.storage.remove(APX_USER_ATTR_KEY);
      });
      /**
       * @function        persistInstallationTime
       * @description     Sets the installation time(apx_in) in the local storage.
       * @param {number}  time - time in milliseconds (Equivalent to Date.now())
       */
      _defineProperty(this, "persistInstallationTime", function (time) {
        Logger.debug("DataManager : Setting the installation time to ".concat(time));
        _this.storage.set(APX_INSTALL_KEY, time);
      });
      /**
       * @function        getInstallationTime
       * @param {number}  defaultTime
       * @returns         Returns the installation time from localstorage or the defaulttime.
       */
      _defineProperty(this, "getInstallationTime", function (defaultTime) {
        var storedInstallTime = _this.storage.get(APX_INSTALL_KEY);
        if (!isDefined(storedInstallTime)) {
          Logger.debug("Datamanager : Stored installation time not found. Persisting and returning the default time ".concat(defaultTime));
          _this.persistInstallationTime(defaultTime);
          return defaultTime;
        } else {
          Logger.debug("Datamanager : Stored installation time ".concat(storedInstallTime));
          return Number(storedInstallTime);
        }
      });
      /**
       * @function        persistOldChunk
       * @description     Persists the old chunk to the local storage.
       * @param {object}  data
       */
      _defineProperty(this, "persistOldChunk", function (data) {
        Logger.debug("Datamanager : Persisting the old session chunk to the storage");
        _this.storage.set(OLD_SESSIONS_DATA, encode(_this._siteId, JSON.stringify(data)));
      });
      /**
       * @function    getOldChunk
       * @description Returns the old chunk stored in the local storage
       * @returns {object} old chunk data from the local storage
       */
      _defineProperty(this, "getOldChunk", function () {
        var _data;
        Logger.debug("Datamanager : Getting the old session chunk details form the storage");
        var data = _this.storage.get(OLD_SESSIONS_DATA);
        var jsonData = getJSONOrNull(data);
        if (jsonData === null) {
          try {
            data = JSON.parse(decode(_this._siteId, data));
          } catch (e) {
            data = null;
          }
        } else {
          data = jsonData;
        }
        return (_data = data) !== null && _data !== void 0 ? _data : [];
      });
      /**
       * @function removeOldChunk
       * @description Removes the old chunk from the local storage
       */
      _defineProperty(this, "removeOldChunk", function () {
        Logger.debug("Datamanager : Removing the old session chunk details form the storage");
        _this.storage.remove(OLD_SESSIONS_DATA);
      });
      /**
       * @function          getOldChunkDetails
       * @description       Returns the old chunk details from the local storage.
       * @returns {object}  old chunk details
       */
      _defineProperty(this, "getOldChunkDetails", function () {
        return _this.getItem(APX_UNSENT_CHUNK_DETAILS, true);
      });
      /**
       * @function        persistOldChunkDetails
       * @description     Persists the old chunk details to the local storage.
       * @param {object}  data
       */
      _defineProperty(this, "persistOldChunkDetails", function (data) {
        Logger.debug("Datamanager : Persisting the old session chunk details to the storage");
        _this.storage.set(APX_UNSENT_CHUNK_DETAILS, encode(_this._siteId, JSON.stringify(data)));
      });
      /**
       * @function removeOldChunkDetails
       * @description Removes the old session chunk details key and its value from the local storage
       */
      _defineProperty(this, "removeOldChunkDetails", function () {
        Logger.debug("Datamanager : Removing the old session chunk details form the storage");
        _this.storage.remove(APX_UNSENT_CHUNK_DETAILS);
      });
      /**
       * @function getSessionsChunkNumberMap
       * @description Returns the chunk number map by getting it from the local storage.
       * @returns {object} Chunk number map
       */
      _defineProperty(this, "getSessionsChunkNumberMap", function () {
        Logger.debug("Datamanager : Getting the session chunknumber map");
        var sessionChunkMap = _this.getItem(APX_SESSION_CHUNK_NUMBER_MAP, true);
        if (!isDefined(sessionChunkMap)) {
          sessionChunkMap = {};
        }
        return sessionChunkMap;
      });
      /**
       * @function        persistSessionsChunkNumberMap
       * @description     Persists the chunk number map to the local storage.
       * @param {object}  chunkNumberMap
       */
      _defineProperty(this, "persistSessionsChunkNumberMap", function (chunkNumberMap) {
        Logger.debug("Datamanager : Persisting the new session chunknumber map");
        var encodedMap = encode(_this._siteId, JSON.stringify(chunkNumberMap));
        _this.persist(APX_SESSION_CHUNK_NUMBER_MAP, encodedMap);
      });
      /**
       * @function        getNewChunk
       * @description     This returns either complete new session and new chunk or old session with new chunk
       * @param {number}  sdkStartTime
       * @param {number}  sessionStartTime
       * @param {string}  newSessionId
       * @param {number}  idleTimeout
       */
      _defineProperty(this, "getNewChunk", function () {
        var sdkStartTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
        var sessionStartTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : Date.now();
        var newSessionId = arguments.length > 2 ? arguments[2] : undefined;
        var idleTimeout = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 3600;
        Logger.debug("Datamanager : Creating a new chunk");
        var is_new_session = false;
        var lastEventTime = Number(_this.storage.get(APX_LAST_EVENT_TIME)) || 0;
        var currentTime = Date.now();
        var lastEventToNowDiff = Math.round(millisToSeconds(currentTime - lastEventTime));
        var currentChunk = _this.getCurrentChunk();

        // If the idletimeout is reached, a new session needs to be created
        if (lastEventToNowDiff > idleTimeout || isNotDefined(currentChunk)) {
          // Setting the currentChunk to NULL which creates new session forcefully
          is_new_session = true;
        }
        var chunk;
        if (!is_new_session) {
          Logger.debug("Datamanager : This is an old session. Updating the existing chunk");
          // Get the chunk number and session id from the current chunk
          var number = currentChunk.chunk_meta.number,
            id = currentChunk.session_info.id;
          var chunkNumber = number + 1;

          // Copy the details of the current chunk into the new chunk
          chunk = _objectSpread2({}, currentChunk);

          // Update the chunk number and id in chunk meta
          chunk.chunk_meta = _objectSpread2(_objectSpread2({}, chunk.chunk_meta), {}, {
            number: chunkNumber,
            id: id + ":" + chunkNumber,
            reporting_times: [Date.now()]
          });

          // Reset the chunk details to the default.
          chunk.chunk_details = _objectSpread2({}, DEFAULT_CHUNK_DETAILS);
        } else {
          Logger.debug("Datamanager : This is a new session. Creating a new chunk");
          // Create New Chunk with the default initial state
          chunk = chunkInitialState(sdkStartTime, sessionStartTime, newSessionId);
        }
        return {
          is_new_session: is_new_session,
          chunk: chunk
        };
      });
      /**
       * @function    clearCurrentChunk
       * @description Clears the current chunk from the local storage
       */
      _defineProperty(this, "clearCurrentChunk", function () {
        Logger.debug("Datamanager : Current chunk removed from storage");
        _this.storage.remove(APX_CURRENT_CHUNK);
      });
      /**
       * @function persistCurrentChunk
       * @description Persists the current chunk into the local storage
       * @param {object} chunk
       */
      _defineProperty(this, "persistCurrentChunk", function (chunk) {
        Logger.debug("Datamanager : Persisting the Current chunk to storage");
        ensureSessionInfoKeys(chunk); // Ensure session_info keys are present
        _this.storage.set(APX_CURRENT_CHUNK, encode(_this._siteId, JSON.stringify(chunk)));
      });
      _defineProperty(this, "getCurrentChunk", function () {
        return _this.getItem(APX_CURRENT_CHUNK, true);
      });
      this._siteId = siteId;
      this.storage = storage();
      this.sessionStorage = sessionStorage();
      Logger.debug("DataManager : Initialized");
    }
    _createClass(DataManager, [{
      key: "getltCount",
      value: function getltCount(name) {
        try {
          var data = this.storage.get(APX_LT_COUNT);
          if (data) {
            var decoded = decode(this._siteId, data);
            var parsed = JSON.parse(decoded);
            // when new event is added in localstorage getting count undefined
            var evName = name.replace("'", "").replace("’", "");
            return parsed[evName];
          }
        } catch (e) {
          Logger.error("Datamanager : Error gettting the LT Count for the event -" + name);
        }
        return 0;
      }
    }, {
      key: "updateRetainedDayCount",
      value:
      /**
       * @function updateRetainedDayCount
       * @description Re-calculates the retention day count and persists it to localstorage
       * @param {number} startTime
       */
      function updateRetainedDayCount(startTime) {
        Logger.debug("Datamanager : Re-calculating and updating the retention day");
        var installationTime = this.getItem(APX_INSTALL_KEY);
        var hours = Math.abs(installationTime - startTime) / 36e5;
        var retained_days = Math.floor(hours / 24);
        this.persist(APX_RETAINED_DAYS, retained_days);
      }
    }]);
    return DataManager;
  }();

  var VISIBILITY_CHANGE_EVENT = "visibilitychange";
  var SCROLL_EVENT_TYPES = ["scroll", "touchmove"];

  /**
   * Monitors System events and User events
   */
  var SystemEventMonitor = /*#__PURE__*/_createClass(function SystemEventMonitor() {
    var _this = this;
    var isFirst = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    _classCallCheck(this, SystemEventMonitor);
    _defineProperty(this, "_isFirst", true);
    _defineProperty(this, "listenSystemEvents", function () {
      Logger.debug("Registering for System Event ", VISIBILITY_CHANGE_EVENT);
      var handler = function handler() {
        var controller = Controller.getInstance();
        var time = controller.getSDKRunningTimeInSec();
        var isForeground = window.document.visibilityState === VISIBLE;
        var systemEvent = makeSystemEvent(window.document.visibilityState, time);
        if (isForeground) {
          controller.setBlockChunkReportingFlag(false);
          if (_this._lastBackgroundTime > -1) {
            controller.sendOldChunk(function () {
              controller.dispatchEvent(SYSTEM_EVENT, systemEvent);
            });
            systemEvent["background_time"] = toDecimalPoints(millisToSeconds(Date.now() - _this._lastBackgroundTime));
          }
        } else {
          controller.setBlockChunkReportingFlag(true);
          // Report the chunk
          controller.reportChunkOnVisibilityChange();
          _this._lastBackgroundTime = Date.now();
          controller.dispatchEvent(SYSTEM_EVENT, systemEvent);
        }

        // Creating Page View
        if (isForeground) {
          var browser = controller.getUserAttributes().apx_browser;
          if (!_this._isFirst || browser.indexOf("Mobile Safari") !== -1 && browser.indexOf("Safari") !== -1) ; else {
            _this._isFirst = false;
          }
        } else {
          controller.clearNavigation();
        }
      };
      registerForEvent(document, VISIBILITY_CHANGE_EVENT, handler);
      _this._handlers.push(_this._newHandler(VISIBILITY_CHANGE_EVENT, handler));
    });
    /**
     * Unregisters for all auto track events
     */
    _defineProperty(this, "unregisterEvents", function () {
      _this._handlers.forEach(function (_ref) {
        var type = _ref.type,
          handler = _ref.handler;
        Logger.debug("Unregistering from event type ", type);
        if (SCROLL_EVENT_TYPES.includes(type)) {
          deregisterFromEvent(window.document, type, handler);
        } else {
          deregisterFromEvent(document, type, handler);
        }
      });
      _this._handlers = []; // emptying
      _this._scrollEvents = [];
      _this._scrollData = {};
    });
    /**
     * Gives the final scroll events, calculated from listened events
     * @returns {Array}
     */
    _defineProperty(this, "getScrollEvents", function () {
      return [];
    });
    _defineProperty(this, "_newHandler", function (type, handler) {
      return {
        type: type,
        handler: handler
      };
    });
    this._lastBackgroundTime = -1;
    this._handlers = [];
    this._scrollEvents = [];
    this._scrollData = {};
    this._isFirst = isFirst;
    this.listenSystemEvents();
  });

  var Sync = /*#__PURE__*/_createClass(function Sync() {
    var _this = this;
    _classCallCheck(this, Sync);
    _defineProperty(this, "_validateHash", true);
    _defineProperty(this, "_siteId", "");
    _defineProperty(this, "_RTA", 0);
    _defineProperty(this, "_SURVEYS", 1);
    _defineProperty(this, "initialize", function (config, siteId) {
      _this._siteId = siteId;
      var _config$validate_hash = config.validate_hash,
        validate_hash = _config$validate_hash === void 0 ? true : _config$validate_hash,
        _config$cs_ht_time = config.cs_ht_time,
        cs_ht_time = _config$cs_ht_time === void 0 ? -1 : _config$cs_ht_time;
      _this._validateHash = validate_hash;
      _this.configsHashThrottleTime = cs_ht_time;
      Controller.getInstance().registerForEvent(APP_EVENT, function (event) {
        _this._updateCountInStorage(event.name);
      });
    });
    _defineProperty(this, "fetchConfiguration", function (type, validateUrl, apiUrl, callback) {
      if (!isFunction(callback)) {
        return;
      }
      if (!_this._validateHash) {
        _this._fetchConfig(type, apiUrl, [], callback);
        return;
      }
      var controller = Controller.getInstance();
      if (_this.configsHashThrottleTime > 0) {
        var lastConfigHashTime = controller.getValueOrDefault(type + "_lcfht", -1);
        if (lastConfigHashTime > 0) {
          var diff = Math.abs(Date.now() - lastConfigHashTime);
          if (diff < _this.configsHashThrottleTime) {
            // fetch config from storage
            _this._fetchFromStorageAndSend(type, callback);
            return;
          }
        }
      }
      controller.persistToStorage(type + "_lcfht", Date.now());
      var syncData = _this._getSyncData();
      var requestBody = {
        pid_mid: []
        //pid_mid: "",
        // installation_date: controller.getInstallationTime(),
        // session: parseInt(controller.getFromStorage("apx_retained_session")),
        // user_attributes: controller.getUserAttributes(),
        // session_attributes: controller.getSessionAttributes(),
      };

      // const appVersion = controller.getFromStorage("apx_ver");
      // if (isDefined(appVersion) && appVersion !== "") {
      //   requestBody["app_version"] = appVersion;
      // }

      var configs = syncData[type];
      if (isDefined(configs)) {
        if (!Array.isArray(configs)) {
          configs = [configs];
        }
        var set = [];
        configs.forEach(function (config) {
          var pid_mid = config.pid + "_" + config.mid;
          if (!set.includes(pid_mid)) {
            set.push(pid_mid);
          }
        });
        if (set.length > 0) {
          requestBody["pid_mid"] = set.join(",");
        }
      } else {
        configs = [];
      }

      // const { custom_user_id = null } = controller.getUserAttributes();
      // if (custom_user_id) {
      //   validateUrl += "&customerId=" + custom_user_id;
      //   requestBody["custom_user_id"] = custom_user_id;
      // }

      /* if (configs.length < 1) {
        const url = validateUrl.replace("configs/validate", "configs/all");
        this._fetchConfig(type, url, [], callback);
        return;
      } */

      var _controller$getUserAt = controller.getUserAttributes(),
        _controller$getUserAt2 = _controller$getUserAt.custom_user_id,
        custom_user_id = _controller$getUserAt2 === void 0 ? null : _controller$getUserAt2;
      if (custom_user_id) validateUrl += "&customerId=" + custom_user_id;
      controller.makePostRequest(validateUrl, requestBody, {
        "Content-Type": "application/json"
      }, function (response) {
        _this._validateHashes(response, type, apiUrl, {
          configs: configs,
          syncData: syncData
        }, callback);
      }, function () {
        Logger.error("Failed to fetch");
        callback(type, {
          configs: configs
        });
      });
    });
    _defineProperty(this, "_getSyncData", function () {
      var data = Controller.getInstance().getFromStorage(APX_SYNC);
      if (!isDefined(data)) {
        return {};
      }
      var decodedData = JSON.parse(new TextDecoder().decode(stringToArrayBuffer(decode(Controller.getInstance().getSiteId(), data))));
      return decodedData;
    });
    _defineProperty(this, "_fetchFromStorageAndSend", function (type, callback) {
      var data = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
      var syncData = data;
      if (!data) {
        syncData = _this._getSyncData();
      }
      var configs = syncData[type];
      if (isDefined(configs)) {
        if (!Array.isArray(configs)) {
          configs = [configs];
        }
        Logger.debug("Reading from storage");
        callback(type, {
          configs: configs
        });
      }
    });
    _defineProperty(this, "_validateHashes", function (response, type, apiUrl, data, callback) {
      var _response$pull = response.pull,
        pull = _response$pull === void 0 ? [] : _response$pull,
        _response$drop = response.drop,
        drop = _response$drop === void 0 ? [] : _response$drop;
      var configs = data.configs,
        syncData = data.syncData;
      var terminationData = JSON.parse(Controller.getInstance().getFromStorage(APX_TERMINATION_ID));
      var updatedConfigs = [];
      if (drop.length > 0 || pull.length > 0) {
        drop.forEach(function (id) {
          var updatedId = removeLastPartOfId(id);
          if (checkForNeverShow(updatedId)) {
            var never_show_ids = JSON.parse(Controller.getInstance().getFromStorage("_apx_never_show_ids"));
            never_show_ids = never_show_ids.filter(function (item) {
              return item !== updatedId;
            });
            Controller.getInstance().persistToStorage("_apx_never_show_ids", JSON.stringify(never_show_ids));
          }
        });
        pull.forEach(function (id) {
          var updatedId = removeLastPartOfId(id);
          resetQEStateonPull(id, _this._siteId);
          if (checkForNeverShow(updatedId)) {
            var never_show_ids = JSON.parse(Controller.getInstance().getFromStorage("_apx_never_show_ids"));
            never_show_ids = never_show_ids.filter(function (item) {
              return item !== updatedId;
            });
            Controller.getInstance().persistToStorage("_apx_never_show_ids", JSON.stringify(never_show_ids));
          }
        });
        // Remove the configurations mentioned in `drop`
        configs.forEach(function (config) {
          if (!drop.includes(config.pid) && !pull.includes(config.pid)) {
            updatedConfigs.push(config);
          }
          if (drop.includes(config.pid)) {
            if (terminationData !== null && terminationData !== null && terminationData !== void 0 && terminationData[config._id]) {
              delete terminationData[config._id];
              Controller.getInstance().persistToStorage(APX_TERMINATION_ID, JSON.stringify(terminationData));
            }
          }
        });
        syncData[type] = updatedConfigs;
        Controller.getInstance().persistToStorage(APX_SYNC, encode(_this._siteId, arrayBufferToString(new TextEncoder().encode(JSON.stringify(syncData)))));
      } else {
        Logger.debug("Nothing to delete", type);
        updatedConfigs = configs;
      }
      if (pull.length > 0) {
        pull.forEach(function (pid) {
          apiUrl += "&pids=" + pid;
        });
        _this._fetchConfig(type, apiUrl, updatedConfigs, callback);
      } else {
        Logger.debug("Nothing to pull", type);
        callback(type, {
          configs: updatedConfigs
        });
      }
    });
    _defineProperty(this, "_fetchConfig", function (type, apiUrl, existingConfigs, callback) {
      Controller.getInstance().makeGetRequest(apiUrl, function (response) {
        if (isDefined(response.configs) && Array.isArray(response.configs) && response.configs.length == 0) {
          callback("", {
            configs: []
          });
          return;
        }
        if (!isDefined(response.configs) || !Array.isArray(response.configs)) {
          return;
        }
        // If the device is a test device, log event on receiving a config
        response.configs.forEach(function (config) {
          var _Controller$getInstan, _config$meta, _config$meta2, _config$meta3, _config$meta4;
          var apx_nudge_type = type === _this._SURVEYS ? "survey" : "campaign";
          (_Controller$getInstan = Controller.getInstance()) === null || _Controller$getInstan === void 0 || _Controller$getInstan.logAppEvent("apx_config_received", {
            apx_nudge_type: type === _this._SURVEYS ? "survey" : "campaign",
            apx_nudge_id: config === null || config === void 0 ? void 0 : config._id,
            apx_nudge_name: config === null || config === void 0 || (_config$meta = config.meta) === null || _config$meta === void 0 ? void 0 : _config$meta.name,
            apx_variant_code: config !== null && config !== void 0 && (_config$meta2 = config.meta) !== null && _config$meta2 !== void 0 && _config$meta2.isExperiment || config !== null && config !== void 0 && (_config$meta3 = config.meta) !== null && _config$meta3 !== void 0 && _config$meta3.only_context ? config === null || config === void 0 || (_config$meta4 = config.meta) === null || _config$meta4 === void 0 || (_config$meta4 = _config$meta4.attr) === null || _config$meta4 === void 0 ? void 0 : _config$meta4.apx_variant_code : "TG"
          }, undefined, false, "apxor", apx_nudge_type);
        });
        // Persist config to Storage
        var data = _this._getSyncData();
        var combinedConfigs = [].concat(_toConsumableArray(existingConfigs), _toConsumableArray(response.configs));
        data[type] = combinedConfigs;
        Controller.getInstance().persistToStorage(APX_SYNC, encode(_this._siteId, arrayBufferToString(new TextEncoder().encode(JSON.stringify(data)))));
        callback(type, {
          configs: combinedConfigs
        });
      }, function () {
        callback(type, {
          configs: []
        });
      });
    });
    _defineProperty(this, "handleNavigationEvent", function (pathName) {
      _this._updateCountInStorage(pathName);
    });
    _defineProperty(this, "_updateCountInStorage", function (eventName) {
      var data = _this._getSyncData();
      if (!isDefined(data.d)) {
        data["d"] = {};
      }

      // We can't store more than 2 MB limit
      if (JSON.stringify(data.d).length > 2 * 1024 * 1024) {
        Logger.error("Sync : Reached maximum limit. Can't store further");
        return;
      }
      var count = 0;
      if (isDefined(data.d[eventName])) {
        count = data.d[eventName];
      }
      count += 1;
      data.d[eventName] = count;
      Controller.getInstance().persistToStorage(APX_SYNC, encode(_this._siteId, arrayBufferToString(new TextEncoder().encode(JSON.stringify(data)))));
    });
    _defineProperty(this, "getEventCount", function (eventName) {
      var data = _this._getSyncData();
      if (!isDefined(data.d)) {
        return 0;
      }
      if (!isDefined(data.d[eventName])) {
        return 0;
      }
      return data.d[eventName];
    });
  });

  var errorFunction = function errorFunction() {
    var funcName = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return function () {
      Logger.error("".concat(funcName, ": Apxor SDK not initialised."));
    };
  };
  var DefaultController = {
    reportChunkOnVisibilityChange: errorFunction("reportChunkOnVisibilityChange"),
    logAppEvent: errorFunction("logAppEvent"),
    logClientEvent: errorFunction("logClientEvent"),
    logPageView: errorFunction("logPageView"),
    setUserId: errorFunction("setUserId"),
    setUserProperties: errorFunction("setUserProperties"),
    setSessionProperties: errorFunction("setSessionProperties"),
    setAppVersion: errorFunction("setAppVersion"),
    getClientId: errorFunction("getClientId"),
    getSessionId: errorFunction("getSessionId"),
    startSession: errorFunction("startSession"),
    endSession: errorFunction("endSession"),
    flattenJSON: errorFunction("flattenJSON"),
    setRedirectionHandler: errorFunction("setRedirectionHandler"),
    setInitFlag: errorFunction("setInitFlag"),
    dispatchValidationEvent: errorFunction("dispatchValidationEvent")
  };
  var Controller = /*#__PURE__*/function () {
    function Controller() {
      var _this = this;
      _classCallCheck(this, Controller);
      _defineProperty(this, "_eventHandler", {});
      _defineProperty(this, "_isInitialized", false);
      _defineProperty(this, "_appInfo", {});
      _defineProperty(this, "_deviceInfo", {});
      _defineProperty(this, "_sdkInfo", {});
      _defineProperty(this, "_sessionInfo", {});
      _defineProperty(this, "_userAttributes", {});
      _defineProperty(this, "_sessionAttributes", {});
      _defineProperty(this, "_chunkDetails", {});
      _defineProperty(this, "_chunkNumber", 1);
      _defineProperty(this, "_currentNavigation", null);
      _defineProperty(this, "_isRunning", false);
      _defineProperty(this, "_isEventMonitorRegistered", false);
      _defineProperty(this, "_dataManager", {});
      _defineProperty(this, "_customEventListener", null);
      _defineProperty(this, "_systemEventMonitor", {});
      _defineProperty(this, "_sessionHandler", {});
      _defineProperty(this, "_sync", {});
      _defineProperty(this, "_idleTimeout", 3600);
      _defineProperty(this, "_maxEventsSentCount", 20);
      _defineProperty(this, "_chunkSendInterval", -1);
      _defineProperty(this, "_internalChunkSendInterval", 20000);
      // For every 20 seconds chunk will be sent
      _defineProperty(this, "_chunk502RetryTime", -1);
      _defineProperty(this, "_maxSessionsInStorage", 10);
      _defineProperty(this, "_isSending", false);
      _defineProperty(this, "_isFirstSession", false);
      _defineProperty(this, "_last502Time", -1);
      // This is an internal field, doesn't depend on the config that customers can pass
      _defineProperty(this, "_batchEvents", false);
      // This is a flag that can be passed by customers to upload events in bulk.
      // It's a RECOMMENDED flag for every customer
      _defineProperty(this, "_bulkUpload", true);
      // In-memory store for client events
      _defineProperty(this, "clientEvents", []);
      // List of events either to be stopped or to be converted to client events
      _defineProperty(this, "_stopEventsFromConfig", []);
      _defineProperty(this, "_clientEventsFromConfig", []);
      _defineProperty(this, "_appEventsFromConfig", []);
      _defineProperty(this, "_data", {});
      _defineProperty(this, "_sessionCount", 0);
      _defineProperty(this, "_redirectionHandler", null);
      _defineProperty(this, "_appEventsNoKpi", []);
      _defineProperty(this, "_sendChunkOnEventsId", null);
      _defineProperty(this, "_sendChunkOnETAId", null);
      _defineProperty(this, "_blockChunkReporting", false);
      _defineProperty(this, "_SDKStartedAfterPluginInit", false);
      _defineProperty(this, "_eventsLogged", {});
      _defineProperty(this, "initWaitTime", 1500);
      _defineProperty(this, "version", "");
      _defineProperty(this, "_deviceId", "");
      _defineProperty(this, "_configHash", "");
      _defineProperty(this, "sessionStartTime", null);
      _defineProperty(this, "sessionId", "");
      _defineProperty(this, "_ltCountObj", {});
      _defineProperty(this, "_pendingChunk", false);
      /**
       * @function _initializePlugins
       * @description Initializes all the plugins sent in the client config.
       * @param {function} onPluginInit
       */
      _defineProperty(this, "_initializePlugins", function (onPluginInit) {
        var plugins = _this.config.plugins;
        if (isDefined(plugins) && isDefined(plugins.length)) {
          for (var index = 0; index < plugins.length; index++) {
            var plugin = plugins[index];
            try {
              var _window$plugin;
              // This will initialize the rtm plugin. Which internally calls the initialize on the ce.
              // This has some API calls, before. But we are not taking any callbacks or promises to indicate if the API call has responded or not
              (_window$plugin = window[plugin]) === null || _window$plugin === void 0 || _window$plugin.init(onPluginInit);
              Logger.debug("Controller : Initialized plugin ".concat(plugin));
            } catch (e) {
              Logger.error("Controller : Failed to initialize plugin ".concat(plugin, " with error ").concat(e));
            }
          }
        }
      });
      /**
       *
       * @param siteId
       * @param startTime
       * @param clientConfig
       * @param window
       */
      _defineProperty(this, "initialize", function (siteId, startTime, clientConfig, window, success_callback, error_callback) {
        //If the SDK is already initialized, do not redo it.
        if (_this._isInitialized) {
          return;
        }
        var onBrowserStorageLoad = function onBrowserStorageLoad() {
          Logger.debug("Controller : Wait for browser storage completed.");
          // Initializes the state
          _this._initializeStateVariables(siteId, startTime, clientConfig, window);
          _this._setConfig();
          _this._initializeFieldsFromConfig();
          _this._sync.initialize(_this.config, _this.siteId);
          _this._checkEnableStatusInConfig(onEnableConfig, error_callback);
        };
        var onEnableConfig = function onEnableConfig() {
          Logger.debug("Controller : On Site enabled in config");
          _this._getConfigHash(onConfigHashFetch, error_callback);
        };
        var onConfigHashFetch = function onConfigHashFetch(configHash) {
          _this._configHash = configHash;
          Logger.debug("Controller : On config hash fetch");
          _this._waitForResourceLoad(configHash, onResourceWaitComplete);
        };
        var onResourceWaitComplete = function onResourceWaitComplete() {
          Logger.info("Controller : Waiting for resources completed");
          _this._setWYSIWYGCookie();
          _this._initializeLTCount();
          _this._updateAppInfo();
          _this._deviceId = _this._getDeviceId();
          _this._setDeviceInfo();
          _this._setDefaultUserProperties();
          _this._postUserInfo();
          _this._mergeStoredAndDefaultUserAttributes();
          _this._getStoredListOfEventsLogged();
          _this._setDefaultSessionProperties();
          _this._setInitialSessionState();
          _this._reinitialiseChunkDetails();
          _this._downloadConfig(_this._configHash);
          var totalBgTime = _this._getTotalBackgroundTime();
          _this._sessionHandler = new SessionHandler(totalBgTime);
          _this._registerSystemEventMonitor();
          _this.sendOldChunk(onOldChunkReport);
        };
        var onOldChunkReport = function onOldChunkReport() {
          _this._isRunning = true;
          _this._isInitialized = true;
          var chunk = _this.createANewChunk();
          _this._dataManager.persistCurrentChunk(chunk);
          _this._initializePlugins(onPluginInit);
        };
        var onPluginInit = function onPluginInit() {
          var _window$ApxorRTM;
          _this._dispatchSystemEvent(_this.window.document.visibilityState);
          if (_this.newSession) {
            _this.sessionStartTime = Date.now();
            _this.logAppEvent(APX_APP_OPENED, {
              time: formatDatetime(new Date())
            }, undefined, false, "apxor", "");
            _this._resetCampaignSessionFrequency();
          }
          _this.logPageView(_this.window.location.pathname);
          //As soon as the SDK is loaded, send the first chunk
          _this._sendChunkWithAtleastOneEvent();
          _this._registerIntervalBasedChunkReporting();

          // Call success callback
          success_callback();
          _this.setSessionProperties({
            apx_rtm_version: window.ApxorRTM._rtm_version
          });
          if ((_window$ApxorRTM = window.ApxorRTM) !== null && _window$ApxorRTM !== void 0 && _window$ApxorRTM.isBadgePresent) {
            var _window$ApxorRTM2;
            (_window$ApxorRTM2 = window.ApxorRTM) === null || _window$ApxorRTM2 === void 0 || _window$ApxorRTM2.badgesLists.forEach(function (id) {
              if (_this.isBadgeTriggerSatisfied(id) && !document.getElementById("apxor-badge-container-".concat("-".concat(id).replaceAll(" ", "").replace(/[^\w\s]/gi, "")))) {
                var _window$ApxorRTM3;
                (_window$ApxorRTM3 = window.ApxorRTM) === null || _window$ApxorRTM3 === void 0 || (_window$ApxorRTM3 = _window$ApxorRTM3.ceInstance) === null || _window$ApxorRTM3 === void 0 || _window$ApxorRTM3.notifyEventListener(makeEvent("apxor-badge-container-".concat("-".concat(id).replaceAll(" ", "").replace(/[^\w\s]/gi, "")), {}, undefined, _this.getTimeElapsedInSession()));
              }
            });
          }
        };
        _this._waitForBrowserStorage(onBrowserStorageLoad);
      });
      /**
       * @function          getSiteId
       * @description       Returns the site id
       * @returns {string}  siteId
       */
      _defineProperty(this, "getSiteId", function () {
        return _this.siteId;
      });
      /**
       * @function          setRedirectionHandler
       * @description       Sets the redirection handler for the client URL redirection. This method can be used in case of single page apps.
       * @param {function}  callback
       */
      _defineProperty(this, "setRedirectionHandler", function (callback) {
        if (!_this._isInitialized) {
          DefaultController.setRedirectionHandler();
          return;
        }
        if (!_this._redirectionHandler) {
          _this._redirectionHandler = callback;
          _this.registerForEvent("CLIENT_EVENT", _this._clientRedirectionHandler);
        } else {
          _this._redirectionHandler = callback;
        }
      });
      /**
       * @function        _clientRedirectionHandler
       * @description     Handler for the client url redirection
       * @param {object}  event
       */
      _defineProperty(this, "_clientRedirectionHandler", function (event) {
        if (event && event.name === "REDIRECT") {
          _this._redirectionHandler(event.additional_info.url);
        }
      });
      /**
       * @function          makePostRequest
       * @description       Makes a post request to the given endpoint with the provided payload
       * @param {string}    url
       * @param {object}    payload
       * @param {object}    headers
       * @param {function}  resolve
       * @param {function}  reject
       */
      _defineProperty(this, "makePostRequest", function (url, payload, headers, resolve, reject) {
        _this._api.makePostRequest(url, payload, headers, resolve, reject);
      });
      /**
       * @function getDevInfo
       * @returns Returns the device info. Used by other plugins when they need to get the device info.
       */
      _defineProperty(this, "getDevInfo", function () {
        return _this._deviceInfo;
      });
      /**
       * @function        getListOfEventsLogged
       * @description     Returns the list of events that are logged to Apxor.
       * @returns {object}
       */
      _defineProperty(this, "getListOfEventsLogged", function () {
        return _this._eventsLogged;
      });
      /**
       * @function        _updateListOfEventsLogged
       * @description     Every event that is logged to Apxor is maintained in this map. This map resets on every reload of the SDK.
       * @param {string}  name
       * @param {object}  additionalInfo
       */
      _defineProperty(this, "_updateListOfEventsLogged", function (name, additionalInfo) {
        // Set the latest event info in the master events.
        _this._eventsLogged[name] = _this._eventsLogged[name] || {
          first_logged_time: new Date().toISOString()
        };
        _this._eventsLogged[name] = _objectSpread2(_objectSpread2(_objectSpread2({}, _this._eventsLogged[name]), additionalInfo), {}, {
          latest_logged_time: new Date().toISOString()
        });
        _this.persistToStorage(APX_EVENTS_LOGGED, encode(_this.siteId, JSON.stringify(_this._eventsLogged)));
      });
      /**
       * @function getInstallationTime
       * @returns Installation time of SDK in this device for this user.
       */
      _defineProperty(this, "getInstallationTime", function () {
        return _this._dataManager.getInstallationTime(_this.startTime);
      });
      /**
       * @function          _checkLocalStorageAvailability
       * @description       Calls the DataManager's waitForBrowserStorage
       * @private
       * @param {function}  callBack
       */
      _defineProperty(this, "_waitForBrowserStorage", function (callBack) {
        Logger.debug("Controller : Checking if the browsers localstorage is available.");
        Storage.waitForBrowserStorage(callBack);
      });
      /**
       * @function       _initializeStateVariables
       * @description    Initialises the controllers state variables
       * @private
       * @param {string} siteId
       * @param {string} startTime
       * @param {object} clientConfig
       * @param {object} window
       */
      _defineProperty(this, "_initializeStateVariables", function (siteId, startTime, clientConfig, window) {
        Logger.debug("Controller : Initializing the state variables");
        _this.window = window;
        _this.startTime = startTime;
        _this.siteId = siteId;
        _this.clientConfig = clientConfig || {};

        // This is the initial wait time for the SDK. With this time localstorage loads, all the plugin js files loads
        _this.initWaitTime = _this.clientConfig.sdk_init_wait ? _this.clientConfig.sdk_init_wait * 1000 : 2000;

        // Initialize the data manager to access the browser storage
        _this._dataManager = new DataManager(_this.siteId);
        // Initialize the API instance to make network calls
        _this._api = new API(_this.siteId, _this.window);
        _this._eventHandler = new EventHandler();
        _this._sync = new Sync();
        // Initialize SdkInfo
        _this._sdkInfo = getSdkInfo(_this.startTime);
        _this.sessionStartTime = parseInt(_this._dataManager.getItemOrDefault(APX_SESSION_START_TIME, startTime));
        Logger.debug("Controller : session start time is ".concat(_this.sessionStartTime));
        Logger.debug("Controller : SDK start time is ".concat(_this.startTime));
        _this.sessionId = _this.getFromStorage(APX_SESSION_ID);
      });
      /**
       * @function    _initializeLTCount
       * @description Gets the lt count from the localstorage and sets it in the controllers state variable.
       * @private
       */
      _defineProperty(this, "_initializeLTCount", function () {
        Logger.debug("Controller : Initializing the LT Count ");
        try {
          var apx_lt_countObj = _this.getFromStorage(APX_LT_COUNT);
          if (apx_lt_countObj) {
            _this._ltCountObj = JSON.parse(new TextDecoder().decode(stringToArrayBuffer(decode(_this.siteId, apx_lt_countObj))));
          } else {
            _this._ltCountObj = {};
            var MaptoStringEncoded = encode(_this.siteId, arrayBufferToString(new TextEncoder().encode(JSON.stringify(_this._ltCountObj))));
            _this.persistToStorage(APX_LT_COUNT, MaptoStringEncoded);
          }
        } catch (e) {
          Logger.error("Controller : LT Count object parsing failed ".concat(e));
        }
      });
      /**
       * @function    _setWYSIWYGCookie
       * @description Sets the WYSIWYG cookie if SDK is initializing in test mode.
       * @private
       */
      _defineProperty(this, "_setWYSIWYGCookie", function () {
        var params = new URLSearchParams(location.search);
        // If the website is launched from the Apxor dashboard one of _a _p _x _o _r is set as a query param with the cookie information
        var paramData = params.get("_a") || params.get("_p") || params.get("_x") || params.get("_o") || params.get("_r");
        if (!paramData) {
          paramData = _this.getFromStorage("_apxor_url_param");
        }
        if (!paramData) {
          Logger.debug("Controller : Not in WYSIWYG mode");
          return;
        }

        // If param data is found, it means it's a WYSIWYG mode.
        try {
          Logger.debug("Controller : Initialising in WYSIWYG mode");
          var decodedData = decode(_this.siteId, paramData);
          decodedData = JSON.parse(decodedData);
          var _decodedData = decodedData,
            app_id = _decodedData.app_id,
            expiry = _decodedData.expiry;
          var time = Date.now();

          //Set the WYSIWYG get cookie with the expiry and the encoded key. The encoded key is where the info sent by the dashboard is stored
          if (app_id === _this.siteId && time <= expiry) {
            var cookieExpiry = new Date(expiry + 60 * 1000).toUTCString();
            var encodedKey = btoa("_apx_ew");
            document.cookie = "_apx_ewc=".concat(encodedKey, "; expires=").concat(cookieExpiry);
            decodedData.expiry = decodedData.expiry + 60 * 1000;
            _this.persistToStorage("_apx_ew", decodedData, true);
            Logger.debug("Controller : _apx_ewc cookie set");
          }

          //Delete the query params added by the Apxor dahsboard
          params["delete"]("_a");
          params["delete"]("_p");
          params["delete"]("_x");
          params["delete"]("_o");
          params["delete"]("_r");

          //Reset the url afer removing the params added by the dashboard
          var url = location.pathname;
          var strParams = params.toString();
          if (strParams !== "") {
            url += "?" + strParams;
          }
          _this.window.history.replaceState({}, document.title, url);
          Logger.debug("Controller : Query params reset after removing dashboard embedded params");
        } catch (e) {
          Logger.error("Controller : Error while setting the WYSIWYG cookie ".concat(e));
        }
      });
      /**
       * @function    _setConfig
       * @description Sets the config.
       * @private
       */
      _defineProperty(this, "_setConfig", function () {
        // Load the old saved config, if this is the first session
        // load the default config
        Logger.debug("Controller : Setting the config");
        var existingConfig = _this._dataManager.getExistingConfig();
        _this._mergeConfigWithClientConfig(existingConfig);
      });
      /**
       * @function        _mergeConfigWithClientConfig
       * @description     Merges the given config with the client config. Saves it in a class variable.
       * @private
       * @param {object}  newConfig
       */
      _defineProperty(this, "_mergeConfigWithClientConfig", function (newConfig) {
        // clientConfig can override server config
        _this.config = _objectSpread2(_objectSpread2({}, newConfig), _this.clientConfig);
        Logger.debug("Controller : New config and client configs Configs merged");
      });
      /**
       * @function    _initializeFieldsFromConfig
       * @description Initializes the class variables with the config.
       * @private
       */
      _defineProperty(this, "_initializeFieldsFromConfig", function () {
        var _events$stop, _events$action, _events$app;
        var _this$config = _this.config,
          _this$config$version = _this$config.version,
          version = _this$config$version === void 0 ? "" : _this$config$version,
          _this$config$bulk_upl = _this$config.bulk_upload,
          bulk_upload = _this$config$bulk_upl === void 0 ? true : _this$config$bulk_upl,
          events_upload_time = _this$config.events_upload_time,
          _this$config$idle_tim = _this$config.idle_time_out,
          idle_time_out = _this$config$idle_tim === void 0 ? 1800 : _this$config$idle_tim,
          _this$config$events = _this$config.events,
          events = _this$config$events === void 0 ? {} : _this$config$events,
          _this$config$max_chun = _this$config.max_chunk_event_count,
          max_chunk_event_count = _this$config$max_chun === void 0 ? 20 : _this$config$max_chun,
          retry_time = _this$config.retry_time,
          _this$config$max_sess = _this$config.max_sessions_in_storage,
          max_sessions_in_storage = _this$config$max_sess === void 0 ? -1 : _this$config$max_sess;
        _this.version = _this._validateAndGetAppVersion(version);
        _this._bulkUpload = bulk_upload;
        _this._batchEvents = events_upload_time > 0;
        _this._idleTimeout = isNumber(idle_time_out) ? idle_time_out : 1800;
        _this._stopEventsFromConfig = (_events$stop = events["stop"]) !== null && _events$stop !== void 0 ? _events$stop : [];
        _this._clientEventsFromConfig = (_events$action = events["action"]) !== null && _events$action !== void 0 ? _events$action : [];
        _this._appEventsFromConfig = (_events$app = events["app"]) !== null && _events$app !== void 0 ? _events$app : [];
        _this._maxEventsSentCount = isDefined(max_chunk_event_count) && isNumber(max_chunk_event_count) ? max_chunk_event_count : 20;
        _this._chunkSendInterval = isDefined(events_upload_time) && isNumber(events_upload_time) && events_upload_time >= 1000 ? events_upload_time : -1;
        _this._chunk502RetryTime = isDefined(retry_time) && isNumber(retry_time) && retry_time >= 1000 ? retry_time : -1;
        _this._maxSessionsInStorage = isNumber(max_sessions_in_storage) && max_sessions_in_storage > 0 ? max_sessions_in_storage : -1;
      });
      /**
       * @function          _validateAndGetAppVersion
       * @description       Gets the app version. There is
       * @param   {string}  app_version
       * @returns {string}  version
       */
      _defineProperty(this, "_validateAndGetAppVersion", function (app_version) {
        var version;
        if (isDefined(app_version)) {
          version = app_version;
          _this._dataManager.persistAppVersion(version);
        } else {
          var savedAppVersion = _this._dataManager.getAppVersion();
          if (isDefined(savedAppVersion)) {
            version = savedAppVersion;
          } else {
            version = "";
          }
        }
        return version;
      });
      /**
       * @function          _checkEnableStatusInConfig
       * @description       Checks if the SDK is enabled or not from the config. If enabled calls enabled callback else disabled callback
       * @param {function}  enabledCallback
       * @param {function}  disabledCallback
       */
      _defineProperty(this, "_checkEnableStatusInConfig", function (enabledCallback, disabledCallback) {
        Logger.debug("Controller : Checking if the Site is enabled existing config");
        if (!_this.config.enable) {
          Logger.debug("Controller : Site is disabled. Can't initialise");
          _this._downloadConfig("");
          _this._postUserInfo();
          disabledCallback();
          return;
        }
        enabledCallback();
      });
      /**
       * @function          _getConfigHash
       * @description       Based on the throttle interval gets the config hash either from storage or from the server
       * @param {function}  onConfigHashFetch
       * @param {function}  onError
       * @returns
       */
      _defineProperty(this, "_getConfigHash", function (onConfigHashFetch, onError) {
        var existingConfig = _this._dataManager.getExistingConfig();
        // When is the last time SDK enabled
        var lastEnableDisableTime = _this._dataManager.getItemOrDefault(APX_LAST_ENABLE_DISABLE_TIME, -1);

        //Get the enable disable throttling time from the config.
        var ed_t_time = existingConfig.ed_t_time;
        if (ed_t_time > 0 && lastEnableDisableTime > 0) {
          var diff = Math.abs(lastEnableDisableTime - Date.now());
          var throttlingWaitInMilli = ed_t_time * 60 * 1000;
          if (diff < throttlingWaitInMilli) {
            Logger.debug("Controller : Reinitializing with in the throttling time.");
            var lastEnabledFlag = _this._dataManager.getItemOrDefault(APX_LAST_ENABLED_FLAG, true);
            if (!lastEnabledFlag) {
              Logger.debug("Controller : Site is not enabled from the last update. Can't initalise now. Recheck will happen after throttling time");
              // If last enabled status is FALSE, we don't initialize the SDK
              onError();
              return;
            }
            var hash = _this._dataManager.getItemOrDefault(APX_CONFIG_HASH, "");
            // We directly call initialize as the time difference still didn't exceed the time limit. No need to re-fetch the config
            onConfigHashFetch(hash);
            return;
          }
        }
        _this._checkEnableStatusFromServer(onConfigHashFetch, onError);
      });
      /**
       * @function          _checkEnableStatusFromServer
       * @description       Calls the enabled-staus API. If the site is enabled then proceeds with SDK initalisation.
       * @param {function}  onConfigHashFetch
       * @param {function}  onError
       */
      _defineProperty(this, "_checkEnableStatusFromServer", function (onConfigHashFetch, onError) {
        Logger.debug("Controller : Getting the site enabled status from the server");
        // Store the last enable disabled time in storage
        _this.persistToStorage(APX_LAST_ENABLE_DISABLE_TIME, Date.now());
        _this._api.checkIfSDKEnabled(function (response) {
          var enabled = response.enabled,
            hash = response.hash;
          // Store the enabled flag status to localStorage
          _this.persistToStorage(APX_LAST_ENABLED_FLAG, enabled);
          if (enabled) {
            Logger.debug("Controller : Site is enabled");
            onConfigHashFetch(hash);
          } else {
            Logger.debug("Controller : Site is disabled. Can't initialise the SDK");
            _this._isInitialized = false;
            _this._isRunning = false;
            _this._stopSDK();
            // SDK is disabled from server, so we abort!!
            onError();
          }
        }, function (e) {
          Logger.error("Controller : enabled-status API failed ".concat(e));
        });
      });
      /**
       * @function    _stopSDK
       * @description Resets the SDK initialization flags
       * @private
       */
      _defineProperty(this, "_stopSDK", function () {
        Logger.debug("Controller: Stopping the SDK");
        try {
          var _this$_eventHandler, _this$_systemEventMon;
          _this._isRunning = false;
          _this._isInitialized = false;
          _this._isSending = false;
          (_this$_eventHandler = _this._eventHandler) === null || _this$_eventHandler === void 0 || _this$_eventHandler.tearDown();
          (_this$_systemEventMon = _this._systemEventMonitor) === null || _this$_systemEventMon === void 0 || _this$_systemEventMon.unregisterEvents();
        } catch (e) {
          Logger.error("Controller : Failed to stop the SDK ".concat(e));
        }
      });
      /**
       * @function          _waitForResourceLoad
       * @description       Waits for the resources to load.
       * @private
       * @param {string}    configHash
       * @param {function}  onWaitComplete
       */
      _defineProperty(this, "_waitForResourceLoad", function (configHash, onResourceWaitComplete) {
        Logger.debug("Controller: Waiting ".concat(_this.initWaitTime, "ms for all the resource loading to finish"));
        setTimeout(function () {
          onResourceWaitComplete(configHash);
        }, _this.initWaitTime);
      });
      /**
       * @function    _getDeviceId
       * @description Gets the user id. Either from the localstorage or by creating a new id.
       * @private
       */
      _defineProperty(this, "_getDeviceId", function () {
        var deviceId = _this._dataManager.getUserId();
        if (!isDefined(deviceId)) {
          Logger.debug("Controller : Device id not found in localstorage");
          var client_id = _this.config.client_id;
          // If client_id is not null or undefined, persist the client_id as device_id
          if (isDefined(client_id) && client_id !== "") {
            Logger.debug("Controller : client id from clientconfig is the deviceid");
            deviceId = client_id;
          } else {
            Logger.debug("Controller : Generated a new device id. This is a new device now");
            deviceId = uuid();
          }
          _this._setNewUserFlags(deviceId);
        }
        Logger.debug("Controller : Device id is ".concat(deviceId));
        _this._deviceId = deviceId;
        return deviceId;
      });
      /**
       * @function      _setNewUserFlags
       * @description   Setting the new user related information.
       * @private
       * @param {string} deviceId
       */
      _defineProperty(this, "_setNewUserFlags", function (deviceId) {
        _this._dataManager.clearStorage();
        _this._dataManager.persistUserId(deviceId);
        _this._dataManager.persistInstallationTime(Date.now());

        //This is the first session for the user. Hence mark this session as first session
        _this._sessionInfo = _objectSpread2(_objectSpread2({}, _this._sessionInfo), {}, {
          is_first_session: true
        });
        _this._isFirstSession = true;
      });
      /**
       * @function _setInitialSessionState
       * @description Sets the inital state of the session during the initialization. This gets changed at a later point.
       * @private
       */
      _defineProperty(this, "_setInitialSessionState", function () {
        Logger.debug("Controller : Setting the session state for session if ".concat(_this.sessionId));
        if (!_this.sessionId) {
          _this.newSession = true;
          //this.startNewSession(Date.now(), () => {}, true);
          _this.sessionId = uuid();
          _this.persistToStorage(APX_SESSION_ID, _this.sessionId);
          _this.persistToStorage(APX_SESSION_START_TIME, _this.sessionStartTime);
        }
      });
      /**
       * @function    _setDeviceInfo
       * @description Sets the device ino.
       * @private
       */
      _defineProperty(this, "_setDeviceInfo", function () {
        var _getDeviceInfo = getDeviceInfo(_this.window),
          device = _getDeviceInfo.device,
          os = _getDeviceInfo.os,
          browser_version = _getDeviceInfo.browser_version,
          browser = _getDeviceInfo.browser,
          dimensions = _getDeviceInfo.dimensions,
          dpi = _getDeviceInfo.dpi,
          dimensions_in_pixels = _getDeviceInfo.dimensions_in_pixels;
        _this._deviceInfo = makeDeviceInfo(_this._deviceId, device, dimensions, os, dpi, dimensions_in_pixels, browser, browser_version);
      });
      /**
       * @function        _setDefaultUserProperties
       * @description     Sets the default user properties
       * @private
       */
      _defineProperty(this, "_setDefaultUserProperties", function () {
        Logger.debug("Controller : Setting the default User attributes");
        var deviceInfo = _objectSpread2({}, _this._deviceInfo);
        var userProperties = getDefaultUserProperties(_this.window, deviceInfo);
        _this._userAttributes = _objectSpread2(_objectSpread2({}, _this._userAttributes), userProperties);
      });
      /**
       * @function        _setDefaultSessionProperties
       * @description     Sets the default session properties
       * @private
       * @param {object}  deviceInfo
       */
      _defineProperty(this, "_setDefaultSessionProperties", function () {
        Logger.debug("Controller : Setting the default session attributes");
        var sessionProperties = getDefaultSessionProperties(_this.window);
        _this._sessionAttributes = _objectSpread2(_objectSpread2({}, _this._sessionAttributes), sessionProperties);
      });
      /**
       * @function    _mergeStoredAndDefaultUserAttributes
       * @description Merges the user attributes stored in localstorage with the default user attributes.
       * @private
       */
      _defineProperty(this, "_mergeStoredAndDefaultUserAttributes", function () {
        Logger.debug("Controller : Merging the stored and default user attributes");
        // Populate already stored user attributes
        var storedAttributes = _this.getFromStorage(APX_USER_ATTR_KEY, true);
        if (isDefined(storedAttributes)) {
          var _decodedAttributes;
          var decodedAttributes = getJSONOrNull(storedAttributes);
          if (decodedAttributes === null) {
            try {
              decodedAttributes = JSON.parse(decode(_this.siteId, storedAttributes));
            } catch (e) {
              decodedAttributes = {};
            }
          }
          _this._userAttributes = _objectSpread2(_objectSpread2({}, (_decodedAttributes = decodedAttributes) !== null && _decodedAttributes !== void 0 ? _decodedAttributes : {}), _this._userAttributes);
        }
      });
      _defineProperty(this, "_getStoredListOfEventsLogged", function () {
        var ListOfEventsLogged = _this.getFromStorage(APX_EVENTS_LOGGED, true);
        if (isDefined(ListOfEventsLogged)) {
          var _decodedListOfEventsL;
          var decodedListOfEventsLogged = getJSONOrNull(ListOfEventsLogged);
          if (decodedListOfEventsLogged === null) {
            try {
              decodedListOfEventsLogged = JSON.parse(decode(_this.siteId, ListOfEventsLogged));
            } catch (e) {
              decodedListOfEventsLogged = {};
            }
          }
          _this._eventsLogged = _objectSpread2({}, (_decodedListOfEventsL = decodedListOfEventsLogged) !== null && _decodedListOfEventsL !== void 0 ? _decodedListOfEventsL : {});
        }
      });
      /**
       * @function _reinitialiseChunkDetails
       * @description Initialises the chunk details with the default detals.
       * @private
       */
      _defineProperty(this, "_reinitialiseChunkDetails", function () {
        _this._chunkDetails = _objectSpread2(_objectSpread2({}, DEFAULT_CHUNK_DETAILS), {}, {
          user_attributes: _objectSpread2({}, _this._userAttributes),
          session_attributes: _objectSpread2({}, _this._sessionAttributes)
        });
        _this._dataManager.persistOldChunkDetails(_this._chunkDetails);
      });
      /**
       * @function          sendOldChunk
       * @description       Sends the old chunk to the server.
       * @private
       * @param {function}  callback - To be called after the chunk reporting to the server is completed.
       */
      _defineProperty(this, "sendOldChunk", function () {
        var onOldChunkReport = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        Logger.debug("Controller : Sending the old chunk to the server");
        var oldChunk = _this._dataManager.getOldChunk();
        if (isDefined(oldChunk)) {
          var _this$_chunkDetails, _this$_chunkDetails2, _oldChunk$session_inf, _oldChunk, _oldChunk$chunk_meta$, _oldChunk2;
          var chunkDetails = _objectSpread2({}, _this._chunkDetails);
          // If the old chunk is available populate the chunk details
          _this._chunkDetails = _objectSpread2({}, oldChunk.chunk_details) || {};
          if (!(((_this$_chunkDetails = _this._chunkDetails) === null || _this$_chunkDetails === void 0 || (_this$_chunkDetails = _this$_chunkDetails.app_events) === null || _this$_chunkDetails === void 0 ? void 0 : _this$_chunkDetails.length) > 0)) {
            //This function updates the _chunkDetails class variable.
            _this._addAndClearUnsentEvents();
          }

          // If there are no app events, there is no need to report the chunk.
          if (!(((_this$_chunkDetails2 = _this._chunkDetails) === null || _this$_chunkDetails2 === void 0 || (_this$_chunkDetails2 = _this$_chunkDetails2.app_events) === null || _this$_chunkDetails2 === void 0 ? void 0 : _this$_chunkDetails2.length) > 0)) {
            _this._chunkDetails = _objectSpread2({}, chunkDetails);
            onOldChunkReport();
            return;
          }

          //Repopulate the oldChunk with the updated chunk details.
          oldChunk = _objectSpread2(_objectSpread2({}, oldChunk), {}, {
            chunk_details: _objectSpread2({}, _this._chunkDetails)
          });
          var oldChunkSessionId = (_oldChunk$session_inf = (_oldChunk = oldChunk) === null || _oldChunk === void 0 || (_oldChunk = _oldChunk.session_info) === null || _oldChunk === void 0 ? void 0 : _oldChunk.id) !== null && _oldChunk$session_inf !== void 0 ? _oldChunk$session_inf : "1";
          var oldChunkNumber = (_oldChunk$chunk_meta$ = (_oldChunk2 = oldChunk) === null || _oldChunk2 === void 0 || (_oldChunk2 = _oldChunk2.chunk_meta) === null || _oldChunk2 === void 0 ? void 0 : _oldChunk2.number) !== null && _oldChunk$chunk_meta$ !== void 0 ? _oldChunk$chunk_meta$ : 1;
          _this._dataManager.persistCurrentChunk(oldChunk);
          _this._api.postChunk(oldChunk, function () {
            _this._updateChunkNumberMap(oldChunkSessionId, oldChunkNumber + 1);
            Logger.debug("Controller : Old chunk reporting successful.");
            _this._dataManager.removeOldChunk();
            _this._dataManager.removeOldChunkDetails();
            _this._reinitialiseChunkDetails();
            _this.createNewChunkAndPersist();
            onOldChunkReport();
          }, function () {
            Logger.debug("Controller : Old chunk reporting failed.");
            onOldChunkReport();
          });
        } else {
          onOldChunkReport();
        }
      });
      /**
       * @function    _addAndClearUnsentEvents
       * @description Adds the unsent events to the chunk details and clears the old chunk detail from the storage.
       * @private
       */
      _defineProperty(this, "_addAndClearUnsentEvents", function () {
        // Get unsent events
        var unsentChunkDetails = _this._dataManager.getOldChunkDetails();
        if (isDefined(unsentChunkDetails)) {
          var unsent_app_events = unsentChunkDetails.app_events;
          var unsent_navigation_events = unsentChunkDetails.navigation_events;
          var unsent_system_events = unsentChunkDetails.system_events;
          var unsent_user_events = unsentChunkDetails.user_events;

          // Add the unsent app_events
          _this._chunkDetails.app_events = [].concat(_toConsumableArray(_this._chunkDetails.app_events || []), _toConsumableArray(unsent_app_events));
          // Add the unsent navigation_events
          _this._chunkDetails.navigation_events = [].concat(_toConsumableArray(_this._chunkDetails.navigation_events || []), _toConsumableArray(unsent_navigation_events));
          // Add the unsent system_events
          _this._chunkDetails.system_events = [].concat(_toConsumableArray(_this._chunkDetails.system_events || []), _toConsumableArray(unsent_system_events));
          _this._chunkDetails.user_events = [].concat(_toConsumableArray(_this._chunkDetails.user_events || []), _toConsumableArray(unsent_user_events));
          _this._dataManager.removeOldChunkDetails();
        }
      });
      /**
       * @function _updateChunkNumberMap
       * @description Updates the sessions chunk number map with the latest chunk number.
       * @param {string} sessionId
       * @param {object} chunkNumber
       */
      _defineProperty(this, "_updateChunkNumberMap", function (sessionId, chunkNumber) {
        var sessionChunkMap = _this._dataManager.getSessionsChunkNumberMap();
        sessionChunkMap[sessionId] = chunkNumber;
        _this._dataManager.persistSessionsChunkNumberMap(sessionChunkMap);
        _this._chunkNumber = chunkNumber;
      });
      /**
       * @function          createNewChunkAndPersist
       * @description       Creates a new chunk and persists it to local storage.
       * @returns {object}  chunk
       */
      _defineProperty(this, "createNewChunkAndPersist", function () {
        var chunk = _this.createANewChunk();
        _this._dataManager.persistCurrentChunk(chunk);
        return chunk;
      });
      /**
       * @function          createANewChunk
       * @description       Populates the chunk data and updates the session information.
       * @returns {object}  chunk
       */
      _defineProperty(this, "createANewChunk", function () {
        var app_name = isDefined(_this.config.name) ? _this.config.name : "";
        var bundle_id = isDefined(_this.config.domain) ? _this.config.domain : "";

        // Get a new chunk
        var data = _this._dataManager.getNewChunk(_this.startTime, _this.sessionStartTime, _this.sessionId, _this._idleTimeout);
        var chunk = data.chunk;

        // Copy all values in Chunk to InMemory variables
        var session_info = chunk.session_info,
          app_info = chunk.app_info,
          sdk_info = chunk.sdk_info,
          chunk_details = chunk.chunk_details,
          chunk_meta = chunk.chunk_meta;
        var session_attributes = chunk_details.session_attributes,
          user_attributes = chunk_details.user_attributes;

        // this._sessionInfo = session_info;
        _this._sessionInfo = _objectSpread2(_objectSpread2({}, _this._sessionInfo), session_info);
        _this._sessionInfo.is_first_session = _this._isFirstSession;
        _this._sdkInfo = sdk_info;
        _this._appInfo = _objectSpread2(_objectSpread2({}, app_info), {}, {
          app_name: app_name,
          bundle_id: bundle_id,
          app_version: "" + _this.version
        });
        _this._chunkNumber = chunk_meta.number;
        _this._userAttributes = _objectSpread2(_objectSpread2({}, _this._userAttributes), user_attributes);
        _this._sessionAttributes = _objectSpread2(_objectSpread2({}, _this._sessionAttributes), session_attributes);
        _this._chunkDetails = chunk_details;
        // Add the unsent events to the chunkdetails
        _this._addAndClearUnsentEvents();
        _this.newSession = data.is_new_session;
        if (!_this.newSession) {
          _this._setSessionIdFromChunk(chunk);
        }
        return {
          sdk_info: _this._sdkInfo,
          session_info: _this._sessionInfo,
          app_info: _this._appInfo,
          device_info: _this._deviceInfo,
          chunk_details: chunk_details,
          chunk_meta: chunk_meta
        };
      });
      /**
       * @function        _setSessionIdFromChunk
       * @description     Set the session id taking it from the chunk.
       * @param {object}  chunk
       */
      _defineProperty(this, "_setSessionIdFromChunk", function (chunk) {
        var id = chunk.session_info.id;
        if (id) {
          _this.sessionId = id;
          _this.persistToStorage(APX_SESSION_ID, _this.sessionId);
        }
      });
      /**
       * @function            _getTotalBackgroundTime
       * @description         Returns the total background time.
       * @private
       * @returns {number} -  total background time
       */
      _defineProperty(this, "_getTotalBackgroundTime", function () {
        var _this$_sessionInfo = _this._sessionInfo,
          total_duration = _this$_sessionInfo.total_duration,
          duration = _this$_sessionInfo.duration;
        return total_duration > duration ? total_duration - duration : 0;
      });
      /**
       * @function        _downloadConfig
       * @description     Downloads the config from the server.
       * @private
       * @param {string}  hash
       */
      _defineProperty(this, "_downloadConfig", function (hash) {
        Logger.debug("Controller : Fetch a new config");
        if (!_this._canFetchConfig(hash)) {
          Logger.debug("Controller : No need to fetch config. No change in hash");
          // If old hash and current hash matches, then no need to fetch config
          return;
        }

        // Compare the throttle time with last fetched time and if the difference
        // is lesser than the configured throttle time, no need to download
        // the config again. Otherwise, download it and save
        var configThrottleTime = _this.config.sct_time;
        var lastConfigFetchTime = _this._dataManager.getItemOrDefault(APX_LAST_CONFIG_TIME, -1);
        if (configThrottleTime > 0 && lastConfigFetchTime > 0) {
          var diff = Math.abs(Date.now() - lastConfigFetchTime);
          if (diff < configThrottleTime) {
            Logger.debug("Controller : No need to fetch config. Did not pass the throttle time");
            // No need to fetch the config
            return;
          }
        }
        _this.persistToStorage(APX_LAST_CONFIG_TIME, Date.now());

        // Check if there is a change in hash
        _this._api.getConfig(function (newConfig) {
          var _newConfig$hash;
          Logger.debug("Controller : New config fetched");
          _this._dataManager.persistConfig(newConfig);
          _this.persistToStorage(APX_CONFIG_HASH, (_newConfig$hash = newConfig.hash) !== null && _newConfig$hash !== void 0 ? _newConfig$hash : md5(newConfig));
          _this._mergeConfigWithClientConfig(newConfig);
          _this._updateAppInfo();
        }, function (errorCode) {
          if (errorCode !== 0) {
            Logger.error("Controller : Failed to fetch config");
          }
        });
      });
      /**
       * @function    _postUserInfo
       * @description Posts the user info to the server if there is any change.
       * @private
       */
      _defineProperty(this, "_postUserInfo", function () {
        Logger.debug("Controller : Posting user info");
        var sdk_version = _this._sdkInfo.sdk_version;
        var data = {
          sdk_version: JSON.stringify(sdk_version),
          app_info: _this._appInfo,
          device_info: _this._deviceInfo,
          user_attributes: _this._userAttributes
        };
        var hash = md5(data);
        var oldHash = _this._dataManager.getItemOrDefault(APX_USER_INFO_HASH, "");

        // If the stored hash and new hash are equal, no need to send the information
        if (hash === oldHash) {
          Logger.debug("Controller : No need to post user info. No change in it");
          return;
        }

        // Report to server if there is a change in the user info.
        _this._api.postUserInfo(data, function () {
          Logger.debug("Controller : Posted user info. Persisting the hash to localstorage");
          // Update the hash in localStorage
          _this.persistToStorage(APX_USER_INFO_HASH, hash);
        });
      });
      /**
       * @function            _canFetchConfig
       * @description         Checks a new config can be fetched or not by comparing the hashes.
       * @private
       * @param {string}      hash
       * @returns {boolean}   true - If a new config can be fetched.
       *                      false - Not needed to fetch a new config
       */
      _defineProperty(this, "_canFetchConfig", function (hash) {
        if (hash === "") {
          // If the hash is empty, it means config is never fetched
          return true;
        }
        var oldHash = _this._dataManager.getItemOrDefault(APX_CONFIG_HASH, "");
        return oldHash !== hash;
      });
      /**
       * @function          _dispatchSystemEvent
       * @description       Dispatches the SYSTEM_EVENT.
       * @private
       * @param {string}    visibilityState
       */
      _defineProperty(this, "_dispatchSystemEvent", function (visibilityState) {
        Logger.debug("Controller : Dispatching SYSTEM_EVENT");
        var systemEvent = makeSystemEvent(visibilityState, _this.getTimeElapsedInSession());
        _this.dispatchEvent(SYSTEM_EVENT, systemEvent);
      });
      /**
       * @function    _resetCampaignSessionFrequency
       * @description Resets the session count in the campaign frequency to 0. This is needed when a new session is created.
       * @private
       */
      _defineProperty(this, "_resetCampaignSessionFrequency", function () {
        Logger.debug("Controller : Resetting the session frequncy of all the campaigns to 0");
        var campaignFrequency = {};
        try {
          var data = _this.getFromStorage(QE_STATE);
          if (isDefined(data)) {
            campaignFrequency = JSON.parse(decode(_this.siteId, data));
          }
          Object.entries(campaignFrequency).forEach(function (_ref) {
            var _ref2 = _slicedToArray(_ref, 1),
              key = _ref2[0];
            return campaignFrequency[key]["SESSION"] = 0;
          });
        } catch (e) {
          campaignFrequency = {};
          Logger.error("Controller : Can't reset campaign limits:".concat(e));
        }
        _this.persistToStorage(QE_STATE, campaignFrequency, true);
        _this.window.ApxorRTM.resetFrequencyCounts();
      });
      /**
       * @function    _registerSystemEventMonitor
       * @description Registers DOM ready callback
       * @private
       */
      _defineProperty(this, "_registerSystemEventMonitor", function () {
        Logger.debug("Registering a handler for the system events");
        executeIfDOMReady(_this.window, function () {
          // This if condition is necessary to prevent registering to events multiple times
          if (!_this._isEventMonitorRegistered) {
            _this._executeBeforeUnload(); // registering unload event
            _this._systemEventMonitor = new SystemEventMonitor(false);
            _this._isEventMonitorRegistered = true;
          }
        });
      });
      /**
       * @function _executeBeforeUnload
       * @description Registers a callback to be called before unload. (Either close of the window or visibility change)
       */
      _defineProperty(this, "_executeBeforeUnload", function () {
        var isCalled = false;
        executeBeforeUnload(window, function () {
          Logger.debug("Controller : Executing before unload");
          if (isCalled) {
            return;
          }
          if (!_this._isRunning) {
            return;
          }
          isCalled = true;
          var isForeground = window.document.visibilityState === VISIBLE;
          if (isForeground) {
            // Make sure to create navigation event upon window unload
            _this._endNavigation(true);
            _this._dispatchSystemEvent("hidden");
          }
          clearInterval(_this._sendChunkOnEventsId);
          clearInterval(_this._sendChunkOnETAId);
          if (_this._bulkUpload) {
            _this._dataManager.persistOldChunkDetails(_this._chunkDetails);
          }
          _this._systemEventMonitor.unregisterEvents();
        });
      });
      /**
       * @function    _registerIntervalBasedChunkReporting
       * @description Registers the functions to report chunks after an interval and after the events crosses the max events count.
       * @private
       */
      _defineProperty(this, "_registerIntervalBasedChunkReporting", function () {
        Logger.debug("Controller : Registering the handlers for chunk reporting");
        clearInterval(_this._sendChunkOnETAId);
        // After the first chunk is sent to server, we will send chunk for every 20seconds if minimum 1 event is triggered till the interval
        _this._sendChunkOnETAId = setInterval(function () {
          _this._sendChunkWithAtleastOneEvent();
        }, _this._internalChunkSendInterval);
        if (_this._batchEvents) {
          clearInterval(_this._sendChunkOnEventsId);
          // After the first chunk is sent to server, we will send chunks for every configured interval, when maxEventsCount is reached
          _this._sendChunkOnEventsId = setInterval(function () {
            _this._sendChunkWithMaxedOutEvents();
          }, _this._chunkSendInterval);
        }
      });
      /**
       * @function    _sendChunkWithAtleastOneEvent
       * @description Sends chunk if there are atleast one event in the chunk details
       * @private
       */
      _defineProperty(this, "_sendChunkWithAtleastOneEvent", function () {
        var _this$_chunkDetails3 = _this._chunkDetails,
          app_events = _this$_chunkDetails3.app_events,
          navigation_events = _this$_chunkDetails3.navigation_events;
        var eventsCount = app_events.length + navigation_events.length;
        if (eventsCount > 0 && !_this._blockChunkReporting) {
          _this._prepareAndReportChunk();
        }
      });
      /**
       * @function    _sendChunkWithMaxedOutEvents
       * @description Sends chunk if events exceeds the max events count.
       * @private
       */
      _defineProperty(this, "_sendChunkWithMaxedOutEvents", function () {
        var _this$_chunkDetails4 = _this._chunkDetails,
          app_events = _this$_chunkDetails4.app_events,
          navigation_events = _this$_chunkDetails4.navigation_events;
        var eventsCount = app_events.length + navigation_events.length;
        if (!_this._bulkUpload && eventsCount > 0 || _this._bulkUpload && eventsCount >= _this._maxEventsSentCount) {
          _this._prepareAndReportChunk();
        }
      });
      /**
       * @function    _prepareAndReportChunk
       * @description Prepares and sends the chunk
       * @private
       */
      _defineProperty(this, "_prepareAndReportChunk", function () {
        Logger.debug("Controller : Preparing and reporting chunk");
        var chunk = _this._prepareChunk(_this._chunkDetails);
        _this._reportChunk(chunk, false);
      });
      /**
       * @function        _prepareChunk
       * @description     Prepares the chunk
       * @private
       * @param {object}  chunkDetails
       */
      _defineProperty(this, "_prepareChunk", function () {
        var chunkDetails = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        Logger.debug("Controller : Preparing chunk");
        _this._updateDuration();
        var chunkMeta = {
          id: _this.sessionId + ":" + _this._chunkNumber,
          number: _this._chunkNumber,
          reporting_times: [Date.now()]
        };

        // Always update the user and session attributes
        chunkDetails = _objectSpread2(_objectSpread2({}, chunkDetails), {}, {
          user_attributes: _this._userAttributes,
          session_attributes: _this._sessionAttributes
        });
        return {
          sdk_info: _this._sdkInfo,
          session_info: _this._sessionInfo,
          app_info: _this._appInfo,
          device_info: _this._deviceInfo,
          chunk_meta: chunkMeta,
          chunk_details: chunkDetails
        };
      });
      /**
       * @function    _updateDuration
       * @description Updates the session foreground duration.
       * @private
       */
      _defineProperty(this, "_updateDuration", function () {
        Logger.debug("Controller : Updating the foreground time");
        // Total duration must be DURATION + TOTAL_BG_TIME
        var duration = _this.getSDKRunningTimeInSec();
        var totalBgTime = _this._sessionHandler.getTotalBackgroundTime();
        var totalDuration = duration;

        // Remove Background time from total duration
        duration -= totalBgTime;
        _this._sessionInfo = _objectSpread2(_objectSpread2({}, _this._sessionInfo), {}, {
          duration: toDecimalPoints(duration),
          total_duration: toDecimalPoints(totalDuration)
        });
      });
      /**
       * @function          _reportChunk
       * @description       Reports the chunk
       * @private
       * @param {object}    chunk
       * @param {boolean}   navigationInProgress
       * @param {function}  callback
       */
      _defineProperty(this, "_reportChunk", function (chunk) {
        var navigationInProgress = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var callback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        Logger.debug("Controller : Reporting chunk");
        if (_this._isSending) {
          _this._pendingChunk = true;
          return;
        }
        if (_this._isSending || _this._chunk502RetryTime > 0 && _this._last502Time !== -1 && Date.now() - _this._last502Time < _this._chunk502RetryTime) {
          // Construct the chunk details state and store it in localStorage
          _this._reinitialiseChunkDetails();
          return;
        }
        var chunk_details = chunk.chunk_details;
        var app_events = chunk_details.app_events,
          system_events = chunk_details.system_events,
          navigation_events = chunk_details.navigation_events,
          user_events = chunk_details.user_events;
        if (app_events.length < 1 && system_events.length < 1 && navigation_events.length < 1 && user_events.length < 1) {
          Logger.debug("Controller : Chunk not sent. No events in the chunk");
          _this._isSending = false;
          // Can't send empty chunk to server
          callback();
          return;
        }
        _this._isSending = true;
        _this._updateChunkNumberMap(_this._sessionInfo.id, _this._chunkNumber + 1);
        _this._dataManager.removeOldChunkDetails();
        _this._dataManager.removeOldChunk();
        _this._reinitialiseChunkDetails();
        if (!navigationInProgress) {
          // Persist current chunk
          _this._dataManager.persistCurrentChunk(chunk);
          _this._api.postChunk(chunk, function () {
            Logger.debug("Controller : Chunk successfully sent");
            _this._isSending = false;
            _this._last502Time = -1;
            callback();
            if (_this._pendingChunk) {
              _this._pendingChunk = false;
              var _chunk = _this._prepareChunk(_this._chunkDetails);
              _this._reportChunk(_chunk);
            }
          }, function (errorCode) {
            Logger.debug("Controller : Chunk sending failed");
            if (errorCode === 0) {
              return;
            }
            _this._isSending = false;
            if (errorCode >= 500) {
              _this._last502Time = Date.now();
            }
            if (errorCode !== 413 && errorCode !== 417) {
              // Persist the data to storage
              _this._dataManager.persistOldChunk(chunk);
            }
            callback();
          });
        } else {
          _this._isSending = false;
          _this._dataManager.persistOldChunk(chunk);
          callback();
        }
      });
      /**
       * @function        setUserId
       * @description     Sets the user id
       * @param {string}  id
       * @returns
       */
      _defineProperty(this, "setUserId", function (id) {
        if (!_this._isInitialized) {
          DefaultController.setUserId();
          return;
        }
        if (!_this._isRunning) {
          Logger.warn("Apxor SDK is not running");
          return;
        }
        if (!isUndefined(id)) {
          Logger.debug("Controller : User id set");
          _this.setUserProperties({
            custom_user_id: id
          });
        }
      });
      /**
       * @function        setUserProperties
       * @description     Sets the user properties
       * @param {object}  properties
       */
      _defineProperty(this, "setUserProperties", function () {
        var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var propertiesDiff = {};
        if (!_this._isInitialized) {
          DefaultController.setUserProperties();
          return;
        }
        if (!_this._isRunning) {
          Logger.warn("Apxor SDK is not running");
          return;
        }
        if (Object.keys(properties).length > 0) {
          propertiesDiff = getFlatMapDiff(properties, _this._userAttributes);
          if (_this.isTestDevice() && Object.keys(propertiesDiff).length > 0) {
            //logging event for each user property changes
            var propertyKeys = Object.keys(propertiesDiff);
            propertyKeys.forEach(function (key) {
              _this.logAppEvent("apx_property_updated", {
                apx_property_type: "user",
                apx_property_name: key,
                apx_property_old_value: _this._userAttributes[key] || "",
                apx_property_updated_value: propertiesDiff[key]
              }, undefined, false, "apxor", "");
            });
          }
          _this._userAttributes = _objectSpread2(_objectSpread2({}, _this._userAttributes), properties);
          try {
            Logger.debug("Controller : User properties set");
            _this.persistToStorage(APX_USER_ATTR_KEY, encode(_this.siteId, JSON.stringify(_this._userAttributes)));
          } catch (e) {
            Logger.debug("Controller : Error while setting the use properties ".concat(e));
          }
        }
      });
      /**
       * @function        setSessionProperties
       * @description     Sets the session properties
       * @param {object}  properties
       */
      _defineProperty(this, "setSessionProperties", function () {
        var properties = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var propertiesDiff = {};
        if (!_this._isInitialized) {
          DefaultController.setSessionProperties();
          return;
        }

        // Do the property diffing here
        // let propertiesDiff = {}
        if (!_this._isRunning) {
          Logger.warn("Apxor SDK is not running");
          return;
        }
        if (Object.keys(properties).length > 0) {
          Logger.debug("Controller : Session properties set");
          propertiesDiff = getFlatMapDiff(properties, _this._sessionAttributes);
          //logging event for each session property change
          if (_this.isTestDevice() && Object.keys(propertiesDiff).length > 0) {
            var propertyKeys = Object.keys(propertiesDiff);
            propertyKeys.forEach(function (key) {
              _this.logAppEvent("apx_property_updated", {
                apx_property_type: "session",
                apx_property_name: key,
                apx_property_old_value: _this._sessionAttributes[key] || "",
                apx_property_updated_value: propertiesDiff[key]
              }, undefined, false, "apxor", "");
            });
          }
          _this._sessionAttributes = _objectSpread2(_objectSpread2({}, _this._sessionAttributes), properties);
        }
      });
      /**
       * @function        setAppVersion
       * @description     Sets the app version
       * @param {string}  version
       * @returns
       */
      _defineProperty(this, "setAppVersion", function (version) {
        if (!_this._isInitialized) {
          DefaultController.setAppVersion();
          return;
        }
        if (!_this._isRunning) {
          Logger.warn("Apxor SDK is not running");
          return;
        }
        _this.version = version;
      });
      /**
       * @function _updateAppInfo
       * @description Updates the App info
       * @private
       */
      _defineProperty(this, "_updateAppInfo", function () {
        Logger.debug("Controller : Updating the App info");
        var _this$config2 = _this.config,
          _this$config2$name = _this$config2.name,
          name = _this$config2$name === void 0 ? "" : _this$config2$name,
          _this$config2$domain = _this$config2.domain,
          domain = _this$config2$domain === void 0 ? _this.window.location.host : _this$config2$domain;
        var installationTime = _this._dataManager.getInstallationTime(_this.startTime);
        var appMode = getAppMode(_this.window);
        var appVersion = isDefined(_this.clientConfig.version) ? "" + _this.clientConfig.version : _this._dataManager.getAppVersion();
        var appName = name;
        if (name === "") {
          appName = getPageTitle(_this.window);
          if (appName === "Unknown") {
            appName = "";
          }
        }
        _this._appInfo = makeAppInfo(appName, domain, installationTime, appMode, appVersion);
      });
      /**
       * @function          getEventCount
       * @description       Returns the number of times a client event is logged
       * @param {string}    eventName
       * @returns {number}  count
       */
      _defineProperty(this, "getEventCount", function (eventName) {
        // Check if that event exists in clientEvents
        var count = -1;
        _this.clientEvents.forEach(function (event) {
          if (event.name === eventName) {
            count += 1;
          }
        });
        if (count === -1) return _this._sync.getEventCount(eventName);
        return count;
      });
      /**
       * @function    clearNavigation
       * @description Ends navigation and resets the flag
       */
      _defineProperty(this, "clearNavigation", function () {
        _this._endNavigation();
        _this._currentNavigation = null;
      });
      /**
       * @function    _endNavigation
       * @description Ends the navigation
       * @param {boolean}   navigationInProgress
       */
      _defineProperty(this, "_endNavigation", function () {
        var navigationInProgress = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        Logger.debug("Controller : Ending the navigation");
        if (isDefined(_this._currentNavigation)) {
          // Update duration for old navigation item
          _this._currentNavigation.duration = toDecimalPoints(_this.getSDKRunningTimeInSec() - _this._currentNavigation.transition_time);
          _this.dispatchEvent(NAVIGATION_EVENT, _objectSpread2({}, _this._currentNavigation), navigationInProgress);
        }
      });
      /**
       * @function  getSessionId
       * @returns   Returns the current session id
       */
      _defineProperty(this, "getSessionId", function () {
        return _this.sessionId;
      });
      /**
       * @function  getDeviceId
       * @returns   Returns the device id
       */
      _defineProperty(this, "getDeviceId", function () {
        if (!_this._isInitialized) {
          DefaultController.getClientId();
          return null;
        }
        if (!_this._isRunning) {
          Logger.warn("Controller : Apxor SDK is not running");
          return null;
        }
        return _this._deviceId;
      });
      /**
       * @function reportChunkOnVisibilityChange
       * @description Uploads the last chunk when there is a visibility change in the page. For example on a tab switch.
       */
      _defineProperty(this, "reportChunkOnVisibilityChange", function () {
        var _this$_chunkDetails5;
        if (!_this._isInitialized) {
          return;
        }
        var chunk = _this._prepareChunk(_this._chunkDetails);
        var appId = _this.siteId;
        var payload = JSON.stringify(chunk);
        if (((_this$_chunkDetails5 = _this._chunkDetails) === null || _this$_chunkDetails5 === void 0 ? void 0 : _this$_chunkDetails5.app_events.length) > 0) {
          Logger.debug("Reporting a chunk on visibility change with sendBeacon");
          // Clear all unsent events from storage
          _this._dataManager.removeOldChunkDetails();
          _this._dataManager.persistOldChunk(chunk);
          // Makes use of the Navigator.sendBeacon() as the request lives even after the page navigates
          navigator.sendBeacon("https://server.apxor.com/v2/api/".concat(appId, "/text-chunks?appId=").concat(appId, "&isTestDevice=").concat(_this.isTestDevice()), payload);
        }
      });
      /**
       * @function           _incrementLtCount
       * @description        Increments the lt count of the event. If the event never happened before lt count is set to 0
       * @param {string}     evName
       */
      _defineProperty(this, "_incrementLtCount", function (evName) {
        if (isNotDefined(_this._ltCountObj[evName]) && _this._ltCountObj[evName] !== 0) {
          _this._ltCountObj[evName] = 0;
        } else {
          var count = _this._ltCountObj[evName];
          count = count + 1;
          _this._ltCountObj[evName] = count;
        }
        var encodedLtCount = encode(_this.siteId, arrayBufferToString(new TextEncoder().encode(JSON.stringify(_this._ltCountObj))));
        _this.persistToStorage(APX_LT_COUNT, encodedLtCount);
      });
      /**
       * @function          logAppEvent
       * @description       Logs an App event
       * @param {string}    name
       * @param {object}    additionalInfo
       * @param {string}    category
       * @param {boolean}   forceReport
       */
      _defineProperty(this, "logAppEvent", function (name) {
        var additionalInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var category = arguments.length > 2 ? arguments[2] : undefined;
        var forceReport = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var loggedBy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "customer";
        var apx_nudge_type = arguments.length > 5 ? arguments[5] : undefined;
        if (!_this._isInitialized || !_this._isRunning) {
          Logger.warn("Controller : Can't log App event. SDK not initialised");
          DefaultController.logAppEvent();
          return;
        }
        try {
          if (isString(name) && isObject(additionalInfo)) {
            var evName = name.replace("'", "").replace("’", "");
            _this._incrementLtCount(evName);
            _this._appEventsNoKpi = [].concat(_toConsumableArray(_this._appEventsNoKpi), [name]);
            var lifetimecount = _this._ltCountObj[evName] || 0;
            additionalInfo = _objectSpread2(_objectSpread2({}, additionalInfo), {}, {
              apx_lt_count: lifetimecount
            });
            _this._updateListOfEventsLogged(name, additionalInfo);
            additionalInfo = _objectSpread2(_objectSpread2({}, additionalInfo), {}, {
              first_logged_time: _this._eventsLogged[name]["first_logged_time"],
              latest_logged_time: _this._eventsLogged[name]["latest_logged_time"]
            });
            var event = makeEvent(name, getCleanedProperties(additionalInfo), category, _this.getTimeElapsedInSession());
            var type = APP_EVENT;
            if (_this._stopEventsFromConfig.includes(name)) {
              return;
            } else if (_this._clientEventsFromConfig.includes(name)) {
              type = CLIENT_EVENT;
            }
            Logger.debug("Controller : Logging event ".concat(name));
            _this._updateListOfEventsLogged(name, additionalInfo);
            _this.dispatchEvent(type, event, false, forceReport, loggedBy, apx_nudge_type);
          } else {
            Logger.debug("Controller : Invalid App Event ".concat(name));
          }
        } catch (e) {
          Logger.error("LT Count object parsing failed ".concat(e));
        }
      });
      /**
       * @function          logClientEvent
       * @description       Logs an client event
       * @param {string}    name
       * @param {object}    additionalInfo
       */
      _defineProperty(this, "logClientEvent", function (name, additionalInfo) {
        if (!_this._isInitialized || !_this._isRunning) {
          Logger.warn("Controller : Can't log client event. SDK not initialised");
          DefaultController.logClientEvent();
          return;
        }
        var lifetimecount = _this._dataManager.getltCount(name);
        additionalInfo = _objectSpread2(_objectSpread2({}, additionalInfo), {}, {
          apx_lt_count: lifetimecount
        });
        var event = makeEvent(name, getCleanedProperties(additionalInfo), null, _this.getTimeElapsedInSession());
        var type = CLIENT_EVENT;
        if (_this._stopEventsFromConfig.includes(name)) {
          return;
        } else if (_this._appEventsFromConfig.includes(name)) {
          type = APP_EVENT;
        }
        if (event) {
          Logger.debug("Controller : Logging client event ".concat(name));
          _this._updateListOfEventsLogged(name, additionalInfo);
          _this.dispatchEvent(type, event);
        } else {
          Logger.debug("Controller : Invalid client event ".concat(name));
        }
      });
      /**
       * @function          logPageView
       * @description       Logs an page event
       * @param {string}    pathname
       * @param {number}    time
       */
      _defineProperty(this, "logPageView", function (pathname) {
        var time = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : _this.getTimeElapsedInSession();
        if (!_this._isInitialized || !_this._isRunning) {
          Logger.warn("Controller : Can't log page event. SDK not initialised");
          DefaultController.logPageView();
          return;
        }
        if (typeof pathname === "string" && pathname && pathname.length > 0) {
          // const {search, hash} = location; // TODO: search and hash need to be logged somehow
          var transitionTime = toDecimalPoints(time);
          var navigation = makeNavigationEvent(pathname, getPageTitle(_this.window), 0, transitionTime);
          _this._sync.handleNavigationEvent(pathname);
          if (!isDefined(_this._currentNavigation)) {
            _this._currentNavigation = navigation;
          } else {
            // End previously created Navigation item
            _this._endNavigation();
            // Make sure to update the _currentNavigation instance variable to current navigation item
            _this._currentNavigation = navigation;
          }
          _this.logAppEvent(APX_PAGE_OPENED, {
            time: formatDatetime(new Date()),
            navigation_id: pathname
          }, undefined, false, "apxor", "");
          Logger.debug("logPageView: page view is logged ", pathname);
        } else {
          Logger.warn("Controller : Can't log page event as pathname is empty");
        }
      });
      _defineProperty(this, "dispatchValidationEvent", function (name, additionalInfo) {
        if (!_this._isInitialized || !_this._isRunning) {
          Logger.warn("Controller : Can't log client event. SDK not initialised");
          DefaultController.dispatchValidationEvent();
          return;
        }
        var custom_event = new CustomEvent("apxValidationEvent", {
          detail: {
            name: name,
            additionalInfo: additionalInfo
          }
        });
        window.dispatchEvent(custom_event);
      });
      _defineProperty(this, "setApxorEventListener", function (AEL) {
        _this._customEventListener = AEL;
      });
      _defineProperty(this, "dispatchEvent", function (type, event) {
        var navigationInProgress = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var forceReport = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
        var loggedBy = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "customer";
        var apx_nudge_type = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
        // If it is a test device, every event is immediately reported to the server forcefully
        if (_this.isTestDevice()) {
          forceReport = true;
        }
        Logger.debug("Controller : Dispatching Event ".concat(event.name));
        _this._dataManager.updateRetainedDayCount(Date.now());
        var isNewSession = false;
        var updateChunkAndNotifyListener = function updateChunkAndNotifyListener() {
          var app_events = _this._chunkDetails.app_events;
          if (isNewSession) {
            event.time = _this.getTimeElapsedInSession();
          }
          switch (type) {
            case APP_EVENT:
              _this._chunkDetails = _objectSpread2(_objectSpread2({}, _this._chunkDetails), {}, {
                app_events: [].concat(app_events, event)
              });
              break;
            case CLIENT_EVENT:
              _this.clientEvents.push(event);

              // If it is a test device event client events are sent to the server
              if (_this.isTestDevice()) {
                _this._chunkDetails = _objectSpread2(_objectSpread2({}, _this._chunkDetails), {}, {
                  app_events: [].concat(app_events, event)
                });
              }
              break;
          }

          // Notify all listeners
          var dispatchingEvent = _objectSpread2({}, event);
          dispatchingEvent.loggedBy = loggedBy;
          dispatchingEvent.apx_nudge_type = apx_nudge_type;
          _this._eventHandler.notifyListeners(type, dispatchingEvent);
          if (isNewSession || type === CLIENT_EVENT) {
            return;
          }
          _this._chunkDetails = _objectSpread2(_objectSpread2({}, _this._chunkDetails), {}, {
            user_attributes: _objectSpread2({}, _this._userAttributes),
            session_attributes: _objectSpread2({}, _this._sessionAttributes)
          });
          var chunk = _this._prepareChunk(_this._chunkDetails, type);
          _this._dataManager.persistOldChunkDetails(_this._chunkDetails);
          _this._dataManager.persistOldChunk(chunk);
          if (forceReport === true) {
            _this._reportChunk(chunk, navigationInProgress);
            return;
          }
          if (_this._bulkUpload) {
            if (app_events.length + 1 < _this._maxEventsSentCount) {
              return;
            }
            _this._reportChunk(chunk, navigationInProgress);
            return;
          }

          // Send chunk to server when tab/window moves to background
          // Or send if batch events is false and APP_EVENT occurs
          if (!navigationInProgress && type === APP_EVENT && !_this._batchEvents) {
            _this._reportChunk(chunk, navigationInProgress);
          }
        };
        var startCallback = function startCallback() {
          _this.persistToStorage(APX_LAST_EVENT_TIME, Date.now());
          updateChunkAndNotifyListener();
        };
        var endCallback = function endCallback() {
          isNewSession = true;
          _this.startNewSession(Date.now(), startCallback);
        };
        if (type === APP_EVENT) {
          // Check if a new session can be created
          var currentTime = Date.now();
          var lastEventTime = _this.getFromStorage(APX_LAST_EVENT_TIME);
          lastEventTime = Number(lastEventTime);
          if (isNumber(lastEventTime) && lastEventTime > 0 && Math.round(millisToSeconds(currentTime - lastEventTime)) > _this._idleTimeout) {
            // Create new session
            _this.endSession(true, endCallback);
          } else {
            // Update the Last event time even for App Events only
            _this.persistToStorage(APX_LAST_EVENT_TIME, Date.now());
            updateChunkAndNotifyListener();
          }
          if (_this._customEventListener) {
            var campaign_type = event.additional_info.campaign_type !== undefined ? event.additional_info.campaign_type : "";
            var campaign_id = event.additional_info.id !== undefined ? event.additional_info.id : "";
            var survey_campaign_id = event.additional_info.apx_survey_id !== undefined ? event.additional_info.apx_survey_id : "";
            if (showEventsList.includes(event.name)) {
              _this._customEventListener.onEvent("apx_campaign_show", {
                nudge_type: "".concat(campaign_type),
                nudge_id: "".concat(campaign_id),
                timestamp: Date.now(),
                device_id: _this.getDeviceId(),
                user_id: _this._dataManager.getUserId(),
                attributes: event.additional_info
              });
            } else if (dismissEventsList.includes(event.name)) {
              _this._customEventListener.onEvent("apx_campaign_dismiss", {
                nudge_type: "".concat(campaign_type),
                nudge_id: "".concat(campaign_id),
                timestamp: Date.now(),
                device_id: _this.getDeviceId(),
                user_id: _this._dataManager.getUserId(),
                attributes: event.additional_info
              });
            } else if (actionEventsList.includes(event.name)) {
              _this._customEventListener.onEvent("apx_campaign_action", {
                nudge_type: "".concat(campaign_type),
                nudge_id: "".concat(campaign_id),
                timestamp: Date.now(),
                device_id: _this.getDeviceId(),
                user_id: _this._dataManager.getUserId(),
                attributes: event.additional_info
              });
            } else if (surveyShowEventsList.includes(event.name)) {
              _this._customEventListener.onEvent("apx_survey_show", {
                nudge_type: "".concat(campaign_type),
                nudge_id: "".concat(survey_campaign_id),
                timestamp: Date.now(),
                device_id: _this.getDeviceId(),
                user_id: _this._dataManager.getUserId(),
                attributes: event.additional_info
              });
            } else if (surveyDismissEventsList.includes(event.name)) {
              _this._customEventListener.onEvent("apx_survey_dismiss", {
                nudge_type: "".concat(campaign_type),
                nudge_id: "".concat(survey_campaign_id),
                timestamp: Date.now(),
                device_id: _this.getDeviceId(),
                user_id: _this._dataManager.getUserId(),
                attributes: event.additional_info
              });
            } else if (surveyActionEventsList.includes(event.name)) {
              _this._customEventListener.onEvent("apx_survey_action", {
                nudge_type: "".concat(campaign_type),
                nudge_id: "".concat(survey_campaign_id),
                timestamp: Date.now(),
                device_id: _this.getDeviceId(),
                user_id: _this._dataManager.getUserId(),
                attributes: event.additional_info
              });
            } else {
              var campaignPattern = /^(InLine_|InApp_)[a-zA-Z0-9]+_Clicked$/;
              var surveyPattern = /^Survey_[a-zA-Z0-9]+_Clicked$/;
              if (campaignPattern.test(event.name)) {
                _this._customEventListener.onEvent("apx_campaign_action", {
                  nudge_type: "".concat(campaign_type),
                  nudge_id: "".concat(event.additional_info.id),
                  timestamp: Date.now(),
                  device_id: _this.getDeviceId(),
                  user_id: _this._dataManager.getUserId(),
                  attributes: event.additional_info
                });
              } else if (surveyPattern.test(event.name)) {
                _this._customEventListener.onEvent("apx_survey_action", {
                  nudge_type: "".concat(campaign_type),
                  nudge_id: "".concat(survey_campaign_id),
                  timestamp: Date.now(),
                  device_id: _this.getDeviceId(),
                  user_id: _this._dataManager.getUserId(),
                  attributes: event.additional_info
                });
              }
            }
          }
        } else {
          updateChunkAndNotifyListener();
        }
      });
      /**
       * @function          startNewSession
       * @description       Starts a new session and resets all the flags and chunk
       * @param {number}    startTime
       * @param {function}  startCallback
       */
      _defineProperty(this, "startNewSession", function () {
        var _this$getFromStorage;
        var startTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : Date.now();
        var startCallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        var force = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        if (!_this._isInitialized && !force) {
          DefaultController.startSession();
          return;
        }
        if (_this._isRunning) {
          startCallback();
          return;
        }
        _this.sessionId = uuid();
        Logger.debug("Controller : New session started with id ".concat(_this.sessionId));
        //Get session count
        _this.persistToStorage(APX_SESSION_ID, _this.sessionId);
        _this._sessionCount = (_this$getFromStorage = _this.getFromStorage(REATINED_SESSIONS)) !== null && _this$getFromStorage !== void 0 ? _this$getFromStorage : 0;
        //Increment session count by 1
        _this._sessionCount = Number(_this._sessionCount) + 1;
        _this.persistToStorage(REATINED_SESSIONS, _this._sessionCount);

        //this.startTime = startTime;
        _this.sessionStartTime = startTime;
        _this.persistToStorage(APX_SESSION_START_TIME, _this.sessionStartTime);
        _this._sessionHandler.reset();
        _this.createNewChunkAndPersist();
        _this._systemEventMonitor = new SystemEventMonitor(_this.config);
        _this._isRunning = true;
        _this._resetCampaignSessionFrequency();
        startCallback();
      });
      /**
       * @function            endSession
       * @description         Ends the current session
       * @param {boolean}     isForced
       * @param {function}    endcallback
       */
      _defineProperty(this, "endSession", function () {
        var isForced = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var endcallback = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {};
        if (!_this._isInitialized) {
          DefaultController.endSession();
          return;
        }
        if (!_this._isRunning) {
          Logger.warn("Apxor SDK is not running. Please make sure to call 'startSession'");
          return;
        }
        if (!isForced) {
          _this._endNavigation();
        }
        var chunkDetails = _objectSpread2(_objectSpread2({}, _this._chunkDetails), {}, {
          user_attributes: _objectSpread2({}, _this._userAttributes),
          session_attributes: _objectSpread2({}, _this._sessionAttributes)
        });
        var chunk = _this._prepareChunk(chunkDetails);
        _this._dataManager.removeOldChunkDetails();
        var onChunkReport = function onChunkReport() {
          _this._dataManager.clearCurrentChunk();
          _this._sessionHandler.reset();
          if (isDefined(_this._systemEventMonitor) && _this._isEventMonitorRegistered) {
            _this._systemEventMonitor.unregisterEvents();
          }
          unregisterBeforeUnloadCallback(document);
          _this._isRunning = false;
          endcallback();
          Logger.debug("Controller : Current session ended");
        };
        if (_this._chunk502RetryTime > 0 && _this._last502Time > 0) {
          _this._dataManager.persistOldChunk(chunk);
          onChunkReport();
        } else {
          _this._reportChunk(chunk, false, onChunkReport);
        }
      });
      /************************************************** UTILITY FUNCTIONS ********************************************************************/
      _defineProperty(this, "resetUserProperties", function () {
        _this._dataManager.resetUserProperties();
        var userProperties = getDefaultUserProperties(_this.window, _this.getDevInfo());
        _this._userAttributes = {};
        _this.setUserProperties(userProperties);
      });
      _defineProperty(this, "resetSessionProperties", function () {
        var sessionProperties = getDefaultSessionProperties(_this.window);
        _this._sessionAttributes = {};
        _this.setSessionProperties(sessionProperties);
      });
      _defineProperty(this, "persistToStorage", function (key, value) {
        var encodeData = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var storage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : LOCAL_STORAGE;
        var data = value;
        if (encodeData) {
          if (isObject(data)) {
            data = encode(_this.siteId, JSON.stringify(data));
          }
        }
        _this._dataManager.persist(key, data, storage);
      });
      _defineProperty(this, "getFromStorage", function (key) {
        var encoded = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        var storage = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : LOCAL_STORAGE;
        return _this._dataManager.getItem(key, encoded, storage);
      });
      _defineProperty(this, "getValueOrDefault", function (key, defaultValue) {
        var encoded = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var storage = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : LOCAL_STORAGE;
        return _this._dataManager.getItemOrDefault(key, defaultValue, encoded, storage);
      });
      _defineProperty(this, "getSessionInfo", function () {
        return _this._sessionInfo;
      });
      _defineProperty(this, "getUserAttributes", function () {
        return _this._userAttributes;
      });
      _defineProperty(this, "getSessionAttributes", function () {
        return _this._sessionAttributes;
      });
      _defineProperty(this, "makeGetRequest", function (url, resolve, reject) {
        _this._api.makeGetRequest(url, resolve, reject);
      });
      _defineProperty(this, "fetchConfiguration", function (type, validateUrl, apiUrl, callback) {
        _this._sync.fetchConfiguration(type, validateUrl, apiUrl, callback);
      });
      _defineProperty(this, "flattenJSON", function (properties) {
        return getCleanedProperties(properties, 2);
      });
      _defineProperty(this, "registerForEvent", function (type, callback) {
        _this._eventHandler.registerForEvent(type, callback);
      });
      _defineProperty(this, "unregisterFromEvent", function (type, callback) {
        _this._eventHandler.unregisterFromEvent(type, callback);
      });
      _defineProperty(this, "getSDKRunningTimeInSec", function () {
        return millisToSeconds(Date.now() - _this.startTime);
      });
      _defineProperty(this, "getTimeElapsedInSession", function () {
        var currentTime = Date.now();
        Logger.debug("Controller : Time elapsed in session is ".concat((currentTime - _this.sessionStartTime) / 1000, "sec"));
        return millisToSeconds(currentTime - _this.sessionStartTime);
      });
      _defineProperty(this, "setBlockChunkReportingFlag", function (block) {
        _this._blockChunkReporting = block;
      });
      _defineProperty(this, "isTestDevice", function () {
        try {
          var testDeviceInfo = _this.getFromStorage("_apx_td", true);
          if (isDefined(testDeviceInfo)) {
            //const testDeviceInfo = JSON.parse(testDeviceInfoStr);
            if (isDefined(testDeviceInfo.id)) {
              return true;
            }
          }
          return false;
        } catch (e) {
          return false;
        }
      });
      _defineProperty(this, "persistTerminationInfoLocally", function (id) {
        var _data$id;
        if (_this.getFromStorage(APX_TERMINATION_ID) === null) {
          _this.persistToStorage(APX_TERMINATION_ID, JSON.stringify({}));
        }
        var data = JSON.parse(_this.getFromStorage(APX_TERMINATION_ID));
        if (!data[id]) {
          data[id] = {
            startDate: "",
            _startTime: "",
            goalAcheived: false
          };
        }
        if (!((_data$id = data[id]) !== null && _data$id !== void 0 && _data$id.goalAcheived)) {
          data[id].goalAcheived = true;
        }
        _this.persistToStorage(APX_TERMINATION_ID, JSON.stringify(data));
      });
      _defineProperty(this, "persistStartDateInfoLocally", function (id) {
        var _data$id2, _data$id3;
        if (_this.getFromStorage(APX_TERMINATION_ID) === null) {
          _this.persistToStorage(APX_TERMINATION_ID, JSON.stringify({}));
        }
        var data = JSON.parse(_this.getFromStorage(APX_TERMINATION_ID));
        if (!data[id]) {
          data[id] = {
            startDate: getDateInMMDDYYYY(),
            _startTime: _getTime(),
            goalAcheived: false
          };
        }
        if (!((_data$id2 = data[id]) !== null && _data$id2 !== void 0 && _data$id2.startDate) === "") {
          data[id].startDate = getDateInMMDDYYYY();
        }
        if (!((_data$id3 = data[id]) !== null && _data$id3 !== void 0 && _data$id3._startTime) === "") {
          data[id]._startTime = _getTime();
        }
        _this.persistToStorage(APX_TERMINATION_ID, JSON.stringify(data));
      });
      _defineProperty(this, "isBadgeTriggerSatisfied", function (id) {
        var _data$id4, _data$id5;
        if (_this.getFromStorage(APX_TERMINATION_ID) === null) {
          return false;
        }
        var data = JSON.parse(_this.getFromStorage(APX_TERMINATION_ID));
        if (!data[id]) {
          return false;
        }
        if (!((_data$id4 = data[id]) !== null && _data$id4 !== void 0 && _data$id4.startDate) !== "" || !((_data$id5 = data[id]) !== null && _data$id5 !== void 0 && _data$id5._startTime) !== "") {
          return true;
        }
      });
      _defineProperty(this, "clearLocalStorage", function () {
        for (var i = localStorage.length - 1; i >= 0; i--) {
          var key = localStorage.key(i);
          // Check if the key is not apxor key
          if (!apxorKeys.includes(key)) {
            localStorage.removeItem(key);
          }
        }
      });
      if (!Controller.instance) {
        Controller.instance = this;
      }
      return Controller.instance;
    }
    _createClass(Controller, null, [{
      key: "getInstance",
      value: function getInstance() {
        if (!Controller.instance) {
          Controller.instance = new Controller();
        }
        return Controller.instance;
      }
    }]);
    return Controller;
  }();
  _defineProperty(Controller, "instance", void 0);

  var isUndefined = function isUndefined(term) {
    return typeof term === "undefined";
  };

  /**
   *
   * @param term
   * @returns {boolean}
   */
  var isNull = function isNull(term) {
    return term === null;
  };

  /**
   *
   * @param term
   * @returns {boolean}
   */
  var isDefined = function isDefined(term) {
    return typeof term !== "undefined" && !isNull(term);
  };
  var isNotDefined = function isNotDefined(term) {
    return !isDefined(term);
  };
  var isFunction = function isFunction(fn) {
    return typeof fn === "function";
  };
  var isString = function isString(term) {
    return typeof term === "string";
  };
  var isBoolean = function isBoolean(x) {
    return typeof x === "boolean";
  };
  var isNumber = function isNumber(term) {
    return isDefined(term) && !isNull(term) && !isNaN(term);
  };

  /**
   * Executes callback after loading DOM
   * @param window
   * @param callback
   */
  var executeIfDOMReady = function executeIfDOMReady() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var callback = arguments.length > 1 ? arguments[1] : undefined;
    // Callback must be provided and must be a function
    if (callback == null || !isFunction(callback)) {
      return;
    }
    var document = window.document;
    if (document.readyState !== "loading") {
      callback();
    } else if (isFunction(document.addEventListener)) {
      document.addEventListener("DOMContentLoaded", callback);
    } else if (isFunction(window.attachEvent)) {
      window.attachEvent("onreadystatechange", function (e) {
        if (document.readyState !== "loading") callback(e);
      });
    }
  };
  var executeBeforeUnload = function executeBeforeUnload() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
      return null;
    };
    if (isFunction(fn)) {
      window.addEventListener("pagehide", function (e) {
        fn(e);
        return "";
      });
      window.addEventListener("beforeunload", function (e) {
        fn(e);
        return "";
      });
      window.addEventListener("onunload", function (e) {
        fn(e);
        return "";
      });
    }
    //Clueless :(
  };

  var unregisterBeforeUnloadCallback = function unregisterBeforeUnloadCallback() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var fn = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : function () {
      return null;
    };
    if (isFunction(fn)) {
      window.removeEventListener("pagehide", fn);
      window.removeEventListener("beforeunload", fn);
      window.removeEventListener("onunload", fn);
    }
  };

  /**
   * registering for an Event on Element
   * @param element
   * @param eventType
   * @param handler
   * @param passive
   */
  var registerForEvent = function registerForEvent(element, eventType, handler) {
    var passive = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (isFunction(element.addEventListener)) {
      element.addEventListener(eventType, handler, passive);
    } else if (isFunction(element.attachEvent)) {
      element.attachEvent(eventType, handler);
    } else {
      element[ON_KEY + eventType] = handler;
    }
  };

  //returns true if current id is in never_show_ids
  var checkForNeverShow = function checkForNeverShow(id) {
    var controller = Controller.getInstance();
    var never_show_ids = JSON.parse(controller.getFromStorage("_apx_never_show_ids"));
    if (isNull(never_show_ids) || !Array.isArray(never_show_ids)) {
      return false;
    }
    if (never_show_ids.includes(id)) {
      return true;
    } else {
      return false;
    }
  };

  //to handle never show
  var removeLastPartOfId = function removeLastPartOfId(id) {
    if (id.includes("-testing")) {
      // If '-testing' substring is present, remove last 10 characters and replace '-1'
      return id.substring(0, id.length - 8) + "-1";
    } else {
      // If '-testing' substring is not present, remove last two characters and append '-1'
      return id + "-1";
    }
  };

  /**
   * deregistering for an Event on Element
   * @param element
   * @param eventType
   * @param handler
   */
  var deregisterFromEvent = function deregisterFromEvent(element, eventType, handler) {
    if (isFunction(element.removeEventListener)) {
      element.removeEventListener(eventType, handler);
    } else if (isFunction(element.detachEvent)) {
      element.detachEvent(eventType, handler);
    } else {
      element[ON_KEY + eventType] = handler;
    }
  };
  var formatDatetime = function formatDatetime(date) {
    var withTimeZoneOffset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    var withPadding = function withPadding(n) {
      return n < 10 ? "0" + n : n;
    };
    var utc = date.getFullYear() + "-" + withPadding(date.getMonth() + 1) + "-" + withPadding(date.getDate()) + "T" + withPadding(date.getHours()) + ":" + withPadding(date.getMinutes()) + ":" + withPadding(date.getSeconds());
    if (withTimeZoneOffset) {
      return utc + date.toTimeString().split(" ")[1].replace(/GMT([+|-])(\d{2})(\d{2})/, "$1$2:$3");
    } else {
      return utc;
    }
  };

  /**
   * For cross browser compatibility
   */
  var getNow = function getNow() {
    return Date.now();
  };

  /**
   * // https://gist.github.com/jed/982883
   * @param a
   * @returns {string}
   */
  var uuid = function b() {
    var a = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    return a ? (a ^ Math.random() * 16 >> a / 4).toString(16) : ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, b);
  };

  /**
   * Device (Only mobile devices)
   * @returns {string}
   */
  var getDevice = function getDevice() {
    var _window = window,
      _window$navigator = _window.navigator,
      _window$navigator2 = _window$navigator === void 0 ? {} : _window$navigator,
      _window$navigator2$us = _window$navigator2.userAgent,
      userAgent = _window$navigator2$us === void 0 ? "" : _window$navigator2$us;
    switch (true) {
      case /Windows Phone/i.test(userAgent) || /WPDesktop/.test(userAgent):
        return "Windows Phone";
      case /iPad/.test(userAgent):
        return "iPad";
      case /iPod/.test(userAgent):
        return "iPod Touch";
      case /iPhone/.test(userAgent):
        return "iPhone";
      case /(BlackBerry|PlayBook|BB10)/i.test(userAgent):
        return "BlackBerry";
      case /Android/.test(userAgent):
        return "Android";
      default:
        return "Desktop";
    }
  };

  /**
   * Device Info
   * @param window
   * @returns {{id, hardware_model: (string|*), dimensions: {width, height}, os_version}}
   */
  var getDeviceInfo = function getDeviceInfo() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _window$navigator3 = window.navigator,
      _window$navigator4 = _window$navigator3 === void 0 ? {} : _window$navigator3,
      _window$navigator4$us = _window$navigator4.userAgent,
      userAgent = _window$navigator4$us === void 0 ? "" : _window$navigator4$us,
      _window$navigator4$ve = _window$navigator4.vendor,
      vendor = _window$navigator4$ve === void 0 ? "" : _window$navigator4$ve;
    var OperaMini = BROWSERS.OperaMini,
      Opera = BROWSERS.Opera,
      BlackBerry = BROWSERS.BlackBerry,
      IEMobile = BROWSERS.IEMobile,
      Edge = BROWSERS.Edge,
      FB = BROWSERS.FB,
      Chrome = BROWSERS.Chrome,
      ChromeIOS = BROWSERS.ChromeIOS,
      UC = BROWSERS.UC,
      FirefoxIOS = BROWSERS.FirefoxIOS,
      SafariMobile = BROWSERS.SafariMobile,
      Safari = BROWSERS.Safari,
      AndroidMobile = BROWSERS.AndroidMobile,
      Konqueror = BROWSERS.Konqueror,
      Firefox = BROWSERS.Firefox,
      IE = BROWSERS.IE,
      Mozilla = BROWSERS.Mozilla,
      Brave = BROWSERS.Brave;

    /**
     * Browser
     * @returns {string}
     */
    var getBrowser = function getBrowser() {
      var _navigator;
      if ((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.brave) {
        // Due to less market share of brave, for privacy and compatability purposes brave browser uses chromes user agent string, so it is not possible to identify brave using userAgent string
        return Brave;
      }
      switch (true) {
        case userAgent.includes(" OPR/"):
          return userAgent.includes("Mini") ? OperaMini : Opera;
        case /(BlackBerry|PlayBook|BB10)/i.test(userAgent):
          return BlackBerry;
        case userAgent.includes("IEMobile") || userAgent.includes("WPDesktop"):
          return IEMobile;
        case userAgent.includes("FBIOS"):
          return FB;
        case userAgent.includes("Chrome"):
          return Chrome;
        case userAgent.includes("CriOS"):
          return ChromeIOS;
        case userAgent.includes("Edge"):
          return Edge;
        case userAgent.includes("UCWEB") || userAgent.includes("UCBrowser"):
          return UC;
        case userAgent.includes("FxiOS"):
          return FirefoxIOS;
        case vendor.includes("Apple"):
          return userAgent.includes("Mobile") ? SafariMobile : Safari;
        case userAgent.includes("Android"):
          return AndroidMobile;
        case userAgent.includes("Konqueror"):
          return Konqueror;
        case userAgent.includes("Firefox"):
          return Firefox;
        case userAgent.includes("MSIE") || userAgent.includes("Trident/"):
          return IE;
        case userAgent.includes("Gecko"):
          return Mozilla;
        default:
          return "";
        //FIXME don't know what to return :(
      }
    };

    var browser = getBrowser();

    /**
     * Browser Version
     * @returns {*}
     */
    var getBrowserVersion = function getBrowserVersion() {
      var _IEMobile$Edge$Chrome;
      var versionRegEx = (_IEMobile$Edge$Chrome = {}, _defineProperty(_IEMobile$Edge$Chrome, IEMobile, /rv:(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, Edge, /Edge\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, Chrome, /Chrome\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, ChromeIOS, /CriOS\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, UC, /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, Safari, /Version\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, SafariMobile, /Version\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, Opera, /(Opera|OPR)\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, Firefox, /Firefox\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, FirefoxIOS, /FxiOS\/(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, Konqueror, /Konqueror:(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, BlackBerry, /BlackBerry (\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, AndroidMobile, /android\s(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, IE, /(rv:|MSIE )(\d+(\.\d+)?)/), _defineProperty(_IEMobile$Edge$Chrome, Mozilla, /rv:(\d+(\.\d+)?)/), _IEMobile$Edge$Chrome)[browser];
      if (versionRegEx === undefined) {
        return null;
      }
      var matches = userAgent.match(versionRegEx);
      if (!matches) {
        return null;
      }
      return parseFloat(matches[matches.length - 2]);
    };

    /**
     * OS
     * @returns {string}
     */
    var getOS = function getOS() {
      switch (true) {
        case /Windows/i.test(userAgent):
          return /Phone/.test(userAgent) || /WPDesktop/.test(userAgent) ? "Windows Phone" : "Windows";
        case /(iPhone|iPad|iPod)/.test(userAgent):
          return "iOS";
        case /Android/.test(userAgent):
          return "Android";
        case /(BlackBerry|PlayBook|BB10)/i.test(userAgent):
          return "BlackBerry";
        case /Mac/i.test(userAgent):
          return "Mac OS X";
        case /Linux/.test(userAgent):
          return "Linux";
        case /CrOS/.test(userAgent):
          return "Chrome OS";
        default:
          return "";
      }
    };

    /**
     * Device Dimensions
     * @returns {{dimensions: {}, dimensions_in_pixels: {}, dpi: string}}
     */
    var getDimensions = function getDimensions() {
      var _window$screen = window.screen,
        _window$screen2 = _window$screen === void 0 ? {
          width: 0,
          height: 0
        } : _window$screen,
        height = _window$screen2.height,
        width = _window$screen2.width,
        _window$devicePixelRa = window.devicePixelRatio,
        devicePixelRatio = _window$devicePixelRa === void 0 ? 1 : _window$devicePixelRa;
      var roundedDimension = function roundedDimension(dim) {
        //1918.6773494 ==> 1920
        var mul = Math.round(dim) * devicePixelRatio;
        var mod = mul % 10;
        return mul + (mod > 0 ? 10 : 0) - mod;
      };
      return {
        dimensions: {
          width: width,
          height: height
        },
        dimensions_in_pixels: {
          width: roundedDimension(width),
          height: roundedDimension(height)
        },
        dpi: devicePixelRatio.toString()
      };
    };
    var browser_version = getBrowserVersion();
    var device = getDevice();
    var os = getOS();
    return _objectSpread2(_objectSpread2({}, getDimensions()), {}, {
      device: device,
      browser_version: browser_version,
      browser: browser,
      os: os
    });
  };

  /**
   *
   * @param window
   * @param deviceInfo
   * @returns {{device, os, browser, browser_version, resolution: string, language: string}}
   */
  var getDefaultUserProperties = function getDefaultUserProperties() {
    var _ref;
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var deviceInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var _window$navigator5 = window.navigator,
      _window$navigator6 = _window$navigator5 === void 0 ? {} : _window$navigator5,
      language = _window$navigator6.language;
    var browser_version = deviceInfo.browser_version,
      browser = deviceInfo.browser;
    var cookie_supported = Cookie.isCookieAvailable();
    return _ref = {}, _defineProperty(_ref, APX_PREFIX + "browser", browser), _defineProperty(_ref, APX_PREFIX + "browser_version", browser + "_" + browser_version), _defineProperty(_ref, APX_PREFIX + "language", language), _defineProperty(_ref, APX_PREFIX + "cookies_supported", cookie_supported), _ref;
  };

  /**
   *
   * @param window
   * @returns {{}}
   */
  var getDefaultSessionProperties = function getDefaultSessionProperties() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var _window$navigator7 = window.navigator,
      _window$navigator8 = _window$navigator7 === void 0 ? {} : _window$navigator7,
      _window$navigator8$co = _window$navigator8.connection,
      _window$navigator8$co2 = _window$navigator8$co === void 0 ? {} : _window$navigator8$co,
      effectiveType = _window$navigator8$co2.effectiveType,
      saveData = _window$navigator8$co2.saveData,
      platform = _window$navigator8.platform,
      webdriver = _window$navigator8.webdriver,
      referrer = window.document.referrer;
    var properties = {};
    if (effectiveType) {
      properties[APX_PREFIX + NETWORK_KEY] = effectiveType;
    }
    if (saveData) {
      properties[APX_PREFIX + DATA_SAVE_MODE_KEY] = saveData;
    }
    if (platform) {
      properties[APX_PREFIX + PLATFORM_KEY] = platform;
    }
    if (isDefined(webdriver) && webdriver) {
      properties[APX_PREFIX + AUTOMATION_KEY] = webdriver; //to detect automation
    }

    if (isDefined(referrer) && referrer.length > 0) {
      properties[APX_PREFIX + REFERRER_KEY] = referrer;
    } else {
      properties[APX_PREFIX + REFERRER_KEY] = "direct";
    }
    var device = getDevice();
    properties[APX_PREFIX + DEVICE_TYPE] = device;
    return properties;
  };

  /**
   * For GDPR compliance
   * @param window
   * @returns {WorkerNavigator | Navigator | boolean}
   */
  var isTrackingEnabled = function isTrackingEnabled() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    if (window.navigator) {
      var dnt = window.navigator.doNotTrack;
      return !(dnt === "1" || dnt === "yes");
    }
    return true;
  };

  /**
   *
   * @param window
   * @returns {string}
   */
  var getPageTitle = function getPageTitle(window) {
    var node = window.document.querySelector("title");
    if (!isDefined(node) || !isDefined(node.innerText)) {
      return "Unknown";
    }
    return node.innerText;
  };

  /**
   * Milli Seconds to Seconds
   * @param millis
   * @returns {number}
   */
  var millisToSeconds = function millisToSeconds(millis) {
    return isNumber(millis) ? toDecimalPoints(millis / 1000) : millis;
  };
  var toDecimalPoints = function toDecimalPoints(number) {
    var decimalPlaces = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 3;
    if (!isNumber(number) || !isNumber(decimalPlaces)) {
      return number;
    }
    if (decimalPlaces % 1 !== 0) {
      return number;
    }
    var power = Math.pow(10, decimalPlaces);
    return Math.round(number * power) / power;
  };
  var FILE_PROTOCOL = "file:";
  var LOCALHOST = "localhost";
  var APP_MODE_PRODUCTION = "production";
  var APP_MODE_DEV = "development";

  /**
   *
   * @param window
   * @returns {string}
   */
  var getAppMode = function getAppMode() {
    var window = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    //TODO: can be improved for node apps
    var _window$location = window.location,
      _window$location2 = _window$location === void 0 ? {} : _window$location,
      protocol = _window$location2.protocol,
      host = _window$location2.host,
      hostName = _window$location2.hostName;
    if (protocol === FILE_PROTOCOL || host === LOCALHOST || hostName === "0.0.0.0" || hostName === "127.0.0.1") {
      return APP_MODE_DEV;
    } else {
      return APP_MODE_PRODUCTION;
    }
  };
  var isObject = function isObject(obj) {
    return obj instanceof Object;
  };

  /**
   *
   * @param obj
   * @param depth
   * @returns {{}}
   */
  var getCleanedProperties = function getCleanedProperties() {
    var obj = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
    if (isObject(obj)) {
      var cleanedJson = {};
      Object.keys(_objectSpread2({}, obj)).forEach(function (key) {
        var value = obj[key];
        var propertyKey = key;
        if (!isString(key)) {
          propertyKey = JSON.stringify(key);
        }
        if (isBoolean(value) || isNumber(value)) {
          insertProperty(cleanedJson, propertyKey, value);
        } else if (isString(value)) {
          cleanedJson[propertyKey] = trimText(value);
        } else if (Array.isArray(value)) {
          handleJSONArray(cleanedJson, propertyKey, value, depth);
        } else if (isObject(value)) {
          handleJSONObject(cleanedJson, key, value, depth - 1);
        }
      });
      return cleanedJson;
    } else {
      return {};
    }
  };
  var handleJSONArray = function handleJSONArray(object, key, value) {
    var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    if (depth <= 0) {
      insertProperty(object, key, JSON.stringify(value));
      return;
    }
    if (Array.isArray(value)) {
      var jsonArray = value;
      if (jsonArray.length > 0) {
        var type = "";
        if (isBoolean(jsonArray[0])) {
          type = "b";
        } else if (isString(jsonArray[0])) {
          type = "s";
        } else if (isNumber(jsonArray[0])) {
          type = "n";
        } else if (Array.isArray(jsonArray[0])) {
          type = "a";
        } else if (isObject(jsonArray[0])) {
          type = "o";
        }

        // Convert array to string, if type is empty
        var length = jsonArray.length;
        if (type === "") {
          insertProperty(object, key, JSON.stringify(value));
          return;
        }
        for (var index = 1; index < length; index++) {
          if (type === "s") {
            if (!isString(jsonArray[index])) {
              insertProperty(object, key, JSON.stringify(value));
              return;
            }
          } else if (type === "b") {
            if (!isBoolean(jsonArray[index])) {
              insertProperty(object, key, JSON.stringify(value));
              return;
            }
          } else if (type === "n") {
            if (!isNumber(jsonArray[index])) {
              insertProperty(object, key, JSON.stringify(value));
              return;
            }
          } else if (type === "a") {
            if (!Array.isArray(jsonArray[index])) {
              insertProperty(object, key, JSON.stringify(value));
              return;
            }
          } else if (type === "o") {
            if (!isObject(jsonArray[index])) {
              insertProperty(object, key, JSON.stringify(value));
              return;
            }
          }
        }
        if (type === "o") {
          if (depth - 1 <= 0) {
            // Convert all objects to string
            var array = [];
            for (var _index = 0; _index < length; _index++) {
              array.push(JSON.stringify(jsonArray[_index]));
            }
            insertProperty(object, key, array);
          } else {
            for (var _index2 = 0; _index2 < length; _index2++) {
              handleJSONObject(object, key, jsonArray[_index2], depth - 1);
            }
          }
        } else if (type === "a") {
          // Convert all values to string
          for (var _index3 = 0; _index3 < length; _index3++) {
            insertProperty(object, key, JSON.stringify(jsonArray[_index3]));
          }
        } else {
          for (var _index4 = 0; _index4 < length; _index4++) {
            insertProperty(object, key, jsonArray[_index4]);
          }
        }
      } else {
        insertProperty(object, key, []);
      }
    }
  };
  var handleJSONObject = function handleJSONObject(object, key, jsonObject) {
    var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 1;
    if (depth <= 0) {
      insertProperty(object, key, JSON.stringify(jsonObject));
      return;
    }
    Object.keys(_objectSpread2({}, jsonObject)).forEach(function (objectKey) {
      var updatedKey = key + "_" + objectKey;
      var value = jsonObject[objectKey];
      if (!isDefined(value)) {
        return;
      }
      if (Array.isArray(value)) {
        handleJSONArray(object, updatedKey, value, depth - 1);
      } else if (isObject(value)) {
        handleJSONObject(object, updatedKey, value, depth - 1);
      } else {
        insertProperty(object, updatedKey, value);
      }
    });
  };
  var insertProperty = function insertProperty(object, key, value) {
    if (!isDefined(key) || !isDefined(value)) {
      return;
    }
    if (object[key]) {
      var values = object[key];
      var array = values;
      if (!Array.isArray(values)) {
        if (isNumber(values) && !isNumber(value) || isBoolean(values) && !isBoolean(value) || isString(values) && !isString(value) || isObject(values) && !isObject(value)) {
          if (!isString(values)) {
            values = JSON.stringify(values);
          }
          if (!isString(value)) {
            value = JSON.stringify(value);
          }
        }
        array = [];
        array.push(values);
      }
      array.push(value);
      object[key] = array;
    } else {
      object[key] = value;
    }
  };

  /**
   *
   * @param text
   * @param limit
   * @returns {*}
   */
  var trimText = function trimText(text) {
    var limit = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 120;
    if (isString(text)) {
      return text.length > limit ? text.slice(0, limit) + "..." : text;
    } else {
      return undefined;
    }
  };
  var getJSONOrNull = function getJSONOrNull(text) {
    if (!isDefined(text) && !isString(text)) {
      return null;
    }
    if (_typeof(text) === "object" || isObject(text)) {
      return text;
    }
    var newText = text.replace(/(?:\r\n|\r|\n)/g, "").trim();
    try {
      return JSON.parse(newText);
    } catch (e) {}
    return null;
  };
  var encode = function encode(key, data) {
    if (!isDefined(data)) {
      return null;
    }
    data = xor_encrypt(key, data);
    return b64_encode(data);
  };
  var decode = function decode(key, data) {
    data = b64_decode(data);
    return xor_decrypt(key, data);
  };
  var b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
  function b64_encode(data) {
    var o1,
      o2,
      o3,
      h1,
      h2,
      h3,
      h4,
      bits,
      r,
      i = 0,
      enc = "";
    if (!data) {
      return data;
    }
    do {
      o1 = data[i++];
      o2 = data[i++];
      o3 = data[i++];
      bits = o1 << 16 | o2 << 8 | o3;
      h1 = bits >> 18 & 0x3f;
      h2 = bits >> 12 & 0x3f;
      h3 = bits >> 6 & 0x3f;
      h4 = bits & 0x3f;
      enc += b64_table.charAt(h1) + b64_table.charAt(h2) + b64_table.charAt(h3) + b64_table.charAt(h4);
    } while (i < data.length);
    r = data.length % 3;
    return (r ? enc.slice(0, r - 3) : enc) + "===".slice(r || 3);
  }
  function b64_decode(data) {
    var o1,
      o2,
      o3,
      h1,
      h2,
      h3,
      h4,
      bits,
      i = 0,
      result = [];
    if (!data) {
      return data;
    }
    data += "";
    do {
      h1 = b64_table.indexOf(data.charAt(i++));
      h2 = b64_table.indexOf(data.charAt(i++));
      h3 = b64_table.indexOf(data.charAt(i++));
      h4 = b64_table.indexOf(data.charAt(i++));
      bits = h1 << 18 | h2 << 12 | h3 << 6 | h4;
      o1 = bits >> 16 & 0xff;
      o2 = bits >> 8 & 0xff;
      o3 = bits & 0xff;
      result.push(o1);
      if (h3 !== 64) {
        result.push(o2);
        if (h4 !== 64) {
          result.push(o3);
        }
      }
    } while (i < data.length);
    return result;
  }
  function keyCharAt(key, i) {
    return key.charCodeAt(Math.floor(i % key.length));
  }
  function xor_encrypt(key, data) {
    return Array.from(data).map(function (c, i) {
      return c.charCodeAt(0) ^ keyCharAt(key, i);
    });
  }
  function xor_decrypt(key, data) {
    return Array.from(data).map(function (c, i) {
      return String.fromCharCode(c ^ keyCharAt(key, i));
    }).join("");
  }
  function stringToArrayBuffer(str) {
    var buffer = new ArrayBuffer(str.length);
    var view = new Uint8Array(buffer);
    for (var i = 0; i < str.length; i++) {
      view[i] = str.charCodeAt(i);
    }
    return buffer;
  }
  function arrayBufferToString(buffer) {
    var str = "";
    var array = new Uint8Array(buffer);
    for (var i = 0; i < array.length; i++) {
      str += String.fromCharCode(array[i]);
    }
    return str;
  }

  // ===================== Polyfills ====================

  if (!String.prototype.includes) {
    String.prototype.includes = function () {

      return String.prototype.indexOf.apply(this, arguments) !== -1;
    };
  }
  if (!Array.from) {
    Array.from = function () {
      var toStr = Object.prototype.toString;
      var isCallable = function isCallable(fn) {
        return typeof fn === "function" || toStr.call(fn) === "[object Function]";
      };
      var toInteger = function toInteger(value) {
        var number = Number(value);
        if (isNaN(number)) {
          return 0;
        }
        if (number === 0 || !isFinite(number)) {
          return number;
        }
        return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
      };
      var maxSafeInteger = Math.pow(2, 53) - 1;
      var toLength = function toLength(value) {
        var len = toInteger(value);
        return Math.min(Math.max(len, 0), maxSafeInteger);
      };

      // The length property of the from method is 1.
      return function from(arrayLike /*, mapFn, thisArg */) {
        // 1. Let C be the this value.
        var C = this;

        // 2. Let items be ToObject(arrayLike).
        var items = Object(arrayLike);

        // 3. ReturnIfAbrupt(items).
        if (arrayLike == null) {
          throw new TypeError("Array.from requires an array-like object - not null or undefined");
        }

        // 4. If mapfn is undefined, then let mapping be false.
        var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
        var T;
        if (typeof mapFn !== "undefined") {
          // 5. else
          // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
          if (!isCallable(mapFn)) {
            throw new TypeError("Array.from: when provided, the second argument must be a function");
          }

          // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.
          if (arguments.length > 2) {
            T = arguments[2];
          }
        }

        // 10. Let lenValue be Get(items, "length").
        // 11. Let len be ToLength(lenValue).
        var len = toLength(items.length);

        // 13. If IsConstructor(C) is true, then
        // 13. a. Let A be the result of calling the [[Construct]] internal method of C with an argument list containing the single item len.
        // 14. a. Else, Let A be ArrayCreate(len).
        var A = isCallable(C) ? Object(new C(len)) : new Array(len);

        // 16. Let k be 0.
        var k = 0;
        // 17. Repeat, while k < lenâ€¦ (also steps a - h)
        var kValue;
        while (k < len) {
          kValue = items[k];
          if (mapFn) {
            A[k] = typeof T === "undefined" ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
          } else {
            A[k] = kValue;
          }
          k += 1;
        }
        // 18. Let putStatus be Put(A, "length", len, true).
        A.length = len;
        // 20. Return A.
        return A;
      };
    }();
  }
  if (!Array.prototype.includes) {
    Object.defineProperty(Array.prototype, "includes", {
      value: function value(searchElement, fromIndex) {
        // 1. Let O be ? ToObject(this value).
        if (this == null) {
          throw new TypeError('"this" is null or not defined');
        }
        var o = Object(this);

        // 2. Let len be ? ToLength(? Get(O, "length")).
        var len = o.length >>> 0;

        // 3. If len is 0, return false.
        if (len === 0) {
          return false;
        }

        // 4. Let n be ? ToInteger(fromIndex).
        //    (If fromIndex is undefined, this step produces the value 0.)
        var n = fromIndex | 0;

        // 5. If n ≥ 0, then
        //  a. Let k be n.
        // 6. Else n < 0,
        //  a. Let k be len + n.
        //  b. If k < 0, let k be 0.
        var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
        function sameValueZero(x, y) {
          return x === y || typeof x === "number" && typeof y === "number" && isNaN(x) && isNaN(y);
        }

        // 7. Repeat, while k < len
        while (k < len) {
          // a. Let elementK be the result of ? Get(O, ! ToString(k)).
          // b. If SameValueZero(searchElement, elementK) is true, return true.
          // c. Increase k by 1.
          if (sameValueZero(o[k], searchElement)) {
            return true;
          }
          k++;
        }

        // 8. Return false
        return false;
      }
    });
  }

  /**
   * @function                getFlatMapDiff
   * @description             Resturns the properties that got changed when a updatedMap and a originalMap are given
   * @param       {object}    updatedProps
   * @param       {object}    originalProps
   * @returns     {object}
   */
  var getFlatMapDiff = function getFlatMapDiff(updatedProps, originalProps) {
    var keys = Object.keys(updatedProps);
    var result = {};
    keys.forEach(function (key) {
      if (updatedProps[key] !== originalProps[key]) {
        result[key] = updatedProps[key];
      }
    });
    return result;
  };

  /**
   * @function getDateInMMDDYYYY
   * @description Returns the current date in MM/DD/YYYY Format
   * @returns {string}
   */
  var getDateInMMDDYYYY = function getDateInMMDDYYYY() {
    var currentDate = new Date();
    var dateDDMMYYYY = currentDate.getMonth() + "/" + currentDate.getDate() + "/" + currentDate.getFullYear();
    return dateDDMMYYYY;
  };
  var _getTime = function _getTime() {
    var currentTime = new Date();
    return {
      hours: currentTime.getHours(),
      mins: currentTime.getMinutes()
    };
  };

  /**
   *
   * @param {takes the chunk as param} chunk
   * @description fills the keys if any of the mandatory keys in session_info is missing
   */
  var ensureSessionInfoKeys = function ensureSessionInfoKeys(chunk) {
    var defaultSessionInfo = {
      id: "",
      launch_time: 0,
      launch_time_string: "",
      startup_time: 0,
      is_background: false,
      is_first_session: false,
      duration: 0,
      total_duration: 0,
      process_name: "",
      is_fatal: false,
      launch_type: "normal"
    };

    // Check if session_info exists in the chunk
    if (!chunk.session_info) {
      chunk.session_info = defaultSessionInfo;
    } else {
      // Check for missing keys and add them with default values
      // eslint-disable-next-line no-unused-vars
      for (var _i = 0, _Object$keys = Object.keys(defaultSessionInfo); _i < _Object$keys.length; _i++) {
        var key = _Object$keys[_i];
        if (!(key in chunk.session_info)) {
          chunk.session_info[key] = defaultSessionInfo[key];
        }
      }
    }
  };

  /**
   *
   * @param  {config id } id
   * @param {site id } siteid
   * @description resets the qe state on pull for given config id
   */
  var resetQEStateonPull = function resetQEStateonPull(id, siteid) {
    var controller = Controller.getInstance();
    var qe_state = controller.getFromStorage("qe_state");
    var last_shown_times = controller.getFromStorage("apx-last-shown-times");
    var last_shown_session = controller.getFromStorage("apx-last-shown-session");
    qe_state = JSON.parse(decode(siteid, qe_state));
    var abstracted_id;
    if (id.includes("-testing")) {
      abstracted_id = id.replace("-testing", "");
    } else {
      abstracted_id = id;
    }
    /* eslint-disable no-unused-vars */
    for (var key in qe_state) {
      if (key.includes(abstracted_id)) {
        qe_state[key] = {
          SESSION: 0,
          OVERALL: 0,
          DATES: {}
        };
      }
    }
    controller.persistToStorage("qe_state", qe_state, true);
    var updated_last_shown_times = JSON.parse(last_shown_times);
    if ((updated_last_shown_times === null || updated_last_shown_times === void 0 ? void 0 : updated_last_shown_times.length) > 0) {
      updated_last_shown_times.forEach(function (item, index) {
        if (Object.keys(item)[0].includes(abstracted_id)) {
          var _key = Object.keys(item)[0];
          updated_last_shown_times[index][_key] = 0;
        }
      });
    }
    controller.persistToStorage("apx-last-shown-times", JSON.stringify(updated_last_shown_times));
    var updated_last_shown_session = JSON.parse(last_shown_session);
    if ((updated_last_shown_session === null || updated_last_shown_session === void 0 ? void 0 : updated_last_shown_session.length) > 0) {
      updated_last_shown_session.forEach(function (item, index) {
        if (Object.keys(item)[0].includes(abstracted_id)) {
          var _key2 = Object.keys(item)[0];
          updated_last_shown_session[index][_key2] = 0;
        }
      });
    }
    controller.persistToStorage("apx-last-shown-session", JSON.stringify(updated_last_shown_session));
  };

  var _class;
  var LEVELS = ["log", "debug", "info", "warn", "error"];
  var LEVELS_ENUM = LEVELS.reduce(function (a, b) {
    a[b] = b;
    return a;
  }, {});
  var getConsole = function getConsole(console) {
    if (isUndefined(console)) {
      var f = function f() {
        return null;
      };
      console = LEVELS.reduce(function (a, b) {
        a[b] = f;
        return a;
      }, {});
    }
    return console;
  };

  /**
   * Custom Logger with Polyfill
   */
  var Logger = /*#__PURE__*/function () {
    function Logger() {
      _classCallCheck(this, Logger);
    }
    _createClass(Logger, null, [{
      key: "enabled",
      set: function set(value) {
        Logger._enabled = value;
      }
    }, {
      key: "level",
      set: function set(value) {
        Logger._level = value;
      }
    }, {
      key: "console",
      set: function set(console) {
        Logger._console = getConsole(console);
      }
    }]);
    return Logger;
  }();
  _class = Logger;
  _defineProperty(Logger, "_console", getConsole());
  _defineProperty(Logger, "_enabled", false);
  _defineProperty(Logger, "_level", "error");
  _defineProperty(Logger, "_render", function (currentLogType) {
    return function () {
      var canLog = LEVELS.indexOf(currentLogType) >= LEVELS.indexOf(_class._level);
      if (_class._enabled && canLog) {
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        _class._console[currentLogType].apply(_class._console, args);
      }
    };
  });
  _defineProperty(Logger, "log", _class._render(LEVELS_ENUM.log));
  _defineProperty(Logger, "info", _class._render(LEVELS_ENUM.info));
  _defineProperty(Logger, "debug", _class._render(LEVELS_ENUM.debug));
  _defineProperty(Logger, "warn", _class._render(LEVELS_ENUM.warn));
  _defineProperty(Logger, "error", _class._render(LEVELS_ENUM.error));

  /**
   * @class ApxorCallbackEventListener
   * @description Class provided to client to register his callback
   */
  var ApxorCallbackEventListener = /*#__PURE__*/_createClass(function ApxorCallbackEventListener() {
    _classCallCheck(this, ApxorCallbackEventListener);
    /**
     *  @function onEvent
     * @description method to overrride, for calling callback which takes two params type which can be
     * apx_campaign_show
     * apx_campaign_action
     * apx_campaign_dismiss
     * apx_survey_show
     * apx_survey_action
     * apx_survey_dismiss
     * Properties is an object where  properties:{campaign_type,campaign_id,timestamp,device_id,custom_user_id,event_attributes}
     *
     * @param type
     * @param callback
     */
    _defineProperty(this, "onEvent", function (type, properties) {
      Logger.debug("\"onEvent Callback called with type ".concat(type, " and properties ").concat(properties, "\""));
    });
  });

  var EventLogger = /*#__PURE__*/function () {
    function EventLogger() {
      _classCallCheck(this, EventLogger);
      _defineProperty(this, "hoverTextInput", this.debounce(function (event) {
        var target = event.target;
        var elementType = "";
        var elementInfo = "";

        // Determine the event name based on the element hovered over
        if (target.tagName === "INPUT" && target.type.toLowerCase() === "text") {
          elementType = "text_input";
          elementInfo = this.truncateText(target.value.trim(), 50); // Limit to 50 characters

          // Log the event name and element information if they are not empty
          if (elementType && elementInfo) {
            var result = {
              apx_value: elementInfo,
              apx_view_type: elementType
            };
            window.Apxor.logEvent("apx_hover", result);
          } else if (elementType) {
            window.Apxor.logEvent("apx_hover");
          }
        } else if (target.tagName === "BUTTON") {
          elementType = "button";
          elementInfo = this.truncateText(target.innerText.trim(), 50);
          if (elementType && elementInfo) {
            var _result = {
              apx_value: elementInfo,
              apx_view_type: elementType
            };
            window.Apxor.logEvent("apx_hover", _result);
          } else if (elementType) {
            window.Apxor.logEvent("apx_hover");
          }
        }
      }, 1000));
      this.setupEventListeners();
    }
    _createClass(EventLogger, [{
      key: "truncateText",
      value: function truncateText(text, maxLength) {
        if (text.length > maxLength) {
          return text.substring(0, maxLength) + "...";
        }
        return text;
      }
    }, {
      key: "debounce",
      value: function debounce(func, delay) {
        var timer;
        return function () {
          var context = this;
          var args = arguments;
          clearTimeout(timer);
          timer = setTimeout(function () {
            func.apply(context, args);
          }, delay);
        };
      }
    }, {
      key: "setupEventListeners",
      value: function setupEventListeners() {
        document.addEventListener("contextmenu", this.handleContextMenu.bind(this));
        document.addEventListener("dblclick", this.handleDoubleClick.bind(this));
        document.addEventListener("click", this.handleClick.bind(this));
        document.addEventListener("mouseover", this.handleMouseOver.bind(this));
        //document.addEventListener("mouseout", this.handleMouseOut.bind(this));
      }
    }, {
      key: "handleContextMenu",
      value: function handleContextMenu(event) {
        var _target$innerText, _target$innerText2;
        var target = event.target;
        var elementType = "";
        var elementInfo = "";
        var result = {};

        // Determine the event name based on the element right-clicked
        if (target.tagName === "BUTTON") {
          elementType = "button";
          elementInfo = this.truncateText(target.innerText.trim(), 50); // Limit to 50 characters
        } else if (target.tagName === "INPUT") {
          var inputType = target.type.toLowerCase();
          switch (inputType) {
            case "checkbox":
              elementType = "checkbox";
              elementInfo = this.truncateText(target.parentElement.innerText.trim(), 50); // Include label text
              result["apx_selected"] = target.checked ? "Selected" : "Not Selected"; // Selection state;
              result["apx_description"] = target === null || target === void 0 ? void 0 : target.value;
              break;
            case "radio":
              elementType = "radio";
              elementInfo = this.truncateText(target.parentElement.innerText.trim(), 50); // Include label text
              result["apx_description"] = target.value; // Selected value
              break;
            case "text":
              elementType = "text_input";
              elementInfo = this.truncateText((_target$innerText = target.innerText) === null || _target$innerText === void 0 ? void 0 : _target$innerText.trim(), 50); // Limit to 50 characters
              break;
            case "button":
              elementType = "button";
              elementInfo = this.truncateText((_target$innerText2 = target.innerText) === null || _target$innerText2 === void 0 ? void 0 : _target$innerText2.trim(), 50); // Limit to 50 characters
              break;
          }
        } else {
          var _target$innerText3, _target$innerText4;
          elementType = "other";
          elementInfo = this.truncateText((_target$innerText3 = target.innerText) === null || _target$innerText3 === void 0 ? void 0 : _target$innerText3.trim(), 50) ? this.truncateText((_target$innerText4 = target.innerText) === null || _target$innerText4 === void 0 ? void 0 : _target$innerText4.trim(), 50) : ""; // Limit to 50 characters
        }

        result["apx_trigger"] = "right_click";
        result["apx_value"] = elementInfo;
        result["apx_view_type"] = elementType;
        window.Apxor.logEvent("apx_clicked", result);
      }
    }, {
      key: "handleDoubleClick",
      value: function handleDoubleClick(event) {
        var _target$innerText6, _target$innerText7;
        var target = event.target;
        var elementType = "";
        var elementInfo = "";
        var result = {};

        // Determine the event name based on the element double-clicked
        if (target.tagName === "BUTTON") {
          var _target$innerText5;
          elementType = "button";
          elementInfo = this.truncateText((_target$innerText5 = target.innerText) === null || _target$innerText5 === void 0 ? void 0 : _target$innerText5.trim(), 50); // Limit to 50 characters
        } else if (target.tagName === "INPUT") {
          var inputType = target.type.toLowerCase();
          switch (inputType) {
            case "text":
              elementType = "text_input";
              elementInfo = this.truncateText((_target$innerText6 = target.innerText) === null || _target$innerText6 === void 0 ? void 0 : _target$innerText6.trim(), 50); // Limit to 50 characters
              break;
            case "button":
              elementType = "button";
              elementInfo = this.truncateText((_target$innerText7 = target.innerText) === null || _target$innerText7 === void 0 ? void 0 : _target$innerText7.trim(), 50); // Limit to 50 characters
              break;
          }
        } else {
          var _target$innerText8, _target$innerText9;
          elementType = "other";
          elementInfo = this.truncateText((_target$innerText8 = target.innerText) === null || _target$innerText8 === void 0 ? void 0 : _target$innerText8.trim(), 50) ? this.truncateText((_target$innerText9 = target.innerText) === null || _target$innerText9 === void 0 ? void 0 : _target$innerText9.trim(), 50) : ""; // Limit to 50 characters
        }

        result["apx_trigger"] = "double_click";
        result["apx_value"] = elementInfo;
        result["apx_view_type"] = elementType;
        window.Apxor.logEvent("apx_clicked", result);
      }
    }, {
      key: "handleClick",
      value: function handleClick(event) {
        var _target$parentElement, _target$parentElement2, _target$innerText10, _target$innerText11;
        var target = event.target;
        var elementType = "";
        var elementInfo = "";
        var result = {};

        // Determine the event name based on the element clicked
        if (target.tagName === "BUTTON") {
          elementType = "button";
          elementInfo = this.truncateText(target.innerText.trim(), 50); // Limit to 50 characters
        } else if (target.tagName === "INPUT") {
          var inputType = target.type.toLowerCase();
          switch (inputType) {
            case "checkbox":
              elementType = "checkbox";
              elementInfo = this.truncateText((_target$parentElement = target.parentElement.innerText) === null || _target$parentElement === void 0 ? void 0 : _target$parentElement.trim(), 50); // Include label text
              result["apx_selected"] = target.checked ? "Selected" : "Not Selected"; // Selection state;
              result["apx_description"] = target === null || target === void 0 ? void 0 : target.value;
              break;
            case "radio":
              elementType = "radio";
              elementInfo = this.truncateText((_target$parentElement2 = target.parentElement.innerText) === null || _target$parentElement2 === void 0 ? void 0 : _target$parentElement2.trim(), 50); // Include label text
              result["apx_description"] = target.value; // Selected value
              break;
            case "text":
              elementType = "text_input";
              elementInfo = this.truncateText((_target$innerText10 = target.innerText) === null || _target$innerText10 === void 0 ? void 0 : _target$innerText10.trim(), 50); // Limit to 50 characters
              break;
            case "button":
              elementType = "button";
              elementInfo = this.truncateText((_target$innerText11 = target.innerText) === null || _target$innerText11 === void 0 ? void 0 : _target$innerText11.trim(), 50); // Limit to 50 characters
              break;
          }
        } else if (target.tagName === "A") {
          elementType = "link";
          elementInfo = target.href; // Link source
          result["apx_url"] = target.target;
        } else {
          var _target$innerText12, _target$innerText13;
          elementType = "other";
          elementInfo = this.truncateText((_target$innerText12 = target.innerText) === null || _target$innerText12 === void 0 ? void 0 : _target$innerText12.trim(), 50) ? this.truncateText((_target$innerText13 = target.innerText) === null || _target$innerText13 === void 0 ? void 0 : _target$innerText13.trim(), 50) : "";
        }
        result["apx_trigger"] = "single_click";
        result["apx_value"] = elementInfo;
        result["apx_view_type"] = elementType;
        window.Apxor.logEvent("apx_clicked", result);
      }
    }, {
      key: "handleMouseOver",
      value: function handleMouseOver(event) {
        this.hoverTextInput(event);
      }
    }]);
    return EventLogger;
  }();

  /**
   * ApxorSDK interface
   */
  var ApxorSDK = /*#__PURE__*/function () {
    function ApxorSDK(window) {
      var _this = this;
      var startTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : getNow();
      _classCallCheck(this, ApxorSDK);
      _defineProperty(this, "_isInitialized", false);
      _defineProperty(this, "_queue", []);
      _defineProperty(this, "version", 301);
      _defineProperty(this, "_isFlutter", false);
      _defineProperty(this, "_flutterHelper", null);
      _defineProperty(this, "_init", function () {
        // helper for async loading
        if (Array.isArray(_this._q)) {
          _this._q.forEach(function (_ref) {
            var m = _ref.m,
              args = _ref.args;
            if (_this[m] && isFunction(_this[m])) {
              _this[m].apply(_this, Array.from(args));
            }
          });
        }
      });
      /**
       *
       * @param siteId
       * @param clientConfig
       * @param successCallback
       * @param errorCallback
       */
      _defineProperty(this, "init", function (siteId) {
        var clientConfig = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : DEFAULT_CLIENT_CONFIG;
        var successCallback = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
        var errorCallback = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
        try {
          Logger.debug("SDK : Apxor SDK initialization has started");
          if (!_this._isInitialized) {
            var _this$window, _this$window2;
            if (!isDefined(clientConfig) || isDefined(clientConfig) && !(clientConfig instanceof Object)) {
              clientConfig = DEFAULT_CLIENT_CONFIG;
            }
            var _clientConfig = clientConfig,
              _clientConfig$honorDN = _clientConfig.honorDNT,
              honorDNT = _clientConfig$honorDN === void 0 ? false : _clientConfig$honorDN,
              _clientConfig$debug = _clientConfig.debug,
              debug = _clientConfig$debug === void 0 ? false : _clientConfig$debug,
              _clientConfig$events_ = _clientConfig.events_upload_time,
              events_upload_time = _clientConfig$events_ === void 0 ? -1 : _clientConfig$events_,
              _clientConfig$retry_t = _clientConfig.retry_time,
              retry_time = _clientConfig$retry_t === void 0 ? -1 : _clientConfig$retry_t,
              _clientConfig$level = _clientConfig.level,
              level = _clientConfig$level === void 0 ? "error" : _clientConfig$level,
              _clientConfig$auto_ev = _clientConfig.auto_event_logging,
              auto_event_logging = _clientConfig$auto_ev === void 0 ? false : _clientConfig$auto_ev;
            if ((_this$window = _this.window) !== null && _this$window !== void 0 && (_this$window = _this$window.localStorage) !== null && _this$window !== void 0 && _this$window.getItem("apx_debug_enable")) {
              debug = _this.window.localStorage.getItem("apx_debug_enable") === "true" ? true : false;
            }
            if ((_this$window2 = _this.window) !== null && _this$window2 !== void 0 && (_this$window2 = _this$window2.localStorage) !== null && _this$window2 !== void 0 && _this$window2.getItem("apx_log_level")) {
              level = _this.window.localStorage.getItem("apx_log_level");
            }
            _this._configureLogger(debug, level);
            if (!isDefined(siteId) || !isDefined(siteId.trim) || siteId.trim() === "") {
              Logger.error("SDK : ApxorSDK couldn't be initialized: Invalid Site Id:".concat(siteId));
              _this._controller = DefaultController;
              if (errorCallback != null && isFunction(errorCallback)) {
                errorCallback();
              }
              return;
            }
            if (honorDNT && !isTrackingEnabled(_this.window)) {
              _this._controller = DefaultController;
              if (errorCallback != null && isFunction(errorCallback)) {
                errorCallback();
              }
              Logger.error("SDK : Tracking is disabled, ApxorSDK couldn't be initialized");
              return;
            }
            _this._controller = Controller.getInstance();
            if (isDefined(events_upload_time) && events_upload_time > 0) {
              clientConfig.events_upload_time *= 1000;
            }
            if (isDefined(retry_time) && retry_time > 0) {
              clientConfig.retry_time *= 1000;
            }
            _this._controller.initialize(siteId, _this._startTime, clientConfig, _this.window, function () {
              // Success callback

              _this._isInitialized = true;

              // Call all the methods in queue, if there are any
              _this._queue.forEach(function (methodCall) {
                var m = methodCall.m,
                  args = methodCall.args;
                _this._controller[m].apply(_this._controller, Array.from(args));
              });
              if (successCallback != null && isFunction(successCallback)) {
                Logger.debug("SDK : Device id is " + _this.getClientId());
                successCallback({
                  client_id: _this.getClientId(),
                  session_id: _this.getSessionId()
                });
              }

              // This must be logged through window console
              _this.window.console.info("ApxorSDK initialized for site:" + siteId + " with SDK version: " + SDK_VERSION);
              if (auto_event_logging) {
                var auto_eventLogging = new EventLogger();
                Logger.debug("auto_event_logging", auto_eventLogging);
              }
            }, function () {
              _this._isInitialized = false;
              // Error callback
              Logger.error("SDK : Failed to initialize Apxor SDK");
              if (errorCallback && isFunction(errorCallback)) {
                errorCallback("");
              }
            });
          }
        } catch (e) {
          _this._controller._isInitialized = false;
          Logger.error("SDK : Exception while initializing Apxor SDK : ", e);
          if (errorCallback && isFunction(errorCallback)) {
            errorCallback(e);
          }
        }
      });
      _defineProperty(this, "_configureLogger", function () {
        var debug = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
        var level = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "error";
        Logger.enabled = debug;
        Logger.level = level;
        Logger.console = _this.window.console;
        Logger.debug("SDK : Logger configured with level ".concat(level));
      });
      /**
       * @function setIsFlutter
       * @description sets the isFlutter to true/false to differentiate a flutter project
       */
      _defineProperty(this, "setIsFlutter", function (isFlutter) {
        _this._isFlutter = isFlutter;
      });
      /**
       * @function isFlutter
       * @description returns the isFLutter value
       */
      _defineProperty(this, "isFlutter", function () {
        return _this._isFlutter;
      });
      /**
       * @function registerApxorFlutterHelper
       * @description gets the object from flutter plugin and registers it for flutter-web communication
       * @param {Object} dart object
       */
      _defineProperty(this, "registerApxorFlutterHelper", function (obj) {
        _this._flutterHelper = obj;
      });
      /**
       * To log App Event
       * @param name {String}
       * @param additionalInfo {Object}
       */
      _defineProperty(this, "logEvent", function (name, additionalInfo) {
        var forceReport = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
        var loggedBy = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "customer";
        var apx_nudge_type = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "campaign";
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "logAppEvent",
            args: [name, additionalInfo]
          });
          return;
        }
        _this._controller.logAppEvent(name, additionalInfo, undefined, forceReport, loggedBy, apx_nudge_type);
      });
      _defineProperty(this, "logClientEvent", function (name, additionalInfo) {
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "logClientEvent",
            args: [name, additionalInfo]
          });
          return;
        }
        _this._controller.logClientEvent(name, additionalInfo);
      });
      _defineProperty(this, "dispatchValidationEvent", function (name) {
        var additionalInfo = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "dispatchValidationEvent",
            args: [name, additionalInfo]
          });
          return;
        }
        _this._controller.dispatchValidationEvent(name, additionalInfo);
      });
      /**
       * To log page view, useful for SPAs
       * @param pathname {String}
       */
      _defineProperty(this, "logPageView", function (pathname) {
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "logPageView",
            args: [pathname]
          });
          return;
        }
        _this._controller.logPageView(pathname);
      });
      /**
       * To log custom user Id
       * @param userId {String}
       */
      _defineProperty(this, "setUserId", function (userId) {
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "setUserId",
            args: [userId]
          });
          return;
        }
        _this._controller.setUserId(userId);
      });
      /**
       *  To log bulk user properties
       * @param properties {Object}
       */
      _defineProperty(this, "setUserProperties", function (properties) {
        Logger.debug("SDK : User properties set");
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "setUserProperties",
            args: [properties]
          });
          return;
        }
        _this._controller.setUserProperties(properties);
      });
      /**
       *  To reset user properties
       * @param properties {Object}
       */
      _defineProperty(this, "resetUserProperties", function () {
        Logger.debug("SDK : User properties reset");
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "setUserProperties",
            args: []
          });
          return;
        }
        _this._controller.resetUserProperties();
      });
      /**
       *  To reset session properties
       * @param properties {Object}
       */
      _defineProperty(this, "resetSessionProperties", function () {
        Logger.debug("SDK : User properties reset");
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "setUserProperties",
            args: []
          });
          return;
        }
        _this._controller.resetSessionProperties();
      });
      /**
       *  To handle local storage ,This function only clears keys which are not related to apxor
       */
      _defineProperty(this, "clearLocalStorage", function () {
        Logger.debug("SDK:Clearing keys which are not related to apxor");
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "clearLocalStorage",
            args: []
          });
          return;
        }
        _this._controller.clearLocalStorage();
      });
      /**
       * To log bulk _session properties
       * @param properties {Object}
       */
      _defineProperty(this, "setSessionProperties", function (properties) {
        Logger.debug("SDK : Session properties set");
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "setSessionProperties",
            args: [properties]
          });
          return;
        }
        _this._controller.setSessionProperties(properties);
      });
      /**
       * To set App version
       * @param {string} version
       */
      _defineProperty(this, "setAppVersion", function (version) {
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "setAppVersion",
            args: [version]
          });
          return;
        }
        _this._controller.setAppVersion(version);
      });
      _defineProperty(this, "flattenJSON", function (properties) {
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "flattenJSON",
            args: [properties]
          });
          return;
        }
        _this._controller.flattenJSON(properties);
      });
      /**
       * To get current SessionInfo Id
       */
      _defineProperty(this, "getSessionId", function () {
        if (!_this._isInitialized) {
          return null;
        }
        return _this._controller.getSessionId();
      });
      /**
       * To get client id
       */
      _defineProperty(this, "getClientId", function () {
        // if (!this._isInitialized) {
        //   return null;
        // }
        return _this._controller.getDeviceId();
      });
      /**
       *
       */
      _defineProperty(this, "startNewSession", function () {
        Logger.debug("SDK : A new session started");
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "startNewSession",
            args: []
          });
          return;
        }
        _this._controller.startNewSession(Date.now());
      });
      /**
       *
       */
      _defineProperty(this, "endSession", function () {
        Logger.debug("SDK : Current session ended");
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "endSession",
            args: []
          });
          return;
        }
        _this._controller.endSession();
      });
      _defineProperty(this, "getController", function () {
        // if (!this._isInitialized) {
        //   return null;
        // }
        return _this._controller;
      });
      // ApxorEventListener = () => {
      //   this._callbackEventListener = ApxorEventListener;
      //   return this._callbackEventListener;
      // };
      _defineProperty(this, "getSiteId", function () {
        var _this$_controller;
        // if (!this._isInitialized) {
        //   return null;
        // }
        return (_this$_controller = _this._controller) === null || _this$_controller === void 0 ? void 0 : _this$_controller.getSiteId();
      });
      _defineProperty(this, "setRedirectionHandler", function (callback) {
        if (!isFunction(callback)) {
          Logger.error("Callback must be a function");
          return;
        }
        if (!_this._isInitialized) {
          _this._queue.push({
            m: "setRedirectionHandler",
            args: [callback]
          });
          return;
        }
        _this._controller.setRedirectionHandler(callback);
      });
      _defineProperty(this, "setInitFlag", function (initialized) {
        _this._isInitialized = initialized;
      });
      this.window = window;
      this._startTime = startTime;
      this._init();
    }
    _createClass(ApxorSDK, [{
      key: "getApxorFlutterHelper",
      value:
      /**
       * @function getApxorFlutterHelper
       * @description returns the object of the Apxor Web Helper by which flutter-web sdk communication is possible
       * @returns {object}
       */

      function getApxorFlutterHelper() {
        return this._flutterHelper;
      }
    }, {
      key: "setApxorEventListener",
      value: function setApxorEventListener(AEL) {
        this._controller.setApxorEventListener(AEL);
      }
    }]);
    return ApxorSDK;
  }();

  var _window$Apxor$_st;

  /* eslint-disable no-empty */

  window.Apxor = window.Apxor || {
    _q: [],
    _st: Date.now()
  };
  ApxorSDK.prototype._q = window.Apxor._q;
  var apxorSDK = new ApxorSDK(window, +((_window$Apxor$_st = window.Apxor._st) !== null && _window$Apxor$_st !== void 0 ? _window$Apxor$_st : Date.now()));
  window.Apxor = apxorSDK;
  window.ApxorEventListener = ApxorCallbackEventListener;
  window.ApxorLogger = Logger;
  try {
    if (exports !== undefined || exports !== null) {
      exports["default"] = apxorSDK;
      module.exports = exports["default"];
    }
  } catch (e) {}

  return apxorSDK;

})));
