module.exports = function (app) {
app.get("/customer", function(req, res, next) {
	Customers.find({})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
		});
});

app.get("/customer/:id", function(req, res, next) {
	Customers.find({"_id:": req.params.id})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
      	});
});

// Review classes around at week 13
app.post("/customer", function(req, res, next) {
	var newCustomer = Customers({
		name: req.body.name,
	});

	newCustomer.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });
});

app.put("/customer/:id", function(req, res, next) {
	Customers.update({"_id": req.params.id}, {$set: {"name": req.body.name}})
	  .exec(function(err, doc){
	  	if(err){
	  		console.log(err);
	  	}
	  	else{
	  		res.send(doc);
	  	}
	  });
});

app.delete("/customer/:id", function(req, res, next) {
		Customers.find({'_id': req.params.id}).remove()
		  .exec(function(err, doc){
		  	res.send(doc);
		  });
});
}