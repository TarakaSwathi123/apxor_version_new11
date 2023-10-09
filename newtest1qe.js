!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e(require("apxor")):"function"==typeof define&&define.amd?define(["apxor"],e):(t=t||self)["apxor-qe"]=e(t.Apxor)}(this,(function(t){"use strict";function e(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function i(t){for(var i=1;i<arguments.length;i++){var n=null!=arguments[i]?arguments[i]:{};i%2?e(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):e(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function n(t){return(n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function r(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function o(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,c(n.key),n)}}function a(t,e,i){return e&&o(t.prototype,e),i&&o(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function s(t,e,i){return(e=c(e))in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}function _(t){return function(t){if(Array.isArray(t))return u(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return u(t,e);var i=Object.prototype.toString.call(t).slice(8,-1);"Object"===i&&t.constructor&&(i=t.constructor.name);if("Map"===i||"Set"===i)return Array.from(t);if("Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))return u(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var i=0,n=new Array(e);i<e;i++)n[i]=t[i];return n}function c(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e||"default");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===e?String:Number)(t)}(t,"string");return"symbol"==typeof e?e:String(e)}t=t&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t;var d=function(t){return void 0!==t&&!function(t){return null===t}(t)},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function f(t,e){return Array.from(e).map((function(e,i){return String.fromCharCode(e^function(t,e){return t.charCodeAt(Math.floor(e%t.length))}(t,i))})).join("")}var v=function(t,e){return f(t,e=function(t){var e,i,n,r,o,a,s=0,_=[];if(!t)return t;t+="";do{e=(a=l.indexOf(t.charAt(s++))<<18|l.indexOf(t.charAt(s++))<<12|(r=l.indexOf(t.charAt(s++)))<<6|(o=l.indexOf(t.charAt(s++))))>>16&255,i=a>>8&255,n=255&a,_.push(e),64!==r&&(_.push(i),64!==o&&_.push(n))}while(s<t.length);return _}(e))},p=function(t){switch(t){case"app_event":return"AE";case"client_event":return"CE";case"activity_time":case"activity_event":return"AE"}return"Unknown"},h=function(t){return t.toUpperCase()},g=function(t,e,i){switch(i){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;case"NEQ":return t!==e;case"R":return m(e).test(t);default:return!1}},m=function(t){var e=t.replace(/.*\/([gimuy]*)$/,"$1");e===t&&(e="");var i=e?t.replace(new RegExp("^/(.*?)/"+e+"$"),"$1"):t;return new RegExp(i,e)},y=function(){var t=new Date;return t.getDate()+"/"+t.getMonth()+"/"+t.getFullYear()},S=window.ApxorLogger,E=a((function e(){var i=this;r(this,e),s(this,"_type","ALL"),s(this,"_userAttributes",[]),s(this,"_sessionAttributes",[]),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(i._type=t.audience.audience_type,i._userAttributes=t.audience.attributes.user,i._sessionAttributes=t.audience.attributes.session,!Array.isArray(i._userAttributes)||!Array.isArray(i._sessionAttributes))return S.error("No attributes"),!1}catch(t){return S.error(t),!1}return!0})),s(this,"validate",(function(e,n){var r=!0;return"FTU"===i._type&&(r=t.getController().getSessionInfo().is_first_session),r&&i._compareAttributes(e,i._userAttributes)&&i._compareAttributes(n,i._sessionAttributes)})),s(this,"_compareAttributes",(function(t,e){var i=e.length,n=!0;try{for(var r,o=function(){var i=e[a];if(!t[i.name]||!1===n)return{v:!1};var r=i.operator,o=i.type,s=i.value.map((function(t){return"s"===o?t:"l"===o?parseInt(t):"f"===o?parseFloat(t):void 0})),_=(Array.isArray(t[i.name])?t[i.name]:[t[i.name]]).some((function(t){return s.some((function(e){return g(t,e,r)}))}));n=n&&_},a=0;a<i;a++)if(r=o())return r.v}catch(t){S.error(t),n=!1}return n}))})),b=window.ApxorLogger,C=a((function t(){var e=this;r(this,t),s(this,"_count",0),s(this,"_timeInterval",0),s(this,"_validity","SESSION"),s(this,"_shownCount",0),s(this,"_sessionCount",0),s(this,"_originalCount",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e._count=t.frequency.count,e._originalCount=e._count,e._timeInterval=t.frequency.time_interval,e._validity=t.frequency.validity,e._sessionCount=t.frequency.ses_lmt,e._dayCount=t.frequency.day_lmt;var i=M.getInstance().getQeState();if(!d(i)||!d(i[t._id]))return!0;if("SESSION"===e._validity){if(e._count=parseInt(e._count)-parseInt(i[t._id].SESSION),e._count<=0)return console.warn("Max count limit reached for session:"+t._id),!1}else{if("OVERALL"!==e._validity)return b.info("Invalid config."),!1;if(e._count=parseInt(e._count)-parseInt(i[t._id].OVERALL),e._count<=0)return console.warn("Max count limit reached for overall:"+t._id),!1}}catch(t){return b.error(t),!1}return!0})),s(this,"decrementCampaignCount",(function(){e._count=e._count-1})),s(this,"getFrequencyCount",(function(){return e._count})),s(this,"resetCampaignCount",(function(){"SESSION"===e._validity&&(e._count=e._originalCount,b.info("Campaign Limit reset"))})),s(this,"isFrequencyWithInLimits",(function(t){try{if(e._count<=0)return!1;var i=M.getInstance().getQeState();if(!d(i)||!d(i[t]))return!0;if(0!==e._sessionCount)if(parseInt(e._sessionCount)-parseInt(i[t].SESSION)<=0)return!1;if(0!==e._dayCount){var n,r=y();if(parseInt(e._dayCount)-parseInt((null===(n=i[t])||void 0===n?void 0:n.DATES[r])||0)<=0)return!1}}catch(t){b.error("Error validating the frequency:"+t)}return!0}))})),A=a((function t(){var e=this;r(this,t),s(this,"_name",""),s(this,"_type",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{var i;e._name=t.meta.name,e._type=t.meta.type,e._only_context=t.meta.only_context,e._attr=(null===(i=t.meta)||void 0===i?void 0:i.attr)||{}}catch(t){return window.ApxorLogger.error(t),!1}return!0}))})),w=window.ApxorLogger,T=a((function t(){var e=this;r(this,t),s(this,"_startDate",-1),s(this,"_endDate",-1),s(this,"_startTime",-1),s(this,"_endTime",-1),s(this,"_timeLimits",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(isNaN(Date.parse(t.validity.start_date))||isNaN(Date.parse(t.validity.end_date)))return w.error("Not valid dates"),!1;if(e._startDate=Date.parse(t.validity.start_date),e._endDate=Date.parse(t.validity.end_date),d(t.time_limits_in_day)&&(e._timeLimits=t.time_limits_in_day,e._timeLimits&&d(t.time_limits))){var i=(new Date).toISOString().split("T")[0];if(e._startTime=Date.parse(i+"T"+t.time_limits.start_time+".000Z"),e._endTime=Date.parse(i+"T"+t.time_limits.end_time+".000Z"),isNaN(e._startTime)||isNaN(e._endTime))return w.error("Not valid times"),!1}}catch(t){return w.error(t),!1}return!0})),s(this,"validate",(function(){var t=Date.now();return t>e._startDate&&t<e._endDate&&(!e._timeLimits||t>=e._startTime&&t<=e._endTime)}))})),I=a((function t(){var e=this;r(this,t),s(this,"_name",""),s(this,"_additionalInfo",{}),s(this,"_path",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{e._name=t.name,e._additionalInfo=t.additional_info,e._path=null==t?void 0:t.path}catch(t){return!1}return!0}))})),O=a((function t(){var e=this;r(this,t),s(this,"_lower",0),s(this,"_upper",0),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(e._lower=Number(t.lower),e._upper=Number(t.upper),isNaN(e._lower)||isNaN(e._upper))return!1}catch(t){return!1}return!0}))})),q=a((function t(){var e=this;r(this,t),s(this,"_occurredTime",0),s(this,"_eventType",""),s(this,"_navigation",""),s(this,"_details",new I),s(this,"_timeBounds",new O),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e._eventType=t.event_type,e._navigation=t.activity,e._details.parse(t.details)&&e._timeBounds.parse(t.time_bounds)}catch(t){return!1}}))})),F=window.ApxorLogger,L=a((function t(){var e=this;r(this,t),s(this,"_occurredTime",0),s(this,"_sequence",-1),s(this,"_count",0),s(this,"_countOperator",""),s(this,"_navigation",""),s(this,"_eventType",""),s(this,"_timeBounds",new O),s(this,"_details",new I),s(this,"_precondition",new q),s(this,"_combineOperator","AND"),s(this,"_canCheckOldData",!1),s(this,"_type",void 0),s(this,"_route",""),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{return e._sequence=t.sequence,e._count=t.count_config.count,e._countOperator=t.count_config.operator,e._navigation=t.activity,e._eventType=t.event_type,e._combineOperator=t.combine_operator,e._type=t.type,e._route=null==t?void 0:t.route,e._details.parse(t.details)&&e._precondition.parse(t.trigger)&&e._timeBounds.parse(t.time_bounds)}catch(t){return F.error(t),!1}}))})),N=window.ApxorLogger,D=function(){function e(){var i=this;r(this,e),s(this,"_satisfiedCount",0),s(this,"_uuid",""),s(this,"_condition",new L),s(this,"_triggered",!1),s(this,"_isSatisfied",!1),s(this,"_index",0),s(this,"_combineOperator","AND"),s(this,"_oldEventCount",-1),s(this,"_kpi",[]),s(this,"_eventTimes",{}),s(this,"_receivedEventForKpi",!1),s(this,"initialize",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3],a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:[];i._uuid=n,i._index=r,i._kpi=a;var s=i._condition.parse(e);if(s){if(i._combineOperator=i._condition._combineOperator,i._condition._canCheckOldData){var _=i._condition._details._name;"APX_PAGE_OPENED"===_&&(_=i._condition._details._additionalInfo.navigation_id,_=d(_)?_:i._condition._details._name),i._oldEventCount=t.getController().getEventCount(_);var u=i._condition._count,c=i._condition._countOperator;if(i._isSatisfied=i._compare(i._oldEventCount-1,u,c,!1),i._triggered=i._isSatisfied,i._isSatisfied&&"APX_PAGE_OPENED"===i._condition._details._name)return!0}return o&&0!==r||i.register(),!0}return!1})),s(this,"register",(function(){var t=i._condition,e=t._precondition,n=M.getInstance();"app_start"===e._eventType?(i._triggered=!0,n.registerForEvent(p(t._eventType)+"___"+t._details._name,i._onReceiveEvent)):n.registerForEvent(p(t._eventType)+"___"+e._details._name,i._onReceiveEvent)})),s(this,"_onReceiveEventForKpiForSameEvent",(function(t,e,n,r){var o,a=(Date.now()-i._eventTimes[e])/1e3;(null===(o=i._condition)||void 0===o||null===(o=o._details)||void 0===o||null===(o=o._additionalInfo)||void 0===o?void 0:o.time)/1e3>a&&i._displayCampaign(n)})),s(this,"_onReceiveEventForKpi",(function(t,e,n,r){var o,a;i._receivedEventForKpi=!0;var s=Date.now(),_=null===(o=i._condition)||void 0===o||null===(o=o._precondition)||void 0===o?void 0:o._details._name,u=(s-i._eventTimes[_])/1e3,c=null===(a=i._condition)||void 0===a||null===(a=a._details)||void 0===a||null===(a=a._additionalInfo)||void 0===a?void 0:a.time;(c/=1e3)>u&&i._displayCampaign(n)})),s(this,"_onReceiveEventForNoKpi",(function(t,e,n,r){i._receivedEventForKpi=!0})),s(this,"_onReceiveEvent",(function(e,n,r,o){var a=M.getInstance();if(i._triggered)p(i._condition._eventType)===e&&i._validateTimeBounds(r-i._condition._precondition._occurredTime,i._condition._timeBounds)&&i._condition._details._name===n&&i._compareAdditionalInfo(i._condition._details._additionalInfo,o)&&(i._satisfiedCount+=1,i._isSatisfied=i._compare(i._satisfiedCount,i._condition._count,i._condition._countOperator),i._isSatisfied&&(i._condition._occurredTime=r,a.validate(i._uuid,i._index)));else if(i._triggered=i._validatePrecondition(e,n,r,o),i._triggered){var s=i._condition,_=s._precondition;if(_._occurredTime=r,"activity_time"===(null==s?void 0:s._eventType)){var u,c,d,l,f=null==s||null===(u=s._details)||void 0===u||null===(u=u._additionalInfo)||void 0===u?void 0:u.time;(null==s||null===(c=s._route)||void 0===c?void 0:c.length)>0?setTimeout((function(){var e;(null===(e=t.getController())||void 0===e?void 0:e._appEventsNoKpi).length<=2&&s._route===location.pathname&&i._displayCampaign(r)}),f):(null==s||null===(d=s._details)||void 0===d||null===(d=d._additionalInfo)||void 0===d?void 0:d.nkpi.length)>0?(setTimeout((function(){i._receivedEventForKpi||(i._isSatisfied=!0,i._isSatisfied&&(i._satisfiedCount+=1,i._isSatisfied=i._compare(i._satisfiedCount,i._condition._count,i._condition._countOperator),i._isSatisfied&&(i._condition._occurredTime=r,a.validate(i._uuid,i._index)))),s._details._additionalInfo.nkpi.map((function(t){a.unregisterFromEvent(h(s._details._additionalInfo.et)+"___"+t,i),i._triggered=!1}))}),f),s._details._additionalInfo.nkpi.map((function(t){a.registerForEvent(h(s._details._additionalInfo.et)+"___"+t,i._onReceiveEventForNoKpi)}))):(null==s||null===(l=s._details)||void 0===l||null===(l=l._additionalInfo)||void 0===l?void 0:l.kpi.length)>0&&(setTimeout((function(){s._details._additionalInfo.kpi.map((function(t){a.unregisterFromEvent(h(s._details._additionalInfo.et)+"___"+t,i)}))}),f),s._details._additionalInfo.kpi.map((function(t){t===s._precondition._details._name?(a.unregisterFromEvent(p(_._eventType)+"___"+_._details._name,i),a.registerForEvent(h(s._details._additionalInfo.et)+"___"+t,i._onReceiveEventForKpiForSameEvent)):a.registerForEvent(h(s._details._additionalInfo.et)+"___"+t,i._onReceiveEventForKpi)})))}else a.unregisterFromEvent(p(_._eventType)+"___"+_._details._name,i),a.registerForEvent(p(s._eventType)+"___"+s._details._name,i);i._eventTimes[n]=Date.now()}})),s(this,"_validatePrecondition",(function(t,e,n,r){var o=i._condition._precondition,a=p(o._eventType)===t&&o._details._name===e&&i._validateTimeBounds(n,o._timeBounds)&&i._compareAdditionalInfo(o._details._additionalInfo,r);return a="APX_PAGE_OPENED"===e?a&&location.pathname===o._details._path:a})),s(this,"_validateTimeBounds",(function(t,e){var i=Math.ceil(t);return i>e._lower&&i<e._upper})),s(this,"_compare",(function(t,e,n){var r=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];switch(r&&i._condition._canCheckOldData&&(t+=i._oldEventCount),n){case"EQ":return t===e;case"GT":return t>e;case"GTE":return t>=e;case"LT":return t<e;case"LTE":return t<=e;default:return!1}})),s(this,"_compareAdditionalInfo",(function(t,e){var i=!0;try{var r,o=function(){if(!e[a]||!1===i)return{v:!1};if("object"===n(t[a])){var r,o=t[a].op,s=t[a].t;"s"===s?r=t[a].val:"l"!==s&&"f"!==s||(r=parseFloat(t[a].val));var _=(Array.isArray(e[a])?e[a]:[e[a]]).some((function(t){return g(t,r,o)}));i=i&&_}else i=i&&g(e[a],t[a],"EQ")};for(var a in t)if(r=o())return r.v}catch(t){N.error(t),i=!1}return i}))}return a(e,[{key:"_displayCampaign",value:function(t){var e=M.getInstance();this._isSatisfied=!0,this._isSatisfied&&(this._satisfiedCount+=1,this._isSatisfied=this._compare(this._satisfiedCount,this._condition._count,this._condition._countOperator),this._isSatisfied&&(this._condition._occurredTime=t,e.validate(this._uuid,this._index)))}}]),e}(),x=window.ApxorLogger,k=a((function e(){var i=this;r(this,e),s(this,"_events",[]),s(this,"_ret_day",{}),s(this,"_session",{}),s(this,"_toggleRetDay",!1),s(this,"_toggleSession",!1),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{i._events=t.overall_cfg.events,i._ret_day=t.overall_cfg.ret_day,i._session=t.overall_cfg.session,i._toggleRetDay=t.overall_cfg.toggleRetDay,i._events=t.overall_cfg.events,i._toggleSession=t.overall_cfg.toggleSession}catch(t){return x.error(t),!1}return!0})),s(this,"validate",(function(){var e=parseInt(t.getController().getFromStorage("apx_retained_days")),n=parseInt(t.getController().getFromStorage("apx_retained_session"));if(i._toggleRetDay&&!isNaN(e)&&!(e>=i._ret_day.from&&e<=i._ret_day.to))return!1;if(i._toggleSession&&!isNaN(n)&&!(n>=i._session.from&&n<=i._session.to))return!1;try{for(var r=t.getController().getFromStorage("_apx_lt_count"),o=t.getSiteId(),a=JSON.parse(v(o,r)),s=0;s<i._events.length;s++){if(a[i._events[s].name.replace("'","").replace("’","")])return!1}}catch(t){x.error("Failed to validate the lt count:"+t)}return!0}))})),P=window.ApxorLogger,j=a((function e(){var n=this;r(this,e),s(this,"_conditionValidators",[]),s(this,"_uuid",""),s(this,"_meta",new A),s(this,"_audience",new E),s(this,"_validity",new T),s(this,"_frequency",new C),s(this,"_overallconfig",new k),s(this,"_respectSequence",!1),s(this,"_noKpiArray",[]),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};try{if(!d(t._id))return P.error("No Id"),!1;if(!d(t.enabled)||!t.enabled)return P.error("Not enabled"),!1;if(!(n._meta.parse(t)&&n._validity.parse(t)&&n._frequency.parse(t)&&n._audience.parse(t)&&n._overallconfig.parse(t)))return!1;if(!d(t.conditions)||!Array.isArray(t.conditions))return P.error("No valid conditions",t.conditions),!1;n._uuid=t._id,n._respectSequence=!!d(t.sequence_enabled)&&t.sequence_enabled,n._respectSequence&&t.conditions.sort((function(t,e){return t.sequence<e.sequence}));for(var e=t.conditions,i=e.length,r=0;r<i;r++){n._noKpiArray=[];var o=e[r];if("didn't"===o.type){var a;if(!(n._meta.parse(t)&&n._validity.parse(t)&&n._frequency.parse(t)&&n._audience.parse(t)&&n._overallconfig.parse(t)))return;var s={trigger_key:o.trigger.details.name,no_kpi_array:null==o||null===(a=o.details)||void 0===a||null===(a=a.additional_info)||void 0===a?void 0:a.nkpi,condition_id:null==o?void 0:o._id,time_bounds:o.time_bounds.upper};n._noKpiArray=[].concat(_(n._noKpiArray),[s])}var u=new D;u.initialize(o,n._uuid,r,n._respectSequence,n._noKpiArray)&&n._conditionValidators.push(u)}return n._conditionValidators.length>0}catch(t){return P.error(t),!1}})),s(this,"evaluate",(function(t){if(!(t<0))if(n._respectSequence){var e=n._conditionValidators[t];if(d(e)&&e._isSatisfied){var i=n._conditionValidators[t-1];if(d(i)&&!i._isSatisfied)return;var r=n._conditionValidators[t+1];d(r)?r.register():n._validateAllConditions()}}else n._validateAllConditions()})),s(this,"_validateAllConditions",(function(){var e=t.getController().getUserAttributes(),r=t.getController().getSessionAttributes();if(n._validity.validate()&&n._audience.validate(e,r)&&n._overallconfig.validate()){for(var o=n._conditionValidators.length,a=o<1,s="",_=0;_<o;_++){var u=n._conditionValidators[_],c=u._isSatisfied;if(""===s.trim())a=c;else switch(s){case"AND":a=a&&c;break;case"OR":a=a||c}s=u._combineOperator}if(a){if(console.debug("onCondition satisfied"),!n._frequency.isFrequencyWithInLimits(n._uuid))return void console.warn("Maximum limit reached",n._uuid);console.log("Dispatching event",n._meta._type),!0===n._meta._only_context&&t.logEvent("apx_context_evaluated",i(i({},n._meta._attr),{},{message_name:n._meta._name,id:n._uuid})),t.getController().dispatchEvent(n._meta._type,{name:n._meta._type,additional_info:{uuid:n._uuid,name:n._meta._name}})}}})),s(this,"decrementCampaignCount",(function(){n._frequency.decrementCampaignCount()})),s(this,"getFrequencyCount",(function(){return n._frequency.getFrequencyCount()})),s(this,"resetFrequencyCount",(function(){return n._frequency.resetCampaignCount()}))})),R=a((function t(){var e=this;r(this,t),s(this,"_configs",{}),s(this,"parse",(function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{configs:[]};if(d(t)&&d(t.configs)){var i=t.configs;if(!Array.isArray(i))return;i.sort((function(t,e){var i,n;return(null!==(i=t.prio)&&void 0!==i?i:-1)-(null!==(n=e.prio)&&void 0!==n?n:-1)}));for(var n=0;n<i.length;n++){var r=i[n],o=r._id,a=new j;a.parse(r)?e._configs[o]=a:console.warn("Failed to parse cfg",o)}}})),s(this,"validate",(function(t,i){e._configs[t]&&e._configs[t].evaluate(i)})),s(this,"decrementCampaignCount",(function(t){e._configs[t].decrementCampaignCount()})),s(this,"getFrequencyCount",(function(t){return e._configs[t].getFrequencyCount()})),s(this,"resetFrequencyCounts",(function(){var t=e._configs;for(var i in t)t[i].resetFrequencyCount()})),s(this,"getCampaignMeta",(function(t){try{if(e._configs){var i=e._configs[t];if(i&&i._meta)return i._meta}}catch(t){console.log("Error in getting the campaign meta ".concat(t))}return{}}))})),K=window.ApxorLogger,Q=a((function e(){var i=this;r(this,e),s(this,"_listeners",{}),s(this,"_buffer",[]),s(this,"_isEnabled",!1),s(this,"initialize",(function(){var e=t.getController();e.registerForEvent("APP_EVENT",(function(t){return i._onEvent(t,"AE")})),e.registerForEvent("CLIENT_EVENT",(function(t){return i._onEvent(t,"CE")}))})),s(this,"enable",(function(){for(var t in i._buffer)i._notifyListeners(t.event,t.key,t.type);i._isEnabled=!0})),s(this,"registerToEvent",(function(t,e){var n;"function"==typeof e&&((n=i._listeners[t]?i._listeners[t]:[]).push(e),i._listeners[t]=n,K.debug("Listeners list: ",i._listeners))})),s(this,"unregisterFromEvent",(function(t,e){if(i._listeners[t]){for(var n=i._listeners[t],r=[],o=0;o<n.length;o++){var a=n[o];a!==e&&r.push(a)}i._listeners[t]=r}})),s(this,"_onEvent",(function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"AE",n=e+"___"+t.name;i._notifyListeners(t,n,e)})),s(this,"_notifyListeners",(function(e,n,r){if(i._isEnabled){if(K.debug("Notifying listeners for event: "+e+", "+n,i._listeners),i._listeners[n])for(var o=i._listeners[n],a=t.getController().getSDKRunningTimeInSec(),s=0;s<o.length;s++){(0,o[s])(r,e.name,a,e.additional_info)}}else i._buffer.push({event:e,key:n,type:r})}))})),V=window.ApxorLogger,M=function(){function e(){var i=this;return r(this,e),s(this,"_isInitialized",!1),s(this,"_configLookup",null),s(this,"_date",y()),s(this,"_eventsListener",new Q),s(this,"_siteId",t.getSiteId()),s(this,"_qeState",{}),s(this,"getQeState",(function(){try{var e=t.getController().getFromStorage("qe_state");return e?JSON.parse(v(i._siteId,e)):(i._qeState={},i.setQeState())}catch(t){return i._qeState={},i.setQeState()}})),s(this,"setQeState",(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";try{t.getController().persistToStorage("qe_state",i._qeState,!0)}catch(n){""===e?i._qeState={}:i._qeState[e]={SESSION:0,OVERALL:0,DATES:{}},t.getController().persistToStorage("qe_state",i._qeState,!0)}return i._qeState})),s(this,"initialize",(function(){i._isInitialized||(i._isInitialized=!0,i._configLookup=new R,i._eventsListener.initialize(),i._qeState=i.getQeState(),V.info("QE Initialized.."))})),s(this,"parse",(function(t){i._check()?(i._configLookup.parse(t),i._eventsListener.enable()):V.warn("Must call init first. Unable to proceed")})),s(this,"validate",(function(t,e){i._check()&&i._configLookup.validate(t,e)})),s(this,"updateCount",(function(t){try{d(i._qeState[t])||i.createObjConfig(t),i.incrementFrequencies(t),i.setQeState(t),i._configLookup.decrementCampaignCount(t)}catch(t){console.log("Could not update the count config:".concat(t))}})),s(this,"resetFrequencyCounts",(function(){i._configLookup.resetFrequencyCounts()})),s(this,"getFrequencyCount",(function(t){return i._configLookup.getFrequencyCount(t)})),s(this,"registerForEvent",(function(t,e){i._eventsListener.registerToEvent(t,e)})),s(this,"unregisterFromEvent",(function(t,e){i._eventsListener.unregisterFromEvent(t,e)})),s(this,"fetch",(function(e,i,n,r){t.getController().fetchConfiguration(e,i,n,r)})),s(this,"_check",(function(){return i._isInitialized})),s(this,"getCampaignMetaFromQueryEngine",(function(t){return i._configLookup.getCampaignMeta(t)})),s(this,"getCEStartDate",(function(){return i._date})),e.instance||(e.instance=this),e.instance}return a(e,[{key:"createObjConfig",value:function(t){try{this._qeState=this.getQeState(),d(this._qeState[t])||(this._qeState[t]={SESSION:0,OVERALL:0,DATES:{}},this._date&&(this._qeState[t].DATES[this._date]=0),this.setQeState(t))}catch(t){V.error("Can not create the frequency count object:"+t)}}},{key:"incrementFrequencies",value:function(t){this._qeState=this.getQeState();var e=this._qeState[t];e.SESSION=e.SESSION+1,e.OVERALL=e.OVERALL+1;var i=y();i===this._date&&e.DATES&&e.DATES[i]||(this._date=i,e.DATES={},e.DATES[this._date]=0),e.DATES[this._date]=e.DATES[this._date]+1}}],[{key:"getInstance",value:function(){return e.instance||(e.instance=new e),e.instance}}]),e}();s(M,"instance",void 0),window.ceVersion=122;try{void 0===exports&&null===exports||(exports.default=M,module.exports=exports.default)}catch(t){}return M}));
