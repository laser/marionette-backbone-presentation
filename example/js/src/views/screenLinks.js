(function(InboxClient, M, B) {

  InboxClient.views.ScreenLinks = M.CompositeView.extend({
    "initialize": function() {
      this.collection = new B.Collection([{
        "href": "#inbox",
        "label": "Inbox"
      }, {
        "href": "#trash",
        "label": "Trash"
      }]);
    },
    "itemView": InboxClient.views.ScreenLink,
    "itemViewContainer": ".operations",
    "template": (function() {
      var t;

      t  = '';
      t += '<ul class="operations"></ul>';

      return t;
    }()),
  });

}(window.InboxClient, Backbone.Marionette, Backbone));
