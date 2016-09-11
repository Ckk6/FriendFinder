var friendArray = [];
app.get('/api/friends', function(req, res){
	res.sendFile(path.join(__dirname, '../public','survey.html'));
})
// We then display the JSON to the users
 	res.json(newFriend);



// Take in data from survey- takes in JSON input
 app.post('/api/friends', function(req, res){
 
 	// req.body hosts is equal to the JSON post sent from the user
 	var newFriend = req.body;
 
 	console.log(newFriend);
 
 	// We then add the json the user sent to the friend array
 	
 	.push(newFriend);
 
 	// We then display the JSON to the users
 	res.json(newFriend);
 })