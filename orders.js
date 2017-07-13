module.exports = function (app) {
app.get("/orders", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

app.get("/orders/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

app.post("/orders", function(req, res, next) {
	res.send(200, [{
		name: 'upNext post'
	}]);
});

app.put("/orders/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext put'
	}]);
});

app.delete("/orders/:id", function(req, res, next) {
		res.send(200, [{
		name: 'upNext delete'
	}]);
});
}