// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	var name = req.params.name;
	console.log(data);
	res.render('index', data);
};