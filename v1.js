(function () {
    var A = function () {
        var d, u, c;
        var t = document.currentScript;
        if (!!t) {
            var h = (d = t.getAttribute("data-redirect-url")) != null ? d : "https://redirectrussia.org/".concat(t.getAttribute("data-hide-domain") === "hide" ? "?from=unknown" : "?from=".concat(document.domain)),
                a = function () {
                    try {
                        var e = new Event("redirect-russia");
                        document.dispatchEvent(e), window.sessionStorage.setItem("russia-redirect", "1")
                    } catch (v) {}
                    window.location.assign(h)
                };
            try {
                var o = window.sessionStorage.getItem("russia-redirect");
                if (o === "1") return a();
                if (o === "0") return
            } catch (e) {}
            var r = (u = t.getAttribute("data-detection")) != null ? u : "timezone-then-ip";
            if (r !== "ip-only" && r !== "timezone-then-ip") throw new Error("Redirect Russia: Unsupported location detection method");
            var n = !0;
            if (r === "timezone-then-ip") {
                var i = void 0;
                try {
                    i = Intl.DateTimeFormat().resolvedOptions().timeZone
                } catch (e) {}
                var p = ["Asia/Jerusalem"];
                i && !p.includes(i) && (n = !1)
            }
            if (!!n) {
                var m = (c = t.getAttribute("data-geolocation-api")) != null ? c : "https://api.country.is",
                    s = void 0;
                fetch(m).then(function (e) {
                    if (!e.ok) throw new Error("Response not OK");
                    return e.json()
                }).then(function (e) {
                    s = e.country.toLowerCase()
                }).catch(function () {}).then(function () {
                    if (s === "ru") return a();
                    try {
                        window.sessionStorage.setItem("russia-redirect", "0")
                    } catch (e) {}
                })
            }
        }
    };
    A();
})();
//# sourceMappingURL=v1.js.map
