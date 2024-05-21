!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("apxor")):"function"==typeof define&&define.amd?define(["apxor"],e):(t=t||self)["apxor-qe"]=e(t.Apxor)}(this,(function(t){"use strict";function e(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function n(t){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?e(Object(r),!0).forEach((function(e){s(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):e(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function r(t){return(r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function i(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function a(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,c(r.key),r)}}function o(t,e,n){return e&&a(t.prototype,e),n&&a(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,n){return(e=c(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function u(t){return function(t){if(Array.isArray(t))return l(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return l(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function c(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e||"default");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d=window.ApxorLogger,h=function(t){return void 0!==t&&!function(t){return null===t}(t)},f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function v(t,e){return Array.from(e).map((function(e,n){return String.fromCharCode(e^function(t,e){return t.charCodeAt(Math.floor(e%t.length))}(t,n))})).join("")}var p=function(t,e){return v(t,e=function(t){var e,n,r,i,a,o,s=0,u=[];if(!t)return t;t+="";do{e=(o=f.indexOf(t.charAt(s++))<<18|f.indexOf(t.charAt(s++))<<12|(i=f.indexOf(t.charAt(s++)))<<6|(a=f.indexOf(t.charAt(s++))))>>16&255,n=o>>8&255,r=255&o,u.push(e),64!==i&&(u.push(n),64!==a&&u.push(r))}while(s<t.length);return u}(e))},g=function(t){switch(t){case"app_event":return"AE";case"client_event":return"CE";case"activity_time":case"activity_event":return"AE"}return"Unknown"},_=function(t){return t.toUpperCase()},y=function(t,e,n){switch(n){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;case"NEQ":return t!==e;case"R":return m(e).test(t);default:return!1}},m=function(t){var e=t.replace(/.*\/([gimuy]*)$/,"$1");e===t&&(e="");var n=e?t.replace(new RegExp("^/(.*?)/"+e+"$"),"$1"):t;return new RegExp(n,e)},b=function(){var t=new Date;return t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()},x=function(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]&&arguments[3];if(!t||!e||!n)return!1;var i=n.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),a=e.replace(new RegExp(i,"g"),"(.+)"),o=r?"^".concat(a):"".concat(a,"$"),s=new RegExp(o);return s.test(t)};function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,i=arguments.length>4?arguments[4]:void 0,a=E(t,e);if(a){var o=function(){if(j(a)){return function(t){return O(t)}(a)}return d.info("Invalid target element. Width and height are 0 for element: ".concat(t,". Can't show tooltip")),!1};return o()}return n?(d.info("Not found yet. Rechecking the DOM."),A(i,r,t,e)):(d.info("Element with selector:".concat(t," not found.")),!1)}function A(t,e,n){var r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"",i=setInterval((function(){var e=E(n,r);if(e){clearInterval(i);!function(){if(j()){O()}else d.info("Invalid target element. Width and height are 0 for element: ".concat(n,". Can't show tooltip"))}()}else(t-=1)<=0&&(clearInterval(i),console.warn("Element with selector:".concat(n," not found.")))}),e)}var E=function(t){var e,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=document.getElementById(t);if(!r)try{r=document.querySelector(t)}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}(r||(r=q(t)),!r&&n.length>0)&&(r=null===(e=document.getElementById(n))||void 0===e||null===(e=e.contentWindow)||void 0===e||null===(e=e.document)||void 0===e?void 0:e.querySelector(t));return r},q=function(t){var e=t.indexOf("svg");-1!==e&&(t=t.substring(0,e)+"svg:svg");try{return document.uFUk(t,document,(function(t){return"svg"===t?"http://www.w3.org/2000/svg":null}),XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue}catch(t){window.ApxorLogger.error("Error finding element in DOM:"+t)}return null};function j(t){try{var e=t.getBoundingClientRect();if(0===e.width||0===e.height)return!1}catch(t){return!1}return!0}function O(t){var e,n,r,i;return!!(n=(e=t).offsetHeight,r=e.offsetWidth,(i=e.getBoundingClientRect()).left>=-r&&i.top>=-n&&i.right<=(window.innerWidth||document.documentElement.clientWidth)+r&&i.bottom<=(window.innerHeight||document.documentElement.clientHeight)+n)}var F=function(t){var e='\n        <style> \n          .apx-container{\n            padding:10px;\n          }\n        </style>\n        <div id="apx-innerElement" class="apx-container">\n              <div id="close-button" style="cursor: pointer;position:absolute;top:9px;right:9px;"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">\n                <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>\n                </svg>\n              </div>\n              <div style="font-family: inherit;font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;\n              color: #FFFFFF; display: flex; gap: 12px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">\n  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>\n  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />\n</svg><div style = "align-self: center;padding-right:20px;">'.concat(t,"</div></div>\n        </div>\n      "),n=document.createElement("div");n.style="\n        z-index:99999999;\n        background:#16202f;\n        position:fixed;\n        top:1%;\n        right:1%;\n        border-radius: 12px;\n      ",n.innerHTML=e,n.id="apx-container",document.body.appendChild(n)},S=window.ApxorLogger,T=o((function e(){var n=this;i(this,e),s(this,"ANjf","ALL"),s(this,"ouxW",[]),s(this,"LnGZ",[]),s(this,"userAttributesValidated",!0),s(this,"sessionAttributeValidated",!0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(n.ANjf=t.audience.audience_type,n.ouxW=t.audience.attributes.user,n.LnGZ=t.audience.attributes.session,!Array.isArray(n.ouxW)||!Array.isArray(n.LnGZ))return S.error("No attributes"),!1}catch(t){return S.error(t),!1}return!0})),s(this,"validate",(function(e,r){var i=!0;"FTU"===n.ANjf&&(i=t.getController().getSessionInfo().is_first_session);var a=n.JrrE(e,n.ouxW),o=n.JrrE(r,n.LnGZ);return a||(n.userAttributesValidated=!1),o||(n.sessionAttributeValidated=!1),i&&a&&o})),s(this,"JrrE",(function(t,e){var n=e.length,r=!0;try{for(var i,a=function(){var n=e[o];if(void 0===t[n.name]||!1===r)return{v:!1};var i=n.operator,a=n.type,s=n.value.map((function(t){if("s"===a)return t;if("l"===a)return parseInt(t);if("f"===a)return parseFloat(t);if("b"===a)switch(t){case"true":return!0;case"false":return!1;default:return t}})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return"s"===a?t="".concat(t):"l"===a?t=parseInt(t):"f"===a?t=parseFloat(t):"b"===a&&(t=!!t),y(t,e,i)}))}));r=r&&u},o=0;o<n;o++)if(i=a())return i.v}catch(t){S.error(t),r=!1}return r}))})),N=window.ApxorLogger,L=o((function e(){var n=this;i(this,e),s(this,"hKuq",0),s(this,"wePx",0),s(this,"bVdW","SESSION"),s(this,"fErE",0),s(this,"aCZn",0),s(this,"TTpc",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.DOba=t._id,n.rGYj=t.meta,n.hKuq=t.frequency.count,-1===n.hKuq&&(n.hKuq=1e3),n.TTpc=n.hKuq,n.wePx=t.frequency.time_interval,n.bVdW=t.frequency.validity,n.aCZn=t.frequency.ses_lmt,n._dayCount=t.frequency.day_lmt;var e=it.getInstance().getQeState();if(!h(e)||!h(e[t._id]))return!0;if("SESSION"===n.bVdW){if(n.hKuq=parseInt(n.hKuq)-parseInt(e[t._id].SESSION),n.hKuq<=0)return n.uFPO("Session limit reached"),console.warn("Max count limit reached for session:"+t._id),!1}else{if("OVERALL"!==n.bVdW)return N.info("Invalid config."),!1;if(n.hKuq=parseInt(n.hKuq)-parseInt(e[t._id].OVERALL),n.hKuq<=0)return n.uFPO("Overall limit reached"),console.warn("Max count limit reached for overall:"+t._id),!1}}catch(t){return N.error(t),!1}return!0})),s(this,"OkWZ",(function(){n.hKuq=n.hKuq-1})),s(this,"getFrequencyCount",(function(){return n.hKuq})),s(this,"yzic",(function(){"SESSION"===n.bVdW&&(n.hKuq=n.TTpc,N.info("Campaign Limit reset"))})),s(this,"XPlT",(function(t){try{if(n.hKuq<=0)return"OVERALL"===n.bVdW?n.uFPO("Overall limit reached"):"SESSION"===n.bVdW&&n.uFPO("Session limit reached"),!1;var e=it.getInstance().getQeState();if(!h(e)||!h(e[t]))return!0;if(0!==n.aCZn)if(parseInt(n.aCZn)-parseInt(e[t].SESSION)<=0)return n.uFPO("Session limit reached"),!1;if(0!==n._dayCount){var r,i=b();if(parseInt(n._dayCount)-parseInt((null===(r=e[t])||void 0===r?void 0:r.DATES[i])||0)<=0)return n.uFPO("Day limit reached"),!1}}catch(t){n.uFPO("Error validating the frequency: ".concat(t)),N.error("Error validating the frequency:"+t)}return!0})),s(this,"uFPO",(function(e){var r;null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===n.rGYj.type?"survey":"campaign",apx_nudge_id:n.DOba,apx_nudge_name:n.rGYj.name,apx_variant_code:n.rGYj.isExperiment||n.rGYj.only_context?null===(r=n.rGYj.attr)||void 0===r?void 0:r.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:e})}))})),G=o((function t(){var e=this;i(this,t),s(this,"qMpE",""),s(this,"ANjf",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r;e.qMpE=t.meta.name,e.ANjf=t.meta.type,e._only_context=t.meta.only_context,e._attr=(null===(n=t.meta)||void 0===n?void 0:n.attr)||{},e._isExperiment=null===(r=t.meta)||void 0===r?void 0:r.isExperiment}catch(t){return window.ApxorLogger.error(t),!1}return!0}))})),D=window.ApxorLogger,C=o((function t(){var e=this;i(this,t),s(this,"OVAx",-1),s(this,"Jwoz",-1),s(this,"gNgS",-1),s(this,"NqEw",-1),s(this,"ZxTp",!1),s(this,"_nudge_expired",!1),s(this,"_not_yet_active",!1),s(this,"_not_in_specified_time",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(isNaN(Date.parse(t.validity.start_date))||isNaN(Date.parse(t.validity.end_date)))return D.error("Not valid dates"),!1;if(e.OVAx=Date.parse(t.validity.start_date),e.Jwoz=Date.parse(t.validity.end_date),h(t.at_specific_time)&&(e.ZxTp=t.at_specific_time,e.ZxTp&&h(t.time_limits))){var n=(new Date).toISOString().split("T")[0];if(e.gNgS=Date.parse(n+"T"+t.time_limits.start_time+":00.000Z"),e.NqEw=Date.parse(n+"T"+t.time_limits.end_time+":00.000Z"),isNaN(e.gNgS)||isNaN(e.NqEw))return D.error("Not valid times"),!1}}catch(t){return D.error(t),!1}return!0})),s(this,"validate",(function(){var t=Date.now();return t>e.OVAx&&t<e.Jwoz?(!e.ZxTp||t>=e.gNgS&&t<=e.NqEw||(e._not_in_specified_time=!0),!e.ZxTp||t>=e.gNgS&&t<=e.NqEw):(t<e.OVAx?e._not_yet_active=!0:t>e.Jwoz&&(e._nudge_expired=!0),!1)}))})),P=o((function t(){var e=this;i(this,t),s(this,"qMpE",""),s(this,"NjGF",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e.qMpE=t.name,e.NjGF=t.additional_info}catch(t){return!1}return!0}))})),Y=o((function t(){var e=this;i(this,t),s(this,"obcq",0),s(this,"GvYl",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.obcq=Number(t.lower),e.GvYl=Number(t.upper),isNaN(e.obcq)||isNaN(e.GvYl))return!1}catch(t){return!1}return!0}))})),I=o((function t(){var e=this;i(this,t),s(this,"xGTA",0),s(this,"lnAZ",""),s(this,"mtfV",""),s(this,"dPxl",new P),s(this,"Adpr",new Y),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.lnAZ=t.event_type,e.mtfV=t.activity,e.dPxl.parse(t.details)&&e.Adpr.parse(t.time_bounds)}catch(t){return!1}}))})),V=window.ApxorLogger,k=o((function t(){var e=this;i(this,t),s(this,"xGTA",0),s(this,"imkS",-1),s(this,"hKuq",0),s(this,"FTTu",""),s(this,"mtfV",""),s(this,"lnAZ",""),s(this,"Adpr",new Y),s(this,"dPxl",new P),s(this,"SfFq",new I),s(this,"WQFG","AND"),s(this,"ozxF",!1),s(this,"ANjf",void 0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.imkS=t.sequence,e.hKuq=t.count_config.count,e.FTTu=t.count_config.operator,e.mtfV=t.activity,e.lnAZ=t.event_type,e.WQFG=t.combine_operator,e.ANjf=t.type,e.dPxl.parse(t.details)&&e.SfFq.parse(t.trigger)&&e.Adpr.parse(t.time_bounds)}catch(t){return V.error(t),!1}}))})),M=window.ApxorLogger,z=o((function t(){var e=this;i(this,t),s(this,"hKuq",0),s(this,"FTTu",""),s(this,"lnAZ",""),s(this,"Adpr",new Y),s(this,"dPxl",new P),s(this,"WQFG","AND"),s(this,"parse",(function(t){try{return e.hKuq=t.count_config.count,e.FTTu=t.count_config.operator,e.lnAZ=t.event_type,e.WQFG=t.combine_operator,e.dPxl.parse(t.details)&&e.Adpr.parse(t.time_bounds)}catch(t){return M.error(t),!1}}))})),Z=window.ApxorLogger,W=function(){function e(){var n=this;i(this,e),s(this,"xIHL",0),s(this,"DOba",""),s(this,"azya",new k),s(this,"YjCV",new z),s(this,"KvcY",!1),s(this,"hnUY",!1),s(this,"OpqM",0),s(this,"WQFG","AND"),s(this,"qAWo","OR"),s(this,"sNHB",-1),s(this,"IXvq",[]),s(this,"mkup",{}),s(this,"wbzv",!1),s(this,"initialize",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,a=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[],s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";if(n.DOba=r,n.OpqM=i,n.IXvq=o,"termination"===s&&""!==s){n.YjCV.parse(e);return n.qAWo=n.YjCV.WQFG,n.hKXs(),!0}var u=n.azya.parse(e);if(u){if(n.WQFG=n.azya.WQFG,n.azya.ozxF){var l=n.azya.dPxl.qMpE;"APX_PAGE_OPENED"===l&&(l=n.azya.dPxl.NjGF.navigation_id,l=h(l)?l:n.azya.dPxl.qMpE),n.sNHB=t.getController().getEventCount(l);var c=n.azya.hKuq,d=n.azya.FTTu;if(n.hnUY=n.njJk(n.sNHB-1,c,d,!1),n.KvcY=n.hnUY,n.hnUY&&"APX_PAGE_OPENED"===n.azya.dPxl.qMpE)return!0}return a&&0!==i||n.LNuY(),!0}return!1})),s(this,"LNuY",(function(){var t,e=n.azya,r=e.SfFq,i=it.getInstance();"app_start"===r.lnAZ?(n.KvcY=!0,i.registerForEvent(g(e.lnAZ)+"___"+e.dPxl.qMpE,n.QwTI)):i.registerForEvent(g(e.lnAZ)+"___"+r.dPxl.qMpE,n.QwTI),null!==(t=window.ApxorRTM)&&void 0!==t&&t.badgesLists.includes(n.DOba)&&i.registerForEvent(g(e.lnAZ)+"___"+"apxor-badge-container-".concat("-".concat(n.DOba).replaceAll(" ","").replace(/[^\w\s]/gi,"")),n.QwTI)})),s(this,"hKXs",(function(){var t=n.YjCV,e=it.getInstance();n.KvcY=!0,e.registerForEvent(g(t.lnAZ)+"___"+t.dPxl.qMpE,n.FPAJ)})),s(this,"EpWB",(function(t,e,r,i){var a,o=(Date.now()-n.mkup[e])/1e3;(null===(a=n.azya)||void 0===a||null===(a=a.dPxl)||void 0===a||null===(a=a.NjGF)||void 0===a?void 0:a.time)/1e3>o&&n._displayCampaign(r)})),s(this,"xpgA",(function(t,e,r,i){var a,o;n.wbzv=!0;var s=Date.now(),u=null===(a=n.azya)||void 0===a||null===(a=a.SfFq)||void 0===a?void 0:a.dPxl.qMpE,l=(s-n.mkup[u])/1e3,c=null===(o=n.azya)||void 0===o||null===(o=o.dPxl)||void 0===o||null===(o=o.NjGF)||void 0===o?void 0:o.time;(c/=1e3)>l&&n._displayCampaign(r)})),s(this,"QwTI",(function(e,r,i,a){var o,s,u=it.getInstance();if(n.KvcY){if(null!==(o=window.ApxorRTM)&&void 0!==o&&o.isBadgePresent&&null!==(s=window.ApxorRTM)&&void 0!==s&&s.badgesLists.includes(n.DOba)&&t.getController().isBadgeTriggerSatisfied(n.DOba))return n.hnUY=!0,n.azya.xGTA=i,void u.validate(n.DOba,n.OpqM);g(n.azya.lnAZ)===e&&n.StVI(i-n.azya.SfFq.xGTA,n.azya.Adpr)&&n.azya.dPxl.qMpE===r&&n.tAsA(n.azya.dPxl.NjGF,a)&&(n.xIHL+=1,n.hnUY=n.njJk(n.xIHL,n.azya.hKuq,n.azya.FTTu),n.hnUY&&(n.azya.xGTA=i,u.validate(n.DOba,n.OpqM)))}else if(n.KvcY=n.BjTo(e,r,i,a),n.KvcY){var l=n.azya,c=l.SfFq;if(c.xGTA=i,"activity_time"===(null==l?void 0:l.lnAZ)){var d,h,f,v=null==l||null===(d=l.dPxl)||void 0===d||null===(d=d.NjGF)||void 0===d?void 0:d.time;(null==l||null===(h=l.dPxl)||void 0===h||null===(h=h.NjGF)||void 0===h?void 0:h.nkpi.length)>0&&(setTimeout((function(){n.wbzv||(n.hnUY=!0,n.hnUY&&(n.xIHL+=1,n.hnUY=n.njJk(n.xIHL,n.azya.hKuq,n.azya.FTTu),n.hnUY&&(n.azya.xGTA=i,u.validate(n.DOba,n.OpqM)))),l.dPxl.NjGF.nkpi.map((function(t){u.unregisterFromEvent(_(l.dPxl.NjGF.et)+"___"+t,n)}))}),v),l.dPxl.NjGF.nkpi.map((function(t){u.registerForEvent(_(l.dPxl.NjGF.et)+"___"+t,n.xpgA)}))),(null==l||null===(f=l.dPxl)||void 0===f||null===(f=f.NjGF)||void 0===f?void 0:f.kpi.length)>0&&(setTimeout((function(){l.dPxl.NjGF.kpi.map((function(t){u.unregisterFromEvent(_(l.dPxl.NjGF.et)+"___"+t,n)}))}),v),l.dPxl.NjGF.kpi.map((function(t){t===l.SfFq.dPxl.qMpE?(u.unregisterFromEvent(g(c.lnAZ)+"___"+c.dPxl.qMpE,n),u.registerForEvent(_(l.dPxl.NjGF.et)+"___"+t,n.EpWB)):u.registerForEvent(_(l.dPxl.NjGF.et)+"___"+t,n.xpgA)})))}else u.unregisterFromEvent(g(c.lnAZ)+"___"+c.dPxl.qMpE,n),u.registerForEvent(g(l.lnAZ)+"___"+l.dPxl.qMpE,n);n.mkup[r]=Date.now()}})),s(this,"FPAJ",(function(t,e,r,i){var a=it.getInstance();g(n.YjCV.lnAZ)===t&&n.StVI(r,n.YjCV.Adpr)&&n.YjCV.dPxl.qMpE===e&&n.tAsA(n.YjCV.dPxl.NjGF,i)&&(n.xIHL+=1,n.hnUY=n.njJk(n.xIHL,n.YjCV.hKuq,n.YjCV.FTTu),n.hnUY&&(n.YjCV.xGTA=r,a.validateForTermination(n.DOba,n.OpqM)))})),s(this,"BjTo",(function(t,e,r,i){var a=n.azya.SfFq;return g(a.lnAZ)===t&&a.dPxl.qMpE===e&&n.StVI(r,a.Adpr)&&n.tAsA(a.dPxl.NjGF,i)})),s(this,"StVI",(function(t,e){var n=Math.ceil(t);return n>e.obcq&&n<e.GvYl})),s(this,"njJk",(function(t,e,r){var i=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];switch(i&&n.azya.ozxF&&(t+=n.sNHB),r){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;default:return!1}})),s(this,"tAsA",(function(t,e){var n=!0;try{var i,a=function(){if(!1===n)return{v:!1};if("object"===r(t[o])){var i,a=t[o].op,s=t[o].t;if("s"===s)i=t[o].val;else if("l"===s||"f"===s)i=parseFloat(t[o].val);else if("b"===s)switch(t[o].val){case"true":i=!0;break;case"false":i=!1;break;default:i=t[o].val}var u=(Array.isArray(e[o])?e[o]:[e[o]]).some((function(t){return"s"===s?t="".concat(t):"l"===s?t=parseInt(t):"f"===s?t=parseFloat(t):"b"===s&&(t=!!t),y(t,i,a)}));n=n&&u}else n=n&&y(e[o],t[o],"EQ")};for(var o in t)if(i=a())return i.v}catch(t){Z.error(t),n=!1}return n}))}return o(e,[{key:"_displayCampaign",value:function(t){var e=it.getInstance();this.hnUY=!0,this.hnUY&&(this.xIHL+=1,this.hnUY=this.njJk(this.xIHL,this.azya.hKuq,this.azya.FTTu),this.hnUY&&(this.azya.xGTA=t,e.validate(this.DOba,this.OpqM)))}}]),e}(),Q=window.ApxorLogger,K=o((function e(){var n=this;i(this,e),s(this,"QlCp",[]),s(this,"_ret_day",{}),s(this,"xhQM",{}),s(this,"SfuH",!1),s(this,"NbzV",!1),s(this,"retainedDaysValidated",!0),s(this,"retainedSessionValidated",!0),s(this,"eventDoneInLT",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{n.QlCp=t.overall_cfg.events,n._ret_day=t.overall_cfg.ret_day,n.xhQM=t.overall_cfg.session,n.SfuH=t.overall_cfg.toggleRetDay,n.NbzV=t.overall_cfg.toggleSession}catch(t){return Q.error(t),!1}return!0})),s(this,"validate",(function(){var e=parseInt(t.getController().getFromStorage("apx_retained_days")),r=parseInt(t.getController().getFromStorage("apx_retained_session"));if(n.SfuH&&!isNaN(e)&&!(e>=n._ret_day.from&&e<=n._ret_day.to))return n.retainedDaysValidated=!1,!1;if(n.NbzV&&!isNaN(r)&&!(r>=n.xhQM.from&&r<=n.xhQM.to))return n.retainedSessionValidated=!1,!1;try{for(var i=t.getController().getFromStorage("_apx_lt_count"),a=t.getSiteId(),o=JSON.parse((new TextDecoder).decode(function(t){for(var e=new ArrayBuffer(t.length),n=new Uint8Array(e),r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return e}(p(a,i)))),s=0;s<n.QlCp.length;s++){if(o[n.QlCp[s].name.replace("'","").replace("’","")])return n.eventDoneInLT=!0,!1}}catch(t){Q.error("Failed to validate the lt count:"+t)}return!0}))})),U=window.ApxorLogger,B=o((function t(){var e=this;i(this,t),s(this,"ouxW",[]),s(this,"LnGZ",[]),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e.ouxW=t.attributes.user,e.LnGZ=t.attributes.session,!Array.isArray(e.ouxW)||!Array.isArray(e.LnGZ))return U.error("No attributes"),!1}catch(t){return U.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.JrrE(t,e.ouxW)&&e.JrrE(n,e.LnGZ)})),s(this,"JrrE",(function(t,e){var n=e.length,r=!0;try{for(var i,a=function(){var n=e[o];if(!t[n.name]||!1===r)return{v:!1};var i=n.operator,a=n.type,s=n.value.map((function(t){return"s"===a?t:"l"===a?parseInt(t):"f"===a?parseFloat(t):void 0})),u=(Array.isArray(t[n.name])?t[n.name]:[t[n.name]]).some((function(t){return s.some((function(e){return y(t,e,i)}))}));r=r&&u},o=0;o<n;o++)if(i=a())return i.v}catch(t){U.error(t),r=!1}return r}))})),R=o((function e(){var n=this;i(this,e),s(this,"btsG",t.getController()),s(this,"type",""),s(this,"_duration_seconds",0),s(this,"IVCV",1),s(this,"parse",(function(t){try{var e,r,i;if(n.ANjf=null===(e=t.terminate_info.time_based)||void 0===e?void 0:e.type,n._duration_seconds=null===(r=t.terminate_info)||void 0===r?void 0:r.time_based.duration_seconds,n.IVCV=null===(i=t.terminate_info.time_based)||void 0===i?void 0:i.days,n.jqhU(t._id))return n.btsG.persistTerminationInfoLocally(t._id),!1}catch(t){return!1}return!0})),s(this,"jqhU",(function(t){var e,r=JSON.parse(n.btsG.getFromStorage("apx_termination_ID"));if(!r[t]||null===(e=r[t])||void 0===e||!e.startDate)return!1;var i,a=new Date(r[t].startDate),o=new Date((i=new Date).getMonth()+"/"+i.getDate()+"/"+i.getFullYear()),s=parseInt((o-a)/864e5,10),u=function(){var t=new Date;return{hours:t.getHours(),mins:t.getMinutes()}}(),l=r[t].gNgS;return s===n.IVCV&&u.hours>=l.hours||s>n.IVCV||r[t].goalAcheived}))})),J=o((function t(){var e=this;i(this,t),s(this,"enable_goal_events",!1),s(this,"attributes",{}),s(this,"WhWj",new B),s(this,"bLpm",new R),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var n,r,i;if(e.enable_time_based=null==t||null===(n=t.terminate_info)||void 0===n?void 0:n.enable_time_based,e.enable_time_based&&!e.bLpm.parse(t))return!1;if(e.enable_goal_events=null==t||null===(r=t.terminate_info)||void 0===r?void 0:r.enable_goal_events,e.enable_attributes=null==t||null===(i=t.terminate_info)||void 0===i?void 0:i.enable_attributes,e.enable_attributes&&!e.WhWj.parse(t.terminate_info))return!1}catch(t){return window.ApxorLogger.error(t),!1}return!0})),s(this,"validate",(function(t,n){return e.WhWj.validate(t,n)}))})),H=o((function t(){var e=this;i(this,t),s(this,"JzIg",""),s(this,"LTPd",""),s(this,"nmpe",""),s(this,"vfMa",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e.JzIg=null==t?void 0:t.screen_binding,!e.JzIg||(e.LTPd=null==t?void 0:t.binding.url,e.nmpe=null==t?void 0:t.binding.var,e.vfMa=null==t?void 0:t.binding.operator,!0)}catch(t){return window.ApxorLogger.error(t),!1}})),s(this,"validate",(function(){var t=e.LTPd,n=e.nmpe,r=e.vfMa,i=window.location.href;return!e.JzIg||("EQ"===r?t.includes(n)?!!x(i,t,n,!1):i===t:"SW"===r?t.includes(n)?!!x(i,t,n,!0):!!i.startsWith(t):void 0)}))})),X=window.ApxorLogger,$=o((function e(){var r=this;i(this,e),s(this,"NuQk",[]),s(this,"qyPc",[]),s(this,"DOba",""),s(this,"rGYj",new G),s(this,"YeJg",new T),s(this,"bVdW",new C),s(this,"rkbB",new L),s(this,"fXsO",new K),s(this,"BGXc",new J),s(this,"AZqf",new H),s(this,"WLkV",!1),s(this,"QHip",[]),s(this,"_variant_code",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var e;if(!h(t._id))return X.error("No Id"),!1;if(!h(t.enabled)||!t.enabled)return X.error("Not enabled"),!1;if(!(r.rGYj.parse(t)&&r.bVdW.parse(t)&&r.rkbB.parse(t)&&r.YeJg.parse(t)&&r.fXsO.parse(t)&&r.BGXc.parse(t)&&r.AZqf.parse(t)))return!1;if(r._variant_code=r.rGYj._isExperiment||r.rGYj._only_context?null===(e=r.rGYj._attr)||void 0===e?void 0:e.apx_variant_code:"TG",!h(t.conditions)||!Array.isArray(t.conditions))return X.error("No valid conditions",t.conditions),!1;r.DOba=t._id,r.WLkV=!!h(t.sequence_enabled)&&t.sequence_enabled,r.WLkV&&t.conditions.sort((function(t,e){return t.sequence<e.sequence}));var n=t.conditions,i=n.length,a=null==t?void 0:t.no_context_enabled;0===i&&a&&setTimeout((function(){r.PkwT()}),10);for(var o=function(){r.QHip=[];var t=n[s];if("didn't"===t.type){var e,i={trigger_key:t.trigger.details.name,no_kpi_array:null==t||null===(e=t.details)||void 0===e||null===(e=e.additional_info)||void 0===e?void 0:e.nkpi,condition_id:null==t?void 0:t._id,time_bounds:t.time_bounds.upper};r.QHip=[].concat(u(r.QHip),[i])}var a=new W;if(a.initialize(t,r.DOba,s,r.WLkV,r.QHip)){r.NuQk.push(a);var o=(null==t?void 0:t.timeout)/(null==t?void 0:t.findinterval),l=(null==t?void 0:t.frameid)||"",c=null==t?void 0:t.url;window.location.href===c&&"view_visibility"===t.event_type&&!0===w(t.view_id,l,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,o)&&r.PkwT(!0),window.addEventListener("navigate",(function(e){var n=null==t?void 0:t.url;window.location.href===n&&"view_visibility"===t.event_type&&!0===w(t.view_id,l,null==t?void 0:t.enable_retry,null==t?void 0:t.findinterval,o)&&r.PkwT(!0)}))}},s=0;s<i;s++)o();if(r.BGXc.enable_goal_events)for(var l=t.terminate_info.goal_events.events,c=l.length,d=0;d<c;d++){var f=new W;f.initialize(l[d],r.DOba,d,!0,[],"termination")&&r.qyPc.push(f)}return r.NuQk.length>0}catch(t){return X.error(t),!1}})),s(this,"uFUk",(function(t){if(!(t<0))if(r.WLkV){var e=r.NuQk[t];if(h(e)&&e.hnUY){var n=r.NuQk[t-1];if(h(n)&&!n.hnUY)return;var i=r.NuQk[t+1];h(i)?i.LNuY():r.PkwT()}}else r.PkwT()})),s(this,"GxwW",(function(t){t<0||r.ABNv()})),s(this,"PkwT",(function(){var e,i,a=arguments.length>0&&void 0!==arguments[0]&&arguments[0],o=t.getController().getUserAttributes(),s=t.getController().getSessionAttributes();if(null!==(e=window.ApxorRTM)&&void 0!==e&&e.isBadgePresent&&null!==(i=window.ApxorRTM)&&void 0!==i&&i.badgesLists.includes(r.DOba)&&t.getController().isBadgeTriggerSatisfied(r.DOba)||null==t||t.logEvent("apx_trigger_satisfied",{apx_nudge_type:"SURVEY"===r.rGYj.ANjf?"survey":"campaign",apx_nudge_id:r.DOba,apx_nudge_name:r.rGYj.qMpE,apx_variant_code:r.rGYj._isExperiment||r.rGYj._only_context?r.rGYj._attr.apx_variant_code:"TG"}),!(r.bVdW.validate()&&r.YeJg.validate(o,s)&&r.fXsO.validate()&&r.AZqf.validate()))return r.fXsO.retainedDaysValidated?r.fXsO.retainedSessionValidated?r.fXsO.eventDoneInLT?void r.uFPO("Event done in life time"):r.YeJg.userAttributesValidated?r.YeJg.sessionAttributeValidated?r.bVdW._not_in_specified_time?void r.uFPO("Time limits check failed"):r.bVdW._not_yet_active?void r.uFPO("not in the scheduled time"):r.bVdW._nudge_expired?void r.uFPO("nudge expired"):void 0:void r.uFPO("Session property filter not met"):void r.uFPO("User property filter not met"):void r.uFPO("User session criteria not met"):void r.uFPO("Retained day criteria not met");var u=r.NuQk.length,l=u<1,c="";0===u&&(l=!0);for(var d=0;d<u;d++){var h=r.NuQk[d],f=h.hnUY;if(""===c.trim())l=f;else switch(c){case"AND":l=l&&f;break;case"OR":l=l||f}c=h.WQFG}if(!0===a&&(l=!0),l){if(console.debug("onCondition satisfied"),!r.rkbB.XPlT(r.DOba)){if(console.warn("Maximum limit reached",r.DOba),t.getController().isTestDevice()){F("Maximum limit reached for campaign name ".concat(r.rGYj.qMpE));var v=document.getElementById("close-button"),p=function(){var t=document.getElementById("apx-container");null==t||t.remove()};null==v||v.addEventListener("click",p),window.setTimeout(p,2e4)}return}console.log("Dispatching event",r.rGYj.ANjf),t.logEvent("apx_context_evaluated",n(n({apx_nudge_type:"SURVEY"===r.rGYj.ANjf?"survey":"campaign",apx_nudge_id:r.DOba,apx_nudge_name:r.rGYj.qMpE,apx_variant_code:r.rGYj._isExperiment||r.rGYj._only_context?r.rGYj._attr.apx_variant_code:"TG"},r.rGYj._attr),{},{message_name:r.rGYj.qMpE,id:r.DOba})),t.getController().dispatchEvent(r.rGYj.ANjf,{name:r.rGYj.ANjf,additional_info:{uuid:r.DOba,name:r.rGYj.qMpE}})}})),s(this,"ABNv",(function(){for(var e=r.qyPc.length,i=e<1,a="",o=0;o<e;o++){var s=r.qyPc[o],u=s.hnUY;if(""===a.trim())i=u;else switch(a){case"AND":i=i&&u;break;case"OR":i=i||u}a=s.qAWo}i&&(console.log("Dispatching event",r.rGYj.ANjf),t.getController().persistTerminationInfoLocally(r.DOba),!0===r.rGYj._only_context&&t.logEvent("apx_context_evaluated",n(n({},r.rGYj._attr),{},{message_name:r.rGYj.qMpE,id:r.DOba})),t.getController().dispatchEvent(r.rGYj.ANjf,{name:r.rGYj.ANjf,additional_info:{uuid:r.DOba,name:r.rGYj.qMpE}}))})),s(this,"validateForTerminationAttributes",(function(){var e=t.getController().getUserAttributes(),n=t.getController().getSessionAttributes();return r.BGXc.validate(e,n)})),s(this,"OkWZ",(function(){r.rkbB.OkWZ()})),s(this,"getFrequencyCount",(function(){return r.rkbB.getFrequencyCount()})),s(this,"CosP",(function(){return r.rkbB.yzic()})),s(this,"uFPO",(function(e){var n;null==t||t.logEvent("apx_non_eligible_user",{apx_nudge_type:"SURVEY"===r.rGYj.ANjf?"survey":"campaign",apx_nudge_id:r.DOba,apx_nudge_name:r.rGYj.qMpE,apx_variant_code:r.rGYj._isExperiment||r.rGYj._only_context?null===(n=r.rGYj._attr)||void 0===n?void 0:n.apx_variant_code:"TG",apx_failure_type:"warn",apx_reason:e})}))})),tt=o((function t(){var e=this;i(this,t),s(this,"bpDy",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{configs:[]};if(h(t)&&h(t.configs)){var n=t.configs;if(!Array.isArray(n))return;n.sort((function(t,e){var n,r;return(null!==(n=t.prio)&&void 0!==n?n:-1)-(null!==(r=e.prio)&&void 0!==r?r:-1)}));for(var r=0;r<n.length;r++){var i=n[r],a=i._id,o=new $;o.parse(i)?e.bpDy[a]=o:console.warn("Failed to parse cfg",a)}}})),s(this,"validate",(function(t,n){e.bpDy[t]&&e.bpDy[t].uFUk(n)})),s(this,"getVariantCode",(function(t){return e.bpDy[t]?e.bpDy[t]._variant_code:""})),s(this,"validateForTermination",(function(t,n){e.bpDy[t]&&e.bpDy[t].GxwW(n)})),s(this,"validateForTerminationAttributes",(function(t){return!!e.bpDy[t]&&e.bpDy[t].validateForTerminationAttributes()})),s(this,"OkWZ",(function(t){e.bpDy[t].OkWZ()})),s(this,"getFrequencyCount",(function(t){var n=e.bpDy[t];if(null!=n)return n.getFrequencyCount()})),s(this,"resetFrequencyCounts",(function(){var t=e.bpDy;for(var n in t)t[n].CosP()})),s(this,"fLoE",(function(t){try{if(e.bpDy){var n=e.bpDy[t];if(n&&n.rGYj)return n.rGYj}}catch(t){console.log("Error in getting the campaign meta ".concat(t))}return{}}))})),et=window.ApxorLogger,nt=o((function e(){var n=this;i(this,e),s(this,"Kqgc",{}),s(this,"FqOj",[]),s(this,"JipZ",!1),s(this,"initialize",(function(){var e=t.getController();e.registerForEvent("APP_EVENT",(function(t){return n.aZvi(t,"AE")})),e.registerForEvent("CLIENT_EVENT",(function(t){return n.aZvi(t,"CE")}))})),s(this,"dfPs",(function(){for(var t in n.FqOj)n.OnMw(t.event,t.key,t.type);n.JipZ=!0})),s(this,"boDR",(function(t,e){var r;"function"==typeof e&&((r=n.Kqgc[t]?n.Kqgc[t]:[]).push(e),n.Kqgc[t]=r,et.debug("Listeners list: ",n.Kqgc))})),s(this,"unregisterFromEvent",(function(t,e){if(n.Kqgc[t]){for(var r=n.Kqgc[t],i=[],a=0;a<r.length;a++){var o=r[a];o!==e&&i.push(o)}n.Kqgc[t]=i}})),s(this,"aZvi",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AE",r=e+"___"+t.name;n.OnMw(t,r,e)})),s(this,"OnMw",(function(e,r,i){if(n.JipZ){if(et.debug("Notifying listeners for event: "+e+", "+r,n.Kqgc),n.Kqgc[r])for(var a=n.Kqgc[r],o=t.getController().getSDKRunningTimeInSec(),s=0;s<a.length;s++){(0,a[s])(i,e.name,o,e.additional_info)}}else n.FqOj.push({event:e,key:r,type:i})}))})),rt=window.ApxorLogger,it=function(){function e(){var n=this;return i(this,e),s(this,"MnnX",!1),s(this,"jivL",null),s(this,"iEZC",b()),s(this,"cvMB",new nt),s(this,"tTvl",t.getSiteId()),s(this,"quls",{}),s(this,"getQeState",(function(){try{var e=t.getController().getFromStorage("qe_state");return e?JSON.parse(p(n.tTvl,e)):(n.quls={},n.setQeState())}catch(t){return n.quls={},n.setQeState()}})),s(this,"setQeState",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{t.getController().persistToStorage("qe_state",n.quls,!0)}catch(r){""===e?n.quls={}:n.quls[e]={SESSION:0,OVERALL:0,DATES:{}},t.getController().persistToStorage("qe_state",n.quls,!0)}return n.quls})),s(this,"initialize",(function(){n.MnnX||(n.MnnX=!0,n.jivL=new tt,n.cvMB.initialize(),n.quls=n.getQeState(),rt.info("QE Initialized.."))})),s(this,"parse",(function(t){n.KCeh()?(n.jivL.parse(t),n.cvMB.dfPs()):rt.warn("Must call init first. Unable to proceed")})),s(this,"validate",(function(t,e){n.KCeh()&&n.jivL.validate(t,e)})),s(this,"getVariantCode",(function(t){return n.jivL.getVariantCode(t)})),s(this,"validateForTermination",(function(t,e){n.KCeh()&&n.jivL.validateForTermination(t,e)})),s(this,"validateForTerminationAttributes",(function(t,e){return n.jivL.validateForTerminationAttributes(t,e)})),s(this,"updateCount",(function(t){try{h(n.quls[t])||n.createObjConfig(t),n.incrementFrequencies(t),n.setQeState(t),n.jivL.OkWZ(t)}catch(t){console.log("Could not update the count config:".concat(t))}})),s(this,"resetFrequencyCounts",(function(){n.jivL.resetFrequencyCounts()})),s(this,"getFrequencyCount",(function(t){return n.jivL.getFrequencyCount(t)})),s(this,"registerForEvent",(function(t,e){n.cvMB.boDR(t,e)})),s(this,"unregisterFromEvent",(function(t,e){n.cvMB.unregisterFromEvent(t,e)})),s(this,"notifyEventListener",(function(t){n.cvMB.aZvi(t)})),s(this,"fetch",(function(e,n,r,i){t.getController().fetchConfiguration(e,n,r,i)})),s(this,"KCeh",(function(){return n.MnnX})),s(this,"getCampaignMetaFromQueryEngine",(function(t){return n.jivL.fLoE(t)})),s(this,"YUsL",(function(){return n.iEZC})),e.instance||(e.instance=this),e.instance}return o(e,[{key:"createObjConfig",value:function(t){try{this.quls=this.getQeState(),h(this.quls[t])||(this.quls[t]={SESSION:0,OVERALL:0,DATES:{}},this.iEZC&&(this.quls[t].DATES[this.iEZC]=0),this.setQeState(t))}catch(t){rt.error("Can not create the frequency count object:"+t)}}},{key:"incrementFrequencies",value:function(t){this.quls=this.getQeState();var e=this.quls[t];e.SESSION=e.SESSION+1,e.OVERALL=e.OVERALL+1;var n=b();n===this.iEZC&&e.DATES&&e.DATES[n]||(this.iEZC=n,e.DATES={},e.DATES[this.iEZC]=0),e.DATES[this.iEZC]=e.DATES[this.iEZC]+1}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s(it,"instance",void 0),window.ceVersion=170;try{void 0===exports&&null===exports||(exports.default=it,module.exports=exports.default)}catch(t){}return it}));
