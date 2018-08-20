// import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("burgers", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", { devoured: true }, condition, cb);
  }
};

module.exports = burger;
