(function(InboxClient, M, B) {

  var app, layout, router, controller;

  app    = new M.Application(),
  layout = new InboxClient.views.AppLayout();

  controller = {
    "showInbox": function() {
      InboxClient.service.getMail(null, function(a) {
        layout.showContent(new InboxClient.views.Emails({
          "collection": new B.Collection(a)
        }));
      });
    },
    "showTrash": function() {
      InboxClient.service.getTrash(null, function(a) {
        layout.showContent(new InboxClient.views.Emails({
          "collection": new B.Collection(a)
        }));
      });
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

}(window.InboxClient, Backbone.Marionette, Backbone));
