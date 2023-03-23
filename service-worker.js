if (!self.define) {
    let e, s = {};
    const r = (r, i) => (r = new URL(r + ".js", i).href, s[r] || new Promise((s => {
        if ("document" in self) {
            const e = document.createElement("script");
            e.src = r, e.onload = s, document.head.appendChild(e)
        } else e = r, importScripts(r), s()
    })).then((() => {
        let e = s[r];
        if (!e) throw new Error(`Module ${r} didn’t register its module`);
        return e
    })));
    self.define = (i, n) => {
        const o = e || ("document" in self ? document.currentScript.src : "") || location.href;
        if (s[o]) return;
        let t = {};
        const l = e => r(e, o), d = {module: {uri: o}, exports: t, require: l};
        s[o] = Promise.all(i.map((e => d[e] || l(e)))).then((e => (n(...e), t)))
    }
}
define(["./workbox-db5fc017"], (function (e) {
    "use strict";
    e.setCacheNameDetails({prefix: "pwa"}), self.addEventListener("message", (e => {
        e.data && "SKIP_WAITING" === e.data.type && self.skipWaiting()
    })), e.precacheAndRoute([{url: "/css/app.0457deba.css", revision: null}, {
        url: "/index.html",
        revision: "0d6430bfeb941f61e4b7396fffe37458"
    }, {url: "/js/app.363dad09.js", revision: null}, {
        url: "/js/chunk-vendors.e5fd6922.js",
        revision: null
    }, {url: "/manifest.json", revision: "b0d6ded906db037aaed0ff85b3eba813"}, {
        url: "/robots.txt",
        revision: "b6216d61c03e6ce0c9aea6ca7808f7ca"
    }], {})
}));
//# sourceMappingURL=service-worker.js.map
