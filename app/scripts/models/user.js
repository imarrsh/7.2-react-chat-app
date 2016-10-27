// User: Users, UserCollection

var Backbone = require('backbone');

var User = Backbone.Model.extend({
  defaults: {
    username: 'anonymous',
    user_avatar: ''
  },
  idAttribute: '_id'
});

// var UserCollection = Backbone.Collection.extend({
//   model: User,
//   url: 'https://tiny-lasagna-server.herokuapp.com/collections/messages'
// });

module.exports = {
  User: User
};
