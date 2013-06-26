(function(InboxClient, M) {

  var app, layout, router, controller;

  app    = new M.Application(),
  layout = new InboxClient.views.AppLayout();

  controller = {
    "showInbox": function() {
      layout.showContent(new InboxClient.views.InboxScreen());
    },
    "showTrash": function() {
      layout.showContent(new InboxClient.views.TrashScreen());
    }
  };

  router = new InboxClient.AppRouter({
    "controller": controller
  });

  app.addRegions({
    "content": "#main"
  });

  app.addInitializer(function() {
    this.content.show(layout);
  });

  app.addInitializer(function(options) {
    Backbone.history.start();
  });

  InboxClient.app = app;

}(window.InboxClient, Backbone.Marionette))
