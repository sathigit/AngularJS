/**
 * @name: route module
 * @description: All the routes are defined for the REST APIs defined
 */
var routes = function () {};

routes.prototype.getData = function (req, res) {
    var data = {'name' : 'foo', 'type' : 'bar'};
    res.send (data);
};

module.exports = routes;