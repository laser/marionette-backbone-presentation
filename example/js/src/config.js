(function(M, _) {

  // use Handlebars to render Marionette view-templates
  // instead of the default (underscore)

  M.Renderer.render = function (templateStr, mergeObject) {
    return _.template(templateStr, mergeObject);
  };

  // set up the API client-app's namespace

  window.InboxClient = {
    "views": {}
  };

}(Backbone.Marionette, _));
