var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var MenuSchema = new Schema({
	name:{
		type: String,
		required: true
	},
	image:{
		type: String
	},
	price:{
		type: Number,
		required: true
	},
	counter: {
		type: Number,
		default: 0
	}
	
});

var Menu = mongoose.model("Menu", MenuSchema);

module.exports = Menu;