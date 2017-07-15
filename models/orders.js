var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
	status: {
		type: String,
		required: true,
		default: 'in progress'
	},
	items: [{
		type: Schema.Types.ObjectId,
		ref: 'Menu'
	}],
	total: {
		type: Number
	},
	time_placed:{
		type: Date,
	},
	time_ready:{
		type: Date,
		default: null
	},
	time_pickedup:{
		type: Date,
		default: null
	}
});

var Order = mongoose.model("Order", OrderSchema);

module.exports = Order;