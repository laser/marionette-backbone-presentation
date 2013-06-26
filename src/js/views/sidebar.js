(function(InboxClient, M, B) {

  InboxClient.views.OperationLink = M.CompositeView.extend({
    "tagName": "li",
    "template": (function() {
      var t;

      t = '<a href="{{href}}">{{label}}</a>';

      return t;
    }())
  });

  InboxClient.views.Sidebar = M.CompositeView.extend({
    "className": "sidebar",
    "initialize": function() {
      this.collection = new B.Collection([{
        "href": "#inbox",
        "label": "Inbox"
      }, {
        "href": "#trash",
        "label": "Trash"
      }]);
    },
    "itemView": InboxClient.views.OperationLink,
    "itemViewContainer": ".operations",
    "template": (function() {
      var t;

      t  = '';
      t += '<header>Go To:</header>';
      t += '<ul class="operations"></ul>';

      return t;
    }()),
  });

}(window.InboxClient, Backbone.Marionette, Backbone));
