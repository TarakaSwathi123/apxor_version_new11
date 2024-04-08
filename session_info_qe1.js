!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("apxor")):"function"==typeof define&&define.amd?define(["apxor"],e):(t=t||self)["apxor-qe"]=e(t.Apxor)}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function n(t){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?e(Object(i),!0).forEach((function(e){s(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):e(Object(i)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}function i(t){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,c(i.key),i)}}function a(t,e,n){return e&&o(t.prototype,e),n&&o(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function c(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e||"default");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d=window.ApxorLogger,v=function(t){return void 0!==t&&!function(t){return null===t}(t)},h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function f(t,e){return Array.from(e).map((function(e,n){return String.fromCharCode(e^function(t,e){return t.charCodeAt(Math.floor(e%t.length))}(t,n))})).join("")}var p=function(t,e){return f(t,e=function(t){var e,n,i,r,o,a,s=0,u=[];if(!t)return t;t+="";do{e=(a=h.indexOf(t.charAt(s++))<<18|h.indexOf(t.charAt(s++))<<12|(r=h.indexOf(t.charAt(s++)))<<6|(o=h.indexOf(t.charAt(s++))))>>16&255,n=a>>8&255,i=255&a,u.push(e),64!==r&&(u.push(n),64!==o&&u.push(i))}while(s<t.length);return u}(e))},g=function(t){switch(t){case"app_event":return"AE";case"client_event":return"CE";case"activity_time":case"activity_event":return"AE"}return"Unknown"},y=function(t){return t.toUpperCase()},_=function(t,e,n){switch(n){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;case"NEQ":return t!==e;case"R":return m(e).test(t);default:return!1}},m=function(t){var e=t.replace(/.*\/([gimuy]*)$/,"$1");e===t&&(e="");var n=e?t.replace(new RegExp("^/(.*?)/"+e+"$"),"$1"):t;return new RegExp(n,e)},b=function(){var t=new Date;return t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()},w=function(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t||!e||!n)return!1;var r=n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),o=e.replace(new RegExp(r,"g"),"(.+)"),a=i?"^".concat(o):"".concat(o,"$"),s=new RegExp(a);return s.test(t)};function E(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,i=arguments.length>3?arguments[3]:void 0,r=arguments.length>4?arguments[4]:void 0,o=A(t,e);if(o){var a=function(){if(F(o)){return function(t){return x(t)}(o)}return d.info("Invalid target element. Width and height are 0 for element: ".concat(t,". Can't show tooltip")),!1};return a()}return n?(d.info("Not found yet. Rechecking the DOM."),T(r,i,t,e)):(d.info("Element with selector:".concat(t," not found.")),!1)}function T(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",r=setInterval((function(){var e=A(n,i);if(e){clearInterval(r);!function(){if(F()){x()}else d.info("Invalid target element. Width and height are 0 for element: ".concat(n,". Can't show tooltip"))}()}else(t-=1)<=0&&(clearInterval(r),console.warn("Element with selector:".concat(n," not found.")))}),e)}var A=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=document.getElementById(t);if(!i)try{i=document.querySelector(t)}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}(i||(i=O(t)),!i&&n.length>0)&&(i=null===(e=document.getElementById(n))||void 0===e||null===(e=e.contentWindow)||void 0===e||null===(e=e.document)||void 0===e?void 0:e.querySelector(t));return i},O=function(t){var e=t.indexOf("svg");-1!==e&&(t=t.substring(0,e)+"svg:svg");try{return document.HInh(t,document,(function(t){return"svg"===t?"http://www.w3.org/2000/svg":null}),XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}return null};function F(t){try{var e=t.getBoundingClientRect();if(0===e.width||0===e.height)return!1}catch(t){return!1}return!0}function x(t){var e,n,i,r;return!!(n=(e=t).offsetHeight,i=e.offsetWidth,(r=e.getBoundingClientRect()).left>=-i&&r.top>=-n&&r.right<=(window.innerWidth||document.documentElement.clientWidth)+i&&r.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n)}var S=function(t){var e='\n        <style> \n          .apx-container{\n            padding:10px;\n          }\n        </style>\n        <div id="apx-innerElement" class="apx-container">\n              <div id="close-button" style="cursor: pointer;position:absolute;top:9px;right:9px;"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>\n                </svg>\n              </div>\n              <div style="font-family: inherit;font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;\n              color: #FFFFFF; display: flex; gap: 12px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />\n</svg><div style = "align-self: center;padding-right:20px;">'.concat(t,"</div></div>\n        </div>\n      "),n=document.createElement("div");n.style="\n        z-index:99999999;\n        background:#16202f;\n        position:fixed;\n        top:1%;\n        right:1%;\n        border-radius: 12px;\n      ",n.innerHTML=e,n.id="apx-container",document.body.appendChild(n)},L=window.ApxorLogger,D=a((function e(){var n=this;r(this,e),s(this,"BudT","ALL"),s(this,"qufD",[]),s(this,"PTIF",[]),s(this,"userAttributesValidated",!0),s(this,"sessionAttributeValidated",!0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(n.BudT=t.audience.audience_type,n.qufD=t.audience.attributes.user,n.PTIF=t.audience.attributes.session,!Array.isArray(n.qufD)||!Array.isArray(n.PTIF))return L.error("No attributes"),!1}catch(t){return L.error(t),!1}return!0})),s(this,"validate",(function(e,i){var r=!0;"FTU"===n.BudT&&(r=t.getController().getSessionInfo().is_first_session);var o=n.uMZD(e,n.qufD),a=n.uMZD(i,n.PTIF);return o||(n.userAttributesValidated=!1),a||(n.sessionAttributeValidated=!1),r&&o&&a})),s(this,"uMZD",(function(t,e){var n=e.length,i=!0;try{for(var r,o=function(){var n=e[a];if(void 0===t[n.name]||!1===i)return{v:!1};var r=n.operator,o=n.type,s=n.value.map((function(t){if("s"===o)return t;if("l"===o)return parseInt(t);if("f"===o)return parseFloat(t);if("b"===o)switch(t){case"true":return!0;case"false":return!1;default:return t}})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return"s"===o?t="".concat(t):"l"===o?t=parseInt(t):"f"===o?t=parseFloat(t):"b"===o&&(t=!!t),_(t,e,r)}))}));i=i&&u},a=0;a<n;a++)if(r=o())return r.v}catch(t){L.error(t),i=!1}return i}))})),I=window.ApxorLogger,C=a((function e(){var n=this;r(this,e),s(this,"bApF",0),s(this,"YoTd",0),s(this,"sPlR","SESSION"),s(this,"eNPe",0),s(this,"Qpat",0),s(this,"ibko",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.bTtv=t._id,n.Vyic=t.meta,n.bApF=t.frequency.count,-1===n.bApF&&(n.bApF=1e3),n.ibko=n.bApF,n.YoTd=t.frequency.time_interval,n.sPlR=t.frequency.validity,n.Qpat=t.frequency.ses_lmt,n._dayCount=t.frequency.day_lmt;var e=rt.getInstance().getQeState();if(!v(e)||!v(e[t._id]))return!0;if("SESSION"===n.sPlR){if(n.bApF=parseInt(n.bApF)-parseInt(e[t._id].SESSION),n.bApF<=0)return n.HyZJ("Session limit reached"),console.warn("Max count limit reached for session:"+t._id),!1}else{if("OVERALL"!==n.sPlR)return I.info("Invalid config."),!1;if(n.bApF=parseInt(n.bApF)-parseInt(e[t._id].OVERALL),n.bApF<=0)return n.HyZJ("Overall limit reached"),console.warn("Max count limit reached for overall:"+t._id),!1}}catch(t){return I.error(t),!1}return!0})),s(this,"mvSg",(function(){n.bApF=n.bApF-1})),s(this,"getFrequencyCount",(function(){return n.bApF})),s(this,"pYId",(function(){"SESSION"===n.sPlR&&(n.bApF=n.ibko,I.info("Campaign Limit reset"))})),s(this,"ICrw",(function(t){try{if(n.bApF<=0)return"OVERALL"===n.sPlR?n.HyZJ("Overall limit reached"):"SESSION"===n.sPlR&&n.HyZJ("Session limit reached"),!1;var e=rt.getInstance().getQeState();if(!v(e)||!v(e[t]))return!0;if(0!==n.Qpat)if(parseInt(n.Qpat)-parseInt(e[t].SESSION)<=0)return n.HyZJ("Session limit reached"),!1;if(0!==n._dayCount){var i,r=b();if(parseInt(n._dayCount)-parseInt((null===(i=e[t])||void 0===i?void 0:i.DATES[r])||0)<=0)return n.HyZJ("Day limit reached"),!1}}catch(t){n.HyZJ("Error validating the frequency: ".concat(t)),I.error("Error validating the frequency:"+t)}return!0})),s(this,"HyZJ",(function(e){var i;null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===n.Vyic.type?"survey":"campaign",apx_nudge_id:n.bTtv,apx_nudge_name:n.Vyic.name,apx_variant_code:n.Vyic.isExperiment||n.Vyic.only_context?null===(i=n.Vyic.attr)||void 0===i?void 0:i.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:e})}))})),Y=a((function t(){var e=this;r(this,t),s(this,"EtJK",""),s(this,"BudT",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,i;e.EtJK=t.meta.name,e.BudT=t.meta.type,e._only_context=t.meta.only_context,e._attr=(null===(n=t.meta)||void 0===n?void 0:n.attr)||{},e._isExperiment=null===(i=t.meta)||void 0===i?void 0:i.isExperiment}catch(t){return window.ApxorLogger.error(t),!1}return!0}))})),J=window.ApxorLogger,q=a((function t(){var e=this;r(this,t),s(this,"EAsD",-1),s(this,"qrfI",-1),s(this,"abLt",-1),s(this,"gGsA",-1),s(this,"EdgM",!1),s(this,"_nudge_expired",!1),s(this,"_not_yet_active",!1),s(this,"_not_in_specified_time",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(isNaN(Date.parse(t.validity.start_date))||isNaN(Date.parse(t.validity.end_date)))return J.error("Not valid dates"),!1;if(e.EAsD=Date.parse(t.validity.start_date),e.qrfI=Date.parse(t.validity.end_date),v(t.at_specific_time)&&(e.EdgM=t.at_specific_time,e.EdgM&&v(t.time_limits))){var n=(new Date).toISOString().split("T")[0];if(e.abLt=Date.parse(n+"T"+t.time_limits.start_time+":00.000Z"),e.gGsA=Date.parse(n+"T"+t.time_limits.end_time+":00.000Z"),isNaN(e.abLt)||isNaN(e.gGsA))return J.error("Not valid times"),!1}}catch(t){return J.error(t),!1}return!0})),s(this,"validate",(function(){var t=Date.now();return t>e.EAsD&&t<e.qrfI?(!e.EdgM||t>=e.abLt&&t<=e.gGsA||(e._not_in_specified_time=!0),!e.EdgM||t>=e.abLt&&t<=e.gGsA):(t<e.EAsD?e._not_yet_active=!0:t>e.qrfI&&(e._nudge_expired=!0),!1)}))})),V=a((function t(){var e=this;r(this,t),s(this,"EtJK",""),s(this,"YIwY",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e.EtJK=t.name,e.YIwY=t.additional_info}catch(t){return!1}return!0}))})),N=a((function t(){var e=this;r(this,t),s(this,"HOPG",0),s(this,"RBdW",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.HOPG=Number(t.lower),e.RBdW=Number(t.upper),isNaN(e.HOPG)||isNaN(e.RBdW))return!1}catch(t){return!1}return!0}))})),P=a((function t(){var e=this;r(this,t),s(this,"zoAp",0),s(this,"jEkw",""),s(this,"quTc",""),s(this,"OThl",new V),s(this,"LFDC",new N),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.jEkw=t.event_type,e.quTc=t.activity,e.OThl.parse(t.details)&&e.LFDC.parse(t.time_bounds)}catch(t){return!1}}))})),Z=window.ApxorLogger,j=a((function t(){var e=this;r(this,t),s(this,"zoAp",0),s(this,"qlFP",-1),s(this,"bApF",0),s(this,"JhKW",""),s(this,"quTc",""),s(this,"jEkw",""),s(this,"LFDC",new N),s(this,"OThl",new V),s(this,"eNNu",new P),s(this,"UnPo","AND"),s(this,"UykW",!1),s(this,"BudT",void 0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.qlFP=t.sequence,e.bApF=t.count_config.count,e.JhKW=t.count_config.operator,e.quTc=t.activity,e.jEkw=t.event_type,e.UnPo=t.combine_operator,e.BudT=t.type,e.OThl.parse(t.details)&&e.eNNu.parse(t.trigger)&&e.LFDC.parse(t.time_bounds)}catch(t){return Z.error(t),!1}}))})),k=window.ApxorLogger,B=a((function t(){var e=this;r(this,t),s(this,"bApF",0),s(this,"JhKW",""),s(this,"jEkw",""),s(this,"LFDC",new N),s(this,"OThl",new V),s(this,"UnPo","AND"),s(this,"parse",(function(t){try{return e.bApF=t.count_config.count,e.JhKW=t.count_config.operator,e.jEkw=t.event_type,e.UnPo=t.combine_operator,e.OThl.parse(t.details)&&e.LFDC.parse(t.time_bounds)}catch(t){return k.error(t),!1}}))})),G=window.ApxorLogger,K=function(){function e(){var n=this;r(this,e),s(this,"CRJY",0),s(this,"bTtv",""),s(this,"adZb",new j),s(this,"DXWl",new B),s(this,"BpTg",!1),s(this,"JEFv",!1),s(this,"Gzxq",0),s(this,"UnPo","AND"),s(this,"NslX","OR"),s(this,"zFJU",-1),s(this,"zAjp",[]),s(this,"OEnn",{}),s(this,"fjci",!1),s(this,"initialize",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(n.bTtv=i,n.Gzxq=r,n.zAjp=a,"termination"===s&&""!==s){n.DXWl.parse(e);return n.NslX=n.DXWl.UnPo,n.BYLJ(),!0}var u=n.adZb.parse(e);if(u){if(n.UnPo=n.adZb.UnPo,n.adZb.UykW){var l=n.adZb.OThl.EtJK;"APX_PAGE_OPENED"===l&&(l=n.adZb.OThl.YIwY.navigation_id,l=v(l)?l:n.adZb.OThl.EtJK),n.zFJU=t.getController().getEventCount(l);var c=n.adZb.bApF,d=n.adZb.JhKW;if(n.JEFv=n.eEoA(n.zFJU-1,c,d,!1),n.BpTg=n.JEFv,n.JEFv&&"APX_PAGE_OPENED"===n.adZb.OThl.EtJK)return!0}return o&&0!==r||n.yeMo(),!0}return!1})),s(this,"yeMo",(function(){var t,e=n.adZb,i=e.eNNu,r=rt.getInstance();"app_start"===i.jEkw?(n.BpTg=!0,r.registerForEvent(g(e.jEkw)+"___"+e.OThl.EtJK,n.gWcX)):r.registerForEvent(g(e.jEkw)+"___"+i.OThl.EtJK,n.gWcX),null!==(t=window.ApxorRTM)&&void 0!==t&&t.badgesLists.includes(n.bTtv)&&r.registerForEvent(g(e.jEkw)+"___"+"apxor-badge-container-".concat("-".concat(n.bTtv).replaceAll(" ","").replace(/[^\w\s]/gi,"")),n.gWcX)})),s(this,"BYLJ",(function(){var t=n.DXWl,e=rt.getInstance();n.BpTg=!0,e.registerForEvent(g(t.jEkw)+"___"+t.OThl.EtJK,n.Iamm)})),s(this,"gKbd",(function(t,e,i,r){var o,a=(Date.now()-n.OEnn[e])/1e3;(null===(o=n.adZb)||void 0===o||null===(o=o.OThl)||void 0===o||null===(o=o.YIwY)||void 0===o?void 0:o.time)/1e3>a&&n._displayCampaign(i)})),s(this,"Lvfd",(function(t,e,i,r){var o,a;n.fjci=!0;var s=Date.now(),u=null===(o=n.adZb)||void 0===o||null===(o=o.eNNu)||void 0===o?void 0:o.OThl.EtJK,l=(s-n.OEnn[u])/1e3,c=null===(a=n.adZb)||void 0===a||null===(a=a.OThl)||void 0===a||null===(a=a.YIwY)||void 0===a?void 0:a.time;(c/=1e3)>l&&n._displayCampaign(i)})),s(this,"gWcX",(function(e,i,r,o){var a,s,u=rt.getInstance();if(n.BpTg){if(null!==(a=window.ApxorRTM)&&void 0!==a&&a.isBadgePresent&&null!==(s=window.ApxorRTM)&&void 0!==s&&s.badgesLists.includes(n.bTtv)&&t.getController().isBadgeTriggerSatisfied(n.bTtv))return n.JEFv=!0,n.adZb.zoAp=r,void u.validate(n.bTtv,n.Gzxq);g(n.adZb.jEkw)===e&&n.tFLj(r-n.adZb.eNNu.zoAp,n.adZb.LFDC)&&n.adZb.OThl.EtJK===i&&n.racH(n.adZb.OThl.YIwY,o)&&(n.CRJY+=1,n.JEFv=n.eEoA(n.CRJY,n.adZb.bApF,n.adZb.JhKW),n.JEFv&&(n.adZb.zoAp=r,u.validate(n.bTtv,n.Gzxq)))}else if(n.BpTg=n.SCuh(e,i,r,o),n.BpTg){var l=n.adZb,c=l.eNNu;if(c.zoAp=r,"activity_time"===(null==l?void 0:l.jEkw)){var d,v,h,f=null==l||null===(d=l.OThl)||void 0===d||null===(d=d.YIwY)||void 0===d?void 0:d.time;(null==l||null===(v=l.OThl)||void 0===v||null===(v=v.YIwY)||void 0===v?void 0:v.nkpi.length)>0&&(setTimeout((function(){n.fjci||(n.JEFv=!0,n.JEFv&&(n.CRJY+=1,n.JEFv=n.eEoA(n.CRJY,n.adZb.bApF,n.adZb.JhKW),n.JEFv&&(n.adZb.zoAp=r,u.validate(n.bTtv,n.Gzxq)))),l.OThl.YIwY.nkpi.map((function(t){u.unregisterFromEvent(y(l.OThl.YIwY.et)+"___"+t,n)}))}),f),l.OThl.YIwY.nkpi.map((function(t){u.registerForEvent(y(l.OThl.YIwY.et)+"___"+t,n.Lvfd)}))),(null==l||null===(h=l.OThl)||void 0===h||null===(h=h.YIwY)||void 0===h?void 0:h.kpi.length)>0&&(setTimeout((function(){l.OThl.YIwY.kpi.map((function(t){u.unregisterFromEvent(y(l.OThl.YIwY.et)+"___"+t,n)}))}),f),l.OThl.YIwY.kpi.map((function(t){t===l.eNNu.OThl.EtJK?(u.unregisterFromEvent(g(c.jEkw)+"___"+c.OThl.EtJK,n),u.registerForEvent(y(l.OThl.YIwY.et)+"___"+t,n.gKbd)):u.registerForEvent(y(l.OThl.YIwY.et)+"___"+t,n.Lvfd)})))}else u.unregisterFromEvent(g(c.jEkw)+"___"+c.OThl.EtJK,n),u.registerForEvent(g(l.jEkw)+"___"+l.OThl.EtJK,n);n.OEnn[i]=Date.now()}})),s(this,"Iamm",(function(t,e,i,r){var o=rt.getInstance();g(n.DXWl.jEkw)===t&&n.tFLj(i,n.DXWl.LFDC)&&n.DXWl.OThl.EtJK===e&&n.racH(n.DXWl.OThl.YIwY,r)&&(n.CRJY+=1,n.JEFv=n.eEoA(n.CRJY,n.DXWl.bApF,n.DXWl.JhKW),n.JEFv&&(n.DXWl.zoAp=i,o.validateForTermination(n.bTtv,n.Gzxq)))})),s(this,"SCuh",(function(t,e,i,r){var o=n.adZb.eNNu;return g(o.jEkw)===t&&o.OThl.EtJK===e&&n.tFLj(i,o.LFDC)&&n.racH(o.OThl.YIwY,r)})),s(this,"tFLj",(function(t,e){var n=Math.ceil(t);return n>e.HOPG&&n<e.RBdW})),s(this,"eEoA",(function(t,e,i){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];switch(r&&n.adZb.UykW&&(t+=n.zFJU),i){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;default:return!1}})),s(this,"racH",(function(t,e){var n=!0;try{var r,o=function(){if(!1===n)return{v:!1};if("object"===i(t[a])){var r,o=t[a].op,s=t[a].t;if("s"===s)r=t[a].val;else if("l"===s||"f"===s)r=parseFloat(t[a].val);else if("b"===s)switch(t[a].val){case"true":r=!0;break;case"false":r=!1;break;default:r=t[a].val}var u=(Array.isArray(e[a])?e[a]:[e[a]]).some((function(t){return"s"===s?t="".concat(t):"l"===s?t=parseInt(t):"f"===s?t=parseFloat(t):"b"===s&&(t=!!t),_(t,r,o)}));n=n&&u}else n=n&&_(e[a],t[a],"EQ")};for(var a in t)if(r=o())return r.v}catch(t){G.error(t),n=!1}return n}))}return a(e,[{key:"_displayCampaign",value:function(t){var e=rt.getInstance();this.JEFv=!0,this.JEFv&&(this.CRJY+=1,this.JEFv=this.eEoA(this.CRJY,this.adZb.bApF,this.adZb.JhKW),this.JEFv&&(this.adZb.zoAp=t,e.validate(this.bTtv,this.Gzxq)))}}]),e}(),z=window.ApxorLogger,R=a((function e(){var n=this;r(this,e),s(this,"auGB",[]),s(this,"_ret_day",{}),s(this,"XvST",{}),s(this,"uZOd",!1),s(this,"EDPi",!1),s(this,"retainedDaysValidated",!0),s(this,"retainedSessionValidated",!0),s(this,"eventDoneInLT",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.auGB=t.overall_cfg.events,n._ret_day=t.overall_cfg.ret_day,n.XvST=t.overall_cfg.session,n.uZOd=t.overall_cfg.toggleRetDay,n.EDPi=t.overall_cfg.toggleSession}catch(t){return z.error(t),!1}return!0})),s(this,"validate",(function(){var e=parseInt(t.getController().getFromStorage("apx_retained_days")),i=parseInt(t.getController().getFromStorage("apx_retained_session"));if(n.uZOd&&!isNaN(e)&&!(e>=n._ret_day.from&&e<=n._ret_day.to))return n.retainedDaysValidated=!1,!1;if(n.EDPi&&!isNaN(i)&&!(i>=n.XvST.from&&i<=n.XvST.to))return n.retainedSessionValidated=!1,!1;try{for(var r=t.getController().getFromStorage("_apx_lt_count"),o=t.getSiteId(),a=JSON.parse((new TextDecoder).decode(function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),i=0;i<t.length;i++)n[i]=t.charCodeAt(i);return e}(p(o,r)))),s=0;s<n.auGB.length;s++){if(a[n.auGB[s].name.replace("'","").replace("’","")])return n.eventDoneInLT=!0,!1}}catch(t){z.error("Failed to validate the lt count:"+t)}return!0}))})),W=window.ApxorLogger,X=a((function t(){var e=this;r(this,t),s(this,"qufD",[]),s(this,"PTIF",[]),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.qufD=t.attributes.user,e.PTIF=t.attributes.session,!Array.isArray(e.qufD)||!Array.isArray(e.PTIF))return W.error("No attributes"),!1}catch(t){return W.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.uMZD(t,e.qufD)&&e.uMZD(n,e.PTIF)})),s(this,"uMZD",(function(t,e){var n=e.length,i=!0;try{for(var r,o=function(){var n=e[a];if(!t[n.name]||!1===i)return{v:!1};var r=n.operator,o=n.type,s=n.value.map((function(t){return"s"===o?t:"l"===o?parseInt(t):"f"===o?parseFloat(t):void 0})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return _(t,e,r)}))}));i=i&&u},a=0;a<n;a++)if(r=o())return r.v}catch(t){W.error(t),i=!1}return i}))})),H=a((function e(){var n=this;r(this,e),s(this,"qHJx",t.getController()),s(this,"type",""),s(this,"_duration_seconds",0),s(this,"wyUX",1),s(this,"parse",(function(t){try{var e,i,r;if(n.BudT=null===(e=t.terminate_info.time_based)||void 0===e?void 0:e.type,n._duration_seconds=null===(i=t.terminate_info)||void 0===i?void 0:i.time_based.duration_seconds,n.wyUX=null===(r=t.terminate_info.time_based)||void 0===r?void 0:r.days,n.UVxe(t._id))return n.qHJx.persistTerminationInfoLocally(t._id),!1}catch(t){return!1}return!0})),s(this,"UVxe",(function(t){var e,i=JSON.parse(n.qHJx.getFromStorage("apx_termination_ID"));if(!i[t]||null===(e=i[t])||void 0===e||!e.startDate)return!1;var r,o=new Date(i[t].startDate),a=new Date((r=new Date).getMonth()+"/"+r.getDate()+"/"+r.getFullYear()),s=parseInt((a-o)/864e5,10),u=function(){var t=new Date;return{hours:t.getHours(),mins:t.getMinutes()}}(),l=i[t].abLt;return s===n.wyUX&&u.hours>=l.hours||s>n.wyUX||i[t].goalAcheived}))})),Q=a((function t(){var e=this;r(this,t),s(this,"enable_goal_events",!1),s(this,"attributes",{}),s(this,"fjpm",new X),s(this,"hhVY",new H),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,i,r;if(e.enable_time_based=null==t||null===(n=t.terminate_info)||void 0===n?void 0:n.enable_time_based,e.enable_time_based&&!e.hhVY.parse(t))return!1;if(e.enable_goal_events=null==t||null===(i=t.terminate_info)||void 0===i?void 0:i.enable_goal_events,e.enable_attributes=null==t||null===(r=t.terminate_info)||void 0===r?void 0:r.enable_attributes,e.enable_attributes&&!e.fjpm.parse(t.terminate_info))return!1}catch(t){return window.ApxorLogger.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.fjpm.validate(t,n)}))})),M=a((function t(){var e=this;r(this,t),s(this,"CFyv",""),s(this,"uiGG",""),s(this,"kPnv",""),s(this,"yXrA",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.CFyv=null==t?void 0:t.screen_binding,!e.CFyv||(e.uiGG=null==t?void 0:t.binding.url,e.kPnv=null==t?void 0:t.binding.var,e.yXrA=null==t?void 0:t.binding.operator,!0)}catch(t){return window.ApxorLogger.error(t),!1}})),s(this,"validate",(function(){var t=e.uiGG,n=e.kPnv,i=e.yXrA,r=window.location.href;return!e.CFyv||("EQ"===i?t.includes(n)?!!w(r,t,n,!1):r===t:"SW"===i?t.includes(n)?!!w(r,t,n,!0):!!r.startsWith(t):void 0)}))})),U=window.ApxorLogger,$=a((function e(){var i=this;r(this,e),s(this,"zFvT",[]),s(this,"azDO",[]),s(this,"bTtv",""),s(this,"Vyic",new Y),s(this,"QHCL",new D),s(this,"sPlR",new q),s(this,"YNOa",new C),s(this,"cgjS",new R),s(this,"TGPH",new Q),s(this,"rKKb",new M),s(this,"VhWX",!1),s(this,"bpCZ",[]),s(this,"_variant_code",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e;if(!v(t._id))return U.error("No Id"),!1;if(!v(t.enabled)||!t.enabled)return U.error("Not enabled"),!1;if(!(i.Vyic.parse(t)&&i.sPlR.parse(t)&&i.YNOa.parse(t)&&i.QHCL.parse(t)&&i.cgjS.parse(t)&&i.TGPH.parse(t)&&i.rKKb.parse(t)))return!1;if(i._variant_code=i.Vyic._isExperiment||i.Vyic._only_context?null===(e=i.Vyic._attr)||void 0===e?void 0:e.apx_variant_code:"TG",!v(t.conditions)||!Array.isArray(t.conditions))return U.error("No valid conditions",t.conditions),!1;i.bTtv=t._id,i.VhWX=!!v(t.sequence_enabled)&&t.sequence_enabled,i.VhWX&&t.conditions.sort((function(t,e){return t.sequence<e.sequence}));var n=t.conditions,r=n.length,o=null==t?void 0:t.no_context_enabled;0===r&&o&&setTimeout((function(){i.rKbW()}),10);for(var a=function(){i.bpCZ=[];var t=n[s];if("didn't"===t.type){var e,r={trigger_key:t.trigger.details.name,no_kpi_array:null==t||null===(e=t.details)||void 0===e||null===(e=e.additional_info)||void 0===e?void 0:e.nkpi,condition_id:null==t?void 0:t._id,time_bounds:t.time_bounds.upper};i.bpCZ=[].concat(u(i.bpCZ),[r])}var o=new K;if(o.initialize(t,i.bTtv,s,i.VhWX,i.bpCZ)){i.zFvT.push(o);var a=(null==t?void 0:t.timeout)/(null==t?void 0:t.findinterval),l=(null==t?void 0:t.frameid)||"",c=null==t?void 0:t.url;window.location.href===c&&"view_visibility"===t.event_type&&!0===E(t.view_id,l,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,a)&&i.rKbW(!0),window.addEventListener("navigate",(function(e){var n=null==t?void 0:t.url;window.location.href===n&&"view_visibility"===t.event_type&&!0===E(t.view_id,l,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,a)&&i.rKbW(!0)}))}},s=0;s<r;s++)a();if(i.TGPH.enable_goal_events)for(var l=t.terminate_info.goal_events.events,c=l.length,d=0;d<c;d++){var h=new K;h.initialize(l[d],i.bTtv,d,!0,[],"termination")&&i.azDO.push(h)}return i.zFvT.length>0}catch(t){return U.error(t),!1}})),s(this,"HInh",(function(t){if(!(t<0))if(i.VhWX){var e=i.zFvT[t];if(v(e)&&e.JEFv){var n=i.zFvT[t-1];if(v(n)&&!n.JEFv)return;var r=i.zFvT[t+1];v(r)?r.yeMo():i.rKbW()}}else i.rKbW()})),s(this,"hbOy",(function(t){t<0||i.BDIq()})),s(this,"rKbW",(function(){var e,r,o=arguments.length>0&&void 0!==arguments[0]&&arguments[0],a=t.getController().getUserAttributes(),s=t.getController().getSessionAttributes();if(null!==(e=window.ApxorRTM)&&void 0!==e&&e.isBadgePresent&&null!==(r=window.ApxorRTM)&&void 0!==r&&r.badgesLists.includes(i.bTtv)&&t.getController().isBadgeTriggerSatisfied(i.bTtv)||null==t||t.logEvent("apx_trigger_satisfied",{apx_nudge_type:"SURVEY"===i.Vyic.BudT?"survey":"campaign",apx_nudge_id:i.bTtv,apx_nudge_name:i.Vyic.EtJK,apx_variant_code:i.Vyic._isExperiment||i.Vyic._only_context?i.Vyic._attr.apx_variant_code:"TG"}),!(i.sPlR.validate()&&i.QHCL.validate(a,s)&&i.cgjS.validate()&&i.rKKb.validate()))return i.cgjS.retainedDaysValidated?i.cgjS.retainedSessionValidated?i.cgjS.eventDoneInLT?void i.HyZJ("Event done in life time"):i.QHCL.userAttributesValidated?i.QHCL.sessionAttributeValidated?i.sPlR._not_in_specified_time?void i.HyZJ("Time limits check failed"):i.sPlR._not_yet_active?void i.HyZJ("not in the scheduled time"):i.sPlR._nudge_expired?void i.HyZJ("nudge expired"):void 0:void i.HyZJ("Session property filter not met"):void i.HyZJ("User property filter not met"):void i.HyZJ("User session criteria not met"):void i.HyZJ("Retained day criteria not met");var u=i.zFvT.length,l=u<1,c="";0===u&&(l=!0);for(var d=0;d<u;d++){var v=i.zFvT[d],h=v.JEFv;if(""===c.trim())l=h;else switch(c){case"AND":l=l&&h;break;case"OR":l=l||h}c=v.UnPo}if(!0===o&&(l=!0),l){if(console.debug("onCondition satisfied"),!i.YNOa.ICrw(i.bTtv)){if(console.warn("Maximum limit reached",i.bTtv),t.getController().isTestDevice()){S("Maximum limit reached for campaign name ".concat(i.Vyic.EtJK));var f=document.getElementById("close-button"),p=function(){var t=document.getElementById("apx-container");null==t||t.remove()};null==f||f.addEventListener("click",p),window.setTimeout(p,2e4)}return}console.log("Dispatching event",i.Vyic.BudT),t.logEvent("apx_context_evaluated",n(n({apx_nudge_type:"SURVEY"===i.Vyic.BudT?"survey":"campaign",apx_nudge_id:i.bTtv,apx_nudge_name:i.Vyic.EtJK,apx_variant_code:i.Vyic._isExperiment||i.Vyic._only_context?i.Vyic._attr.apx_variant_code:"TG"},i.Vyic._attr),{},{message_name:i.Vyic.EtJK,id:i.bTtv})),t.getController().dispatchEvent(i.Vyic.BudT,{name:i.Vyic.BudT,additional_info:{uuid:i.bTtv,name:i.Vyic.EtJK}})}})),s(this,"BDIq",(function(){for(var e=i.azDO.length,r=e<1,o="",a=0;a<e;a++){var s=i.azDO[a],u=s.JEFv;if(""===o.trim())r=u;else switch(o){case"AND":r=r&&u;break;case"OR":r=r||u}o=s.NslX}r&&(console.log("Dispatching event",i.Vyic.BudT),t.getController().persistTerminationInfoLocally(i.bTtv),!0===i.Vyic._only_context&&t.logEvent("apx_context_evaluated",n(n({},i.Vyic._attr),{},{message_name:i.Vyic.EtJK,id:i.bTtv})),t.getController().dispatchEvent(i.Vyic.BudT,{name:i.Vyic.BudT,additional_info:{uuid:i.bTtv,name:i.Vyic.EtJK}}))})),s(this,"validateForTerminationAttributes",(function(){var e=t.getController().getUserAttributes(),n=t.getController().getSessionAttributes();return i.TGPH.validate(e,n)})),s(this,"mvSg",(function(){i.YNOa.mvSg()})),s(this,"getFrequencyCount",(function(){return i.YNOa.getFrequencyCount()})),s(this,"Nrsr",(function(){return i.YNOa.pYId()})),s(this,"HyZJ",(function(e){var n;null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===i.Vyic.BudT?"survey":"campaign",apx_nudge_id:i.bTtv,apx_nudge_name:i.Vyic.EtJK,apx_variant_code:i.Vyic._isExperiment||i.Vyic._only_context?null===(n=i.Vyic._attr)||void 0===n?void 0:n.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:e})}))})),tt=a((function t(){var e=this;r(this,t),s(this,"mQOv",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{configs:[]};if(v(t)&&v(t.configs)){var n=t.configs;if(!Array.isArray(n))return;n.sort((function(t,e){var n,i;return(null!==(n=t.prio)&&void 0!==n?n:-1)-(null!==(i=e.prio)&&void 0!==i?i:-1)}));for(var i=0;i<n.length;i++){var r=n[i],o=r._id,a=new $;a.parse(r)?e.mQOv[o]=a:console.warn("Failed to parse cfg",o)}}})),s(this,"validate",(function(t,n){e.mQOv[t]&&e.mQOv[t].HInh(n)})),s(this,"getVariantCode",(function(t){return e.mQOv[t]?e.mQOv[t]._variant_code:""})),s(this,"validateForTermination",(function(t,n){e.mQOv[t]&&e.mQOv[t].hbOy(n)})),s(this,"validateForTerminationAttributes",(function(t){return!!e.mQOv[t]&&e.mQOv[t].validateForTerminationAttributes()})),s(this,"mvSg",(function(t){e.mQOv[t].mvSg()})),s(this,"getFrequencyCount",(function(t){var n=e.mQOv[t];if(null!=n)return n.getFrequencyCount()})),s(this,"resetFrequencyCounts",(function(){var t=e.mQOv;for(var n in t)t[n].Nrsr()})),s(this,"DXni",(function(t){try{if(e.mQOv){var n=e.mQOv[t];if(n&&n.Vyic)return n.Vyic}}catch(t){console.log("Error in getting the campaign meta ".concat(t))}return{}}))})),et=window.ApxorLogger,nt=a((function e(){var n=this;r(this,e),s(this,"KAnz",{}),s(this,"XmEG",[]),s(this,"zIrf",!1),s(this,"initialize",(function(){var e=t.getController();e.registerForEvent("APP_EVENT",(function(t){return n.STqY(t,"AE")})),e.registerForEvent("CLIENT_EVENT",(function(t){return n.STqY(t,"CE")}))})),s(this,"GnUu",(function(){for(var t in n.XmEG)n.isbM(t.event,t.key,t.type);n.zIrf=!0})),s(this,"QvYq",(function(t,e){var i;"function"==typeof e&&((i=n.KAnz[t]?n.KAnz[t]:[]).push(e),n.KAnz[t]=i,et.debug("Listeners list: ",n.KAnz))})),s(this,"unregisterFromEvent",(function(t,e){if(n.KAnz[t]){for(var i=n.KAnz[t],r=[],o=0;o<i.length;o++){var a=i[o];a!==e&&r.push(a)}n.KAnz[t]=r}})),s(this,"STqY",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AE",i=e+"___"+t.name;n.isbM(t,i,e)})),s(this,"isbM",(function(e,i,r){if(n.zIrf){if(et.debug("Notifying listeners for event: "+e+", "+i,n.KAnz),n.KAnz[i])for(var o=n.KAnz[i],a=t.getController().getSDKRunningTimeInSec(),s=0;s<o.length;s++){(0,o[s])(r,e.name,a,e.additional_info)}}else n.XmEG.push({event:e,key:i,type:r})}))})),it=window.ApxorLogger,rt=function(){function e(){var n=this;return r(this,e),s(this,"aWVG",!1),s(this,"XqBL",null),s(this,"qcGr",b()),s(this,"OYsv",new nt),s(this,"Gyye",t.getSiteId()),s(this,"pnYs",{}),s(this,"getQeState",(function(){try{var e=t.getController().getFromStorage("qe_state");return e?JSON.parse(p(n.Gyye,e)):(n.pnYs={},n.setQeState())}catch(t){return n.pnYs={},n.setQeState()}})),s(this,"setQeState",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{t.getController().persistToStorage("qe_state",n.pnYs,!0)}catch(i){""===e?n.pnYs={}:n.pnYs[e]={SESSION:0,OVERALL:0,DATES:{}},t.getController().persistToStorage("qe_state",n.pnYs,!0)}return n.pnYs})),s(this,"initialize",(function(){n.aWVG||(n.aWVG=!0,n.XqBL=new tt,n.OYsv.initialize(),n.pnYs=n.getQeState(),it.info("QE Initialized.."))})),s(this,"parse",(function(t){n.mOww()?(n.XqBL.parse(t),n.OYsv.GnUu()):it.warn("Must call init first. Unable to proceed")})),s(this,"validate",(function(t,e){n.mOww()&&n.XqBL.validate(t,e)})),s(this,"getVariantCode",(function(t){return n.XqBL.getVariantCode(t)})),s(this,"validateForTermination",(function(t,e){n.mOww()&&n.XqBL.validateForTermination(t,e)})),s(this,"validateForTerminationAttributes",(function(t,e){return n.XqBL.validateForTerminationAttributes(t,e)})),s(this,"updateCount",(function(t){try{v(n.pnYs[t])||n.createObjConfig(t),n.incrementFrequencies(t),n.setQeState(t),n.XqBL.mvSg(t)}catch(t){console.log("Could not update the count config:".concat(t))}})),s(this,"resetFrequencyCounts",(function(){n.XqBL.resetFrequencyCounts()})),s(this,"getFrequencyCount",(function(t){return n.XqBL.getFrequencyCount(t)})),s(this,"registerForEvent",(function(t,e){n.OYsv.QvYq(t,e)})),s(this,"unregisterFromEvent",(function(t,e){n.OYsv.unregisterFromEvent(t,e)})),s(this,"notifyEventListener",(function(t){n.OYsv.STqY(t)})),s(this,"fetch",(function(e,n,i,r){t.getController().fetchConfiguration(e,n,i,r)})),s(this,"mOww",(function(){return n.aWVG})),s(this,"getCampaignMetaFromQueryEngine",(function(t){return n.XqBL.DXni(t)})),s(this,"BsOF",(function(){return n.qcGr})),e.instance||(e.instance=this),e.instance}return a(e,[{key:"createObjConfig",value:function(t){try{this.pnYs=this.getQeState(),v(this.pnYs[t])||(this.pnYs[t]={SESSION:0,OVERALL:0,DATES:{}},this.qcGr&&(this.pnYs[t].DATES[this.qcGr]=0),this.setQeState(t))}catch(t){it.error("Can not create the frequency count object:"+t)}}},{key:"incrementFrequencies",value:function(t){this.pnYs=this.getQeState();var e=this.pnYs[t];e.SESSION=e.SESSION+1,e.OVERALL=e.OVERALL+1;var n=b();n===this.qcGr&&e.DATES&&e.DATES[n]||(this.qcGr=n,e.DATES={},e.DATES[this.qcGr]=0),e.DATES[this.qcGr]=e.DATES[this.qcGr]+1}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s(rt,"instance",void 0),window.ceVersion=160;try{void 0===exports&&null===exports||(exports.default=rt,module.exports=exports.default)}catch(t){}return rt}));
