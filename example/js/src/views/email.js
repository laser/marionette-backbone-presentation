(function(InboxClient, M, B, W) {

  InboxClient.views.Email = M.ItemView.extend({
    "tagName": "tr",
    "template": (function() {
      var t;

      t = '';
      t += '<td><%= subject %></td>';
      t += '<td><%= from %></td>';
      t += '<td><%= preview() %></td>';

      return t;
    }()),
    "templateHelpers": {
      "preview": function() {
        return this.body.substring(0, 20);
      }
    }
  });

}(window.InboxClient, Backbone.Marionette, Backbone, Backbone.Wreqr));
