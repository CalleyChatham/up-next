module.exports = function (app) {
app.get("/menus", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside get'
	}]);
});

app.get("/menus/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside get'
	}]);
});

app.post("/menus", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside post'
	}]);
});

app.put("/menus/:id", function(req, res, next) {
	res.send(200, [{
		name: 'upNext inside put'
	}]);
});

app.delete("/menus/:id", function(req, res, next) {
		res.send(200, [{
		name: 'upNext inside delete'
	}]);
});
}