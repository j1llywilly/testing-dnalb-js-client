// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"hvnX8":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "6e0a8f0de93c85ca";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"leZCY":[function(require,module,exports) {
var _indexJs = require("../dist/lib/es5/index.js");
// Example usage
document.addEventListener("DOMContentLoaded", async ()=>{
    document.getElementById("btn").addEventListener("click", async ()=>{
        // it has to initialize after a user gesture
        const sdk = new (0, _indexJs.BlandWebClient)("46f37229-7d12-44be-b343-6e68274cfbea", "bb26f357-660a-462e-8bac-49fc30a578fb");
        await sdk.initConversation({
            callId: "test",
            sampleRate: 48000
        });
    });
});

},{"../dist/lib/es5/index.js":"2wG3U"}],"2wG3U":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlandWebClient = void 0;
var BlandClient_1 = require("f2e95d1bf8cc31d0");
Object.defineProperty(exports, "BlandWebClient", {
    enumerable: true,
    get: function() {
        return BlandClient_1.BlandWebClient;
    }
});

},{"f2e95d1bf8cc31d0":"aBY79"}],"aBY79":[function(require,module,exports) {
"use strict";
var __extends = this && this.__extends || function() {
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || ({
            __proto__: []
        }) instanceof Array && function(d, b) {
            d.__proto__ = b;
        } || function(d, b) {
            for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
        return extendStatics(d, b);
    };
    return function(d, b) {
        if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
}();
var __awaiter = this && this.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = this && this.__generator || function(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.BlandWebClient = void 0;
var eventemitter3_1 = require("cc804616da9a4908");
var isomorphic_ws_1 = require("58aa156552e0aa08");
var audioWorklet_1 = require("42dcabe6bf549f2d");
// if prod needs to be secure -> wss; if dev -> ws;
var baseEndpoint = "ws://localhost:3000";
function convertUint8ToFloat32(array) {
    var targetArray = new Float32Array(array.byteLength / 2);
    // A DataView is used to read our 16-bit little-endian samples out of the Uint8Array buffer
    var sourceDataView = new DataView(array.buffer);
    // Loop through, get values, and divide by 32,768
    for(var i = 0; i < targetArray.length; i++)targetArray[i] = sourceDataView.getInt16(i * 2, true) / Math.pow(2, 15);
    return targetArray;
}
function convertFloat32ToUint8(array) {
    var buffer = new ArrayBuffer(array.length * 2);
    var view = new DataView(buffer);
    for(var i = 0; i < array.length; i++){
        var value = array[i] * 32768;
        view.setInt16(i * 2, value, true); // true for little-endian
    }
    return new Uint8Array(buffer);
}
var AudioWsClient = /** @class */ function(_super) {
    __extends(AudioWsClient, _super);
    function AudioWsClient(audioWsConfig) {
        var _this = _super.call(this) || this;
        _this.pingTimeout = null;
        _this.pingInterval = null;
        _this.wasDisconnected = false;
        _this.pingIntervalTime = 5000;
        _this.audioIndex = 0;
        console.log({
            baseEndpoint: baseEndpoint
        });
        var endpoint = baseEndpoint + "?agent=".concat(audioWsConfig.agentId, "&token=").concat(audioWsConfig.sessionToken);
        console.log({
            endpoint: endpoint
        });
        _this.ws = new isomorphic_ws_1.default(endpoint);
        _this.ws.binaryType = "arraybuffer";
        _this.ws.onopen = function() {
            _this.emit("open");
        };
        _this.ws.onmessage = function(event) {
            console.log({
                event: event
            });
            if (typeof event.data === "string" && event.data === "pong") _this.resetPingTimeout();
            else if (event.data instanceof ArrayBuffer) {
                var audioData = new Uint8Array(event.data);
                _this.emit("audio", audioData);
            } else if (typeof event.data === "string") _this.emit("audio", event.data);
        };
        _this.ws.onclose = function(event) {
            _this.emit("close", event);
        };
        _this.ws.onerror = function(event) {
            _this.emit("error", event);
        };
        return _this;
    }
    AudioWsClient.prototype.startPingPong = function() {
        var _this = this;
        this.pingInterval = setInterval(function() {
            return _this.sendPing();
        }, this.pingIntervalTime);
        this.resetPingTimeout();
    };
    AudioWsClient.prototype.sendPing = function() {
        if (this.ws.readyState === WebSocket.OPEN) this.ws.send("message", "ping");
    };
    AudioWsClient.prototype.resetPingTimeout = function() {
        var _this = this;
        if (this.pingTimeout != null) clearTimeout(this.pingTimeout);
        this.pingTimeout = setTimeout(function() {
            if (_this.pingIntervalTime === 5000) {
                _this.adjustPingFrequency(1000);
                _this.pingTimeout = setTimeout(function() {
                    _this.emit("disconnect");
                    _this.wasDisconnected = true;
                }, 3000);
            }
        }, this.pingIntervalTime);
    };
    AudioWsClient.prototype.adjustPingFrequency = function(newInterval) {
        if (this.pingIntervalTime !== newInterval) {
            if (this.pingInterval != null) clearInterval(this.pingInterval);
            this.pingIntervalTime = newInterval;
            this.startPingPong();
        }
    };
    // sendBase64(audio: string) {
    //     if (this.ws.readyState === 1) {
    //         this.audioIndex++;
    //         this.ws.send({
    //             type: 'utf8',
    //             utf8Data: JSON.stringify({
    //                 event: "media",
    //                 sequenceNumber: this.audioIndex,
    //                 media: {
    //                     track: "outbound",
    //                     payload: audio
    //                 }
    //             })
    //         });
    //     };
    // };
    AudioWsClient.prototype.send = function(audio) {
        if (this.ws.readyState === 1) this.ws.send(audio);
    };
    AudioWsClient.prototype.close = function() {
        this.ws.close();
    };
    return AudioWsClient;
}(eventemitter3_1.EventEmitter);
var BlandWebClient = /** @class */ function(_super) {
    __extends(BlandWebClient, _super);
    function BlandWebClient(agentId, sessionToken, customEndpoint) {
        var _this = _super.call(this) || this;
        _this.isCalling = false;
        // Others
        _this.captureNode = null;
        _this.audioData = [];
        _this.audioDataIndex = 0;
        _this.isTalking = false;
        if (customEndpoint) _this.customEndpoint = customEndpoint;
        _this.agentId = agentId;
        _this.sessionToken = sessionToken;
        return _this;
    }
    // bland initialize();
    BlandWebClient.prototype.initConversation = function(config) {
        return __awaiter(this, void 0, void 0, function() {
            var error_1;
            return __generator(this, function(_a) {
                switch(_a.label){
                    case 0:
                        _a.trys.push([
                            0,
                            2,
                            ,
                            3
                        ]);
                        return [
                            4 /*yield*/ ,
                            this.setupAudioPlayback(config.sampleRate, config.customStream)
                        ];
                    case 1:
                        _a.sent();
                        console.log("AUDIO PLAYBACK SETUP");
                        this.liveClient = new AudioWsClient({
                            callId: "test",
                            customEndpoint: this.customEndpoint,
                            agentId: this.agentId,
                            sessionToken: this.sessionToken
                        });
                        console.log({
                            client: this.liveClient
                        });
                        this.handleAudioEvents();
                        this.isCalling = true;
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 2:
                        error_1 = _a.sent();
                        this.emit("Error", error_1.message);
                        return [
                            3 /*break*/ ,
                            3
                        ];
                    case 3:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    BlandWebClient.prototype.stopConversation = function() {
        var _a, _b, _c, _d, _e;
        this.isCalling = false;
        (_a = this.liveClient) === null || _a === void 0 || _a.close();
        (_b = this.audioContext) === null || _b === void 0 || _b.suspend();
        (_c = this.audioContext) === null || _c === void 0 || _c.close(); // Properly close the audio context to release system audio resources
        if (this.isAudioWorkletSupported()) {
            (_d = this.audioNode) === null || _d === void 0 || _d.disconnect();
            this.audioNode = null; // Prevent memory leak by detaching the event handler
        } else if (this.captureNode) {
            this.captureNode.disconnect();
            this.captureNode.onaudioprocess = null; // Prevent memory leak by detaching the event handler
            this.captureNode = null;
            this.audioData = [];
            this.audioDataIndex = 0;
        }
        // Release references to allow for garbage collection
        this.liveClient = null;
        (_e = this.stream) === null || _e === void 0 || _e.getTracks().forEach(function(track) {
            return track.stop();
        });
        this.audioContext = null;
        this.stream = null;
    };
    BlandWebClient.prototype.setupAudioPlayback = function(sampleRate, customStream) {
        return __awaiter(this, void 0, void 0, function() {
            var _a, _b, error_2, blob, blobUrl, source, source;
            var _this = this;
            return __generator(this, function(_c) {
                switch(_c.label){
                    case 0:
                        this.audioContext = new AudioContext({
                            sampleRate: sampleRate
                        });
                        _c.label = 1;
                    case 1:
                        _c.trys.push([
                            1,
                            4,
                            ,
                            5
                        ]);
                        // get microphone access;
                        _a = this;
                        _b = customStream;
                        if (_b) return [
                            3 /*break*/ ,
                            3
                        ];
                        return [
                            4 /*yield*/ ,
                            navigator.mediaDevices.getUserMedia({
                                audio: {
                                    sampleRate: sampleRate,
                                    echoCancellation: true,
                                    noiseSuppression: true,
                                    channelCount: 1
                                }
                            })
                        ];
                    case 2:
                        _b = _c.sent();
                        _c.label = 3;
                    case 3:
                        // get microphone access;
                        _a.stream = _b;
                        this.liveClient = new AudioWsClient({
                            callId: "test",
                            agentId: this.agentId,
                            sessionToken: this.sessionToken
                        });
                        this.handleAudioEvents();
                        this.isCalling = true;
                        return [
                            3 /*break*/ ,
                            5
                        ];
                    case 4:
                        error_2 = _c.sent();
                        throw new Error("User rejected microphone access");
                    case 5:
                        if (!this.isAudioWorkletSupported()) return [
                            3 /*break*/ ,
                            7
                        ];
                        console.log({
                            type: "log",
                            message: "Audio worklet starting"
                        });
                        this.audioContext.resume();
                        blob = new Blob([
                            audioWorklet_1.workletCode
                        ], {
                            type: "application/javascript"
                        });
                        blobUrl = URL.createObjectURL(blob);
                        console.log({
                            blobUrl: blobUrl
                        });
                        return [
                            4 /*yield*/ ,
                            this.audioContext.audioWorklet.addModule(blobUrl)
                        ];
                    case 6:
                        _c.sent();
                        this.audioNode = new AudioWorkletNode(this.audioContext, "capture-and-playback-processor");
                        console.log({
                            type: "log",
                            message: "Audio Worklet Loaded & Setup"
                        });
                        this.audioNode.port.onmessage = function(event) {
                            var _a;
                            var data = event.data;
                            //console.log({data, foo:"audioNode"})
                            if (Array.isArray(data)) {
                                var eventName = data[0];
                                if (eventName === "capture") //console.log("sending data");
                                (_a = _this.liveClient) === null || _a === void 0 || _a.send(data[1]);
                                else if (eventName === "playback") _this.emit("audio", data[1]);
                            } else {
                                if (data === "agent_stop_talking") _this.emit("agentStopTalking");
                                else if (data === "agent_start_talking") _this.emit("agentStartTalking");
                            }
                        };
                        source = this.audioContext.createMediaStreamSource(this.stream);
                        source.connect(this.audioNode);
                        this.audioNode.connect(this.audioContext.destination);
                        return [
                            3 /*break*/ ,
                            8
                        ];
                    case 7:
                        source = this.audioContext.createMediaStreamSource(this.stream);
                        this.captureNode = this.audioContext.createScriptProcessor(2048, 1, 1);
                        this.captureNode.onaudioprocess = function(AudioProcessingEvent) {
                            if (_this.isCalling) {
                                var pcmFloat32Data = AudioProcessingEvent.inputBuffer.getChannelData(0);
                                var pcmData = convertFloat32ToUint8(pcmFloat32Data);
                                var bufferLength = pcmFloat32Data.length;
                                var outputData = new Int16Array(bufferLength);
                                for(var i = 0; i < bufferLength; i++){
                                    var compression = 32767;
                                    var pcmSample = Math.max(-1, Math.min(1, pcmFloat32Data[i]));
                                    outputData[i] = pcmSample * compression;
                                }
                                //const base64Audio = btoa(String.fromCharCode.apply(null, new Uint8Array(outputData.buffer)));
                                //console.log({ base64Audio });
                                //this.liveClient.sendBase64(base64Audio);
                                _this.liveClient.send(pcmData);
                                console.log({
                                    pcmData: pcmData
                                });
                                var outputBuffer = AudioProcessingEvent.outputBuffer;
                                var outputChannel = outputBuffer.getChannelData(0);
                                for(var i = 0; i < outputChannel.length; ++i)if (_this.audioData.length > 0) {
                                    outputChannel[i] = _this.audioData[0][_this.audioDataIndex++];
                                    if (_this.audioDataIndex === _this.audioData[0].length) {
                                        _this.audioData.shift();
                                        _this.audioDataIndex = 0;
                                    }
                                } else outputChannel[i] = 0;
                                _this.emit("audio", convertFloat32ToUint8(outputChannel));
                                if (!_this.audioData.length && _this.isTalking) {
                                    _this.isTalking = false;
                                    _this.emit("agentStopTalking");
                                }
                            }
                        };
                        source.connect(this.captureNode);
                        this.captureNode.connect(this.audioContext.destination);
                        _c.label = 8;
                    case 8:
                        return [
                            2 /*return*/ 
                        ];
                }
            });
        });
    };
    BlandWebClient.prototype.handleAudioEvents = function() {
        var _this = this;
        // Exposed
        this.liveClient.on("open", function() {
            _this.emit("conversationStarted");
        });
        this.liveClient.on("audio", function(audio) {
            _this.playAudio(audio);
        });
        this.liveClient.on("disconnect", function() {
            _this.emit("disconnect");
        });
        this.liveClient.on("reconnect", function() {
            _this.emit("reconnect");
        });
        this.liveClient.on("error", function(error) {
            _this.emit("error", error);
            if (_this.isCalling) _this.stopConversation();
        });
        this.liveClient.on("close", function(code, reason) {
            if (_this.isCalling) _this.stopConversation();
            _this.emit("conversationEnded", {
                code: code,
                reason: reason
            });
        });
        this.liveClient.on("update", function(update) {
            _this.emit("update", update);
        });
        // Not exposed
        this.liveClient.on("clear", function() {
            if (_this.isAudioWorkletSupported()) _this.audioNode.port.postMessage("clear");
            else {
                _this.audioData = [];
                _this.audioDataIndex = 0;
                if (_this.isTalking) {
                    _this.isTalking = false;
                    _this.emit("agentStopTalking");
                }
            }
        });
    };
    BlandWebClient.prototype.isAudioWorkletSupported = function() {
        return /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
    };
    BlandWebClient.prototype.playAudio = function(audio) {
        if (this.isAudioWorkletSupported()) this.audioNode.port.postMessage(audio);
        else {
            var float32Data = convertUint8ToFloat32(audio);
            this.audioData.push(float32Data);
            if (!this.isTalking) {
                this.isTalking = true;
                this.emit("agentStartTalking");
            }
        }
    };
    return BlandWebClient;
}(eventemitter3_1.EventEmitter);
exports.BlandWebClient = BlandWebClient;

},{"cc804616da9a4908":"1BMOb","58aa156552e0aa08":"bBXdW","42dcabe6bf549f2d":"4lGGE"}],"1BMOb":[function(require,module,exports) {
"use strict";
var has = Object.prototype.hasOwnProperty, prefix = "~";
/**
 * Constructor to create a storage for our `EE` objects.
 * An `Events` instance is a plain object whose properties are event names.
 *
 * @constructor
 * @private
 */ function Events() {}
//
// We try to not inherit from `Object.prototype`. In some engines creating an
// instance in this way is faster than calling `Object.create(null)` directly.
// If `Object.create(null)` is not supported we prefix the event names with a
// character to make sure that the built-in object properties are not
// overridden or used as an attack vector.
//
if (Object.create) {
    Events.prototype = Object.create(null);
    //
    // This hack is needed because the `__proto__` property is still inherited in
    // some old browsers like Android 4, iPhone 5.1, Opera 11 and Safari 5.
    //
    if (!new Events().__proto__) prefix = false;
}
/**
 * Representation of a single event listener.
 *
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} [once=false] Specify if the listener is a one-time listener.
 * @constructor
 * @private
 */ function EE(fn, context, once) {
    this.fn = fn;
    this.context = context;
    this.once = once || false;
}
/**
 * Add a listener for a given event.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} context The context to invoke the listener with.
 * @param {Boolean} once Specify if the listener is a one-time listener.
 * @returns {EventEmitter}
 * @private
 */ function addListener(emitter, event, fn, context, once) {
    if (typeof fn !== "function") throw new TypeError("The listener must be a function");
    var listener = new EE(fn, context || emitter, once), evt = prefix ? prefix + event : event;
    if (!emitter._events[evt]) emitter._events[evt] = listener, emitter._eventsCount++;
    else if (!emitter._events[evt].fn) emitter._events[evt].push(listener);
    else emitter._events[evt] = [
        emitter._events[evt],
        listener
    ];
    return emitter;
}
/**
 * Clear event by name.
 *
 * @param {EventEmitter} emitter Reference to the `EventEmitter` instance.
 * @param {(String|Symbol)} evt The Event name.
 * @private
 */ function clearEvent(emitter, evt) {
    if (--emitter._eventsCount === 0) emitter._events = new Events();
    else delete emitter._events[evt];
}
/**
 * Minimal `EventEmitter` interface that is molded against the Node.js
 * `EventEmitter` interface.
 *
 * @constructor
 * @public
 */ function EventEmitter() {
    this._events = new Events();
    this._eventsCount = 0;
}
/**
 * Return an array listing the events for which the emitter has registered
 * listeners.
 *
 * @returns {Array}
 * @public
 */ EventEmitter.prototype.eventNames = function eventNames() {
    var names = [], events, name;
    if (this._eventsCount === 0) return names;
    for(name in events = this._events)if (has.call(events, name)) names.push(prefix ? name.slice(1) : name);
    if (Object.getOwnPropertySymbols) return names.concat(Object.getOwnPropertySymbols(events));
    return names;
};
/**
 * Return the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Array} The registered listeners.
 * @public
 */ EventEmitter.prototype.listeners = function listeners(event) {
    var evt = prefix ? prefix + event : event, handlers = this._events[evt];
    if (!handlers) return [];
    if (handlers.fn) return [
        handlers.fn
    ];
    for(var i = 0, l = handlers.length, ee = new Array(l); i < l; i++)ee[i] = handlers[i].fn;
    return ee;
};
/**
 * Return the number of listeners listening to a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Number} The number of listeners.
 * @public
 */ EventEmitter.prototype.listenerCount = function listenerCount(event) {
    var evt = prefix ? prefix + event : event, listeners = this._events[evt];
    if (!listeners) return 0;
    if (listeners.fn) return 1;
    return listeners.length;
};
/**
 * Calls each of the listeners registered for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @returns {Boolean} `true` if the event had listeners, else `false`.
 * @public
 */ EventEmitter.prototype.emit = function emit(event, a1, a2, a3, a4, a5) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return false;
    var listeners = this._events[evt], len = arguments.length, args, i;
    if (listeners.fn) {
        if (listeners.once) this.removeListener(event, listeners.fn, undefined, true);
        switch(len){
            case 1:
                return listeners.fn.call(listeners.context), true;
            case 2:
                return listeners.fn.call(listeners.context, a1), true;
            case 3:
                return listeners.fn.call(listeners.context, a1, a2), true;
            case 4:
                return listeners.fn.call(listeners.context, a1, a2, a3), true;
            case 5:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4), true;
            case 6:
                return listeners.fn.call(listeners.context, a1, a2, a3, a4, a5), true;
        }
        for(i = 1, args = new Array(len - 1); i < len; i++)args[i - 1] = arguments[i];
        listeners.fn.apply(listeners.context, args);
    } else {
        var length = listeners.length, j;
        for(i = 0; i < length; i++){
            if (listeners[i].once) this.removeListener(event, listeners[i].fn, undefined, true);
            switch(len){
                case 1:
                    listeners[i].fn.call(listeners[i].context);
                    break;
                case 2:
                    listeners[i].fn.call(listeners[i].context, a1);
                    break;
                case 3:
                    listeners[i].fn.call(listeners[i].context, a1, a2);
                    break;
                case 4:
                    listeners[i].fn.call(listeners[i].context, a1, a2, a3);
                    break;
                default:
                    if (!args) for(j = 1, args = new Array(len - 1); j < len; j++)args[j - 1] = arguments[j];
                    listeners[i].fn.apply(listeners[i].context, args);
            }
        }
    }
    return true;
};
/**
 * Add a listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.on = function on(event, fn, context) {
    return addListener(this, event, fn, context, false);
};
/**
 * Add a one-time listener for a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn The listener function.
 * @param {*} [context=this] The context to invoke the listener with.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.once = function once(event, fn, context) {
    return addListener(this, event, fn, context, true);
};
/**
 * Remove the listeners of a given event.
 *
 * @param {(String|Symbol)} event The event name.
 * @param {Function} fn Only remove the listeners that match this function.
 * @param {*} context Only remove the listeners that have this context.
 * @param {Boolean} once Only remove one-time listeners.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeListener = function removeListener(event, fn, context, once) {
    var evt = prefix ? prefix + event : event;
    if (!this._events[evt]) return this;
    if (!fn) {
        clearEvent(this, evt);
        return this;
    }
    var listeners = this._events[evt];
    if (listeners.fn) {
        if (listeners.fn === fn && (!once || listeners.once) && (!context || listeners.context === context)) clearEvent(this, evt);
    } else {
        for(var i = 0, events = [], length = listeners.length; i < length; i++)if (listeners[i].fn !== fn || once && !listeners[i].once || context && listeners[i].context !== context) events.push(listeners[i]);
        //
        // Reset the array, or remove it completely if we have no more listeners.
        //
        if (events.length) this._events[evt] = events.length === 1 ? events[0] : events;
        else clearEvent(this, evt);
    }
    return this;
};
/**
 * Remove all listeners, or those of the specified event.
 *
 * @param {(String|Symbol)} [event] The event name.
 * @returns {EventEmitter} `this`.
 * @public
 */ EventEmitter.prototype.removeAllListeners = function removeAllListeners(event) {
    var evt;
    if (event) {
        evt = prefix ? prefix + event : event;
        if (this._events[evt]) clearEvent(this, evt);
    } else {
        this._events = new Events();
        this._eventsCount = 0;
    }
    return this;
};
//
// Alias methods names because people roll like that.
//
EventEmitter.prototype.off = EventEmitter.prototype.removeListener;
EventEmitter.prototype.addListener = EventEmitter.prototype.on;
//
// Expose the prefix.
//
EventEmitter.prefixed = prefix;
//
// Allow `EventEmitter` to be imported as module namespace.
//
EventEmitter.EventEmitter = EventEmitter;
module.exports = EventEmitter;

},{}],"bBXdW":[function(require,module,exports) {
// https://github.com/maxogden/websocket-stream/blob/48dc3ddf943e5ada668c31ccd94e9186f02fafbd/ws-fallback.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var global = arguments[3];
var ws = null;
if (typeof WebSocket !== "undefined") ws = WebSocket;
else if (typeof MozWebSocket !== "undefined") ws = MozWebSocket;
else if (typeof global !== "undefined") ws = global.WebSocket || global.MozWebSocket;
else if (typeof window !== "undefined") ws = window.WebSocket || window.MozWebSocket;
else if (typeof self !== "undefined") ws = self.WebSocket || self.MozWebSocket;
exports.default = ws;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"4lGGE":[function(require,module,exports) {
"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.workletCode = void 0;
exports.workletCode = '\nclass captureAndPlaybackProcessor extends AudioWorkletProcessor {\n    audioData = [];\n    index = 0;\n    isTalking = false;\n  \n    constructor() {\n      super();\n      //set listener to receive audio data, data is float32 array.\n      this.port.onmessage = (e) => {\n        if (e.data === "clear") {\n          // Clear all buffer.\n          this.audioData = [];\n          this.index = 0;\n          if (this.isTalking) {\n            this.isTalking = false;\n            this.port.postMessage("agent_stop_talking");\n          }\n        } else if (e.data.length > 0) {\n          this.audioData.push(this.convertUint8ToFloat32(e.data));\n          if (!this.isTalking) {\n            this.isTalking = true;\n            this.port.postMessage("agent_start_talking");\n          }\n        }\n      };\n    }\n  \n    convertUint8ToFloat32(array) {\n      const targetArray = new Float32Array(array.byteLength / 2);\n    \n      // A DataView is used to read our 16-bit little-endian samples out of the Uint8Array buffer\n      const sourceDataView = new DataView(array.buffer);\n    \n      // Loop through, get values, and divide by 32,768\n      for (let i = 0; i < targetArray.length; i++) {\n        targetArray[i] = sourceDataView.getInt16(i * 2, true) / Math.pow(2, 16 - 1);\n      }\n      return targetArray;\n    }\n  \n    convertFloat32ToUint8(array) {\n      const buffer = new ArrayBuffer(array.length * 2);\n      const view = new DataView(buffer);\n    \n      for (let i = 0; i < array.length; i++) {\n        const value = array[i] * 32768;\n        view.setInt16(i * 2, value, true); // true for little-endian\n      }\n    \n      return new Uint8Array(buffer);\n    }\n  \n    process(inputs, outputs, parameters) {\n      // Capture\n      const input = inputs[0];\n      const inputChannel1 = input[0];\n      const inputChannel2 = input[1];\n      this.port.postMessage(["capture", this.convertFloat32ToUint8(inputChannel1)]);\n  \n      // Playback\n      const output = outputs[0];\n      const outputChannel1 = output[0];\n      const outputChannel2 = output[1];\n      // start playback.\n      for (let i = 0; i < outputChannel1.length; ++i) {\n        if (this.audioData.length > 0) {\n          outputChannel1[i] = this.audioData[0][this.index];\n          outputChannel2[i] = this.audioData[0][this.index];\n          this.index++;\n          if (this.index == this.audioData[0].length) {\n            this.audioData.shift();\n            this.index = 0;\n          }\n        } else {\n          outputChannel1[i] = 0;\n          outputChannel2[i] = 0;\n        }\n      }\n\n      this.port.postMessage(["playback", this.convertFloat32ToUint8(outputChannel1)]);\n      if (!this.audioData.length && this.isTalking) {\n        this.isTalking = false;\n        this.port.postMessage("agent_stop_talking");\n      }\n  \n      return true;\n    }\n  }\n  \n  registerProcessor(\n    "capture-and-playback-processor",\n    captureAndPlaybackProcessor,\n  );\n';

},{}]},["hvnX8","leZCY"], "leZCY", "parcelRequire94c2")

//# sourceMappingURL=index.e93c85ca.js.map
