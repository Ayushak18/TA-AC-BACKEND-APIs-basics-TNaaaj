let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let stateSchema = new Schema({
  name: String,
  country: [{ type: Schema.Types.ObjectId, ref: 'country' }],
  population: Number,
  neighbour: [{ type: Schema.Types.ObjectId, ref: 'state' }],
  area: String,
});

let State = mongoose.model('state', stateSchema);
module.exports = State;
