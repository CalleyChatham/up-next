module.exports = function (app) {
app.get("/orders", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside get'
	}]);
});

app.get("/orders/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside get'
	}]);
});

app.post("/orders", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside post'
	}]);
});

app.put("/orders/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside put'
	}]);
});

app.delete("/orders/:id", function(req, res, next) {
		res.send(200, [{
		name: 'upNext inside delete'
	}]);
});
}