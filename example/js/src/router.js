(function(InboxClient, M) {

  InboxClient.AppRouter = M.AppRouter.extend({
    "appRoutes": {
      "inbox" : "showInbox",
      "trash" : "showTrash",
      ""       : "showInbox"
    },
    "initialize": function() {
      this.on("all", this._onRoute);
    },
    "_onRoute": function() {
      InboxClient.app.vent.trigger("route:changed");
    }
  });

}(window.InboxClient, Backbone.Marionette));
