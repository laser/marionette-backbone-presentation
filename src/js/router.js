(function(ApiClient, M) {

  ApiClient.AppRouter = M.AppRouter.extend({
    "appRoutes": {
      ""       : "showInbox",
      "#inbox" : "showInbox",
      "#trash" : "showTrash"
    }
  });

}(window.ApiClient, Backbone.Marionette));
