(function(InboxClient, M, B, W) {

  InboxClient.views.EmptyInbox = M.ItemView.extend({
    "template": (function() {
      return '<blink>Sorry, you have no emails to view</blink>';
    }())
  });

}(window.InboxClient, Backbone.Marionette, Backbone, Backbone.Wreqr));
