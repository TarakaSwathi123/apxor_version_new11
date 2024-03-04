const ON_HTML = "<b>View Selection Mode: ON";
const OFF_HTML = "<b>View Selection Mode: OFF</b>";


const BROWSERS = {
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
};


const APX_OVERLAY = "apx-oly";
const APX_DIALOG_CONTENT = "apx-dlg-c";


const SSE_API = "https://server.apxor.com/v1/sse/";
const LAYOUT_URL = SSE_API + "layout?appId=<aid>&deviceId=<uid>";
const PREVIEW_API = SSE_API + "ui-config?appId=<aid>&deviceId=<uid>";
const CONFIG_API = SSE_API + "art-config?appId=<aid>&deviceId=<uid>";

const FRONTEND_API = "https://server.apxor.com/v4/frontendapi/web/test-devices";
const ADD_TEST_DEVICE_API = FRONTEND_API + "?appId=<aid>";
const REMOVE_TEST_DEVICE_API = FRONTEND_API + "/<uid>?appId=<aid>";


 const createDialog = (
  width,
  min_height,
  {
    dim_background = true,
    dim_bg_color = "#000000",
    dim_bg_opacity = 0.87,
    position,
  }
) => {
  const dialogRoot = document.createElement("div");
  dialogRoot.setAttribute("id", APX_OVERLAY);
  const styleNode = document.createElement("style");
  let justifyContent = "center";
  let alignItems = "center";
  switch (position) {
    case "bottom-left":
      justifyContent = "flex-start";
      alignItems = "flex-end";
      break;
    case "bottom-right":
      justifyContent = "flex-end";
      alignItems = "flex-end";
      break;
    case "top-left":
      justifyContent = "flex-start";
      alignItems = "flex-start";
      break;
    case "top-right":
      justifyContent = "flex-end";
      alignItems = "flex-start";
      break;
    default:
      break;
  }

  let bg_color = "none";
  if (dim_background) {
    const rgb = hexToRgb(dim_bg_color);
    bg_color = `rgb(${rgb.r}, ${rgb.g}, ${rgb.b}, ${dim_bg_opacity})`;
  }

  styleNode.innerHTML = `
#apx-oly {
  width:100%;height:100%;position:fixed;top:0;left:0;background-color:${bg_color};
  display:flex;justify-content:${justifyContent};align-items:${alignItems};border-radius:3px;z-index:2147483647
}
#apx-oly > * {font-family: inherit;box-sizing:unset}
.apx-dlg-c {
  width:${width}px;min-height:${min_height}%;background:white;z-index:99999999;opacity:0;position:relative;visibility:hidden;
  transition:all 500ms cubic-bezier(0, -0.37, 0, 2.06);top:-15px;border-radius:3px;margin:20px
}
.apx-dlg-c.open {opacity:1;visibility:visible;top:0}
  `
    .replaceAll("\n", "")
    .replace(/[\s]{2,999}/g, "");

  const dialogContent = document.createElement("div");
  dialogContent.setAttribute("id", APX_DIALOG_CONTENT);
  dialogContent.classList.add(APX_DIALOG_CONTENT);

  dialogRoot.appendChild(dialogContent);
  dialogRoot.appendChild(styleNode);

  document.body.appendChild(dialogRoot);
  return dialogRoot;
};

const getDevice = () => {
  const { navigator: { userAgent = "" } = {} } = window;
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

const isNull = (term) => term === null;
const isUndefined = (term) => typeof term === "undefined";

 const feedBackMessagePopUp = (message) => {
  const feedbackModal = `
        <style> 
          .apx-container{
            padding:10px;
          }
        </style>
        <div id="apx-innerElement" class="apx-container">
              <div id="close-button" style="cursor: pointer;position:absolute;top:9px;right:9px;"><svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>
                </svg>
              </div>
              <div style="font-family: inherit;font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;
              color: #FFFFFF; display: flex; gap: 12px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="33" height="33" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />
</svg><div style = "align-self: center;padding-right:20px;">${message}</div></div>
        </div>
      `;
  const feedbackParentDiv = document.createElement("div");
  feedbackParentDiv.style = `
        z-index:99999999;
        background:#16202f;
        position:fixed;
        top:1%;
        right:1%;
        border-radius: 12px;
      `;
  feedbackParentDiv.innerHTML = feedbackModal;
  feedbackParentDiv.id = "apx-container";
  document.body.appendChild(feedbackParentDiv);
};


const getCookie = (name) => {
  if (window.document) {
    const nameEQ = name + "=";
    const storedCookies = window.document.cookie.split(";");
    for (let i = 0; i < storedCookies.length; i++) {
      let cookie = storedCookies[i];
      while (cookie.charAt(0) === " ") {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return decodeURIComponent(
          cookie.substring(nameEQ.length, cookie.length)
        );
      }
    }
  }
  return null;
};

 const APX_PREVIEW_CAMPAIGN_NAME = "APX-PR3VI3W-CAMPGAIN";
 const REGISTER_EVENTS = "register-events";
 const REGISTER_PAGES = "register-pages";
 const VIEW_SELECTION = "view-selection";

const uuid = (base) => {
  return [
    Math.random,
    function () {
      return uuid.last ? uuid.last + Math.random() : Math.random();
    },
    Math.random,
    Date.now,
    Math.random,
  ]
    .map(function (fn) {
      return fn()
        .toString(base || 16 + Math.random() * 20)
        .substr(-8);
    })
    .join("-");
};


const onMouseOver = (e) => {
  if (e.target) {
    const { classList } = e.target;
    const isApxor =
      classList.contains("apx-highlight") ||
      classList.toString().indexOf("apx-") !== -1;

    if (classList && !isApxor) {
      e.target.classList.add("apx-highlight");
      e.target.oldOnClick = e.target.onclick;
      e.target.onclick = null;
    }
  }
};

const handleDocumentOnClick = (e, callback) => {
  const target = e.target;
  if (target && target.classList.contains("apx-highlight")) {
    e.preventDefault();
    e.stopPropagation();

    target.classList.remove("apx-highlight");
    target.onclick = target.oldOnClick;
    target.oldOnClick = null;

    if (callback) {
      callback(target);
    }
  }
};

 function dragElement(elmnt) {
  let PADDING = 8;

  let rect;
  let viewport = {
    bottom: window.innerHeight - PADDING,
    left: PADDING,
    right: window.innerWidth - PADDING,
    top: PADDING,
  };

  let xPos = 0,
    yPos = 0,
    oldX = 0,
    oldY = 0;
  const dragEle = document.getElementById(elmnt.id + "-h");
  if (dragEle) {
    dragEle.addEventListener("mousedown", dragMouseDown);
    dragEle.addEventListener("touchstart", dragMouseDown, { passive: false });
  } else {
    elmnt.addEventListener("mousedown", dragMouseDown);
    elmnt.addEventListener("touchstart", dragMouseDown, { passive: false });
  }

  function dragMouseDown(e) {
    e.preventDefault();
    e.stopPropagation();
    e = e || window.event;

    if (e.type === "touchstart") {
      oldX = e.targetTouches[0].pageX;
      oldY = e.targetTouches[0].pageY;
    } else {
      oldX = e.clientX;
      oldY = e.clientY;
    }

    rect = elmnt.getBoundingClientRect();

    document.addEventListener("mouseup", closeDragElement);
    document.addEventListener("touchend", closeDragElement, { passive: false });
    document.addEventListener("mousemove", elementDrag);
    document.addEventListener("touchmove", elementDrag, { passive: false });
  }

  function elementDrag(e) {
    e.preventDefault();
    e.stopPropagation();
    e = e || window.event;
    // calculate the new cursor position:

    if (e.type === "touchmove") {
      xPos = oldX - e.targetTouches[0].pageX;
      yPos = oldY - e.targetTouches[0].pageY;
      oldX = e.targetTouches[0].pageX;
      oldY = e.targetTouches[0].pageY;
    } else {
      xPos = oldX - e.clientX;
      yPos = oldY - e.clientY;
      oldX = e.clientX;
      oldY = e.clientY;
    }

    const newLeft = elmnt.offsetLeft - xPos;
    const newTop = elmnt.offsetTop - yPos;

    if (
      newLeft < viewport.left ||
      newTop < viewport.top ||
      newLeft + rect.width > viewport.right ||
      newTop + rect.height > viewport.bottom
    ) {
      // the element will hit the boundary, do nothing...
    } else {
      elmnt.style.top = elmnt.offsetTop - yPos + "px";
      elmnt.style.left = elmnt.offsetLeft - xPos + "px";
      elmnt.style.right = "";
    }
  }

  function closeDragElement() {
    //elmnt.style.top = "0px";
    document.removeEventListener("mouseup", closeDragElement);
    document.removeEventListener("touchend", closeDragElement);
    document.removeEventListener("mousemove", elementDrag);
    document.removeEventListener("touchmove", elementDrag);
  }
}

const onMouseOut = (e) => {
  if (e.target) {
    if (e.target.classList && e.target.classList.contains("apx-highlight")) {
      e.target.classList.remove("apx-highlight");
      e.target.onclick = e.target.oldOnClick;
      e.target.oldOnClick = null;
    }
  }
};


export class WYSIWYG {
  _styleNode = null;
  _viewPickerNode = null;
  _addRemoveTestDeviceDialog = null;
  _wysiwygRoot = null;
  _vid = "";
  _type = getDevice();
  _heartbeatTimeout;
  _isShowingToastPopup = false;
  _toastInApp = null;
  _elementSelector;
  _enableViewSelectionButton = null;
  _disableViewSelectionButton = null;
  _targetElement;
  _eventName;
  _eventTypeSelected;
  _eventPage;
  _defineEventPage;
  _sideBar;
  _selectedType;
  _selectedEventType;
  _dynamicUrl;
  _urlInEventObj;
  _is_dynamic;
  _selectorForEvent;
  _event_Type;
  _eventTypeSelectionPage;
  _eventDescription;
  _feature_field;
  _selector_created;
  _show_hide_toggleElement = null;
  _toggle_icon;
  _show_hide_toggle_text =null;
  constructor() {
    this.result = null;
  }

  init = (siteId, rtmInstance) => {
    // Enable WYSIWYG only when cookie is enabled
    const encodedKey = getCookie("_apx_ewc");
    if (!encodedKey) {
      // If no cookie don't initialize the plugin
      return;
    }

    // Get the stored key in cookie
    let key = atob(encodedKey);
    try {
      // Read the data using the decoded key from localStorage
      let decodedData = Apxor.getController().getFromStorage(key, true);
      if (!decodedData) {
        // If there is no data, someone is trying to inflitrate
        return;
      }

      const {
        app_id,
        expiry,
        volatile_id,
        mode = VIEW_SELECTION,
      } = decodedData;
      this._vid = volatile_id;
      if (app_id === siteId && Date.now() <= expiry) {
        // No need to delete the cookie as it will be taken care by the Browser
        // deleteCookie("_apx_ew");

        // Create a node which display a small div at the center of the screen
        // When view selection is enabled/disabled
        const node = document.createElement("span");
        node.style =
          "z-index:99999999;visibility:hidden;position:fixed;top:50%;left:50%;transform:translate(-50%,-50%);padding:16px 24px;background:#252f37;border-radius:3px;opacity:0;font-size:24px;color:white;transition:all .3s ease-out";
        node.innerHTML = ON_HTML;
        this._viewPickerNode = node;
        document.body.appendChild(node);

        // Create the style node which will be used to highlight the views upon mouse hover
        this._styleNode = document.createElement("style");
        this._styleNode.innerHTML =
          ".apx-highlight{height:auto;z-index:9999999999;outline: 2px solid red;cursor:crosshair}";
        document.body.appendChild(this._styleNode);

        this.isSelectionMode = false;

        if (mode === REGISTER_EVENTS) {
          this.createNewWYSIWYG();

          // events flow goes here
        } else if (mode === REGISTER_PAGES) {
          this.createNewWYSIWYGForTrackingPages();
        } else {
          // Get the existind test device information, if this is user is already marked this as a test device

          this.testDeviceData = Apxor.getController().getFromStorage(
            "_apx_td",
            true
          );

          if (this.testDeviceData) {
            const { name = "", id = "" } = this.testDeviceData;

            // If both ID and NAME exists, then send this device as selected device for preview and testing
            // Also, wait for the preview messages from SSE server
            if (name !== "" && id !== "") {
              this._makeSSERequest("select", `${name} - ${id}`, id);

              // reset the heartbeat timeout immediately after making the SSE request
              this.resetHeartbeatTimeout();
              this.previewEventSource = new EventSource(
                PREVIEW_API.replace("<aid>", siteId).replace("<uid>", id)
              );
              this.artConfigEventSource = new EventSource(
                CONFIG_API.replace("<aid>", siteId).replace("<uid>", id)
              );
              this.previewEventSource.onmessage =
                this.artConfigEventSource.onmessage = (e) => {
                  if (e && e.data && e.data === "{}") {
                    this.resetHeartbeatTimeout();
                  } else if (e && e.data && e.data !== "{}") {
                    clearTimeout(this._heartbeatTimeout);
                    this._handleSSEResponse(rtmInstance, e.data);
                  }
                  // Dismiss any active toast popups
                  if (this._isShowingToastPopup) {
                    this.dismissToastPopup();
                  }
                };
              this.previewEventSource.onerror =
                this.artConfigEventSource.onerror = () => {
                  // Check if either EventSource connection has closed, indicating a disconnection.
                  if (
                    this.previewEventSource.readyState === EventSource.CLOSED ||
                    this.artConfigEventSource.readyState === EventSource.CLOSED
                  ) {
                    Logger.warn("SSE is disconnected");
                
                    this._isShowingToastPopup = true;
                  }
                };
            }
          }
          this.createNewWYSIWYGForSelection();
        }

        //this._createDraggableWYSIWYGOverlay(rtmInstance);

        //this.createEventsSideBar();
      }
    } catch (e) {
      window.ApxorLogger.error("WYSIWYG can not be initialised");
    }
  };

  createNewWYSIWYGForSelection = (rtmInstance) => {
    this.dropDownExpanded = false;
    const isAdded =
      this.testDeviceData !== null &&
      this.testDeviceData !== undefined &&
      this.testDeviceData.id &&
      this.testDeviceData.name;

    this._newwysiswg = document.createElement("div");
    this._newwysiswg.id = "apx-wr";
    this._newwysiswg.classList.add("apx-wrclass");
    this._newwysiswg.style =
      "z-index:99999999;visibility:visible;position:fixed;width:260px;height:50px;top:0%;left:50%;transform:translate(-50%, 0%);background:#F2F2F2;opacity:1;font-size:24px;color:white;border-radius:0%;border-bottom-left-radius:50cm;border-bottom-right-radius:50cm; user-select: none;box-shadow: rgb(0, 0, 0, 0.4) 0px 0px 6px 0px;";
    this.wysiwg_container = document.createElement("div");
    this.wysiwg_container.classList.add("apx-wcclass");
    this.wysiwg_container.style =
      "position:relative;top:0%;left:0%;display:flex;flex-direction:row;height:50px;";
    this.imgContainer = document.createElement("div");
    this.imgContainer.id = "apx-wr-h";
    this.imgContainer.classList.add("apx-icclass");
    this.imgContainer.style =
      "background-color:#002845;border-bottom-left-radius:50cm;padding: 4px 25px 4px 30px;cursor:move;";
    this.imgContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="31" viewBox="0 0 20 31" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6546 0.285222C19.1759 0.714811 19.2404 1.47412 18.7988 1.98119L7.59849 14.8419H4.48593L0.274291 9.76354C-0.154672 9.2463 -0.0713816 8.48872 0.460326 8.07143C0.992033 7.65414 1.77081 7.73516 2.19977 8.2524L5.66873 12.4352H6.45197L16.9112 0.425515C17.3528 -0.0815556 18.1333 -0.144367 18.6546 0.285222Z" fill="#FF7F33"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7534 30.7146C19.2746 30.285 19.3391 29.5257 18.8974 29.0187L8.08905 16.6122H5.04724L0.974613 21.5213C0.545563 22.0385 0.628726 22.7961 1.16036 23.2135C1.692 23.6308 2.47079 23.5499 2.89984 23.0328L6.22979 19.0189H6.94278L17.01 30.5746C17.4517 31.0816 18.2323 31.1443 18.7534 30.7146Z" fill="#00BDE1"/>
</svg>`;
    this.dropDownContainer = document.createElement("div");
    this.dropDownContainer.classList.add("apx-ddcclass");
    this.dropDownContainer.style =
      "width:100%; display:flex; align-items: center;justify-content: center; cursor: pointer";
    this.dropDownText = document.createElement("div");
    this.dropDownText.classList.add("apx-ddtclass");
    this.dropDownText.style = "color:black; font-size: 17px;";
    this.dropDownText.innerHTML = "Select";
    this.dropDownImage = document.createElement("div");
    this.dropDownImage.classList.add("apx-ddiclass");
    this.dropDownImage.style = "margin-left:12px; margin-top:2px;";
    this.dropDownImage.innerHTML =
      '<style>@keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-8px);}60% {transform: translateY(-4px);}}</style><svg class = "apx-ddisvg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style = "animation: bounce 2s infinite;"><path class = "apx-" d="M2.26544 5.21182C2.19383 5.14415 2.1096 5.09126 2.01756 5.05614C1.92551 5.02103 1.82745 5.00439 1.72897 5.00718C1.6305 5.00997 1.53353 5.03212 1.44362 5.07238C1.3537 5.11264 1.2726 5.17021 1.20494 5.24182C1.13727 5.31342 1.08438 5.39765 1.04926 5.4897C1.01415 5.58174 0.997514 5.6798 1.0003 5.77828C1.00309 5.87676 1.02524 5.97372 1.0655 6.06364C1.10576 6.15355 1.16333 6.23465 1.23494 6.30232L7.98494 12.6773C8.12419 12.809 8.30855 12.8823 8.50019 12.8823C8.69182 12.8823 8.87618 12.809 9.01544 12.6773L15.7662 6.30232C15.8394 6.2351 15.8984 6.15401 15.94 6.06377C15.9816 5.97352 16.0048 5.87592 16.0083 5.77662C16.0119 5.67733 15.9956 5.57832 15.9606 5.48535C15.9255 5.39239 15.8723 5.30731 15.8041 5.23507C15.7359 5.16283 15.654 5.10486 15.5632 5.06454C15.4724 5.02421 15.3745 5.00233 15.2751 5.00017C15.1758 4.99801 15.077 5.0156 14.9845 5.05194C14.8921 5.08827 14.8077 5.14262 14.7364 5.21182L8.50019 11.1008L2.26544 5.21182Z" fill="black"/></svg>';

    this.dropDownContainer.appendChild(this.dropDownText);
    this.dropDownContainer.appendChild(this.dropDownImage);

    this.dropDownContainer.onclick = (e) => {
      e.stopImmediatePropagation();
      this.dropDownBox.style.display = this.dropDownExpanded ? "none" : "block";
      this.dropDownExpanded = !this.dropDownExpanded;
      if (document.querySelector(".apx-ddisvg"))
        document.querySelector(".apx-ddisvg").style.animation = "none";
      this.dismissDropDownOutsideClick = () => {
        if (this.dropDownExpanded) {
          this.dropDownBox.style.display = "none";
          this.dropDownExpanded = false;
          if (document.querySelector(".apx-ddisvg"))
            document.querySelector(".apx-ddisvg").style.animation =
              "bounce 2s infinite";
          document.body.removeEventListener(
            "click",
            this.dismissDropDownOutsideClick
          );
        }
      };
      document.body.addEventListener("click", this.dismissDropDownOutsideClick);
    };

    this.wysiwg_container.appendChild(this.imgContainer);
    this.wysiwg_container.appendChild(this.dropDownContainer);
    this.dropDownBox = document.createElement("div");
    this.dropDownBox.classList.add("apx-ddbclass");
    this.dropDownBox.style =
      "position: absolute; background-color: #ffffff; margin-top: 4px; box-shadow: rgb(0, 0, 0, 0.4) 0px 0px 6px 0px;display: none;transform:border-radius: 12px; width: 260px";
    this.dropDownBoxButtons = document.createElement("div");
    this.dropDownBoxButtons.innerHTML = `
    <style>
    .apx-bh {
      padding:12px;
    }
    .apx-b {
      background: none;
      color: black;
      border-radius: 12px;
      border: 0px;
    padding-block: 8px;
    padding-inline: 16px;
    display: block;
    font-size: 16px;
    }
    .apx-b:hover {
    background-color: rgba(255, 199, 39, 0.10);
    color: #F97316;
}
    </style>
        <div id="apx-bh" class="apx-cr apx-bh" style="display: flex; flex-direction: column; gap: 8px;">
          <button class="apx-b" id="apx-a" style="display:${
            isAdded ? "none" : "block"
          }">
              Register Device
          </button>
          <button class="apx-b" id="apx-r" style="display:${
            isAdded ? "block" : "none"
          }">
              Remove as test device
          </button>
          <button class="apx-b" id="apx-ev" style="display:${
            isAdded && this.isSelectionMode
              ? "none"
              : isAdded
              ? "block"
              : "none"
          }">
              Enable view selection
          </button>
          <button class="apx-b" id="apx-dv" style="display:${
            isAdded && this.isSelectionMode ? "block" : "none"
          }">
              Disable view selection
          </button>
          <button class="apx-b" id="apx-remove-widget" style="display:block">
              Stop Tracking
          </button>
        </div>`;
    const testDeviceDetailsContainer = document.createElement("div");
    testDeviceDetailsContainer.id = "apx-ddtd";
    testDeviceDetailsContainer.style.display = "none";
    const testDeviceDetails = document.createElement("div");
    testDeviceDetails.style =
      "display: flex; justify-content: center; align-items: center; padding: 12px; gap: 4px; color: black; flex-direction: column; text-align: center;";

    const testDeviceName = document.createElement("div");
    testDeviceName.id = "apx-ddtdname";
    testDeviceName.innerHTML = this.testDeviceData?.name;
    const testDeviceId = document.createElement("div");
    testDeviceId.id = "apx-ddtdid";
    testDeviceId.style = "font-size: 10px; font-family: monospace; ";
    testDeviceId.innerHTML = this.testDeviceData?.id;
    testDeviceDetails.appendChild(testDeviceName);
    testDeviceDetails.appendChild(testDeviceId);
    testDeviceDetailsContainer.appendChild(testDeviceDetails);
    testDeviceDetailsContainer.appendChild(document.createElement("hr"));
    this.dropDownBox.appendChild(testDeviceDetailsContainer);
    this.dropDownBox.appendChild(this.dropDownBoxButtons);
    if (this.testDeviceData?.name && this.testDeviceData?.id) {
      testDeviceDetailsContainer.style.display = "block";
      this.dropDownBox.style.paddingTop = "0px";
    }
    this._newwysiswg.appendChild(this.wysiwg_container);
    this._newwysiswg.appendChild(this.dropDownBox);
    document.body.appendChild(this._newwysiswg);
    this._wysiwygRoot = this._newwysiswg;
    this.handlingListenersForSelection(rtmInstance);
    //dragElement(this._newwysiswg);
  };

  handlingListenersForSelection = (rtmInstance) => {
    this.stopTrackingButton = document.getElementById("apx-remove-widget");
    this.stopTrackingButton.addEventListener("click", () => {
      document.body.removeChild(this._newwysiswg);
      this.removeWidgetDetails();
      this.previewEventSource.close();
      this.artConfigEventSource.close();
      let show_hide_ele = document.getElementById("apx-show-hide-icon");
      if (show_hide_ele) {
        show_hide_ele.remove();
      }
      if (this._targetElement) {
        this._targetElement.classList.remove("apx-highlight");
      }
    });

    const escHelpPopup = document.createElement("div");
    escHelpPopup.classList.add("apx-esc");
    escHelpPopup.style =
      "z-index:99999999;position:fixed;top:80%;left:50%;transform:translate(-50%,-50%);padding:16px 24px;background:black;border-radius:6px;font-size:16px;color:white; cursor:move;";
    escHelpPopup.innerHTML = `press <strong style="font-size: 18px">Esc</strong> to go back to view selection page`;

    const escListener = (evt) => {
      evt.stopImmediatePropagation(); // this is added in order to avoid seeting listener multiple times
      if (evt.key === "Escape") {
        this._newwysiswg.style.display = "block";
        disableViewSelectionHandler();
      }
    };

    const addDeviceButton = document.getElementById("apx-a");
    addDeviceButton.onclick = () => {
      this._showAddTestDeviceDialog(rtmInstance);
    };

    const removeDeviceButton = document.getElementById("apx-r");
    removeDeviceButton.onclick = () => {
      const testDeviceDetailsContainer = document.getElementById("apx-ddtd");
      testDeviceDetailsContainer.style.display = "none";
      this.dropDownBox.style.paddingTop = "12px";
      // this.dropDownBox.style.display = this.dropDownExpanded ? "none" : "block";
      // this.dropDownExpanded = !this.dropDownExpanded;
      // Make remove API call
      fetch(
        REMOVE_TEST_DEVICE_API.replace("<aid>", Apxor.getSiteId()).replace(
          "<uid>",
          this.testDeviceData.id
        ),
        {
          method: "DELETE",
          headers: {
            apx_web_key: "WTCKFAIVAJKYJA3HCV80WIKZU98R9NJG",
          },
        }
      )
        .then((res) => {
          if (res.ok && res.status === 200) {
            return res.json();
          }
          return null;
        })
        .then((data) => {
          if (data) {
            Apxor.getController().persistToStorage("_apx_td", {}, true);
            this.testDeviceData = null;

            addDeviceButton.style.display = "block";
            removeDeviceButton.style.display =
              enableViewSelectionButton.style.display =
              disableViewSelectionButton.style.display =
                "none";

            if (this.isSelectionMode) {
              this._hideSelectionMode();
            }
            this.removeWidgetDetails();
            this.previewEventSource.close();
            this.artConfigEventSource.close();
          }
        })
        .catch((e) => console.error(e));
    };

    const enableViewSelectionButton = document.getElementById("apx-ev");
    enableViewSelectionButton.onclick = () => {
      //this.dropDownBox.style.display = this.dropDownExpanded ? "none" : "block";
      //this.dropDownExpanded = !this.dropDownExpanded;

      document.body.appendChild(escHelpPopup);
      dragElement(escHelpPopup);
      this._newwysiswg.style.display = "none";

      document.addEventListener("keydown", escListener);
      this.isSelectionMode = true;
      if (Apxor.isFlutter()) {
        const helper =
          Apxor.getApxorFlutterHelper(); /*getApxorFlutterHelper:returns object*/
        helper.disableClick();
        const response = helper.dump(); /*dump:for feature extraction*/
        // console.log(response);
        const layout = response.r;
        this.clickListener = (e) => {
          var x = e.clientX,
            y = e.clientY;
          console.log("x,y", x, y);
          const rect = disableViewSelectionButton.getBoundingClientRect();
          console.log("rect", rect);
          // if disable view selection is clicked then return
          if (
            x >= rect.left &&
            x <= rect.right &&
            y >= rect.top &&
            y <= rect.bottom
          ) {
            return;
          }
          this.traverseLayouts(layout.views, x, y, 0);
          var { id, path, bounds } = this.result.layout;
          this.result = null;
          if (id && id.length != 0) {
            navigator.clipboard.writeText(id);
          } else {
            navigator.clipboard.writeText(path);
          }
          showFeedbackAfterViewIdCopyForFlutter(bounds);
          //disabling the view seletion after showing the container
          disableViewSelectionHandler();
          this._makeSSERequest("view", location.href, id + "___" + path);
          this._newwysiswg.style.display = "block";
        };
      } else {
        // Attach the mouseover and mouseout listeners
        window.addEventListener("mouseover", onMouseOver, true);
        window.addEventListener("mouseout", onMouseOut, true);
        this.clickListener = (e) =>
          handleDocumentOnClick(e, (target) => {
            // Send this information over to SSE server which will send this info to dashboard
            const cssSelector = this.cssPath(target, true);
            const xPath = this.xPath(target, true);
            //copying value to the clipboard
            navigator.clipboard.writeText(cssSelector + "___" + xPath);
            //creating container for indicating user to paste the code in dashboard
            showFeedbackAfterViewIdCopy();
            //disabling the view seletion after showing the container
            disableViewSelectionHandler();
            this._makeSSERequest(
              "view",
              location.href,
              cssSelector + "___" + xPath
            );
            this._newwysiswg.style.display = "block";
          });
      }
      window.addEventListener("click", this.clickListener, true);

      this._hideToast(false);

      enableViewSelectionButton.style.display = "none";
      disableViewSelectionButton.style.display = "block";
    };

    const disableViewSelectionHandler = () => {
      this._hideSelectionMode();

      document.removeEventListener("keydown", escListener);
      const ele = document.querySelector(".apx-esc");
      if (ele) document.body.removeChild(ele);
      disableViewSelectionButton.style.display = "none";
      enableViewSelectionButton.style.display = "block";
    };

    const disableViewSelectionButton = document.getElementById("apx-dv");
    disableViewSelectionButton.onclick = disableViewSelectionHandler;

    const showFeedbackAfterViewIdCopy = () => {
      const enableViewSelectionBtn = document.querySelector("#apx-ev");
      enableViewSelectionBtn.disabled = true;

      let message =
        "View selected. Go back to Apxor dashboard to proceed with campaign creation.";

      if (this._type !== "Desktop") {
        message =
          "View selected. Go back to Apxor dashboard to proceed with campaign creation.";
      }
      //       const feedbackModal = `
      //         <style>
      //           .apx-container{
      //             padding:20px;
      //           }
      //         </style>
      //         <div id="apx-container" class="apx-container">
      //               <div id="close-button" style="cursor: pointer;position:absolute;top:12px;right:12px;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      //                 <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>
      //                 </svg>
      //               </div>
      //               <div style="font-family: 'inter';font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;
      //               color: #FFFFFF; display: flex; gap: 12px;"><svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-circle-check-filled" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="#9e9e9e" fill="none" stroke-linecap="round" stroke-linejoin="round">
      //   <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
      //   <path d="M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z" stroke-width="0" fill="currentColor" />
      // </svg><div>${message}</div></div>
      //         </div>
      //       `;
      //       const feedbackParentDiv = document.createElement("div");
      //       feedbackParentDiv.style = `
      //         z-index:99999999;
      //         background:#2e8b57;
      //         position:fixed;
      //         top:10%;
      //         right:12px;
      //         border-radius: 12px;
      //       `;
      //       feedbackParentDiv.innerHTML = feedbackModal;
      //       document.body.appendChild(feedbackParentDiv);
      feedBackMessagePopUp(message);
      const closeButton = document.getElementById("close-button");
      const dismissCallback = () => {
        const conatiner = document.getElementById("apx-container");
        conatiner?.remove();
        enableViewSelectionBtn.disabled = false;
      };
      window.setTimeout(dismissCallback, 5000);
      closeButton.addEventListener("click", dismissCallback);
    };

    const showFeedbackAfterViewIdCopyForFlutter = (bounds) => {
      const divELement = document.createElement("div");
      const width = bounds.right - bounds.left;
      const height = bounds.bottom - bounds.top;
      divELement.style = `
        position:absolute;
        top:${bounds.top}px;
        left:${bounds.left}px;
        width:${width}px;
        height:${height}px;
        z-index:99999;outline: 2px solid red;cursor:default;
        `;
      document.body.appendChild(divELement);
      const enableViewSelectionBtn = document.querySelector("#apx-ev");
      enableViewSelectionBtn.disabled = true;

      let message =
        "View selected. Go back to Apxor dashboard to proceed with campaign creation.";

      //let uiElementPasteSVG = this.uiElementPasteSVG;

      if (this._type !== "Desktop") {
        message =
          "View selected. Go back to Apxor dashboard to proceed with campaign creation.";
        //uiElementPasteSVG = "";
      }
      const feedbackModal = `
        <style> 
          .apx-container{
            padding:20px;
          }
        </style>
        <div id="apx-container" class="apx-container">
              <div id="close-button" style="position:fixed;top:20px;right:10px;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>
                </svg>
              </div>
              <div style="font-family: inherit;font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;
              color: #FFFFFF;">${message}</div>
        </div>
      `;
      const feedbackParentDiv = document.createElement("div");
      feedbackParentDiv.style = `
        z-index:99999999;
        background:#002845;
        position:fixed;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
      `;
      feedbackParentDiv.innerHTML = feedbackModal;
      document.body.appendChild(feedbackParentDiv);
      const closeButton = document.getElementById("close-button");
      closeButton.addEventListener("click", () => {
        const conatiner = document.getElementById("apx-container");
        conatiner.remove();
        divELement.remove();
        enableViewSelectionBtn.disabled = false;
        const helper =
          Apxor.getApxorFlutterHelper(); /*getApxorFlutterHelper:returns object*/
        helper.enableClick();
      });
    };

    this._wysiwygRoot.addEventListener("preview", disableViewSelectionHandler);
    this._wysiwygRoot.addEventListener("added", () => {
      addDeviceButton.style.display = "none";
      removeDeviceButton.style.display = "block";

      enableViewSelectionButton.style.display = "block";
    });
  };

  createNewWYSIWYGForTrackingPages = () => {
    this._currentURL = window?.location?.href;
    this._newwysiswg = document.createElement("div");
    this._newwysiswg.id = "apx-wr";
    this._newwysiswg.classList.add("apx-wrclass");
    this._newwysiswg.style =
      "z-index:99999999;visibility:visible;position:fixed;width:260px;height:50px;top:0%;left:50%;transform:translate(-50%, 0%);background:#F2F2F2;opacity:1;font-size:24px;color:white;transition:all .3s ease-out;border-radius:0%;border-bottom-left-radius:50cm;border-bottom-right-radius:50cm; user-select: none;box-shadow: rgb(0, 0, 0, 0.4) 0px 0px 6px 0px;";
    this.wysiwg_container = document.createElement("div");
    this.wysiwg_container.classList.add("apx-wcclass");
    this.wysiwg_container.style =
      "position:relative;top:0%;left:0%;display:flex;flex-direction:row;height:50px;";
    this.imgContainer = document.createElement("div");
    this.imgContainer.classList.add("apx-icclass");
    this.imgContainer.style =
      "background-color:#002845;border-bottom-left-radius:50cm;padding: 4px 25px 4px 30px;";
    this.imgContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="31" viewBox="0 0 20 31" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6546 0.285222C19.1759 0.714811 19.2404 1.47412 18.7988 1.98119L7.59849 14.8419H4.48593L0.274291 9.76354C-0.154672 9.2463 -0.0713816 8.48872 0.460326 8.07143C0.992033 7.65414 1.77081 7.73516 2.19977 8.2524L5.66873 12.4352H6.45197L16.9112 0.425515C17.3528 -0.0815556 18.1333 -0.144367 18.6546 0.285222Z" fill="#FF7F33"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7534 30.7146C19.2746 30.285 19.3391 29.5257 18.8974 29.0187L8.08905 16.6122H5.04724L0.974613 21.5213C0.545563 22.0385 0.628726 22.7961 1.16036 23.2135C1.692 23.6308 2.47079 23.5499 2.89984 23.0328L6.22979 19.0189H6.94278L17.01 30.5746C17.4517 31.0816 18.2323 31.1443 18.7534 30.7146Z" fill="#00BDE1"/>
</svg>`;

    this.dropDownContainer = document.createElement("div");
    this.dropDownContainer.classList.add("apx-ddcclass");
    this.dropDownContainer.style =
      "width:100%; display:flex; align-items: center;justify-content: center; cursor: pointer";
    this.dropDownText = document.createElement("div");
    this.dropDownText.classList.add("apx-ddtclass");
    this.dropDownText.style = "color:black; font-size: 17px;";
    this.dropDownText.innerHTML = "Track Pages";
    this.dropDownImage = document.createElement("div");
    this.dropDownImage.classList.add("apx-ddiclass");
    this.dropDownImage.style = "margin-left:12px; margin-top:2px;";
    this.dropDownImage.innerHTML =
      '<style>@keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-8px);}60% {transform: translateY(-4px);}}</style><svg class = "apx-ddisvg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style = "animation: bounce 2s infinite;"><path class = "apx-" d="M2.26544 5.21182C2.19383 5.14415 2.1096 5.09126 2.01756 5.05614C1.92551 5.02103 1.82745 5.00439 1.72897 5.00718C1.6305 5.00997 1.53353 5.03212 1.44362 5.07238C1.3537 5.11264 1.2726 5.17021 1.20494 5.24182C1.13727 5.31342 1.08438 5.39765 1.04926 5.4897C1.01415 5.58174 0.997514 5.6798 1.0003 5.77828C1.00309 5.87676 1.02524 5.97372 1.0655 6.06364C1.10576 6.15355 1.16333 6.23465 1.23494 6.30232L7.98494 12.6773C8.12419 12.809 8.30855 12.8823 8.50019 12.8823C8.69182 12.8823 8.87618 12.809 9.01544 12.6773L15.7662 6.30232C15.8394 6.2351 15.8984 6.15401 15.94 6.06377C15.9816 5.97352 16.0048 5.87592 16.0083 5.77662C16.0119 5.67733 15.9956 5.57832 15.9606 5.48535C15.9255 5.39239 15.8723 5.30731 15.8041 5.23507C15.7359 5.16283 15.654 5.10486 15.5632 5.06454C15.4724 5.02421 15.3745 5.00233 15.2751 5.00017C15.1758 4.99801 15.077 5.0156 14.9845 5.05194C14.8921 5.08827 14.8077 5.14262 14.7364 5.21182L8.50019 11.1008L2.26544 5.21182Z" fill="black"/></svg>';

    this.dropDownContainer.appendChild(this.dropDownText);
    this.dropDownContainer.appendChild(this.dropDownImage);

    this.dropDownContainer.onclick = (e) => {
      e.stopImmediatePropagation();
      this.dropDownBox.style.display = this.dropDownExpanded ? "none" : "block";
      this.dropDownExpanded = !this.dropDownExpanded;
      if (document.querySelector(".apx-ddisvg"))
        document.querySelector(".apx-ddisvg").style.animation = "none";
      this.dismissDropDownOutsideClick = () => {
        if (this.dropDownExpanded) {
          this.dropDownBox.style.display = "none";
          this.dropDownExpanded = false;
          if (document.querySelector(".apx-ddisvg"))
            document.querySelector(".apx-ddisvg").style.animation =
              "bounce 2s infinite";
          document.body.removeEventListener(
            "click",
            this.dismissDropDownOutsideClick
          );
        }
      };
      document.body.addEventListener("click", this.dismissDropDownOutsideClick);
    };

    this.dropDownBox = document.createElement("div");
    this.dropDownBox.classList.add("apx-ddbclass");
    this.dropDownBox.style =
      "position: absolute; background-color: #ffffff; margin-top: 4px; box-shadow: rgb(0, 0, 0, 0.4) 0px 0px 6px 0px;display: none;transform: translate(10%, 0px);border-radius: 12px; width: 220px";
    this.dropDownBox.innerHTML = `
    <style>
    .apx-b {
      background: none;
      color: black;
      border-radius: 12px;
      border: 0px;
    padding-block: 8px;
    padding-inline: 16px;
    display: block;
    font-size: 16px;
    }
    .apx-b:hover {
    background-color: rgba(255, 199, 39, 0.10);
    color: #F97316;
}
    </style>
        <div id="apx-bh" class="apx-cr apx-bh" style="padding:12px; display: flex; flex-direction: column; gap: 8px;">
          <button class="apx-b" id="apx-start" style="display: block">
              Start Tracking
          </button>
          <button class="apx-b" id="apx-stop" style="display:block">
              Stop Tracking
          </button>
        </div>`;
    this.wysiwg_container.appendChild(this.imgContainer);
    this.wysiwg_container.appendChild(this.dropDownContainer);
    this._newwysiswg.appendChild(this.wysiwg_container);
    this._newwysiswg.appendChild(this.dropDownBox);
    document.body.appendChild(this._newwysiswg);
    this.createSideForPagesSelection();
    this.startTrackingButton = document.getElementById("apx-start");
    this.stopTrackingButton = document.getElementById("apx-stop");
    this.startTrackingButton.addEventListener(
      "click",
      this.showSideBarForPagesSelection
    );
    this.stopTrackingButton.addEventListener("click", () => {
      document.body.removeChild(this._newwysiswg);
      document.body.removeChild(this.sideBarRoot);
      this.removeWidgetDetails();
      let show_hide_ele = document.getElementById("apx-show-hide-icon");
      if (show_hide_ele) {
        show_hide_ele.remove();
      }
      if (this._targetElement) {
        this._targetElement.classList.remove("apx-highlight");
      }
    });
  };

  createSideForPagesSelection = () => {
    this.sideBarRoot = document.createElement("div");
    this.sideBarRoot.id = "apx-sidebar-root";
    this.sideBarStyles = document.createElement("style");
    this.sideBarStyles.innerHTML = `#apx-sidebar-root {
      z-index: 99999999;
  position: fixed;
  top: 0;
  right: -370px; /* initially hide sidebar */
  width: 370px;
  height: 100%;
  background-color: #fff;
  box-shadow: -2px 0px 25.600000381469727px 0px #0000001A;
  transition: left 0.3s ease; /* animate the left property */
}

