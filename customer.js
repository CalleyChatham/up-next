module.exports = function (app) {
app.get("/customer", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

app.get("/customer/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

// Review classes around at week 13
app.post("/customer", function(req, res, next) {
	res.send(200, [{
		name: 'upNext post'
	}]);
});

app.put("/customer/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext put'
	}]);
});

app.delete("/customer/:id", function(req, res, next) {
		res.send(200, [{
		name: 'upNext delete'
	}]);
});
}