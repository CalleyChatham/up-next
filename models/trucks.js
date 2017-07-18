var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var TruckSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	fb_id: {
		type: String,
		required: true,
		unique: true
		validate: {
            validator: function (idOfTruck, cb) {
                Truck.find({
                    fb_id: idOfTruck
                }, function (err, docs) {
                    cb(docs.length === 0);
                });
            },
            message: "Truck already exists"
        }
	},
	description:{
		type: String
	},
	image:{
		type: String
	},
	location:{
		type: String,
		required: true
	},
	menu: [{
		type: Schema.Types.ObjectId,
		ref: 'Menu'
	}],
	orders:[{
		type: Schema.Types.ObjectId,
		ref: 'Order'
	}]
});

var Truck = mongoose.model("Truck", TruckSchema);

module.exports = Truck;