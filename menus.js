module.exports = function (app) {
app.get("/menus", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

app.get("/menus/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext get'
	}]);
});

app.post("/menus", function(req, res, next) {
	res.send(200, [{
		name: 'upNext post'
	}]);
});

app.put("/menus/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext put'
	}]);
});

app.delete("/menus/:id", function(req, res, next) {
		res.send(200, [{
		name: 'upNext delete'
	}]);
});
}