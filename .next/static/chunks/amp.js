// runtime can't be in strict mode because a global variable is assign and maybe created.
(self["webpackChunk_N_E"] = self["webpackChunk_N_E"] || []).push([["amp"],{

/***/ "./node_modules/next/dist/client/dev/amp-dev.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/dev/amp-dev.js ***!
  \******************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


var _eventSourcePolyfill = _interopRequireDefault(__webpack_require__(/*! ./event-source-polyfill */ "./node_modules/next/dist/client/dev/event-source-polyfill.js"));

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

var _onDemandEntriesUtils = __webpack_require__(/*! ./on-demand-entries-utils */ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js");

var _fouc = __webpack_require__(/*! ./fouc */ "./node_modules/next/dist/client/dev/fouc.js");

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

if (!window.EventSource) {
  window.EventSource = _eventSourcePolyfill.default;
}

const data = JSON.parse(document.getElementById('__NEXT_DATA__').textContent);
let {
  assetPrefix,
  page
} = data;
assetPrefix = assetPrefix || '';
let mostRecentHash = null;
/* eslint-disable-next-line */

let curHash = __webpack_require__.h();
const hotUpdatePath = assetPrefix + (assetPrefix.endsWith('/') ? '' : '/') + '_next/static/webpack/'; // Is there a newer version of this code available?

function isUpdateAvailable() {
  // __webpack_hash__ is the hash of the current compilation.
  // It's a global variable injected by Webpack.

  /* eslint-disable-next-line */
  return mostRecentHash !== __webpack_require__.h();
} // Webpack disallows updates in other states.


function canApplyUpdates() {
  return module.hot.status() === 'idle';
}

function _tryApplyUpdates() {
  _tryApplyUpdates = // This function reads code updates on the fly and hard
  // reloads the page when it has changed.
  _asyncToGenerator(function* () {
    if (!isUpdateAvailable() || !canApplyUpdates()) {
      return;
    }

    try {
      const res = yield fetch(typeof __webpack_require__.j !== 'undefined' ? `${hotUpdatePath}${curHash}.${__webpack_require__.j}.hot-update.json` : `${hotUpdatePath}${curHash}.hot-update.json`);
      const jsonData = yield res.json();
      const curPage = page === '/' ? 'index' : page; // webpack 5 uses an array instead

      const pageUpdated = (Array.isArray(jsonData.c) ? jsonData.c : Object.keys(jsonData.c)).some(mod => {
        return mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`) !== -1 || mod.indexOf(`pages${curPage.substr(0, 1) === '/' ? curPage : `/${curPage}`}`.replace(/\//g, '\\')) !== -1;
      });

      if (pageUpdated) {
        document.location.reload(true);
      } else {
        curHash = mostRecentHash;
      }
    } catch (err) {
      console.error('Error occurred checking for update', err);
      document.location.reload(true);
    }
  });
  return _tryApplyUpdates.apply(this, arguments);
}

function tryApplyUpdates() {
  return _tryApplyUpdates.apply(this, arguments);
}

(0, _eventsource).addMessageListener(event => {
  if (event.data === '\uD83D\uDC93') {
    return;
  }

  try {
    const message = JSON.parse(event.data);

    if (message.action === 'sync' || message.action === 'built') {
      if (!message.hash) {
        return;
      }

      mostRecentHash = message.hash;
      tryApplyUpdates();
    } else if (message.action === 'reloadPage') {
      document.location.reload(true);
    }
  } catch (ex) {
    console.warn('Invalid HMR message: ' + event.data + '\n' + ex);
  }
});
(0, _onDemandEntriesUtils).setupPing(assetPrefix, () => page);
(0, _fouc).displayContent();

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js":
/*!************************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/error-overlay/eventsource.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.addMessageListener = addMessageListener;
exports.getEventSourceWrapper = getEventSourceWrapper;
const eventCallbacks = [];

function EventSourceWrapper(options) {
  var source;
  var lastActivity = new Date();
  var listeners = [];

  if (!options.timeout) {
    options.timeout = 20 * 1000;
  }

  init();
  var timer = setInterval(function () {
    if (new Date() - lastActivity > options.timeout) {
      handleDisconnect();
    }
  }, options.timeout / 2);

  function init() {
    source = new window.EventSource(options.path);
    source.onopen = handleOnline;
    source.onerror = handleDisconnect;
    source.onmessage = handleMessage;
  }

  function handleOnline() {
    if (options.log) console.log('[HMR] connected');
    lastActivity = new Date();
  }

  function handleMessage(event) {
    lastActivity = new Date();

    for (var i = 0; i < listeners.length; i++) {
      listeners[i](event);
    }

    eventCallbacks.forEach(cb => {
      if (!cb.unfiltered && event.data.indexOf('action') === -1) return;
      cb(event);
    });
  }

  function handleDisconnect() {
    clearInterval(timer);
    source.close();
    setTimeout(init, options.timeout);
  }

  return {
    close: () => {
      clearInterval(timer);
      source.close();
    },
    addMessageListener: function (fn) {
      listeners.push(fn);
    }
  };
}

_c = EventSourceWrapper;

function addMessageListener(cb) {
  eventCallbacks.push(cb);
}

function getEventSourceWrapper(options) {
  return EventSourceWrapper(options);
}

var _c;

$RefreshReg$(_c, "EventSourceWrapper");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/event-source-polyfill.js":
/*!********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/event-source-polyfill.js ***!
  \********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.default = void 0;
/* eslint-disable */
// Improved version of https://github.com/Yaffle/EventSource/
// Available under MIT License (MIT)
// Only tries to support IE11 and nothing below

var document = window.document;
var Response1 = window.Response;
var TextDecoder1 = window.TextDecoder;
var TextEncoder1 = window.TextEncoder;
var AbortController1 = window.AbortController;

if (AbortController1 == undefined) {
  AbortController1 = function () {
    this.signal = null;

    this.abort = function () {};
  };
}

function TextDecoderPolyfill() {
  this.bitsNeeded = 0;
  this.codePoint = 0;
}

_c = TextDecoderPolyfill;

TextDecoderPolyfill.prototype.decode = function (octets) {
  function valid(codePoint, shift, octetsCount) {
    if (octetsCount === 1) {
      return codePoint >= 128 >> shift && codePoint << shift <= 2047;
    }

    if (octetsCount === 2) {
      return codePoint >= 2048 >> shift && codePoint << shift <= 55295 || codePoint >= 57344 >> shift && codePoint << shift <= 65535;
    }

    if (octetsCount === 3) {
      return codePoint >= 65536 >> shift && codePoint << shift <= 1114111;
    }

    throw new Error();
  }

  function octetsCount(bitsNeeded, codePoint) {
    if (bitsNeeded === 6 * 1) {
      return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
    }

    if (bitsNeeded === 6 * 2) {
      return codePoint > 15 ? 3 : 2;
    }

    if (bitsNeeded === 6 * 3) {
      return 3;
    }

    throw new Error();
  }

  var REPLACER = 65533;
  var string = '';
  var bitsNeeded = this.bitsNeeded;
  var codePoint = this.codePoint;

  for (var i = 0; i < octets.length; i += 1) {
    var octet = octets[i];

    if (bitsNeeded !== 0) {
      if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
        string += String.fromCharCode(codePoint);
      }
    }

    if (bitsNeeded === 0) {
      if (octet >= 0 && octet <= 127) {
        bitsNeeded = 0;
        codePoint = octet;
      } else if (octet >= 192 && octet <= 223) {
        bitsNeeded = 6 * 1;
        codePoint = octet & 31;
      } else if (octet >= 224 && octet <= 239) {
        bitsNeeded = 6 * 2;
        codePoint = octet & 15;
      } else if (octet >= 240 && octet <= 247) {
        bitsNeeded = 6 * 3;
        codePoint = octet & 7;
      } else {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }

      if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
        bitsNeeded = 0;
        codePoint = REPLACER;
      }
    } else {
      bitsNeeded -= 6;
      codePoint = codePoint << 6 | octet & 63;
    }

    if (bitsNeeded === 0) {
      if (codePoint <= 65535) {
        string += String.fromCharCode(codePoint);
      } else {
        string += String.fromCharCode(55296 + (codePoint - 65535 - 1 >> 10));
        string += String.fromCharCode(56320 + (codePoint - 65535 - 1 & 1023));
      }
    }
  }

  this.bitsNeeded = bitsNeeded;
  this.codePoint = codePoint;
  return string;
}; // Firefox < 38 throws an error with stream option


var supportsStreamOption = function () {
  try {
    return new TextDecoder1().decode(new TextEncoder1().encode('test'), {
      stream: true
    }) === 'test';
  } catch (error) {
    console.log(error);
  }

  return false;
}; // IE, Edge


if (TextDecoder1 == undefined || TextEncoder1 == undefined || !supportsStreamOption()) {
  TextDecoder1 = TextDecoderPolyfill;
}

var k = function () {};

function XHRWrapper(xhr) {
  this.withCredentials = false;
  this.responseType = '';
  this.readyState = 0;
  this.status = 0;
  this.statusText = '';
  this.responseText = '';
  this.onprogress = k;
  this.onreadystatechange = k;
  this._contentType = '';
  this._xhr = xhr;
  this._sendTimeout = 0;
  this._abort = k;
}

_c2 = XHRWrapper;

XHRWrapper.prototype.open = function (method, url) {
  this._abort(true);

  var that = this;
  var xhr = this._xhr;
  var state = 1;
  var timeout = 0;

  this._abort = function (silent) {
    if (that._sendTimeout !== 0) {
      clearTimeout(that._sendTimeout);
      that._sendTimeout = 0;
    }

    if (state === 1 || state === 2 || state === 3) {
      state = 4;
      xhr.onload = k;
      xhr.onerror = k;
      xhr.onabort = k;
      xhr.onprogress = k;
      xhr.onreadystatechange = k; // IE 8 - 9: XDomainRequest#abort() does not fire any event
      // Opera < 10: XMLHttpRequest#abort() does not fire any event

      xhr.abort();

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      if (!silent) {
        that.readyState = 4;
        that.onreadystatechange();
      }
    }

    state = 0;
  };

  var onStart = function () {
    if (state === 1) {
      // state = 2;
      var status = 0;
      var statusText = '';
      var contentType = undefined;

      if (!('contentType' in xhr)) {
        try {
          status = xhr.status;
          statusText = xhr.statusText;
          contentType = xhr.getResponseHeader('Content-Type');
        } catch (error) {
          // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
          // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
          // https://bugs.webkit.org/show_bug.cgi?id=29121
          status = 0;
          statusText = '';
          contentType = undefined; // Firefox < 14, Chrome ?, Safari ?
          // https://bugs.webkit.org/show_bug.cgi?id=29658
          // https://bugs.webkit.org/show_bug.cgi?id=77854
        }
      } else {
        status = 200;
        statusText = 'OK';
        contentType = xhr.contentType;
      }

      if (status !== 0) {
        state = 2;
        that.readyState = 2;
        that.status = status;
        that.statusText = statusText;
        that._contentType = contentType;
        that.onreadystatechange();
      }
    }
  };

  var onProgress = function () {
    onStart();

    if (state === 2 || state === 3) {
      state = 3;
      var responseText = '';

      try {
        responseText = xhr.responseText;
      } catch (error) {// IE 8 - 9 with XMLHttpRequest
      }

      that.readyState = 3;
      that.responseText = responseText;
      that.onprogress();
    }
  };

  var onFinish = function () {
    // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
    // IE 8 fires "onload" without "onprogress"
    onProgress();

    if (state === 1 || state === 2 || state === 3) {
      state = 4;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      that.readyState = 4;
      that.onreadystatechange();
    }
  };

  var onReadyStateChange = function () {
    if (xhr != undefined) {
      // Opera 12
      if (xhr.readyState === 4) {
        onFinish();
      } else if (xhr.readyState === 3) {
        onProgress();
      } else if (xhr.readyState === 2) {
        onStart();
      }
    }
  };

  var onTimeout = function () {
    timeout = setTimeout(function () {
      onTimeout();
    }, 500);

    if (xhr.readyState === 3) {
      onProgress();
    }
  }; // XDomainRequest#abort removes onprogress, onerror, onload


  xhr.onload = onFinish;
  xhr.onerror = onFinish; // improper fix to match Firefox behavior, but it is better than just ignore abort
  // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  // https://code.google.com/p/chromium/issues/detail?id=153570
  // IE 8 fires "onload" without "onprogress

  xhr.onabort = onFinish; // https://bugzilla.mozilla.org/show_bug.cgi?id=736723

  if (!('sendAsBinary' in XMLHttpRequest.prototype) && !('mozAnon' in XMLHttpRequest.prototype)) {
    xhr.onprogress = onProgress;
  } // IE 8 - 9 (XMLHTTPRequest)
  // Opera < 12
  // Firefox < 3.5
  // Firefox 3.5 - 3.6 - ? < 9.0
  // onprogress is not fired sometimes or delayed
  // see also #64


  xhr.onreadystatechange = onReadyStateChange;

  if ('contentType' in xhr) {
    url += (url.indexOf('?') === -1 ? '?' : '&') + 'padding=true';
  }

  xhr.open(method, url, true);

  if ('readyState' in xhr) {
    // workaround for Opera 12 issue with "progress" events
    // #91
    timeout = setTimeout(function () {
      onTimeout();
    }, 0);
  }
};

XHRWrapper.prototype.abort = function () {
  this._abort(false);
};

XHRWrapper.prototype.getResponseHeader = function (name) {
  return this._contentType;
};

XHRWrapper.prototype.setRequestHeader = function (name, value) {
  var xhr = this._xhr;

  if ('setRequestHeader' in xhr) {
    xhr.setRequestHeader(name, value);
  }
};

XHRWrapper.prototype.getAllResponseHeaders = function () {
  return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() : '';
};

XHRWrapper.prototype.send = function () {
  // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  if (!('ontimeout' in XMLHttpRequest.prototype) && document != undefined && document.readyState != undefined && document.readyState !== 'complete') {
    var that = this;
    that._sendTimeout = setTimeout(function () {
      that._sendTimeout = 0;
      that.send();
    }, 4);
    return;
  }

  var xhr = this._xhr; // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)

  xhr.withCredentials = this.withCredentials;
  xhr.responseType = this.responseType;

  try {
    // xhr.send(); throws "Not enough arguments" in Firefox 3.0
    xhr.send(undefined);
  } catch (error1) {
    // Safari 5.1.7, Opera 12
    throw error1;
  }
};

function toLowerCase(name) {
  return name.replace(/[A-Z]/g, function (c) {
    return String.fromCharCode(c.charCodeAt(0) + 32);
  });
}

function HeadersPolyfill(all) {
  // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  var map = Object.create(null);
  var array = all.split('\r\n');

  for (var i = 0; i < array.length; i += 1) {
    var line = array[i];
    var parts = line.split(': ');
    var name = parts.shift();
    var value = parts.join(': ');
    map[toLowerCase(name)] = value;
  }

  this._map = map;
}

_c3 = HeadersPolyfill;

HeadersPolyfill.prototype.get = function (name) {
  return this._map[toLowerCase(name)];
};

function XHRTransport() {}

_c4 = XHRTransport;

XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  xhr.open('GET', url);
  var offset = 0;

  xhr.onprogress = function () {
    var responseText = xhr.responseText;
    var chunk = responseText.slice(offset);
    offset += chunk.length;
    onProgressCallback(chunk);
  };

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 2) {
      var status = xhr.status;
      var statusText = xhr.statusText;
      var contentType = xhr.getResponseHeader('Content-Type');
      var headers1 = xhr.getAllResponseHeaders();
      onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers1), function () {
        xhr.abort();
      });
    } else if (xhr.readyState === 4) {
      onFinishCallback();
    }
  };

  xhr.withCredentials = withCredentials;
  xhr.responseType = 'text';

  for (var name in headers) {
    if (Object.prototype.hasOwnProperty.call(headers, name)) {
      xhr.setRequestHeader(name, headers[name]);
    }
  }

  xhr.send();
};

function HeadersWrapper(headers2) {
  this._headers = headers2;
}

_c5 = HeadersWrapper;

HeadersWrapper.prototype.get = function (name) {
  return this._headers.get(name);
};

function FetchTransport() {}

_c6 = FetchTransport;

FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers2) {
  var controller = new AbortController1();
  var signal = controller.signal // see #120
  ;
  var textDecoder = new TextDecoder1();
  fetch(url, {
    headers: headers2,
    credentials: withCredentials ? 'include' : 'same-origin',
    signal: signal,
    cache: 'no-store'
  }).then(function (response) {
    var reader = response.body.getReader();
    onStartCallback(response.status, response.statusText, response.headers.get('Content-Type'), new HeadersWrapper(response.headers), function () {
      controller.abort();
      reader.cancel();
    });
    return new Promise(function (resolve, reject) {
      var readNextChunk = function () {
        reader.read().then(function (result) {
          if (result.done) {
            // Note: bytes in textDecoder are ignored
            resolve(undefined);
          } else {
            var chunk = textDecoder.decode(result.value, {
              stream: true
            });
            onProgressCallback(chunk);
            readNextChunk();
          }
        })['catch'](function (error) {
          reject(error);
        });
      };

      readNextChunk();
    });
  }).then(function (result) {
    onFinishCallback();
    return result;
  }, function (error) {
    onFinishCallback();
    return Promise.reject(error);
  });
};

function EventTarget1() {
  this._listeners = Object.create(null);
}

_c7 = EventTarget1;

function throwError(e) {
  setTimeout(function () {
    throw e;
  }, 0);
}

EventTarget1.prototype.dispatchEvent = function (event) {
  event.target = this;
  var typeListeners = this._listeners[event.type];

  if (typeListeners != undefined) {
    var length = typeListeners.length;

    for (var i = 0; i < length; i += 1) {
      var listener = typeListeners[i];

      try {
        if (typeof listener.handleEvent === 'function') {
          listener.handleEvent(event);
        } else {
          listener.call(this, event);
        }
      } catch (e) {
        throwError(e);
      }
    }
  }
};

EventTarget1.prototype.addEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners == undefined) {
    typeListeners = [];
    listeners[type] = typeListeners;
  }

  var found = false;

  for (var i = 0; i < typeListeners.length; i += 1) {
    if (typeListeners[i] === listener) {
      found = true;
    }
  }

  if (!found) {
    typeListeners.push(listener);
  }
};

EventTarget1.prototype.removeEventListener = function (type, listener) {
  type = String(type);
  var listeners = this._listeners;
  var typeListeners = listeners[type];

  if (typeListeners != undefined) {
    var filtered = [];

    for (var i = 0; i < typeListeners.length; i += 1) {
      if (typeListeners[i] !== listener) {
        filtered.push(typeListeners[i]);
      }
    }

    if (filtered.length === 0) {
      delete listeners[type];
    } else {
      listeners[type] = filtered;
    }
  }
};

function Event1(type) {
  this.type = type;
  this.target = undefined;
}

_c8 = Event1;

function MessageEvent1(type, options) {
  Event1.call(this, type);
  this.data = options.data;
  this.lastEventId = options.lastEventId;
}

_c9 = MessageEvent1;
MessageEvent1.prototype = Object.create(Event1.prototype);

function ConnectionEvent(type, options) {
  Event1.call(this, type);
  this.status = options.status;
  this.statusText = options.statusText;
  this.headers = options.headers;
}

_c10 = ConnectionEvent;
ConnectionEvent.prototype = Object.create(Event1.prototype);
var WAITING = -1;
var CONNECTING = 0;
var OPEN = 1;
var CLOSED = 2;
var AFTER_CR = -1;
var FIELD_START = 0;
var FIELD = 1;
var VALUE_START = 2;
var VALUE = 3;
var contentTypeRegExp = /^text\/event\-stream;?(\s*charset\=utf\-8)?$/i;
var MINIMUM_DURATION = 1000;
var MAXIMUM_DURATION = 18000000;

var parseDuration = function (value, def) {
  var n = parseInt(value, 10);

  if (n !== n) {
    n = def;
  }

  return clampDuration(n);
};

var clampDuration = function (n) {
  return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
};

var fire = function (that, f, event) {
  try {
    if (typeof f === 'function') {
      f.call(that, event);
    }
  } catch (e) {
    throwError(e);
  }
};

function EventSourcePolyfill(url, options) {
  EventTarget1.call(this);
  this.onopen = undefined;
  this.onmessage = undefined;
  this.onerror = undefined;
  this.url = undefined;
  this.readyState = undefined;
  this.withCredentials = undefined;
  this._close = undefined;
  start(this, url, options);
}

_c11 = EventSourcePolyfill;
var isFetchSupported = fetch != undefined && Response1 != undefined && 'body' in Response1.prototype;

function start(es, url, options) {
  url = String(url);
  var withCredentials = options != undefined && Boolean(options.withCredentials);
  var initialRetry = clampDuration(1000);
  var heartbeatTimeout = options != undefined && options.heartbeatTimeout != undefined ? parseDuration(options.heartbeatTimeout, 45000) : clampDuration(45000);
  var lastEventId = '';
  var retry = initialRetry;
  var wasActivity = false;
  var headers2 = options != undefined && options.headers != undefined ? JSON.parse(JSON.stringify(options.headers)) : undefined;
  var CurrentTransport = options != undefined && options.Transport != undefined ? options.Transport : XMLHttpRequest;
  var xhr = isFetchSupported && !(options != undefined && options.Transport != undefined) ? undefined : new XHRWrapper(new CurrentTransport());
  var transport = xhr == undefined ? new FetchTransport() : new XHRTransport();
  var cancelFunction = undefined;
  var timeout = 0;
  var currentState = WAITING;
  var dataBuffer = '';
  var lastEventIdBuffer = '';
  var eventTypeBuffer = '';
  var textBuffer = '';
  var state = FIELD_START;
  var fieldStart = 0;
  var valueStart = 0;

  var onStart = function (status, statusText, contentType, headers3, cancel) {
    if (currentState === CONNECTING) {
      cancelFunction = cancel;

      if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
        currentState = OPEN;
        wasActivity = true;
        retry = initialRetry;
        es.readyState = OPEN;
        var event = new ConnectionEvent('open', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onopen, event);
      } else {
        var message = '';

        if (status !== 200) {
          if (statusText) {
            statusText = statusText.replace(/\s+/g, ' ');
          }

          message = "EventSource's response has a status " + status + ' ' + statusText + ' that is not 200. Aborting the connection.';
        } else {
          message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? '-' : contentType.replace(/\s+/g, ' ')) + '. Aborting the connection.';
        }

        throwError(new Error(message));
        close();
        var event = new ConnectionEvent('error', {
          status: status,
          statusText: statusText,
          headers: headers3
        });
        es.dispatchEvent(event);
        fire(es, es.onerror, event);
      }
    }
  };

  var onProgress = function (textChunk) {
    if (currentState === OPEN) {
      var n = -1;

      for (var i = 0; i < textChunk.length; i += 1) {
        var c = textChunk.charCodeAt(i);

        if (c === '\n'.charCodeAt(0) || c === '\r'.charCodeAt(0)) {
          n = i;
        }
      }

      var chunk = (n !== -1 ? textBuffer : '') + textChunk.slice(0, n + 1);
      textBuffer = (n === -1 ? textBuffer : '') + textChunk.slice(n + 1);

      if (chunk !== '') {
        wasActivity = true;
      }

      for (var position = 0; position < chunk.length; position += 1) {
        var c = chunk.charCodeAt(position);

        if (state === AFTER_CR && c === '\n'.charCodeAt(0)) {
          state = FIELD_START;
        } else {
          if (state === AFTER_CR) {
            state = FIELD_START;
          }

          if (c === '\r'.charCodeAt(0) || c === '\n'.charCodeAt(0)) {
            if (state !== FIELD_START) {
              if (state === FIELD) {
                valueStart = position + 1;
              }

              var field = chunk.slice(fieldStart, valueStart - 1);
              var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === ' '.charCodeAt(0) ? 1 : 0), position);

              if (field === 'data') {
                dataBuffer += '\n';
                dataBuffer += value;
              } else if (field === 'id') {
                lastEventIdBuffer = value;
              } else if (field === 'event') {
                eventTypeBuffer = value;
              } else if (field === 'retry') {
                initialRetry = parseDuration(value, initialRetry);
                retry = initialRetry;
              } else if (field === 'heartbeatTimeout') {
                heartbeatTimeout = parseDuration(value, heartbeatTimeout);

                if (timeout !== 0) {
                  clearTimeout(timeout);
                  timeout = setTimeout(function () {
                    onTimeout();
                  }, heartbeatTimeout);
                }
              }
            }

            if (state === FIELD_START) {
              if (dataBuffer !== '') {
                lastEventId = lastEventIdBuffer;

                if (eventTypeBuffer === '') {
                  eventTypeBuffer = 'message';
                }

                var event = new MessageEvent1(eventTypeBuffer, {
                  data: dataBuffer.slice(1),
                  lastEventId: lastEventIdBuffer
                });
                es.dispatchEvent(event);

                if (eventTypeBuffer === 'message') {
                  fire(es, es.onmessage, event);
                }

                if (currentState === CLOSED) {
                  return;
                }
              }

              dataBuffer = '';
              eventTypeBuffer = '';
            }

            state = c === '\r'.charCodeAt(0) ? AFTER_CR : FIELD_START;
          } else {
            if (state === FIELD_START) {
              fieldStart = position;
              state = FIELD;
            }

            if (state === FIELD) {
              if (c === ':'.charCodeAt(0)) {
                valueStart = position + 1;
                state = VALUE_START;
              }
            } else if (state === VALUE_START) {
              state = VALUE;
            }
          }
        }
      }
    }
  };

  var onFinish = function () {
    if (currentState === OPEN || currentState === CONNECTING) {
      currentState = WAITING;

      if (timeout !== 0) {
        clearTimeout(timeout);
        timeout = 0;
      }

      timeout = setTimeout(function () {
        onTimeout();
      }, retry);
      retry = clampDuration(Math.min(initialRetry * 16, retry * 2));
      es.readyState = CONNECTING;
      var event = new Event1('error');
      es.dispatchEvent(event);
      fire(es, es.onerror, event);
    }
  };

  var close = function () {
    currentState = CLOSED;

    if (cancelFunction != undefined) {
      cancelFunction();
      cancelFunction = undefined;
    }

    if (timeout !== 0) {
      clearTimeout(timeout);
      timeout = 0;
    }

    es.readyState = CLOSED;
  };

  var onTimeout = function () {
    timeout = 0;

    if (currentState !== WAITING) {
      if (!wasActivity && cancelFunction != undefined) {
        throwError(new Error('No activity within ' + heartbeatTimeout + ' milliseconds. Reconnecting.'));
        cancelFunction();
        cancelFunction = undefined;
      } else {
        wasActivity = false;
        timeout = setTimeout(function () {
          onTimeout();
        }, heartbeatTimeout);
      }

      return;
    }

    wasActivity = false;
    timeout = setTimeout(function () {
      onTimeout();
    }, heartbeatTimeout);
    currentState = CONNECTING;
    dataBuffer = '';
    eventTypeBuffer = '';
    lastEventIdBuffer = lastEventId;
    textBuffer = '';
    fieldStart = 0;
    valueStart = 0;
    state = FIELD_START; // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
    // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.

    var requestURL = url;

    if (url.slice(0, 5) !== 'data:' && url.slice(0, 5) !== 'blob:') {
      if (lastEventId !== '') {
        requestURL += (url.indexOf('?') === -1 ? '?' : '&') + 'lastEventId=' + encodeURIComponent(lastEventId);
      }
    }

    var requestHeaders = {};
    requestHeaders['Accept'] = 'text/event-stream';

    if (headers2 != undefined) {
      for (var name in headers2) {
        if (Object.prototype.hasOwnProperty.call(headers2, name)) {
          requestHeaders[name] = headers2[name];
        }
      }
    }

    try {
      transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
    } catch (error) {
      close();
      throw error;
    }
  };

  es.url = url;
  es.readyState = CONNECTING;
  es.withCredentials = withCredentials;
  es._close = close;
  onTimeout();
}

EventSourcePolyfill.prototype = Object.create(EventTarget1.prototype);
EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
EventSourcePolyfill.prototype.OPEN = OPEN;
EventSourcePolyfill.prototype.CLOSED = CLOSED;

EventSourcePolyfill.prototype.close = function () {
  this._close();
};

EventSourcePolyfill.CONNECTING = CONNECTING;
EventSourcePolyfill.OPEN = OPEN;
EventSourcePolyfill.CLOSED = CLOSED;
EventSourcePolyfill.prototype.withCredentials = undefined;
var _default = EventSourcePolyfill;
exports.default = _default;

var _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10, _c11;

$RefreshReg$(_c, "TextDecoderPolyfill");
$RefreshReg$(_c2, "XHRWrapper");
$RefreshReg$(_c3, "HeadersPolyfill");
$RefreshReg$(_c4, "XHRTransport");
$RefreshReg$(_c5, "HeadersWrapper");
$RefreshReg$(_c6, "FetchTransport");
$RefreshReg$(_c7, "EventTarget1");
$RefreshReg$(_c8, "Event1");
$RefreshReg$(_c9, "MessageEvent1");
$RefreshReg$(_c10, "ConnectionEvent");
$RefreshReg$(_c11, "EventSourcePolyfill");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/fouc.js":
/*!***************************************************!*\
  !*** ./node_modules/next/dist/client/dev/fouc.js ***!
  \***************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.displayContent = displayContent;

function displayContent(callback) {
  (window.requestAnimationFrame || setTimeout)(function () {
    for (var x = document.querySelectorAll('[data-next-hide-fouc]'), i = x.length; i--;) {
      x[i].parentNode.removeChild(x[i]);
    }

    if (callback) {
      callback();
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ }),

/***/ "./node_modules/next/dist/client/dev/on-demand-entries-utils.js":
/*!**********************************************************************!*\
  !*** ./node_modules/next/dist/client/dev/on-demand-entries-utils.js ***!
  \**********************************************************************/
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* module decorator */ module = __webpack_require__.nmd(module);


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.closePing = closePing;
exports.setupPing = setupPing;
exports.currentPage = void 0;

var _eventsource = __webpack_require__(/*! ./error-overlay/eventsource */ "./node_modules/next/dist/client/dev/error-overlay/eventsource.js");

let evtSource;
let currentPage;
exports.currentPage = currentPage;

function closePing() {
  if (evtSource) evtSource.close();
  evtSource = null;
}

function setupPing(assetPrefix, pathnameFn, retry) {
  const pathname = pathnameFn(); // Make sure to only create new EventSource request if page has changed

  if (pathname === currentPage && !retry) return;
  exports.currentPage = currentPage = pathname; // close current EventSource connection

  closePing();
  evtSource = (0, _eventsource).getEventSourceWrapper({
    path: `${assetPrefix}/_next/webpack-hmr?page=${currentPage}`,
    timeout: 5000
  });
  evtSource.addMessageListener(event => {
    if (event.data.indexOf('{') === -1) return;

    try {
      const payload = JSON.parse(event.data);

      if (payload.invalid) {
        // Payload can be invalid even if the page does not exist.
        // So, we need to make sure it exists before reloading.
        fetch(location.href, {
          credentials: 'same-origin'
        }).then(pageRes => {
          if (pageRes.status === 200) {
            location.reload();
          }
        });
      }
    } catch (err) {
      console.error('on-demand-entries failed to parse response', err);
    }
  });
}

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ var __webpack_exports__ = (__webpack_exec__("./node_modules/next/dist/client/dev/amp-dev.js"));
/******/ _N_E = __webpack_exports__;
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQTtBQUNBdlAsUUFBQUEsS0FBSyxDQUFDZ0IsUUFBUSxDQUFDd08sSUFBVixFQUFnQjtBQUNqQjlGLFVBQUFBLFdBQVcsRUFBRTtBQURJLFNBQWhCLENBQUwsQ0FFRzVMLElBRkgsQ0FFUzJSLE9BQUQsSUFBVztBQUNmLGNBQUlBLE9BQU8sQ0FBQzVQLE1BQVIsS0FBbUIsR0FBdkIsRUFBNEI7QUFDeEJtQixZQUFBQSxRQUFRLENBQUNDLE1BQVQ7QUFDSDtBQUNKLFNBTkQ7QUFPSDtBQUNKLEtBYkQsQ0FhRSxPQUFPNUMsR0FBUCxFQUFZO0FBQ1Y2QyxNQUFBQSxPQUFPLENBQUN2RCxLQUFSLENBQWMsNENBQWQsRUFBNERVLEdBQTVEO0FBQ0g7QUFDSixHQWxCRDtBQW1CSCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvYW1wLWRldi5qcyIsIndlYnBhY2s6Ly9fTl9FLy4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9jbGllbnQvZGV2L2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2UuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9ldmVudC1zb3VyY2UtcG9seWZpbGwuanMiLCJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9uZXh0L2Rpc3QvY2xpZW50L2Rldi9mb3VjLmpzIiwid2VicGFjazovL19OX0UvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NsaWVudC9kZXYvb24tZGVtYW5kLWVudHJpZXMtdXRpbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG52YXIgX2V2ZW50U291cmNlUG9seWZpbGwgPSBfaW50ZXJvcFJlcXVpcmVEZWZhdWx0KHJlcXVpcmUoXCIuL2V2ZW50LXNvdXJjZS1wb2x5ZmlsbFwiKSk7XG52YXIgX2V2ZW50c291cmNlID0gcmVxdWlyZShcIi4vZXJyb3Itb3ZlcmxheS9ldmVudHNvdXJjZVwiKTtcbnZhciBfb25EZW1hbmRFbnRyaWVzVXRpbHMgPSByZXF1aXJlKFwiLi9vbi1kZW1hbmQtZW50cmllcy11dGlsc1wiKTtcbnZhciBfZm91YyA9IHJlcXVpcmUoXCIuL2ZvdWNcIik7XG5mdW5jdGlvbiBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIGtleSwgYXJnKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgdmFyIGluZm8gPSBnZW5ba2V5XShhcmcpO1xuICAgICAgICB2YXIgdmFsdWUgPSBpbmZvLnZhbHVlO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGluZm8uZG9uZSkge1xuICAgICAgICByZXNvbHZlKHZhbHVlKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBQcm9taXNlLnJlc29sdmUodmFsdWUpLnRoZW4oX25leHQsIF90aHJvdyk7XG4gICAgfVxufVxuZnVuY3Rpb24gX2FzeW5jVG9HZW5lcmF0b3IoZm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBzZWxmID0gdGhpcywgYXJncyA9IGFyZ3VtZW50cztcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIGdlbiA9IGZuLmFwcGx5KHNlbGYsIGFyZ3MpO1xuICAgICAgICAgICAgZnVuY3Rpb24gX25leHQodmFsdWUpIHtcbiAgICAgICAgICAgICAgICBhc3luY0dlbmVyYXRvclN0ZXAoZ2VuLCByZXNvbHZlLCByZWplY3QsIF9uZXh0LCBfdGhyb3csIFwibmV4dFwiLCB2YWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmdW5jdGlvbiBfdGhyb3coZXJyKSB7XG4gICAgICAgICAgICAgICAgYXN5bmNHZW5lcmF0b3JTdGVwKGdlbiwgcmVzb2x2ZSwgcmVqZWN0LCBfbmV4dCwgX3Rocm93LCBcInRocm93XCIsIGVycik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfbmV4dCh1bmRlZmluZWQpO1xuICAgICAgICB9KTtcbiAgICB9O1xufVxuZnVuY3Rpb24gX2ludGVyb3BSZXF1aXJlRGVmYXVsdChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIG9iai5fX2VzTW9kdWxlID8gb2JqIDoge1xuICAgICAgICBkZWZhdWx0OiBvYmpcbiAgICB9O1xufVxuaWYgKCF3aW5kb3cuRXZlbnRTb3VyY2UpIHtcbiAgICB3aW5kb3cuRXZlbnRTb3VyY2UgPSBfZXZlbnRTb3VyY2VQb2x5ZmlsbC5kZWZhdWx0O1xufVxuY29uc3QgZGF0YSA9IEpTT04ucGFyc2UoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fTkVYVF9EQVRBX18nKS50ZXh0Q29udGVudCk7XG5sZXQgeyBhc3NldFByZWZpeCAsIHBhZ2UgIH0gPSBkYXRhO1xuYXNzZXRQcmVmaXggPSBhc3NldFByZWZpeCB8fCAnJztcbmxldCBtb3N0UmVjZW50SGFzaCA9IG51bGw7XG4vKiBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgKi8gbGV0IGN1ckhhc2ggPSBfX3dlYnBhY2tfaGFzaF9fO1xuY29uc3QgaG90VXBkYXRlUGF0aCA9IGFzc2V0UHJlZml4ICsgKGFzc2V0UHJlZml4LmVuZHNXaXRoKCcvJykgPyAnJyA6ICcvJykgKyAnX25leHQvc3RhdGljL3dlYnBhY2svJztcbi8vIElzIHRoZXJlIGEgbmV3ZXIgdmVyc2lvbiBvZiB0aGlzIGNvZGUgYXZhaWxhYmxlP1xuZnVuY3Rpb24gaXNVcGRhdGVBdmFpbGFibGUoKSB7XG4gICAgLy8gX193ZWJwYWNrX2hhc2hfXyBpcyB0aGUgaGFzaCBvZiB0aGUgY3VycmVudCBjb21waWxhdGlvbi5cbiAgICAvLyBJdCdzIGEgZ2xvYmFsIHZhcmlhYmxlIGluamVjdGVkIGJ5IFdlYnBhY2suXG4gICAgLyogZXNsaW50LWRpc2FibGUtbmV4dC1saW5lICovIHJldHVybiBtb3N0UmVjZW50SGFzaCAhPT0gX193ZWJwYWNrX2hhc2hfXztcbn1cbi8vIFdlYnBhY2sgZGlzYWxsb3dzIHVwZGF0ZXMgaW4gb3RoZXIgc3RhdGVzLlxuZnVuY3Rpb24gY2FuQXBwbHlVcGRhdGVzKCkge1xuICAgIHJldHVybiBtb2R1bGUuaG90LnN0YXR1cygpID09PSAnaWRsZSc7XG59XG5mdW5jdGlvbiBfdHJ5QXBwbHlVcGRhdGVzKCkge1xuICAgIF90cnlBcHBseVVwZGF0ZXMgPSAvLyBUaGlzIGZ1bmN0aW9uIHJlYWRzIGNvZGUgdXBkYXRlcyBvbiB0aGUgZmx5IGFuZCBoYXJkXG4gICAgLy8gcmVsb2FkcyB0aGUgcGFnZSB3aGVuIGl0IGhhcyBjaGFuZ2VkLlxuICAgIF9hc3luY1RvR2VuZXJhdG9yKGZ1bmN0aW9uKigpIHtcbiAgICAgICAgaWYgKCFpc1VwZGF0ZUF2YWlsYWJsZSgpIHx8ICFjYW5BcHBseVVwZGF0ZXMoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCByZXMgPSB5aWVsZCBmZXRjaCh0eXBlb2YgX193ZWJwYWNrX3J1bnRpbWVfaWRfXyAhPT0gJ3VuZGVmaW5lZCcgPyBgJHtob3RVcGRhdGVQYXRofSR7Y3VySGFzaH0uJHtfX3dlYnBhY2tfcnVudGltZV9pZF9ffS5ob3QtdXBkYXRlLmpzb25gIDogYCR7aG90VXBkYXRlUGF0aH0ke2N1ckhhc2h9LmhvdC11cGRhdGUuanNvbmApO1xuICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSB5aWVsZCByZXMuanNvbigpO1xuICAgICAgICAgICAgY29uc3QgY3VyUGFnZSA9IHBhZ2UgPT09ICcvJyA/ICdpbmRleCcgOiBwYWdlO1xuICAgICAgICAgICAgLy8gd2VicGFjayA1IHVzZXMgYW4gYXJyYXkgaW5zdGVhZFxuICAgICAgICAgICAgY29uc3QgcGFnZVVwZGF0ZWQgPSAoQXJyYXkuaXNBcnJheShqc29uRGF0YS5jKSA/IGpzb25EYXRhLmMgOiBPYmplY3Qua2V5cyhqc29uRGF0YS5jKSkuc29tZSgobW9kKT0+e1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2QuaW5kZXhPZihgcGFnZXMke2N1clBhZ2Uuc3Vic3RyKDAsIDEpID09PSAnLycgPyBjdXJQYWdlIDogYC8ke2N1clBhZ2V9YH1gKSAhPT0gLTEgfHwgbW9kLmluZGV4T2YoYHBhZ2VzJHtjdXJQYWdlLnN1YnN0cigwLCAxKSA9PT0gJy8nID8gY3VyUGFnZSA6IGAvJHtjdXJQYWdlfWB9YC5yZXBsYWNlKC9cXC8vZywgJ1xcXFwnKSkgIT09IC0xO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocGFnZVVwZGF0ZWQpIHtcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGN1ckhhc2ggPSBtb3N0UmVjZW50SGFzaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBvY2N1cnJlZCBjaGVja2luZyBmb3IgdXBkYXRlJywgZXJyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmxvY2F0aW9uLnJlbG9hZCh0cnVlKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBfdHJ5QXBwbHlVcGRhdGVzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5mdW5jdGlvbiB0cnlBcHBseVVwZGF0ZXMoKSB7XG4gICAgcmV0dXJuIF90cnlBcHBseVVwZGF0ZXMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cbigwLCBfZXZlbnRzb3VyY2UpLmFkZE1lc3NhZ2VMaXN0ZW5lcigoZXZlbnQpPT57XG4gICAgaWYgKGV2ZW50LmRhdGEgPT09ICdcXHVEODNEXFx1REM5MycpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UuYWN0aW9uID09PSAnc3luYycgfHwgbWVzc2FnZS5hY3Rpb24gPT09ICdidWlsdCcpIHtcbiAgICAgICAgICAgIGlmICghbWVzc2FnZS5oYXNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9zdFJlY2VudEhhc2ggPSBtZXNzYWdlLmhhc2g7XG4gICAgICAgICAgICB0cnlBcHBseVVwZGF0ZXMoKTtcbiAgICAgICAgfSBlbHNlIGlmIChtZXNzYWdlLmFjdGlvbiA9PT0gJ3JlbG9hZFBhZ2UnKSB7XG4gICAgICAgICAgICBkb2N1bWVudC5sb2NhdGlvbi5yZWxvYWQodHJ1ZSk7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChleCkge1xuICAgICAgICBjb25zb2xlLndhcm4oJ0ludmFsaWQgSE1SIG1lc3NhZ2U6ICcgKyBldmVudC5kYXRhICsgJ1xcbicgKyBleCk7XG4gICAgfVxufSk7XG4oMCwgX29uRGVtYW5kRW50cmllc1V0aWxzKS5zZXR1cFBpbmcoYXNzZXRQcmVmaXgsICgpPT5wYWdlXG4pO1xuKDAsIF9mb3VjKS5kaXNwbGF5Q29udGVudCgpO1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hbXAtZGV2LmpzLm1hcCIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7XG4gICAgdmFsdWU6IHRydWVcbn0pO1xuZXhwb3J0cy5hZGRNZXNzYWdlTGlzdGVuZXIgPSBhZGRNZXNzYWdlTGlzdGVuZXI7XG5leHBvcnRzLmdldEV2ZW50U291cmNlV3JhcHBlciA9IGdldEV2ZW50U291cmNlV3JhcHBlcjtcbmNvbnN0IGV2ZW50Q2FsbGJhY2tzID0gW107XG5mdW5jdGlvbiBFdmVudFNvdXJjZVdyYXBwZXIob3B0aW9ucykge1xuICAgIHZhciBzb3VyY2U7XG4gICAgdmFyIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgdmFyIGxpc3RlbmVycyA9IFtdO1xuICAgIGlmICghb3B0aW9ucy50aW1lb3V0KSB7XG4gICAgICAgIG9wdGlvbnMudGltZW91dCA9IDIwICogMTAwMDtcbiAgICB9XG4gICAgaW5pdCgpO1xuICAgIHZhciB0aW1lciA9IHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAobmV3IERhdGUoKSAtIGxhc3RBY3Rpdml0eSA+IG9wdGlvbnMudGltZW91dCkge1xuICAgICAgICAgICAgaGFuZGxlRGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgfSwgb3B0aW9ucy50aW1lb3V0IC8gMik7XG4gICAgZnVuY3Rpb24gaW5pdCgpIHtcbiAgICAgICAgc291cmNlID0gbmV3IHdpbmRvdy5FdmVudFNvdXJjZShvcHRpb25zLnBhdGgpO1xuICAgICAgICBzb3VyY2Uub25vcGVuID0gaGFuZGxlT25saW5lO1xuICAgICAgICBzb3VyY2Uub25lcnJvciA9IGhhbmRsZURpc2Nvbm5lY3Q7XG4gICAgICAgIHNvdXJjZS5vbm1lc3NhZ2UgPSBoYW5kbGVNZXNzYWdlO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVPbmxpbmUoKSB7XG4gICAgICAgIGlmIChvcHRpb25zLmxvZykgY29uc29sZS5sb2coJ1tITVJdIGNvbm5lY3RlZCcpO1xuICAgICAgICBsYXN0QWN0aXZpdHkgPSBuZXcgRGF0ZSgpO1xuICAgIH1cbiAgICBmdW5jdGlvbiBoYW5kbGVNZXNzYWdlKGV2ZW50KSB7XG4gICAgICAgIGxhc3RBY3Rpdml0eSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGZvcih2YXIgaSA9IDA7IGkgPCBsaXN0ZW5lcnMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgbGlzdGVuZXJzW2ldKGV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICBldmVudENhbGxiYWNrcy5mb3JFYWNoKChjYik9PntcbiAgICAgICAgICAgIGlmICghY2IudW5maWx0ZXJlZCAmJiBldmVudC5kYXRhLmluZGV4T2YoJ2FjdGlvbicpID09PSAtMSkgcmV0dXJuO1xuICAgICAgICAgICAgY2IoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZnVuY3Rpb24gaGFuZGxlRGlzY29ubmVjdCgpIHtcbiAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgIHNvdXJjZS5jbG9zZSgpO1xuICAgICAgICBzZXRUaW1lb3V0KGluaXQsIG9wdGlvbnMudGltZW91dCk7XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGNsb3NlOiAoKT0+e1xuICAgICAgICAgICAgY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gICAgICAgICAgICBzb3VyY2UuY2xvc2UoKTtcbiAgICAgICAgfSxcbiAgICAgICAgYWRkTWVzc2FnZUxpc3RlbmVyOiBmdW5jdGlvbihmbikge1xuICAgICAgICAgICAgbGlzdGVuZXJzLnB1c2goZm4pO1xuICAgICAgICB9XG4gICAgfTtcbn1cbmZ1bmN0aW9uIGFkZE1lc3NhZ2VMaXN0ZW5lcihjYikge1xuICAgIGV2ZW50Q2FsbGJhY2tzLnB1c2goY2IpO1xufVxuZnVuY3Rpb24gZ2V0RXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gRXZlbnRTb3VyY2VXcmFwcGVyKG9wdGlvbnMpO1xufVxuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudHNvdXJjZS5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuZGVmYXVsdCA9IHZvaWQgMDtcbi8qIGVzbGludC1kaXNhYmxlICovIC8vIEltcHJvdmVkIHZlcnNpb24gb2YgaHR0cHM6Ly9naXRodWIuY29tL1lhZmZsZS9FdmVudFNvdXJjZS9cbi8vIEF2YWlsYWJsZSB1bmRlciBNSVQgTGljZW5zZSAoTUlUKVxuLy8gT25seSB0cmllcyB0byBzdXBwb3J0IElFMTEgYW5kIG5vdGhpbmcgYmVsb3dcbnZhciBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudDtcbnZhciBSZXNwb25zZTEgPSB3aW5kb3cuUmVzcG9uc2U7XG52YXIgVGV4dERlY29kZXIxID0gd2luZG93LlRleHREZWNvZGVyO1xudmFyIFRleHRFbmNvZGVyMSA9IHdpbmRvdy5UZXh0RW5jb2RlcjtcbnZhciBBYm9ydENvbnRyb2xsZXIxID0gd2luZG93LkFib3J0Q29udHJvbGxlcjtcbmlmIChBYm9ydENvbnRyb2xsZXIxID09IHVuZGVmaW5lZCkge1xuICAgIEFib3J0Q29udHJvbGxlcjEgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGhpcy5zaWduYWwgPSBudWxsO1xuICAgICAgICB0aGlzLmFib3J0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIH07XG4gICAgfTtcbn1cbmZ1bmN0aW9uIFRleHREZWNvZGVyUG9seWZpbGwoKSB7XG4gICAgdGhpcy5iaXRzTmVlZGVkID0gMDtcbiAgICB0aGlzLmNvZGVQb2ludCA9IDA7XG59XG5UZXh0RGVjb2RlclBvbHlmaWxsLnByb3RvdHlwZS5kZWNvZGUgPSBmdW5jdGlvbihvY3RldHMpIHtcbiAgICBmdW5jdGlvbiB2YWxpZChjb2RlUG9pbnQsIHNoaWZ0LCBvY3RldHNDb3VudCkge1xuICAgICAgICBpZiAob2N0ZXRzQ291bnQgPT09IDEpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQgPj0gMTI4ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSAyMDQ3O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMikge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSAyMDQ4ID4+IHNoaWZ0ICYmIGNvZGVQb2ludCA8PCBzaGlmdCA8PSA1NTI5NSB8fCBjb2RlUG9pbnQgPj0gNTczNDQgPj4gc2hpZnQgJiYgY29kZVBvaW50IDw8IHNoaWZ0IDw9IDY1NTM1O1xuICAgICAgICB9XG4gICAgICAgIGlmIChvY3RldHNDb3VudCA9PT0gMykge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PSA2NTUzNiA+PiBzaGlmdCAmJiBjb2RlUG9pbnQgPDwgc2hpZnQgPD0gMTExNDExMTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgZnVuY3Rpb24gb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSB7XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMSkge1xuICAgICAgICAgICAgcmV0dXJuIGNvZGVQb2ludCA+PiA2ID4gMTUgPyAzIDogY29kZVBvaW50ID4gMzEgPyAyIDogMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYml0c05lZWRlZCA9PT0gNiAqIDIpIHtcbiAgICAgICAgICAgIHJldHVybiBjb2RlUG9pbnQgPiAxNSA/IDMgOiAyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSA2ICogMykge1xuICAgICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHZhciBSRVBMQUNFUiA9IDY1NTMzO1xuICAgIHZhciBzdHJpbmcgPSAnJztcbiAgICB2YXIgYml0c05lZWRlZCA9IHRoaXMuYml0c05lZWRlZDtcbiAgICB2YXIgY29kZVBvaW50ID0gdGhpcy5jb2RlUG9pbnQ7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IG9jdGV0cy5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgIHZhciBvY3RldCA9IG9jdGV0c1tpXTtcbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgIT09IDApIHtcbiAgICAgICAgICAgIGlmIChvY3RldCA8IDEyOCB8fCBvY3RldCA+IDE5MSB8fCAhdmFsaWQoY29kZVBvaW50IDw8IDYgfCBvY3RldCAmIDYzLCBiaXRzTmVlZGVkIC0gNiwgb2N0ZXRzQ291bnQoYml0c05lZWRlZCwgY29kZVBvaW50KSkpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChiaXRzTmVlZGVkID09PSAwKSB7XG4gICAgICAgICAgICBpZiAob2N0ZXQgPj0gMCAmJiBvY3RldCA8PSAxMjcpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2N0ZXQgPj0gMTkyICYmIG9jdGV0IDw9IDIyMykge1xuICAgICAgICAgICAgICAgIGJpdHNOZWVkZWQgPSA2ICogMTtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBvY3RldCAmIDMxO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvY3RldCA+PSAyMjQgJiYgb2N0ZXQgPD0gMjM5KSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDYgKiAyO1xuICAgICAgICAgICAgICAgIGNvZGVQb2ludCA9IG9jdGV0ICYgMTU7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKG9jdGV0ID49IDI0MCAmJiBvY3RldCA8PSAyNDcpIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gNiAqIDM7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gb2N0ZXQgJiA3O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBiaXRzTmVlZGVkID0gMDtcbiAgICAgICAgICAgICAgICBjb2RlUG9pbnQgPSBSRVBMQUNFUjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChiaXRzTmVlZGVkICE9PSAwICYmICF2YWxpZChjb2RlUG9pbnQsIGJpdHNOZWVkZWQsIG9jdGV0c0NvdW50KGJpdHNOZWVkZWQsIGNvZGVQb2ludCkpKSB7XG4gICAgICAgICAgICAgICAgYml0c05lZWRlZCA9IDA7XG4gICAgICAgICAgICAgICAgY29kZVBvaW50ID0gUkVQTEFDRVI7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBiaXRzTmVlZGVkIC09IDY7XG4gICAgICAgICAgICBjb2RlUG9pbnQgPSBjb2RlUG9pbnQgPDwgNiB8IG9jdGV0ICYgNjM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGJpdHNOZWVkZWQgPT09IDApIHtcbiAgICAgICAgICAgIGlmIChjb2RlUG9pbnQgPD0gNjU1MzUpIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZShjb2RlUG9pbnQpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NTI5NiArIChjb2RlUG9pbnQgLSA2NTUzNSAtIDEgPj4gMTApKTtcbiAgICAgICAgICAgICAgICBzdHJpbmcgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSg1NjMyMCArIChjb2RlUG9pbnQgLSA2NTUzNSAtIDEgJiAxMDIzKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5iaXRzTmVlZGVkID0gYml0c05lZWRlZDtcbiAgICB0aGlzLmNvZGVQb2ludCA9IGNvZGVQb2ludDtcbiAgICByZXR1cm4gc3RyaW5nO1xufTtcbi8vIEZpcmVmb3ggPCAzOCB0aHJvd3MgYW4gZXJyb3Igd2l0aCBzdHJlYW0gb3B0aW9uXG52YXIgc3VwcG9ydHNTdHJlYW1PcHRpb24gPSBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gbmV3IFRleHREZWNvZGVyMSgpLmRlY29kZShuZXcgVGV4dEVuY29kZXIxKCkuZW5jb2RlKCd0ZXN0JyksIHtcbiAgICAgICAgICAgIHN0cmVhbTogdHJ1ZVxuICAgICAgICB9KSA9PT0gJ3Rlc3QnO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGVycm9yKTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufTtcbi8vIElFLCBFZGdlXG5pZiAoVGV4dERlY29kZXIxID09IHVuZGVmaW5lZCB8fCBUZXh0RW5jb2RlcjEgPT0gdW5kZWZpbmVkIHx8ICFzdXBwb3J0c1N0cmVhbU9wdGlvbigpKSB7XG4gICAgVGV4dERlY29kZXIxID0gVGV4dERlY29kZXJQb2x5ZmlsbDtcbn1cbnZhciBrID0gZnVuY3Rpb24oKSB7XG59O1xuZnVuY3Rpb24gWEhSV3JhcHBlcih4aHIpIHtcbiAgICB0aGlzLndpdGhDcmVkZW50aWFscyA9IGZhbHNlO1xuICAgIHRoaXMucmVzcG9uc2VUeXBlID0gJyc7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gMDtcbiAgICB0aGlzLnN0YXR1cyA9IDA7XG4gICAgdGhpcy5zdGF0dXNUZXh0ID0gJyc7XG4gICAgdGhpcy5yZXNwb25zZVRleHQgPSAnJztcbiAgICB0aGlzLm9ucHJvZ3Jlc3MgPSBrO1xuICAgIHRoaXMub25yZWFkeXN0YXRlY2hhbmdlID0gaztcbiAgICB0aGlzLl9jb250ZW50VHlwZSA9ICcnO1xuICAgIHRoaXMuX3hociA9IHhocjtcbiAgICB0aGlzLl9zZW5kVGltZW91dCA9IDA7XG4gICAgdGhpcy5fYWJvcnQgPSBrO1xufVxuWEhSV3JhcHBlci5wcm90b3R5cGUub3BlbiA9IGZ1bmN0aW9uKG1ldGhvZCwgdXJsKSB7XG4gICAgdGhpcy5fYWJvcnQodHJ1ZSk7XG4gICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgIHZhciB4aHIgPSB0aGlzLl94aHI7XG4gICAgdmFyIHN0YXRlID0gMTtcbiAgICB2YXIgdGltZW91dCA9IDA7XG4gICAgdGhpcy5fYWJvcnQgPSBmdW5jdGlvbihzaWxlbnQpIHtcbiAgICAgICAgaWYgKHRoYXQuX3NlbmRUaW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhhdC5fc2VuZFRpbWVvdXQpO1xuICAgICAgICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdGF0ZSA9PT0gMSB8fCBzdGF0ZSA9PT0gMiB8fCBzdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgc3RhdGUgPSA0O1xuICAgICAgICAgICAgeGhyLm9ubG9hZCA9IGs7XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGs7XG4gICAgICAgICAgICB4aHIub25hYm9ydCA9IGs7XG4gICAgICAgICAgICB4aHIub25wcm9ncmVzcyA9IGs7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gaztcbiAgICAgICAgICAgIC8vIElFIDggLSA5OiBYRG9tYWluUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICAgICAgICAvLyBPcGVyYSA8IDEwOiBYTUxIdHRwUmVxdWVzdCNhYm9ydCgpIGRvZXMgbm90IGZpcmUgYW55IGV2ZW50XG4gICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFzaWxlbnQpIHtcbiAgICAgICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSA0O1xuICAgICAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc3RhdGUgPSAwO1xuICAgIH07XG4gICAgdmFyIG9uU3RhcnQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHN0YXRlID09PSAxKSB7XG4gICAgICAgICAgICAvLyBzdGF0ZSA9IDI7XG4gICAgICAgICAgICB2YXIgc3RhdHVzID0gMDtcbiAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0gJyc7XG4gICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICBpZiAoISgnY29udGVudFR5cGUnIGluIHhocikpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXMgPSB4aHIuc3RhdHVzO1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnRUeXBlID0geGhyLmdldFJlc3BvbnNlSGVhZGVyKCdDb250ZW50LVR5cGUnKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICAvLyBJRSA8IDEwIHRocm93cyBleGNlcHRpb24gZm9yIGB4aHIuc3RhdHVzYCB3aGVuIHhoci5yZWFkeVN0YXRlID09PSAyIHx8IHhoci5yZWFkeVN0YXRlID09PSAzXG4gICAgICAgICAgICAgICAgICAgIC8vIE9wZXJhIDwgMTEgdGhyb3dzIGV4Y2VwdGlvbiBmb3IgYHhoci5zdGF0dXNgIHdoZW4geGhyLnJlYWR5U3RhdGUgPT09IDJcbiAgICAgICAgICAgICAgICAgICAgLy8gaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MTIxXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1cyA9IDA7XG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgY29udGVudFR5cGUgPSB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgLy8gRmlyZWZveCA8IDE0LCBDaHJvbWUgPywgU2FmYXJpID9cbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Mjk2NThcbiAgICAgICAgICAgICAgICAvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9Nzc4NTRcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXR1cyA9IDIwMDtcbiAgICAgICAgICAgICAgICBzdGF0dXNUZXh0ID0gJ09LJztcbiAgICAgICAgICAgICAgICBjb250ZW50VHlwZSA9IHhoci5jb250ZW50VHlwZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChzdGF0dXMgIT09IDApIHtcbiAgICAgICAgICAgICAgICBzdGF0ZSA9IDI7XG4gICAgICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gMjtcbiAgICAgICAgICAgICAgICB0aGF0LnN0YXR1cyA9IHN0YXR1cztcbiAgICAgICAgICAgICAgICB0aGF0LnN0YXR1c1RleHQgPSBzdGF0dXNUZXh0O1xuICAgICAgICAgICAgICAgIHRoYXQuX2NvbnRlbnRUeXBlID0gY29udGVudFR5cGU7XG4gICAgICAgICAgICAgICAgdGhhdC5vbnJlYWR5c3RhdGVjaGFuZ2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uUHJvZ3Jlc3MgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgb25TdGFydCgpO1xuICAgICAgICBpZiAoc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIHN0YXRlID0gMztcbiAgICAgICAgICAgIHZhciByZXNwb25zZVRleHQgPSAnJztcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgcmVzcG9uc2VUZXh0ID0geGhyLnJlc3BvbnNlVGV4dDtcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAvLyBJRSA4IC0gOSB3aXRoIFhNTEh0dHBSZXF1ZXN0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGF0LnJlYWR5U3RhdGUgPSAzO1xuICAgICAgICAgICAgdGhhdC5yZXNwb25zZVRleHQgPSByZXNwb25zZVRleHQ7XG4gICAgICAgICAgICB0aGF0Lm9ucHJvZ3Jlc3MoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgdmFyIG9uRmluaXNoID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIEZpcmVmb3ggNTIgZmlyZXMgXCJyZWFkeXN0YXRlY2hhbmdlXCIgKHhoci5yZWFkeVN0YXRlID09PSA0KSB3aXRob3V0IGZpbmFsIFwicmVhZHlzdGF0ZWNoYW5nZVwiICh4aHIucmVhZHlTdGF0ZSA9PT0gMylcbiAgICAgICAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXCJcbiAgICAgICAgb25Qcm9ncmVzcygpO1xuICAgICAgICBpZiAoc3RhdGUgPT09IDEgfHwgc3RhdGUgPT09IDIgfHwgc3RhdGUgPT09IDMpIHtcbiAgICAgICAgICAgIHN0YXRlID0gNDtcbiAgICAgICAgICAgIGlmICh0aW1lb3V0ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhhdC5yZWFkeVN0YXRlID0gNDtcbiAgICAgICAgICAgIHRoYXQub25yZWFkeXN0YXRlY2hhbmdlKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvblJlYWR5U3RhdGVDaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhociAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIC8vIE9wZXJhIDEyXG4gICAgICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQpIHtcbiAgICAgICAgICAgICAgICBvbkZpbmlzaCgpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gMykge1xuICAgICAgICAgICAgICAgIG9uUHJvZ3Jlc3MoKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgICAgICBvblN0YXJ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHZhciBvblRpbWVvdXQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAzKSB7XG4gICAgICAgICAgICBvblByb2dyZXNzKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIC8vIFhEb21haW5SZXF1ZXN0I2Fib3J0IHJlbW92ZXMgb25wcm9ncmVzcywgb25lcnJvciwgb25sb2FkXG4gICAgeGhyLm9ubG9hZCA9IG9uRmluaXNoO1xuICAgIHhoci5vbmVycm9yID0gb25GaW5pc2g7XG4gICAgLy8gaW1wcm9wZXIgZml4IHRvIG1hdGNoIEZpcmVmb3ggYmVoYXZpb3IsIGJ1dCBpdCBpcyBiZXR0ZXIgdGhhbiBqdXN0IGlnbm9yZSBhYm9ydFxuICAgIC8vIHNlZSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03Njg1OTZcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD04ODAyMDBcbiAgICAvLyBodHRwczovL2NvZGUuZ29vZ2xlLmNvbS9wL2Nocm9taXVtL2lzc3Vlcy9kZXRhaWw/aWQ9MTUzNTcwXG4gICAgLy8gSUUgOCBmaXJlcyBcIm9ubG9hZFwiIHdpdGhvdXQgXCJvbnByb2dyZXNzXG4gICAgeGhyLm9uYWJvcnQgPSBvbkZpbmlzaDtcbiAgICAvLyBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD03MzY3MjNcbiAgICBpZiAoISgnc2VuZEFzQmluYXJ5JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmICEoJ21vekFub24nIGluIFhNTEh0dHBSZXF1ZXN0LnByb3RvdHlwZSkpIHtcbiAgICAgICAgeGhyLm9ucHJvZ3Jlc3MgPSBvblByb2dyZXNzO1xuICAgIH1cbiAgICAvLyBJRSA4IC0gOSAoWE1MSFRUUFJlcXVlc3QpXG4gICAgLy8gT3BlcmEgPCAxMlxuICAgIC8vIEZpcmVmb3ggPCAzLjVcbiAgICAvLyBGaXJlZm94IDMuNSAtIDMuNiAtID8gPCA5LjBcbiAgICAvLyBvbnByb2dyZXNzIGlzIG5vdCBmaXJlZCBzb21ldGltZXMgb3IgZGVsYXllZFxuICAgIC8vIHNlZSBhbHNvICM2NFxuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBvblJlYWR5U3RhdGVDaGFuZ2U7XG4gICAgaWYgKCdjb250ZW50VHlwZScgaW4geGhyKSB7XG4gICAgICAgIHVybCArPSAodXJsLmluZGV4T2YoJz8nKSA9PT0gLTEgPyAnPycgOiAnJicpICsgJ3BhZGRpbmc9dHJ1ZSc7XG4gICAgfVxuICAgIHhoci5vcGVuKG1ldGhvZCwgdXJsLCB0cnVlKTtcbiAgICBpZiAoJ3JlYWR5U3RhdGUnIGluIHhocikge1xuICAgICAgICAvLyB3b3JrYXJvdW5kIGZvciBPcGVyYSAxMiBpc3N1ZSB3aXRoIFwicHJvZ3Jlc3NcIiBldmVudHNcbiAgICAgICAgLy8gIzkxXG4gICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgIH0sIDApO1xuICAgIH1cbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5hYm9ydCA9IGZ1bmN0aW9uKCkge1xuICAgIHRoaXMuX2Fib3J0KGZhbHNlKTtcbn07XG5YSFJXcmFwcGVyLnByb3RvdHlwZS5nZXRSZXNwb25zZUhlYWRlciA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fY29udGVudFR5cGU7XG59O1xuWEhSV3JhcHBlci5wcm90b3R5cGUuc2V0UmVxdWVzdEhlYWRlciA9IGZ1bmN0aW9uKG5hbWUsIHZhbHVlKSB7XG4gICAgdmFyIHhociA9IHRoaXMuX3hocjtcbiAgICBpZiAoJ3NldFJlcXVlc3RIZWFkZXInIGluIHhocikge1xuICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihuYW1lLCB2YWx1ZSk7XG4gICAgfVxufTtcblhIUldyYXBwZXIucHJvdG90eXBlLmdldEFsbFJlc3BvbnNlSGVhZGVycyA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0aGlzLl94aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzICE9IHVuZGVmaW5lZCA/IHRoaXMuX3hoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKSA6ICcnO1xufTtcblhIUldyYXBwZXIucHJvdG90eXBlLnNlbmQgPSBmdW5jdGlvbigpIHtcbiAgICAvLyBsb2FkaW5nIGluZGljYXRvciBpbiBTYWZhcmkgPCA/ICg2KSwgQ2hyb21lIDwgMTQsIEZpcmVmb3hcbiAgICBpZiAoISgnb250aW1lb3V0JyBpbiBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUpICYmIGRvY3VtZW50ICE9IHVuZGVmaW5lZCAmJiBkb2N1bWVudC5yZWFkeVN0YXRlICE9IHVuZGVmaW5lZCAmJiBkb2N1bWVudC5yZWFkeVN0YXRlICE9PSAnY29tcGxldGUnKSB7XG4gICAgICAgIHZhciB0aGF0ID0gdGhpcztcbiAgICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdGhhdC5fc2VuZFRpbWVvdXQgPSAwO1xuICAgICAgICAgICAgdGhhdC5zZW5kKCk7XG4gICAgICAgIH0sIDQpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB4aHIgPSB0aGlzLl94aHI7XG4gICAgLy8gd2l0aENyZWRlbnRpYWxzIHNob3VsZCBiZSBzZXQgYWZ0ZXIgXCJvcGVuXCIgZm9yIFNhZmFyaSBhbmQgQ2hyb21lICg8IDE5ID8pXG4gICAgeGhyLndpdGhDcmVkZW50aWFscyA9IHRoaXMud2l0aENyZWRlbnRpYWxzO1xuICAgIHhoci5yZXNwb25zZVR5cGUgPSB0aGlzLnJlc3BvbnNlVHlwZTtcbiAgICB0cnkge1xuICAgICAgICAvLyB4aHIuc2VuZCgpOyB0aHJvd3MgXCJOb3QgZW5vdWdoIGFyZ3VtZW50c1wiIGluIEZpcmVmb3ggMy4wXG4gICAgICAgIHhoci5zZW5kKHVuZGVmaW5lZCk7XG4gICAgfSBjYXRjaCAoZXJyb3IxKSB7XG4gICAgICAgIC8vIFNhZmFyaSA1LjEuNywgT3BlcmEgMTJcbiAgICAgICAgdGhyb3cgZXJyb3IxO1xuICAgIH1cbn07XG5mdW5jdGlvbiB0b0xvd2VyQ2FzZShuYW1lKSB7XG4gICAgcmV0dXJuIG5hbWUucmVwbGFjZSgvW0EtWl0vZywgZnVuY3Rpb24oYykge1xuICAgICAgICByZXR1cm4gU3RyaW5nLmZyb21DaGFyQ29kZShjLmNoYXJDb2RlQXQoMCkgKyAzMik7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBIZWFkZXJzUG9seWZpbGwoYWxsKSB7XG4gICAgLy8gR2V0IGhlYWRlcnM6IGltcGxlbWVudGVkIGFjY29yZGluZyB0byBtb3ppbGxhJ3MgZXhhbXBsZSBjb2RlOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9BUEkvWE1MSHR0cFJlcXVlc3QvZ2V0QWxsUmVzcG9uc2VIZWFkZXJzI0V4YW1wbGVcbiAgICB2YXIgbWFwID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB2YXIgYXJyYXkgPSBhbGwuc3BsaXQoJ1xcclxcbicpO1xuICAgIGZvcih2YXIgaSA9IDA7IGkgPCBhcnJheS5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgIHZhciBsaW5lID0gYXJyYXlbaV07XG4gICAgICAgIHZhciBwYXJ0cyA9IGxpbmUuc3BsaXQoJzogJyk7XG4gICAgICAgIHZhciBuYW1lID0gcGFydHMuc2hpZnQoKTtcbiAgICAgICAgdmFyIHZhbHVlID0gcGFydHMuam9pbignOiAnKTtcbiAgICAgICAgbWFwW3RvTG93ZXJDYXNlKG5hbWUpXSA9IHZhbHVlO1xuICAgIH1cbiAgICB0aGlzLl9tYXAgPSBtYXA7XG59XG5IZWFkZXJzUG9seWZpbGwucHJvdG90eXBlLmdldCA9IGZ1bmN0aW9uKG5hbWUpIHtcbiAgICByZXR1cm4gdGhpcy5fbWFwW3RvTG93ZXJDYXNlKG5hbWUpXTtcbn07XG5mdW5jdGlvbiBYSFJUcmFuc3BvcnQoKSB7XG59XG5YSFJUcmFuc3BvcnQucHJvdG90eXBlLm9wZW4gPSBmdW5jdGlvbih4aHIsIG9uU3RhcnRDYWxsYmFjaywgb25Qcm9ncmVzc0NhbGxiYWNrLCBvbkZpbmlzaENhbGxiYWNrLCB1cmwsIHdpdGhDcmVkZW50aWFscywgaGVhZGVycykge1xuICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xuICAgIHZhciBvZmZzZXQgPSAwO1xuICAgIHhoci5vbnByb2dyZXNzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciByZXNwb25zZVRleHQgPSB4aHIucmVzcG9uc2VUZXh0O1xuICAgICAgICB2YXIgY2h1bmsgPSByZXNwb25zZVRleHQuc2xpY2Uob2Zmc2V0KTtcbiAgICAgICAgb2Zmc2V0ICs9IGNodW5rLmxlbmd0aDtcbiAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKTtcbiAgICB9O1xuICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSAyKSB7XG4gICAgICAgICAgICB2YXIgc3RhdHVzID0geGhyLnN0YXR1cztcbiAgICAgICAgICAgIHZhciBzdGF0dXNUZXh0ID0geGhyLnN0YXR1c1RleHQ7XG4gICAgICAgICAgICB2YXIgY29udGVudFR5cGUgPSB4aHIuZ2V0UmVzcG9uc2VIZWFkZXIoJ0NvbnRlbnQtVHlwZScpO1xuICAgICAgICAgICAgdmFyIGhlYWRlcnMxID0geGhyLmdldEFsbFJlc3BvbnNlSGVhZGVycygpO1xuICAgICAgICAgICAgb25TdGFydENhbGxiYWNrKHN0YXR1cywgc3RhdHVzVGV4dCwgY29udGVudFR5cGUsIG5ldyBIZWFkZXJzUG9seWZpbGwoaGVhZGVyczEpLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB4aHIuYWJvcnQoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0KSB7XG4gICAgICAgICAgICBvbkZpbmlzaENhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHhoci53aXRoQ3JlZGVudGlhbHMgPSB3aXRoQ3JlZGVudGlhbHM7XG4gICAgeGhyLnJlc3BvbnNlVHlwZSA9ICd0ZXh0JztcbiAgICBmb3IodmFyIG5hbWUgaW4gaGVhZGVycyl7XG4gICAgICAgIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoaGVhZGVycywgbmFtZSkpIHtcbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKG5hbWUsIGhlYWRlcnNbbmFtZV0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHhoci5zZW5kKCk7XG59O1xuZnVuY3Rpb24gSGVhZGVyc1dyYXBwZXIoaGVhZGVyczIpIHtcbiAgICB0aGlzLl9oZWFkZXJzID0gaGVhZGVyczI7XG59XG5IZWFkZXJzV3JhcHBlci5wcm90b3R5cGUuZ2V0ID0gZnVuY3Rpb24obmFtZSkge1xuICAgIHJldHVybiB0aGlzLl9oZWFkZXJzLmdldChuYW1lKTtcbn07XG5mdW5jdGlvbiBGZXRjaFRyYW5zcG9ydCgpIHtcbn1cbkZldGNoVHJhbnNwb3J0LnByb3RvdHlwZS5vcGVuID0gZnVuY3Rpb24oeGhyLCBvblN0YXJ0Q2FsbGJhY2ssIG9uUHJvZ3Jlc3NDYWxsYmFjaywgb25GaW5pc2hDYWxsYmFjaywgdXJsLCB3aXRoQ3JlZGVudGlhbHMsIGhlYWRlcnMyKSB7XG4gICAgdmFyIGNvbnRyb2xsZXIgPSBuZXcgQWJvcnRDb250cm9sbGVyMSgpO1xuICAgIHZhciBzaWduYWwgPSBjb250cm9sbGVyLnNpZ25hbCAvLyBzZWUgIzEyMFxuICAgIDtcbiAgICB2YXIgdGV4dERlY29kZXIgPSBuZXcgVGV4dERlY29kZXIxKCk7XG4gICAgZmV0Y2godXJsLCB7XG4gICAgICAgIGhlYWRlcnM6IGhlYWRlcnMyLFxuICAgICAgICBjcmVkZW50aWFsczogd2l0aENyZWRlbnRpYWxzID8gJ2luY2x1ZGUnIDogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgc2lnbmFsOiBzaWduYWwsXG4gICAgICAgIGNhY2hlOiAnbm8tc3RvcmUnXG4gICAgfSkudGhlbihmdW5jdGlvbihyZXNwb25zZSkge1xuICAgICAgICB2YXIgcmVhZGVyID0gcmVzcG9uc2UuYm9keS5nZXRSZWFkZXIoKTtcbiAgICAgICAgb25TdGFydENhbGxiYWNrKHJlc3BvbnNlLnN0YXR1cywgcmVzcG9uc2Uuc3RhdHVzVGV4dCwgcmVzcG9uc2UuaGVhZGVycy5nZXQoJ0NvbnRlbnQtVHlwZScpLCBuZXcgSGVhZGVyc1dyYXBwZXIocmVzcG9uc2UuaGVhZGVycyksIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29udHJvbGxlci5hYm9ydCgpO1xuICAgICAgICAgICAgcmVhZGVyLmNhbmNlbCgpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgdmFyIHJlYWROZXh0Q2h1bmsgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICByZWFkZXIucmVhZCgpLnRoZW4oZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuZG9uZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gTm90ZTogYnl0ZXMgaW4gdGV4dERlY29kZXIgYXJlIGlnbm9yZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUodW5kZWZpbmVkKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjaHVuayA9IHRleHREZWNvZGVyLmRlY29kZShyZXN1bHQudmFsdWUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW06IHRydWVcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgb25Qcm9ncmVzc0NhbGxiYWNrKGNodW5rKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlYWROZXh0Q2h1bmsoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pWydjYXRjaCddKGZ1bmN0aW9uKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChlcnJvcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVhZE5leHRDaHVuaygpO1xuICAgICAgICB9KTtcbiAgICB9KS50aGVuKGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICBvbkZpbmlzaENhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgZnVuY3Rpb24oZXJyb3IpIHtcbiAgICAgICAgb25GaW5pc2hDYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoZXJyb3IpO1xuICAgIH0pO1xufTtcbmZ1bmN0aW9uIEV2ZW50VGFyZ2V0MSgpIHtcbiAgICB0aGlzLl9saXN0ZW5lcnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xufVxuZnVuY3Rpb24gdGhyb3dFcnJvcihlKSB7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9LCAwKTtcbn1cbkV2ZW50VGFyZ2V0MS5wcm90b3R5cGUuZGlzcGF0Y2hFdmVudCA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgZXZlbnQudGFyZ2V0ID0gdGhpcztcbiAgICB2YXIgdHlwZUxpc3RlbmVycyA9IHRoaXMuX2xpc3RlbmVyc1tldmVudC50eXBlXTtcbiAgICBpZiAodHlwZUxpc3RlbmVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGxlbmd0aCA9IHR5cGVMaXN0ZW5lcnMubGVuZ3RoO1xuICAgICAgICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICAgICAgdmFyIGxpc3RlbmVyID0gdHlwZUxpc3RlbmVyc1tpXTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lci5oYW5kbGVFdmVudCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lci5oYW5kbGVFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGlzdGVuZXIuY2FsbCh0aGlzLCBldmVudCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59O1xuRXZlbnRUYXJnZXQxLnByb3RvdHlwZS5hZGRFdmVudExpc3RlbmVyID0gZnVuY3Rpb24odHlwZSwgbGlzdGVuZXIpIHtcbiAgICB0eXBlID0gU3RyaW5nKHR5cGUpO1xuICAgIHZhciBsaXN0ZW5lcnMgPSB0aGlzLl9saXN0ZW5lcnM7XG4gICAgdmFyIHR5cGVMaXN0ZW5lcnMgPSBsaXN0ZW5lcnNbdHlwZV07XG4gICAgaWYgKHR5cGVMaXN0ZW5lcnMgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHR5cGVMaXN0ZW5lcnMgPSBbXTtcbiAgICAgICAgbGlzdGVuZXJzW3R5cGVdID0gdHlwZUxpc3RlbmVycztcbiAgICB9XG4gICAgdmFyIGZvdW5kID0gZmFsc2U7XG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICBpZiAodHlwZUxpc3RlbmVyc1tpXSA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIGZvdW5kID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWZvdW5kKSB7XG4gICAgICAgIHR5cGVMaXN0ZW5lcnMucHVzaChsaXN0ZW5lcik7XG4gICAgfVxufTtcbkV2ZW50VGFyZ2V0MS5wcm90b3R5cGUucmVtb3ZlRXZlbnRMaXN0ZW5lciA9IGZ1bmN0aW9uKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgdHlwZSA9IFN0cmluZyh0eXBlKTtcbiAgICB2YXIgbGlzdGVuZXJzID0gdGhpcy5fbGlzdGVuZXJzO1xuICAgIHZhciB0eXBlTGlzdGVuZXJzID0gbGlzdGVuZXJzW3R5cGVdO1xuICAgIGlmICh0eXBlTGlzdGVuZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgZmlsdGVyZWQgPSBbXTtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHR5cGVMaXN0ZW5lcnMubGVuZ3RoOyBpICs9IDEpe1xuICAgICAgICAgICAgaWYgKHR5cGVMaXN0ZW5lcnNbaV0gIT09IGxpc3RlbmVyKSB7XG4gICAgICAgICAgICAgICAgZmlsdGVyZWQucHVzaCh0eXBlTGlzdGVuZXJzW2ldKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoZmlsdGVyZWQubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBkZWxldGUgbGlzdGVuZXJzW3R5cGVdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGlzdGVuZXJzW3R5cGVdID0gZmlsdGVyZWQ7XG4gICAgICAgIH1cbiAgICB9XG59O1xuZnVuY3Rpb24gRXZlbnQxKHR5cGUpIHtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMudGFyZ2V0ID0gdW5kZWZpbmVkO1xufVxuZnVuY3Rpb24gTWVzc2FnZUV2ZW50MSh0eXBlLCBvcHRpb25zKSB7XG4gICAgRXZlbnQxLmNhbGwodGhpcywgdHlwZSk7XG4gICAgdGhpcy5kYXRhID0gb3B0aW9ucy5kYXRhO1xuICAgIHRoaXMubGFzdEV2ZW50SWQgPSBvcHRpb25zLmxhc3RFdmVudElkO1xufVxuTWVzc2FnZUV2ZW50MS5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50MS5wcm90b3R5cGUpO1xuZnVuY3Rpb24gQ29ubmVjdGlvbkV2ZW50KHR5cGUsIG9wdGlvbnMpIHtcbiAgICBFdmVudDEuY2FsbCh0aGlzLCB0eXBlKTtcbiAgICB0aGlzLnN0YXR1cyA9IG9wdGlvbnMuc3RhdHVzO1xuICAgIHRoaXMuc3RhdHVzVGV4dCA9IG9wdGlvbnMuc3RhdHVzVGV4dDtcbiAgICB0aGlzLmhlYWRlcnMgPSBvcHRpb25zLmhlYWRlcnM7XG59XG5Db25uZWN0aW9uRXZlbnQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShFdmVudDEucHJvdG90eXBlKTtcbnZhciBXQUlUSU5HID0gLTE7XG52YXIgQ09OTkVDVElORyA9IDA7XG52YXIgT1BFTiA9IDE7XG52YXIgQ0xPU0VEID0gMjtcbnZhciBBRlRFUl9DUiA9IC0xO1xudmFyIEZJRUxEX1NUQVJUID0gMDtcbnZhciBGSUVMRCA9IDE7XG52YXIgVkFMVUVfU1RBUlQgPSAyO1xudmFyIFZBTFVFID0gMztcbnZhciBjb250ZW50VHlwZVJlZ0V4cCA9IC9edGV4dFxcL2V2ZW50XFwtc3RyZWFtOz8oXFxzKmNoYXJzZXRcXD11dGZcXC04KT8kL2k7XG52YXIgTUlOSU1VTV9EVVJBVElPTiA9IDEwMDA7XG52YXIgTUFYSU1VTV9EVVJBVElPTiA9IDE4MDAwMDAwO1xudmFyIHBhcnNlRHVyYXRpb24gPSBmdW5jdGlvbih2YWx1ZSwgZGVmKSB7XG4gICAgdmFyIG4gPSBwYXJzZUludCh2YWx1ZSwgMTApO1xuICAgIGlmIChuICE9PSBuKSB7XG4gICAgICAgIG4gPSBkZWY7XG4gICAgfVxuICAgIHJldHVybiBjbGFtcER1cmF0aW9uKG4pO1xufTtcbnZhciBjbGFtcER1cmF0aW9uID0gZnVuY3Rpb24obikge1xuICAgIHJldHVybiBNYXRoLm1pbihNYXRoLm1heChuLCBNSU5JTVVNX0RVUkFUSU9OKSwgTUFYSU1VTV9EVVJBVElPTik7XG59O1xudmFyIGZpcmUgPSBmdW5jdGlvbih0aGF0LCBmLCBldmVudCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmICh0eXBlb2YgZiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgZi5jYWxsKHRoYXQsIGV2ZW50KTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgdGhyb3dFcnJvcihlKTtcbiAgICB9XG59O1xuZnVuY3Rpb24gRXZlbnRTb3VyY2VQb2x5ZmlsbCh1cmwsIG9wdGlvbnMpIHtcbiAgICBFdmVudFRhcmdldDEuY2FsbCh0aGlzKTtcbiAgICB0aGlzLm9ub3BlbiA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9ubWVzc2FnZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLm9uZXJyb3IgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy51cmwgPSB1bmRlZmluZWQ7XG4gICAgdGhpcy5yZWFkeVN0YXRlID0gdW5kZWZpbmVkO1xuICAgIHRoaXMud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xuICAgIHRoaXMuX2Nsb3NlID0gdW5kZWZpbmVkO1xuICAgIHN0YXJ0KHRoaXMsIHVybCwgb3B0aW9ucyk7XG59XG52YXIgaXNGZXRjaFN1cHBvcnRlZCA9IGZldGNoICE9IHVuZGVmaW5lZCAmJiBSZXNwb25zZTEgIT0gdW5kZWZpbmVkICYmICdib2R5JyBpbiBSZXNwb25zZTEucHJvdG90eXBlO1xuZnVuY3Rpb24gc3RhcnQoZXMsIHVybCwgb3B0aW9ucykge1xuICAgIHVybCA9IFN0cmluZyh1cmwpO1xuICAgIHZhciB3aXRoQ3JlZGVudGlhbHMgPSBvcHRpb25zICE9IHVuZGVmaW5lZCAmJiBCb29sZWFuKG9wdGlvbnMud2l0aENyZWRlbnRpYWxzKTtcbiAgICB2YXIgaW5pdGlhbFJldHJ5ID0gY2xhbXBEdXJhdGlvbigxMDAwKTtcbiAgICB2YXIgaGVhcnRiZWF0VGltZW91dCA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCAhPSB1bmRlZmluZWQgPyBwYXJzZUR1cmF0aW9uKG9wdGlvbnMuaGVhcnRiZWF0VGltZW91dCwgNDUwMDApIDogY2xhbXBEdXJhdGlvbig0NTAwMCk7XG4gICAgdmFyIGxhc3RFdmVudElkID0gJyc7XG4gICAgdmFyIHJldHJ5ID0gaW5pdGlhbFJldHJ5O1xuICAgIHZhciB3YXNBY3Rpdml0eSA9IGZhbHNlO1xuICAgIHZhciBoZWFkZXJzMiA9IG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuaGVhZGVycyAhPSB1bmRlZmluZWQgPyBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KG9wdGlvbnMuaGVhZGVycykpIDogdW5kZWZpbmVkO1xuICAgIHZhciBDdXJyZW50VHJhbnNwb3J0ID0gb3B0aW9ucyAhPSB1bmRlZmluZWQgJiYgb3B0aW9ucy5UcmFuc3BvcnQgIT0gdW5kZWZpbmVkID8gb3B0aW9ucy5UcmFuc3BvcnQgOiBYTUxIdHRwUmVxdWVzdDtcbiAgICB2YXIgeGhyID0gaXNGZXRjaFN1cHBvcnRlZCAmJiAhKG9wdGlvbnMgIT0gdW5kZWZpbmVkICYmIG9wdGlvbnMuVHJhbnNwb3J0ICE9IHVuZGVmaW5lZCkgPyB1bmRlZmluZWQgOiBuZXcgWEhSV3JhcHBlcihuZXcgQ3VycmVudFRyYW5zcG9ydCgpKTtcbiAgICB2YXIgdHJhbnNwb3J0ID0geGhyID09IHVuZGVmaW5lZCA/IG5ldyBGZXRjaFRyYW5zcG9ydCgpIDogbmV3IFhIUlRyYW5zcG9ydCgpO1xuICAgIHZhciBjYW5jZWxGdW5jdGlvbiA9IHVuZGVmaW5lZDtcbiAgICB2YXIgdGltZW91dCA9IDA7XG4gICAgdmFyIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkc7XG4gICAgdmFyIGRhdGFCdWZmZXIgPSAnJztcbiAgICB2YXIgbGFzdEV2ZW50SWRCdWZmZXIgPSAnJztcbiAgICB2YXIgZXZlbnRUeXBlQnVmZmVyID0gJyc7XG4gICAgdmFyIHRleHRCdWZmZXIgPSAnJztcbiAgICB2YXIgc3RhdGUgPSBGSUVMRF9TVEFSVDtcbiAgICB2YXIgZmllbGRTdGFydCA9IDA7XG4gICAgdmFyIHZhbHVlU3RhcnQgPSAwO1xuICAgIHZhciBvblN0YXJ0ID0gZnVuY3Rpb24oc3RhdHVzLCBzdGF0dXNUZXh0LCBjb250ZW50VHlwZSwgaGVhZGVyczMsIGNhbmNlbCkge1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBDT05ORUNUSU5HKSB7XG4gICAgICAgICAgICBjYW5jZWxGdW5jdGlvbiA9IGNhbmNlbDtcbiAgICAgICAgICAgIGlmIChzdGF0dXMgPT09IDIwMCAmJiBjb250ZW50VHlwZSAhPSB1bmRlZmluZWQgJiYgY29udGVudFR5cGVSZWdFeHAudGVzdChjb250ZW50VHlwZSkpIHtcbiAgICAgICAgICAgICAgICBjdXJyZW50U3RhdGUgPSBPUEVOO1xuICAgICAgICAgICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeTtcbiAgICAgICAgICAgICAgICBlcy5yZWFkeVN0YXRlID0gT1BFTjtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdvcGVuJywge1xuICAgICAgICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1cyxcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzVGV4dDogc3RhdHVzVGV4dCxcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczogaGVhZGVyczNcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBlcy5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBmaXJlKGVzLCBlcy5vbm9wZW4sIGV2ZW50KTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIG1lc3NhZ2UgPSAnJztcbiAgICAgICAgICAgICAgICBpZiAoc3RhdHVzICE9PSAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHN0YXR1c1RleHQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQgPSBzdGF0dXNUZXh0LnJlcGxhY2UoL1xccysvZywgJyAnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIHN0YXR1cyBcIiArIHN0YXR1cyArICcgJyArIHN0YXR1c1RleHQgKyAnIHRoYXQgaXMgbm90IDIwMC4gQWJvcnRpbmcgdGhlIGNvbm5lY3Rpb24uJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlID0gXCJFdmVudFNvdXJjZSdzIHJlc3BvbnNlIGhhcyBhIENvbnRlbnQtVHlwZSBzcGVjaWZ5aW5nIGFuIHVuc3VwcG9ydGVkIHR5cGU6IFwiICsgKGNvbnRlbnRUeXBlID09IHVuZGVmaW5lZCA/ICctJyA6IGNvbnRlbnRUeXBlLnJlcGxhY2UoL1xccysvZywgJyAnKSkgKyAnLiBBYm9ydGluZyB0aGUgY29ubmVjdGlvbi4nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvd0Vycm9yKG5ldyBFcnJvcihtZXNzYWdlKSk7XG4gICAgICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgQ29ubmVjdGlvbkV2ZW50KCdlcnJvcicsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXMsXG4gICAgICAgICAgICAgICAgICAgIHN0YXR1c1RleHQ6IHN0YXR1c1RleHQsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IGhlYWRlcnMzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgZXMuZGlzcGF0Y2hFdmVudChldmVudCk7XG4gICAgICAgICAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25Qcm9ncmVzcyA9IGZ1bmN0aW9uKHRleHRDaHVuaykge1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlID09PSBPUEVOKSB7XG4gICAgICAgICAgICB2YXIgbiA9IC0xO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IHRleHRDaHVuay5sZW5ndGg7IGkgKz0gMSl7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSB0ZXh0Q2h1bmsuY2hhckNvZGVBdChpKTtcbiAgICAgICAgICAgICAgICBpZiAoYyA9PT0gJ1xcbicuY2hhckNvZGVBdCgwKSB8fCBjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciBjaHVuayA9IChuICE9PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UoMCwgbiArIDEpO1xuICAgICAgICAgICAgdGV4dEJ1ZmZlciA9IChuID09PSAtMSA/IHRleHRCdWZmZXIgOiAnJykgKyB0ZXh0Q2h1bmsuc2xpY2UobiArIDEpO1xuICAgICAgICAgICAgaWYgKGNodW5rICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHdhc0FjdGl2aXR5ID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvcih2YXIgcG9zaXRpb24gPSAwOyBwb3NpdGlvbiA8IGNodW5rLmxlbmd0aDsgcG9zaXRpb24gKz0gMSl7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBjaHVuay5jaGFyQ29kZUF0KHBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSICYmIGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgc3RhdGUgPSBGSUVMRF9TVEFSVDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEFGVEVSX0NSKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IEZJRUxEX1NUQVJUO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChjID09PSAnXFxyJy5jaGFyQ29kZUF0KDApIHx8IGMgPT09ICdcXG4nLmNoYXJDb2RlQXQoMCkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSAhPT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IGNodW5rLnNsaWNlKGZpZWxkU3RhcnQsIHZhbHVlU3RhcnQgLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBjaHVuay5zbGljZSh2YWx1ZVN0YXJ0ICsgKHZhbHVlU3RhcnQgPCBwb3NpdGlvbiAmJiBjaHVuay5jaGFyQ29kZUF0KHZhbHVlU3RhcnQpID09PSAnICcuY2hhckNvZGVBdCgwKSA/IDEgOiAwKSwgcG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZCA9PT0gJ2RhdGEnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gJ1xcbic7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgKz0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ2lkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZEJ1ZmZlciA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGQgPT09ICdldmVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnRUeXBlQnVmZmVyID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChmaWVsZCA9PT0gJ3JldHJ5Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbml0aWFsUmV0cnkgPSBwYXJzZUR1cmF0aW9uKHZhbHVlLCBpbml0aWFsUmV0cnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXRyeSA9IGluaXRpYWxSZXRyeTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkID09PSAnaGVhcnRiZWF0VGltZW91dCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVhcnRiZWF0VGltZW91dCA9IHBhcnNlRHVyYXRpb24odmFsdWUsIGhlYXJ0YmVhdFRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dCA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgb25UaW1lb3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzdGF0ZSA9PT0gRklFTERfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YUJ1ZmZlciAhPT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFzdEV2ZW50SWQgPSBsYXN0RXZlbnRJZEJ1ZmZlcjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50VHlwZUJ1ZmZlciA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50VHlwZUJ1ZmZlciA9ICdtZXNzYWdlJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXZlbnQgPSBuZXcgTWVzc2FnZUV2ZW50MShldmVudFR5cGVCdWZmZXIsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IGRhdGFCdWZmZXIuc2xpY2UoMSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0RXZlbnRJZDogbGFzdEV2ZW50SWRCdWZmZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXZlbnRUeXBlQnVmZmVyID09PSAnbWVzc2FnZScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZpcmUoZXMsIGVzLm9ubWVzc2FnZSwgZXZlbnQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjdXJyZW50U3RhdGUgPT09IENMT1NFRCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGFCdWZmZXIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gYyA9PT0gJ1xccicuY2hhckNvZGVBdCgwKSA/IEFGVEVSX0NSIDogRklFTERfU1RBUlQ7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEX1NUQVJUKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRTdGFydCA9IHBvc2l0aW9uO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gRklFTEQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc3RhdGUgPT09IEZJRUxEKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGMgPT09ICc6Jy5jaGFyQ29kZUF0KDApKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlU3RhcnQgPSBwb3NpdGlvbiArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlID0gVkFMVUVfU1RBUlQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzdGF0ZSA9PT0gVkFMVUVfU1RBUlQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZSA9IFZBTFVFO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgb25GaW5pc2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGN1cnJlbnRTdGF0ZSA9PT0gT1BFTiB8fCBjdXJyZW50U3RhdGUgPT09IENPTk5FQ1RJTkcpIHtcbiAgICAgICAgICAgIGN1cnJlbnRTdGF0ZSA9IFdBSVRJTkc7XG4gICAgICAgICAgICBpZiAodGltZW91dCAhPT0gMCkge1xuICAgICAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgICAgICB0aW1lb3V0ID0gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICAgICAgfSwgcmV0cnkpO1xuICAgICAgICAgICAgcmV0cnkgPSBjbGFtcER1cmF0aW9uKE1hdGgubWluKGluaXRpYWxSZXRyeSAqIDE2LCByZXRyeSAqIDIpKTtcbiAgICAgICAgICAgIGVzLnJlYWR5U3RhdGUgPSBDT05ORUNUSU5HO1xuICAgICAgICAgICAgdmFyIGV2ZW50ID0gbmV3IEV2ZW50MSgnZXJyb3InKTtcbiAgICAgICAgICAgIGVzLmRpc3BhdGNoRXZlbnQoZXZlbnQpO1xuICAgICAgICAgICAgZmlyZShlcywgZXMub25lcnJvciwgZXZlbnQpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICB2YXIgY2xvc2UgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gQ0xPU0VEO1xuICAgICAgICBpZiAoY2FuY2VsRnVuY3Rpb24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBjYW5jZWxGdW5jdGlvbigpO1xuICAgICAgICAgICAgY2FuY2VsRnVuY3Rpb24gPSB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRpbWVvdXQgIT09IDApIHtcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICAgICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICB9XG4gICAgICAgIGVzLnJlYWR5U3RhdGUgPSBDTE9TRUQ7XG4gICAgfTtcbiAgICB2YXIgb25UaW1lb3V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHRpbWVvdXQgPSAwO1xuICAgICAgICBpZiAoY3VycmVudFN0YXRlICE9PSBXQUlUSU5HKSB7XG4gICAgICAgICAgICBpZiAoIXdhc0FjdGl2aXR5ICYmIGNhbmNlbEZ1bmN0aW9uICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRocm93RXJyb3IobmV3IEVycm9yKCdObyBhY3Rpdml0eSB3aXRoaW4gJyArIGhlYXJ0YmVhdFRpbWVvdXQgKyAnIG1pbGxpc2Vjb25kcy4gUmVjb25uZWN0aW5nLicpKTtcbiAgICAgICAgICAgICAgICBjYW5jZWxGdW5jdGlvbigpO1xuICAgICAgICAgICAgICAgIGNhbmNlbEZ1bmN0aW9uID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICBvblRpbWVvdXQoKTtcbiAgICAgICAgICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3YXNBY3Rpdml0eSA9IGZhbHNlO1xuICAgICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIG9uVGltZW91dCgpO1xuICAgICAgICB9LCBoZWFydGJlYXRUaW1lb3V0KTtcbiAgICAgICAgY3VycmVudFN0YXRlID0gQ09OTkVDVElORztcbiAgICAgICAgZGF0YUJ1ZmZlciA9ICcnO1xuICAgICAgICBldmVudFR5cGVCdWZmZXIgPSAnJztcbiAgICAgICAgbGFzdEV2ZW50SWRCdWZmZXIgPSBsYXN0RXZlbnRJZDtcbiAgICAgICAgdGV4dEJ1ZmZlciA9ICcnO1xuICAgICAgICBmaWVsZFN0YXJ0ID0gMDtcbiAgICAgICAgdmFsdWVTdGFydCA9IDA7XG4gICAgICAgIHN0YXRlID0gRklFTERfU1RBUlQ7XG4gICAgICAgIC8vIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQyODkxNlxuICAgICAgICAvLyBSZXF1ZXN0IGhlYWRlciBmaWVsZCBMYXN0LUV2ZW50LUlEIGlzIG5vdCBhbGxvd2VkIGJ5IEFjY2Vzcy1Db250cm9sLUFsbG93LUhlYWRlcnMuXG4gICAgICAgIHZhciByZXF1ZXN0VVJMID0gdXJsO1xuICAgICAgICBpZiAodXJsLnNsaWNlKDAsIDUpICE9PSAnZGF0YTonICYmIHVybC5zbGljZSgwLCA1KSAhPT0gJ2Jsb2I6Jykge1xuICAgICAgICAgICAgaWYgKGxhc3RFdmVudElkICE9PSAnJykge1xuICAgICAgICAgICAgICAgIHJlcXVlc3RVUkwgKz0gKHVybC5pbmRleE9mKCc/JykgPT09IC0xID8gJz8nIDogJyYnKSArICdsYXN0RXZlbnRJZD0nICsgZW5jb2RlVVJJQ29tcG9uZW50KGxhc3RFdmVudElkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB2YXIgcmVxdWVzdEhlYWRlcnMgPSB7XG4gICAgICAgIH07XG4gICAgICAgIHJlcXVlc3RIZWFkZXJzWydBY2NlcHQnXSA9ICd0ZXh0L2V2ZW50LXN0cmVhbSc7XG4gICAgICAgIGlmIChoZWFkZXJzMiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGZvcih2YXIgbmFtZSBpbiBoZWFkZXJzMil7XG4gICAgICAgICAgICAgICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChoZWFkZXJzMiwgbmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEhlYWRlcnNbbmFtZV0gPSBoZWFkZXJzMltuYW1lXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHRyYW5zcG9ydC5vcGVuKHhociwgb25TdGFydCwgb25Qcm9ncmVzcywgb25GaW5pc2gsIHJlcXVlc3RVUkwsIHdpdGhDcmVkZW50aWFscywgcmVxdWVzdEhlYWRlcnMpO1xuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgY2xvc2UoKTtcbiAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBlcy51cmwgPSB1cmw7XG4gICAgZXMucmVhZHlTdGF0ZSA9IENPTk5FQ1RJTkc7XG4gICAgZXMud2l0aENyZWRlbnRpYWxzID0gd2l0aENyZWRlbnRpYWxzO1xuICAgIGVzLl9jbG9zZSA9IGNsb3NlO1xuICAgIG9uVGltZW91dCgpO1xufVxuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKEV2ZW50VGFyZ2V0MS5wcm90b3R5cGUpO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUuQ09OTkVDVElORyA9IENPTk5FQ1RJTkc7XG5FdmVudFNvdXJjZVBvbHlmaWxsLnByb3RvdHlwZS5PUEVOID0gT1BFTjtcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLkNMT1NFRCA9IENMT1NFRDtcbkV2ZW50U291cmNlUG9seWZpbGwucHJvdG90eXBlLmNsb3NlID0gZnVuY3Rpb24oKSB7XG4gICAgdGhpcy5fY2xvc2UoKTtcbn07XG5FdmVudFNvdXJjZVBvbHlmaWxsLkNPTk5FQ1RJTkcgPSBDT05ORUNUSU5HO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5PUEVOID0gT1BFTjtcbkV2ZW50U291cmNlUG9seWZpbGwuQ0xPU0VEID0gQ0xPU0VEO1xuRXZlbnRTb3VyY2VQb2x5ZmlsbC5wcm90b3R5cGUud2l0aENyZWRlbnRpYWxzID0gdW5kZWZpbmVkO1xudmFyIF9kZWZhdWx0ID0gRXZlbnRTb3VyY2VQb2x5ZmlsbDtcbmV4cG9ydHMuZGVmYXVsdCA9IF9kZWZhdWx0O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1ldmVudC1zb3VyY2UtcG9seWZpbGwuanMubWFwIiwiXCJ1c2Ugc3RyaWN0XCI7XG5PYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgXCJfX2VzTW9kdWxlXCIsIHtcbiAgICB2YWx1ZTogdHJ1ZVxufSk7XG5leHBvcnRzLmRpc3BsYXlDb250ZW50ID0gZGlzcGxheUNvbnRlbnQ7XG5mdW5jdGlvbiBkaXNwbGF5Q29udGVudChjYWxsYmFjaykge1xuICAgICh3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lIHx8IHNldFRpbWVvdXQpKGZ1bmN0aW9uKCkge1xuICAgICAgICBmb3IodmFyIHggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uZXh0LWhpZGUtZm91Y10nKSwgaSA9IHgubGVuZ3RoOyBpLS07KXtcbiAgICAgICAgICAgIHhbaV0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh4W2ldKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Zm91Yy5qcy5tYXAiLCJcInVzZSBzdHJpY3RcIjtcbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBcIl9fZXNNb2R1bGVcIiwge1xuICAgIHZhbHVlOiB0cnVlXG59KTtcbmV4cG9ydHMuY2xvc2VQaW5nID0gY2xvc2VQaW5nO1xuZXhwb3J0cy5zZXR1cFBpbmcgPSBzZXR1cFBpbmc7XG5leHBvcnRzLmN1cnJlbnRQYWdlID0gdm9pZCAwO1xudmFyIF9ldmVudHNvdXJjZSA9IHJlcXVpcmUoXCIuL2Vycm9yLW92ZXJsYXkvZXZlbnRzb3VyY2VcIik7XG5sZXQgZXZ0U291cmNlO1xubGV0IGN1cnJlbnRQYWdlO1xuZXhwb3J0cy5jdXJyZW50UGFnZSA9IGN1cnJlbnRQYWdlO1xuZnVuY3Rpb24gY2xvc2VQaW5nKCkge1xuICAgIGlmIChldnRTb3VyY2UpIGV2dFNvdXJjZS5jbG9zZSgpO1xuICAgIGV2dFNvdXJjZSA9IG51bGw7XG59XG5mdW5jdGlvbiBzZXR1cFBpbmcoYXNzZXRQcmVmaXgsIHBhdGhuYW1lRm4sIHJldHJ5KSB7XG4gICAgY29uc3QgcGF0aG5hbWUgPSBwYXRobmFtZUZuKCk7XG4gICAgLy8gTWFrZSBzdXJlIHRvIG9ubHkgY3JlYXRlIG5ldyBFdmVudFNvdXJjZSByZXF1ZXN0IGlmIHBhZ2UgaGFzIGNoYW5nZWRcbiAgICBpZiAocGF0aG5hbWUgPT09IGN1cnJlbnRQYWdlICYmICFyZXRyeSkgcmV0dXJuO1xuICAgIGV4cG9ydHMuY3VycmVudFBhZ2UgPSBjdXJyZW50UGFnZSA9IHBhdGhuYW1lO1xuICAgIC8vIGNsb3NlIGN1cnJlbnQgRXZlbnRTb3VyY2UgY29ubmVjdGlvblxuICAgIGNsb3NlUGluZygpO1xuICAgIGV2dFNvdXJjZSA9ICgwLCBfZXZlbnRzb3VyY2UpLmdldEV2ZW50U291cmNlV3JhcHBlcih7XG4gICAgICAgIHBhdGg6IGAke2Fzc2V0UHJlZml4fS9fbmV4dC93ZWJwYWNrLWhtcj9wYWdlPSR7Y3VycmVudFBhZ2V9YCxcbiAgICAgICAgdGltZW91dDogNTAwMFxuICAgIH0pO1xuICAgIGV2dFNvdXJjZS5hZGRNZXNzYWdlTGlzdGVuZXIoKGV2ZW50KT0+e1xuICAgICAgICBpZiAoZXZlbnQuZGF0YS5pbmRleE9mKCd7JykgPT09IC0xKSByZXR1cm47XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCBwYXlsb2FkID0gSlNPTi5wYXJzZShldmVudC5kYXRhKTtcbiAgICAgICAgICAgIGlmIChwYXlsb2FkLmludmFsaWQpIHtcbiAgICAgICAgICAgICAgICAvLyBQYXlsb2FkIGNhbiBiZSBpbnZhbGlkIGV2ZW4gaWYgdGhlIHBhZ2UgZG9lcyBub3QgZXhpc3QuXG4gICAgICAgICAgICAgICAgLy8gU28sIHdlIG5lZWQgdG8gbWFrZSBzdXJlIGl0IGV4aXN0cyBiZWZvcmUgcmVsb2FkaW5nLlxuICAgICAgICAgICAgICAgIGZldGNoKGxvY2F0aW9uLmhyZWYsIHtcbiAgICAgICAgICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidcbiAgICAgICAgICAgICAgICB9KS50aGVuKChwYWdlUmVzKT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAocGFnZVJlcy5zdGF0dXMgPT09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdvbi1kZW1hbmQtZW50cmllcyBmYWlsZWQgdG8gcGFyc2UgcmVzcG9uc2UnLCBlcnIpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPW9uLWRlbWFuZC1lbnRyaWVzLXV0aWxzLmpzLm1hcCJdLCJuYW1lcyI6WyJfZXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9pbnRlcm9wUmVxdWlyZURlZmF1bHQiLCJyZXF1aXJlIiwiX2V2ZW50c291cmNlIiwiX29uRGVtYW5kRW50cmllc1V0aWxzIiwiX2ZvdWMiLCJhc3luY0dlbmVyYXRvclN0ZXAiLCJnZW4iLCJyZXNvbHZlIiwicmVqZWN0IiwiX25leHQiLCJfdGhyb3ciLCJrZXkiLCJhcmciLCJpbmZvIiwidmFsdWUiLCJlcnJvciIsImRvbmUiLCJQcm9taXNlIiwidGhlbiIsIl9hc3luY1RvR2VuZXJhdG9yIiwiZm4iLCJzZWxmIiwiYXJncyIsImFyZ3VtZW50cyIsImFwcGx5IiwiZXJyIiwidW5kZWZpbmVkIiwib2JqIiwiX19lc01vZHVsZSIsImRlZmF1bHQiLCJ3aW5kb3ciLCJFdmVudFNvdXJjZSIsImRhdGEiLCJKU09OIiwicGFyc2UiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidGV4dENvbnRlbnQiLCJhc3NldFByZWZpeCIsInBhZ2UiLCJtb3N0UmVjZW50SGFzaCIsImN1ckhhc2giLCJfX3dlYnBhY2tfaGFzaF9fIiwiaG90VXBkYXRlUGF0aCIsImVuZHNXaXRoIiwiaXNVcGRhdGVBdmFpbGFibGUiLCJjYW5BcHBseVVwZGF0ZXMiLCJtb2R1bGUiLCJob3QiLCJzdGF0dXMiLCJfdHJ5QXBwbHlVcGRhdGVzIiwicmVzIiwiZmV0Y2giLCJfX3dlYnBhY2tfcnVudGltZV9pZF9fIiwianNvbkRhdGEiLCJqc29uIiwiY3VyUGFnZSIsInBhZ2VVcGRhdGVkIiwiQXJyYXkiLCJpc0FycmF5IiwiYyIsIk9iamVjdCIsImtleXMiLCJzb21lIiwibW9kIiwiaW5kZXhPZiIsInN1YnN0ciIsInJlcGxhY2UiLCJsb2NhdGlvbiIsInJlbG9hZCIsImNvbnNvbGUiLCJ0cnlBcHBseVVwZGF0ZXMiLCJhZGRNZXNzYWdlTGlzdGVuZXIiLCJldmVudCIsIm1lc3NhZ2UiLCJhY3Rpb24iLCJoYXNoIiwiZXgiLCJ3YXJuIiwic2V0dXBQaW5nIiwiZGlzcGxheUNvbnRlbnQiLCJkZWZpbmVQcm9wZXJ0eSIsImV4cG9ydHMiLCJnZXRFdmVudFNvdXJjZVdyYXBwZXIiLCJldmVudENhbGxiYWNrcyIsIkV2ZW50U291cmNlV3JhcHBlciIsIm9wdGlvbnMiLCJzb3VyY2UiLCJsYXN0QWN0aXZpdHkiLCJEYXRlIiwibGlzdGVuZXJzIiwidGltZW91dCIsImluaXQiLCJ0aW1lciIsInNldEludGVydmFsIiwiaGFuZGxlRGlzY29ubmVjdCIsInBhdGgiLCJvbm9wZW4iLCJoYW5kbGVPbmxpbmUiLCJvbmVycm9yIiwib25tZXNzYWdlIiwiaGFuZGxlTWVzc2FnZSIsImxvZyIsImkiLCJsZW5ndGgiLCJmb3JFYWNoIiwiY2IiLCJ1bmZpbHRlcmVkIiwiY2xlYXJJbnRlcnZhbCIsImNsb3NlIiwic2V0VGltZW91dCIsInB1c2giLCJSZXNwb25zZTEiLCJSZXNwb25zZSIsIlRleHREZWNvZGVyMSIsIlRleHREZWNvZGVyIiwiVGV4dEVuY29kZXIxIiwiVGV4dEVuY29kZXIiLCJBYm9ydENvbnRyb2xsZXIxIiwiQWJvcnRDb250cm9sbGVyIiwic2lnbmFsIiwiYWJvcnQiLCJUZXh0RGVjb2RlclBvbHlmaWxsIiwiYml0c05lZWRlZCIsImNvZGVQb2ludCIsInByb3RvdHlwZSIsImRlY29kZSIsIm9jdGV0cyIsInZhbGlkIiwic2hpZnQiLCJvY3RldHNDb3VudCIsIkVycm9yIiwiUkVQTEFDRVIiLCJzdHJpbmciLCJvY3RldCIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsInN1cHBvcnRzU3RyZWFtT3B0aW9uIiwiZW5jb2RlIiwic3RyZWFtIiwiayIsIlhIUldyYXBwZXIiLCJ4aHIiLCJ3aXRoQ3JlZGVudGlhbHMiLCJyZXNwb25zZVR5cGUiLCJyZWFkeVN0YXRlIiwic3RhdHVzVGV4dCIsInJlc3BvbnNlVGV4dCIsIm9ucHJvZ3Jlc3MiLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJfY29udGVudFR5cGUiLCJfeGhyIiwiX3NlbmRUaW1lb3V0IiwiX2Fib3J0Iiwib3BlbiIsIm1ldGhvZCIsInVybCIsInRoYXQiLCJzdGF0ZSIsInNpbGVudCIsImNsZWFyVGltZW91dCIsIm9ubG9hZCIsIm9uYWJvcnQiLCJvblN0YXJ0IiwiY29udGVudFR5cGUiLCJnZXRSZXNwb25zZUhlYWRlciIsIm9uUHJvZ3Jlc3MiLCJvbkZpbmlzaCIsIm9uUmVhZHlTdGF0ZUNoYW5nZSIsIm9uVGltZW91dCIsIlhNTEh0dHBSZXF1ZXN0IiwibmFtZSIsInNldFJlcXVlc3RIZWFkZXIiLCJnZXRBbGxSZXNwb25zZUhlYWRlcnMiLCJzZW5kIiwiZXJyb3IxIiwidG9Mb3dlckNhc2UiLCJjaGFyQ29kZUF0IiwiSGVhZGVyc1BvbHlmaWxsIiwiYWxsIiwibWFwIiwiY3JlYXRlIiwiYXJyYXkiLCJzcGxpdCIsImxpbmUiLCJwYXJ0cyIsImpvaW4iLCJfbWFwIiwiZ2V0IiwiWEhSVHJhbnNwb3J0Iiwib25TdGFydENhbGxiYWNrIiwib25Qcm9ncmVzc0NhbGxiYWNrIiwib25GaW5pc2hDYWxsYmFjayIsImhlYWRlcnMiLCJvZmZzZXQiLCJjaHVuayIsInNsaWNlIiwiaGVhZGVyczEiLCJoYXNPd25Qcm9wZXJ0eSIsImNhbGwiLCJIZWFkZXJzV3JhcHBlciIsImhlYWRlcnMyIiwiX2hlYWRlcnMiLCJGZXRjaFRyYW5zcG9ydCIsImNvbnRyb2xsZXIiLCJ0ZXh0RGVjb2RlciIsImNyZWRlbnRpYWxzIiwiY2FjaGUiLCJyZXNwb25zZSIsInJlYWRlciIsImJvZHkiLCJnZXRSZWFkZXIiLCJjYW5jZWwiLCJyZWFkTmV4dENodW5rIiwicmVhZCIsInJlc3VsdCIsIkV2ZW50VGFyZ2V0MSIsIl9saXN0ZW5lcnMiLCJ0aHJvd0Vycm9yIiwiZSIsImRpc3BhdGNoRXZlbnQiLCJ0YXJnZXQiLCJ0eXBlTGlzdGVuZXJzIiwidHlwZSIsImxpc3RlbmVyIiwiaGFuZGxlRXZlbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiZm91bmQiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZmlsdGVyZWQiLCJFdmVudDEiLCJNZXNzYWdlRXZlbnQxIiwibGFzdEV2ZW50SWQiLCJDb25uZWN0aW9uRXZlbnQiLCJXQUlUSU5HIiwiQ09OTkVDVElORyIsIk9QRU4iLCJDTE9TRUQiLCJBRlRFUl9DUiIsIkZJRUxEX1NUQVJUIiwiRklFTEQiLCJWQUxVRV9TVEFSVCIsIlZBTFVFIiwiY29udGVudFR5cGVSZWdFeHAiLCJNSU5JTVVNX0RVUkFUSU9OIiwiTUFYSU1VTV9EVVJBVElPTiIsInBhcnNlRHVyYXRpb24iLCJkZWYiLCJuIiwicGFyc2VJbnQiLCJjbGFtcER1cmF0aW9uIiwiTWF0aCIsIm1pbiIsIm1heCIsImZpcmUiLCJmIiwiRXZlbnRTb3VyY2VQb2x5ZmlsbCIsIl9jbG9zZSIsInN0YXJ0IiwiaXNGZXRjaFN1cHBvcnRlZCIsImVzIiwiQm9vbGVhbiIsImluaXRpYWxSZXRyeSIsImhlYXJ0YmVhdFRpbWVvdXQiLCJyZXRyeSIsIndhc0FjdGl2aXR5Iiwic3RyaW5naWZ5IiwiQ3VycmVudFRyYW5zcG9ydCIsIlRyYW5zcG9ydCIsInRyYW5zcG9ydCIsImNhbmNlbEZ1bmN0aW9uIiwiY3VycmVudFN0YXRlIiwiZGF0YUJ1ZmZlciIsImxhc3RFdmVudElkQnVmZmVyIiwiZXZlbnRUeXBlQnVmZmVyIiwidGV4dEJ1ZmZlciIsImZpZWxkU3RhcnQiLCJ2YWx1ZVN0YXJ0IiwiaGVhZGVyczMiLCJ0ZXN0IiwidGV4dENodW5rIiwicG9zaXRpb24iLCJmaWVsZCIsInJlcXVlc3RVUkwiLCJlbmNvZGVVUklDb21wb25lbnQiLCJyZXF1ZXN0SGVhZGVycyIsIl9kZWZhdWx0IiwiY2FsbGJhY2siLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJ4IiwicXVlcnlTZWxlY3RvckFsbCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNsb3NlUGluZyIsImN1cnJlbnRQYWdlIiwiZXZ0U291cmNlIiwicGF0aG5hbWVGbiIsInBhdGhuYW1lIiwicGF5bG9hZCIsImludmFsaWQiLCJocmVmIiwicGFnZVJlcyJdLCJzb3VyY2VSb290IjoiIn0=