module.exports = function (app) {
app.get("/trucks", function(req, res, next) {
	Trucks.find({})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
		});
});

app.get("/trucks/:id", function(req, res, next) {
	Trucks.find({"_id:": req.params.id})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
      	});
});

app.post("/trucks", function(req, res, next) {
	var newTruck = Trucks({
		name: req.body.name,
		description: req.body.description,
		location: req.body.location,
		menu: req.body.menu
	});

	newTruck.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });
});

app.put("/trucks/:id", function(req, res, next) {
	Trucks.update({"_id": req.params.id}, {$set: {"location": req.body.location}})
	  .exec(function(err, doc){
	  	if(err){
	  		console.log(err);
	  	}
	  	else{
	  		res.send(doc);
	  	}
	  });
});

app.delete("/trucks/:id", function(req, res, next) {
		Trucks.find({'_id': req.params.id}).remove()
		  .exec(function(err, doc){
		  	res.send(doc);
		  });
});

}