var mongoose = require('mongoose');
// Notice the `mongodb` protocol; Mongo is basically a kind of server,
// which handles database requests and sends responses. It's async!
mongoose.connect('mongodb://localhost/tripPlanner');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error:'));

var placeSchema = new mongoose.Schema({
  address: String,
  city: String,
  state: String,
  phone: String,
  location: [Number]
});

var Place = mongoose.model('Place', placeSchema);

var hotelSchema = new mongoose.Schema({
  name: {type:String, required: true},
  place: [placeSchema],
  num_stars: {type: Number, min:1, max:5},
  amenities: String
});

var restaurantSchema = new mongoose.Schema({
  name: {type:String, required: true},
  place: [placeSchema],
  cuisine: String,
  price: {type: Number, min:1, max:5}
});

var thingToDoSchema = new mongoose.Schema({
  name: {type:String, required: true},
  place: [placeSchema],
  age_range: String
});


var Hotel = mongoose.model('Hotel', hotelSchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);
var ThingToDo = mongoose.model('ThingToDo', thingToDoSchema);


module.exports = {
	Hotel: Hotel,
	Restaurant: Restaurant,
	ThingToDo: ThingToDo,
	Place: Place
};
