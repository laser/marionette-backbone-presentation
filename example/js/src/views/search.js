(function(InboxClient, M, B) {

  InboxClient.views.Search = M.ItemView.extend({
    "events": {
      "keyup input": "_onSearchKeyup"
    },
    "template": (function() {
      var t;

      t  = '';
      t += '<input type="text" placeholder="search">';

      return t;
    }()),
    "_onClearClicked": function(e) {
      var $input = this.$el.find("input");

      $input.val("");

      InboxClient.app.vent.trigger("search:requested", "");

      e.preventDefault();
    },
    "_onSearchKeyup": function(e) {
      var $input = this.$el.find("input");

      InboxClient.app.vent.trigger("search:requested", $input.val());

      e.preventDefault();
    }
  });

}(window.InboxClient, Backbone.Marionette, Backbone));
