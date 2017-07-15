module.exports = function (app) {
app.get("/menus", function(req, res, next) {
	Menus.find({})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
		});
});

app.get("/menus/:id", function(req, res, next) {
	Menus.find({"_id:": req.params.id})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
      	});
});

app.post("/menus", function(req, res, next) {
	var newMenu = Menus({
		name: req.body.name,
		price: req.body.price,
	});

	newMenu.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });
});

app.put("/menus/:id", function(req, res, next) {
	Menus.update({"_id": req.params.id}, {$set: {"price": req.body.price}})
	  .exec(function(err, doc){
	  	if(err){
	  		console.log(err);
	  	}
	  	else{
	  		res.send(doc);
	  	}
	  });
});

app.delete("/menus/:id", function(req, res, next) {
		Menus.find({'_id': req.params.id}).remove()
		  .exec(function(err, doc){
		  	res.send(doc);
		  });
});
}