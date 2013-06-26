(function(InboxClient, M) {

  InboxClient.AppRouter = M.AppRouter.extend({
    "appRoutes": {
      "inbox" : "showInbox",
      "trash" : "showTrash",
      ""       : "showInbox"
    }
  });

}(window.InboxClient, Backbone.Marionette));
