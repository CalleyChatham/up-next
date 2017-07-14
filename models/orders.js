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
		type: Timestamp,
	},
	time_ready:{
		type: Timestamp,
		default: null
	},
	time_pickedup:{
		type: Timestamp,
		default: null
	}
});

var Order = mongoose.model("Order", OrderSchema);

module.exports = Order;