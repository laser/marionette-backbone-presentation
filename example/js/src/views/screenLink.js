(function(InboxClient, M, B) {

  InboxClient.views.ScreenLink = M.ItemView.extend({
    "tagName": "li",
    "template": (function() {
      var t;

      t  = '';
      t += '<a href="<%= href %>"><%= label %></a>';

      return t;
    }())
  });

}(window.InboxClient, Backbone.Marionette, Backbone));
