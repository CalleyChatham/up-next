module.exports = function (app) {
app.get("/orders", function(req, res, next) {
	Orders.find({})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
		});
});

app.get("/orders/:id", function(req, res, next) {
	Orders.find({"_id:": req.params.id})
		.exec(function(err, doc){
			if(err){
        		console.log(err);
      		}
      		else {
        		res.send(doc);
      		}
      	});
});

app.post("/orders", function(req, res, next) {
	var newOrder = Orders({
		items: req.body.items,
		total: req.body.total,
	});

	newOrder.save(function(err, doc){
    if(err){
      console.log(err);
      res.send(err);
    } else {
      res.json(doc);
    }
  });
});

app.put("/orders/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext put'
	}]);
});

app.delete("/orders/:id", function(req, res, next) {
		Orders.find({'_id': req.params.id}).remove()
		  .exec(function(err, doc){
		  	res.send(doc);
		  });
});
}