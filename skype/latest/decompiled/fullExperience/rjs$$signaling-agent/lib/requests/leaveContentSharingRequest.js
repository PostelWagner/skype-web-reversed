(function (e) {
  if (typeof module == "object" && typeof module.exports == "object") {
    var t = e(require, exports);
    t !== undefined && (module.exports = t);
  } else
    typeof define == "function" && define.amd && define("signaling-agent/lib/requests/leaveContentSharingRequest", [
      "require",
      "exports",
      "../utilities/utils"
    ], e);
}(function (e, t) {
  function r(e, t) {
    n.assertNotNull(e, "signalingSession cannot be null");
    n.assertCallEndReason(t);
    var r = {
      payload: {
        contentSharingTransactionEnd: t,
        participants: {
          from: {
            id: e.participantManager.localParticipant.id,
            displayName: e.participantManager.localParticipant.displayName,
            endpointId: e.participantManager.localParticipant.endpointId,
            participantId: e.participantManager.localParticipant.participantId,
            languageId: e.participantManager.localParticipant.languageId
          }
        }
      }
    };
    return r;
  }
  var n = e("../utilities/utils");
  t.getPayload = r;
}));
