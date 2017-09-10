/**
 * @name: route module
 * @description: All the routes are defined for the REST APIs defined
 */

var booksMock = require ('./mocks/books.js'),
    BooksMock = new booksMock();

var routes = function () {};

routes.prototype.getData = function (req, res) {
    var data = {'name' : 'foo', 'type' : 'bar'};
    res.send (data);
};

routes.prototype.getBooks = function (req, res) {
    res.send(BooksMock.getbooksList());
};

module.exports = routes;