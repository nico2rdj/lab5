var data = require("../data.json");

exports.addFriend = function(req, res) { 
	// Your code goes here

        friend = {
            "name":req.query.name,
            "description": req.query.description,
            "imageURL": "http://lorempixel.com/400/400/people"
		};
	console.log(friend);
	data.friends.push(friend);
    res.render('index', data);
}