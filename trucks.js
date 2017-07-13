module.exports = function (app) {
app.get("/trucks", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

app.get("/trucks/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

app.post("/trucks", function(req, res, next) {
	res.send(200, [{
		name: 'upNext post'
	}]);
});

app.put("/trucks/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext put'
	}]);
});

app.delete("/trucks/:id", function(req, res, next) {
		res.send(200, [{
		name: 'upNext delete'
	}]);
});
}