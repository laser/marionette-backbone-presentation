(function(InboxClient, M, B, W) {

  InboxClient.views.Emails = M.CompositeView.extend({
    "emptyView": InboxClient.views.EmptyInbox,
    "initialize": function(options) {
      this._original = options.collection.toJSON();

      this.listenTo(InboxClient.app.vent, "search:requested", this._onSearchRequested);
    },
    "itemView": InboxClient.views.Email,
    "itemViewContainer": "tbody",
    "tagName": "table",
    "template": (function() {
      var t;

      t  = '';
      t += '<table>';
      t += '  <thead>'
      t += '    <tr>'
      t += '      <th>Subject</th>'
      t += '      <th>Email</th>'
      t += '      <th>Preview</th>'
      t += '    </tr>'
      t += '  </thead>'
      t += '  <tbody></tbody>'
      t += '</table>';

      return t;
    }()),
    "_onSearchRequested": function(search) {
      search = search.toLowerCase();

      this.collection.reset(_.filter(this._original, function(o) {
        return o.body.toLowerCase().indexOf(search) > -1
          || o.subject.toLowerCase().indexOf(search) > -1
          || o.from.toLowerCase().indexOf(search) > -1
      }));
    }
  });

}(window.InboxClient, Backbone.Marionette, Backbone, Backbone.Wreqr));
