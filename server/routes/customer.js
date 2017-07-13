module.exports = function (app) {
app.get("/customer", function(req, res, next) {
	res.send(200, [{
		name: 'JOhn inside get'
	}]);
});

app.get("/customer/:id", function(req, res, next) {
	res.send(200, [{
		name: 'JOhn inside get'
	}]);
});

app.post("/customer", function(req, res, next) {
	res.send(200, [{
		name: 'JOhn inside post'
	}]);
});

app.put("/customer/:id", function(req, res, next) {
	res.send(200, [{
		name: 'JOhn inside put'
	}]);
});

app.delete("/customer/:id", function(req, res, next) {
		res.send(200, [{
		name: 'JOhn inside delete'
	}]);
});
}