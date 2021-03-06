define("ui/shortCircuit/shortCircuit", [
  "require",
  "exports",
  "module",
  "experience/settings",
  "browser/window",
  "browser/document",
  "swx-constants",
  "ui/session/localSession",
  "swx-cafe-application-instance",
  "swx-service-locator-instance",
  "telemetry/shortCircuit/shortCircuit"
], function (e, t) {
  function b() {
    function b(e) {
      var t = "message";
      return new Promise(function (i) {
        function o(e) {
          e.origin === n.pnvService.host.replace(/\/$/, "") && (a(), i(JSON.parse(e.data)));
        }
        function u() {
          e.closed && (a(), i({ error: "windowClosed" }));
        }
        function a() {
          r.clearInterval(s);
          r.removeEventListener(t, o);
        }
        var s = r.setInterval(u, 1000);
        r.addEventListener(t, o);
      });
    }
    function w(e, t) {
      return r.open(t || "", e, "width=" + c + ",height=" + h + ",scrollbars,status");
    }
    function E(e) {
      return Date.now() - +e < v;
    }
    function S(e, t, r) {
      function s() {
        return n.pnvService.host + n.pnvService.pnvEndpoint + "?";
      }
      function u(e) {
        var t = [];
        return t.push("client_id=" + n.pnvService.clientId), t.push("redirect_uri=" + i.location.origin), t.push("response_type=" + d), t.push("partner=" + p), t.push("setlang=" + n.initParams.locale), t.push("clientVersion=" + n.uiVersion), t.push("scenario=" + e), t.push("theme=" + g), t.push("session_id=" + o.getSessionId()), t.join("&");
      }
      return r = r || (E(t) ? m : y), s() + u(r) + "#Skypetoken=" + e;
    }
    var e = this, t = f.build();
    e.open = function (e, n) {
      var r, i = u.get(), s = l + +Date.now(), o = w(s), a = !1;
      return r = b(o), r.then(function (e) {
        var r = !!e && !!e.flow_complete, i = {
            contactsCount: n ? n() : 0,
            newUser: a
          };
        e.error && (i.error = e.error);
        r ? (i.flowCompleted = r, t.sendAddressBookAddedEvent(i)) : t.sendFinishedEvent(i);
      }), i.signInManager._skypeToken().then(function (o) {
        return i.personsAndGroupsManager.mePerson.registeredAt.get().then(function (i) {
          return a = E(i), t.sendStartEvent({
            contactsCount: n ? n() : 0,
            newUser: a
          }), w(s, S(o, i, e)), r;
        });
      }).catch(function () {
        return o.close(), r;
      });
    };
    e.isEnabled = function () {
      var e = u.get().personsAndGroupsManager.mePerson, n = a.resolve(s.serviceLocator.FEATURE_FLAGS), r = n.isFeatureOn(s.featureFlags.SHORT_CIRCUIT);
      return !r || e._isLinkedMsaAutoGenerated === undefined || e.registeredAt === undefined ? Promise.resolve(!1) : e._isLinkedMsaAutoGenerated.get().then(function (e) {
        return e || t.sendVisibleEvent(), !e;
      });
    };
  }
  var n = e("experience/settings"), r = e("browser/window"), i = e("browser/document"), s = e("swx-constants").COMMON, o = e("ui/session/localSession"), u = e("swx-cafe-application-instance"), a = e("swx-service-locator-instance").default, f = e("telemetry/shortCircuit/shortCircuit"), l = "Skype.ShortCircuit", c = 720, h = 472, p = 999, d = "postmessage", v = 86400000, m = "signup", g = "skype-white", y = "afterlogin";
  t.build = function () {
    return new b();
  };
});
