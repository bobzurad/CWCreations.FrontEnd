App = Ember.Application.create();

App.Router.map(function() {
    this.resource("grid");
    this.resource("about");
    this.resource("contact");
});

