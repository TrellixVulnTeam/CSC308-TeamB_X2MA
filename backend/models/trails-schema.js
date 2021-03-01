const mongoose = require('mongoose');

const types = mongoose.Schema.Types;
const trailSchema = mongoose.Schema({
   title: { type: String, required: true },
   location: { type: String, required: true },
   description: { type: String, required: true },
   difficulty: { type: String, required: true },
   //length: {type: String, required: false},
   //elevation_gain: {type: String, required: false},
   //route_type: {type: String, required: false},
   rating: { type: Number, required: true },
   reviews: [{
      hikeID: { type: String, required: false },
      userID: { type: String, required: false },
      reviewBody: { type: String, required: false },
      userRating: { type: String, required: false },
      date: { type: Date, default: Date.now, required: false },
   }],
   tags: { type: [String], required: true },

})

//module.exports = mongoose.model('hike_data', trailSchema);
module.exports = trailSchema
