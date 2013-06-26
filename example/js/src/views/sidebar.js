(function(InboxClient, M, B) {

  InboxClient.views.Sidebar = M.Layout.extend({
    "className": "sidebar",
    "onRender": function() {
      this.links.show(new InboxClient.views.ScreenLinks());
      this.search.show(new InboxClient.views.Search());
    },
    "regions": {
      "links"  : "section[data-region='links']",
      "search" : "section[data-region='search']"
    },
    "template": (function() {
      var t;

      t  = '';
      t += '<section data-region="links"></section>';
      t += '<section data-region="search"></section>';

      return t;
    }()),
  });

}(window.InboxClient, Backbone.Marionette, Backbone));
