(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('apxor')) :
  typeof define === 'function' && define.amd ? define(['apxor'], factory) :
  (global = global || self, global['apxor-qe'] = factory(global.Apxor));
}(this, (function (Apxor) { 'use strict';

  Apxor = Apxor && Object.prototype.hasOwnProperty.call(Apxor, 'default') ? Apxor['default'] : Apxor;

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
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
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
  var isFunction = function isFunction(fn) {
    return typeof fn === "function";
  };
  var b64_table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
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
  var decode = function decode(key, data) {
    data = b64_decode(data);
    return xor_decrypt(key, data);
  };
  var generateKey = function generateKey(key) {
    switch (key) {
      case "app_event":
        return "AE";
      case "client_event":
        return "CE";
      case "activity_time":
        return "AE";
      case "activity_event":
        return "AE";
    }
    return "Unknown";
  };
  var toUpperCase = function toUpperCase(key) {
    return key.toUpperCase();
  };
  var compare = function compare(actual, expected, operator) {
    switch (operator) {
      case "EQ":
        return actual === expected;
      case "GT":
        return actual > expected;
      case "GTE":
        return actual >= expected;
      case "LT":
        return actual < expected;
      case "LTE":
        return actual <= expected;
      case "NEQ":
        return actual !== expected;
      case "R":
        var regex = regExpFromString(expected);
        return regex.test(actual);
      default:
        return false;
    }
  };
  var regExpFromString = function regExpFromString(input) {
    var flags = input.replace(/.*\/([gimuy]*)$/, "$1");
    if (flags === input) flags = "";
    var pattern = flags ? input.replace(new RegExp("^/(.*?)/" + flags + "$"), "$1") : input;
    return new RegExp(pattern, flags);
  };

  /**
   * @function getDateInDDMMYYYY
   * @description Returns the current date in DD/MM/YYYY Format
   * @returns {string}
   */
  var getDateInDDMMYYYY = function getDateInDDMMYYYY() {
    var currentDate = new Date();
    var dateDDMMYYYY = currentDate.getDate() + "/" + currentDate.getMonth() + "/" + currentDate.getFullYear();
    return dateDDMMYYYY;
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
  var _doesUrlMatchSkeleton = function _doesUrlMatchSkeleton(url, skeleton, variable) {
    var variablePattern = "([^/]+)";
    var escapedVariable = variable ?
    // eslint-disable-next-line no-useless-escape
    variable.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") : "";
    var pattern = skeleton.replace(new RegExp(escapedVariable, "g"), variablePattern);
    var regex = new RegExp("^".concat(pattern, "$"));
    var match = url.match(regex);
    return match !== null;
  };

  var Logger = window.ApxorLogger;
  var Audience = /*#__PURE__*/_createClass(function Audience() {
    var _this = this;
    _classCallCheck(this, Audience);
    _defineProperty(this, "_type", "ALL");
    _defineProperty(this, "_userAttributes", []);
    _defineProperty(this, "_sessionAttributes", []);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._type = config.audience.audience_type;
        _this._userAttributes = config.audience.attributes.user;
        _this._sessionAttributes = config.audience.attributes.session;
        if (!Array.isArray(_this._userAttributes) || !Array.isArray(_this._sessionAttributes)) {
          Logger.error("No attributes");
          return false;
        }
      } catch (error) {
        Logger.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function (user, session) {
      var status = true;
      if (_this._type === "FTU") {
        status = Apxor.getController().getSessionInfo().is_first_session;
      }
      return status && _this._compareAttributes(user, _this._userAttributes) && _this._compareAttributes(session, _this._sessionAttributes);
    });
    _defineProperty(this, "_compareAttributes", function (attributes, expected) {
      var length = expected.length;
      var status = true;
      try {
        var _loop = function _loop() {
            var item = expected[index];
            if (!attributes[item.name] || status === false) {
              return {
                v: false
              };
            }
            var operator = item.operator;
            var type = item.type;
            var values = item.value.map(function (value) {
              if (type === "s") {
                return value;
              } else if (type === "l") {
                return parseInt(value);
              } else if (type === "f") {
                return parseFloat(value);
              }
            });
            var loggedValues = [];
            if (Array.isArray(attributes[item.name])) {
              loggedValues = attributes[item.name];
            } else {
              loggedValues = [attributes[item.name]];
            }
            var match = loggedValues.some(function (loggedValue) {
              return values.some(function (configValue) {
                return compare(loggedValue, configValue, operator);
              });
            });
            status = status && match;
          },
          _ret;
        for (var index = 0; index < length; index++) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
      } catch (error) {
        Logger.error(error);
        status = false;
      }
      return status;
    });
  });

  var Logger$1 = window.ApxorLogger;
  var Frequency = /*#__PURE__*/_createClass(function Frequency() {
    var _this = this;
    _classCallCheck(this, Frequency);
    _defineProperty(this, "_count", 0);
    _defineProperty(this, "_timeInterval", 0);
    _defineProperty(this, "_validity", "SESSION");
    _defineProperty(this, "_shownCount", 0);
    _defineProperty(this, "_sessionCount", 0);
    _defineProperty(this, "_originalCount", 0);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._count = config.frequency.count;
        if (_this._count === -1) {
          _this._count = 1000;
        }
        _this._originalCount = _this._count;
        _this._timeInterval = config.frequency.time_interval;
        _this._validity = config.frequency.validity;
        _this._sessionCount = config.frequency.ses_lmt;
        _this._dayCount = config.frequency.day_lmt;
        // let data = Apxor.getController().getFromStorage(QE_STATE);
        // let qe_state = JSON.parse(decode(Apxor.getSiteId(), data));
        var qe_state = CE.getInstance().getQeState();
        if (!isDefined(qe_state) || !isDefined(qe_state[config._id])) return true;
        if (_this._validity === "SESSION") {
          _this._count = parseInt(_this._count) - parseInt(qe_state[config._id]["SESSION"]);
          if (_this._count <= 0) {
            console.warn("Max count limit reached for session:" + config._id);
            return false;
          }
        } else if (_this._validity === "OVERALL") {
          _this._count = parseInt(_this._count) - parseInt(qe_state[config._id]["OVERALL"]);
          if (_this._count <= 0) {
            console.warn("Max count limit reached for overall:" + config._id);
            return false;
          }
        } else {
          Logger$1.info("Invalid config.");
          return false;
        }
      } catch (error) {
        Logger$1.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "decrementCampaignCount", function () {
      _this._count = _this._count - 1;
    });
    _defineProperty(this, "getFrequencyCount", function () {
      return _this._count;
    });
    _defineProperty(this, "resetCampaignCount", function () {
      if (_this._validity === "SESSION") {
        _this._count = _this._originalCount;
        Logger$1.info("Campaign Limit reset");
      }
    });
    /**
     * @function isFrequencyWithInLimits
     * @description Validates if the campaign count is with in the limits set in the config.
     * @param {string} Config id
     * @returns {boolean} true - If the Campaign limits are not reached
     *                    false - Otherwise
     */
    _defineProperty(this, "isFrequencyWithInLimits", function (id) {
      try {
        if (_this._count <= 0) {
          return false;
        }

        // let data = Apxor.getController().getFromStorage(QE_STATE);
        // let qe_state = JSON.parse(decode(Apxor.getSiteId(), data));
        var qe_state = CE.getInstance().getQeState();
        //If the frequency counts are not stored no validity checks are needed.
        if (!isDefined(qe_state) || !isDefined(qe_state[id])) return true;

        //If the config has a session count limit set
        if (_this._sessionCount !== 0) {
          var sessionCountInConfig = parseInt(_this._sessionCount);
          var thisSessionCount = parseInt(qe_state[id]["SESSION"]);
          if (sessionCountInConfig - thisSessionCount <= 0) {
            return false;
          }
        }

        //If the config has a day count limit set
        if (_this._dayCount !== 0) {
          var _qe_state$id;
          var date = getDateInDDMMYYYY();
          var dayCountInConfig = parseInt(_this._dayCount);
          var thisDayCount = parseInt(((_qe_state$id = qe_state[id]) === null || _qe_state$id === void 0 ? void 0 : _qe_state$id.DATES[date]) || 0);
          if (dayCountInConfig - thisDayCount <= 0) {
            return false;
          }
        }
      } catch (e) {
        Logger$1.error("Error validating the frequency:" + e);
      }
      return true;
    });
  });

  var Meta = /*#__PURE__*/_createClass(function Meta() {
    var _this = this;
    _classCallCheck(this, Meta);
    _defineProperty(this, "_name", "");
    _defineProperty(this, "_type", "");
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        var _config$meta;
        _this._name = config.meta.name;
        _this._type = config.meta.type;
        _this._only_context = config.meta.only_context;
        _this._attr = ((_config$meta = config.meta) === null || _config$meta === void 0 ? void 0 : _config$meta.attr) || {};
      } catch (error) {
        window.ApxorLogger.error(error);
        return false;
      }
      return true;
    });
  });

  var Logger$2 = window.ApxorLogger;
  var Validity = /*#__PURE__*/_createClass(function Validity() {
    var _this = this;
    _classCallCheck(this, Validity);
    _defineProperty(this, "_startDate", -1);
    _defineProperty(this, "_endDate", -1);
    _defineProperty(this, "_startTime", -1);
    _defineProperty(this, "_endTime", -1);
    _defineProperty(this, "_timeLimits", false);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        if (isNaN(Date.parse(config.validity.start_date)) || isNaN(Date.parse(config.validity.end_date))) {
          Logger$2.error("Not valid dates");
          return false;
        }
        _this._startDate = Date.parse(config.validity.start_date);
        _this._endDate = Date.parse(config.validity.end_date);
        if (isDefined(config.time_limits_in_day)) {
          _this._timeLimits = config.time_limits_in_day;
          if (_this._timeLimits && isDefined(config.time_limits)) {
            var currentDate = new Date().toISOString().split("T")[0];
            _this._startTime = Date.parse(currentDate + "T" + config.time_limits.start_time + ".000Z");
            _this._endTime = Date.parse(currentDate + "T" + config.time_limits.end_time + ".000Z");

            // If invalid format is passed, return false
            if (isNaN(_this._startTime) || isNaN(_this._endTime)) {
              Logger$2.error("Not valid times");
              return false;
            }
          }
        }
      } catch (error) {
        Logger$2.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function () {
      var currentTime = Date.now();
      if (currentTime > _this._startDate && currentTime < _this._endDate) {
        return !_this._timeLimits || currentTime >= _this._startTime && currentTime <= _this._endTime;
      }
      return false;
    });
  });

  var Details = /*#__PURE__*/_createClass(function Details() {
    var _this = this;
    _classCallCheck(this, Details);
    _defineProperty(this, "_name", "");
    _defineProperty(this, "_additionalInfo", {});
    _defineProperty(this, "parse", function () {
      var details = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._name = details.name;
        _this._additionalInfo = details.additional_info;
      } catch (error) {
        return false;
      }
      return true;
    });
  });

  var Timebounds = /*#__PURE__*/_createClass(function Timebounds() {
    var _this = this;
    _classCallCheck(this, Timebounds);
    _defineProperty(this, "_lower", 0);
    _defineProperty(this, "_upper", 0);
    _defineProperty(this, "parse", function () {
      var timeBounds = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._lower = Number(timeBounds.lower);
        _this._upper = Number(timeBounds.upper);
        if (isNaN(_this._lower) || isNaN(_this._upper)) {
          return false;
        }
      } catch (error) {
        return false;
      }
      return true;
    });
  });

  var PreCondition = /*#__PURE__*/_createClass(function PreCondition() {
    var _this = this;
    _classCallCheck(this, PreCondition);
    _defineProperty(this, "_occurredTime", 0);
    _defineProperty(this, "_eventType", "");
    _defineProperty(this, "_navigation", "");
    _defineProperty(this, "_details", new Details());
    _defineProperty(this, "_timeBounds", new Timebounds());
    _defineProperty(this, "parse", function () {
      var precondition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._eventType = precondition.event_type;
        _this._navigation = precondition.activity;
        return _this._details.parse(precondition.details) && _this._timeBounds.parse(precondition.time_bounds);
      } catch (error) {
        return false;
      }
    });
  });

  var Logger$3 = window.ApxorLogger;
  var Condition = /*#__PURE__*/_createClass(function Condition() {
    var _this = this;
    _classCallCheck(this, Condition);
    _defineProperty(this, "_occurredTime", 0);
    _defineProperty(this, "_sequence", -1);
    _defineProperty(this, "_count", 0);
    _defineProperty(this, "_countOperator", "");
    _defineProperty(this, "_navigation", "");
    _defineProperty(this, "_eventType", "");
    _defineProperty(this, "_timeBounds", new Timebounds());
    _defineProperty(this, "_details", new Details());
    _defineProperty(this, "_precondition", new PreCondition());
    _defineProperty(this, "_combineOperator", "AND");
    _defineProperty(this, "_canCheckOldData", false);
    _defineProperty(this, "_type", void 0);
    _defineProperty(this, "parse", function () {
      var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._sequence = condition.sequence;
        _this._count = condition.count_config.count;
        _this._countOperator = condition.count_config.operator;
        _this._navigation = condition.activity;
        _this._eventType = condition.event_type;
        _this._combineOperator = condition.combine_operator;
        _this._type = condition.type;
        return _this._details.parse(condition.details) && _this._precondition.parse(condition.trigger) && _this._timeBounds.parse(condition.time_bounds);
      } catch (error) {
        Logger$3.error(error);
        return false;
      }
    });
  });

  var Logger$4 = window.ApxorLogger;
  var GoalEvent = /*#__PURE__*/_createClass(function GoalEvent() {
    var _this = this;
    _classCallCheck(this, GoalEvent);
    _defineProperty(this, "_count", 0);
    _defineProperty(this, "_countOperator", "");
    _defineProperty(this, "_eventType", "");
    _defineProperty(this, "_timeBounds", new Timebounds());
    _defineProperty(this, "_details", new Details());
    _defineProperty(this, "_combineOperator", "AND");
    _defineProperty(this, "parse", function (data) {
      try {
        _this._count = data.count_config.count;
        _this._countOperator = data.count_config.operator;
        _this._eventType = data.event_type;
        _this._combineOperator = data.combine_operator;
        return _this._details.parse(data.details) && _this._timeBounds.parse(data.time_bounds);
      } catch (error) {
        Logger$4.error(error);
        return false;
      }
    });
  });

  /* eslint-disable no-unused-vars */
  var Logger$5 = window.ApxorLogger;
  var ConditionValidator = /*#__PURE__*/function () {
    function ConditionValidator() {
      var _this = this;
      _classCallCheck(this, ConditionValidator);
      _defineProperty(this, "_satisfiedCount", 0);
      _defineProperty(this, "_uuid", "");
      _defineProperty(this, "_condition", new Condition());
      _defineProperty(this, "_goalevent", new GoalEvent());
      _defineProperty(this, "_triggered", false);
      _defineProperty(this, "_isSatisfied", false);
      _defineProperty(this, "_index", 0);
      _defineProperty(this, "_combineOperator", "AND");
      _defineProperty(this, "_conbineOperatorForGoalEvent", "OR");
      _defineProperty(this, "_oldEventCount", -1);
      _defineProperty(this, "_kpi", []);
      _defineProperty(this, "_eventTimes", {});
      _defineProperty(this, "_receivedEventForKpi", false);
      /**
       * If respectSequence is true, don't auto-register to events except for the condition whose index is 0
       *
       * @param condition
       * @param type
       * @param id
       * @param index
       * @param respectSequence
       * @returns {boolean}
       */
      _defineProperty(this, "initialize", function () {
        var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var respectSequence = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        var noKpiArray = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
        var flag = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : "";
        _this._uuid = id;
        _this._index = index;
        _this._kpi = noKpiArray;
        if (flag !== "termination" || flag === "") {
          var result = _this._condition.parse(condition);
          if (result) {
            _this._combineOperator = _this._condition._combineOperator;

            // FIXME: Why this code is written? Don't see any usecase
            if (_this._condition._canCheckOldData) {
              var eventName = _this._condition._details._name;
              if (eventName === "APX_PAGE_OPENED") {
                eventName = _this._condition._details._additionalInfo["navigation_id"];
                eventName = isDefined(eventName) ? eventName : _this._condition._details._name;
              }
              _this._oldEventCount = Apxor.getController().getEventCount(eventName);
              var count = _this._condition._count;
              var operator = _this._condition._countOperator;
              _this._isSatisfied = _this._compare(_this._oldEventCount - 1, count, operator, false);
              _this._triggered = _this._isSatisfied;
              // If the condition is already satisfied and if it is page view, no need to register
              // This only applies for NAVIGATION_EVENTS
              if (_this._isSatisfied && _this._condition._details._name === "APX_PAGE_OPENED") {
                return true;
              }
            }
            if (!respectSequence || index === 0) {
              _this.register();
            }
            return true;
          }
        } else {
          var _result = _this._goalevent.parse(condition);
          _this._conbineOperatorForGoalEvent = _this._goalevent._combineOperator;
          _this.registerForTermination();
          return true;
        }
        return false;
      });
      _defineProperty(this, "register", function () {
        var _window$ApxorRTM;
        var condition = _this._condition;
        var precondition = condition._precondition;
        var ceInstance = CE.getInstance();
        if (precondition._eventType === "app_start") {
          _this._triggered = true;
          ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + condition._details._name, _this._onReceiveEvent);
        } else {
          ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + precondition._details._name, _this._onReceiveEvent);
        }
        if ((_window$ApxorRTM = window.ApxorRTM) !== null && _window$ApxorRTM !== void 0 && _window$ApxorRTM.badgesLists.includes(_this._uuid)) {
          ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + "apxor-badge-container-".concat("-".concat(_this._uuid).replaceAll(" ", "").replace(/[^\w\s]/gi, "")), _this._onReceiveEvent);
        }
      });
      _defineProperty(this, "registerForTermination", function () {
        var condition = _this._goalevent;
        var ceInstance = CE.getInstance();
        _this._triggered = true;
        ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + condition._details._name, _this._onReceiveEventForTermination);
      });
      _defineProperty(this, "_onReceiveEventForKpiForSameEvent", function (type, name, time, additionalInfo) {
        var _this$_condition;
        var eventTime = Date.now();
        var time_differnce = (eventTime - _this._eventTimes[name]) / 1000;
        var time_fromConfig = ((_this$_condition = _this._condition) === null || _this$_condition === void 0 || (_this$_condition = _this$_condition._details) === null || _this$_condition === void 0 || (_this$_condition = _this$_condition._additionalInfo) === null || _this$_condition === void 0 ? void 0 : _this$_condition.time) / 1000;
        if (time_fromConfig > time_differnce) {
          _this._displayCampaign(time);
        }
      });
      _defineProperty(this, "_onReceiveEventForKpi", function (type, name, time, additionalInfo) {
        var _this$_condition2, _this$_condition3;
        _this._receivedEventForKpi = true;
        var currentTime = Date.now();
        var eventName = (_this$_condition2 = _this._condition) === null || _this$_condition2 === void 0 || (_this$_condition2 = _this$_condition2._precondition) === null || _this$_condition2 === void 0 ? void 0 : _this$_condition2._details._name;
        var eventTime = _this._eventTimes[eventName];
        var time_differnce = (currentTime - eventTime) / 1000;
        var time_fromConfig = (_this$_condition3 = _this._condition) === null || _this$_condition3 === void 0 || (_this$_condition3 = _this$_condition3._details) === null || _this$_condition3 === void 0 || (_this$_condition3 = _this$_condition3._additionalInfo) === null || _this$_condition3 === void 0 ? void 0 : _this$_condition3.time;
        time_fromConfig = time_fromConfig / 1000;
        if (time_fromConfig > time_differnce) {
          _this._displayCampaign(time);
        }
        //unregister the event
      });
      _defineProperty(this, "_onReceiveEvent", function (type, name, time, additionalInfo) {
        var _window$ApxorRTM2, _window$ApxorRTM3;
        var ceInstance = CE.getInstance();
        if (!_this._triggered) {
          // Validate Precondition
          _this._triggered = _this._validatePrecondition(type, name, time, additionalInfo);
          if (_this._triggered) {
            var condition = _this._condition;
            var precondition = condition._precondition;
            precondition._occurredTime = time;
            //events will be registred by its type activity event_type: "activity_time"
            if ((condition === null || condition === void 0 ? void 0 : condition._eventType) === "activity_time") {
              var _condition$_details, _condition$_details2, _condition$_details3;
              var event_time = condition === null || condition === void 0 || (_condition$_details = condition._details) === null || _condition$_details === void 0 || (_condition$_details = _condition$_details._additionalInfo) === null || _condition$_details === void 0 ? void 0 : _condition$_details.time;
              if ((condition === null || condition === void 0 || (_condition$_details2 = condition._details) === null || _condition$_details2 === void 0 || (_condition$_details2 = _condition$_details2._additionalInfo) === null || _condition$_details2 === void 0 ? void 0 : _condition$_details2.nkpi.length) > 0) {
                setTimeout(function () {
                  if (!_this._receivedEventForKpi) {
                    _this._isSatisfied = true;
                    if (_this._isSatisfied) {
                      _this._satisfiedCount += 1;
                      _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._condition._count, _this._condition._countOperator);
                      if (_this._isSatisfied) {
                        _this._condition._occurredTime = time;
                        ceInstance.validate(_this._uuid, _this._index);
                      }
                    }
                  }
                  condition._details._additionalInfo.nkpi.map(function (nokpi) {
                    ceInstance.unregisterFromEvent(toUpperCase(condition._details._additionalInfo.et) + "___" + nokpi, _this);
                  });
                }, event_time);
                condition._details._additionalInfo.nkpi.map(function (nokpi) {
                  ceInstance.registerForEvent(toUpperCase(condition._details._additionalInfo.et) + "___" + nokpi, _this._onReceiveEventForKpi);
                });
              }
              //it is for unregistering the events did case after completing the time imit
              if ((condition === null || condition === void 0 || (_condition$_details3 = condition._details) === null || _condition$_details3 === void 0 || (_condition$_details3 = _condition$_details3._additionalInfo) === null || _condition$_details3 === void 0 ? void 0 : _condition$_details3.kpi.length) > 0) {
                setTimeout(function () {
                  condition._details._additionalInfo.kpi.map(function (kpi) {
                    ceInstance.unregisterFromEvent(toUpperCase(condition._details._additionalInfo.et) + "___" + kpi, _this);
                  });
                }, event_time);
                condition._details._additionalInfo.kpi.map(function (kpi) {
                  if (kpi === condition._precondition._details._name) {
                    //unregister the previous event
                    ceInstance.unregisterFromEvent(generateKey(precondition._eventType) + "___" + precondition._details._name, _this);
                    ceInstance.registerForEvent(toUpperCase(condition._details._additionalInfo.et) + "___" + kpi, _this._onReceiveEventForKpiForSameEvent);
                  } else {
                    ceInstance.registerForEvent(toUpperCase(condition._details._additionalInfo.et) + "___" + kpi, _this._onReceiveEventForKpi);
                  }
                });
              }
            } else {
              ceInstance.unregisterFromEvent(generateKey(precondition._eventType) + "___" + precondition._details._name, _this);
              ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + condition._details._name, _this);
            }
            _this._eventTimes[name] = Date.now();
          }
          return;
        }
        if ((_window$ApxorRTM2 = window.ApxorRTM) !== null && _window$ApxorRTM2 !== void 0 && _window$ApxorRTM2.isBadgePresent && (_window$ApxorRTM3 = window.ApxorRTM) !== null && _window$ApxorRTM3 !== void 0 && _window$ApxorRTM3.badgesLists.includes(_this._uuid) && Apxor.getController().isBadgeTriggerSatisfied(_this._uuid)) {
          _this._isSatisfied = true;
          _this._condition._occurredTime = time;
          ceInstance.validate(_this._uuid, _this._index);
          return;
        }

        // Validate Condition
        var validationStatus = generateKey(_this._condition._eventType) === type && _this._validateTimeBounds(time - _this._condition._precondition._occurredTime, _this._condition._timeBounds) && _this._condition._details._name === name && _this._compareAdditionalInfo(_this._condition._details._additionalInfo, additionalInfo);
        if (validationStatus) {
          _this._satisfiedCount += 1;
          _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._condition._count, _this._condition._countOperator);
          if (_this._isSatisfied) {
            _this._condition._occurredTime = time;
            ceInstance.validate(_this._uuid, _this._index);
          }
        }
      });
      _defineProperty(this, "_onReceiveEventForTermination", function (type, name, time, additionalInfo) {
        var ceInstance = CE.getInstance();
        var validationStatus = generateKey(_this._goalevent._eventType) === type && _this._validateTimeBounds(time, _this._goalevent._timeBounds) && _this._goalevent._details._name === name && _this._compareAdditionalInfo(_this._goalevent._details._additionalInfo, additionalInfo);
        if (validationStatus) {
          _this._satisfiedCount += 1;
          _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._goalevent._count, _this._goalevent._countOperator);
          if (_this._isSatisfied) {
            _this._goalevent._occurredTime = time;
            ceInstance.validateForTermination(_this._uuid, _this._index);
          }
        }
      });
      _defineProperty(this, "_validatePrecondition", function (type, name, time, additionalInfo) {
        var precondition = _this._condition._precondition;
        return generateKey(precondition._eventType) === type && precondition._details._name === name && _this._validateTimeBounds(time, precondition._timeBounds) && _this._compareAdditionalInfo(precondition._details._additionalInfo, additionalInfo);
      });
      _defineProperty(this, "_validateTimeBounds", function (time, timeBounds) {
        var currentTime = Math.ceil(time);
        return currentTime > timeBounds._lower && currentTime < timeBounds._upper;
      });
      _defineProperty(this, "_compare", function (current, required, operator) {
        var checkOld = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
        if (checkOld && _this._condition._canCheckOldData) {
          current = current + _this._oldEventCount;
        }
        switch (operator) {
          case "EQ":
            return current === required;
          case "GT":
            return current > required;
          case "GTE":
            return current >= required;
          case "LT":
            return current < required;
          case "LTE":
            return current <= required;
          default:
            return false;
        }
      });
      _defineProperty(this, "_compareAdditionalInfo", function (expected, received) {
        var status = true;
        try {
          var _loop = function _loop() {
              if (!received[item] || status === false) {
                return {
                  v: false
                };
              }
              if (_typeof(expected[item]) === "object") {
                var operator = expected[item].op;
                var type = expected[item].t;
                var expectedValue;
                if (type === "s") {
                  expectedValue = expected[item].val;
                } else if (type === "l" || type === "f") {
                  expectedValue = parseFloat(expected[item].val);
                }
                var loggedValues = [];
                if (Array.isArray(received[item])) {
                  loggedValues = received[item];
                } else {
                  loggedValues = [received[item]];
                }
                var match = loggedValues.some(function (loggedValue) {
                  return compare(loggedValue, expectedValue, operator);
                });
                status = status && match;
              } else {
                status = status && compare(received[item], expected[item], "EQ");
              }
            },
            _ret;
          for (var item in expected) {
            _ret = _loop();
            if (_ret) return _ret.v;
          }
        } catch (error) {
          Logger$5.error(error);
          status = false;
        }
        return status;
      });
    }
    _createClass(ConditionValidator, [{
      key: "_displayCampaign",
      value: function _displayCampaign(time) {
        var ceInstance = CE.getInstance();
        this._isSatisfied = true;
        if (this._isSatisfied) {
          this._satisfiedCount += 1;
          this._isSatisfied = this._compare(this._satisfiedCount, this._condition._count, this._condition._countOperator);
          if (this._isSatisfied) {
            this._condition._occurredTime = time;
            ceInstance.validate(this._uuid, this._index);
          }
        }
      }
    }]);
    return ConditionValidator;
  }();

  var QE_STATE = "qe_state";
  var APX_RETAINED_SESSIONS = "apx_retained_session";
  var APX_RETAINED_DAYS = "apx_retained_days";
  var APX_CONTEXT_EVALUATED = "apx_context_evaluated";

  var Logger$6 = window.ApxorLogger;
  var OverallConfig = /*#__PURE__*/_createClass(function OverallConfig() {
    var _this = this;
    _classCallCheck(this, OverallConfig);
    _defineProperty(this, "_events", []);
    _defineProperty(this, "_ret_day", {});
    _defineProperty(this, "_session", {});
    _defineProperty(this, "_toggleRetDay", false);
    _defineProperty(this, "_toggleSession", false);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._events = config.overall_cfg.events;
        _this._ret_day = config.overall_cfg.ret_day;
        _this._session = config.overall_cfg.session;
        _this._toggleRetDay = config.overall_cfg.toggleRetDay;
        _this._events = config.overall_cfg.events;
        _this._toggleSession = config.overall_cfg.toggleSession;
      } catch (error) {
        Logger$6.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function () {
      var retainedDays = parseInt(Apxor.getController().getFromStorage(APX_RETAINED_DAYS));
      var retainedSession = parseInt(Apxor.getController().getFromStorage(APX_RETAINED_SESSIONS));
      if (_this._toggleRetDay && !isNaN(retainedDays) && !(retainedDays >= _this._ret_day.from && retainedDays <= _this._ret_day.to)) {
        return false;
      }
      if (_this._toggleSession && !isNaN(retainedSession) && !(retainedSession >= _this._session.from && retainedSession <= _this._session.to)) {
        return false;
      }
      try {
        // particular event not happened in Life time
        var data = Apxor.getController().getFromStorage("_apx_lt_count");
        var siteid = Apxor.getSiteId();
        var LtCountObjDecoded = JSON.parse(new TextDecoder().decode(stringToArrayBuffer(decode(siteid, data))));
        for (var i = 0; i < _this._events.length; i++) {
          var evName = _this._events[i].name.replace("'", "").replace("’", "");
          if (LtCountObjDecoded[evName]) {
            return false;
          }
        }
      } catch (e) {
        Logger$6.error("Failed to validate the lt count:" + e);
      }
      return true;
    });
  });

  var Logger$7 = window.ApxorLogger;
  var Attributes = /*#__PURE__*/_createClass(function Attributes() {
    var _this = this;
    _classCallCheck(this, Attributes);
    _defineProperty(this, "_userAttributes", []);
    _defineProperty(this, "_sessionAttributes", []);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._userAttributes = config.attributes.user;
        _this._sessionAttributes = config.attributes.session;
        if (!Array.isArray(_this._userAttributes) || !Array.isArray(_this._sessionAttributes)) {
          Logger$7.error("No attributes");
          return false;
        }
      } catch (error) {
        Logger$7.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function (user, session) {
      return _this._compareAttributes(user, _this._userAttributes) && _this._compareAttributes(session, _this._sessionAttributes);
    });
    _defineProperty(this, "_compareAttributes", function (attributes, expected) {
      var length = expected.length;
      var status = true;
      try {
        var _loop = function _loop() {
            var item = expected[index];
            if (!attributes[item.name] || status === false) {
              return {
                v: false
              };
            }
            var operator = item.operator;
            var type = item.type;
            var values = item.value.map(function (value) {
              if (type === "s") {
                return value;
              } else if (type === "l") {
                return parseInt(value);
              } else if (type === "f") {
                return parseFloat(value);
              }
            });
            var loggedValues = [];
            if (Array.isArray(attributes[item.name])) {
              loggedValues = attributes[item.name];
            } else {
              loggedValues = [attributes[item.name]];
            }
            var match = loggedValues.some(function (loggedValue) {
              return values.some(function (configValue) {
                return compare(loggedValue, configValue, operator);
              });
            });
            status = status && match;
          },
          _ret;
        for (var index = 0; index < length; index++) {
          _ret = _loop();
          if (_ret) return _ret.v;
        }
      } catch (error) {
        Logger$7.error(error);
        status = false;
      }
      return status;
    });
  });

  //TERMINATION KEYS
  var APX_TERMINATION_ID = "apx_termination_ID";

  var TimeBasedTermination = /*#__PURE__*/_createClass(function TimeBasedTermination() {
    var _this = this;
    _classCallCheck(this, TimeBasedTermination);
    _defineProperty(this, "_controller", Apxor.getController());
    _defineProperty(this, "type", "");
    _defineProperty(this, "_duration_seconds", 0);
    _defineProperty(this, "_days", 1);
    _defineProperty(this, "parse", function (config) {
      try {
        var _config$terminate_inf, _config$terminate_inf2, _config$terminate_inf3;
        _this._type = (_config$terminate_inf = config.terminate_info.time_based) === null || _config$terminate_inf === void 0 ? void 0 : _config$terminate_inf.type;
        _this._duration_seconds = (_config$terminate_inf2 = config.terminate_info) === null || _config$terminate_inf2 === void 0 ? void 0 : _config$terminate_inf2.time_based.duration_seconds;
        _this._days = (_config$terminate_inf3 = config.terminate_info.time_based) === null || _config$terminate_inf3 === void 0 ? void 0 : _config$terminate_inf3.days;
        if (_this.compare(config._id)) {
          _this._controller.persistTerminationInfoLocally(config._id);
          return false;
        }
      } catch (_unused) {
        return false;
      }
      return true;
    });
    _defineProperty(this, "compare", function (id) {
      var _Data$id;
      var Data = JSON.parse(_this._controller.getFromStorage(APX_TERMINATION_ID));
      if (!Data[id] || !((_Data$id = Data[id]) !== null && _Data$id !== void 0 && _Data$id.startDate)) return false;
      var startDate = new Date(Data[id].startDate);
      var presentDate = new Date(getDateInMMDDYYYY());
      var diff = parseInt((presentDate - startDate) / (1000 * 60 * 60 * 24), 10);
      var currentTime = _getTime();
      var _startTime = Data[id]._startTime;
      return diff === _this._days && currentTime.hours >= _startTime.hours || diff > _this._days || Data[id].goalAcheived;
    });
  });

  var TerminationInfo = /*#__PURE__*/_createClass(function TerminationInfo() {
    var _this = this;
    _classCallCheck(this, TerminationInfo);
    _defineProperty(this, "enable_goal_events", false);
    _defineProperty(this, "attributes", {});
    _defineProperty(this, "_attributes", new Attributes());
    _defineProperty(this, "_timebasedtermination", new TimeBasedTermination());
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        var _config$terminate_inf, _config$terminate_inf2, _config$terminate_inf3;
        _this.enable_time_based = config === null || config === void 0 || (_config$terminate_inf = config.terminate_info) === null || _config$terminate_inf === void 0 ? void 0 : _config$terminate_inf.enable_time_based;
        if (_this.enable_time_based && !_this._timebasedtermination.parse(config)) {
          return false;
        }
        _this.enable_goal_events = config === null || config === void 0 || (_config$terminate_inf2 = config.terminate_info) === null || _config$terminate_inf2 === void 0 ? void 0 : _config$terminate_inf2.enable_goal_events;
        _this.enable_attributes = config === null || config === void 0 || (_config$terminate_inf3 = config.terminate_info) === null || _config$terminate_inf3 === void 0 ? void 0 : _config$terminate_inf3.enable_attributes;
        if (_this.enable_attributes && !_this._attributes.parse(config.terminate_info)) {
          return false;
        }
      } catch (error) {
        window.ApxorLogger.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function (user, session) {
      return _this._attributes.validate(user, session);
    });
  });

  var Logger$8 = window.ApxorLogger;
  var ConfigItem = /*#__PURE__*/_createClass(function ConfigItem() {
    var _this = this;
    _classCallCheck(this, ConfigItem);
    _defineProperty(this, "_conditionValidators", []);
    _defineProperty(this, "_terminationGoalEventValidators", []);
    _defineProperty(this, "_uuid", "");
    _defineProperty(this, "_meta", new Meta());
    _defineProperty(this, "_audience", new Audience());
    _defineProperty(this, "_validity", new Validity());
    _defineProperty(this, "_frequency", new Frequency());
    _defineProperty(this, "_overallconfig", new OverallConfig());
    _defineProperty(this, "_terminationconfig", new TerminationInfo());
    _defineProperty(this, "_respectSequence", false);
    _defineProperty(this, "_noKpiArray", []);
    _defineProperty(this, "_enableScreenBinding", false);
    _defineProperty(this, "_screenBindingUrl", "");
    _defineProperty(this, "_screenBindingVariable", "");
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        //get screen binding config
        _this._enableScreenBinding = config === null || config === void 0 ? void 0 : config.screen_binding;
        if (_this._enableScreenBinding) {
          _this._screenBindingUrl = config === null || config === void 0 ? void 0 : config.binding.url;
          _this._screenBindingVariable = config === null || config === void 0 ? void 0 : config.binding["var"];
        }
        // If ID is not present, throw it out
        if (!isDefined(config._id)) {
          Logger$8.error("No Id");
          return false;
        }

        // If config is disabled, throw it out
        if (!isDefined(config.enabled) || !config.enabled) {
          Logger$8.error("Not enabled");
          return false;
        }

        // If META, VALIDITY, FREQUENCY and AUDIENCE is not parsed properly, throw it out
        if (!(_this._meta.parse(config) && _this._validity.parse(config) && _this._frequency.parse(config) && _this._audience.parse(config) && _this._overallconfig.parse(config) && _this._terminationconfig.parse(config))) {
          return false;
        }

        // If there are no conditions, throw it out
        if (!isDefined(config.conditions) || !Array.isArray(config.conditions)) {
          Logger$8.error("No valid conditions", config.conditions);
          return false;
        }
        _this._uuid = config._id;
        _this._respectSequence = isDefined(config.sequence_enabled) ? config.sequence_enabled : false;
        if (_this._respectSequence) {
          // iff respectSequence is true, Sort the Conditions by their sequence order
          // We need to sort, if server sends them in orderless manner
          config.conditions.sort(function (prev, current) {
            return prev.sequence < current.sequence;
          });
        }

        // Parse all conditions now
        var conditions = config.conditions;
        var length = conditions.length;
        for (var index = 0; index < length; index++) {
          _this._noKpiArray = [];
          var condition = conditions[index];
          if (condition.type === "didn't") {
            var _condition$details;
            var obj = {
              trigger_key: condition.trigger.details.name,
              no_kpi_array: condition === null || condition === void 0 || (_condition$details = condition.details) === null || _condition$details === void 0 || (_condition$details = _condition$details.additional_info) === null || _condition$details === void 0 ? void 0 : _condition$details.nkpi,
              condition_id: condition === null || condition === void 0 ? void 0 : condition._id,
              time_bounds: condition.time_bounds.upper
            };
            _this._noKpiArray = [].concat(_toConsumableArray(_this._noKpiArray), [obj]);
            //this will be the key
            //when event occur check this array and then then check the time
            //check the time diffrence
            //to delete the condion from the nkpi array if the time limit exceeded
            //create an array of objects y=using all these;
          }

          var conditionValidator = new ConditionValidator();
          if (conditionValidator.initialize(condition, _this._uuid, index, _this._respectSequence, _this._noKpiArray)) {
            _this._conditionValidators.push(conditionValidator);
          }
        }
        if (_this._terminationconfig.enable_goal_events) {
          var goal_events = config.terminate_info.goal_events.events;
          var goaleventslength = goal_events.length;
          for (var i = 0; i < goaleventslength; i++) {
            var _conditionValidator = new ConditionValidator();
            if (_conditionValidator.initialize(goal_events[i], _this._uuid, i, true, [], "termination")) {
              _this._terminationGoalEventValidators.push(_conditionValidator);
            }
          }
        }
        return _this._conditionValidators.length > 0;
      } catch (error) {
        Logger$8.error(error);
        return false;
      }
    });
    _defineProperty(this, "evaluate", function (index) {
      if (index < 0) {
        return;
      }
      if (_this._respectSequence) {
        var conditionValidator = _this._conditionValidators[index];
        if (isDefined(conditionValidator) && conditionValidator._isSatisfied) {
          // Check if previous validator is satisfied
          var prevValidator = _this._conditionValidators[index - 1];
          if (isDefined(prevValidator) && !prevValidator._isSatisfied) {
            // TODO: If current index is satisfied before previous one, do something
            //  either unregister all conditions or remove this item from ConfigLookup
            return;
          }
          var nextValidator = _this._conditionValidators[index + 1];
          if (!isDefined(nextValidator)) {
            // It means this is the last condition
            // Validate all conditions
            _this._validateAllConditions();
          } else {
            nextValidator.register();
          }
        }
      } else {
        // Validate all conditions
        _this._validateAllConditions();
      }
    });
    _defineProperty(this, "terminationEvaluate", function (index) {
      if (index < 0) {
        return;
      }
      _this._validateAllGoalEvents();
    });
    _defineProperty(this, "_validateAllConditions", function () {
      // Check If Audience, Validity is satisfied or not
      var userAttributes = Apxor.getController().getUserAttributes();
      var sessionAttributes = Apxor.getController().getSessionAttributes();
      if (!_this._validity.validate() || !_this._audience.validate(userAttributes, sessionAttributes) || !_this._overallconfig.validate()) {
        return;
      }
      var length = _this._conditionValidators.length;
      var isSatisfied = length < 1;
      var combineOperator = "";
      for (var index = 0; index < length; index++) {
        var validator = _this._conditionValidators[index];
        var currentResult = validator._isSatisfied;
        if (combineOperator.trim() === "") {
          isSatisfied = currentResult;
        } else {
          switch (combineOperator) {
            case "AND":
              isSatisfied = isSatisfied && currentResult;
              break;
            case "OR":
              isSatisfied = isSatisfied || currentResult;
              break;
          }
        }
        combineOperator = validator._combineOperator;
      }
      if (_this._enableScreenBinding) {
        var _this$_mutationObserv;
        var screenBindingChecker = _this._performScreenBindingValidation(_this._screenBindingUrl, _this._screenBindingVariable);
        _this._mutationObserverForScreenBinding = new MutationObserver(function () {
          return _this._performScreenBindingValidation(_this._screenBindingUrl, _this._screenBindingVariable);
        });
        (_this$_mutationObserv = _this._mutationObserverForScreenBinding) === null || _this$_mutationObserv === void 0 || _this$_mutationObserv.observe(document.body, {
          childList: true,
          subtree: true,
          attributes: true
        });
        if (screenBindingChecker) {
          isSatisfied = true;
        } else {
          isSatisfied = false;
        }
      }
      if (isSatisfied) {
        console.debug("onCondition satisfied");
        // Check if count reached it's maximum
        if (!_this._frequency.isFrequencyWithInLimits(_this._uuid)) {
          console.warn("Maximum limit reached", _this._uuid);
          return;
        }
        console.log("Dispatching event", _this._meta._type);
        if (_this._meta._only_context === true) {
          Apxor.logEvent(APX_CONTEXT_EVALUATED, _objectSpread2(_objectSpread2({}, _this._meta._attr), {}, {
            message_name: _this._meta._name,
            id: _this._uuid
          }));
        }
        // Emit event
        Apxor.getController().dispatchEvent(_this._meta._type, {
          name: _this._meta._type,
          additional_info: {
            uuid: _this._uuid,
            name: _this._meta._name
          }
        });
      }
    });
    _defineProperty(this, "_validateAllGoalEvents", function () {
      var length = _this._terminationGoalEventValidators.length;
      var isSatisfied = length < 1;
      var combineOperator = "";
      for (var index = 0; index < length; index++) {
        var validator = _this._terminationGoalEventValidators[index];
        var currentResult = validator._isSatisfied;
        if (combineOperator.trim() === "") {
          isSatisfied = currentResult;
        } else {
          switch (combineOperator) {
            case "AND":
              isSatisfied = isSatisfied && currentResult;
              break;
            case "OR":
              isSatisfied = isSatisfied || currentResult;
              break;
          }
        }
        combineOperator = validator._conbineOperatorForGoalEvent;
      }
      if (isSatisfied) {
        console.log("Dispatching event", _this._meta._type);
        Apxor.getController().persistTerminationInfoLocally(_this._uuid);
        if (_this._meta._only_context === true) {
          Apxor.logEvent(APX_CONTEXT_EVALUATED, _objectSpread2(_objectSpread2({}, _this._meta._attr), {}, {
            message_name: _this._meta._name,
            id: _this._uuid
          }));
        }
        // Emit event
        Apxor.getController().dispatchEvent(_this._meta._type, {
          name: _this._meta._type,
          additional_info: {
            uuid: _this._uuid,
            name: _this._meta._name
          }
        });
      }
    });
    _defineProperty(this, "validateForTerminationAttributes", function () {
      var userAttributes = Apxor.getController().getUserAttributes();
      var sessionAttributes = Apxor.getController().getSessionAttributes();
      return _this._terminationconfig.validate(userAttributes, sessionAttributes);
    });
    _defineProperty(this, "decrementCampaignCount", function () {
      _this._frequency.decrementCampaignCount();
    });
    _defineProperty(this, "getFrequencyCount", function () {
      return _this._frequency.getFrequencyCount();
    });
    _defineProperty(this, "resetFrequencyCount", function () {
      return _this._frequency.resetCampaignCount();
    });
    _defineProperty(this, "_performScreenBindingValidation", function (url, variable) {
      console.log("doing check");
      var currentUrl = window.location.href;
      if (variable === "") {
        if (currentUrl === url) {
          return true;
        } else {
          return false;
        }
      } else {
        var matched = _doesUrlMatchSkeleton(currentUrl, url, variable);
        if (matched) {
          return true;
        } else {
          return false;
        }
      }
    });
  });

  var ConfigLookup = /*#__PURE__*/_createClass(function ConfigLookup() {
    var _this = this;
    _classCallCheck(this, ConfigLookup);
    _defineProperty(this, "_configs", {});
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
        configs: []
      };
      if (isDefined(config) && isDefined(config.configs)) {
        var configs = config.configs;
        if (!Array.isArray(configs)) {
          return;
        }

        // Sorts the configs by the priority number
        configs.sort(function (a, b) {
          var _a$prio, _b$prio;
          var priority1 = (_a$prio = a.prio) !== null && _a$prio !== void 0 ? _a$prio : -1;
          var priority2 = (_b$prio = b.prio) !== null && _b$prio !== void 0 ? _b$prio : -1;
          return priority1 - priority2;
        });
        for (var index = 0; index < configs.length; index++) {
          var _config = configs[index];
          var configId = _config._id;
          var configItem = new ConfigItem();
          if (configItem.parse(_config)) {
            _this._configs[configId] = configItem;
          } else {
            console.warn("Failed to parse cfg", configId);
          }
        }
      }
    });
    _defineProperty(this, "validate", function (id, index) {
      if (_this._configs[id]) {
        var configItem = _this._configs[id];
        configItem.evaluate(index);
      }
    });
    _defineProperty(this, "validateForTermination", function (id, index) {
      if (_this._configs[id]) {
        var configItem = _this._configs[id];
        configItem.terminationEvaluate(index);
      }
    });
    _defineProperty(this, "validateForTerminationAttributes", function (id) {
      if (_this._configs[id]) {
        var configItem = _this._configs[id];
        return configItem.validateForTerminationAttributes();
      }
      return false;
    });
    _defineProperty(this, "decrementCampaignCount", function (id) {
      var campiagnConfig = _this._configs[id];
      campiagnConfig.decrementCampaignCount();
    });
    _defineProperty(this, "getFrequencyCount", function (id) {
      var campiagnConfig = _this._configs[id];
      return campiagnConfig.getFrequencyCount();
    });
    _defineProperty(this, "resetFrequencyCounts", function () {
      var configs = _this._configs;
      for (var configId in configs) {
        configs[configId].resetFrequencyCount();
      }
    });
    _defineProperty(this, "getCampaignMeta", function (campaignId) {
      try {
        if (_this._configs) {
          var configItem = _this._configs[campaignId];
          if (configItem && configItem._meta) {
            return configItem._meta;
          }
        }
      } catch (e) {
        console.log("Error in getting the campaign meta ".concat(e));
      }
      return {};
    });
  });

  var APP_EVENT = "APP_EVENT";
  var CLIENT_EVENT = "CLIENT_EVENT";
  var Logger$9 = window.ApxorLogger;
  var EventsListener = /*#__PURE__*/_createClass(function EventsListener() {
    var _this = this;
    _classCallCheck(this, EventsListener);
    _defineProperty(this, "_listeners", {});
    _defineProperty(this, "_buffer", []);
    _defineProperty(this, "_isEnabled", false);
    _defineProperty(this, "initialize", function () {
      var controller = Apxor.getController();
      controller.registerForEvent(APP_EVENT, function (event) {
        return _this._onEvent(event, "AE");
      });
      controller.registerForEvent(CLIENT_EVENT, function (event) {
        return _this._onEvent(event, "CE");
      });
    });
    _defineProperty(this, "enable", function () {
      // Clear Buffer
      for (var item in _this._buffer) {
        _this._notifyListeners(item.event, item.key, item.type);
      }
      _this._isEnabled = true;
    });
    _defineProperty(this, "registerToEvent", function (event, callback) {
      if (!isFunction(callback)) {
        return;
      }
      var listeners;
      if (_this._listeners[event]) {
        listeners = _this._listeners[event];
      } else {
        listeners = [];
      }
      listeners.push(callback);
      _this._listeners[event] = listeners;
      Logger$9.debug("Listeners list: ", _this._listeners);
    });
    _defineProperty(this, "unregisterFromEvent", function (event, callback) {
      if (_this._listeners[event]) {
        var listeners = _this._listeners[event];
        var updatedListeners = [];
        for (var index = 0; index < listeners.length; index++) {
          var listener = listeners[index];
          if (listener !== callback) {
            updatedListeners.push(listener);
          }
        }
        _this._listeners[event] = updatedListeners;
      }
    });
    _defineProperty(this, "_onEvent", function (event) {
      var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "AE";
      var key = type + "___" + event.name;
      _this._notifyListeners(event, key, type);
    });
    _defineProperty(this, "_notifyListeners", function (event, key, type) {
      if (!_this._isEnabled) {
        _this._buffer.push({
          event: event,
          key: key,
          type: type
        });
      } else {
        Logger$9.debug("Notifying listeners for event: " + event + ", " + key, _this._listeners);
        if (_this._listeners[key]) {
          var listeners = _this._listeners[key];
          var time = Apxor.getController().getSDKRunningTimeInSec();
          for (var index = 0; index < listeners.length; index++) {
            var listener = listeners[index];
            listener(type, event.name, time, event.additional_info);
          }
        }
      }
    });
  });

  var Logger$a = window.ApxorLogger;
  var CE = /*#__PURE__*/function () {
    function CE() {
      var _this = this;
      _classCallCheck(this, CE);
      _defineProperty(this, "_isInitialized", false);
      _defineProperty(this, "_configLookup", null);
      _defineProperty(this, "_date", getDateInDDMMYYYY());
      _defineProperty(this, "_eventsListener", new EventsListener());
      _defineProperty(this, "_siteId", Apxor.getSiteId());
      _defineProperty(this, "_qeState", {});
      _defineProperty(this, "getQeState", function () {
        try {
          var data = Apxor.getController().getFromStorage(QE_STATE);
          if (data) {
            return JSON.parse(decode(_this._siteId, data));
          } else {
            _this._qeState = {};
            return _this.setQeState();
          }
        } catch (e) {
          _this._qeState = {};
          return _this.setQeState();
        }
      });
      _defineProperty(this, "setQeState", function () {
        var id = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        try {
          Apxor.getController().persistToStorage(QE_STATE, _this._qeState, true);
        } catch (e) {
          if (id === "") {
            _this._qeState = {};
          } else {
            _this._qeState[id] = {
              SESSION: 0,
              OVERALL: 0,
              DATES: {}
            };
          }
          Apxor.getController().persistToStorage(QE_STATE, _this._qeState, true);
        }
        return _this._qeState;
      });
      _defineProperty(this, "initialize", function () {
        if (!_this._isInitialized) {
          _this._isInitialized = true;
          _this._configLookup = new ConfigLookup();
          _this._eventsListener.initialize();
          _this._qeState = _this.getQeState();
          Logger$a.info("QE Initialized..");
        }
      });
      /**
       * Parses the given configuration
       *
       * @param config
       */
      _defineProperty(this, "parse", function (config) {
        if (!_this._check()) {
          Logger$a.warn("Must call init first. Unable to proceed");
          return;
        }
        _this._configLookup.parse(config);
        _this._eventsListener.enable();
      });
      /**
       * Validates all conditions for given config ID
       *
       * @param id
       * @param index
       */
      _defineProperty(this, "validate", function (id, index) {
        if (!_this._check()) {
          return;
        }
        _this._configLookup.validate(id, index);
      });
      _defineProperty(this, "validateForTermination", function (id, index) {
        if (!_this._check()) {
          return;
        }
        _this._configLookup.validateForTermination(id, index);
      });
      _defineProperty(this, "validateForTerminationAttributes", function (user, session) {
        return _this._configLookup.validateForTerminationAttributes(user, session);
      });
      _defineProperty(this, "updateCount", function (id) {
        try {
          if (!isDefined(_this._qeState[id])) {
            _this.createObjConfig(id);
          }
          _this.incrementFrequencies(id);
          _this.setQeState(id);
          _this._configLookup.decrementCampaignCount(id);
        } catch (e) {
          console.log("Could not update the count config:".concat(e));
        }
      });
      _defineProperty(this, "resetFrequencyCounts", function () {
        _this._configLookup.resetFrequencyCounts();
      });
      _defineProperty(this, "getFrequencyCount", function (id) {
        return _this._configLookup.getFrequencyCount(id);
      });
      _defineProperty(this, "registerForEvent", function (event, callback) {
        _this._eventsListener.registerToEvent(event, callback);
      });
      _defineProperty(this, "unregisterFromEvent", function (event, callback) {
        _this._eventsListener.unregisterFromEvent(event, callback);
      });
      _defineProperty(this, "notifyEventListener", function (event) {
        _this._eventsListener._onEvent(event);
      });
      /**
       * Fetches the config from Server
       *
       * @param type
       * @param validateUrl
       * @param apiUrl
       * @param callback
       */
      _defineProperty(this, "fetch", function (type, validateUrl, apiUrl, callback) {
        Apxor.getController().fetchConfiguration(type, validateUrl, apiUrl, callback);
      });
      _defineProperty(this, "_check", function () {
        return _this._isInitialized;
      });
      _defineProperty(this, "getCampaignMetaFromQueryEngine", function (campaignId) {
        return _this._configLookup.getCampaignMeta(campaignId);
      });
      _defineProperty(this, "getCEStartDate", function () {
        return _this._date;
      });
      if (!CE.instance) {
        CE.instance = this;
      }
      return CE.instance;
    }
    _createClass(CE, [{
      key: "createObjConfig",
      value:
      /**
       * Fetches the count from ConfigLookup and updates it in state for the given ID
       *
       * @param id
       */
      function createObjConfig(id) {
        try {
          this._qeState = this.getQeState();
          if (!isDefined(this._qeState[id])) {
            this._qeState[id] = {
              SESSION: 0,
              OVERALL: 0,
              DATES: {}
            };
            if (this._date) this._qeState[id].DATES[this._date] = 0;
            this.setQeState(id);
          }
        } catch (e) {
          Logger$a.error("Can not create the frequency count object:" + e);
        }
      }
    }, {
      key: "incrementFrequencies",
      value: function incrementFrequencies(id) {
        this._qeState = this.getQeState();
        var configFrequency = this._qeState[id];
        // Increment the SESSION count by 1
        configFrequency.SESSION = configFrequency.SESSION + 1;
        // Increment the OVERALL count by 1
        configFrequency.OVERALL = configFrequency.OVERALL + 1;

        // Increment the DATES count for this particular date by 1. If the date changes reset.
        var currentDate = getDateInDDMMYYYY();
        if (currentDate !== this._date || !(configFrequency.DATES && configFrequency.DATES[currentDate])) {
          this._date = currentDate;
          configFrequency.DATES = {};
          configFrequency.DATES[this._date] = 0;
        }
        configFrequency.DATES[this._date] = configFrequency.DATES[this._date] + 1;
      }
    }], [{
      key: "getInstance",
      value: function getInstance() {
        if (!CE.instance) {
          CE.instance = new CE();
        }
        return CE.instance;
      }
    }]);
    return CE;
  }();
  _defineProperty(CE, "instance", void 0);

  // const ce = new CE();

  /* eslint-disable no-empty */

  window.ceVersion = 142;
  try {
    if (exports !== undefined || exports !== null) {
      exports["default"] = CE;
      module.exports = exports["default"];
    }
  } catch (e) {}

  return CE;

})));
