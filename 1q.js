console.log("Initializing Apxor");
window.Apxor?.init(
      "b0bf1fc7-b104-4e92-9cc5-590fcb685c29",
      {
        idle_time_out: 1800,
        plugins: ["ApxorRTM"],
        version: "144",
      },
      function success(data) {
        console.log("SDK Initialized: " + data.client_id);
      },
      function error() {
        console.log("SDK is not initialized.");
      }
    );
