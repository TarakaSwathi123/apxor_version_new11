 const _d = new Date();
  (function (a, p, x, o, r) {
    Apxor = a.Apxor || { _q: [], _st: _d };
    [
      "init",
      "setUserId",
      "setUserProperties",
      "setSessionProperties",
      "logPageView",
      "logEvent",
      "logClientEvent",
      "setAppVersion",
      "getClientId",
      "getSessionId",
      "startNewSession",
      "endSession",
      "flattenJSON",
      "setRedirectionHandler",
    ].forEach(function (m) {
      Apxor[m] = function () {
        this._q.push({ m: m, args: arguments });
      };
    });
   })(window, document, "script");
    Apxor.init(
      "823d8c43-a823-4045-9d69-49b441d13206",
      {
        idle_time_out: 1800,
        plugins: ["ApxorRTM"],
        version: "144",
        auto_event_logging:true,
      },
      function success(data) {
        console.log("APXOR SDK Initialized");
      },
      function error() {
        console.log("APXOR SDK not initialized");
      });
