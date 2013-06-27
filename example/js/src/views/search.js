(function(InboxClient, M, B) {

  InboxClient.views.Search = M.ItemView.extend({
    "events": {
      "keyup input": "_onSearchKeyup"
    },
    "initialize": function(options) {
      this.listenTo(InboxClient.app.vent, "route:changed",
        this._onRouteChanged);
    },
    "template": (function() {
      var t;

      t  = '';
      t += '<input type="text" placeholder="search">';

      return t;
    }()),
    "_onClearClicked": function(e) {
      this.$el.find("input").val("");

      InboxClient.app.vent.trigger("search:requested", "");

      e.preventDefault();
    },
    "_onRouteChanged": function() {
      this.$el.find("input").val("");
    },
    "_onSearchKeyup": function(e) {
      var $input = this.$el.find("input");

      InboxClient.app.vent.trigger("search:requested", $input.val());

      e.preventDefault();
    }
  });

}(window.InboxClient, Backbone.Marionette, Backbone));
