var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var CustomerSchema = new Schema({
	name: {
		type: String,
		required: true,
		unique: true	
	}
	// ,
	// fb_id: {
	// 	type: String,
	// 	required: true,
	// 	validate: {
 //            validator: function (idOfCustomer, cb) {
 //                Customer.find({
 //                    fb_id: idOfCustomer
 //                }, function (err, docs) {
 //                    cb(docs.length === 0);
 //                });
 //            },
 //            message: "User already exists"
 //        }
	// },
	// orders:[{
	// 	type: Schema.Types.ObjectId,
	// 	ref: 'Order'
	// }]
});

var Customer = mongoose.model("Customer", CustomerSchema);

module.exports = Customer;