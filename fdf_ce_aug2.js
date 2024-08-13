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
  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;
        var F = function () {};
        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }
      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true,
      didErr = false,
      err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
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

  var Logger = window.ApxorLogger;
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
      case "apxor_event":
        return "AEV";
      case "customer_event":
        return "CEV";
      case "any_event":
        return "ANV";
      case "campaign_event":
        return "CNV";
      case "survey_event":
        return "SVE";
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
  var calculateTime = function calculateTime(unit, value) {
    switch (unit) {
      case "second":
        return value * 1000;
      case "minute":
        return value * 60 * 1000;
      case "hour":
        return value * 60 * 60 * 1000;
      case "day":
        return value * 24 * 60 * 60 * 1000;
      default:
        return 1;
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
  var _doesUrlMatchSkeleton = function _doesUrlMatchSkeleton(currenturl, skeleton, variable) {
    var startsWith = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    if (!currenturl || !skeleton || !variable) {
      return false;
    }

    // Escape special characters in the variable
    // eslint-disable-next-line no-useless-escape
    var escapedVariable = variable.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&");

    // Replace custom wildcard in skeleton with regex pattern
    var pattern = skeleton.replace(new RegExp(escapedVariable, "g"), "(.+)");

    // Construct regex pattern with startsWith option
    var regexPattern = startsWith ? "^".concat(pattern) : "".concat(pattern, "$");

    // Create regex
    var regex = new RegExp(regexPattern);

    // Test if current URL matches regex pattern
    return regex.test(currenturl);
  };

  // Checks if the given element is in viewport or not.
  var isElementInViewport = function isElementInViewport(el) {
    var elementOffsetHight = el.offsetHeight;
    var elementOffsetWidth = el.offsetWidth;
    var boundingRect = el.getBoundingClientRect();
    if (boundingRect.left >= -elementOffsetWidth && boundingRect.top >= -elementOffsetHight && boundingRect.right <= (window.innerWidth || document.documentElement.clientWidth) + elementOffsetWidth && boundingRect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + elementOffsetHight) {
      return true;
    } else {
      return false;
    }
  };

  /**
   * @function _findTargetElement
   * @private
   * @description Finds the target element in the DOM.
   * @param {function} targetFoundCallback
   */
  function _findTargetElement(id) {
    var frame_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    var enable_retry = arguments.length > 2 ? arguments[2] : undefined;
    var interval = arguments.length > 3 ? arguments[3] : undefined;
    var max_retries = arguments.length > 4 ? arguments[4] : undefined;
    var targetElement = getElementFromSelector(id, frame_id);
    if (!targetElement) {
      if (enable_retry) {
        Logger.info("Not found yet. Rechecking the DOM.");
        return _retryFindingTargetElement(max_retries, interval, id, frame_id);
      } else {
        Logger.info("Element with selector:".concat(id, " not found."));
        return false;
      }
    } else {
      var targetFoundCallback = function targetFoundCallback() {
        var isElementVisible = _isElementVisible(targetElement);
        if (isElementVisible) {
          // Attch a click callback to the target. If the target dismiss config is true, it will dismiss the tooltip
          // let targetClickCallback = this._targetClickCallback.bind(this);
          // this.targetElement.addEventListener("click", targetClickCallback);
          var targetValidCallback = function targetValidCallback(targetElement) {
            //Once the target is found then scroll into it.
            return _scrollIntoTargetIfNeeded(targetElement);
          };
          return targetValidCallback(targetElement);
        } else {
          Logger.info("Invalid target element. Width and height are 0 for element: ".concat(id, ". Can't show tooltip"));
          return false;
          //_resetRTMAction();
        }
      };

      return targetFoundCallback();
    }
  }

  /**
   * @function _retryFindingTargetElement
   * @private
   * @description Continuously rechecks the DOM for the target element after every retry_interval.
   * Maximum times it checks is configured through max_retries
   * @param {function} targetFoundCallback
   */
  function _retryFindingTargetElement(max_retries, interval, id) {
    var frame_id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
    //After every find_interval check the DOM for target element.
    var elementRecheckIntervalId = setInterval(function () {
      var targetElement = getElementFromSelector(id, frame_id);
      //If the element is found, stop checking the DOM.
      if (targetElement) {
        clearInterval(elementRecheckIntervalId);
        var targetFoundCallback = function targetFoundCallback() {
          var isElementVisible = _isElementVisible();
          if (isElementVisible) {
            // Attch a click callback to the target. If the target dismiss config is true, it will dismiss the tooltip
            // let targetClickCallback = this._targetClickCallback.bind(this);
            // this.targetElement.addEventListener("click", targetClickCallback);
            var targetValidCallback = function targetValidCallback() {
              //Once the target is found then scroll into it.
              _scrollIntoTargetIfNeeded();
            };
            targetValidCallback();
          } else {
            Logger.info("Invalid target element. Width and height are 0 for element: ".concat(id, ". Can't show tooltip"));
            //this._resetRTMAction();
          }
        };

        targetFoundCallback(targetElement);
      } else {
        max_retries = max_retries - 1;
        // If the element is not found even after max interval, stop checking
        if (max_retries <= 0) {
          clearInterval(elementRecheckIntervalId);
          console.warn("Element with selector:".concat(id, " not found."));
          //this._resetRTMAction();
        }
      }
    }, interval);
  }

  /**
   * @function getElementFromSelector
   * @description Finds the element in DOM for a given selector. Selector can be an ID, or any css selector. It can also be an XPath.
   * @param {string} selector
   * @returns {HTMLElement} Returns the HTML element that matches the given selector
   */
  var getElementFromSelector = function getElementFromSelector(selector) {
    var iframe_id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    // Given selector can be an ID.
    var element = document.getElementById(selector);
    if (!element) {
      try {
        element = document.querySelector(selector);
      } catch (e) {
        //If there is an exception, it means it is not a valid selector.
        window.ApxorLogger.error("Error finding element in DOM:" + e);
      }
    }
    // If no element is found till now, it means it is neither an ID nor a valid css selector. It could be an XPath.
    if (!element) {
      element = getElementByXPath(selector);
    }

    // If no element is found, it means the selector is not an ID. It could be a css selector
    if (!element && iframe_id.length > 0) {
      var _document$getElementB;
      element = (_document$getElementB = document.getElementById(iframe_id)) === null || _document$getElementB === void 0 || (_document$getElementB = _document$getElementB.contentWindow) === null || _document$getElementB === void 0 || (_document$getElementB = _document$getElementB.document) === null || _document$getElementB === void 0 ? void 0 : _document$getElementB.querySelector(selector);
    }
    return element;
  };
  var getElementByXPath = function getElementByXPath(path) {
    var index = path.indexOf("svg");
    if (index !== -1) {
      path = path.substring(0, index) + "svg:svg";
    }
    try {
      return document.evaluate(path, document, function (prefix) {
        if (prefix === "svg") {
          return "http://www.w3.org/2000/svg";
        } else {
          return null;
        }
      }, XPathResult.FIRST_ORDERED_NODE_TYPE, null).singleNodeValue;
    } catch (e) {
      window.ApxorLogger.error("Error finding element in DOM:" + e);
    }
    return null;
  };

  /**
   * @function _isElementVisible
   * @private
   * @description Checks if the element has a visible height and width
   * @returns {boolean} true  - If element is visible
   *                    false - If the element is not visible
   */
  function _isElementVisible(targetElement) {
    try {
      var rect = targetElement.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) {
        return false;
      }
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * @function _scrollIntoTargetIfNeeded
   * @private
   * @description Scrolls into the target element if needed.
   * @param {function} targetReachedCallback
   */
  function _scrollIntoTargetIfNeeded(targetElement) {
    var isTargetInViewPort = isElementInViewport(targetElement);
    // If the element is not in the viewport. scroll into the target element only if the config says so.
    if (isTargetInViewPort) {
      return true;
    } else {
      return false;
    }
  }
  var feedBackMessagePopUpCE = function feedBackMessagePopUpCE(message) {
    var feedbackModal = "\n        <style> \n          .apx-container{\n            padding:10px;\n          }\n        </style>\n        <div id=\"apx-innerElement\" class=\"apx-container\">\n              <div id=\"close-button\" style=\"cursor: pointer;position:absolute;top:9px;right:9px;\"><svg width=\"11\" height=\"11\" viewBox=\"0 0 18 18\" fill=\"none\" xmlns=\"http://www.w3.org/2000/svg\">\n                <path opacity=\"0.5\" d=\"M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z\" fill=\"white\" stroke=\"#002845\" stroke-width=\"0.2\"/>\n                </svg>\n              </div>\n              <div style=\"font-family: inherit;font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;\n              color: #FFFFFF; display: flex; gap: 12px;\"><svg xmlns=\"http://www.w3.org/2000/svg\" class=\"icon icon-tabler icon-tabler-circle-check-filled\" width=\"33\" height=\"33\" viewBox=\"0 0 24 24\" stroke-width=\"1.5\" stroke=\"#ffffff\" fill=\"none\" stroke-linecap=\"round\" stroke-linejoin=\"round\">\n  <path stroke=\"none\" d=\"M0 0h24v24H0z\" fill=\"none\"/>\n  <path d=\"M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z\" stroke-width=\"0\" fill=\"currentColor\" />\n</svg><div style = \"align-self: center;padding-right:20px;\">".concat(message, "</div></div>\n        </div>\n      ");
    var feedbackParentDiv = document.createElement("div");
    feedbackParentDiv.style = "\n        z-index:99999999;\n        background:#16202f;\n        position:fixed;\n        top:1%;\n        right:1%;\n        border-radius: 12px;\n      ";
    feedbackParentDiv.innerHTML = feedbackModal;
    feedbackParentDiv.id = "apx-container";
    document.body.appendChild(feedbackParentDiv);
  };

  var QE_STATE = "qe_state";
  var APX_RETAINED_SESSIONS = "apx_retained_session";
  var APX_RETAINED_DAYS = "apx_retained_days";
  var APX_CONTEXT_EVALUATED = "apx_context_evaluated";
  var APX_VARIANT_CODE = "apx_variant_code";

  var Logger$1 = window.ApxorLogger;
  var Audience = /*#__PURE__*/_createClass(function Audience() {
    var _this = this;
    _classCallCheck(this, Audience);
    _defineProperty(this, "_type", "ALL");
    _defineProperty(this, "_userAttributes", []);
    _defineProperty(this, "_sessionAttributes", []);
    _defineProperty(this, "userAttributesValidated", true);
    _defineProperty(this, "sessionAttributeValidated", true);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._type = config.audience.audience_type;
        _this._userAttributes = config.audience.attributes.user;
        _this._sessionAttributes = config.audience.attributes.session;
        if (!Array.isArray(_this._userAttributes) || !Array.isArray(_this._sessionAttributes)) {
          Logger$1.error("No attributes");
          return false;
        }
      } catch (error) {
        Logger$1.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function (user, session) {
      var status = true;
      if (_this._type === "FTU") {
        status = Apxor.getController().getSessionInfo().is_first_session;
      }
      var userAttributesCompare = _this._compareAttributes(user, _this._userAttributes);
      var sessionAttributesCompare = _this._compareAttributes(session, _this._sessionAttributes);
      if (!userAttributesCompare) {
        _this.userAttributesValidated = false;
      }
      if (!sessionAttributesCompare) {
        _this.sessionAttributeValidated = false;
      }
      return status && userAttributesCompare && sessionAttributesCompare;
    });
    _defineProperty(this, "_compareAttributes", function (attributes, expected) {
      var length = expected.length;
      var status = true;
      try {
        var _loop = function _loop() {
            var item = expected[index];
            if (isUndefined(attributes[item.name]) || status === false) {
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
              } else if (type === "b") {
                switch (value) {
                  case "true":
                    return true;
                  case "false":
                    return false;
                  default:
                    return value;
                }
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
                if (type === "s") {
                  loggedValue = "".concat(loggedValue);
                } else if (type === "l") {
                  loggedValue = parseInt(loggedValue);
                } else if (type === "f") {
                  loggedValue = parseFloat(loggedValue);
                } else if (type === "b") {
                  loggedValue = !!loggedValue;
                }
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
        Logger$1.error(error);
        status = false;
      }
      return status;
    });
  });

  var Details = /*#__PURE__*/_createClass(function Details() {
    var _this = this;
    _classCallCheck(this, Details);
    _defineProperty(this, "_name", "");
    _defineProperty(this, "_additionalInfo", {});
    _defineProperty(this, "_path", "");
    _defineProperty(this, "parse", function () {
      var details = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._name = details.name;
        _this._additionalInfo = details.additional_info;
        _this._path = details === null || details === void 0 ? void 0 : details.path;
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

  var Logger$2 = window.ApxorLogger;
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
    _defineProperty(this, "_route", "");
    _defineProperty(this, "parse", function () {
      var condition = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        var _condition$count_conf, _condition$count_conf2;
        _this._sequence = condition === null || condition === void 0 ? void 0 : condition.sequence;
        _this._conditionType = condition === null || condition === void 0 ? void 0 : condition.condition_type;
        _this._id = condition === null || condition === void 0 ? void 0 : condition._id;
        _this._eventCategory = condition !== null && condition !== void 0 && condition.event_category ? condition === null || condition === void 0 ? void 0 : condition.event_category : "specific_event";
        _this._count = condition === null || condition === void 0 || (_condition$count_conf = condition.count_config) === null || _condition$count_conf === void 0 ? void 0 : _condition$count_conf.count;
        _this._countOperator = condition === null || condition === void 0 || (_condition$count_conf2 = condition.count_config) === null || _condition$count_conf2 === void 0 ? void 0 : _condition$count_conf2.operator;
        _this._navigation = condition === null || condition === void 0 ? void 0 : condition.activity;
        _this._eventType = condition === null || condition === void 0 ? void 0 : condition.event_type;
        _this._combineOperator = condition.combine_operator;
        _this._timeEnabled = condition === null || condition === void 0 ? void 0 : condition.time_enabled;
        _this._time = condition === null || condition === void 0 ? void 0 : condition.time;
        _this._type = condition === null || condition === void 0 ? void 0 : condition.type;
        _this._route = condition === null || condition === void 0 ? void 0 : condition.route;
        return _this._details.parse(condition === null || condition === void 0 ? void 0 : condition.details) && _this._precondition.parse(condition.trigger) && _this._timeBounds.parse(condition.time_bounds);
      } catch (error) {
        Logger$2.error(error);
        return false;
      }
    });
  });

  var Logger$3 = window.ApxorLogger;
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
        Logger$3.error(error);
        return false;
      }
    });
  });

  /* eslint-disable no-unused-vars */
  var Logger$4 = window.ApxorLogger;
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
      _defineProperty(this, "_respectSequence", void 0);
      _defineProperty(this, "_childConditionIndex", void 0);
      _defineProperty(this, "_unregisterEventKPI", void 0);
      _defineProperty(this, "_unregisterEventNoKPI", void 0);
      _defineProperty(this, "no_KPI_TriggerDetails", []);
      _defineProperty(this, "_kpiEventOccured", false);
      _defineProperty(this, "timerDidnt", void 0);
      _defineProperty(this, "timerDid", void 0);
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
        var across_sessions = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
        var flag = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : "";
        var childConditionIndex = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : -1;
        var registerChecker = arguments.length > 8 && arguments[8] !== undefined ? arguments[8] : true;
        _this._uuid = id;
        _this._index = index;
        _this._kpi = noKpiArray;
        _this._respectSequence = respectSequence;
        _this.childConditionIndex = childConditionIndex;
        _this.across_sessions = across_sessions ? across_sessions : false;
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
            if (registerChecker === true) {
              if (!respectSequence || index === 0 || respectSequence === "unordered") {
                _this.register();
              }
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
        var childConditionIndex = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : -1;
        if (childConditionIndex != -1) {
          _this._childConditionIndex = childConditionIndex;
        }
        var condition = _this._condition;
        var event_category = condition !== null && condition !== void 0 && condition._eventCategory ? condition === null || condition === void 0 ? void 0 : condition._eventCategory : "specific_event";
        var precondition = condition._precondition;
        var ceInstance = CE.getInstance();
        if (precondition._eventType === "app_start") {
          _this._triggered = true;
          if (condition !== null && condition !== void 0 && condition._timeEnabled) {
            if ((condition === null || condition === void 0 ? void 0 : condition._time.unit) != "session") {
              var timeInMillisec = calculateTime(condition._time.unit, condition._time.value);
              if ((condition === null || condition === void 0 ? void 0 : condition._type) == "didn't") {
                _this._receivedEventForKpi = false;
                console.log("in didnt");
                console.log("in register didn't");
                _this.timerDidnt = setTimeout(function () {
                  if (!_this._receivedEventForKpi) {
                    console.log("setTimeout timer compleetd");
                    _this._isSatisfied = true;
                    if (_this._isSatisfied) {
                      _this._satisfiedCount += 1;
                      _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._condition._count, _this._condition._countOperator);
                      if (_this._isSatisfied) {
                        _this._condition._occurredTime = Date.now();
                        _this._receivedEventForKpi = false;
                        ceInstance.validate(_this._uuid, _this._index, _this._childConditionIndex);
                      }
                    }
                    if (event_category === "specific_event") {
                      ceInstance.unregisterFromEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForNoKpi);
                    } else {
                      _this.unregisterForGivenEventCategoryNOKPI(event_category);
                    }
                    _this._triggered = false;
                  }
                }, timeInMillisec);
                if (_this.across_sessions) {
                  var _timeInMillisec = calculateTime(condition._time.unit, condition._time.value);
                  var timeEnabled = condition._timeEnabled;
                  var condition_id = condition._id;
                  _this._persistSatisfiedConditions(condition._type, condition._details._name, Date.now(), condition._details._additionalInfo, _timeInMillisec, timeEnabled, condition_id);
                }
                if (event_category === "specific_event") {
                  ceInstance.registerForEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForNoKpi);
                  _this._unregisterEventNoKPI = _this._condition;
                } else {
                  _this.registerForGivenEventCategoryNOkpi(event_category);
                }
              } else if ((condition === null || condition === void 0 ? void 0 : condition._type) == "did") {
                console.log("did condition");
                _this.timerDid = setTimeout(function () {
                  if (!_this._kpiEventOccured) {
                    if (event_category === "specific_event") {
                      ceInstance.unregisterFromEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForKpiNew);
                    } else {
                      _this.unregisterFromGivenEventCategoryKPI(event_category);
                    }
                  }
                }, timeInMillisec);
                if (_this.across_sessions) {
                  var _timeInMillisec2 = calculateTime(condition._time.unit, condition._time.value);
                  var _timeEnabled = condition._timeEnabled;
                  var _condition_id = condition._id;
                  _this._persistSatisfiedConditions(condition._type, condition._details._name, Date.now(), condition._details._additionalInfo, _timeInMillisec2, _timeEnabled, _condition_id);
                }
                if (event_category === "specific_event") {
                  ceInstance.registerForEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForKpiNew);
                  _this._unregisterEventKPI = _this._condition;
                } else {
                  _this.registerForGivenEventCategoryKPI(event_category);
                }
              }
            }
          } else {
            console.log("on receive event1");
            if (event_category === "specific_event") {
              ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + condition._details._name, _this._onReceiveEvent);
            } else {
              _this.registerForGivenEventCategory(event_category);
            }
          }
        } else {
          if (condition !== null && condition !== void 0 && condition._timeEnabled) {
            if ((condition === null || condition === void 0 ? void 0 : condition._time.unit) != "session") {
              var _timeInMillisec3 = calculateTime(condition._time.unit, condition._time.value);
              if ((condition === null || condition === void 0 ? void 0 : condition._type) == "didn't") {
                _this._receivedEventForKpi = false;
                console.log("second case");
                _this.timerDidnt = setTimeout(function () {
                  if (!_this._receivedEventForKpi) {
                    _this._isSatisfied = true;
                    if (_this._isSatisfied) {
                      _this._satisfiedCount += 1;
                      _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._condition._count, _this._condition._countOperator);
                      if (_this._isSatisfied) {
                        _this._condition._occurredTime = Date.now();
                        _this._receivedEventForKpi = false;
                        ceInstance.validate(_this._uuid, _this._index);
                      }
                    }
                  }
                  if (event_category === "specific_event") {
                    ceInstance.unregisterFromEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForNoKpi);
                  }
                  _this._triggered = false;
                }, _timeInMillisec3);
                if (event_category === "specific_event") {
                  ceInstance.registerForEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForNoKpi);
                  _this._unregisterEventNoKPI = _this._condition;
                } else {
                  _this.registerForGivenEventCategoryNOkpi();
                }
              } else if ((condition === null || condition === void 0 ? void 0 : condition._type) == "did") {
                console.log("did condition");
                _this.timerDid = setTimeout(function () {
                  if (!_this._kpiEventOccured) {
                    if (event_category === "specific_event") {
                      ceInstance.unregisterFromEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForKpiNew);
                    }
                  }
                }, _timeInMillisec3);
                if (event_category === "specific_event") {
                  ceInstance.registerForEvent(generateKey(_this._condition._eventType) + "___" + _this._condition._details._name, _this._onReceiveEventForKpiNew);
                }
              }
            }
          } else {
            if (event_category === "specific_event") {
              ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + precondition._details._name, _this._onReceiveEvent);
            }
          }
        }
        if ((_window$ApxorRTM = window.ApxorRTM) !== null && _window$ApxorRTM !== void 0 && _window$ApxorRTM.badgesLists.includes(_this._uuid)) {
          console.log("on receive event3");
          ceInstance.registerForEvent(generateKey(condition._eventType) + "___" + "apxor-badge-container-".concat("-".concat(_this._uuid).replaceAll(" ", "").replace(/[^\w\s]/gi, "")), _this._onReceiveEvent);
        }
      });
      _defineProperty(this, "registerForGivenEventCategory", function (event_category) {
        var ceInstance = new CE();
        if (event_category === "apxor_event") {
          ceInstance.registerForEvent("apxor_event", function (type, name, time, additionalInfo) {
            _this._onReceiveEvent(generateKey(_this._condition._eventType), _this._condition._details._name, time, _this._condition._details._additionalInfo);
          });
        } else if (event_category === "customer_event") {
          ceInstance.registerForEvent("customer_event", function (type, name, time, additionalInfo) {
            _this._onReceiveEvent(generateKey(_this._condition._eventType), _this._condition._details._name, time, _this._condition._details._additionalInfo);
          });
        } else if (event_category === "any_event") {
          ceInstance.registerForEvent("any_event", function (type, name, time, additionalInfo) {
            _this._onReceiveEvent(generateKey(_this._condition._eventType), _this._condition._details._name, time, _this._condition._details._additionalInfo);
          });
        } else if (event_category === "campaign_event") {
          ceInstance.registerForEvent("campaign_event", function (type, name, time, additionalInfo) {
            _this._onReceiveEvent(generateKey(_this._condition._eventType), _this._condition._details._name, time, _this._condition._details._additionalInfo);
          });
        } else if (event_category === "survey_event") {
          ceInstance.registerForEvent("survey_event", function (type, name, time, additionalInfo) {
            _this._onReceiveEvent(generateKey(_this._condition._eventType), _this._condition._details._name, time, _this._condition._details._additionalInfo);
          });
        }
      });
      _defineProperty(this, "unregisterForGivenEventCategoryNOKPI", function (event_category) {
        console.log("in new register");
        var ceInstance = new CE();
        var eventCategory = _this._condition._eventCategory;
        if (eventCategory === "apxor_event") {
          ceInstance.unregisterFromEvent("apxor_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "customer_event") {
          ceInstance.unregisterFromEvent("customer_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "any_event") {
          ceInstance.unregisterFromEvent("any_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "campaign_event") {
          ceInstance.unregisterFromEvent("campaign_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "survey_event") {
          ceInstance.unregisterFromEvent("survey_event", _this._onReceiveEventForNoKpi);
        }
      });
      _defineProperty(this, "registerForGivenEventCategoryNOkpi", function () {
        console.log("in new register");
        var ceInstance = new CE();
        var eventCategory = _this._condition._eventCategory;
        if (eventCategory === "apxor_event") {
          ceInstance.registerForEvent("apxor_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "customer_event") {
          ceInstance.registerForEvent("customer_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "any_event") {
          ceInstance.registerForEvent("any_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "campaign_event") {
          ceInstance.registerForEvent("campaign_event", _this._onReceiveEventForNoKpi);
        } else if (eventCategory === "survey_event") {
          ceInstance.registerForEvent("survey_event", _this._onReceiveEventForNoKpi);
        }
      });
      _defineProperty(this, "registerForGivenEventCategoryKPI", function () {
        var ceInstance = new CE();
        var eventCategory = _this._condition._eventCategory;
        if (eventCategory === "apxor_event") {
          ceInstance.registerForEvent("apxor_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "customer_event") {
          ceInstance.registerForEvent("customer_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "any_event") {
          ceInstance.registerForEvent("any_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "campaign_event") {
          ceInstance.registerForEvent("campaign_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "survey_event") {
          ceInstance.registerForEvent("survey_event", _this._onReceiveEventForKpiNew);
        }
      });
      _defineProperty(this, "unregisterFromGivenEventCategoryKPI", function () {
        var ceInstance = new CE();
        var eventCategory = _this._condition._eventCategory;
        if (eventCategory === "apxor_event") {
          ceInstance.unregisterFromEvent("apxor_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "customer_event") {
          ceInstance.unregisterFromEvent("customer_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "any_event") {
          ceInstance.unregisterFromEvent("any_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "campaign_event") {
          ceInstance.unregisterFromEvent("campaign_event", _this._onReceiveEventForKpiNew);
        } else if (eventCategory === "survey_event") {
          ceInstance.unregisterFromEvent("survey_event", _this._onReceiveEventForKpiNew);
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
      _defineProperty(this, "_onReceiveEventForKpiNew", function () {
        _this._kpiEventOccured = true;
        console.log("configitem kpi check2");
        var ceInstance = new CE();
        clearTimeout(_this.timerDid);
        _this._satisfiedCount += 1;
        _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._condition._count, _this._condition._countOperator);
        if (_this._isSatisfied) {
          ceInstance.unregisterFromEvent(generateKey(_this._unregisterEventKPI._eventType) + "___" + _this._unregisterEventKPI._details._name, _this._onReceiveEventForKpiNew);
          _this._kpiEventOccured = false;
          ceInstance.validate(_this._uuid, _this._index, _this._childConditionIndex);
        }
      });
      _defineProperty(this, "_onReceiveEventForNoKpi", function (type, name, time, additionalInfo) {
        _this._receivedEventForKpi = true;
        clearTimeout(_this.timerDidnt);
        console.log("received event for nkpi");
        var ceInstance = new CE();
        ceInstance.unregisterFromEvent(generateKey(_this._unregisterEventNoKPI._eventType) + "___" + _this._unregisterEventNoKPI._details._name, _this._onReceiveEventForNoKpi);
        //return;
      });
      _defineProperty(this, "_onReceiveEvent", function (type, name, time, additionalInfo) {
        var _window$ApxorRTM2, _window$ApxorRTM3;
        console.log("in onreceive event");
        console.log("across session value is ", _this.across_sessions);
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
              var _condition$_details, _condition$_route, _condition$_details2, _condition$_details3;
              var event_time = condition === null || condition === void 0 || (_condition$_details = condition._details) === null || _condition$_details === void 0 || (_condition$_details = _condition$_details._additionalInfo) === null || _condition$_details === void 0 ? void 0 : _condition$_details.time;
              if ((condition === null || condition === void 0 || (_condition$_route = condition._route) === null || _condition$_route === void 0 ? void 0 : _condition$_route.length) > 0) {
                setTimeout(function () {
                  var _Apxor$getController;
                  var appEventsForNoKpi = (_Apxor$getController = Apxor.getController()) === null || _Apxor$getController === void 0 ? void 0 : _Apxor$getController._appEventsNoKpi;
                  appEventsForNoKpi.length <= 2 && condition._route === location.pathname && _this._displayCampaign(time);
                }, event_time);
              } else if ((condition === null || condition === void 0 || (_condition$_details2 = condition._details) === null || _condition$_details2 === void 0 || (_condition$_details2 = _condition$_details2._additionalInfo) === null || _condition$_details2 === void 0 ? void 0 : _condition$_details2.nkpi.length) > 0) {
                setTimeout(function () {
                  if (!_this._receivedEventForKpi) {
                    _this._isSatisfied = true;
                    if (_this._isSatisfied) {
                      _this._satisfiedCount += 1;
                      _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._condition._count, _this._condition._countOperator);
                      if (_this._isSatisfied) {
                        _this._condition._occurredTime = time;
                        _this._receivedEventForKpi = false;
                        ceInstance.validate(_this._uuid, _this._index);
                      }
                    }
                  }
                  condition._details._additionalInfo.nkpi.map(function (nokpi) {
                    ceInstance.unregisterFromEvent(toUpperCase(condition._details._additionalInfo.et) + "___" + nokpi, _this);
                    _this._triggered = false;
                  });
                }, event_time);
                condition._details._additionalInfo.nkpi.map(function (nokpi) {
                  ceInstance.registerForEvent(toUpperCase(condition._details._additionalInfo.et) + "___" + nokpi, _this._onReceiveEventForNoKpi);
                });
              }
              //it is for unregistering the events did case after completing the time imit
              else if ((condition === null || condition === void 0 || (_condition$_details3 = condition._details) === null || _condition$_details3 === void 0 || (_condition$_details3 = _condition$_details3._additionalInfo) === null || _condition$_details3 === void 0 ? void 0 : _condition$_details3.kpi.length) > 0) {
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
          console.log("increasing satisfaction count for", _this._condition._details._name);
          _this._satisfiedCount += 1;
          _this._isSatisfied = _this._compare(_this._satisfiedCount, _this._condition._count, _this._condition._countOperator);
          if (_this._isSatisfied) {
            _this._condition._occurredTime = time;
            if (_this.across_sessions) {
              var timeInMillisec = calculateTime(_this._condition._time.unit, _this._condition._time.value);
              var timeEnabled = _this._condition._timeEnabled;
              var condition_id = _this._condition._id;
              var satisfiedCount = _this._satisfiedCount;
              _this._persistSatisfiedConditions(_this._condition._type, name, time, additionalInfo, timeInMillisec, timeEnabled, condition_id, satisfiedCount);
            }
            ceInstance.validate(_this._uuid, _this._index, _this._childConditionIndex);
          }
        }
      });
      _defineProperty(this, "_onReceiveEventForTermination", function (type, name, time, additionalInfo) {
        var ceInstance = CE.getInstance();
        var validationStatus = generateKey(_this._goalevent._eventType) === type && _this._validateTimeBounds(time, _this._goalevent._timeBounds) && _this._goalevent._details._name === name && _this._compareAdditionalInfo(_this._goalevent._details._additionalInfo, additionalInfo);
        if (validationStatus) {
          console.log("increasing satisfaction count for termination", _this._condition._details._name);
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
        var result = generateKey(precondition._eventType) === type && precondition._details._name === name && _this._validateTimeBounds(time, precondition._timeBounds) && _this._compareAdditionalInfo(precondition._details._additionalInfo, additionalInfo);
        result = name === "APX_PAGE_OPENED" ? result && location.pathname === precondition._details._path : result;
        return result;
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
              if (status === false) {
                return {
                  v: false
                };
              }
              if (_typeof(expected[item]) === "object") {
                var _expected$item, _expected$item2;
                var operator = expected[item].op;
                var type = expected[item].t;
                var expectedValue;
                if (type === "s") {
                  expectedValue = expected[item].val;
                } else if (type === "l" || type === "f") {
                  expectedValue = parseFloat(expected[item].val);
                } else if (type === "b") {
                  switch (expected[item].val) {
                    case "true":
                      expectedValue = true;
                      break;
                    case "false":
                      expectedValue = false;
                      break;
                    default:
                      expectedValue = expected[item].val;
                  }
                }
                var loggedValues = [];
                if (Array.isArray(received[item])) {
                  loggedValues = received[item];
                } else {
                  loggedValues = [received[item]];
                }
                var match = loggedValues.some(function (loggedValue) {
                  if (type === "s") {
                    loggedValue = "".concat(loggedValue);
                  } else if (type === "l") {
                    loggedValue = parseInt(loggedValue);
                  } else if (type === "f") {
                    loggedValue = parseFloat(loggedValue);
                  } else if (type === "b") {
                    loggedValue = !!loggedValue;
                  }
                  return compare(loggedValue, expectedValue, operator);
                }
                // compare(loggedValue, expectedValue, operator)
                );

                var presence_checker = (_expected$item = expected[item]) !== null && _expected$item !== void 0 && _expected$item.present ? (_expected$item2 = expected[item]) === null || _expected$item2 === void 0 ? void 0 : _expected$item2.present : false;
                if (presence_checker) {
                  var present;
                  if (received.hasOwn(received, item)) {
                    present = true;
                  } else {
                    present = false;
                  }
                  status = status && present;
                }
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
          Logger$4.error(error);
          status = false;
        }
        return status;
      });
      _defineProperty(this, "_persistSatisfiedConditions", function (type, name, time, additionalInfo, timeInMillisec, timeEnabled, id, satisfiedCount) {
        console.log("persisting satisfied conditions");
        var objectPresenceChecker = false;
        var requiredObject;
        _this.no_KPI_TriggerDetails = Apxor.getController().getFromStorage("apx_nokpi_triggerdetails");
        if (_this.no_KPI_TriggerDetails === null || _this.no_KPI_TriggerDetails === undefined) {
          _this.no_KPI_TriggerDetails = [];
        } else {
          _this.no_KPI_TriggerDetails = JSON.parse(_this.no_KPI_TriggerDetails);
        }
        var finishTime = 0;
        if (timeEnabled) {
          finishTime = Date.now() + timeInMillisec;
        }
        for (var i = 0; i < _this.no_KPI_TriggerDetails.length; i++) {
          if (_this.no_KPI_TriggerDetails[i].id === id) {
            // If the id is found, increment its satisfiedcount by 1
            objectPresenceChecker = true;
            requiredObject = _this.no_KPI_TriggerDetails[i];
            break; // Assuming ids are unique, you can exit the loop after finding the matching object
          }
        }

        var triggerObj;
        if (objectPresenceChecker) {
          requiredObject.satisfiedCount += 1;
        } else {
          triggerObj = {
            id: id,
            type: type,
            time: time,
            name: name,
            additionalInfo: additionalInfo,
            satisfiedCount: satisfiedCount,
            timeBased: timeEnabled,
            finishTime: finishTime
          };
          _this.no_KPI_TriggerDetails.push(triggerObj);
        }
        Apxor.getController().persistToStorage("apx_nokpi_triggerdetails", JSON.stringify(_this.no_KPI_TriggerDetails));
      });
      _defineProperty(this, "_unregisterAllConditions", function (validators) {
        console.log("unregister all conditions");
        var ceInstance = new CE();
        var _iterator = _createForOfIteratorHelper(validators),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var validator = _step.value;
            if ((validator === null || validator === void 0 ? void 0 : validator.length) === 1 || (validator === null || validator === void 0 ? void 0 : validator.length) === undefined) {
              ceInstance.unregisterFromEvent(generateKey(validator === null || validator === void 0 ? void 0 : validator._condition._eventType) + "___" + (validator === null || validator === void 0 ? void 0 : validator._condition._details._name), _this._onReceiveEvent);
            } else {
              var _iterator2 = _createForOfIteratorHelper(validator),
                _step2;
              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var _childValidator$_cond;
                  var childValidator = _step2.value;
                  ceInstance.unregisterFromEvent(generateKey(childValidator === null || childValidator === void 0 ? void 0 : childValidator._condition._eventType) + "___" + (childValidator === null || childValidator === void 0 || (_childValidator$_cond = childValidator._condition) === null || _childValidator$_cond === void 0 ? void 0 : _childValidator$_cond._details._name), _this._onReceiveEvent);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      });
    }
    _createClass(ConditionValidator, [{
      key: "_displayCampaign",
      value: function _displayCampaign(time) {
        console.log("in display campaign");
        var ceInstance = CE.getInstance();
        this._isSatisfied = true;
        if (this._isSatisfied) {
          this._satisfiedCount += 1;
          this._isSatisfied = this._compare(this._satisfiedCount, this._condition._count, this._condition._countOperator);
          if (this._isSatisfied) {
            this._condition._occurredTime = time;
            ceInstance.validate(this._uuid, this._index);
            //ceInstance.updateCount(this._uuid);
          }
        }
      }
    }]);
    return ConditionValidator;
  }();

  var Logger$5 = window.ApxorLogger;
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
        _this._uuid = config._id;
        _this._meta = config.meta;
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
            _this.logNonEligibleUserEvent("Session limit reached");
            console.warn("Max count limit reached for session:" + config._id);
            return false;
          }
        } else if (_this._validity === "OVERALL") {
          _this._count = parseInt(_this._count) - parseInt(qe_state[config._id]["OVERALL"]);
          if (_this._count <= 0) {
            _this.logNonEligibleUserEvent("Overall limit reached");
            console.warn("Max count limit reached for overall:" + config._id);
            return false;
          }
        } else {
          Logger$5.info("Invalid config.");
          return false;
        }
      } catch (error) {
        Logger$5.error(error);
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
        Logger$5.info("Campaign Limit reset");
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
          if (_this._validity === "OVERALL") {
            _this.logNonEligibleUserEvent("Overall limit reached");
          } else if (_this._validity === "SESSION") {
            _this.logNonEligibleUserEvent("Session limit reached");
          }
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
            _this.logNonEligibleUserEvent("Session limit reached");
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
            _this.logNonEligibleUserEvent("Day limit reached");
            return false;
          }
        }
      } catch (e) {
        _this.logNonEligibleUserEvent("Error validating the frequency: ".concat(e));
        Logger$5.error("Error validating the frequency:" + e);
      }
      return true;
    });
    _defineProperty(this, "logNonEligibleUserEvent", function (reason) {
      var _this$_meta$attr;
      Apxor === null || Apxor === void 0 || Apxor.logEvent("apx_non_eligible_user", {
        apx_nudge_type: _this._meta.type === "SURVEY" ? "survey" : "campaign",
        apx_nudge_id: _this._uuid,
        apx_nudge_name: _this._meta.name,
        apx_variant_code: _this._meta.isExperiment || _this._meta.only_context ? (_this$_meta$attr = _this._meta.attr) === null || _this$_meta$attr === void 0 ? void 0 : _this$_meta$attr[APX_VARIANT_CODE] : "TG",
        apx_failure_type: "warn",
        apx_reason: reason
      });
    });
  });

  var Logger$6 = window.ApxorLogger;
  // import { isDefined } from "./utils";
  // import ConfigItem from "./ConfigItem";
  var GroupConditionValidator = /*#__PURE__*/_createClass(function GroupConditionValidator() {
    var _this = this;
    _classCallCheck(this, GroupConditionValidator);
    _defineProperty(this, "_groupValidator", []);
    _defineProperty(this, "_childValidatorsLength", 0);
    _defineProperty(this, "_andThenChecker", false);
    _defineProperty(this, "_singleConditionValidator", void 0);
    _defineProperty(this, "initialize", function () {
      var conditions = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var id = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
      var index = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var respectSequence = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "unordered";
      var noKpiArray = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : [];
      var parentRespectSequence = arguments.length > 5 ? arguments[5] : undefined;
      var across_sessions = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : false;
      _this._uuid = id;
      _this._index = index;
      _this._kpi = noKpiArray;
      _this._respectSequence = respectSequence;
      _this.across_sessions = across_sessions;
      var childConditions = [];
      _this._childValidatorsLength = conditions.length;
      try {
        if (childConditions != null) {
          respectSequence = conditions === null || conditions === void 0 ? void 0 : conditions.sequence_type;
          childConditions = _this.getChildConditions(conditions, _this._childValidatorsLength);
          if (parentRespectSequence === "unordered" || _this._index === 0) {
            _this.register();
          }
          return _this._groupValidator;
        }
      } catch (error) {
        Logger$6.error(error);
        return false;
      }
    });
    _defineProperty(this, "getChildConditions", function (conditions, conditionsLength) {
      for (var index = 0; index < conditionsLength; index++) {
        _this._singleConditionValidator = new ConditionValidator();
        try {
          if (_this._singleConditionValidator.initialize(conditions[index], _this._uuid, _this._index, _this._respectSequence, _this._noKpiArray, _this.across_sessions, "", -1, false)) {
            _this._groupValidator.push(_this._singleConditionValidator);
            _this._groupValidator.sequence_type = _this._respectSequence;
          }
        } catch (error) {
          Logger$6.error(error);
        }
      }
      return _this._groupValidator;
    });
    _defineProperty(this, "register", function () {
      if (_this._respectSequence === "ordered" || _this._respectSequence === "strictly_ordered") {
        _this._groupValidator[0].register(0);
      } else {
        var _iterator = _createForOfIteratorHelper(_this._groupValidator),
          _step;
        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var validator = _step.value;
            validator.register();
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    });
    _defineProperty(this, "_unregisterAllConditions", function (validators) {
      console.log("unregister all conditions group");
      _this._singleConditionValidator._unregisterAllConditions(validators);
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
        var _config$meta, _config$meta2;
        _this._name = config.meta.name;
        _this._type = config.meta.type;
        _this._only_context = config.meta.only_context;
        _this._attr = ((_config$meta = config.meta) === null || _config$meta === void 0 ? void 0 : _config$meta.attr) || {};
        _this._isExperiment = (_config$meta2 = config.meta) === null || _config$meta2 === void 0 ? void 0 : _config$meta2.isExperiment;
      } catch (error) {
        window.ApxorLogger.error(error);
        return false;
      }
      return true;
    });
  });

  var Logger$7 = window.ApxorLogger;
  var OverallConfig = /*#__PURE__*/_createClass(function OverallConfig() {
    var _this = this;
    _classCallCheck(this, OverallConfig);
    _defineProperty(this, "_events", []);
    _defineProperty(this, "_ret_day", {});
    _defineProperty(this, "_session", {});
    _defineProperty(this, "_toggleRetDay", false);
    _defineProperty(this, "_toggleSession", false);
    _defineProperty(this, "retainedDaysValidated", true);
    _defineProperty(this, "retainedSessionValidated", true);
    _defineProperty(this, "eventDoneInLT", false);
    // event done in life time, if event(like "purchase_event") already done in life time then campaign will not be shown
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._events = config.overall_cfg.events;
        _this._ret_day = config.overall_cfg.ret_day;
        _this._session = config.overall_cfg.session;
        _this._toggleRetDay = config.overall_cfg.toggleRetDay;
        _this._toggleSession = config.overall_cfg.toggleSession;
      } catch (error) {
        Logger$7.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function () {
      var retainedDays = parseInt(Apxor.getController().getFromStorage(APX_RETAINED_DAYS));
      var retainedSession = parseInt(Apxor.getController().getFromStorage(APX_RETAINED_SESSIONS));
      if (_this._toggleRetDay && !isNaN(retainedDays) && !(retainedDays >= _this._ret_day.from && retainedDays <= _this._ret_day.to)) {
        _this.retainedDaysValidated = false;
        return false;
      }
      if (_this._toggleSession && !isNaN(retainedSession) && !(retainedSession >= _this._session.from && retainedSession <= _this._session.to)) {
        _this.retainedSessionValidated = false;
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
            _this.eventDoneInLT = true;
            return false;
          }
        }
      } catch (e) {
        Logger$7.error("Failed to validate the lt count:" + e);
      }
      return true;
    });
  });

  var Logger$8 = window.ApxorLogger;
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
          Logger$8.error("No attributes");
          return false;
        }
      } catch (error) {
        Logger$8.error(error);
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
        Logger$8.error(error);
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

  var Logger$9 = window.ApxorLogger;
  var Validity = /*#__PURE__*/_createClass(function Validity() {
    var _this = this;
    _classCallCheck(this, Validity);
    _defineProperty(this, "_startDate", -1);
    _defineProperty(this, "_endDate", -1);
    _defineProperty(this, "_startTime", -1);
    _defineProperty(this, "_endTime", -1);
    _defineProperty(this, "_timeLimits", false);
    _defineProperty(this, "_nudge_expired", false);
    _defineProperty(this, "_not_yet_active", false);
    _defineProperty(this, "_not_in_specified_time", false);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        if (isNaN(Date.parse(config.validity.start_date)) || isNaN(Date.parse(config.validity.end_date))) {
          Logger$9.error("Not valid dates");
          return false;
        }
        _this._startDate = Date.parse(config.validity.start_date);
        _this._endDate = Date.parse(config.validity.end_date);
        if (isDefined(config.at_specific_time)) {
          _this._timeLimits = config.at_specific_time;
          if (_this._timeLimits && isDefined(config.time_limits)) {
            var currentDate = new Date().toISOString().split("T")[0];
            _this._startTime = Date.parse(currentDate + "T" + config.time_limits.start_time + ":00.000Z");
            _this._endTime = Date.parse(currentDate + "T" + config.time_limits.end_time + ":00.000Z");

            // If invalid format is passed, return false
            if (isNaN(_this._startTime) || isNaN(_this._endTime)) {
              Logger$9.error("Not valid times");
              return false;
            }
          }
        }
      } catch (error) {
        Logger$9.error(error);
        return false;
      }
      return true;
    });
    _defineProperty(this, "validate", function () {
      var currentTime = Date.now();
      if (currentTime > _this._startDate && currentTime < _this._endDate) {
        if (_this._timeLimits && !(currentTime >= _this._startTime && currentTime <= _this._endTime)) {
          _this._not_in_specified_time = true;
        }
        return !_this._timeLimits || currentTime >= _this._startTime && currentTime <= _this._endTime;
      } else if (currentTime < _this._startDate) {
        _this._not_yet_active = true;
      } else if (currentTime > _this._endDate) {
        _this._nudge_expired = true;
      }
      return false;
    });
  });

  var Binding = /*#__PURE__*/_createClass(function Binding() {
    var _this = this;
    _classCallCheck(this, Binding);
    _defineProperty(this, "_enableScreenBinding", "");
    _defineProperty(this, "_bindingUrl", "");
    _defineProperty(this, "_bindingVar", "");
    _defineProperty(this, "_bindingOperator", "");
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        _this._enableScreenBinding = config === null || config === void 0 ? void 0 : config.screen_binding;
        if (!_this._enableScreenBinding) {
          return true;
        } else {
          _this._bindingUrl = config === null || config === void 0 ? void 0 : config.binding.url;
          _this._bindingVar = config === null || config === void 0 ? void 0 : config.binding["var"];
          _this._bindingOperator = config === null || config === void 0 ? void 0 : config.binding.operator;
          return true;
        }
      } catch (error) {
        window.ApxorLogger.error(error);
        return false;
      }
    });
    /**
     * compares the current url with url from config based on the operator
     * url :Screen binding url from config
     * variable :variable is the dynamic part of the url which we get in config which is by default "$"
     * operator :operator can be either "EQ"  used for equality comparision or "SW" used for startswith comparision
     */
    _defineProperty(this, "validate", function () {
      var url = _this._bindingUrl;
      var variable = _this._bindingVar;
      var operator = _this._bindingOperator;
      var currentUrl = window.location.href;
      if (!_this._enableScreenBinding) {
        return true;
      } else {
        if (operator === "EQ") {
          if (!url.includes(variable)) {
            if (currentUrl === url) {
              return true;
            } else {
              return false;
            }
          } else {
            var matched = _doesUrlMatchSkeleton(currentUrl, url, variable, false);
            if (matched) {
              return true;
            } else {
              return false;
            }
          }
        } else if (operator === "SW") {
          if (!url.includes(variable)) {
            if (currentUrl.startsWith(url)) {
              return true;
            } else {
              return false;
            }
          } else {
            var _matched = _doesUrlMatchSkeleton(currentUrl, url, variable, true);
            if (_matched) {
              return true;
            } else {
              return false;
            }
          }
        }
      }
    });
  });

  var Logger$a = window.ApxorLogger;
  var APP_EVENT = "APP_EVENT";
  var CLIENT_EVENT = "CLIENT_EVENT";
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
    _defineProperty(this, "_screenbinding", new Binding());
    _defineProperty(this, "_respectSequence", false);
    _defineProperty(this, "_noKpiArray", []);
    _defineProperty(this, "_variant_code", "");
    _defineProperty(this, "_andThenChecker", false);
    _defineProperty(this, "groupCombineOperator", "OR");
    _defineProperty(this, "_receivedEventForKpi", false);
    _defineProperty(this, "_receivedEventForKpiAcrossSessions", false);
    _defineProperty(this, "_kpinextValidator", void 0);
    _defineProperty(this, "timeForKPI", void 0);
    _defineProperty(this, "kpiIndex", 0);
    _defineProperty(this, "_nextValidator", void 0);
    _defineProperty(this, "_across_sessions", false);
    _defineProperty(this, "_conditionsFromConfig", void 0);
    _defineProperty(this, "_advanceConditionsChecker", false);
    _defineProperty(this, "_matchedConditionObject", void 0);
    _defineProperty(this, "_acrossSessionsConditionIndex", void 0);
    _defineProperty(this, "_acrossSessionsmatchingObject", void 0);
    _defineProperty(this, "_nextUpcomingValidator", void 0);
    _defineProperty(this, "_unregisterValidatorNokpi", void 0);
    _defineProperty(this, "_unregisterValidatorKPI", void 0);
    _defineProperty(this, "_timerDidnt", void 0);
    _defineProperty(this, "_timerDid", void 0);
    _defineProperty(this, "_singleConditionalValidator", void 0);
    _defineProperty(this, "_conditionsLength", void 0);
    _defineProperty(this, "parse", function () {
      var config = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      try {
        var _this$_meta$_attr;
        // If ID is not present, throw it out
        if (!isDefined(config._id)) {
          Logger$a.error("No Id");
          return false;
        }

        // If config is disabled, throw it out
        if (!isDefined(config.enabled) || !config.enabled) {
          Logger$a.error("Not enabled");
          return false;
        }

        // If META, VALIDITY, FREQUENCY and AUDIENCE is not parsed properly, throw it out
        if (!(_this._meta.parse(config) && _this._validity.parse(config) && _this._frequency.parse(config) && _this._audience.parse(config) && _this._overallconfig.parse(config) && _this._terminationconfig.parse(config) && _this._screenbinding.parse(config))) {
          return false;
        }
        _this._variant_code = _this._meta._isExperiment || _this._meta._only_context ? (_this$_meta$_attr = _this._meta._attr) === null || _this$_meta$_attr === void 0 ? void 0 : _this$_meta$_attr[APX_VARIANT_CODE] : "TG";
        _this._across_sessions = config !== null && config !== void 0 && config.across_sessions ? config === null || config === void 0 ? void 0 : config.across_sessions : false;
        _this.enable_conditions = config === null || config === void 0 ? void 0 : config.enable_conditions;
        _this.enable_conditions_v2 = config === null || config === void 0 ? void 0 : config.enable_conditions_v2;
        // If there are no conditions, throw it out
        if (!isDefined(config.conditions) || !Array.isArray(config.conditions)) {
          Logger$a.error("No valid conditions", config.conditions);
          return false;
        }
        _this._uuid = config._id;
        _this._respectSequence = isDefined(config.sequence_enabled) ? config.sequence_enabled : false;
        if (isDefined(config.conditions_v2) && _this.enable_conditions_v2) {
          _this._respectSequence = config === null || config === void 0 ? void 0 : config.sequence_type;
        }
        if (_this._respectSequence === true) {
          // iff respectSequence is true, Sort the Conditions by their sequence order
          // We need to sort, if server sends them in orderless manner
          config.conditions.sort(function (prev, current) {
            return prev.sequence < current.sequence;
          });
        }

        // Parse all conditions now
        var conditions;
        if (isDefined(config.conditions_v2) && _this.enable_conditions_v2) {
          conditions = config.conditions_v2;
          _this._advanceConditionsChecker = true;
        } else {
          conditions = config.conditions;
        }
        _this._conditionsFromConfig = conditions;
        var length = conditions.length;
        var no_context_enabled = config === null || config === void 0 ? void 0 : config.no_context_enabled;
        if (length === 0 && no_context_enabled) {
          setTimeout(function () {
            _this._validateAllConditions();
          }, 10);
        }
        _this._conditionsLength = length;
        _this.handleConditions(conditions, length);
        console.log(_this._conditionValidators);
        _this.getSequencedConditionsFromStorageandUpdate();
        console.log(_this._conditionValidators);
        if (_this._terminationconfig.enable_goal_events) {
          var goal_events = config.terminate_info.goal_events.events;
          var goaleventslength = goal_events.length;
          for (var i = 0; i < goaleventslength; i++) {
            var conditionValidator = new ConditionValidator();
            if (conditionValidator.initialize(goal_events[i], _this._uuid, i, true, [], _this._across_sessions, "termination")) {
              _this._terminationGoalEventValidators.push(conditionValidator);
            }
          }
        }
        console.log("conditional validator parse");
        return _this._conditionValidators.length > 0;
      } catch (error) {
        Logger$a.error(error);
        return false;
      }
    });
    _defineProperty(this, "handleConditions", function (conditions, length) {
      var _loop = function _loop() {
        _this._noKpiArray = [];
        var condition = conditions[index];
        var condition_type = condition !== null && condition !== void 0 && condition.condition_type ? condition === null || condition === void 0 ? void 0 : condition.condition_type : "single";
        if (condition_type === "group") {
          // Recursively handle nested group conditions
          var conditions_v2 = condition.conditions_v2;
          _this.groupCombineOperator = condition.combine_operator;
          var groupRespectSequence = condition === null || condition === void 0 ? void 0 : condition.sequence_type;
          _this._singleConditionalValidator = new GroupConditionValidator();
          var groupValidator = _this._singleConditionalValidator.initialize(conditions_v2, _this._uuid, index, groupRespectSequence, _this._noKpiArray, _this._respectSequence, _this._across_sessions);
          _this._conditionValidators.push(groupValidator);
          console.log(_this._singleConditionalValidator);
          //this.handleConditions(condition.conditions_v2, length_child_conditions);
        } else {
          if (condition.type === "didn't") {
            var _condition$details;
            var obj = {
              trigger_key: condition.trigger.details.name,
              no_kpi_array: condition === null || condition === void 0 || (_condition$details = condition.details) === null || _condition$details === void 0 || (_condition$details = _condition$details.additional_info) === null || _condition$details === void 0 ? void 0 : _condition$details.nkpi,
              condition_id: condition === null || condition === void 0 ? void 0 : condition._id,
              time_bounds: condition.time_bounds.upper
            };
            _this._noKpiArray = [].concat(_toConsumableArray(_this._noKpiArray), [obj]);
          }
          _this._singleConditionalValidator = new ConditionValidator();
          if (_this._singleConditionalValidator.initialize(condition, _this._uuid, index, _this._respectSequence, _this._noKpiArray, _this._across_sessions)) {
            _this._conditionValidators.push(_this._singleConditionalValidator);
            var max_retries = (condition === null || condition === void 0 ? void 0 : condition.timeout) / (condition === null || condition === void 0 ? void 0 : condition.findinterval);
            var frame_id = (condition === null || condition === void 0 ? void 0 : condition.frameid) || "";
            var url = condition === null || condition === void 0 ? void 0 : condition.url;
            if (window.location.href === url) {
              if (condition.event_type === "view_visibility") {
                if (_findTargetElement(condition.view_id, frame_id, condition === null || condition === void 0 ? void 0 : condition.enable_retry, condition === null || condition === void 0 ? void 0 : condition.findinterval, max_retries) === true) {
                  //this.register();
                  _this._validateAllConditions(true);
                }
              }
            }
            // eslint-disable-next-line no-unused-vars
            window.addEventListener("navigate", function (event) {
              var url = condition === null || condition === void 0 ? void 0 : condition.url;
              if (window.location.href === url) {
                if (condition.event_type === "view_visibility") {
                  if (_findTargetElement(condition.view_id, frame_id, condition === null || condition === void 0 ? void 0 : condition.enable_retry, condition === null || condition === void 0 ? void 0 : condition.findinterval, max_retries) === true) {
                    //this.register();
                    _this._validateAllConditions(true);
                  }
                }
              }
            });
          }
        }
      };
      for (var index = 0; index < length; index++) {
        _loop();
      }
    });
    _defineProperty(this, "getSequencedConditionsFromStorageandUpdate", function () {
      if (_this._across_sessions && _this._respectSequence === "ordered") {
        var satisfied = false;
        console.log("across_sesions_case");
        var no_KPI_TriggerDetails = Apxor.getController().getFromStorage("apx_nokpi_triggerdetails");
        no_KPI_TriggerDetails = JSON.parse(no_KPI_TriggerDetails);
        if (no_KPI_TriggerDetails != null && no_KPI_TriggerDetails != undefined) {
          var _loop2 = function _loop2(i) {
            var _this$_conditionValid, _this$_conditionValid2, _this$_conditionValid3;
            if ((_this$_conditionValid = _this._conditionValidators[i]) !== null && _this$_conditionValid !== void 0 && (_this$_conditionValid = _this$_conditionValid._condition) !== null && _this$_conditionValid !== void 0 && _this$_conditionValid._timeEnabled && _this._conditionValidators[i].length === undefined) {
              if (_this._conditionValidators[i]._condition._type === "didn't") {
                var conditionValidatorId = _this._conditionValidators[i]._condition._id;
                var matchingObject = _this.findObjectById(conditionValidatorId, no_KPI_TriggerDetails);
                if (matchingObject) {
                  if (Date.now() > matchingObject.finishTime) {
                    _this._conditionValidators[i]._isSatisfied = true;
                    _this._conditionValidators[i]._satisfiedCount = matchingObject.satisfiedCount;
                    satisfied = true;
                  } else {
                    var timeleft = matchingObject.finishTime - Date.now();
                    var eventCategory = _this._conditionValidators[i]._condition._eventCategory ? _this._conditionValidators[i]._condition._eventCategory : "specific_event";
                    var ceInstance = new CE();
                    if (eventCategory === "specific_event") {
                      ceInstance.registerForEvent(generateKey(_this._conditionValidators[i]._condition._eventType) + "___" + _this._conditionValidators[i]._condition._details._name, _this._onReceiveEventForNoKpi);
                      _this._unregisterValidatorNokpi = _this._conditionValidators[i];
                    } else {
                      _this.registerForGivenEventCategoryNOkpi(eventCategory);
                    }
                    setTimeout(function () {
                      if (i === _this._conditionValidators.length - 1 && !_this._receivedEventForKpi) {
                        _this._conditionValidators[i]._isSatisfied = true;
                        _this._conditionValidators[i]._satisfiedCount = matchingObject.satisfiedCount;
                        satisfied = true;
                        if (eventCategory === "specific_event") {
                          ceInstance.unregisterFromEvent(generateKey(_this._conditionValidators[i]._condition._eventType) + "___" + _this._conditionValidators[i]._condition._details._name, _this._onReceiveEventForNoKpi);
                        } else {
                          _this.unRegisterForGivenEventCategoryNOkpi(_this._conditionValidators[i]);
                        }
                        _this._validateAllConditions();
                      }
                    }, timeleft);
                  }
                }
              }
              if (_this._conditionValidators[i]._condition._type === "did") {
                var _conditionValidatorId = _this._conditionValidators[i]._condition._id;
                var _matchingObject = _this.findObjectById(_conditionValidatorId, no_KPI_TriggerDetails);
                if (_matchingObject) {
                  if (_matchingObject.satisfiedCount == null) {
                    if (Date.now() < _matchingObject.finishTime) {
                      console.log("time is left will add set time out again");
                      _this._acrossSessionsmatchingObject = _matchingObject;
                      _this._acrossSessionsConditionIndex = i;
                      var _timeleft = _matchingObject.finishTime - Date.now();
                      var _eventCategory = _this._conditionValidators[i]._condition._eventCategory ? _this._conditionValidators[i]._condition._eventCategory : "specific_event";
                      var _ceInstance = new CE();
                      if (_eventCategory === "specific_event") {
                        _ceInstance.registerForEvent(generateKey(_this._conditionValidators[i]._condition._eventType) + "___" + _this._conditionValidators[i]._condition._details._name, _this._onReceiveEventForKPIAcrossSessions);
                      } else {
                        _this.registerForGivenEventCategoryNOkpi(_eventCategory);
                      }
                      setTimeout(function () {
                        if (_eventCategory === "specific_event") {
                          _ceInstance.unregisterFromEvent(generateKey(_this._conditionValidators[i]._condition._eventType) + "___" + _this._conditionValidators[i]._condition._details._name, _this._onReceiveEventForKPIAcrossSessions);
                        } else {
                          _this.unRegisterForGivenEventCategoryNOkpi(_this._conditionValidators[i]);
                        }
                      }, _timeleft);
                    }
                  } else {
                    _this._conditionValidators[i]._satisfiedCount = _matchingObject.satisfiedCount;
                    _this._conditionValidators[i]._isSatisfied = true;
                  }
                }
              }
            } else {
              satisfied = _this.checkConditionsatisfiedStatus(i, no_KPI_TriggerDetails);
            }
            if (satisfied && (!((_this$_conditionValid2 = _this._conditionValidators[i]) !== null && _this$_conditionValid2 !== void 0 && (_this$_conditionValid2 = _this$_conditionValid2._condition) !== null && _this$_conditionValid2 !== void 0 && _this$_conditionValid2._timeEnabled) || ((_this$_conditionValid3 = _this._conditionValidators[i]) === null || _this$_conditionValid3 === void 0 ? void 0 : _this$_conditionValid3.length) > 1)) {
              if (i === _this._conditionValidators.length - 1) {
                _this._validateAllConditions();
              }
            } else if (!satisfied) {
              if (!_this._conditionValidators[i].length === undefined) _this._conditionValidators[i].register();
            }
          };
          for (var i = 0; i < _this._conditionValidators.length; i++) {
            _loop2(i);
          }
        }
      } else if (_this._across_sessions && _this._respectSequence === "unordered") {
        var _no_KPI_TriggerDetails = Apxor.getController().getFromStorage("apx_nokpi_triggerdetails");
        _no_KPI_TriggerDetails = JSON.parse(_no_KPI_TriggerDetails);
        if (_no_KPI_TriggerDetails != null && _no_KPI_TriggerDetails != undefined) {
          for (var _i = 0; _i < _this._conditionValidators.length; _i++) {
            _this.checkConditionsatisfiedStatus(_i, _no_KPI_TriggerDetails);
          }
        }
      }
    });
    _defineProperty(this, "checkConditionsatisfiedStatus", function (index, no_KPI_TriggerDetails) {
      if (_this._conditionValidators[index].length === undefined || _this._conditionValidators[index].length === 1) {
        var conditionValidatorId = _this._conditionValidators[index]._condition._id;
        var satisfied = false;
        var matchingObject = _this.findObjectById(conditionValidatorId, no_KPI_TriggerDetails);
        if (matchingObject) {
          _this._matchedConditionObject = matchingObject;
          var validator = new ConditionValidator();
          satisfied = validator._compare(matchingObject.satisfiedCount, _this._conditionValidators[index]._condition._count, _this._conditionValidators[index]._condition._countOperator);
          if (matchingObject) {
            if (satisfied) {
              _this._conditionValidators[index]._isSatisfied = true;
            } else {
              _this._conditionValidators[index]._satisfiedCount = matchingObject.satisfiedCount;
            }
          }
        } else {
          _this._conditionValidators[index].register();
        }
        return satisfied;
      } else if (_this._conditionValidators[index].length >= 1) {
        var _this$_conditionValid4;
        var groupRespectSequence = "unordered";
        groupRespectSequence = (_this$_conditionValid4 = _this._conditionValidators[index]) === null || _this$_conditionValid4 === void 0 ? void 0 : _this$_conditionValid4.sequence_type;
        var individualConditionSatisfied;
        if (groupRespectSequence === "ordered" || groupRespectSequence === "strictly_ordered") {
          for (var i = 0; i < _this._conditionValidators[index].length; i++) {
            var individualCondition = _this._conditionValidators[index][i];
            var singleConditionValidatorId = individualCondition._condition._id;
            individualConditionSatisfied = false;
            var _matchingObject2 = _this.findObjectById(singleConditionValidatorId, no_KPI_TriggerDetails);
            if (_matchingObject2) {
              var _validator = new ConditionValidator();
              individualConditionSatisfied = _validator._compare(_matchingObject2.satisfiedCount, individualCondition._condition._count, individualCondition._condition._countOperator);
              if (_matchingObject2) {
                if (individualConditionSatisfied) {
                  _this._conditionValidators[index][i]._isSatisfied = true;
                  var childIndex = i + 1;
                  console.log("nested and then");
                  var upcomingValidator = _this._conditionValidators[index][i + 1];
                  if (upcomingValidator === undefined && isDefined(_this._conditionValidators[index + 1])) {
                    _this._conditionValidators[index + 1].register();
                    individualConditionSatisfied = true;
                  }
                  if (upcomingValidator != undefined) {
                    _this._conditionValidators[index][i + 1].register(childIndex);
                  }
                } else {
                  _this._conditionValidators[index][i]._satisfiedCount = _matchingObject2.satisfiedCount;
                }
              }
            } else {
              if (isDefined(_this._conditionValidators[index][i - 1]) && _this._conditionValidators[index][i]._isSatisfied === true) {
                _this._conditionValidators[index][i].register();
              } else if (isUndefined(_this._conditionValidators[index][i - 1])) {
                _this._conditionValidators[index][i].register();
              }
            }
          }
          return individualConditionSatisfied;
        } else {
          var conditionSatisfiedChecker;
          for (var _i2 = 0; _i2 < _this._conditionValidators[index].length; _i2++) {
            var individualCombineOperator = _this._conditionValidators[index][0]._condition._combineOperator;
            if (individualCombineOperator === "OR") {
              conditionSatisfiedChecker = false;
            } else {
              conditionSatisfiedChecker = true;
            }
            var _individualCondition = _this._conditionValidators[index][_i2];
            var _singleConditionValidatorId = _individualCondition._condition._id;
            individualConditionSatisfied = false;
            var _matchingObject3 = _this.findObjectById(_singleConditionValidatorId, no_KPI_TriggerDetails);
            if (_matchingObject3) {
              var _validator2 = new ConditionValidator();
              individualConditionSatisfied = _validator2._compare(_matchingObject3.satisfiedCount, _individualCondition._condition._count, _individualCondition._condition._countOperator);
              if (_matchingObject3) {
                if (individualConditionSatisfied) {
                  _this._conditionValidators[index][_i2]._isSatisfied = true;
                } else {
                  _this._conditionValidators[index][_i2]._satisfiedCount = _matchingObject3.satisfiedCount;
                }
              }
            } else {
              _individualCondition.register();
            }
            if (individualCombineOperator === "AND") {
              conditionSatisfiedChecker = conditionSatisfiedChecker && individualConditionSatisfied;
            } else {
              conditionSatisfiedChecker = conditionSatisfiedChecker || individualConditionSatisfied;
            }
          }
          return conditionSatisfiedChecker;
        }
      }
    });
    _defineProperty(this, "findObjectById", function (id, list) {
      return list.find(function (obj) {
        return obj.id === id;
      });
    });
    _defineProperty(this, "evaluate", function (index) {
      var childIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
      console.log("coming to evaluate");
      var ceInstance = CE.getInstance();
      if (index < 0) {
        return;
      }
      var currentValidator = _this._conditionValidators[index];
      var groupRespectSequence = "unordered";
      if ((currentValidator === null || currentValidator === void 0 ? void 0 : currentValidator.length) > 1) {
        groupRespectSequence = currentValidator === null || currentValidator === void 0 ? void 0 : currentValidator.sequence_type;
      }
      if (_this._respectSequence === true || _this._respectSequence === "ordered" || _this._respectSequence === "strictly_ordered" || groupRespectSequence === "ordered" || groupRespectSequence === "strictly_ordered") {
        console.log("respect sequence ordered");
        _this.kpiIndex = index + 1;
        var conditionValidator = _this._conditionValidators[index];
        if ((conditionValidator === null || conditionValidator === void 0 ? void 0 : conditionValidator.length) > 0) {
          if (isDefined(conditionValidator)) {
            if (_this._respectSequence === "unordered" && groupRespectSequence === "ordered") {
              var prevValidator = currentValidator[childIndex - 1];
              if (isDefined(prevValidator)) {
                if (prevValidator.length === undefined || prevValidator.length == 1) {
                  if (!prevValidator._isSatisfied) {
                    return;
                  }
                } else if (prevValidator.length > 1) {
                  if (!_this.validateChildConditions(prevValidator)) {
                    return;
                  }
                }
              }
              var nextValidator = currentValidator[childIndex + 1];
              if (!isDefined(nextValidator)) {
                if (groupRespectSequence === "strictly_ordered") {
                  if (_this._andThenChecker != true) {
                    _this._validateAllConditions();
                  }
                } else {
                  var _currentValidator$chi;
                  if (((_currentValidator$chi = currentValidator[childIndex]) === null || _currentValidator$chi === void 0 ? void 0 : _currentValidator$chi.length) > 0) {
                    if (_this.validateChildConditions(currentValidator)) {
                      _this._validateAllConditions();
                    }
                  } else {
                    _this._validateAllConditions();
                  }
                }
              } else {
                nextValidator.register(childIndex + 1);
                if (_this._respectSequence === "strictly_ordered") {
                  _this._currentEventname = conditionValidator[childIndex]._condition._details._name;
                  var controller = Apxor.getController();
                  controller.registerForEvent(APP_EVENT, _this.immediateEventChecker);
                  controller.registerForEvent(CLIENT_EVENT, _this.immediateEventChecker);
                }
              }
            } else {
              var _prevValidator = _this._conditionValidators[index - 1];
              // if (isDefined(prevValidator) && !prevValidator._isSatisfied) {
              //   return;
              // }
              if (isDefined(_prevValidator)) {
                if (_prevValidator.length === undefined || _prevValidator.length == 1) {
                  if (!_prevValidator._isSatisfied) {
                    return;
                  }
                } else if (_prevValidator.length > 1) {
                  if (!_this.validateChildConditions(_prevValidator)) {
                    return;
                  }
                }
              }
              var _nextValidator;
              if (conditionValidator.length === undefined || conditionValidator.length === 1) {
                _nextValidator = _this._conditionValidators[index + 1];
              } else if (conditionValidator.length > 1) {
                if (groupRespectSequence === "ordered" || groupRespectSequence === "strictly_ordered") {
                  if (childIndex === conditionValidator.length - 1) {
                    _nextValidator = _this._conditionValidators[index + 1];
                  } else {
                    _nextValidator = _this._conditionValidators[index][childIndex + 1];
                  }
                } else {
                  if (_this.validateChildConditions(conditionValidator)) {
                    _nextValidator = _this._conditionValidators[index + 1];
                  }
                }
              }
              if (!isDefined(_nextValidator)) {
                if (_this._respectSequence === "strictly_ordered") {
                  if (_this._andThenChecker != true) {
                    _this._validateAllConditions();
                  }
                } else {
                  if (_this.validateChildConditions(conditionValidator)) {
                    _this._validateAllConditions();
                  }
                }
              } else {
                if (_nextValidator.length === undefined || _nextValidator.length === 1) {
                  _nextValidator.register(childIndex + 1);
                } else {
                  if (_this.validateChildConditions(conditionValidator)) {
                    if (_nextValidator.length === undefined) {
                      _nextValidator.register();
                    } else if (_nextValidator.length > 1) {
                      if (_nextValidator.sequence_type === "unordered") {
                        for (var i = 0; i < _nextValidator.length; i++) {
                          _nextValidator[i].register(i);
                        }
                      } else if (_nextValidator.sequence_type === "ordered" || _nextValidator.sequence_type === "strictly_ordered") {
                        _nextValidator[0].register(0);
                      }
                    }
                  }
                }
                if (_this._respectSequence === "strictly_ordered") {
                  _this._currentEventname = conditionValidator[childIndex]._condition._details._name;
                  var _controller = Apxor.getController();
                  _controller.registerForEvent(APP_EVENT, _this.immediateEventChecker);
                  _controller.registerForEvent(CLIENT_EVENT, _this.immediateEventChecker);
                }
              }
            }
          }
        } else {
          if (isDefined(conditionValidator) && conditionValidator._isSatisfied) {
            console.log("indiv diff conditions");
            conditionValidator._eventTimes[conditionValidator._condition._details._name] = Date.now();
            // Check if previous validator is satisfied
            var _prevValidator2 = _this._conditionValidators[index - 1];
            // if (isDefined(prevValidator) && !prevValidator._isSatisfied) {
            //   // TODO: If current index is satisfied before previous one, do something
            //   //  either unregister all conditions or remove this item from ConfigLookup
            //   return;
            // }

            if (isDefined(_prevValidator2)) {
              if (_prevValidator2.length === undefined || _prevValidator2.length == 1) {
                if (!_prevValidator2._isSatisfied) {
                  return;
                }
              } else if (_prevValidator2.length > 1) {
                if (!_this.validateChildConditions(_prevValidator2)) {
                  return;
                }
              }
            }
            var _nextValidator2 = _this._conditionValidators[index + 1];
            if (!isDefined(_nextValidator2)) {
              // It means this is the last condition
              // Validate all conditions
              if (_this._respectSequence === "strictly_ordered") {
                if (_this._andThenChecker != true) {
                  _this._validateAllConditions();
                }
              } else {
                _this._validateAllConditions();
              }
            } else {
              var _nextValidator2$_cond;
              if (_nextValidator2 !== null && _nextValidator2 !== void 0 && (_nextValidator2$_cond = _nextValidator2._condition) !== null && _nextValidator2$_cond !== void 0 && _nextValidator2$_cond._timeEnabled) {
                var _nextValidator2$_cond2;
                if (((_nextValidator2$_cond2 = _nextValidator2._condition) === null || _nextValidator2$_cond2 === void 0 ? void 0 : _nextValidator2$_cond2._time.unit) != "session") {
                  var _nextValidator2$_cond3, _nextValidator2$_cond4;
                  var timeInMillisec = calculateTime(_nextValidator2._condition._time.unit, _nextValidator2._condition._time.value);
                  if (((_nextValidator2$_cond3 = _nextValidator2._condition) === null || _nextValidator2$_cond3 === void 0 ? void 0 : _nextValidator2$_cond3._type) == "didn't") {
                    _this._timerDidnt = setTimeout(function () {
                      if (!_this._receivedEventForKpi) {
                        console.log("making received event kpi false");
                        _this._receivedEventForKpi = false;
                        _nextValidator2._isSatisfied = true;
                        if (_nextValidator2._isSatisfied) {
                          _nextValidator2._satisfiedCount += 1;
                          var _conditionValidator = new ConditionValidator();
                          _nextValidator2._isSatisfied = _conditionValidator._compare(_nextValidator2._satisfiedCount, _nextValidator2._condition._count, _nextValidator2._condition._countOperator);
                          console.log("expected here");
                          if (_nextValidator2._isSatisfied) {
                            _nextValidator2._condition._occurredTime = Date.now();
                            var nextIndex = index + 1;
                            var upcomingValidator = _this._conditionValidators[nextIndex + 1];
                            if (!isDefined(upcomingValidator)) {
                              // this._receivedEventForKpi = false;
                              _this._validateAllConditions();
                            } else {
                              console.log("registering next condition");
                              upcomingValidator.register();
                            }
                            // ceInstance.validate(this._uuid, index);
                          }
                        }

                        ceInstance.unregisterFromEvent(generateKey(_nextValidator2._condition._eventType) + "___" + _nextValidator2._condition._details._name, _this._onReceiveEventForNoKpi);
                        _nextValidator2._triggered = false;
                      } else {
                        _this._receivedEventForKpi = false;
                      }
                    }, timeInMillisec);
                    console.log("expected here");
                    if (_this._across_sessions) {
                      var _timeInMillisec = calculateTime(_nextValidator2._condition._time.unit, _nextValidator2._condition._time.value);
                      var timeEnabled = _nextValidator2._condition._timeEnabled;
                      var condition_id = _nextValidator2._condition._id;
                      var cv = new ConditionValidator();
                      cv._persistSatisfiedConditions(_nextValidator2._condition._type, _nextValidator2._condition._details._name, Date.now(), _nextValidator2._condition._details._additionalInfo, _timeInMillisec, timeEnabled, condition_id);
                    }
                    console.log(_nextValidator2._condition._timeEnabled);
                    if (_nextValidator2._condition._eventCategory === "specific_event") {
                      ceInstance.registerForEvent(generateKey(_nextValidator2._condition._eventType) + "___" + _nextValidator2._condition._details._name, _this._onReceiveEventForNoKpi);
                      _this._unregisterValidatorNokpi = _nextValidator2;
                    } else {
                      _this.registerForGivenEventCategoryNOkpi(_nextValidator2);
                    }
                  } else if (((_nextValidator2$_cond4 = _nextValidator2._condition) === null || _nextValidator2$_cond4 === void 0 ? void 0 : _nextValidator2$_cond4._type) == "did") {
                    _this._receivedEventForKpi = false;
                    _this._nextValidator = _nextValidator2;
                    if (isDefined(_this._conditionValidators[index + 2]) && _this._across_sessions) {
                      _this._nextUpcomingValidator = _this._conditionValidators[index + 2];
                    }
                    _this._timerDid = setTimeout(function () {
                      if (!_this._receivedEventForKpi) {
                        _this._receivedEventForKpi = false;
                        ceInstance.unregisterFromEvent(generateKey(_nextValidator2._condition._eventType) + "___" + _nextValidator2._condition._details._name, _this._onReceiveEventForKpi);
                      } else {
                        _this._receivedEventForKpi = false;
                      }
                    }, timeInMillisec);
                    _this._kpinextValidator = conditionValidator;
                    _this.timeForKPI = timeInMillisec;
                    ceInstance.registerForEvent(generateKey(_nextValidator2._condition._eventType) + "___" + _nextValidator2._condition._details._name, _this._onReceiveEventForKpi);
                    _this._unregisterValidatorKPI = _nextValidator2;
                    console.log("error check");
                    if (_this._across_sessions) {
                      var _timeInMillisec2 = calculateTime(_nextValidator2._condition._time.unit, _nextValidator2._condition._time.value);
                      var _timeEnabled = _nextValidator2._condition._timeEnabled;
                      var _condition_id = _nextValidator2._condition._id;
                      var _cv = new ConditionValidator();
                      _cv._persistSatisfiedConditions(_nextValidator2._condition._type, _nextValidator2._condition._details._name, Date.now(), _nextValidator2._condition._details._additionalInfo, _timeInMillisec2, _timeEnabled, _condition_id);
                    }
                  }
                }
              } else {
                if (_nextValidator2.length > 0) {
                  if (_nextValidator2.sequence_type === "ordered" || _nextValidator2.sequence_type === "strictly_ordered") {
                    _nextValidator2[0].register(childIndex + 1);
                  } else {
                    var _iterator = _createForOfIteratorHelper(_nextValidator2),
                      _step;
                    try {
                      for (_iterator.s(); !(_step = _iterator.n()).done;) {
                        var validator = _step.value;
                        validator.register();
                      }
                    } catch (err) {
                      _iterator.e(err);
                    } finally {
                      _iterator.f();
                    }
                  }
                } else {
                  _nextValidator2.register();
                }
              }
              console.log("validating second condition");
              if (_this._respectSequence === "strictly_ordered") {
                _this._currentEventname = conditionValidator._condition._details._name;
                var _controller2 = Apxor.getController();
                _controller2.registerForEvent(APP_EVENT, _this.immediateEventChecker);
                _controller2.registerForEvent(CLIENT_EVENT, _this.immediateEventChecker);
              }
            }
          }
        }
      } else {
        // Validate all conditions
        _this._getSatisfiedConditionsFromStorageAndUpdate();
        console.log(_this._conditionValidators);
        _this._validateAllConditions();
      }
    });
    _defineProperty(this, "immediateEventChecker", function (event) {
      if (event && event.name != _this._currentEventname) {
        _this._andThenChecker = true;
        return;
      }
    });
    _defineProperty(this, "registerForGivenEventCategoryNOkpi", function (validator) {
      var ceInstance = new CE();
      var eventCategory = validator._condition._eventCategory;
      if (eventCategory === "apxor_event") {
        ceInstance.registerForEvent("apxor_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "customer_event") {
        ceInstance.registerForEvent("customer_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "any_event") {
        ceInstance.registerForEvent("any_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "campaign_event") {
        ceInstance.registerForEvent("campaign_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "survey_event") {
        ceInstance.registerForEvent("survey_event", _this._onReceiveEventForNoKpi);
      }
    });
    _defineProperty(this, "unRegisterForGivenEventCategoryNOkpi", function (validator) {
      var ceInstance = new CE();
      var eventCategory = validator._condition._eventCategory;
      if (eventCategory === "apxor_event") {
        ceInstance.unregisterFromEvent("apxor_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "customer_event") {
        ceInstance.unregisterFromEvent("customer_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "any_event") {
        ceInstance.unregisterFromEvent("any_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "campaign_event") {
        ceInstance.unregisterFromEvent("campaign_event", _this._onReceiveEventForNoKpi);
      } else if (eventCategory === "survey_event") {
        ceInstance.unregisterFromEvent("survey_event", _this._onReceiveEventForNoKpi);
      }
    });
    _defineProperty(this, "_onReceiveEventForNoKpi", function () {
      var _this$_unregisterVali, _this$_unregisterVali2;
      console.log("received event of nkpi");
      if (_this._timerDidnt) {
        console.log("clearing time out");
        _this._receivedEventForKpi = false;
        clearTimeout(_this._timerDidnt);
      }
      var ceInstance = new CE();
      // console.log
      _this._receivedEventForKpi = true;
      if (_this._across_sessions) {
        if (localStorage.getItem("apx_nokpi_triggerdetails") !== null) {
          localStorage.removeItem("apx_nokpi_triggerdetails");
        }
      }
      ceInstance.unregisterFromEvent(generateKey((_this$_unregisterVali = _this._unregisterValidatorNokpi) === null || _this$_unregisterVali === void 0 || (_this$_unregisterVali = _this$_unregisterVali._condition) === null || _this$_unregisterVali === void 0 ? void 0 : _this$_unregisterVali._eventType) + "___" + ((_this$_unregisterVali2 = _this._unregisterValidatorNokpi) === null || _this$_unregisterVali2 === void 0 || (_this$_unregisterVali2 = _this$_unregisterVali2._condition) === null || _this$_unregisterVali2 === void 0 || (_this$_unregisterVali2 = _this$_unregisterVali2._details) === null || _this$_unregisterVali2 === void 0 ? void 0 : _this$_unregisterVali2._name), _this._onReceiveEventForNoKpi);
    });
    _defineProperty(this, "_onReceiveEventForKpi", function () {
      var _this$_unregisterVali3, _this$_unregisterVali4, _this$_nextUpcomingVa;
      var ceInstance = new CE();
      console.log("configitem kpi check");
      _this._receivedEventForKpi = true;
      if (_this._timerDid) {
        clearTimeout(_this._timerDid);
      }
      var conditionValidator = new ConditionValidator();
      _this._nextValidator._satisfiedCount += 1;
      _this._nextValidator._isSatisfied = conditionValidator._compare(_this._nextValidator._satisfiedCount, _this._nextValidator._condition._count, _this._nextValidator._condition._countOperator);
      ceInstance.unregisterFromEvent(generateKey((_this$_unregisterVali3 = _this._unregisterValidatorKPI) === null || _this$_unregisterVali3 === void 0 || (_this$_unregisterVali3 = _this$_unregisterVali3._condition) === null || _this$_unregisterVali3 === void 0 ? void 0 : _this$_unregisterVali3._eventType) + "___" + ((_this$_unregisterVali4 = _this._unregisterValidatorKPI) === null || _this$_unregisterVali4 === void 0 || (_this$_unregisterVali4 = _this$_unregisterVali4._condition) === null || _this$_unregisterVali4 === void 0 ? void 0 : _this$_unregisterVali4._details._name), _this._onReceiveEventForKpi);
      if (_this._across_sessions && (_this$_nextUpcomingVa = _this._nextUpcomingValidator) !== null && _this$_nextUpcomingVa !== void 0 && _this$_nextUpcomingVa._condition._timeBased) {
        var no_KPI_TriggerDetails = Apxor.getController().getFromStorage("apx_nokpi_triggerdetails");
        if (no_KPI_TriggerDetails === null || no_KPI_TriggerDetails === undefined) {
          no_KPI_TriggerDetails = [];
        } else {
          no_KPI_TriggerDetails = JSON.parse(no_KPI_TriggerDetails);
        }
        var objectPresenceChecker;
        var requiredObject;
        for (var i = 0; i < no_KPI_TriggerDetails.length; i++) {
          if (_this.no_KPI_TriggerDetails[i].id === _this._nextUpcomingValidator._condition._id) {
            objectPresenceChecker = true;
            requiredObject = no_KPI_TriggerDetails[i];
            break;
          }
        }
        var triggerObj;
        if (objectPresenceChecker) {
          requiredObject.satisfiedCount += 1;
        } else {
          var id = _this._nextValidator._condition._id;
          var type = _this._nextValidator._condition._type;
          var name = _this._nextValidator._condition._details._name;
          var additionalInfo = _this._nextValidator._condition._details._additionalInfo;
          triggerObj = {
            id: id,
            type: type,
            time: Date.now(),
            name: name,
            additionalInfo: additionalInfo,
            satisfiedCount: _this._nextValidator._condition._timeEnabled,
            timeBased: _this._nextValidator._condition._timeEnabled
            //finishTime: finishTime,
          };

          _this.no_KPI_TriggerDetails.push(triggerObj);
        }
      }
      if (_this._nextValidator._isSatisfied) {
        var upcomingValidator = _this._conditionValidators[_this.kpiIndex + 1];
        if (!isDefined(upcomingValidator)) {
          _this._validateAllConditions();
        } else {
          upcomingValidator.register();
        }
      }
    });
    _defineProperty(this, "_onReceiveEventForKPIAcrossSessions", function () {
      if (_this._acrossSessionsConditionIndex === _this._conditionValidators.length - 1) {
        _this._receivedEventForKpiAcrossSessions = true;
        var _isSatisfied = true;
        if (_isSatisfied) {
          if (_this._conditionValidators[_this._acrossSessionsConditionIndex]) {
            _this._conditionValidators[_this._acrossSessionsConditionIndex]._satisfiedCount = _this._acrossSessionsmatchingObject.satisfiedCount;
            _this._conditionValidators[_this._acrossSessionsConditionIndex]._isSatisfied = true;
            _this._validateAllConditions();
          }
        }
      } else {
        var no_KPI_TriggerDetails = Apxor.getController().getFromStorage("apx_nokpi_triggerdetails");
        if (no_KPI_TriggerDetails === null || no_KPI_TriggerDetails === undefined) {
          no_KPI_TriggerDetails = [];
        } else {
          no_KPI_TriggerDetails = JSON.parse(no_KPI_TriggerDetails);
        }
        var requiredObject;
        var objectPresenceChecker;
        for (var i = 0; i < no_KPI_TriggerDetails.length; i++) {
          if (no_KPI_TriggerDetails[i].id === _this._acrossSessionsConditionIndex) {
            objectPresenceChecker = true;
            requiredObject = no_KPI_TriggerDetails[i];
            break;
          }
        }
        if (objectPresenceChecker) {
          requiredObject.satisfiedCount = 1;
        }
        Apxor.getController().persistToStorage("apx_nokpi_triggerdetails", JSON.stringify(no_KPI_TriggerDetails));
        _this._conditionValidators[_this._acrossSessionsConditionIndex]._satisfiedCount = _this._acrossSessionsmatchingObject.satisfiedCount;
        _this._conditionValidators[_this._acrossSessionsConditionIndex]._isSatisfied = true;
        if (_this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._condition._timeEnabled) {
          var timeInMillisec = calculateTime(_this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._condition._time.unit, _this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._condition._time.value);
          var timeEnabled = _this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._condition._timeEnabled;
          var condition_id = _this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._condition._id;
          var satisfiedCount = _this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._satisfiedCount;
          var name = _this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._condition._details._name;
          var additionalInfo = _this._conditionValidators[_this._acrossSessionsConditionIndex + 1]._details._additionalInfo;
          var condition_validator = new ConditionValidator();
          condition_validator._persistSatisfiedConditions(_this._condition._type, name, Date.now(), additionalInfo, timeInMillisec, timeEnabled, condition_id, satisfiedCount);
        }
      }
    });
    _defineProperty(this, "_getSatisfiedConditionsFromStorageAndUpdate", function () {
      if (_this._across_sessions && _this._advanceConditionsChecker) {
        var matching_validator;
        var matchedIndex;
        var matchednestedIndex;
        var conditionType = "single";
        var _isSatisfied = false;
        var no_KPI_TriggerDetails = Apxor.getController().getFromStorage("apx_nokpi_triggerdetails");
        no_KPI_TriggerDetails = JSON.parse(no_KPI_TriggerDetails);
        console.log(no_KPI_TriggerDetails);
        if (no_KPI_TriggerDetails.length > 0) {
          var _iterator2 = _createForOfIteratorHelper(no_KPI_TriggerDetails),
            _step2;
          try {
            var _loop3 = function _loop3() {
              var trigger = _step2.value;
              console.log(trigger);
              var id_to_check = trigger["id"];
              var satifiedCount = trigger["satisfiedCount"];
              matching_validator = _this._conditionValidators.find(function (validator, index) {
                if ((validator === null || validator === void 0 ? void 0 : validator.length) === 1 || (validator === null || validator === void 0 ? void 0 : validator.length) === undefined) {
                  if (validator._condition._id === id_to_check) {
                    conditionType = "single";
                    matchedIndex = index;
                    return true;
                  }
                  // If the condition is a single condition, directly check the id
                } else if (validator.length > 0) {
                  // If the condition is a group, check if any individual condition has the id
                  var nestedIndex = validator.findIndex(function (individualCondition) {
                    return individualCondition._condition._id === id_to_check;
                  });
                  if (nestedIndex !== -1) {
                    // If id_to_check is found in a nested condition, store both indexes
                    console.log("Matching Condition Index:", index);
                    matchedIndex = index;
                    console.log("Nested Condition Index:", nestedIndex);
                    matchednestedIndex = nestedIndex;
                    conditionType = "group";
                    return true;
                  }
                }
                return false;
              });
              if (conditionType === "single" && matching_validator) {
                var condition_validator = new ConditionValidator();
                _isSatisfied = condition_validator._compare(satifiedCount, matching_validator._condition._count, matching_validator._condition._countOperator);
                var matchingValidatorIndex = _this._conditionValidators.findIndex(function (validator) {
                  var _validator$_condition;
                  return (validator === null || validator === void 0 || (_validator$_condition = validator._condition) === null || _validator$_condition === void 0 ? void 0 : _validator$_condition._id) === id_to_check;
                });
                if (matchingValidatorIndex === undefined) {
                  matchingValidatorIndex = matchedIndex;
                }
                if (_isSatisfied) {
                  _this._conditionValidators[matchingValidatorIndex]._isSatisfied = true;
                }
              } else if (conditionType === "group" && matching_validator) {
                var _condition_validator = new ConditionValidator();
                _isSatisfied = _condition_validator._compare(satifiedCount, matching_validator[matchednestedIndex]._condition._count, matching_validator[matchednestedIndex]._condition._countOperator);
                if (_isSatisfied) {
                  _this._conditionValidators[matchedIndex][matchednestedIndex]._isSatisfied = true;
                  console.log(_this._conditionValidators);
                }
              }
            };
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              _loop3();
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
        }
      }
    });
    _defineProperty(this, "terminationEvaluate", function (index) {
      if (index < 0) {
        return;
      }
      _this._validateAllGoalEvents();
    });
    _defineProperty(this, "_validateAllConditions", function () {
      var _window$ApxorRTM, _window$ApxorRTM2;
      var view_visibility = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      console.log("in validate all conditions");
      // Check If Audience, Validity is satisfied or not
      var userAttributes = Apxor.getController().getUserAttributes();
      var sessionAttributes = Apxor.getController().getSessionAttributes();
      if (!((_window$ApxorRTM = window.ApxorRTM) !== null && _window$ApxorRTM !== void 0 && _window$ApxorRTM.isBadgePresent && (_window$ApxorRTM2 = window.ApxorRTM) !== null && _window$ApxorRTM2 !== void 0 && _window$ApxorRTM2.badgesLists.includes(_this._uuid) && Apxor.getController().isBadgeTriggerSatisfied(_this._uuid))) {
        Apxor === null || Apxor === void 0 || Apxor.logEvent("apx_trigger_satisfied", {
          apx_nudge_type: _this._meta._type === "SURVEY" ? "survey" : "campaign",
          apx_nudge_id: _this._uuid,
          apx_nudge_name: _this._meta._name,
          apx_variant_code: _this._meta._isExperiment || _this._meta._only_context ? _this._meta._attr[APX_VARIANT_CODE] : "TG"
        });
      }
      if (!_this._validity.validate() || !_this._audience.validate(userAttributes, sessionAttributes) || !_this._overallconfig.validate() || !_this._screenbinding.validate()) {
        // eslint-disable-next-line no-unused-vars
        var apx_nudge_type = _this._meta._type === "SURVEY" ? "survey" : "campaign";
        if (!_this._overallconfig.retainedDaysValidated) {
          _this.logNonEligibleUserEvent("Retained day criteria not met");
          return;
        }
        if (!_this._overallconfig.retainedSessionValidated) {
          _this.logNonEligibleUserEvent("User session criteria not met");
          return;
        }
        if (_this._overallconfig.eventDoneInLT) {
          _this.logNonEligibleUserEvent("Event done in life time");
          return;
        }
        if (!_this._audience.userAttributesValidated) {
          _this.logNonEligibleUserEvent("User property filter not met");
          return;
        }
        if (!_this._audience.sessionAttributeValidated) {
          _this.logNonEligibleUserEvent("Session property filter not met");
          return;
        }
        if (_this._validity._not_in_specified_time) {
          _this.logNonEligibleUserEvent("Time limits check failed");
          return;
        }
        if (_this._validity._not_yet_active) {
          _this.logNonEligibleUserEvent("not in the scheduled time");
          return;
        }
        if (_this._validity._nudge_expired) {
          _this.logNonEligibleUserEvent("nudge expired");
          return;
        }
        return;
      }
      var length = _this._conditionValidators.length;
      var isSatisfied = length < 1;
      var combineOperator = "";
      if (length === 0) {
        isSatisfied = true;
      }
      for (var index = 0; index < length; index++) {
        var currentResult = void 0;
        var validator = _this._conditionValidators[index];
        if (validator.length > 1) {
          var combine_operator = validator[0]._condition._combineOperator;
          if (combine_operator === "AND") {
            currentResult = true;
          } else {
            currentResult = false;
          }
          for (var i = 0; i < validator.length; i++) {
            var _combine_operator = validator[0]._condition._combineOperator;
            if (_combine_operator === "AND") {
              currentResult = currentResult && validator[i]._isSatisfied;
            } else {
              currentResult = currentResult || validator[i]._isSatisfied;
            }
          }
        } else {
          currentResult = validator._isSatisfied;
        }
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
        if (validator.length > 1) {
          combineOperator = _this.groupCombineOperator;
        } else {
          combineOperator = validator._combineOperator;
        }
      }
      if (view_visibility === true) {
        isSatisfied = true;
      }
      if (isSatisfied) {
        var _window$ApxorRTM3, _window$ApxorRTM4;
        console.debug("onCondition satisfied");
        // Check if count reached it's maximum
        if (!_this._frequency.isFrequencyWithInLimits(_this._uuid)) {
          console.warn("Maximum limit reached", _this._uuid);
          if (Apxor.getController().isTestDevice()) {
            feedBackMessagePopUpCE("Maximum limit reached for campaign name ".concat(_this._meta._name));
            var closeButton = document.getElementById("close-button");
            var dismissCallback = function dismissCallback() {
              var modal_popup_container = document.getElementById("apx-container");
              modal_popup_container === null || modal_popup_container === void 0 || modal_popup_container.remove();
            };
            closeButton === null || closeButton === void 0 || closeButton.addEventListener("click", dismissCallback);
            window.setTimeout(dismissCallback, 20000);
          }
          return;
        }

        //logging event for view not found for test device
        if (!((_window$ApxorRTM3 = window.ApxorRTM) !== null && _window$ApxorRTM3 !== void 0 && _window$ApxorRTM3.isBadgePresent && (_window$ApxorRTM4 = window.ApxorRTM) !== null && _window$ApxorRTM4 !== void 0 && _window$ApxorRTM4.badgesLists.includes(_this._uuid) && Apxor.getController().isBadgeTriggerSatisfied(_this._uuid))) {
          var _apx_nudge_type = _this._meta._type === "SURVEY" ? "survey" : "campaign";
          Apxor === null || Apxor === void 0 || Apxor.logEvent("apx_trigger_satisfied", {
            apx_nudge_type: _this._meta._type === "SURVEY" ? "survey" : "campaign",
            apx_nudge_id: _this._uuid,
            apx_nudge_name: _this._meta._name,
            apx_variant_code: _this._meta._isExperiment || _this._meta._only_context ? _this._meta._attr[APX_VARIANT_CODE] : "TG"
          }, false, "", _apx_nudge_type);
        }
        console.log("Dispatching event", _this._meta._type);
        if (_this._across_sessions) {
          localStorage.removeItem("apx_nokpi_triggerdetails");
        }
        var _iterator3 = _createForOfIteratorHelper(_this._conditionValidators),
          _step3;
        try {
          for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
            var _validator3 = _step3.value;
            if ((_validator3 === null || _validator3 === void 0 ? void 0 : _validator3.length) === 1 || (_validator3 === null || _validator3 === void 0 ? void 0 : _validator3.length) === undefined) {
              _validator3._isSatisfied = false;
              _validator3._satisfiedCount = 0;
            } else {
              var _iterator4 = _createForOfIteratorHelper(_validator3),
                _step4;
              try {
                for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                  var childValidator = _step4.value;
                  childValidator._isSatisfied = false;
                  childValidator._satisfiedCount = 0;
                }
              } catch (err) {
                _iterator4.e(err);
              } finally {
                _iterator4.f();
              }
            }
          }
          //this._singleConditionalValidator = new ConditionValidator();
        } catch (err) {
          _iterator3.e(err);
        } finally {
          _iterator3.f();
        }
        console.log("got cv well");
        _this._singleConditionalValidator._unregisterAllConditions(_this._conditionValidators);
        _this._conditionValidators = [];
        _this.handleConditions(_this._conditionsFromConfig, _this._conditionsLength);
        console.log(_this._conditionValidators);
        if (_this._meta._only_context === true) {
          var _apx_nudge_type2 = _this._meta._type === "SURVEY" ? "survey" : "campaign";
          Apxor.logEvent(APX_CONTEXT_EVALUATED, _objectSpread2(_objectSpread2({}, _this._meta._attr), {}, {
            message_name: _this._meta._name,
            id: _this._uuid
          }), false, "", _apx_nudge_type2);
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
          var apx_nudge_type = _this._meta._type === "SURVEY" ? "survey" : "campaign";
          Apxor.logEvent(APX_CONTEXT_EVALUATED, _objectSpread2(_objectSpread2({}, _this._meta._attr), {}, {
            message_name: _this._meta._name,
            id: _this._uuid
          }), false, "apxor", apx_nudge_type);
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
    _defineProperty(this, "validateChildConditions", function (validator) {
      var currentResult;
      var combine_operator = validator[0]._condition._combineOperator;
      if (combine_operator === "AND") {
        currentResult = true;
      } else {
        currentResult = false;
      }
      for (var i = 0; i < validator.length; i++) {
        var _combine_operator2 = validator[0]._condition._combineOperator;
        if (_combine_operator2 === "AND") {
          currentResult = currentResult && validator[i]._isSatisfied;
        } else {
          currentResult = currentResult || validator[i]._isSatisfied;
        }
      }
      return currentResult;
    });
    _defineProperty(this, "logNonEligibleUserEvent", function (reason) {
      var _this$_meta$_attr2;
      Apxor === null || Apxor === void 0 || Apxor.logEvent("apx_non_eligible_user", {
        apx_nudge_type: _this._meta._type === "SURVEY" ? "survey" : "campaign",
        apx_nudge_id: _this._uuid,
        apx_nudge_name: _this._meta._name,
        apx_variant_code: _this._meta._isExperiment || _this._meta._only_context ? (_this$_meta$_attr2 = _this._meta._attr) === null || _this$_meta$_attr2 === void 0 ? void 0 : _this$_meta$_attr2[APX_VARIANT_CODE] : "TG",
        apx_failure_type: "warn",
        apx_reason: reason
      });
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
      var childIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
      if (_this._configs[id]) {
        var configItem = _this._configs[id];
        configItem.evaluate(index, childIndex);
      }
    });
    _defineProperty(this, "getVariantCode", function (id) {
      if (_this._configs[id]) {
        var configItem = _this._configs[id];
        return configItem._variant_code;
      }
      return "";
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
      if (campiagnConfig != undefined) return campiagnConfig.getFrequencyCount();
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

  var APP_EVENT$1 = "APP_EVENT";
  var CLIENT_EVENT$1 = "CLIENT_EVENT";
  var Logger$b = window.ApxorLogger;
  var EventsListener = /*#__PURE__*/_createClass(function EventsListener() {
    var _this = this;
    _classCallCheck(this, EventsListener);
    _defineProperty(this, "_listeners", {});
    _defineProperty(this, "_buffer", []);
    _defineProperty(this, "_isEnabled", false);
    _defineProperty(this, "initialize", function () {
      var controller = Apxor.getController();
      controller.registerForEvent(APP_EVENT$1, function (event) {
        return _this._onEvent(event, "AE");
      });
      controller.registerForEvent(CLIENT_EVENT$1, function (event) {
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
      console.log("register To Event");
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
      Logger$b.debug("Listeners list: ", _this._listeners);
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
      _this._notifyListeners(event, "any_event", type);
      if ((event === null || event === void 0 ? void 0 : event.loggedBy) === "apxor") {
        console.log("notifying apxor event listeners");
        _this._notifyListeners(event, "apxor_event", type);
      } else if ((event === null || event === void 0 ? void 0 : event.loggedBy) === "customer") {
        _this._notifyListeners(event, "customer_event", type);
      }
      if ((event === null || event === void 0 ? void 0 : event.apx_nudge_type) === "campaign") {
        _this._notifyListeners(event, "campaign_event", type);
      } else if ((event === null || event === void 0 ? void 0 : event.apx_nudge_type) === "survey") {
        _this._notifyListeners(event, "survey_event", type);
      }
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
        Logger$b.debug("Notifying listeners for event: " + event + ", " + key, _this._listeners);
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

  var Logger$c = window.ApxorLogger;
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
          Logger$c.info("QE Initialized..");
        }
      });
      /**
       * Parses the given configuration
       *
       * @param config
       */
      _defineProperty(this, "parse", function (config) {
        if (!_this._check()) {
          Logger$c.warn("Must call init first. Unable to proceed");
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
        var childIndex = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : -1;
        if (!_this._check()) {
          return;
        }
        _this._configLookup.validate(id, index, childIndex);
      });
      _defineProperty(this, "getVariantCode", function (id) {
        return _this._configLookup.getVariantCode(id);
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
        console.log("registered event", event);
        _this._eventsListener.registerToEvent(event, callback);
      });
      _defineProperty(this, "unregisterFromEvent", function (event, callback) {
        console.log("in unregister");
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
          Logger$c.error("Can not create the frequency count object:" + e);
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

  window.ceVersion = 180;
  try {
    if (exports !== undefined || exports !== null) {
      exports["default"] = CE;
      module.exports = exports["default"];
    }
  } catch (e) {}

  return CE;

})));
