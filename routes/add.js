var data = require("../data.json");

exports.addFriend = function(req, res) {    
	var name = req.params.name;
	console.log(name);
	res.render('add');
 }