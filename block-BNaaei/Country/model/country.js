let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let countrySchema = new Schema({
  name: String,
  state: [{ type: Schema.Types.ObjectId, ref: 'state' }],
  continent: String,
  population: Number,
  ethinicity: [String],
  neighbour: [{ type: Schema.Types.ObjectId, ref: 'country' }],
  area: String,
});

let Country = mongoose.model('country', countrySchema);
module.exports = Country;