#apx-sidebar-root.apx-sidebar-open {
  right: 0; /* display sidebar */
}

#apx-sidebar-container {
  display: flex;
  flex-direction: column;
  height: 100%;
}

#apx-sidebar-container-header {
  line-height: 21.78px;
    font-family: inherit;
    font-weight: 500;
    font-size: 18px;
  padding-left: 10%;
    display: flex;
    align-items: center;
  flex-basis: 8%;
  background-color: rgb(0, 40, 69);
  color: white;
}
#apx-sidebar-container-content {
  flex-basis: 84%;
}
#apx-sidebar-container-footer {
  flex-basis: 8%;
  background-color: #F5F5F5;
}`;
    this.sideBarRoot.appendChild(this.sideBarStyles);
    this.sideBarContainer = document.createElement("div");
    this.sideBarContainer.id = "apx-sidebar-container";
    this.sideBarContainerHeader = document.createElement("div");
    this.sideBarContainerHeader.id = "apx-sidebar-container-header";
    this.sideBarContainerHeader.style = "position: relative;";
    const closeSideBar = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="none" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />
</svg>`;
    this.sideBarContainerHeader.innerHTML = `<span>Track Page</span> <div id = "apx-closeSideBar" style = "position:absolute; top:50%; right:30px;transform: translate(0px, -50%); cursor:pointer;">${closeSideBar}</div>`;
    this.sideBarContainerContent = document.createElement("div");
    this.sideBarContainerContent.id = "apx-sidebar-container-content";
    this.sideBarContentPage1 = document.createElement("div");
    this.sideBarContentPage1.id = "apx-sidebar-content-page1";
    this.sideBarContentPage1.style =
      "height: 100%;flex-direction: column; display: flex; gap: 15px;justify-content: center; align-items: center;";
    const ImageContainer = document.createElement("div");
    ImageContainer.classList.add("apx-sidebar-icclass");
    ImageContainer.style = "text-align: center;";
    ImageContainer.innerHTML = `<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="31.5" cy="31.5" r="31.5" fill="#F5F5F5"/>
<mask id="mask0_486_3281" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="63" height="63">
<circle cx="31.5" cy="31.5" r="31.5" fill="#F4FBFF"/>
</mask>
<g mask="url(#mask0_486_3281)">
<path d="M105.511 10.3516H17.0739C14.7282 10.3516 12.8267 12.2532 12.8267 14.5988V48.3711C12.8267 50.7167 14.7282 52.6183 17.0739 52.6183H105.511C107.857 52.6183 109.758 50.7167 109.758 48.3711V14.5988C109.758 12.2532 107.857 10.3516 105.511 10.3516Z" fill="white"/>
<path d="M108.245 10.3516H14.3397C13.5041 10.3516 12.8267 11.029 12.8267 11.8647C12.8267 12.7003 13.5041 13.3777 14.3397 13.3777H108.245C109.081 13.3777 109.758 12.7003 109.758 11.8647C109.758 11.029 109.081 10.3516 108.245 10.3516Z" fill="#263238"/>
<path d="M15.7465 11.8629C15.7465 12.1992 15.4739 12.4717 15.1377 12.4717C14.8015 12.4717 14.5254 12.1992 14.5254 11.8629C14.5254 11.5267 14.7979 11.2542 15.1342 11.2542C15.4704 11.2542 15.7465 11.5267 15.7465 11.8629Z" fill="#FFC727"/>
<path d="M18.2346 11.8629C18.2346 12.1992 17.9621 12.4717 17.6259 12.4717C17.2896 12.4717 17.0171 12.1992 17.0171 11.8629C17.0171 11.5267 17.2896 11.2542 17.6259 11.2542C17.9621 11.2542 18.2346 11.5267 18.2346 11.8629Z" fill="white"/>
<path d="M20.7263 11.8629C20.7263 12.1992 20.4538 12.4717 20.1176 12.4717C19.7813 12.4717 19.5088 12.1992 19.5088 11.8629C19.5088 11.5267 19.7813 11.2542 20.1176 11.2542C20.4538 11.2542 20.7263 11.5267 20.7263 11.8629Z" fill="#455A64"/>
<path d="M98.7756 27.9244H23.7631C21.5465 27.9244 19.7495 29.7213 19.7495 31.938C19.7495 34.1546 21.5465 35.9516 23.7631 35.9516H98.7756C100.992 35.9516 102.789 34.1546 102.789 31.938C102.789 29.7213 100.992 27.9244 98.7756 27.9244Z" fill="#EBEBEB"/>
<path d="M39.3503 39.3599H23.4092C21.388 39.3599 19.7495 40.9984 19.7495 43.0196C19.7495 45.0408 21.388 46.6793 23.4092 46.6793H39.3503C41.3715 46.6793 43.01 45.0408 43.01 43.0196C43.01 40.9984 41.3715 39.3599 39.3503 39.3599Z" fill="#FFC727"/>
<path d="M52.4673 42.7374L53.8229 46.0112L52.4673 46.574L51.1047 43.2753L48.8643 45.0132V35.7861L55.3271 42.3091L52.4673 42.7374Z" fill="#263238"/>
<path d="M49.3384 33.7333V31.5" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M46.7939 34.827L45.2153 33.2484" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M45.767 37.4001H43.5337" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M46.8608 39.9448L45.2822 41.5269" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M49.4341 40.9713V43.2046" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M51.9785 39.8776L53.5606 41.4596" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M53.0049 37.3045H55.2382" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M51.9116 34.7598L53.4937 33.1812" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
</g>
</svg>`;
    const Description = document.createElement("div");
    Description.innerHTML =
      "<span>Click the button below to define a new page</span>";
    Description.style =
      "width:60%;color:#989cab;font-size:13px;text-align:center;";
    const ButtonContainer = document.createElement("div");
    ButtonContainer.style.textAlign = "center";
    const Button = document.createElement("button");
    Button.innerHTML = "Define Page";
    Button.style =
      "background-color:#F97316;color:#fff;font-size:13px;align-items:center;font-weight:500;font-family:inherit;height:40px;width:120px;border-radius:11px;border:#F97316;cursor:pointer;";
    ButtonContainer.appendChild(Button);
    Button.onclick = () => {
      this.showEventDefiningPage();
    };
    this.sideBarContentPage1.appendChild(ImageContainer);
    this.sideBarContentPage1.appendChild(Description);
    this.sideBarContentPage1.appendChild(ButtonContainer);

    this.sideBarContentPage2 = document.createElement("div");
    this.sideBarContentPage2.id = "apx-sidebar-content-page2";
    this.sideBarContentPage2.style =
      "height: 100%;padding-left: 10%;padding-top: 8%;display:none;";
    this.sideBarContentPage2.innerHTML = `
    <style>
    .apx-labelnames {
      font-family: inherit;
    font-weight: 500;
    line-height: 14.52px;
    font-size: 12px;
    }
    .apx-inputfields {
      padding-left: 10%;
      box-sizing: border-box;
      margin-top: 10px;
    background-color: #F7F8F8;
    border: none;
    width: 90%;
    height: 56px;
    border-radius: 12px;
    }
    .apx-inputfields::placeholder{
      font-family:inherit;
      font-weight:400;
      font-size: 14px;
      line-height: 14px;
    }
    .apx-inputfields:focus{
      outline: 2px solid #007aff;
    }
    #apx-dynamicURL::placeholder{
      font-family:monospace;
    }
    .apx-radio-buttons {
      accent-color: indianred;
      padding-block: 12px;
    }
    </style>
    <form id="apx-Form">
    <label for="name" class="apx-labelnames">Name</label>
    <span style="color: red; font-size: smaller;">*</span><br>
    <input type="text" id="apx-evname" required class="apx-inputfields" placeholder="Enter page name"><br><br>
    <label for="description" class="apx-labelnames">Description</label><br>
    <input type="text" id="apx-evDescription" required class="apx-inputfields" placeholder="Enter page description"><br><br>
    
    <label for="type" class="apx-labelnames">Type</label><br>
    <select id="apx-evtype" required class="apx-inputfields" style="padding-left: 10%">
      <option value="app_event">App Events</option>
      <option value="client_event">Client Events</option>
    </select><br><br>
    <div class="apx-labelnames"><label>URL</label></div>
    <div class = "apx-radio-buttons">
    <input type="radio" name="apx-url" id="apx-this-page" value="Only on this page" checked> <label for="apx-this-page">Only on this page</label></div>
    <div id="apx-extraField-url" style="display: block;padding-top: 2px;
    padding-left: 6%;
    font-family: monospace;
    font-weight: 400;
    color: #007aff;">
      <span id ="apx_current_url">${this._currentURL}</span><br>
    </div>
    <div class = "apx-radio-buttons">
    <input type="radio" name="apx-url" value="On urls that match" id="apx-selectDynamicUrl"> <label for="apx-selectDynamicUrl">On urls that match</label></div>
    <div id="apx-extraField" style="display: none;">
      <input type="url" name="apx-dynamicURL" id="apx-dynamicURL" class="apx-inputfields" required placeholder=${this._currentURL}><div style="padding-top: 4px;"><span style="font-size: 12px;"><strong>Note:</strong> Replace all the dynamic parts with *</div><br>
    </div>
    <div class = "apx-radio-buttons">
    <input type="radio" name="apx-url" id="apx-all-pages" value="All pages"> <label for="apx-all-pages">All pages</label></div><br>
    
  </form>`;
    const footerButtonContainrPage2 = document.createElement("div");
    footerButtonContainrPage2.id = "apx-footerButtonContainerPage2";
    footerButtonContainrPage2.style =
      "display:none;justify-content: space-between;align-items: center;height: 100%;padding-inline: 10%;";
    const footerButton1Page2 = document.createElement("button");
    footerButton1Page2.id = "apx-footerbutton1-page2";
    footerButton1Page2.innerHTML = "Cancel";
    footerButton1Page2.style =
      "background-color:#fff;color:#F97316;cursor:pointer;font-size:13px;font-weight:500;font-family:inherit;border-radius:11px;border:2px solid #F97316;padding: 12px;";
    const footerButton2Page2 = document.createElement("button");
    footerButton2Page2.id = "apx-submitButton";
    footerButton2Page2.innerHTML = "Save";
    footerButton2Page2.disabled = true;
    footerButton2Page2.style =
      "background-color:#F97316;color:#fff;font-size:13px;align-items:center;font-weight:500;font-family:inherit;border-radius:11px;border:#F97316;padding-inline: 24px;padding-block: 12px;opacity:0.2;cursor:not-allowed";
    footerButtonContainrPage2.appendChild(footerButton1Page2);
    footerButtonContainrPage2.appendChild(footerButton2Page2);

    this.sideBarContainerFooter = document.createElement("div");
    this.sideBarContainerFooter.id = "apx-sidebar-container-footer";
    this.sideBarContainerContent.appendChild(this.sideBarContentPage1);
    this.sideBarContainerContent.appendChild(this.sideBarContentPage2);
    this.sideBarContainerFooter.appendChild(footerButtonContainrPage2);
    this.sideBarContainer.appendChild(this.sideBarContainerHeader);
    this.sideBarContainer.appendChild(this.sideBarContainerContent);
    this.sideBarContainer.appendChild(this.sideBarContainerFooter);
    this.sideBarRoot.appendChild(this.sideBarContainer);

    document.body.appendChild(this.sideBarRoot);

    footerButton1Page2.addEventListener("click", () => {
      document.getElementById("apx-Form").reset();
      this.sideBarContentPage1.style.display = "flex";
      this.sideBarContentPage2.style.display = "none";
      document.getElementById("apx-footerButtonContainerPage2").style.display =
        "none";
    });

    footerButton2Page2.addEventListener("click", (event) => {
      event.preventDefault(); // Prevent default button behavior

      // Programmatically trigger form submission
      document.getElementById("apx-Form").requestSubmit();
    });

    document
      .getElementById("apx-closeSideBar")
      ?.addEventListener("click", () => {
        this.sideBarRoot.classList.remove("apx-sidebar-open");
        this.startTrackingButton.style.display = "block";
        document.getElementById("apx-Form").reset();
      });

    document.getElementById("apx-Form").addEventListener("submit", (event) => {
      event.preventDefault(); // Prevent form submission

      // Get form values
      let name = document.getElementById("apx-evname").value;
      let description =
        document.getElementById("apx-evDescription")?.value || "";
      let type = document.getElementById("apx-evtype").value;
      let url = document.querySelector('input[name="apx-url"]:checked');
      let dynamicURL = document.getElementById("apx-dynamicURL").value;

      // Create object
      const formData = {
        action: name,
        description: description,
        type: type,
        all_url: url.value === "All pages" ? true : false,
        url: url.value === "Only on this page" ? window.location.href : null,
        dynamicURL: url.value === "On urls that match" ? dynamicURL : null,
      };

      this._makeSSERequest(
        "view",
        "",
        "",
        () => {},
        () => {},
        null,
        [formData]
      );

      feedBackMessagePopUp("Saved Page Event");
      const closeButton = document.getElementById("close-button");
      const dismissCallback = () => {
        const conatiner = document.getElementById("apx-container");
        conatiner?.remove();
      };
      window.setTimeout(dismissCallback, 20000);
      closeButton.addEventListener("click", dismissCallback);
      document.getElementById("apx-Form").reset();
      this.sideBarRoot.classList.remove("apx-sidebar-open");
      this.startTrackingButton.style.display = "block";
      document.querySelector(".apx-ddisvg").style.animation =
        "bounce 2s infinite";
      // footerButton2Page2.style.opacity = 0.2;
      // footerButton2Page2.style.cursor = "not-allowed";
      console.log(formData);
    });

    document.addEventListener("input", () => {
      let name = document.getElementById("apx-evname").value;
      //let description = document.getElementById("apx-evDescription").value;
      let type = document.getElementById("apx-evtype").value;
      let url = document.querySelector('input[name="apx-url"]:checked');
      let dynamicURL = document.getElementById("apx-dynamicURL").value;
      let onlyThisPageInput = document.getElementById("apx-this-page");
      let dynamicUrlInput = document.getElementById("apx-selectDynamicUrl");

      let submitButton = document.getElementById("apx-submitButton");
      if (!onlyThisPageInput.checked) {
        document.getElementById("apx-extraField-url").style.display = "none";
      }
      if (!dynamicUrlInput.checked) {
        document.getElementById("apx-extraField").style.display = "none";
        document.getElementById("apx-dynamicURL").required = false;
        document.getElementById("apx-dynamicURL").value = "";
      }
      // if (
      //   document.activeElement.id !== "apx-this-page" &&
      //   document.activeElement.id !== "apx-extraField-url"
      // ) {
      //   document.getElementById("apx-extraField-url").style.display = "none";
      // }
      // if (
      //   document.activeElement.id !== "apx-selectDynamicUrl" &&
      //   document.activeElement.id !== "apx-extraField" &&
      //   document.activeElement.id !== "apx-dynamicURL"
      // ) {
      //   document.getElementById("apx-extraField").style.display = "none";
      //   document.getElementById("apx-dynamicURL").required = false;
      //   document.getElementById("apx-dynamicURL").value = "";
      // }
      if (name && type && url) {
        submitButton.disabled =
          url.value === "On urls that match"
            ? dynamicURL
              ? false
              : true
            : false;
      } else {
        submitButton.disabled = true;
      }
      if (!submitButton.disabled) {
        footerButton2Page2.style.opacity = 1;
        footerButton2Page2.style.cursor = "pointer";
      } else {
        footerButton2Page2.style.opacity = 0.2;
        footerButton2Page2.style.cursor = "not-allowed";
      }
    });

    document
      .getElementById("apx-selectDynamicUrl")
      .addEventListener("change", (e) => {
        if (e.target.checked) {
          document.getElementById("apx-extraField").style.display = "block";
          document.getElementById("apx-dynamicURL").required = true;
        } else {
          document.getElementById("apx-extraField").style.display = "none";
          document.getElementById("apx-dynamicURL").required = false;
        }
      });

    document.getElementById("apx-this-page").addEventListener("change", (e) => {
      if (e.target.checked) {
        document.getElementById("apx-extraField-url").style.display = "block";
      } else {
        document.getElementById("apx-extraField-url").style.display = "none";
      }
    });
  };

  showEventDefiningPage = () => {
    this.sideBarContentPage1.style.display = "none";
    this.sideBarContentPage2.style.display = "block";
    let url_ele = document.getElementById("apx_current_url");
    if (url_ele) {
      let current_url = window.location.href;
      url_ele.innerHTML = current_url;
    }
    document.getElementById("apx-footerButtonContainerPage2").style.display =
      "flex";
  };

  showSideBarForPagesSelection = () => {
    this.sideBarRoot.classList.add("apx-sidebar-open");
    this.startTrackingButton.style.display = "none";
    this.sideBarContentPage1.style.display = "flex";
    this.sideBarContentPage2.style.display = "none";
    let ele = document.querySelector("#apx-footerButtonContainerPage2");
    if (ele) {
      ele.style.display = "none";
    }
    // this.dropDownBox.style.display = this.dropDownExpanded ? "none" : "block";
    // this.dropDownExpanded = !this.dropDownExpanded;
  };

  createNewWYSIWYG = () => {
    this._newwysiswg = document.createElement("div");
    this._newwysiswg.id = "apx-wr";
    this._newwysiswg.classList.add("apx-wrclass");
    this._newwysiswg.style =
      "z-index:99999999;visibility:visible;position:fixed;width:260px;height:50px;top:0%;left:50%;transform:translate(-50%, 0%);background:#F2F2F2;opacity:1;font-size:24px;color:white;transition:all .3s ease-out;border-radius:0%;border-bottom-left-radius:50cm;border-bottom-right-radius:50cm; user-select: none;box-shadow: rgb(0, 0, 0, 0.4) 0px 0px 6px 0px;";
    this.wysiwg_container = document.createElement("div");
    this.wysiwg_container.classList.add("apx-wcclass");
    this.wysiwg_container.style =
      "position:relative;top:0%;left:0%;display:flex;flex-direction:row;height:50px;";
    this.imgContainer = document.createElement("div");
    this.imgContainer.classList.add("apx-icclass");
    this.imgContainer.style =
      "background-color:#002845;border-bottom-left-radius:50cm;padding: 4px 25px 4px 30px;";
    this.imgContainer.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="31" viewBox="0 0 20 31" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.6546 0.285222C19.1759 0.714811 19.2404 1.47412 18.7988 1.98119L7.59849 14.8419H4.48593L0.274291 9.76354C-0.154672 9.2463 -0.0713816 8.48872 0.460326 8.07143C0.992033 7.65414 1.77081 7.73516 2.19977 8.2524L5.66873 12.4352H6.45197L16.9112 0.425515C17.3528 -0.0815556 18.1333 -0.144367 18.6546 0.285222Z" fill="#FF7F33"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M18.7534 30.7146C19.2746 30.285 19.3391 29.5257 18.8974 29.0187L8.08905 16.6122H5.04724L0.974613 21.5213C0.545563 22.0385 0.628726 22.7961 1.16036 23.2135C1.692 23.6308 2.47079 23.5499 2.89984 23.0328L6.22979 19.0189H6.94278L17.01 30.5746C17.4517 31.0816 18.2323 31.1443 18.7534 30.7146Z" fill="#00BDE1"/>
</svg>`;
    // this._enableViewSelectionButton = document.createElement("div");
    // this._enableViewSelectionButton.innerText = "Track Events";
    // this._enableViewSelectionButton.style =
    //   "width:100%; display:flex; align-items: center;padding-left: 22px; cursor: pointer; color:black; font-size: 17px";
    // this._disableViewSelectionButton = document.createElement("div");
    // this._disableViewSelectionButton.innerText = "Stop Tracking";
    // this._disableViewSelectionButton.style =
    //   "font-style:inter;font-size:14px;padding-top:26px;padding-left:83px;color:#000000;font-weight:500;display:none;";
    this.dropDownContainer = document.createElement("div");
    this.dropDownContainer.classList.add("apx-ddcclass");
    this.dropDownContainer.style =
      "width:100%; display:flex; align-items: center;justify-content: center; cursor: pointer";
    this.dropDownText = document.createElement("div");
    this.dropDownText.classList.add("apx-ddtclass");
    this.dropDownText.style = "color:black; font-size: 17px;";
    this.dropDownText.innerHTML = "Track Events";
    this.dropDownImage = document.createElement("div");
    this.dropDownImage.classList.add("apx-ddiclass");
    this.dropDownImage.style = "margin-left:12px; margin-top:2px;";
    this.dropDownImage.innerHTML =
      '<style>@keyframes bounce {0%, 20%, 50%, 80%, 100% {transform: translateY(0);}40% {transform: translateY(-8px);}60% {transform: translateY(-4px);}}</style><svg class = "apx-ddisvg" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg" style = "animation: bounce 2s infinite;"><path class = "apx-" d="M2.26544 5.21182C2.19383 5.14415 2.1096 5.09126 2.01756 5.05614C1.92551 5.02103 1.82745 5.00439 1.72897 5.00718C1.6305 5.00997 1.53353 5.03212 1.44362 5.07238C1.3537 5.11264 1.2726 5.17021 1.20494 5.24182C1.13727 5.31342 1.08438 5.39765 1.04926 5.4897C1.01415 5.58174 0.997514 5.6798 1.0003 5.77828C1.00309 5.87676 1.02524 5.97372 1.0655 6.06364C1.10576 6.15355 1.16333 6.23465 1.23494 6.30232L7.98494 12.6773C8.12419 12.809 8.30855 12.8823 8.50019 12.8823C8.69182 12.8823 8.87618 12.809 9.01544 12.6773L15.7662 6.30232C15.8394 6.2351 15.8984 6.15401 15.94 6.06377C15.9816 5.97352 16.0048 5.87592 16.0083 5.77662C16.0119 5.67733 15.9956 5.57832 15.9606 5.48535C15.9255 5.39239 15.8723 5.30731 15.8041 5.23507C15.7359 5.16283 15.654 5.10486 15.5632 5.06454C15.4724 5.02421 15.3745 5.00233 15.2751 5.00017C15.1758 4.99801 15.077 5.0156 14.9845 5.05194C14.8921 5.08827 14.8077 5.14262 14.7364 5.21182L8.50019 11.1008L2.26544 5.21182Z" fill="black"/></svg>';

    this.dropDownContainer.appendChild(this.dropDownText);
    this.dropDownContainer.appendChild(this.dropDownImage);

    this.dropDownContainer.onclick = (e) => {
      e.stopImmediatePropagation();
      this.dropDownBox.style.display = this.dropDownExpanded ? "none" : "block";
      this.dropDownExpanded = !this.dropDownExpanded;
      if (document.querySelector(".apx-ddisvg"))
        document.querySelector(".apx-ddisvg").style.animation = "none";
      this.dismissDropDownOutsideClick = () => {
        if (this.dropDownExpanded) {
          this.dropDownBox.style.display = "none";
          this.dropDownExpanded = false;
          if (document.querySelector(".apx-ddisvg"))
            document.querySelector(".apx-ddisvg").style.animation =
              "bounce 2s infinite";
          document.body.removeEventListener(
            "click",
            this.dismissDropDownOutsideClick
          );
        }
      };
      document.body.addEventListener("click", this.dismissDropDownOutsideClick);
    };

    this.dropDownBox = document.createElement("div");
    this.dropDownBox.classList.add("apx-ddbclass");
    this.dropDownBox.style =
      "position: absolute; background-color: #ffffff; margin-top: 4px; box-shadow: rgb(0, 0, 0, 0.4) 0px 0px 6px 0px;display: none;transform: translate(10%, 0px);border-radius: 12px; width: 220px";
    this.dropDownBox.innerHTML = `
    <style>
    .apx-b {
      background: none;
      color: black;
      border-radius: 12px;
      border: 0px;
    padding-block: 8px;
    padding-inline: 16px;
    display: block;
    font-size: 16px;
    }
    .apx-b:hover {
    background-color: rgba(255, 199, 39, 0.10);
    color: #F97316;
}
    </style>
        <div id="apx-bh" class="apx-cr apx-bh" style="padding:12px; display: flex; flex-direction: column; gap: 8px;">
          <button class="apx-b" id="apx-start" style="display: block">
              Start Tracking
          </button>
          <button class="apx-b" id="apx-stop" style="display:block">
              Stop Tracking
          </button>
        </div>`;

    // this._disableViewSelectionButton.addEventListener(
    //   "click",
    //   this._disableViewSelectionHandler
    // );
    this.wysiwg_container.appendChild(this.imgContainer);
    this.wysiwg_container.appendChild(this.dropDownContainer);
    //this.wysiwg_container.appendChild(this._disableViewSelectionButton);
    this._newwysiswg.appendChild(this.wysiwg_container);
    this._newwysiswg.appendChild(this.dropDownBox);
    if (this._newwysiswg) {
      document.body.appendChild(this._newwysiswg);
    }

    this.startTrackingButton = document.getElementById("apx-start");
    this.stopTrackingButton = document.getElementById("apx-stop");

    this.startTrackingButton.addEventListener(
      "click",
      this._viewSelectionHandler
    );
    this.stopTrackingButton.addEventListener("click", () => {
      document.body.removeChild(this._newwysiswg);
      if (this._sideBar) document.body.removeChild(this._sideBar);
      this.removeWidgetDetails();
      let show_hide_ele = document.getElementById("apx-show-hide-icon");
      if (show_hide_ele) {
        show_hide_ele.remove();
      }
      if (this._targetElement) {
        this._targetElement.classList.remove("apx-highlight");
      }
    });
    //event obj to send to frontend
  };

  createEventsSideBar = (defineChecker = false) => {
    const disableViewSelectionHandler = () => {
      // this._hideSelectionMode();
      this._newwysiswg.style.display = "block";
      window.removeEventListener("mouseover", onMouseOver, true);
      window.removeEventListener("mouseout", onMouseOut, true);
      window.removeEventListener("click", this.clickListener, true);
      this.createEventsSideBar();

      document.removeEventListener("keydown", this.escListenerforevents);
      const ele = document.querySelector(".apx-esc");
      if (ele) document.body.removeChild(ele);
    };
    const escHelpPopup = document.createElement("div");
    escHelpPopup.classList.add("apx-esc");
    escHelpPopup.style =
      "z-index:99999999;position:fixed;top:80%;left:50%;transform:translate(-50%,-50%);padding:16px 24px;background:black;border-radius:6px;font-size:16px;color:white; cursor:move;";
    escHelpPopup.innerHTML = `press <strong style="font-size: 18px">Esc</strong> to go back to view selection page`;

    this.escListenerforevents = (evt) => {
      evt.stopImmediatePropagation(); // this is added in order to avoid seeting listener multiple times
      if (evt.key === "Escape") {
        disableViewSelectionHandler();
      }
    };
    this._sideBar = document.createElement("div");
    this._sideBar.style.position = "fixed";
    this._sideBar.style.top = "0";
    this._sideBar.id = "apxor_sidebar";
    this._sideBar.style.display = "block";
    this._sideBar.style.right = "-300px"; // Initially hidden
    this._sideBar.style.width = "370px";
    this._sideBar.style.height = "100%";
    this._sideBar.style.backgroundColor = "#ffffff";
    this._sideBar.style.boxShadow = "0 0 20px rgba(0, 0, 0, 0.2)";
    this._sideBar.style.transition = "right 0.3s ease";
    this._sideBar.style.zIndex = "99999999";
    this._show_hide_toggleElement = document.createElement("div");
    this._show_hide_toggleElement.id = "apx-show-hide-icon";
    this._show_hide_toggleElement.style =
      "width:20px;height:70px;background-color:rgb(0,40,69,0.9);position:absolute;right:369px;top:0px;color:rgb(255,255,255,0.7);transform:rotate(180deg);writing-mode:vertical-lr;text-align:center;border-top-right-radius:5px;border-bottom-right-radius:5px;cursor:pointer;z-index:99999997;display:flex;justify-content:center;align-items:center;gap:4px;";
    this._show_hide_toggle_text =document.createElement("div");
    this._show_hide_toggle_text.innerText ="hide";
    this._show_hide_toggleElement.appendChild(this._show_hide_toggle_text)
    this._toggle_icon = document.createElement("div");
    this._toggle_icon.innerText = "►";
    this._toggle_icon.style =
      "transform:rotate(180deg);color:#ffffff;font-size:11px;";
    this._show_hide_toggleElement.appendChild(this._toggle_icon);
    this._clickHandlingForShowHideIcon();
    document.body.appendChild(this._show_hide_toggleElement);
    this._defineEventPage = document.createElement("div");
    this._defineEventPage.style.display = "block";
    this._defineEventPage.style.zIndex = "99999999";
    const defineEvent = document.createElement("span");
    defineEvent.innerText = "Define Event";
    defineEvent.style =
      "color:#ffffff;width:370px;height:52px;background-color:rgb(0, 40, 69);padding-left:20px;font-size:17px;font-weight:500;display:flex;align-items:center;";
    this._defineEventPage.appendChild(defineEvent);

    let close_icon;
    close_icon = document.createElement("div");
    close_icon.style =
      "top:15px;position:absolute;width:20px;height:20px;float:right;right:10px;cursor:pointer;";
    close_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="#ffffff" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />`;
    this._defineEventPage.appendChild(close_icon);
    close_icon.onclick = () => {
      this._sideBar.style.display = "none";
      this._newwysiswg.style.display = "block";
      this.startTrackingButton.style.display = "block";
      this._targetElement?.classList.remove("apx-highlight");
      this._show_hide_toggleElement?.remove();
      let show_hide_ele = document.getElementById("apx-show-hide-icon");
      if (show_hide_ele) {
        show_hide_ele.remove();
      }
    };
    let defineEventImageContainer;
    defineEventImageContainer = document.createElement("div");
    defineEventImageContainer.classList.add("apx-icclass");
    defineEventImageContainer.style =
      "top:280px;position:absolute;width:80px;height:80px;padding-left:145px;";
    defineEventImageContainer.innerHTML = `<svg width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="31.5" cy="31.5" r="31.5" fill="#F5F5F5"/>
<mask id="mask0_486_3281" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="63" height="63">
<circle cx="31.5" cy="31.5" r="31.5" fill="#F4FBFF"/>
</mask>
<g mask="url(#mask0_486_3281)">
<path d="M105.511 10.3516H17.0739C14.7282 10.3516 12.8267 12.2532 12.8267 14.5988V48.3711C12.8267 50.7167 14.7282 52.6183 17.0739 52.6183H105.511C107.857 52.6183 109.758 50.7167 109.758 48.3711V14.5988C109.758 12.2532 107.857 10.3516 105.511 10.3516Z" fill="white"/>
<path d="M108.245 10.3516H14.3397C13.5041 10.3516 12.8267 11.029 12.8267 11.8647C12.8267 12.7003 13.5041 13.3777 14.3397 13.3777H108.245C109.081 13.3777 109.758 12.7003 109.758 11.8647C109.758 11.029 109.081 10.3516 108.245 10.3516Z" fill="#263238"/>
<path d="M15.7465 11.8629C15.7465 12.1992 15.4739 12.4717 15.1377 12.4717C14.8015 12.4717 14.5254 12.1992 14.5254 11.8629C14.5254 11.5267 14.7979 11.2542 15.1342 11.2542C15.4704 11.2542 15.7465 11.5267 15.7465 11.8629Z" fill="#FFC727"/>
<path d="M18.2346 11.8629C18.2346 12.1992 17.9621 12.4717 17.6259 12.4717C17.2896 12.4717 17.0171 12.1992 17.0171 11.8629C17.0171 11.5267 17.2896 11.2542 17.6259 11.2542C17.9621 11.2542 18.2346 11.5267 18.2346 11.8629Z" fill="white"/>
<path d="M20.7263 11.8629C20.7263 12.1992 20.4538 12.4717 20.1176 12.4717C19.7813 12.4717 19.5088 12.1992 19.5088 11.8629C19.5088 11.5267 19.7813 11.2542 20.1176 11.2542C20.4538 11.2542 20.7263 11.5267 20.7263 11.8629Z" fill="#455A64"/>
<path d="M98.7756 27.9244H23.7631C21.5465 27.9244 19.7495 29.7213 19.7495 31.938C19.7495 34.1546 21.5465 35.9516 23.7631 35.9516H98.7756C100.992 35.9516 102.789 34.1546 102.789 31.938C102.789 29.7213 100.992 27.9244 98.7756 27.9244Z" fill="#EBEBEB"/>
<path d="M39.3503 39.3599H23.4092C21.388 39.3599 19.7495 40.9984 19.7495 43.0196C19.7495 45.0408 21.388 46.6793 23.4092 46.6793H39.3503C41.3715 46.6793 43.01 45.0408 43.01 43.0196C43.01 40.9984 41.3715 39.3599 39.3503 39.3599Z" fill="#FFC727"/>
<path d="M52.4673 42.7374L53.8229 46.0112L52.4673 46.574L51.1047 43.2753L48.8643 45.0132V35.7861L55.3271 42.3091L52.4673 42.7374Z" fill="#263238"/>
<path d="M49.3384 33.7333V31.5" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M46.7939 34.827L45.2153 33.2484" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M45.767 37.4001H43.5337" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M46.8608 39.9448L45.2822 41.5269" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M49.4341 40.9713V43.2046" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M51.9785 39.8776L53.5606 41.4596" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M53.0049 37.3045H55.2382" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
<path d="M51.9116 34.7598L53.4937 33.1812" stroke="#263238" stroke-width="0.353933" stroke-miterlimit="10"/>
</g>
</svg>`;

    this._defineEventPage.appendChild(defineEventImageContainer);
    let defineEventDescription = document.createElement("span");
    defineEventDescription.innerText =
      "Click the button below to define \n a new event by clicking on any \n element on the page.";
    defineEventDescription.style =
      "color:#989cab;top:360px;font-size:14px;padding-left:80px;position:absolute;text-align:center;";
    this._defineEventPage.appendChild(defineEventDescription);

    let defineButton = document.createElement("button");
    defineButton.innerText = "Define Event";
    defineButton.style =
      "background-color:#F97316;color:#fff;font-size:13px;align-items:center;font-weight:500;font-family:inherit;height:40px;width:120px;border-radius:11px;border:#F97316;justify-content:center;display:flex;position:absolute;top:430px;left:33%;cursor:pointer;";
    if (!defineChecker) {
      this._defineEventPage.style.display = "block";
    }

    if (defineChecker) {
      if (this._defineEventPage) {
        this._defineEventPage.style.display = "none";
      }
    }

    defineButton.addEventListener("click", () => {
      this._newwysiswg.style.display = "none";
      document.body.appendChild(escHelpPopup);
      let show_hide_ele = document.getElementById("apx-show-hide-icon");
      if (show_hide_ele) {
        show_hide_ele.remove();
      }
      dragElement(escHelpPopup);

      document.addEventListener("keydown", this.escListenerforevents);
      if (this._defineEventPage) {
        this._defineEventPage.style.display = "none";
      }
      this._sideBar.style.display = "none";
      if (this._eventPage) {
        this._eventPage.style.display = "none";
      }
      if (this._defineEventPage) {
        this._defineEventPage.style.display = "none";
      }
      this._selectAnElement();

      let visibleSidebarList = document.querySelectorAll("#apxor_sidebar");
      if (visibleSidebarList.length > 0) {
        for (let element of visibleSidebarList) {
          element.style.display = "none";
        }
      }
    });

    this._defineEventPage.appendChild(defineButton);
    this._sideBar.appendChild(this._defineEventPage);
    if (defineChecker === true) {
      this._eventPageCreation();
      this._sideBar.appendChild(this._eventPage);
    }
    document.body.appendChild(this._sideBar);

    if (this._sideBar.style.right === "0px") {
      this._sideBar.style.right = "-300px"; // Close sidebar
    } else {
      this._sideBar.style.right = "0px"; // Open sidebar
    }
  };

  hideSidebar = () => {
    this._sideBar.style.right = "-370px";
    setTimeout(() => {
      if (this._sideBar) {
        this._sideBar.style.display = "none";
      }
    }, 500);
  };

  showSidebar = () => {
    this._sideBar.style.display = "block";
    this._sideBar.style.transition = "right 0.5s ease-in-out";
    this._sideBar.style.right = "0";
  };

  _clickHandlingForShowHideIcon = () => {
    this._show_hide_toggleElement.onclick = () => {
      if (this._sideBar.style.display === "block") {
        // this._sideBar.style.display = "none";
        this.hideSidebar();
        this._show_hide_toggleElement.style =
          "width:20px;height:70px;background-color:rgb(0,40,69,0.9);position:absolute;right:0px;top:0px;color:rgb(255,255,255,0.7);transform:rotate(180deg);writing-mode:vertical-lr;text-align:center;border-top-right-radius:5px;border-bottom-right-radius:5px;cursor:pointer;z-index:99999997;display:flex;align-items:center;justify-content:center;gap:4px;";
        this._show_hide_toggle_text.innerText = "show";
        this._show_hide_toggleElement.class = "apx-show-hide-button-class";
        this._show_hide_toggleElement.addEventListener(
          "click",
          this._clickHandlingForShowHideIcon
        );
      } else if (this._sideBar.style.display === "none") {
        this.showSidebar();
        //this._sideBar.style.display = "block";
        this._show_hide_toggleElement.style =
          "width:20px;height:70px;background-color:rgb(0,40,69,0.9);position:fixed;right:369px;top:0px;color:rgb(255,255,255,0.7);transform:rotate(180deg);writing-mode:vertical-lr;text-align:center;border-top-right-radius:5px;border-bottom-right-radius:5px;cursor:pointer;z-index:99999997;display:flex;align-items:center;justify-content:center;gap:4px;";
        this._show_hide_toggle_text.innerText = "hide";
        this._show_hide_toggleElement.class = "apx-show-hide-button-class";
        this._show_hide_toggleElement.addEventListener(
          "click",
          this._clickHandlingForShowHideIcon
        );
        document.body.appendChild(this._show_hide_toggleElement);
      }
    };
  };

  _eventPageCreation = () => {
    this._eventPage = document.createElement("div");
    this._eventPage.style.display = "block";
    this._eventPage.style.zIndex = "99999999";

    const defineEventForEventPage = document.createElement("span");
    defineEventForEventPage.innerText = "Define Event";
    defineEventForEventPage.style =
      "color:#ffffff;width:370px;height:52px;background-color:rgb(0, 40, 69);padding-left:20px;font-size:17px;font-weight:500;display:flex;align-items:center;";
    this._eventPage.appendChild(defineEventForEventPage);

    let close_icon;
    close_icon = document.createElement("div");
    close_icon.style =
      "top:15px;position:absolute;width:20px;height:20px;float:right;right:10px;cursor:pointer;";
    close_icon.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" fill="#ffffff" stroke-linecap="round" stroke-linejoin="round">
  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
  <path d="M18 6l-12 12" />
  <path d="M6 6l12 12" />`;
    this._eventPage.appendChild(close_icon);
    close_icon.onclick = () => {
      this._sideBar.style.display = "none";
      this._newwysiswg.style.display = "block";
      this.startTrackingButton.style.display = "block";
      this._targetElement?.classList.remove("apx-highlight");
      this._show_hide_toggleElement?.remove();
      let show_hide_ele = document.querySelector(".apx-show-hide-button-class");
      if (show_hide_ele) {
        show_hide_ele.remove();
      }
    };
    const eventNameLabel = document.createElement("label");
    eventNameLabel.innerText = "Name ";
    const asteriskSpan = document.createElement("span");
    asteriskSpan.innerText = "*";
    asteriskSpan.style.color = "red";
    asteriskSpan.style.fontSize = "smaller";
    //asteriskSpan.style.verticalAlign = "super";
    eventNameLabel.appendChild(asteriskSpan);

    eventNameLabel.htmlFor = "labelInput";
    const eventNameInput = document.createElement("input");
    eventNameLabel.style =
      "font-size:13px;color:#000;top:70px;padding-left:20px;font-weight:500;position:absolute;font-family:inherit;";
    eventNameInput.style =
      "height:42px;width:310px;background-color:#EDEEF3;color:#313957;top:95px;padding-left:20px;border:none;border-radius:12px;position:absolute;margin-left:20px;position:absolute;cursor:pointer;font-size:14px;";
    eventNameInput.placeholder = "Enter event name ";
    eventNameInput.setAttribute("required", "");
    eventNameInput.id = "labelInput";
    eventNameInput.addEventListener("input", (event) => {
      this._eventName = event.target.value;
      if (this._urlInEventObj) {
        saveButton.style.cursor = "pointer";
        saveButton.style.backgroundColor = "#F97316";
      }
      if (this._eventName == "") {
        saveButton.style.cursor = "default";
        saveButton.style.backgroundColor = "rgba(0,40,69, 0.38)";
      }
    });
    this._eventPage.appendChild(eventNameLabel);
    this._eventPage.appendChild(eventNameInput);

    const firstHrElement = document.createElement("div");
    firstHrElement.style =
      "position:absolute;top:146px;border-top:1px solid rgb(160,154,155,0.5);width:100%;height:1px;background-color:rgb(237,238,243)";
    this._eventPage.appendChild(firstHrElement);

    const eventDescriptionLabel = document.createElement("label");
    eventDescriptionLabel.innerText = "Description";
    eventDescriptionLabel.htmlFor = "labelInput2";
    const eventDescriptionInput = document.createElement("input");
    eventDescriptionLabel.style =
      "font-size:13px;color:#000;top:160px;padding-left:20px;font-weight:500;position:absolute;font-family:inherit;";
    eventDescriptionInput.style =
      "height:42px;width:310px;background-color:#EDEEF3;color:#313957;top:185px;padding-left:20px;border:none;border-radius:12px;position:absolute;margin-left:20px;position:absolute;cursor:pointer;font-size:14px;";
    eventDescriptionInput.placeholder = "Enter description for Event";
    eventDescriptionInput.setAttribute("required", "");
    eventDescriptionInput.id = "labelInput2";
    eventDescriptionInput.addEventListener("input", (event) => {
      this._eventDescription = event.target.value;
      if (this._urlInEventObj && this._eventName) {
        saveButton.style.cursor = "pointer";
        saveButton.style.backgroundColor = "#F97316";
      }
    });
    this._eventPage.appendChild(eventDescriptionLabel);
    this._eventPage.appendChild(eventDescriptionInput);

    const newHrElement = document.createElement("div");
    newHrElement.style =
      "position:absolute;top:235px;border-top:1px solid rgb(160,154,155,0.5);width:100%;height:1px;background-color:rgb(237,238,243)";
    this._eventPage.appendChild(newHrElement);

    const typeLabel = document.createElement("span");
    typeLabel.innerText = "Type";
    typeLabel.style =
      "font-size:13px;color:#000;top:250px;padding-left:20px;font-weight:500;position:absolute;font-family:inherit";
    this._eventPage.appendChild(typeLabel);

    //var options = ["Click", "Double_Click", "Hover", "Right_Click"];
    var options = ["Click", "Double Click", "Right Click"];
    var container = document.createElement("div");
    container.setAttribute("id", "dropdownContainer");
    container.style.display = "inline-block";
    var dropdownMenu = document.createElement("select");
    dropdownMenu.style =
      "top:224px;height:39px;background-color:#EDEEF3;position:absolute;padding-left:20px;margin-left:20px;border-radius:12px;";
    dropdownMenu.setAttribute("id", "myDropdown");
    options.forEach(function (option) {
      var optionElement = document.createElement("option");
      optionElement.setAttribute("value", option);
      optionElement.textContent = option;
      optionElement.style = "font-size:14px;font-weight:500;font-style:Roboto";
      dropdownMenu.appendChild(optionElement);
    });
    dropdownMenu.selectedIndex = 0;
    this._selectedType = "click";
    container.style = "position:absolute;";
    container.appendChild(dropdownMenu);
    this._eventPage.appendChild(container);

    dropdownMenu.addEventListener("change", () => {
      var selectedOption = dropdownMenu.value;
      if (selectedOption === "Click") {
        this._selectedType = "click";
      } else if (selectedOption === "Double Click") {
        this._selectedType = "double_click";
      } else if (selectedOption === "Right Click") {
        this._selectedType = "right_click";
      }
    });

    var optionsForEventType = ["App Event", "Client Event"];
    var containerForEventTypes = document.createElement("div");
    containerForEventTypes.setAttribute("id", "dropdownContainer");
    containerForEventTypes.style.display = "inline-block";
    var dropdownMenuForEventtypes = document.createElement("select");
    dropdownMenuForEventtypes.style =
      "top:224px;height:39px;background-color:#EDEEF3;position:absolute;padding-left:20px;margin-left:203px;border-radius:12px;";
    dropdownMenuForEventtypes.setAttribute("id", "myDropdown");
    optionsForEventType.forEach(function (option) {
      var optionElementForEventTypes = document.createElement("option");
      optionElementForEventTypes.setAttribute("value", option);
      optionElementForEventTypes.textContent = option;
      optionElementForEventTypes.style =
        "font-size:14px;font-weight:500;font-style:Roboto";
      dropdownMenuForEventtypes.appendChild(optionElementForEventTypes);
    });
    dropdownMenuForEventtypes.selectedIndex = 0;

    containerForEventTypes.style = "position:absolute;";
    containerForEventTypes.appendChild(dropdownMenuForEventtypes);
    this._eventPage.appendChild(containerForEventTypes);
    this._selectedEventType = "app_event";
    dropdownMenuForEventtypes.addEventListener("change", () => {
      var selectedOptionForEventType = dropdownMenuForEventtypes.value;
      if (selectedOptionForEventType === "App Event") {
        this._selectedEventType = "app_event";
      } else if (selectedOptionForEventType === "Client Event") {
        this._selectedEventType = "client_event";
      }
    });

    const secondHrElement = document.createElement("div");
    secondHrElement.style =
      "position:absolute;top:322px;border-top:1px solid rgb(160,154,155,0.5);width:100%;height:1px;background-color:rgb(237,238,243)";
    this._eventPage.appendChild(secondHrElement);

    let selectorLabel = document.createElement("div");
    selectorLabel.innerText = "Selected Element's Identifier";
    selectorLabel.style =
      "color:#fffff;width:330px;height:52px;padding-left:20px;font-size:13px;font-weight:500;display:flex;align-items:center;position:absolute;top:317px;";
    this._eventPage.appendChild(selectorLabel);
    let selectorName = document.createElement("span");
    let selectorConstructed;
    selectorConstructed = this._selector_created;
    this._selectorForEvent = selectorConstructed;
    selectorName.innerText = selectorConstructed;
    selectorName.style =
      "overflow-y: scroll;color:rgb(49, 57, 87);width:310px;height:52px;padding-left:20px;font-size:14px;font-weight:500;display:flex;align-items:center;position:absolute;top:362px;background-color:#EDEEF3;margin-left:20px;border-radius:12px;padding-top:5px;padding-bottom:5px;";
    this._eventPage.appendChild(selectorName);

    var checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.id = "myCheckbox";
    var checkboxLabel = document.createElement("label");
    checkboxLabel.htmlFor = "myCheckbox";
    checkboxLabel.textContent = "Mark as Feature";
    checkboxLabel.style = "padding-left:10px;font-size:14px;font-weight:500;";
    var checkboxContainer = document.createElement("div");
    checkboxContainer.classList.add("checkbox-container");
    checkboxContainer.appendChild(checkbox);
    checkboxContainer.appendChild(checkboxLabel);
    checkboxContainer.style = "position:absolute;top:434px;padding-left:21px";
    this._eventPage.appendChild(checkboxContainer);
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        this._feature_field = true;
      } else {
        this._feature_field = false;
      }
    });

    const thirdHrElement = document.createElement("div");
    thirdHrElement.style =
      "position:absolute;top:462px;border-top:1px solid rgb(160,154,155,0.5);width:100%;height:1px;background-color:rgb(237,238,243)";
    this._eventPage.appendChild(thirdHrElement);

    let urlLabel = document.createElement("span");
    urlLabel.innerText = "Pages";
    urlLabel.style =
      "color:#fffff;width:350px;height:52px;padding-left:20px;font-size:13px;font-weight:500;display:flex;align-items:center;position:absolute;top:457px;";
    this._eventPage.appendChild(urlLabel);
    let urlDescription = document.createElement("span");
    urlDescription.innerText =
      "Create an event when the element is \n interacted with...";
    urlDescription.style =
      "color:#313957;width:389px;height:52px;padding-left:20px;font-size:11px;font-weight:500;display:flex;align-items:center;position:absolute;top:479px;";
    this._eventPage.appendChild(urlDescription);

    const input = document.createElement("input");
    input.type = "radio";
    input.name = "myRadioGroup";
    input.id = "event_type_id";
    input.value = "current_url";
    input.style.accentColor = "orangered";
    input.checked = true;
    this._is_dynamic = false;
    this._urlInEventObj = "url";
    const labelElement = document.createElement("label");
    labelElement.textContent = "Only on this Page ";
    labelElement.style = "font-size:15px;padding-left:7px;";
    labelElement.setAttribute("for", input.id);
    const radioItem = document.createElement("div");
    radioItem.appendChild(input);
    radioItem.appendChild(labelElement);
    radioItem.classList.add("radio-item");
    radioItem.style = "position:absolute;top:525px;padding-left:20px;";
    radioItem.addEventListener("click", () => {
      this._is_dynamic = false;
      dynamicUrlInput.style.display = "none";
      urlNote.style.display = "none";
      this._urlInEventObj = "url";
      if (this._eventName) {
        saveButton.style.cursor = "pointer";
        saveButton.style.backgroundColor = "#F97316";
      }
    });
    this._eventPage.appendChild(radioItem);

    const websiteUrl = document.createElement("span");
    let location = window.location.href;
    websiteUrl.innerText = location;
    websiteUrl.style =
      "color:#007AFF;padding-left:50px;font-size:12px;top:546px;position:absolute;font-family:monospace";
    this._eventPage.appendChild(websiteUrl);

    const inputForAllPages = document.createElement("input");
    inputForAllPages.type = "radio";
    inputForAllPages.name = "myRadioGroup";
    inputForAllPages.id = "event_type_id2";
    inputForAllPages.value = "current_url";
    inputForAllPages.style.accentColor = "orangered";
    const labelElementForAllPages = document.createElement("label");
    labelElementForAllPages.textContent = "For all Pages";
    labelElementForAllPages.style = "font-size:15px;padding-left:7px;";
    labelElementForAllPages.setAttribute("for", inputForAllPages.id);
    const radioItemForAllPages = document.createElement("div");
    radioItemForAllPages.appendChild(inputForAllPages);
    radioItemForAllPages.appendChild(labelElementForAllPages);
    radioItemForAllPages.classList.add("radio-item");
    radioItemForAllPages.style =
      "position:absolute;top:562px;padding-left:20px;";
    radioItemForAllPages.addEventListener("click", () => {
      this._is_dynamic = true;
      dynamicUrlInput.style.display = "none";
      urlNote.style.display = "none";
      this._dynamicUrl = "*";
      this._urlInEventObj = "*";
      if (this._eventName) {
        saveButton.style.cursor = "pointer";
        saveButton.style.backgroundColor = "#F97316";
      }
    });
    this._eventPage.appendChild(radioItemForAllPages);

    const input2 = document.createElement("input");
    input2.type = "radio";
    input2.id = "second_label";
    input2.name = "myRadioGroup";
    input2.value = "current_url";
    input2.style.accentColor = "orangered";
    const labelElement2 = document.createElement("label");
    labelElement2.textContent = "On Pages that match ";
    labelElement2.style = "font-size:15px;padding-left:7px;";
    labelElement2.setAttribute("for", input2.id);
    const radioItem2 = document.createElement("div");
    radioItem2.appendChild(input2);
    radioItem2.appendChild(labelElement2);
    radioItem2.classList.add("radio-item");
    radioItem2.style = "position:absolute;top:587px;padding-left:20px;";
    radioItem2.addEventListener("click", () => {
      saveButton.style.cursor = "default";
      saveButton.style.backgroundColor = "rgba(0,40,69, 0.38)";
      this._is_dynamic = true;
      dynamicUrlInput.style.display = "block";
      urlNote.style.display = "block";
    });
    this._eventPage.appendChild(radioItem2);

    const dynamicUrlInput = document.createElement("input");
    dynamicUrlInput.style =
      "height:42px;width:310px;background-color:#EDEEF3;color:#313957;top:616px;padding-left:20px;border:none;border-radius:12px;position:absolute;margin-left:20px;position:absolute;display:none;font-size:14px;";
    dynamicUrlInput.placeholder = "Enter the Dynamic URL";
    dynamicUrlInput.addEventListener("input", (event) => {
      let dynamicPart = event.target.value;
      this._dynamicUrl = event.target.value;
      this._urlInEventObj = "dynamic_url";
      if (this._eventName && dynamicPart && dynamicPart != "") {
        saveButton.style.cursor = "pointer";
        saveButton.style.backgroundColor = "#F97316";
      }
      if (dynamicPart == "") {
        saveButton.style.cursor = "default";
        saveButton.style.backgroundColor = "rgba(0,40,69, 0.38)";
      }
    });
    this._eventPage.appendChild(dynamicUrlInput);

    const urlNote = document.createElement("span");
    urlNote.innerText = "NOTE: Replace all the dynamic parts with *";
    urlNote.style =
      "color:rgb(0, 40, 69,0.9);padding-left:25px;font-size:13px;font-weight:600;display:flex;align-items:center;top:662px;position:absolute;display:none;";
    this._eventPage.appendChild(urlNote);

    let cancelButton = document.createElement("button");
    cancelButton.textContent = "Cancel";
    cancelButton.style =
      "background-color:#fff;color:#F97316;cursor:pointer;font-size:13px;font-weight:500;font-family:inherit;height:40px;width:100px;border-radius:11px;border:2px solid #F97316;position:absolute;top:93%;margin-left:20px";
    cancelButton.onclick = () => {
      this._targetElement.classList.remove("apx-highlight");
      this._eventPage.style.display = "none";
      this._defineEventPage.style.display = "block";
    };
    this._eventPage.appendChild(cancelButton);

    let saveButton = document.createElement("button");
    saveButton.textContent = "Save";
    saveButton.style =
      "background-color:rgb(249, 115, 22,0.2);color:#fff;cursor:default;font-size:13px;font-weight:500;border:none;font-family:inherit;height:40px;width:100px;border-radius:11px;position:absolute;top:93%;margin-left:240px";
    saveButton.onclick = () => {
      this._targetElement.classList.remove("apx-highlight");
      feedBackMessagePopUp(`saved event <br><b>${this._eventName}</b>`);
      const closeButton = document.getElementById("close-button");
      const dismissCallback = () => {
        const conatiner = document.getElementById("apx-container");
        conatiner?.remove();
      };
      window.setTimeout(dismissCallback, 20000);
      closeButton.addEventListener("click", dismissCallback);
      this._createEventList();
      this.startTrackingButton.style.display = "block";
      document.querySelector(".apx-ddisvg").style.animation =
        "bounce 2s infinite";
      document.body.removeChild(this._sideBar);
      this._sideBar = null;
      let show_hide_ele = document.getElementById("apx-show-hide-icon");
      if (show_hide_ele) {
        show_hide_ele.remove();
      }
    };
    this._eventPage.appendChild(saveButton);
  };

  _selectAnElement = () => {
    window.addEventListener("mouseover", onMouseOver, true);
    window.addEventListener("mouseout", onMouseOut, true);
    if (this._sideBar?.style?.display === "block") {
      this._sideBar.style.display = "none";
    }
    this.clickListener = (e) =>
      handleDocumentOnClick(e, (target) => {
        // Send this information over to SSE server which will send this info to dashboard
        this._targetElement = target;
        this._selector_created = this.cssPath(this._targetElement, true);
        this._newwysiswg.style.display = "block";
        window.removeEventListener("mouseover", onMouseOver, true);
        window.removeEventListener("mouseout", onMouseOut, true);
        window.removeEventListener("click", this.clickListener, true);
        this._targetElement.classList.add("apx-highlight");
        this.createEventsSideBar(true);
        document.removeEventListener("keydown", this.escListenerforevents);
        const ele = document.querySelector(".apx-esc");
        if (ele) document.body.removeChild(ele);
      });
    window.addEventListener("click", this.clickListener, true);
  };

  _viewSelectionHandler = () => {
    //this.createEventsSideBar();
    let modalCount = parseInt(localStorage.getItem("apx_modal_count")) || 0;
    if (modalCount === 0) {
      this.modalForElementSelection();
      modalCount++;
      localStorage.setItem("apx_modal_count", modalCount);
    } else {
      this.createEventsSideBar();
    }
    this.dropDownBox.style.display = this.dropDownExpanded ? "none" : "block";
    this.dropDownExpanded = !this.dropDownExpanded;
    this.startTrackingButton.style.display = "none";
  };

  _createEventList = () => {
    var target = this._selectorForEvent;
    var eventType = this._selectedType?.toLowerCase();
    var eventName = this._eventName;
    let feature_flag = this._feature_field;
    if (isNull(feature_flag) || isUndefined(feature_flag)) {
      feature_flag = false;
    }
    var eventDescription = this._eventDescription;
    var eventsArray = [
      {
        selector: target,
        events: {},
      },
    ];
    let url;
    if (!this._is_dynamic) {
      url = location.href;
    } else {
      url = this._dynamicUrl;
    }
    var event_type = this._selectedEventType?.toLowerCase();
    eventsArray[0].events[eventType] = {
      type: event_type,
      action: eventName,
      description: eventDescription,
      is_dynamic: this._is_dynamic,
      url: url,
      apx_feature_field: feature_flag,
    };
    this._makeSSERequest(
      "view",
      "",
      "",
      () => {},
      () => {},
      eventsArray
    );
  };

  _disableViewSelectionHandler = () => {
    this._enableViewSelectionButton.style.display = "block";
    //this._disableViewSelectionButton.style.display = "none";
  };

  tearDown = () => {
    // TODO: Make sure all cleanups are properly done
    this._viewPickerNode.parentNode.removeChild(this._viewPickerNode);
    this._styleNode.parentNode.removeChild(this._styleNode);
  };

  /**
   * Dashboard sends the preview or testing configurations over an SSE connection
   *
   * Interprets the command and performs necessary action
   */
  _handleSSEResponse = (rtmInstance, json) => {
    try {
      this._wysiwygRoot.dispatchEvent(new CustomEvent("preview"));
      const data = JSON.parse(json);
      const { cmd: command = "prev" } = data;
      if (command === "prev") {
        if (data?.ui) {
          const id = uuid(36);
          const response = {
            configs: [
              {
                _id: id,
                enabled: true,
                terminate_info: {
                  auto_dismiss: false,
                  duration: 1000,
                },
                meta: {
                  name: APX_PREVIEW_CAMPAIGN_NAME,
                  type: data.type,
                },
                ui: data.ui,
              },
            ],
          };
          rtmInstance._storeConfigs(data.type !== "SURVEY" ? 0 : 1, response);
          Apxor.getController().dispatchEvent(data.type, {
            name: data.type,
            additional_info: {
              uuid: id,
              name: APX_PREVIEW_CAMPAIGN_NAME,
            },
          });
        } else if (data?.messages) {
          const surveys = [];
          const walkthroughs = [];
          data.messages.forEach((message) => {
            if (message.meta.type !== "SURVEY") {
              walkthroughs.push(message);
            } else {
              surveys.push(message);
            }
          });

          if (walkthroughs.length > 0) {
            rtmInstance.handleResponse(0, {
              configs: walkthroughs,
            });
          }

          if (surveys.length > 0) {
            rtmInstance.handleResponse(1, {
              configs: surveys,
            });
          }
        }
      } else if (command === "relaunch") {
        // Set the flag to false to prevent dismissing the Relaunch toast popup in the onmessage handler
        this._isShowingToastPopup = false;
      }
    } catch (e) {
      console.error(e);
    }
  };

  /**
   * Creates a draggable div which contains the following options
   *
   * - Add as Test Device
   * - Remove Test Device
   * - Enable View Selection Mode
   * - Disable View Selection Mode
   */
  // _createDraggableWYSIWYGOverlay = (rtmInstance) => {
  //   const isAdded =
  //     this.testDeviceData !== null &&
  //     this.testDeviceData !== undefined &&
  //     this.testDeviceData.id &&
  //     this.testDeviceData.name;

  //   const html = `
  //       <style>
  //           .apx-cr{
  //             display:flex;
  //             justify-content:center;
  //             align-items:center;
  //             flex-direction:column;
  //             gap:10px
  //           }
  //           .apx-b{
  //             border:none;
  //             font-size:16px;
  //             font-family:inherit;
  //             padding:8px 14px;
  //             cursor:pointer
  //           }
  //           .apx-close:before{
  //             content:'\\58';
  //             font-size:9px;
  //             color:#969696;
  //             cursor:pointer;
  //             position:absolute;
  //             top:1px;
  //             right:3px
  //           }
  //       </style>
  //       <div>
  //           <svg class="apx-" id="apx-wr-h" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" preserveAspectRatio="xMidYMid meet" viewBox="280.6027397260274 189.52023061718432 89.75342465753425 54.49346801295263" width="60" height="40" style="width:40px;position:absolute;top:17px;left:50%;transform:translate(-50%, -50%);cursor:move;">
  //           <defs>
  //             <path
  //               d="M304.6 201.52C304.6 208.14 299.23 213.52 292.6 213.52C285.98 213.52 280.6 208.14 280.6 201.52C280.6 194.9 285.98 189.52 292.6 189.52C299.23 189.52 304.6 194.9 304.6 201.52Z"
  //               id="e2aMl5NH8S"
  //             />
  //             <path
  //               d="M324.9 189.54C331.52 189.16 337.2 194.21 337.58 200.82C337.97 207.43 332.91 213.12 326.3 213.5C319.69 213.89 314.01 208.83 313.62 202.22C313.24 195.61 318.29 189.93 324.9 189.54Z"
  //               id="e2L4sySuvL"
  //             />
  //             <path
  //               d="M304.6 232.01C304.6 225.39 299.23 220.01 292.6 220.01C285.98 220.01 280.6 225.39 280.6 232.01C280.6 238.64 285.98 244.01 292.6 244.01C299.23 244.01 304.6 238.64 304.6 232.01Z"
  //               id="a5AJxVSDw"
  //             />
  //             <path
  //               d="M337.6 232.01C337.6 225.39 332.23 220.01 325.6 220.01C318.98 220.01 313.6 225.39 313.6 232.01C313.6 238.64 318.98 244.01 325.6 244.01C332.23 244.01 337.6 238.64 337.6 232.01Z"
  //               id="bjnangUBy"
  //             />
  //             <path
  //               d="M370.36 232.01C370.36 225.39 364.98 220.01 358.36 220.01C351.73 220.01 346.36 225.39 346.36 232.01C346.36 238.64 351.73 244.01 358.36 244.01C364.98 244.01 370.36 238.64 370.36 232.01Z"
  //               id="a8aeEZTAL0"
  //             />
  //             <path
  //               d="M369.36 201.52C369.36 194.9 363.98 189.52 357.36 189.52C350.73 189.52 345.36 194.9 345.36 201.52C345.36 208.14 350.73 213.52 357.36 213.52C363.98 213.52 369.36 208.14 369.36 201.52Z"
  //               id="a4VJpGfPPp"
  //             />
  //           </defs>
  //           <g>
  //             <g>
  //               <g>
  //                 <use xlink:href="#e2aMl5NH8S" opacity="1" fill="#000000"  fill-opacity="1" />
  //               </g>
  //               <g>
  //                 <use xlink:href="#e2L4sySuvL" opacity="1" fill="#000000" fill-opacity="1"/>
  //               </g>
  //               <g>
  //                 <use xlink:href="#a5AJxVSDw" opacity="1" fill="#000000" fill-opacity="1"/>
  //               </g>
  //               <g>
  //                 <use xlink:href="#bjnangUBy" opacity="1" fill="#000000" fill-opacity="1"/>
  //               </g>
  //               <g>
  //                 <use xlink:href="#a8aeEZTAL0" opacity="1" fill="#000000" fill-opacity="1"/>
  //               </g>
  //               <g>
  //                 <use xlink:href="#a4VJpGfPPp" opacity="1" fill="#000000" fill-opacity="1"/>
  //               </g>
  //             </g>
  //           </g>
  //         </svg>
  //       </div>
  //       <div class="apx-cr" style="gap:0;margin-top:20px;margin-bottom=20px;">
  //         <img class="apx-" width="54" height="54" src="https://f.hubspotusercontent10.net/hub/5329664/hubfs/Apxor%20X%20logo.png?width=108&height=108" />
  //       </div>
  //       <div id="apx-bh" class="apx-cr apx-bh" style="padding:8px 20px;">
  //         <button class="apx-b" id="apx-a" style="display:${
  //           isAdded ? "none" : "block"
  //         }">
  //             Add as test device
  //         </button>
  //         <button class="apx-b" id="apx-r" style="display:${
  //           isAdded ? "block" : "none"
  //         }">
  //             Remove as test device
  //         </button>
  //         <button class="apx-b" id="apx-ev" style="display:${
  //           isAdded && this.isSelectionMode
  //             ? "none"
  //             : isAdded
  //             ? "block"
  //             : "none"
  //         }">
  //             Enable view selection
  //         </button>
  //         <button class="apx-b" id="apx-dv" style="display:${
  //           isAdded && this.isSelectionMode ? "block" : "none"
  //         }">
  //             Disable view selection
  //         </button>
  //       </div>
  //   `;

  //   //Remove the overlay if its already created.
  //   const wysiwyg_overlay = document.getElementById("apx-wr");
  //   if (wysiwyg_overlay && wysiwyg_overlay.remove) {
  //     wysiwyg_overlay.remove();
  //   }

  //   const node = document.createElement("div");
  //   node.style = `
  //     z-index:99999999;
  //     position:fixed;
  //     top:8px;
  //     right:8px;
  //     background:white;
  //     box-shadow:0px 0px 7px 7px black;
  //     border-radius:3px;
  //     padding:20px;
  //     border: 5px solid rgba(0, 0, 0, 0.7);
  //   `;
  //   node.setAttribute("id", "apx-wr");
  //   node.innerHTML = html;

  //   document.body.appendChild(node);
  //   this._wysiwygRoot = node;

  //   const buttons = document.getElementById("apx-bh");

  //   const hide = () => {
  //     node.style.opacity = 0.5;
  //     buttons.style.display = "none";
  //   };
  //   let timeoutHandler = setTimeout(hide, 3000);

  //   // Upon mouseout of this div, show the buttons and reset the opacity back to 1
  //   node.addEventListener("mouseover", () => {
  //     node.style.opacity = 1;
  //     clearTimeout(timeoutHandler);
  //     buttons.style.display = "flex";
  //   });

  //   // Upon mouseout of this div, hide the buttons and decrease the opacity to 0.5
  //   node.addEventListener("mouseout", () => {
  //     timeoutHandler = setTimeout(hide, 3000);
  //   });

  //   const addDeviceButton = document.getElementById("apx-a");
  //   const removeDeviceButton = document.getElementById("apx-r");
  //   const enableViewSelectionButton = document.getElementById("apx-ev");
  //   const disableViewSelectionButton = document.getElementById("apx-dv");

  //   addDeviceButton.onclick = () => this._showAddTestDeviceDialog(rtmInstance);

  //   removeDeviceButton.onclick = () => {
  //     // Make remove API call
  //     fetch(
  //       REMOVE_TEST_DEVICE_API.replace("<aid>", Apxor.getSiteId()).replace(
  //         "<uid>",
  //         this.testDeviceData.id
  //       ),
  //       {
  //         method: "DELETE",
  //         headers: {
  //           apx_web_key: "WTCKFAIVAJKYJA3HCV80WIKZU98R9NJG",
  //         },
  //       }
  //     )
  //       .then((res) => {
  //         if (res.ok && res.status === 200) {
  //           return res.json();
  //         }
  //         return null;
  //       })
  //       .then((data) => {
  //         if (data) {
  //           Apxor.getController().persistToStorage("_apx_td", {}, true);
  //           this.testDeviceData = null;

  //           addDeviceButton.style.display = "block";
  //           removeDeviceButton.style.display =
  //             enableViewSelectionButton.style.display =
  //             disableViewSelectionButton.style.display =
  //               "none";

  //           if (this.isSelectionMode) {
  //             this._hideSelectionMode();
  //           }
  //         }
  //       })
  //       .catch((e) => console.error(e));
  //   };

  //   /**
  //    * Hides this button, Shows the Disable View Selection button and attach some event listeners
  //    *
  //    * At last, show a toast kind of message at the center of the screen
  //    */
  //   enableViewSelectionButton.onclick = () => {
  //     this.isSelectionMode = true;
  //     if (Apxor.isFlutter()) {
  //       const helper =
  //         Apxor.getApxorFlutterHelper(); /*getApxorFlutterHelper:returns object*/
  //       helper.disableClick();
  //       const response = helper.dump(); /*dump:for feature extraction*/
  //       // console.log(response);
  //       const layout = response.r;
  //       this.clickListener = (e) => {
  //         var x = e.clientX,
  //           y = e.clientY;
  //         console.log("x,y", x, y);
  //         const rect = disableViewSelectionButton.getBoundingClientRect();
  //         console.log("rect", rect);
  //         // if disable view selection is clicked then return
  //         if (
  //           x >= rect.left &&
  //           x <= rect.right &&
  //           y >= rect.top &&
  //           y <= rect.bottom
  //         ) {
  //           return;
  //         }
  //         this.traverseLayouts(layout.views, x, y, 0);
  //         var { id, path, bounds } = this.result.layout;
  //         this.result = null;
  //         if (id && id.length != 0) {
  //           navigator.clipboard.writeText(id);
  //         } else {
  //           navigator.clipboard.writeText(path);
  //         }
  //         showFeedbackAfterViewIdCopyForFlutter(bounds);
  //         //disabling the view seletion after showing the container
  //         disableViewSelectionHandler();
  //         this._makeSSERequest("view", location.href, id + "___" + path);
  //       };
  //     } else {
  //       // Attach the mouseover and mouseout listeners
  //       window.addEventListener("mouseover", onMouseOver, true);
  //       window.addEventListener("mouseout", onMouseOut, true);
  //       this.clickListener = (e) =>
  //         handleDocumentOnClick(e, (target) => {
  //           // Send this information over to SSE server which will send this info to dashboard
  //           const cssSelector = this.cssPath(target, true);
  //           const xPath = this.xPath(target, true);
  //           //copying value to the clipboard
  //           navigator.clipboard.writeText(cssSelector + "___" + xPath);
  //           //creating container for indicating user to paste the code in dashboard
  //           showFeedbackAfterViewIdCopy();
  //           //disabling the view seletion after showing the container
  //           disableViewSelectionHandler();
  //           this._makeSSERequest(
  //             "view",
  //             location.href,
  //             cssSelector + "___" + xPath
  //           );
  //         });
  //     }
  //     window.addEventListener("click", this.clickListener, true);

  //     this._hideToast(false);

  //     enableViewSelectionButton.style.display = "none";
  //     disableViewSelectionButton.style.display = "block";
  //   };

  //   const showFeedbackAfterViewIdCopy = () => {
  //     const enableViewSelectionBtn = document.querySelector("#apx-ev");
  //     enableViewSelectionBtn.disabled = true;

  //     let message =
  //       "ID Copied! Now go back to apxor dashboard and paste <br> the element ID";

  //     let uiElementPasteSVG = this.uiElementPasteSVG;

  //     if (this._type !== "Desktop") {
  //       message =
  //         "Element selected! Now go back to the apxor dashboard to proceed";
  //       uiElementPasteSVG = "";
  //     }
  //     const feedbackModal = `
  //       <style>
  //         .apx-container{
  //           padding:20px;
  //         }
  //       </style>
  //       <div id="apx-container" class="apx-container">
  //             <div id="close-button" style="position:fixed;top:20px;right:10px;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  //               <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>
  //               </svg>
  //             </div>
  //             <div style="font-family: 'Manrope';font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;
  //             color: #FFFFFF;">${message}</div>
  //             ${uiElementPasteSVG}
  //       </div>
  //     `;
  //     const feedbackParentDiv = document.createElement("div");
  //     feedbackParentDiv.style = `
  //       z-index:99999999;
  //       background:#002845;
  //       position:fixed;
  //       top:50%;
  //       left:50%;
  //       transform:translate(-50%, -50%);
  //     `;
  //     feedbackParentDiv.innerHTML = feedbackModal;
  //     document.body.appendChild(feedbackParentDiv);
  //     const closeButton = document.getElementById("close-button");
  //     closeButton.addEventListener("click", () => {
  //       const conatiner = document.getElementById("apx-container");
  //       conatiner.remove();
  //       enableViewSelectionBtn.disabled = false;
  //     });
  //   };

  //   /**
  //    * @function showFeedbackAfterViewIdCopyForFlutter
  //    * @description  creating container for indicating user to paste the code in dashboard, and selected element is highlighted
  //    * @params(object) bounds of selected element
  //    **/
  //   const showFeedbackAfterViewIdCopyForFlutter = (bounds) => {
  //     const divELement = document.createElement("div");
  //     const width = bounds.right - bounds.left;
  //     const height = bounds.bottom - bounds.top;
  //     divELement.style = `
  //       position:absolute;
  //       top:${bounds.top}px;
  //       left:${bounds.left}px;
  //       width:${width}px;
  //       height:${height}px;
  //       z-index:99999;outline: 2px solid red;cursor:default;
  //       `;
  //     document.body.appendChild(divELement);
  //     const enableViewSelectionBtn = document.querySelector("#apx-ev");
  //     enableViewSelectionBtn.disabled = true;

  //     let message =
  //       "ID Copied! Now go back to apxor dashboard and paste <br> the element ID";

  //     let uiElementPasteSVG = this.uiElementPasteSVG;

  //     if (this._type !== "Desktop") {
  //       message =
  //         "Element selected! Now go back to the apxor dashboard to proceed";
  //       uiElementPasteSVG = "";
  //     }
  //     const feedbackModal = `
  //       <style>
  //         .apx-container{
  //           padding:20px;
  //         }
  //       </style>
  //       <div id="apx-container" class="apx-container">
  //             <div id="close-button" style="position:fixed;top:20px;right:10px;"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  //               <path opacity="0.5" d="M11.0962 9.07071L17.8586 15.8331L15.8331 17.8586L9.0707 11.0962L8.99999 11.0255L8.92928 11.0962L2.16693 17.8586L0.141421 15.8331L6.90379 9.07071L6.9745 9L6.90379 8.92929L0.141421 2.16694L2.16693 0.141422L8.92928 6.9038L8.99999 6.97451L9.0707 6.9038L15.8331 0.141422L17.8586 2.16694L11.0962 8.92929L11.0255 9L11.0962 9.07071Z" fill="white" stroke="#002845" stroke-width="0.2"/>
  //               </svg>
  //             </div>
  //             <div style="font-family: 'Manrope';font-style: normal;font-weight: 600;font-size: 16px;line-height: 22px;
  //             color: #FFFFFF;">${message}</div>
  //             ${uiElementPasteSVG}
  //       </div>
  //     `;
  //     const feedbackParentDiv = document.createElement("div");
  //     feedbackParentDiv.style = `
  //       z-index:99999999;
  //       background:#002845;
  //       position:fixed;
  //       top:50%;
  //       left:50%;
  //       transform:translate(-50%, -50%);
  //     `;
  //     feedbackParentDiv.innerHTML = feedbackModal;
  //     document.body.appendChild(feedbackParentDiv);
  //     const closeButton = document.getElementById("close-button");
  //     closeButton.addEventListener("click", () => {
  //       const conatiner = document.getElementById("apx-container");
  //       conatiner.remove();
  //       divELement.remove();
  //       enableViewSelectionBtn.disabled = false;
  //       const helper =
  //         Apxor.getApxorFlutterHelper(); /*getApxorFlutterHelper:returns object*/
  //       helper.enableClick();
  //     });
  //   };
  //   /**
  //    * Hides this button, Shows the Enable View Selection button and remove all attached event listeners
  //    *
  //    * At last, show a toast kind of message at the center of the screen
  //    */
  //   const disableViewSelectionHandler = () => {
  //     this._hideSelectionMode();

  //     disableViewSelectionButton.style.display = "none";
  //     enableViewSelectionButton.style.display = "block";
  //   };

  //   disableViewSelectionButton.onclick = disableViewSelectionHandler;

  //   // Listen on these custom external events to control the show/hide behaviour of the buttons reside in this div
  //   this._wysiwygRoot.addEventListener("preview", disableViewSelectionHandler);
  //   this._wysiwygRoot.addEventListener("added", () => {
  //     addDeviceButton.style.display = "none";
  //     removeDeviceButton.style.display = "block";
  //     buttons.style.display = "flex";
  //     enableViewSelectionButton.style.display = "block";
  //   });

  //   dragElement(node);
  // };

  _hideSelectionMode = (hideHTML = OFF_HTML) => {
    if (!this.isSelectionMode) {
      return;
    }
    // Remove the mouseover and mouseout listeners
    window.removeEventListener("mouseover", onMouseOver, true);
    window.removeEventListener("mouseout", onMouseOut, true);
    window.removeEventListener("click", this.clickListener, true);

    const nodes = document.querySelectorAll(".apx-highlight");
    for (let index = 0; index < nodes.length; index++) {
      const node = nodes[index];
      node.classList.remove("apx-highlight");
    }

    this._hideToast(true, hideHTML);

    this.isSelectionMode = false;
  };

  _hideToast = (hide = false, hideHTML = OFF_HTML) => {
    this._viewPickerNode.style.visibility = "visible";
    if (hide) {
      this._viewPickerNode.innerHTML = hideHTML;
      this._viewPickerNode.style.opacity = 1;
    } else {
      this._viewPickerNode.innerHTML = ON_HTML;
      this._viewPickerNode.style.opacity = 1;
    }
    setTimeout(() => {
      this._viewPickerNode.style.opacity = 0;
      this._viewPickerNode.style.visibility = "hidden";
    }, 1000);
  };

  /**
   * Dialog that shows helps to add this device as test device
   */
  _showAddTestDeviceDialog = (rtmInstance) => {
    const dialog = createDialog(500, 20, {});
    const dialogContent = dialog.children[0];
    dialogContent.style.flex = "0 1 auto";
    dialogContent.style.maxHeight = "calc(100% - 96px)";
    dialogContent.style.display = "flex";
    dialogContent.style.flexDirection = "column";

    const deviceInfo = Apxor.getController().getDevInfo();
    const { apx_browser } = Apxor.getController().getUserAttributes();
    const { hardware_model, os_version, id } = deviceInfo;

    const styles = `<style>
        .apx-loading{
          background:#333 url('https://code.jquery.com/mobile/1.3.1/images/ajax-loader.gif') no-repeat 50% 50%;
          -webkit-transition:background-color 0;transition:background-color 0;opacity: 1;
          -webkit-transition:opacity 1;transition:opacity 1
        }
        .apx-t{
          flex:0 0 auto;
          margin:0;
          padding:24px 24px 20px
        }
        .apx-tt{
          text-align: center;
          color:rgba(0,72,114,0.87);
          font-size:1.3125rem;
          font-weight:500;
          font-family: inherit, 'Helvetica', 'Arial', sans-serif;
          line-height: 1.16667em;
          margin:0
        }
        .apx-c{
          flex:1 1 auto;padding:0 24px 24px;overflow-y: auto
        }
        .apx-de{
          line-height:1.5;color:rgba(0,72,114,0.54);font-size:1rem;font-weight:400;
          font-family:inherit, "Helvetica", "Arial", sans-serif;margin:0;display:block
        }
        .apx-id{
          width:100%;margin-top:8px;margin-bottom:4px;margin:0;border:0;flex-direction:column;
          display:inline-flex;padding:0;position:relative;min-width:0;vertical-align:top
        }
        .apx-il{
          transition:color 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms,transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
          transform:translate(0, 21px) scale(1);top:0;left:0;position:absolute;
          color:rgba(0,72,114, 0.54);padding: 0;font-size: 1rem;transform-origin:top left;
          font-family: inherit, "Helvetica", "Arial", sans-serif;line-height: 1
        }
        .apx-il-f{
          transform:translate(0, 1.5px) scale(0.75)
        }
        label + .apx-iid {
          margin-top:16px;position:relative;width: 100%;color: rgba(0,72,114, 0.87);
          cursor: text;display: inline-flex;font-size: 1rem;
          font-family:inherit, "Helvetica", "Arial", sans-serif;
          line-height: 1.1875em;align-items: center
        }
        .apx-iid.apx-iid-f:after{
          transform:scaleX(1)
        }
        .apx-iid:hover:before{
          border-bottom: 2px solid rgba(0,72,114, 0.87)
        }
        .apx-iid:before{
          left: 0;right: 0;bottom: 0;content: '\\00a0';position: absolute;
          transition: border-bottom-color 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          border-bottom: 1px solid rgba(0, 0, 0, 0.42);pointer-events: none
        }
        .apx-iid:after{
          left: 0;right: 0;bottom: 0;content: "";position: absolute;transform: scaleX(0);
          transition: transform 200ms cubic-bezier(0.0, 0, 0.2, 1) 0ms;
          border-bottom: 2px solid rgb(44, 56, 126);pointer-events: none
        }
        .apx-ii{
          padding-top:3px;font: inherit;color: currentColor;width: 100%;border: 0;margin: 0;
          display: block;min-width: 0;box-sizing: content-box;background: none;padding: 6px 0 7px;outline:0
        }
        .apx-ul{
          padding-top:8px;padding-bottom:8px;margin:0;padding:0;position:relative;list-style:none
        }
        .apx-li{
          padding-left:16px;padding-right:16px;width:100%;display:flex;list-style:none;
          position:relative;box-sizing:border-box;text-align:left;align-items:center;
          padding-top:11px;padding-bottom:11px;justify-content:flex-start;text-decoration:none
        }
        .apx-lid:first-child{
          padding-left:0
        }
        .apx-lid{
          flex:1 1 auto;padding:0 16px;min-width:0
        }
        .apx-lids{
          color:rgba(0,72,114, 0.87);font-weight:400;line-height:1.5em;
          font-family:inherit, "Helvetica", "Arial", sans-seriffont-size:1rem
        }
        .apx-a{
          flex:0 0 auto;margin:8px 4px;display:flex;align-items:center;justify-content:flex-end
        }
        .apx-b{
          font-size:0.875rem;min-width:64px;box-sizing:border-box;min-height:36px;border:0;
          transition:background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
          line-height:1.3125;font-weight:500;font-family:inherit, "Helvetica", "Arial", sans-serif;
          border-radius:4px;cursor:pointer;display:inline-flex;outline:none;
          position:relative;align-items:center;user-select:none;vertical-align:middle;
          justify-content:center;text-decoration:none;background-color:transparent
        }
        .apx-bl{
          width: 100%;display:inherit;align-items:inherit;justify-content:inherit
        }
        .apx-btr{
          top:0;left:0;width:100%;height:100%;display:block;z-index:0;position:absolute;
          overflow:hidden;border-radius:inherit;pointer-events:none
        }
      </style>
    `;

    const html = `
        ${styles}
        <div>
          <div class="apx-t"><h2 class="apx-tt">Set device name</h2></div>
          <div class="apx-c">
            <div class="apx-id">
              <label class="apx-il">Device name</label>
              <div class="apx-iid">
                <input class="apx-ii" type="text" id="apx-ii" value="">
              </div>
            </div>
            <ul class="apx-ul">
              <li class="apx-li">
                <div class="apx-lid">
                  <span class="apx-lids">
                    <span>Model <strong style="float:right">${hardware_model} - ${os_version}</strong></span>
                  </span>
                </div>
              </li>
              <li class="apx-li">
                <div class="apx-lid">
                  <span class="apx-lids">
                    <span>Browser <strong style="float:right">${apx_browser}</strong></span>
                  </span>
                </div>
              </li>
              <li class="apx-li">
                <div class="apx-lid">
                  <span class="apx-lids">
                    <span>Device ID <strong style="float:right">${id}</strong></span>
                  </span>
                </div>
              </li>
            </ul>
          </div>
          <div class="apx-a">
          <button id="apx-bc" class="apx-b"><span class="apx-bl" style="color:#295e8c6b">Cancel</span><span class="apx-btr"/></button>
          <button id="apx-bd" class="apx-b"><span class="apx-bl" style="color:#295e8c">Done</span><span class="apx-btr"/></button>
          </div>
        </div>
    `;

    dialog.style.visibility = "hidden";
    dialogContent.style.visibility = "hidden";
    dialogContent.innerHTML = html;

    const input = document.getElementById("apx-ii");
    if (this.testDeviceData) {
      input.value = this.testDeviceData?.name ?? "";
    }

    input.onfocus = () => {
      input.parentNode.classList.add("apx-iid-f");
      input.parentNode.parentNode.children[0].classList.add("apx-il-f");
    };
    input.onblur = () => {
      input.parentNode.classList.remove("apx-iid-f");
      input.parentNode.parentNode.children[0].classList.remove("apx-il-f");
    };
    input.oninput = () => {
      if (input.value.trim() !== "") {
        done.removeAttribute("disabled");
      } else {
        done.setAttribute("disabled", "");
      }
    };

    // Show the dialog with some timeout to animate the dialog
    setTimeout(() => {
      dialog.style.visibility = "visible";
      dialogContent.style.visibility = "visible";

      dialogContent.classList.toggle("open");

      input.parentNode.parentNode.children[0].classList.add("apx-il-f");
    }, 100);

    const hideDialog = () => {
      dialogContent.classList.toggle("open");
      setTimeout(() => {
        dialog.parentNode.removeChild(dialog);
      }, 400);
    };

    const cancel = document.getElementById("apx-bc");
    cancel.onclick = () => {
      hideDialog();
    };

    const done = document.getElementById("apx-bd");
    done.onclick = () => {
      // Make Add Test Device network request
      dialogContent.children[1].classList.add("apx-loading");
      Apxor.getController().makePostRequest(
        ADD_TEST_DEVICE_API.replace("<aid>", Apxor.getSiteId()),
        {
          model: hardware_model,
          id,
          nick_name: input.value,
        },
        {
          apx_web_key: "WTCKFAIVAJKYJA3HCV80WIKZU98R9NJG",
        },
        () => {
          const newInfo = { id, name: input.value };
          Apxor.getController().persistToStorage("_apx_td", newInfo, true);

          this.testDeviceData = newInfo;

          this._makeSSERequest("select", `${input.value} - ${id}`, id, () => {
            dialogContent.children[1].classList.remove("apx-loading");
            this._wysiwygRoot.dispatchEvent(new CustomEvent("added"));
          });

          this.previewEventSource = new EventSource(
            PREVIEW_API.replace("<aid>", Apxor.getSiteId()).replace("<uid>", id)
          );
          this.artConfigEventSource = new EventSource(
            CONFIG_API.replace("<aid>", Apxor.getSiteId()).replace("<uid>", id)
          );
          this.previewEventSource.onmessage =
            this.artConfigEventSource.onmessage = (e) => {
              if (e && e.data && e.data !== "{}") {
                this._handleSSEResponse(rtmInstance, e.data);
              }
            };

          hideDialog();
        },
        () => {}
      );
      const testDeviceDetailsContainer = document.getElementById("apx-ddtd");
      testDeviceDetailsContainer.style.display = "block";
      const testDeviceName = document.getElementById("apx-ddtdname");
      testDeviceName.innerHTML = input.value;
      const testDeviceId = document.getElementById("apx-ddtdid");
      testDeviceId.innerHTML = id;
      this.dropDownBox.style.paddingTop = "0px";
    };
  };

  /**
   * Helper SSE code to send the commands in a reusable way
   */
  _makeSSERequest = (
    type,
    key1,
    key2,
    successCallback = () => {},
    errorCallback = () => {},
    eventsArray,
    trackeventsArray
  ) => {
    const deviceInfo = Apxor.getController().getDevInfo();

    const postBody = {
      device_info: {
        id: deviceInfo.id,
        hardware_model: deviceInfo.hardware_model,
        os_version: deviceInfo.os_version,
        width: deviceInfo.dimensions.width,
        height: deviceInfo.dimensions.height,
      },
      screen: {
        image: type,
        navigation: key1,
        orientation: key2,
      },
      layout: [],
    };

    if (eventsArray) {
      postBody["events_to_register"] = eventsArray;
    }

    if (trackeventsArray) {
      postBody["pages_to_register"] = trackeventsArray;
    }

    Apxor.getController().makePostRequest(
      LAYOUT_URL.replace("<aid>", Apxor.getSiteId()).replace(
        "<uid>",
        this._vid
      ),
      postBody,
      {},
      successCallback,
      errorCallback
    );
  };

  // Below 5 helper methods were grabbed from
  // https://chromium.googlesource.com/chromium/blink/+/refs/heads/main/Source/devtools/front_end/components/DOMPresentationUtils.js

  // Above URL has a bug, below is the URL with proper fix
  // https://github.com/ChromeDevTools/devtools-frontend/blob/master/front_end/panels/elements/DOMPath.ts

  cssPath = (node, optimized) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return "";
    var steps = [];
    var contextNode = node;
    while (contextNode) {
      var step = this._cssPathStep(
        contextNode,
        !!optimized,
        contextNode === node
      );
      if (!step) break; // Error - bail out early.
      steps.push(step);
      if (step.optimized) break;
      contextNode = contextNode.parentNode;
    }
    steps.reverse();
    return steps.join(" > ");
  };

  _cssPathStep = (node, optimized, isTargetNode) => {
    if (node.nodeType !== Node.ELEMENT_NODE) return null;

    const id = node.getAttribute("id");
    if (optimized) {
      if (id) return new DOMNodePathStep(idSelector(id), true);
      var nodeNameLower = node.nodeName.toLowerCase();
      if (
        nodeNameLower === "body" ||
        nodeNameLower === "head" ||
        nodeNameLower === "html"
      )
        return new DOMNodePathStep(node.nodeName.toLowerCase(), true);
    }
    var nodeName = node.nodeName.toLowerCase();

    if (id)
      return new DOMNodePathStep(nodeName.toLowerCase() + idSelector(id), true);
    var parent = node.parentNode;
    if (!parent || parent.nodeType === Node.DOCUMENT_NODE)
      return new DOMNodePathStep(nodeName.toLowerCase(), true);

    function prefixedElementClassNames(node) {
      var classAttribute = node.getAttribute("class");
      if (!classAttribute) return [];

      return classAttribute
        .split(/\s+/g)
        .filter(Boolean)
        .map(function (name) {
          // The prefix is required to store "__proto__" in a object-based map.
          return "$" + name;
        });
    }

    function idSelector(id) {
      return "#" + escapeIdentifierIfNeeded(id);
    }

    function escapeIdentifierIfNeeded(ident) {
      if (isCSSIdentifier(ident)) return ident;
      var shouldEscapeFirst = /^(?:[0-9]|-[0-9-]?)/.test(ident);
      var lastIndex = ident.length - 1;
      return ident.replace(/./g, function (c, i) {
        return (shouldEscapeFirst && i === 0) || !isCSSIdentChar(c)
          ? escapeAsciiChar(c, i === lastIndex)
          : c;
      });
    }

    function escapeAsciiChar(c, isLast) {
      return "\\" + toHexByte(c) + (isLast ? "" : " ");
    }

    function toHexByte(c) {
      var hexByte = c.charCodeAt(0).toString(16);
      if (hexByte.length === 1) hexByte = "0" + hexByte;
      return hexByte;
    }

    function isCSSIdentChar(c) {
      if (/[a-zA-Z0-9_-]/.test(c)) return true;
      return c.charCodeAt(0) >= 0xa0;
    }

    function isCSSIdentifier(value) {
      return /^-?[a-zA-Z_][a-zA-Z0-9_-]*$/.test(value);
    }

    var prefixedOwnClassNamesArray = prefixedElementClassNames(node);
    var needsClassNames = false;
    var needsNthChild = false;
    var ownIndex = -1;
    var elementIndex = -1;
    var siblings = parent.children;
    for (
      var i = 0;
      (ownIndex === -1 || !needsNthChild) && i < siblings.length;
      ++i
    ) {
      var sibling = siblings[i];
      if (sibling.nodeType !== Node.ELEMENT_NODE) continue;

      elementIndex += 1;
      if (sibling === node) {
        ownIndex = elementIndex;
        continue;
      }
      if (needsNthChild) continue;
      if (sibling.nodeName.toLowerCase() !== nodeName.toLowerCase()) continue;

      needsClassNames = true;
      var ownClassNames = new Set(prefixedOwnClassNamesArray);
      if (!ownClassNames.size) {
        needsNthChild = true;
        continue;
      }

      var siblingClassNamesArray = prefixedElementClassNames(sibling);
      for (var j = 0; j < siblingClassNamesArray.length; ++j) {
        var siblingClass = siblingClassNamesArray[j];
        if (!ownClassNames.has(siblingClass)) continue;
        ownClassNames.delete(siblingClass);
        if (!ownClassNames.size) {
          needsNthChild = true;
          break;
        }
      }
    }

    var result = nodeName.toLowerCase();
    if (
      isTargetNode &&
      nodeName.toLowerCase() === "input" &&
      node.getAttribute("type") &&
      !node.getAttribute("id") &&
      !node.getAttribute("class")
    )
      result += '[type="' + node.getAttribute("type") + '"]';
    if (needsNthChild) {
      result += ":nth-child(" + (ownIndex + 1) + ")";
    } else if (needsClassNames) {
      for (var prefixedName in prefixedOwnClassNamesArray)
        result +=
          "." +
          escapeIdentifierIfNeeded(
            prefixedOwnClassNamesArray[prefixedName].substr(1)
          );
    }

    return new DOMNodePathStep(result, false);
  };

  xPath = (node, optimized) => {
    if (node.nodeType === Node.DOCUMENT_NODE) return "/";
    var steps = [];
    var contextNode = node;
    while (contextNode) {
      var step = this._xPathValue(contextNode, optimized);
      if (!step) break; // Error - bail out early.
      steps.push(step);
      if (step.optimized) break;
      contextNode = contextNode.parentNode;
    }
    steps.reverse();
    return (steps.length && steps[0].optimized ? "" : "/") + steps.join("/");
  };

  _xPathValue = (node, optimized) => {
    var ownValue;
    var ownIndex = this._xPathIndex(node);
    if (ownIndex === -1) return null; // Error.
    switch (node.nodeType) {
      case Node.ELEMENT_NODE:
        if (optimized && node.getAttribute("id"))
          return new DOMNodePathStep(
            '//*[@id="' + node.getAttribute("id") + '"]',
            true
          );
        ownValue = node.localName;
        break;
      case Node.ATTRIBUTE_NODE:
        ownValue = "@" + node.nodeName;
        break;
      case Node.TEXT_NODE:
      case Node.CDATA_SECTION_NODE:
        ownValue = "text()";
        break;
      case Node.PROCESSING_INSTRUCTION_NODE:
        ownValue = "processing-instruction()";
        break;
      case Node.COMMENT_NODE:
        ownValue = "comment()";
        break;
      case Node.DOCUMENT_NODE:
        ownValue = "";
        break;
      default:
        ownValue = "";
        break;
    }
    if (ownIndex > 0) ownValue += "[" + ownIndex + "]";
    return new DOMNodePathStep(ownValue, node.nodeType === Node.DOCUMENT_NODE);
  };

  _xPathIndex = (node) => {
    // Returns -1 in case of error, 0 if no siblings matching the same expression, <XPath index among the same expression-matching sibling nodes> otherwise.
    function areNodesSimilar(left, right) {
      if (left === right) return true;
      if (
        left.nodeType === Node.ELEMENT_NODE &&
        right.nodeType === Node.ELEMENT_NODE
      )
        return left.localName === right.localName;
      if (left.nodeType === right.nodeType) return true;
      // XPath treats CDATA as text nodes.
      var leftType =
        left.nodeType === Node.CDATA_SECTION_NODE
          ? Node.TEXT_NODE
          : left.nodeType;
      var rightType =
        right.nodeType === Node.CDATA_SECTION_NODE
          ? Node.TEXT_NODE
          : right.nodeType;
      return leftType === rightType;
    }
    var siblings = node.parentNode ? node.parentNode.children : null;
    if (!siblings) return 0; // Root node - no siblings.
    var hasSameNamedElements;
    for (var i = 0; i < siblings.length; ++i) {
      if (areNodesSimilar(node, siblings[i]) && siblings[i] !== node) {
        hasSameNamedElements = true;
        break;
      }
    }
    if (!hasSameNamedElements) return 0;
    var ownIndex = 1; // XPath indices start with 1.
    for (var j = 0; j < siblings.length; ++j) {
      if (areNodesSimilar(node, siblings[j])) {
        if (siblings[j] === node) return ownIndex;
        ++ownIndex;
      }
    }
    return -1; // An error occurred: |node| not found in parent's children.
  };

  modalForElementSelection = () => {
    let modalContainer = document.createElement("div");
    modalContainer.className = "modal-container";
    let modalContent = document.createElement("div");
    modalContent.className = "modal-content";
    let closeButton = document.createElement("div");
    closeButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 32 32" fill="none">
<path d="M14.586 16L6.29204 7.70798C6.19907 7.61501 6.12531 7.50463 6.075 7.38315C6.02468 7.26167 5.99878 7.13147 5.99878 6.99998C5.99878 6.86849 6.02468 6.73829 6.075 6.61681C6.12531 6.49534 6.19907 6.38496 6.29204 6.29198C6.38502 6.19901 6.4954 6.12525 6.61688 6.07493C6.73835 6.02462 6.86855 5.99872 7.00004 5.99872C7.13153 5.99872 7.26173 6.02462 7.38321 6.07493C7.50469 6.12525 7.61507 6.19901 7.70804 6.29198L16 14.586L24.292 6.29198C24.4798 6.10421 24.7345 5.99872 25 5.99872C25.2656 5.99872 25.5203 6.10421 25.708 6.29198C25.8958 6.47975 26.0013 6.73443 26.0013 6.99998C26.0013 7.26553 25.8958 7.52021 25.708 7.70798L17.414 16L25.708 24.292C25.8958 24.4798 26.0013 24.7344 26.0013 25C26.0013 25.2655 25.8958 25.5202 25.708 25.708C25.5203 25.8958 25.2656 26.0012 25 26.0012C24.7345 26.0012 24.4798 25.8958 24.292 25.708L16 17.414L7.70804 25.708C7.52027 25.8958 7.26559 26.0012 7.00004 26.0012C6.73449 26.0012 6.47982 25.8958 6.29204 25.708C6.10427 25.5202 5.99878 25.2655 5.99878 25C5.99878 24.7344 6.10427 24.4798 6.29204 24.292L14.586 16Z" fill="black"/></svg>`;
    closeButton.className = "close-button";
    let modalImage = document.createElement("div");
    modalImage.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 200 200" fill="none">
<circle cx="100" cy="100" r="100" fill="#F5F5F5"/>
<mask id="mask0_486_2035" style="mask-type:alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="200" height="200">
<circle cx="100" cy="100" r="100" fill="#F4FBFF"/>
</mask>
<g mask="url(#mask0_486_2035)">
<path d="M334.955 32.8623H54.2021C46.7556 32.8623 40.719 38.8989 40.719 46.3455V153.559C40.719 161.005 46.7556 167.042 54.2022 167.042H334.955C342.401 167.042 348.438 161.005 348.438 153.559V46.3455C348.438 38.8989 342.401 32.8623 334.955 32.8623Z" fill="white"/>
<path d="M343.635 32.8623H45.5224C42.8695 32.8623 40.719 35.0128 40.719 37.6657C40.719 40.3185 42.8695 42.469 45.5224 42.469H343.635C346.288 42.469 348.438 40.3185 348.438 37.6657C348.438 35.0128 346.288 32.8623 343.635 32.8623Z" fill="#263238"/>
<path d="M49.9887 37.66C49.9887 38.7274 49.1235 39.5926 48.0561 39.5926C46.9887 39.5926 46.1123 38.7274 46.1123 37.66C46.1123 36.5926 46.9775 35.7274 48.0449 35.7274C49.1123 35.7274 49.9887 36.5926 49.9887 37.66Z" fill="#FFC727"/>
<path d="M57.8876 37.66C57.8876 38.7274 57.0225 39.5926 55.955 39.5926C54.8876 39.5926 54.0225 38.7274 54.0225 37.66C54.0225 36.5926 54.8876 35.7274 55.955 35.7274C57.0225 35.7274 57.8876 36.5926 57.8876 37.66Z" fill="white"/>
<path d="M65.7978 37.66C65.7978 38.7274 64.9326 39.5926 63.8652 39.5926C62.7978 39.5926 61.9326 38.7274 61.9326 37.66C61.9326 36.5926 62.7978 35.7274 63.8652 35.7274C64.9326 35.7274 65.7978 36.5926 65.7978 37.66Z" fill="#455A64"/>
<path d="M313.573 88.6488H75.4384C68.4014 88.6488 62.6968 94.3534 62.6968 101.39C62.6968 108.427 68.4014 114.132 75.4383 114.132H313.573C320.61 114.132 326.315 108.427 326.315 101.39C326.315 94.3534 320.61 88.6488 313.573 88.6488Z" fill="#EBEBEB"/>
<path d="M124.922 124.952H74.3148C67.8983 124.952 62.6968 130.154 62.6968 136.57C62.6968 142.987 67.8983 148.188 74.3148 148.188H124.921C131.338 148.188 136.539 142.987 136.539 136.57C136.539 130.154 131.338 124.952 124.922 124.952Z" fill="#FFC727"/>
<path d="M166.562 135.674L170.865 146.067L166.562 147.854L162.236 137.382L155.124 142.899V113.607L175.641 134.315L166.562 135.674Z" fill="#263238"/>
<path d="M156.629 107.09V100" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
<path d="M148.551 110.562L143.539 105.551" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
<path d="M145.292 118.73H138.202" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
<path d="M148.764 126.809L143.753 131.831" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
<path d="M156.933 130.067V137.157" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
<path d="M165.011 126.595L170.034 131.618" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
<path d="M168.27 118.427H175.36" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
<path d="M164.798 110.348L169.82 105.337" stroke="#263238" stroke-width="1.1236" stroke-miterlimit="10"/>
</g>
</svg>`;
    modalImage.className = "modal-image";
    let modalText = document.createElement("p");
    modalText.textContent =
      "To track an event start  by \n clicking  any element on \n your site.\n";
    modalText.className = "modal-text";
    modalText.style =
      "user-select: none;color:#474747;font-size:20px;font-weight:500;font-family:inherit";

    let modalButton = document.createElement("button");
    modalButton.textContent = "Select Element";
    modalButton.className = "modal-button";
    modalButton.style =
      "background-color:#F97316;color:#fff;font-size:13px;font-weight:500;font-family:inherit;height:40px;width:120px;border-radius:11px;border:#F97316";
    modalButton.addEventListener("click", () => {
      this.closeModal();
      this._selectAnElement();
    });
    modalContent.appendChild(closeButton);
    modalContent.appendChild(modalImage);
    modalContent.appendChild(modalText);
    modalContent.appendChild(modalButton);
    modalContainer.appendChild(modalContent);
    document.body.appendChild(modalContainer);
    closeButton.addEventListener("click", () => {
      this.closeModal();
    });
    modalContainer.style =
      "display:flex;align-items:center;justify-content:center;position:fixed;top:0%;left:0%;width:100%;height:100%;background-color:rgba(0,0,0,0.5);z-index:9999;";
    modalContent.style =
      "background-color:#fff;height:358px;width:310px;padding:20px;border-radius:10px;text-align:center;";
    modalImage.style =
      "border-radius:50%;display:flex;margin-top:20px;justify-content:center;";
    closeButton.style =
      "height:25px;width:25px;float:right;position:static;top:10px;right:10px;width:30px;height:30px;cursor:pointer";
  };

  closeModal() {
    let modalContainer = document.querySelector(".modal-container");
    modalContainer.style.display = "none";
  }

  showToastMessagePopUp(toastConfig) {
    if (!this._isShowingToastPopup) {
      // Creates a ModalInApp instance with the provided toast configuration and initializes the modal.
      this._toastInApp = new ModalInApp(
        toastConfig,
        {},
        "",
        {},
        () => {},
        () => {},
        () => {},
        false,
        [],
        0
      );
      this._toastInApp.createInAppModal();
    }
  }

  dismissToastPopup() {
    // Find the toast popup element using a selector and remove it from the DOM
    const element = document.querySelector('[class^="apx-inapp-overlay"]');
    element.remove();
    this._isShowingToastPopup = false;
  }

  resetHeartbeatTimeout() {
    clearTimeout(this._heartbeatTimeout);
    // If no heartbeat is received within a specific duration, assume a disconnection
    this._heartbeatTimeout = setTimeout(() => {
      Logger.error("Missed heartbeat. Connection might be lost.");
    }, 30000);
  }

  // uiElementPasteSVG = `
  //       <svg width="447" height="144" viewBox="0 0 447 144" fill="none" xmlns="http://www.w3.org/2000/svg">
  //         <rect width="447" height="144" fill="white"/>
  //         <path d="M24.84 35V26.36H28.488C28.572 26.36 28.684 26.364 28.824 26.372C28.968 26.376 29.096 26.388 29.208 26.408C29.724 26.488 30.146 26.658 30.474 26.918C30.806 27.178 31.05 27.506 31.206 27.902C31.362 28.294 31.44 28.732 31.44 29.216C31.44 29.7 31.36 30.14 31.2 30.536C31.044 30.928 30.8 31.254 30.468 31.514C30.14 31.774 29.72 31.944 29.208 32.024C29.096 32.04 28.968 32.052 28.824 32.06C28.68 32.068 28.568 32.072 28.488 32.072H26.472V35H24.84ZM26.472 30.548H28.416C28.5 30.548 28.592 30.544 28.692 30.536C28.792 30.528 28.884 30.512 28.968 30.488C29.188 30.428 29.358 30.328 29.478 30.188C29.598 30.044 29.68 29.886 29.724 29.714C29.772 29.538 29.796 29.372 29.796 29.216C29.796 29.06 29.772 28.896 29.724 28.724C29.68 28.548 29.598 28.39 29.478 28.25C29.358 28.106 29.188 28.004 28.968 27.944C28.884 27.92 28.792 27.904 28.692 27.896C28.592 27.888 28.5 27.884 28.416 27.884H26.472V30.548ZM32.767 35L35.407 26.36H37.843L40.483 35H38.803L36.451 27.38H36.763L34.447 35H32.767ZM34.351 33.2V31.676H38.911V33.2H34.351ZM45.9081 35.18C45.2681 35.18 44.6901 35.068 44.1741 34.844C43.6621 34.616 43.2401 34.292 42.9081 33.872C42.5801 33.448 42.3721 32.944 42.2841 32.36L43.9881 32.108C44.1081 32.604 44.3561 32.986 44.7321 33.254C45.1081 33.522 45.5361 33.656 46.0161 33.656C46.2841 33.656 46.5441 33.614 46.7961 33.53C47.0481 33.446 47.2541 33.322 47.4141 33.158C47.5781 32.994 47.6601 32.792 47.6601 32.552C47.6601 32.464 47.6461 32.38 47.6181 32.3C47.5941 32.216 47.5521 32.138 47.4921 32.066C47.4321 31.994 47.3461 31.926 47.2341 31.862C47.1261 31.798 46.9881 31.74 46.8201 31.688L44.5761 31.028C44.4081 30.98 44.2121 30.912 43.9881 30.824C43.7681 30.736 43.5541 30.61 43.3461 30.446C43.1381 30.282 42.9641 30.066 42.8241 29.798C42.6881 29.526 42.6201 29.184 42.6201 28.772C42.6201 28.192 42.7661 27.71 43.0581 27.326C43.3501 26.942 43.7401 26.656 44.2281 26.468C44.7161 26.28 45.2561 26.188 45.8481 26.192C46.4441 26.2 46.9761 26.302 47.4441 26.498C47.9121 26.694 48.3041 26.98 48.6201 27.356C48.9361 27.728 49.1641 28.184 49.3041 28.724L47.5401 29.024C47.4761 28.744 47.3581 28.508 47.1861 28.316C47.0141 28.124 46.8081 27.978 46.5681 27.878C46.3321 27.778 46.0841 27.724 45.8241 27.716C45.5681 27.708 45.3261 27.744 45.0981 27.824C44.8741 27.9 44.6901 28.012 44.5461 28.16C44.4061 28.308 44.3361 28.484 44.3361 28.688C44.3361 28.876 44.3941 29.03 44.5101 29.15C44.6261 29.266 44.7721 29.36 44.9481 29.432C45.1241 29.504 45.3041 29.564 45.4881 29.612L46.9881 30.02C47.2121 30.08 47.4601 30.16 47.7321 30.26C48.0041 30.356 48.2641 30.492 48.5121 30.668C48.7641 30.84 48.9701 31.068 49.1301 31.352C49.2941 31.636 49.3761 31.996 49.3761 32.432C49.3761 32.896 49.2781 33.302 49.0821 33.65C48.8901 33.994 48.6301 34.28 48.3021 34.508C47.9741 34.732 47.6021 34.9 47.1861 35.012C46.7741 35.124 46.3481 35.18 45.9081 35.18ZM54.0188 35V27.884H51.2948V26.36H58.3748V27.884H55.6508V35H54.0188ZM60.6591 35V26.36H66.2991V27.884H62.2911V29.732H65.5791V31.256H62.2911V33.476H66.2991V35H60.6591ZM76.2955 35.18C75.5995 35.18 74.9875 35.04 74.4595 34.76C73.9315 34.476 73.5195 34.078 73.2235 33.566C72.9275 33.054 72.7795 32.452 72.7795 31.76V26.372L74.4355 26.36V31.748C74.4355 32.032 74.4835 32.29 74.5795 32.522C74.6755 32.754 74.8075 32.954 74.9755 33.122C75.1475 33.29 75.3455 33.42 75.5695 33.512C75.7975 33.6 76.0395 33.644 76.2955 33.644C76.5595 33.644 76.8035 33.598 77.0275 33.506C77.2555 33.414 77.4535 33.284 77.6215 33.116C77.7895 32.948 77.9195 32.748 78.0115 32.516C78.1075 32.284 78.1555 32.028 78.1555 31.748V26.36H79.8115V31.76C79.8115 32.452 79.6635 33.054 79.3675 33.566C79.0715 34.078 78.6595 34.476 78.1315 34.76C77.6035 35.04 76.9915 35.18 76.2955 35.18ZM82.9266 35V26.36H84.5586V35H82.9266ZM91.3997 35V26.36H97.0397V27.884H93.0317V29.732H96.3197V31.256H93.0317V33.476H97.0397V35H91.3997ZM99.9178 35V26.36H101.55V33.476H105.27V35H99.9178ZM107.61 35V26.36H113.25V27.884H109.242V29.732H112.53V31.256H109.242V33.476H113.25V35H107.61ZM116.008 35V26.36H117.472L120.328 32.096L123.184 26.36H124.648V35H123.124V29.84L120.616 35H120.04L117.532 29.84V35H116.008ZM127.652 35V26.36H133.292V27.884H129.284V29.732H132.572V31.256H129.284V33.476H133.292V35H127.652ZM136.05 35V26.36H137.706L141.462 32.12V26.36H143.118V35H141.462L137.706 29.24V35H136.05ZM148.117 35V27.884H145.393V26.36H152.473V27.884H149.749V35H148.117ZM158.236 35V26.36H159.868V35H158.236ZM162.987 35V26.36H165.783C165.851 26.36 165.991 26.362 166.203 26.366C166.415 26.37 166.619 26.384 166.815 26.408C167.511 26.492 168.101 26.734 168.585 27.134C169.069 27.534 169.437 28.042 169.689 28.658C169.941 29.274 170.067 29.948 170.067 30.68C170.067 31.412 169.941 32.086 169.689 32.702C169.437 33.318 169.069 33.826 168.585 34.226C168.101 34.626 167.511 34.868 166.815 34.952C166.619 34.976 166.415 34.99 166.203 34.994C165.991 34.998 165.851 35 165.783 35H162.987ZM164.643 33.464H165.783C165.891 33.464 166.037 33.462 166.221 33.458C166.405 33.45 166.571 33.432 166.719 33.404C167.095 33.328 167.401 33.152 167.637 32.876C167.877 32.6 168.053 32.268 168.165 31.88C168.281 31.492 168.339 31.092 168.339 30.68C168.339 30.248 168.279 29.838 168.159 29.45C168.043 29.062 167.865 28.734 167.625 28.466C167.385 28.198 167.083 28.028 166.719 27.956C166.571 27.924 166.405 27.906 166.221 27.902C166.037 27.898 165.891 27.896 165.783 27.896H164.643V33.464Z" fill="#FF7F33"/>
  //         <rect x="24" y="78" width="399" height="44" rx="2" fill="white" stroke="#CCD4DA"/>
  //         <path d="M305.98 106V95.92H310.054C310.152 95.92 310.273 95.9247 310.418 95.934C310.563 95.9387 310.7 95.9527 310.831 95.976C311.391 96.0647 311.858 96.256 312.231 96.55C312.609 96.844 312.891 97.215 313.078 97.663C313.265 98.111 313.358 98.6057 313.358 99.147C313.358 99.693 313.265 100.19 313.078 100.638C312.891 101.086 312.609 101.457 312.231 101.751C311.858 102.045 311.391 102.236 310.831 102.325C310.7 102.344 310.56 102.358 310.411 102.367C310.266 102.376 310.147 102.381 310.054 102.381H307.443V106H305.98ZM307.443 100.995H309.998C310.091 100.995 310.194 100.99 310.306 100.981C310.423 100.972 310.532 100.955 310.635 100.932C310.934 100.862 311.174 100.734 311.356 100.547C311.538 100.356 311.669 100.136 311.748 99.889C311.827 99.6417 311.867 99.3943 311.867 99.147C311.867 98.8997 311.827 98.6547 311.748 98.412C311.669 98.1647 311.538 97.9477 311.356 97.761C311.174 97.5697 310.934 97.439 310.635 97.369C310.532 97.341 310.423 97.3223 310.306 97.313C310.194 97.3037 310.091 97.299 309.998 97.299H307.443V100.995ZM316.66 106.21C316.1 106.21 315.631 106.107 315.253 105.902C314.875 105.692 314.588 105.417 314.392 105.076C314.201 104.731 314.105 104.353 314.105 103.942C314.105 103.559 314.173 103.223 314.308 102.934C314.443 102.645 314.644 102.4 314.91 102.199C315.176 101.994 315.503 101.828 315.89 101.702C316.226 101.604 316.606 101.518 317.031 101.443C317.456 101.368 317.901 101.298 318.368 101.233C318.839 101.168 319.306 101.102 319.768 101.037L319.236 101.331C319.245 100.738 319.119 100.3 318.858 100.015C318.601 99.7257 318.158 99.581 317.528 99.581C317.131 99.581 316.767 99.6743 316.436 99.861C316.105 100.043 315.874 100.346 315.743 100.771L314.378 100.351C314.565 99.7023 314.919 99.1867 315.442 98.804C315.969 98.4213 316.669 98.23 317.542 98.23C318.219 98.23 318.807 98.3467 319.306 98.58C319.81 98.8087 320.179 99.1727 320.412 99.672C320.533 99.9193 320.608 100.181 320.636 100.456C320.664 100.731 320.678 101.028 320.678 101.345V106H319.383V104.271L319.635 104.495C319.322 105.074 318.923 105.505 318.438 105.79C317.957 106.07 317.365 106.21 316.66 106.21ZM316.919 105.013C317.334 105.013 317.691 104.941 317.99 104.796C318.289 104.647 318.529 104.458 318.711 104.229C318.893 104 319.012 103.762 319.068 103.515C319.147 103.291 319.192 103.039 319.201 102.759C319.215 102.479 319.222 102.255 319.222 102.087L319.698 102.262C319.236 102.332 318.816 102.395 318.438 102.451C318.06 102.507 317.717 102.563 317.409 102.619C317.106 102.67 316.835 102.733 316.597 102.808C316.396 102.878 316.217 102.962 316.058 103.06C315.904 103.158 315.78 103.277 315.687 103.417C315.598 103.557 315.554 103.727 315.554 103.928C315.554 104.124 315.603 104.306 315.701 104.474C315.799 104.637 315.948 104.768 316.149 104.866C316.35 104.964 316.606 105.013 316.919 105.013ZM325.387 106.203C324.467 106.203 323.718 106 323.14 105.594C322.561 105.188 322.206 104.616 322.076 103.879L323.574 103.648C323.667 104.04 323.882 104.35 324.218 104.579C324.558 104.803 324.981 104.915 325.485 104.915C325.942 104.915 326.299 104.822 326.556 104.635C326.817 104.448 326.948 104.192 326.948 103.865C326.948 103.674 326.901 103.52 326.808 103.403C326.719 103.282 326.53 103.167 326.241 103.06C325.951 102.953 325.51 102.82 324.918 102.661C324.269 102.493 323.753 102.313 323.371 102.122C322.993 101.926 322.722 101.7 322.559 101.443C322.4 101.182 322.321 100.867 322.321 100.498C322.321 100.041 322.442 99.6417 322.685 99.301C322.927 98.9603 323.268 98.6967 323.707 98.51C324.15 98.3233 324.668 98.23 325.261 98.23C325.839 98.23 326.355 98.321 326.808 98.503C327.26 98.685 327.627 98.944 327.907 99.28C328.187 99.6113 328.355 100.001 328.411 100.449L326.913 100.722C326.861 100.358 326.691 100.071 326.402 99.861C326.112 99.651 325.737 99.5367 325.275 99.518C324.831 99.4993 324.472 99.574 324.197 99.742C323.921 99.9053 323.784 100.132 323.784 100.421C323.784 100.589 323.835 100.731 323.938 100.848C324.045 100.965 324.25 101.077 324.554 101.184C324.857 101.291 325.305 101.42 325.898 101.569C326.532 101.732 327.036 101.914 327.41 102.115C327.783 102.311 328.049 102.547 328.208 102.822C328.371 103.093 328.453 103.422 328.453 103.809C328.453 104.556 328.18 105.141 327.634 105.566C327.092 105.991 326.343 106.203 325.387 106.203ZM334.327 106C333.851 106.093 333.385 106.133 332.927 106.119C332.47 106.105 332.062 106.016 331.702 105.853C331.343 105.69 331.072 105.433 330.89 105.083C330.727 104.77 330.638 104.453 330.624 104.131C330.615 103.804 330.61 103.436 330.61 103.025V96.34H332.08V102.955C332.08 103.258 332.083 103.522 332.087 103.746C332.097 103.97 332.146 104.159 332.234 104.313C332.402 104.602 332.668 104.768 333.032 104.81C333.401 104.847 333.833 104.831 334.327 104.761V106ZM329.161 99.616V98.44H334.327V99.616H329.161ZM338.933 106.21C338.181 106.21 337.521 106.047 336.952 105.72C336.387 105.389 335.946 104.929 335.629 104.341C335.316 103.748 335.16 103.062 335.16 102.283C335.16 101.457 335.314 100.741 335.622 100.134C335.934 99.5273 336.368 99.0583 336.924 98.727C337.479 98.3957 338.125 98.23 338.863 98.23C339.633 98.23 340.288 98.4097 340.83 98.769C341.371 99.1237 341.775 99.63 342.041 100.288C342.311 100.946 342.419 101.728 342.363 102.633H340.9V102.101C340.89 101.224 340.722 100.575 340.396 100.155C340.074 99.735 339.581 99.525 338.919 99.525C338.186 99.525 337.635 99.756 337.267 100.218C336.898 100.68 336.714 101.347 336.714 102.22C336.714 103.051 336.898 103.695 337.267 104.152C337.635 104.605 338.167 104.831 338.863 104.831C339.32 104.831 339.714 104.728 340.046 104.523C340.382 104.313 340.643 104.014 340.83 103.627L342.265 104.082C341.971 104.759 341.525 105.284 340.928 105.657C340.33 106.026 339.665 106.21 338.933 106.21ZM336.238 102.633V101.492H341.635V102.633H336.238ZM350.943 106.21C349.935 106.21 349.076 105.991 348.367 105.552C347.658 105.109 347.114 104.493 346.736 103.704C346.363 102.915 346.176 102.001 346.176 100.96C346.176 99.9193 346.363 99.0047 346.736 98.216C347.114 97.4273 347.658 96.8137 348.367 96.375C349.076 95.9317 349.935 95.71 350.943 95.71C352.105 95.71 353.066 96.004 353.827 96.592C354.592 97.18 355.124 97.971 355.423 98.965L353.939 99.364C353.743 98.6593 353.393 98.1063 352.889 97.705C352.39 97.3037 351.741 97.103 350.943 97.103C350.229 97.103 349.634 97.264 349.158 97.586C348.682 97.908 348.323 98.3583 348.08 98.937C347.842 99.5157 347.723 100.19 347.723 100.96C347.718 101.73 347.835 102.404 348.073 102.983C348.316 103.562 348.675 104.012 349.151 104.334C349.632 104.656 350.229 104.817 350.943 104.817C351.741 104.817 352.39 104.616 352.889 104.215C353.393 103.809 353.743 103.256 353.939 102.556L355.423 102.955C355.124 103.949 354.592 104.74 353.827 105.328C353.066 105.916 352.105 106.21 350.943 106.21ZM357.102 106V95.71H358.565V106H357.102ZM360.808 97.201V95.78H362.271V97.201H360.808ZM360.808 106V98.44H362.271V106H360.808ZM367.922 106.21C367.198 106.21 366.592 106.035 366.102 105.685C365.612 105.33 365.241 104.852 364.989 104.25C364.737 103.648 364.611 102.969 364.611 102.213C364.611 101.457 364.734 100.778 364.982 100.176C365.234 99.574 365.602 99.1003 366.088 98.755C366.578 98.405 367.18 98.23 367.894 98.23C368.603 98.23 369.214 98.405 369.728 98.755C370.246 99.1003 370.645 99.574 370.925 100.176C371.205 100.773 371.345 101.452 371.345 102.213C371.345 102.969 371.205 103.65 370.925 104.257C370.649 104.859 370.255 105.335 369.742 105.685C369.233 106.035 368.626 106.21 367.922 106.21ZM364.366 109.36V98.44H365.668V103.879H365.836V109.36H364.366ZM367.719 104.887C368.185 104.887 368.57 104.768 368.874 104.53C369.182 104.292 369.41 103.972 369.56 103.571C369.714 103.165 369.791 102.712 369.791 102.213C369.791 101.718 369.714 101.27 369.56 100.869C369.41 100.468 369.179 100.148 368.867 99.91C368.554 99.672 368.155 99.553 367.67 99.553C367.212 99.553 366.834 99.665 366.536 99.889C366.242 100.113 366.022 100.426 365.878 100.827C365.738 101.228 365.668 101.69 365.668 102.213C365.668 102.736 365.738 103.198 365.878 103.599C366.018 104 366.239 104.315 366.543 104.544C366.846 104.773 367.238 104.887 367.719 104.887ZM376.439 106.21C375.716 106.21 375.109 106.035 374.619 105.685C374.129 105.33 373.758 104.852 373.506 104.25C373.254 103.648 373.128 102.969 373.128 102.213C373.128 101.457 373.252 100.778 373.499 100.176C373.751 99.574 374.12 99.1003 374.605 98.755C375.095 98.405 375.697 98.23 376.411 98.23C377.12 98.23 377.732 98.405 378.245 98.755C378.763 99.1003 379.162 99.574 379.442 100.176C379.722 100.773 379.862 101.452 379.862 102.213C379.862 102.969 379.722 103.65 379.442 104.257C379.167 104.859 378.772 105.335 378.259 105.685C377.75 106.035 377.144 106.21 376.439 106.21ZM372.883 106V95.92H374.353V100.561H374.185V106H372.883ZM376.236 104.887C376.703 104.887 377.088 104.768 377.391 104.53C377.699 104.292 377.928 103.972 378.077 103.571C378.231 103.165 378.308 102.712 378.308 102.213C378.308 101.718 378.231 101.27 378.077 100.869C377.928 100.468 377.697 100.148 377.384 99.91C377.071 99.672 376.672 99.553 376.187 99.553C375.73 99.553 375.352 99.665 375.053 99.889C374.759 100.113 374.54 100.426 374.395 100.827C374.255 101.228 374.185 101.69 374.185 102.213C374.185 102.736 374.255 103.198 374.395 103.599C374.535 104 374.757 104.315 375.06 104.544C375.363 104.773 375.755 104.887 376.236 104.887ZM384.691 106.21C383.935 106.21 383.279 106.04 382.724 105.699C382.168 105.358 381.739 104.889 381.436 104.292C381.137 103.69 380.988 102.997 380.988 102.213C380.988 101.424 381.142 100.731 381.45 100.134C381.758 99.532 382.189 99.0653 382.745 98.734C383.3 98.398 383.949 98.23 384.691 98.23C385.447 98.23 386.102 98.4003 386.658 98.741C387.213 99.0817 387.642 99.5507 387.946 100.148C388.249 100.745 388.401 101.434 388.401 102.213C388.401 103.002 388.247 103.697 387.939 104.299C387.635 104.896 387.206 105.365 386.651 105.706C386.095 106.042 385.442 106.21 384.691 106.21ZM384.691 104.831C385.414 104.831 385.953 104.588 386.308 104.103C386.667 103.613 386.847 102.983 386.847 102.213C386.847 101.424 386.665 100.794 386.301 100.323C385.941 99.847 385.405 99.609 384.691 99.609C384.201 99.609 383.797 99.721 383.48 99.945C383.162 100.164 382.927 100.47 382.773 100.862C382.619 101.249 382.542 101.7 382.542 102.213C382.542 103.006 382.724 103.641 383.088 104.117C383.452 104.593 383.986 104.831 384.691 104.831ZM392.074 106.21C391.514 106.21 391.045 106.107 390.667 105.902C390.289 105.692 390.002 105.417 389.806 105.076C389.615 104.731 389.519 104.353 389.519 103.942C389.519 103.559 389.587 103.223 389.722 102.934C389.857 102.645 390.058 102.4 390.324 102.199C390.59 101.994 390.917 101.828 391.304 101.702C391.64 101.604 392.02 101.518 392.445 101.443C392.87 101.368 393.315 101.298 393.782 101.233C394.253 101.168 394.72 101.102 395.182 101.037L394.65 101.331C394.659 100.738 394.533 100.3 394.272 100.015C394.015 99.7257 393.572 99.581 392.942 99.581C392.545 99.581 392.181 99.6743 391.85 99.861C391.519 100.043 391.288 100.346 391.157 100.771L389.792 100.351C389.979 99.7023 390.333 99.1867 390.856 98.804C391.383 98.4213 392.083 98.23 392.956 98.23C393.633 98.23 394.221 98.3467 394.72 98.58C395.224 98.8087 395.593 99.1727 395.826 99.672C395.947 99.9193 396.022 100.181 396.05 100.456C396.078 100.731 396.092 101.028 396.092 101.345V106H394.797V104.271L395.049 104.495C394.736 105.074 394.337 105.505 393.852 105.79C393.371 106.07 392.779 106.21 392.074 106.21ZM392.333 105.013C392.748 105.013 393.105 104.941 393.404 104.796C393.703 104.647 393.943 104.458 394.125 104.229C394.307 104 394.426 103.762 394.482 103.515C394.561 103.291 394.606 103.039 394.615 102.759C394.629 102.479 394.636 102.255 394.636 102.087L395.112 102.262C394.65 102.332 394.23 102.395 393.852 102.451C393.474 102.507 393.131 102.563 392.823 102.619C392.52 102.67 392.249 102.733 392.011 102.808C391.81 102.878 391.631 102.962 391.472 103.06C391.318 103.158 391.194 103.277 391.101 103.417C391.012 103.557 390.968 103.727 390.968 103.928C390.968 104.124 391.017 104.306 391.115 104.474C391.213 104.637 391.362 104.768 391.563 104.866C391.764 104.964 392.02 105.013 392.333 105.013ZM397.91 106V98.44H399.212V100.274L399.03 100.036C399.123 99.7933 399.244 99.5717 399.394 99.371C399.543 99.1657 399.716 98.9977 399.912 98.867C400.103 98.727 400.315 98.6197 400.549 98.545C400.787 98.4657 401.029 98.419 401.277 98.405C401.524 98.3863 401.762 98.398 401.991 98.44V99.812C401.743 99.7467 401.468 99.728 401.165 99.756C400.866 99.784 400.591 99.8797 400.339 100.043C400.101 100.197 399.912 100.384 399.772 100.603C399.636 100.822 399.538 101.067 399.478 101.338C399.417 101.604 399.387 101.886 399.387 102.185V106H397.91ZM406.19 106.21C405.485 106.21 404.876 106.035 404.363 105.685C403.854 105.335 403.46 104.859 403.18 104.257C402.905 103.65 402.767 102.969 402.767 102.213C402.767 101.452 402.907 100.773 403.187 100.176C403.467 99.574 403.864 99.1003 404.377 98.755C404.895 98.405 405.509 98.23 406.218 98.23C406.932 98.23 407.532 98.405 408.017 98.755C408.507 99.1003 408.876 99.574 409.123 100.176C409.375 100.778 409.501 101.457 409.501 102.213C409.501 102.969 409.375 103.648 409.123 104.25C408.871 104.852 408.5 105.33 408.01 105.685C407.52 106.035 406.913 106.21 406.19 106.21ZM406.393 104.887C406.874 104.887 407.266 104.773 407.569 104.544C407.872 104.315 408.094 104 408.234 103.599C408.374 103.198 408.444 102.736 408.444 102.213C408.444 101.69 408.372 101.228 408.227 100.827C408.087 100.426 407.868 100.113 407.569 99.889C407.275 99.665 406.899 99.553 406.442 99.553C405.957 99.553 405.558 99.672 405.245 99.91C404.932 100.148 404.699 100.468 404.545 100.869C404.396 101.27 404.321 101.718 404.321 102.213C404.321 102.712 404.396 103.165 404.545 103.571C404.699 103.972 404.928 104.292 405.231 104.53C405.539 104.768 405.926 104.887 406.393 104.887ZM408.444 106V100.561H408.276V95.92H409.746V106H408.444Z" fill="#FF7F33"/>
  //         <path d="M40.98 105V94.92H45.054C45.152 94.92 45.2733 94.9247 45.418 94.934C45.5627 94.9387 45.7003 94.9527 45.831 94.976C46.391 95.0647 46.8577 95.256 47.231 95.55C47.609 95.844 47.8913 96.215 48.078 96.663C48.2647 97.111 48.358 97.6057 48.358 98.147C48.358 98.693 48.2647 99.19 48.078 99.638C47.8913 100.086 47.609 100.457 47.231 100.751C46.8577 101.045 46.391 101.236 45.831 101.325C45.7003 101.344 45.5603 101.358 45.411 101.367C45.2663 101.376 45.1473 101.381 45.054 101.381H42.443V105H40.98ZM42.443 99.995H44.998C45.0913 99.995 45.194 99.9903 45.306 99.981C45.4227 99.9717 45.5323 99.9553 45.635 99.932C45.9337 99.862 46.174 99.7337 46.356 99.547C46.538 99.3557 46.6687 99.1363 46.748 98.889C46.8273 98.6417 46.867 98.3943 46.867 98.147C46.867 97.8997 46.8273 97.6547 46.748 97.412C46.6687 97.1647 46.538 96.9477 46.356 96.761C46.174 96.5697 45.9337 96.439 45.635 96.369C45.5323 96.341 45.4227 96.3223 45.306 96.313C45.194 96.3037 45.0913 96.299 44.998 96.299H42.443V99.995ZM51.7999 105.21C51.2399 105.21 50.7709 105.107 50.3929 104.902C50.0149 104.692 49.7279 104.417 49.5319 104.076C49.3406 103.731 49.2449 103.353 49.2449 102.942C49.2449 102.559 49.3126 102.223 49.4479 101.934C49.5833 101.645 49.7839 101.4 50.0499 101.199C50.3159 100.994 50.6426 100.828 51.0299 100.702C51.3659 100.604 51.7463 100.518 52.1709 100.443C52.5956 100.368 53.0413 100.298 53.5079 100.233C53.9793 100.168 54.4459 100.102 54.9079 100.037L54.3759 100.331C54.3853 99.7383 54.2593 99.2997 53.9979 99.015C53.7413 98.7257 53.2979 98.581 52.6679 98.581C52.2713 98.581 51.9073 98.6743 51.5759 98.861C51.2446 99.043 51.0136 99.3463 50.8829 99.771L49.5179 99.351C49.7046 98.7023 50.0593 98.1867 50.5819 97.804C51.1093 97.4213 51.8093 97.23 52.6819 97.23C53.3586 97.23 53.9466 97.3467 54.4459 97.58C54.9499 97.8087 55.3186 98.1727 55.5519 98.672C55.6733 98.9193 55.7479 99.1807 55.7759 99.456C55.8039 99.7313 55.8179 100.028 55.8179 100.345V105H54.5229V103.271L54.7749 103.495C54.4623 104.074 54.0633 104.505 53.5779 104.79C53.0973 105.07 52.5046 105.21 51.7999 105.21ZM52.0589 104.013C52.4743 104.013 52.8313 103.941 53.1299 103.796C53.4286 103.647 53.6689 103.458 53.8509 103.229C54.0329 103 54.1519 102.762 54.2079 102.515C54.2873 102.291 54.3316 102.039 54.3409 101.759C54.3549 101.479 54.3619 101.255 54.3619 101.087L54.8379 101.262C54.3759 101.332 53.9559 101.395 53.5779 101.451C53.1999 101.507 52.8569 101.563 52.5489 101.619C52.2456 101.67 51.9749 101.733 51.7369 101.808C51.5363 101.878 51.3566 101.962 51.1979 102.06C51.0439 102.158 50.9203 102.277 50.8269 102.417C50.7383 102.557 50.6939 102.727 50.6939 102.928C50.6939 103.124 50.7429 103.306 50.8409 103.474C50.9389 103.637 51.0883 103.768 51.2889 103.866C51.4896 103.964 51.7463 104.013 52.0589 104.013ZM60.6666 105.203C59.7473 105.203 58.9983 105 58.4196 104.594C57.841 104.188 57.4863 103.616 57.3556 102.879L58.8536 102.648C58.947 103.04 59.1616 103.35 59.4976 103.579C59.8383 103.803 60.2606 103.915 60.7646 103.915C61.222 103.915 61.579 103.822 61.8356 103.635C62.097 103.448 62.2276 103.192 62.2276 102.865C62.2276 102.674 62.181 102.52 62.0876 102.403C61.999 102.282 61.81 102.167 61.5206 102.06C61.2313 101.953 60.7903 101.82 60.1976 101.661C59.549 101.493 59.0333 101.313 58.6506 101.122C58.2726 100.926 58.002 100.7 57.8386 100.443C57.68 100.182 57.6006 99.8667 57.6006 99.498C57.6006 99.0407 57.722 98.6417 57.9646 98.301C58.2073 97.9603 58.548 97.6967 58.9866 97.51C59.43 97.3233 59.948 97.23 60.5406 97.23C61.1193 97.23 61.635 97.321 62.0876 97.503C62.5403 97.685 62.9066 97.944 63.1866 98.28C63.4666 98.6113 63.6346 99.001 63.6906 99.449L62.1926 99.722C62.1413 99.358 61.971 99.071 61.6816 98.861C61.3923 98.651 61.0166 98.5367 60.5546 98.518C60.1113 98.4993 59.752 98.574 59.4766 98.742C59.2013 98.9053 59.0636 99.1317 59.0636 99.421C59.0636 99.589 59.115 99.7313 59.2176 99.848C59.325 99.9647 59.5303 100.077 59.8336 100.184C60.137 100.291 60.585 100.42 61.1776 100.569C61.8123 100.732 62.3163 100.914 62.6896 101.115C63.063 101.311 63.329 101.547 63.4876 101.822C63.651 102.093 63.7326 102.422 63.7326 102.809C63.7326 103.556 63.4596 104.141 62.9136 104.566C62.3723 104.991 61.6233 105.203 60.6666 105.203ZM69.7475 105C69.2715 105.093 68.8048 105.133 68.3475 105.119C67.8902 105.105 67.4818 105.016 67.1225 104.853C66.7632 104.69 66.4925 104.433 66.3105 104.083C66.1472 103.77 66.0585 103.453 66.0445 103.131C66.0352 102.804 66.0305 102.436 66.0305 102.025V95.34H67.5005V101.955C67.5005 102.258 67.5028 102.522 67.5075 102.746C67.5168 102.97 67.5658 103.159 67.6545 103.313C67.8225 103.602 68.0885 103.768 68.4525 103.81C68.8212 103.847 69.2528 103.831 69.7475 103.761V105ZM64.5815 98.616V97.44H69.7475V98.616H64.5815ZM74.4926 105.21C73.7413 105.21 73.0809 105.047 72.5116 104.72C71.9469 104.389 71.5059 103.929 71.1886 103.341C70.8759 102.748 70.7196 102.062 70.7196 101.283C70.7196 100.457 70.8736 99.7407 71.1816 99.134C71.4943 98.5273 71.9283 98.0583 72.4836 97.727C73.0389 97.3957 73.6853 97.23 74.4226 97.23C75.1926 97.23 75.8483 97.4097 76.3896 97.769C76.9309 98.1237 77.3346 98.63 77.6006 99.288C77.8713 99.946 77.9786 100.728 77.9226 101.633H76.4596V101.101C76.4503 100.224 76.2823 99.575 75.9556 99.155C75.6336 98.735 75.1413 98.525 74.4786 98.525C73.7459 98.525 73.1953 98.756 72.8266 99.218C72.4579 99.68 72.2736 100.347 72.2736 101.22C72.2736 102.051 72.4579 102.695 72.8266 103.152C73.1953 103.605 73.7273 103.831 74.4226 103.831C74.8799 103.831 75.2743 103.728 75.6056 103.523C75.9416 103.313 76.2029 103.014 76.3896 102.627L77.8246 103.082C77.5306 103.759 77.0849 104.284 76.4876 104.657C75.8903 105.026 75.2253 105.21 74.4926 105.21ZM71.7976 101.633V100.492H77.1946V101.633H71.7976ZM86.7829 105.21C85.7749 105.21 84.9162 104.991 84.2069 104.552C83.4975 104.109 82.9539 103.493 82.5759 102.704C82.2025 101.915 82.0159 101.001 82.0159 99.96C82.0159 98.9193 82.2025 98.0047 82.5759 97.216C82.9539 96.4273 83.4975 95.8137 84.2069 95.375C84.9162 94.9317 85.7749 94.71 86.7829 94.71C87.9449 94.71 88.9062 95.004 89.6669 95.592C90.4322 96.18 90.9642 96.971 91.2629 97.965L89.7789 98.364C89.5829 97.6593 89.2329 97.1063 88.7289 96.705C88.2295 96.3037 87.5809 96.103 86.7829 96.103C86.0689 96.103 85.4739 96.264 84.9979 96.586C84.5219 96.908 84.1625 97.3583 83.9199 97.937C83.6819 98.5157 83.5629 99.19 83.5629 99.96C83.5582 100.73 83.6749 101.404 83.9129 101.983C84.1555 102.562 84.5149 103.012 84.9909 103.334C85.4715 103.656 86.0689 103.817 86.7829 103.817C87.5809 103.817 88.2295 103.616 88.7289 103.215C89.2329 102.809 89.5829 102.256 89.7789 101.556L91.2629 101.955C90.9642 102.949 90.4322 103.74 89.6669 104.328C88.9062 104.916 87.9449 105.21 86.7829 105.21ZM97.0202 105.21C96.2969 105.21 95.6436 105.086 95.0602 104.839C94.4816 104.587 94.0032 104.23 93.6252 103.768C93.2519 103.301 93.0092 102.748 92.8972 102.109L94.4232 101.878C94.5772 102.494 94.8992 102.975 95.3892 103.32C95.8792 103.661 96.4509 103.831 97.1042 103.831C97.5102 103.831 97.8836 103.768 98.2242 103.642C98.5649 103.511 98.8379 103.327 99.0432 103.089C99.2532 102.846 99.3582 102.557 99.3582 102.221C99.3582 102.039 99.3256 101.878 99.2602 101.738C99.1996 101.598 99.1132 101.477 99.0012 101.374C98.8939 101.267 98.7609 101.176 98.6023 101.101C98.4482 101.022 98.2779 100.954 98.0912 100.898L95.5082 100.135C95.2562 100.06 94.9996 99.9647 94.7382 99.848C94.4769 99.7267 94.2366 99.5703 94.0172 99.379C93.8026 99.183 93.6276 98.9427 93.4922 98.658C93.3569 98.3687 93.2892 98.0187 93.2892 97.608C93.2892 96.9873 93.4479 96.4623 93.7652 96.033C94.0872 95.599 94.5212 95.2723 95.0672 95.053C95.6132 94.829 96.2246 94.717 96.9012 94.717C97.5826 94.7263 98.1916 94.8477 98.7282 95.081C99.2696 95.3143 99.7176 95.6503 100.072 96.089C100.432 96.523 100.679 97.0503 100.814 97.671L99.2462 97.937C99.1762 97.559 99.0269 97.2347 98.7983 96.964C98.5696 96.6887 98.2896 96.4787 97.9582 96.334C97.6269 96.1847 97.2676 96.1077 96.8802 96.103C96.5069 96.0937 96.1639 96.1497 95.8512 96.271C95.5432 96.3923 95.2959 96.5627 95.1092 96.782C94.9272 97.0013 94.8362 97.2533 94.8362 97.538C94.8362 97.818 94.9179 98.0443 95.0812 98.217C95.2446 98.3897 95.4452 98.5273 95.6832 98.63C95.9259 98.728 96.1662 98.8097 96.4042 98.875L98.2662 99.4C98.4996 99.4653 98.7632 99.554 99.0573 99.666C99.3559 99.7733 99.6429 99.925 99.9183 100.121C100.198 100.317 100.429 100.578 100.611 100.905C100.793 101.227 100.884 101.633 100.884 102.123C100.884 102.632 100.782 103.08 100.576 103.467C100.371 103.85 100.089 104.172 99.7292 104.433C99.3746 104.69 98.9639 104.883 98.4972 105.014C98.0306 105.145 97.5382 105.21 97.0202 105.21ZM106.375 105.21C105.652 105.21 104.998 105.086 104.415 104.839C103.836 104.587 103.358 104.23 102.98 103.768C102.607 103.301 102.364 102.748 102.252 102.109L103.778 101.878C103.932 102.494 104.254 102.975 104.744 103.32C105.234 103.661 105.806 103.831 106.459 103.831C106.865 103.831 107.238 103.768 107.579 103.642C107.92 103.511 108.193 103.327 108.398 103.089C108.608 102.846 108.713 102.557 108.713 102.221C108.713 102.039 108.68 101.878 108.615 101.738C108.554 101.598 108.468 101.477 108.356 101.374C108.249 101.267 108.116 101.176 107.957 101.101C107.803 101.022 107.633 100.954 107.446 100.898L104.863 100.135C104.611 100.06 104.354 99.9647 104.093 99.848C103.832 99.7267 103.591 99.5703 103.372 99.379C103.157 99.183 102.982 98.9427 102.847 98.658C102.712 98.3687 102.644 98.0187 102.644 97.608C102.644 96.9873 102.803 96.4623 103.12 96.033C103.442 95.599 103.876 95.2723 104.422 95.053C104.968 94.829 105.579 94.717 106.256 94.717C106.937 94.7263 107.546 94.8477 108.083 95.081C108.624 95.3143 109.072 95.6503 109.427 96.089C109.786 96.523 110.034 97.0503 110.169 97.671L108.601 97.937C108.531 97.559 108.382 97.2347 108.153 96.964C107.924 96.6887 107.644 96.4787 107.313 96.334C106.982 96.1847 106.622 96.1077 106.235 96.103C105.862 96.0937 105.519 96.1497 105.206 96.271C104.898 96.3923 104.651 96.5627 104.464 96.782C104.282 97.0013 104.191 97.2533 104.191 97.538C104.191 97.818 104.273 98.0443 104.436 98.217C104.599 98.3897 104.8 98.5273 105.038 98.63C105.281 98.728 105.521 98.8097 105.759 98.875L107.621 99.4C107.854 99.4653 108.118 99.554 108.412 99.666C108.711 99.7733 108.998 99.925 109.273 100.121C109.553 100.317 109.784 100.578 109.966 100.905C110.148 101.227 110.239 101.633 110.239 102.123C110.239 102.632 110.136 103.08 109.931 103.467C109.726 103.85 109.443 104.172 109.084 104.433C108.729 104.69 108.319 104.883 107.852 105.014C107.385 105.145 106.893 105.21 106.375 105.21ZM114.954 105V94.92H116.417V105H114.954ZM118.659 105V94.92H121.816C121.909 94.92 122.082 94.9223 122.334 94.927C122.59 94.9317 122.835 94.9503 123.069 94.983C123.857 95.081 124.52 95.3633 125.057 95.83C125.598 96.2967 126.006 96.8893 126.282 97.608C126.557 98.322 126.695 99.106 126.695 99.96C126.695 100.819 126.557 101.607 126.282 102.326C126.006 103.04 125.598 103.63 125.057 104.097C124.52 104.559 123.857 104.839 123.069 104.937C122.835 104.97 122.59 104.988 122.334 104.993C122.082 104.998 121.909 105 121.816 105H118.659ZM120.157 103.607H121.816C121.974 103.607 122.163 103.602 122.383 103.593C122.602 103.584 122.796 103.565 122.964 103.537C123.477 103.439 123.892 103.217 124.21 102.872C124.532 102.522 124.767 102.093 124.917 101.584C125.066 101.075 125.141 100.534 125.141 99.96C125.141 99.3673 125.064 98.819 124.91 98.315C124.756 97.8063 124.518 97.3817 124.196 97.041C123.878 96.6957 123.468 96.4763 122.964 96.383C122.796 96.3503 122.6 96.3317 122.376 96.327C122.156 96.3177 121.97 96.313 121.816 96.313H120.157V103.607Z" fill="#B3BEC6"/>
  //         <path d="M34 48C28.4903 48 24 52.4903 24 58C24 63.5097 28.4903 68 34 68C39.5097 68 44 63.5097 44 58C44 52.4903 39.5097 48 34 48ZM34 67.0291C29.0243 67.0291 24.9709 62.9757 24.9709 58C24.9709 53.0243 29.0243 48.9709 34 48.9709C38.9757 48.9709 43.0291 53.0243 43.0291 58C43.0291 62.9757 38.9757 67.0291 34 67.0291Z" fill="#FF7F33"/>
  //         <path d="M33.9985 64.0907C37.3631 64.0907 40.0907 61.3631 40.0907 57.9985C40.0907 54.6338 37.3631 51.9062 33.9985 51.9062C30.6338 51.9062 27.9062 54.6338 27.9062 57.9985C27.9062 61.3631 30.6338 64.0907 33.9985 64.0907Z" fill="#FF7F33"/>
  //         <path d="M59.5575 64.225C58.4775 64.225 57.5575 63.99 56.7975 63.52C56.0375 63.045 55.455 62.385 55.05 61.54C54.65 60.695 54.45 59.715 54.45 58.6C54.45 57.485 54.65 56.505 55.05 55.66C55.455 54.815 56.0375 54.1575 56.7975 53.6875C57.5575 53.2125 58.4775 52.975 59.5575 52.975C60.8025 52.975 61.8325 53.29 62.6475 53.92C63.4675 54.55 64.0375 55.3975 64.3575 56.4625L62.7675 56.89C62.5575 56.135 62.1825 55.5425 61.6425 55.1125C61.1075 54.6825 60.4125 54.4675 59.5575 54.4675C58.7925 54.4675 58.155 54.64 57.645 54.985C57.135 55.33 56.75 55.8125 56.49 56.4325C56.235 57.0525 56.1075 57.775 56.1075 58.6C56.1025 59.425 56.2275 60.1475 56.4825 60.7675C56.7425 61.3875 57.1275 61.87 57.6375 62.215C58.1525 62.56 58.7925 62.7325 59.5575 62.7325C60.4125 62.7325 61.1075 62.5175 61.6425 62.0875C62.1825 61.6525 62.5575 61.06 62.7675 60.31L64.3575 60.7375C64.0375 61.8025 63.4675 62.65 62.6475 63.28C61.8325 63.91 60.8025 64.225 59.5575 64.225ZM70.3761 64.225C69.6011 64.225 68.9011 64.0925 68.2761 63.8275C67.6561 63.5575 67.1436 63.175 66.7386 62.68C66.3386 62.18 66.0786 61.5875 65.9586 60.9025L67.5936 60.655C67.7586 61.315 68.1036 61.83 68.6286 62.2C69.1536 62.565 69.7661 62.7475 70.4661 62.7475C70.9011 62.7475 71.3011 62.68 71.6661 62.545C72.0311 62.405 72.3236 62.2075 72.5436 61.9525C72.7686 61.6925 72.8811 61.3825 72.8811 61.0225C72.8811 60.8275 72.8461 60.655 72.7761 60.505C72.7111 60.355 72.6186 60.225 72.4986 60.115C72.3836 60 72.2411 59.9025 72.0711 59.8225C71.9061 59.7375 71.7236 59.665 71.5236 59.605L68.7561 58.7875C68.4861 58.7075 68.2111 58.605 67.9311 58.48C67.6511 58.35 67.3936 58.1825 67.1586 57.9775C66.9286 57.7675 66.7411 57.51 66.5961 57.205C66.4511 56.895 66.3786 56.52 66.3786 56.08C66.3786 55.415 66.5486 54.8525 66.8886 54.3925C67.2336 53.9275 67.6986 53.5775 68.2836 53.3425C68.8686 53.1025 69.5236 52.9825 70.2486 52.9825C70.9786 52.9925 71.6311 53.1225 72.2061 53.3725C72.7861 53.6225 73.2661 53.9825 73.6461 54.4525C74.0311 54.9175 74.2961 55.4825 74.4411 56.1475L72.7611 56.4325C72.6861 56.0275 72.5261 55.68 72.2811 55.39C72.0361 55.095 71.7361 54.87 71.3811 54.715C71.0261 54.555 70.6411 54.4725 70.2261 54.4675C69.8261 54.4575 69.4586 54.5175 69.1236 54.6475C68.7936 54.7775 68.5286 54.96 68.3286 55.195C68.1336 55.43 68.0361 55.7 68.0361 56.005C68.0361 56.305 68.1236 56.5475 68.2986 56.7325C68.4736 56.9175 68.6886 57.065 68.9436 57.175C69.2036 57.28 69.4611 57.3675 69.7161 57.4375L71.7111 58C71.9611 58.07 72.2436 58.165 72.5586 58.285C72.8786 58.4 73.1861 58.5625 73.4811 58.7725C73.7811 58.9825 74.0286 59.2625 74.2236 59.6125C74.4186 59.9575 74.5161 60.3925 74.5161 60.9175C74.5161 61.4625 74.4061 61.9425 74.1861 62.3575C73.9661 62.7675 73.6636 63.1125 73.2786 63.3925C72.8986 63.6675 72.4586 63.875 71.9586 64.015C71.4586 64.155 70.9311 64.225 70.3761 64.225ZM80.2492 64.225C79.4742 64.225 78.7742 64.0925 78.1492 63.8275C77.5292 63.5575 77.0167 63.175 76.6117 62.68C76.2117 62.18 75.9517 61.5875 75.8317 60.9025L77.4667 60.655C77.6317 61.315 77.9767 61.83 78.5017 62.2C79.0267 62.565 79.6392 62.7475 80.3392 62.7475C80.7742 62.7475 81.1742 62.68 81.5392 62.545C81.9042 62.405 82.1967 62.2075 82.4167 61.9525C82.6417 61.6925 82.7542 61.3825 82.7542 61.0225C82.7542 60.8275 82.7192 60.655 82.6492 60.505C82.5842 60.355 82.4917 60.225 82.3717 60.115C82.2567 60 82.1142 59.9025 81.9442 59.8225C81.7792 59.7375 81.5967 59.665 81.3967 59.605L78.6292 58.7875C78.3592 58.7075 78.0842 58.605 77.8042 58.48C77.5242 58.35 77.2667 58.1825 77.0317 57.9775C76.8017 57.7675 76.6142 57.51 76.4692 57.205C76.3242 56.895 76.2517 56.52 76.2517 56.08C76.2517 55.415 76.4217 54.8525 76.7617 54.3925C77.1067 53.9275 77.5717 53.5775 78.1567 53.3425C78.7417 53.1025 79.3967 52.9825 80.1217 52.9825C80.8517 52.9925 81.5042 53.1225 82.0792 53.3725C82.6592 53.6225 83.1392 53.9825 83.5192 54.4525C83.9042 54.9175 84.1692 55.4825 84.3142 56.1475L82.6342 56.4325C82.5592 56.0275 82.3992 55.68 82.1542 55.39C81.9092 55.095 81.6092 54.87 81.2542 54.715C80.8992 54.555 80.5142 54.4725 80.0992 54.4675C79.6992 54.4575 79.3317 54.5175 78.9967 54.6475C78.6667 54.7775 78.4017 54.96 78.2017 55.195C78.0067 55.43 77.9092 55.7 77.9092 56.005C77.9092 56.305 77.9967 56.5475 78.1717 56.7325C78.3467 56.9175 78.5617 57.065 78.8167 57.175C79.0767 57.28 79.3342 57.3675 79.5892 57.4375L81.5842 58C81.8342 58.07 82.1167 58.165 82.4317 58.285C82.7517 58.4 83.0592 58.5625 83.3542 58.7725C83.6542 58.9825 83.9017 59.2625 84.0967 59.6125C84.2917 59.9575 84.3892 60.3925 84.3892 60.9175C84.3892 61.4625 84.2792 61.9425 84.0592 62.3575C83.8392 62.7675 83.5367 63.1125 83.1517 63.3925C82.7717 63.6675 82.3317 63.875 81.8317 64.015C81.3317 64.155 80.8042 64.225 80.2492 64.225Z" fill="#002845"/>
  //         <path opacity="0.3" d="M125 48C119.49 48 115 52.4903 115 58C115 63.5097 119.49 68 125 68C130.51 68 135 63.5097 135 58C135 52.4903 130.51 48 125 48ZM125 67.0291C120.024 67.0291 115.971 62.9757 115.971 58C115.971 53.0243 120.024 48.9709 125 48.9709C129.976 48.9709 134.029 53.0243 134.029 58C134.029 62.9757 129.976 67.0291 125 67.0291Z" fill="#002845"/>
  //         <path d="M145.15 64L148.833 58.5325L145.247 53.2H147.168L149.8 57.205L152.418 53.2H154.345L150.76 58.5325L154.435 64H152.515L149.8 59.8675L147.078 64H145.15ZM155.63 64V53.2H159.995C160.1 53.2 160.23 53.205 160.385 53.215C160.54 53.22 160.688 53.235 160.828 53.26C161.428 53.355 161.928 53.56 162.328 53.875C162.733 54.19 163.035 54.5875 163.235 55.0675C163.435 55.5475 163.535 56.0775 163.535 56.6575C163.535 57.2425 163.435 57.775 163.235 58.255C163.035 58.735 162.733 59.1325 162.328 59.4475C161.928 59.7625 161.428 59.9675 160.828 60.0625C160.688 60.0825 160.538 60.0975 160.378 60.1075C160.223 60.1175 160.095 60.1225 159.995 60.1225H157.198V64H155.63ZM157.198 58.6375H159.935C160.035 58.6375 160.145 58.6325 160.265 58.6225C160.39 58.6125 160.508 58.595 160.618 58.57C160.938 58.495 161.195 58.3575 161.39 58.1575C161.585 57.9525 161.725 57.7175 161.81 57.4525C161.895 57.1875 161.938 56.9225 161.938 56.6575C161.938 56.3925 161.895 56.13 161.81 55.87C161.725 55.605 161.585 55.3725 161.39 55.1725C161.195 54.9675 160.938 54.8275 160.618 54.7525C160.508 54.7225 160.39 54.7025 160.265 54.6925C160.145 54.6825 160.035 54.6775 159.935 54.6775H157.198V58.6375ZM167.073 64.225C166.473 64.225 165.97 64.115 165.565 63.895C165.16 63.67 164.853 63.375 164.643 63.01C164.438 62.64 164.335 62.235 164.335 61.795C164.335 61.385 164.408 61.025 164.553 60.715C164.698 60.405 164.913 60.1425 165.198 59.9275C165.483 59.7075 165.833 59.53 166.248 59.395C166.608 59.29 167.015 59.1975 167.47 59.1175C167.925 59.0375 168.403 58.9625 168.903 58.8925C169.408 58.8225 169.908 58.7525 170.403 58.6825L169.833 58.9975C169.843 58.3625 169.708 57.8925 169.428 57.5875C169.153 57.2775 168.678 57.1225 168.003 57.1225C167.578 57.1225 167.188 57.2225 166.833 57.4225C166.478 57.6175 166.23 57.9425 166.09 58.3975L164.628 57.9475C164.828 57.2525 165.208 56.7 165.768 56.29C166.333 55.88 167.083 55.675 168.018 55.675C168.743 55.675 169.373 55.8 169.908 56.05C170.448 56.295 170.843 56.685 171.093 57.22C171.223 57.485 171.303 57.765 171.333 58.06C171.363 58.355 171.378 58.6725 171.378 59.0125V64H169.99V62.1475L170.26 62.3875C169.925 63.0075 169.498 63.47 168.978 63.775C168.463 64.075 167.828 64.225 167.073 64.225ZM167.35 62.9425C167.795 62.9425 168.178 62.865 168.498 62.71C168.818 62.55 169.075 62.3475 169.27 62.1025C169.465 61.8575 169.593 61.6025 169.653 61.3375C169.738 61.0975 169.785 60.8275 169.795 60.5275C169.81 60.2275 169.818 59.9875 169.818 59.8075L170.328 59.995C169.833 60.07 169.383 60.1375 168.978 60.1975C168.573 60.2575 168.205 60.3175 167.875 60.3775C167.55 60.4325 167.26 60.5 167.005 60.58C166.79 60.655 166.598 60.745 166.428 60.85C166.263 60.955 166.13 61.0825 166.03 61.2325C165.935 61.3825 165.888 61.565 165.888 61.78C165.888 61.99 165.94 62.185 166.045 62.365C166.15 62.54 166.31 62.68 166.525 62.785C166.74 62.89 167.015 62.9425 167.35 62.9425ZM177.96 64C177.45 64.1 176.95 64.1425 176.46 64.1275C175.97 64.1125 175.533 64.0175 175.148 63.8425C174.763 63.6675 174.473 63.3925 174.278 63.0175C174.103 62.6825 174.008 62.3425 173.993 61.9975C173.983 61.6475 173.978 61.2525 173.978 60.8125V53.65H175.553V60.7375C175.553 61.0625 175.555 61.345 175.56 61.585C175.57 61.825 175.623 62.0275 175.718 62.1925C175.898 62.5025 176.183 62.68 176.573 62.725C176.968 62.765 177.43 62.7475 177.96 62.6725V64ZM172.425 57.16V55.9H177.96V57.16H172.425ZM185.353 64V60.0175C185.353 59.7025 185.326 59.38 185.271 59.05C185.221 58.715 185.121 58.405 184.971 58.12C184.826 57.835 184.618 57.605 184.348 57.43C184.083 57.255 183.736 57.1675 183.306 57.1675C183.026 57.1675 182.761 57.215 182.511 57.31C182.261 57.4 182.041 57.5475 181.851 57.7525C181.666 57.9575 181.518 58.2275 181.408 58.5625C181.303 58.8975 181.251 59.305 181.251 59.785L180.276 59.4175C180.276 58.6825 180.413 58.035 180.688 57.475C180.963 56.91 181.358 56.47 181.873 56.155C182.388 55.84 183.011 55.6825 183.741 55.6825C184.301 55.6825 184.771 55.7725 185.151 55.9525C185.531 56.1325 185.838 56.37 186.073 56.665C186.313 56.955 186.496 57.2725 186.621 57.6175C186.746 57.9625 186.831 58.3 186.876 58.63C186.921 58.96 186.943 59.25 186.943 59.5V64H185.353ZM179.661 64V53.2H181.063V59.0275H181.251V64H179.661Z" fill="#002845"/>
  //         <path d="M208 99L242.569 96.7705L223.354 67.9475L208 99ZM232.129 86.5192L287.664 49.4962L284.336 44.5039L228.801 81.5269L232.129 86.5192Z" fill="#00BDE1"/>
  //       </svg>
  //     `;

  /**
   * @function traverseLayouts
   * @description get the layouts and loop  through the layout and finds the view(id,path,bounds) that was clicked
   * * @param {Array}layouts - layouts of the document
   * *@param {number}x  - X value of click
   * *@param {number}y -  Y value of click
   */
  traverseLayouts = (layouts, x, y, depth) => {
    for (var i = 0; i < layouts.length; i++) {
      const layout = layouts[i];
      console.log("current view", layout.view);
      const bounds = layout.bounds;
      if (bounds) {
        if (
          x >= bounds.left &&
          x <= bounds.right &&
          y >= bounds.top &&
          y <= bounds.bottom
        ) {
          if (this.result == null) {
            this.result = {
              depth: depth,
              layout: layout,
            };
          } else {
            if (this.result.depth <= depth) {
              this.result = {
                depth: depth,
                layout: layout,
              };
            }
          }
          console.log(layout);
          // traverseLayouts(layout.views, x, y, depth + 1);
        }
        // return null;
      }
      this.traverseLayouts(layout.views, x, y, depth + 1);
      // return null;
    }
    // return null;
  };

  removeWidgetDetails = () => {
    Apxor.getController().persistToStorage("_apx_ew", {}, true);
  };
}

const DOMNodePathStep = function (value, optimized) {
  this.value = value;
  this.optimized = optimized || false;
};

DOMNodePathStep.prototype = {
  toString: function () {
    return this.value;
  },
};

window.setTimeout(() => {
  // let selectors = Apxor.getController().getFromStorage("_apx_paths", true);
  // if (selectors != null && selectors != undefined) {
  //   let paths = Object.keys(selectors);
  //   paths.forEach((path) => {
  //     if (path === location.pathname) {
  //       const elementSelectors = Object.keys(selectors[path]);
  //       elementSelectors.forEach((selector) => {
  //         const ele = getElementByXPath(selector);
  //         if (ele !== null && ele !== undefined) {
  //           ele.onclick = (e) => {
  //             Apxor.logEvent(selectors[path][selector]);
  //             console.log("Event name is:", selectors[path][selector]);
  //           };
  //         }
  //       });
  //     }
  //   });
  // }

  let _wysiwyg = new WYSIWYG();
  _wysiwyg.init("823d8c43-a823-4045-9d69-49b441d13206", ApxorRTM);
}, 1000);
