(function(InboxClient, M) {

  InboxClient.views.AppLayout = Marionette.Layout.extend({
    "className": "content",
    "onRender": function() {
      this.navigation.show(new InboxClient.views.Sidebar());
    },
    "regions": {
      "navigation" : "section[data-region='navigation']",
      "content"    : "section[data-region='content']"
    },
    "showContent": function(view) {
      this.content.show(view);
    },
    "template": (function() {
      var t;

      t  = '';
      t += '<section data-region="navigation"></section>';
      t += '<section data-region="content"></section>';

      return t;
    }()),
  });

}(window.InboxClient, Backbone.Marionette));
