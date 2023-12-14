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
      "b0bf1fc7-b104-4e92-9cc5-590fcb685c29",
      {
        idle_time_out: 1800,
        plugins: ["ApxorRTM"],
        version: "144",
      },
      function success(data) {
        console.log("APXOR SDK Initialized");
      },
      function error() {
        console.log("APXOR SDK not initialized");
      });
