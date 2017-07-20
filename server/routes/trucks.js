module.exports = function (app) {
app.get("/trucks", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside get'
	}]);
});

app.get("/trucks/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside get'
	}]);
});

app.post("/trucks", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside post'
	}]);
});

app.put("/trucks/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside put'
	}]);
});

app.delete("/trucks/:id", function(req, res, next) {
		res.send(200, [{
		name: 'upNext inside delete'
	}]);
});
}