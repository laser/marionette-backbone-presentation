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
      return '\
      <table>\
        <thead>\
          <tr>\
            <th>Subject</th>\
            <th>Email</th>\
            <th>Preview</th>\
          </tr>\
        </thead>\
        <tbody></tbody>\
      </table>';
    }()),
    "_onSearchRequested": function(search) {
      search = search.toLowerCase();

      this.collection.reset(_.filter(this._original, function(o) {
        return o.body.toLowerCase().indexOf(search) > -1
          || o.subject.toLowerCase().indexOf(search) > -1
      }));
    }
  });

}(window.InboxClient, Backbone.Marionette, Backbone, Backbone.Wreqr));
