// games-model.js - A mongoose model
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const { Schema } = mongooseClient;

  const playerSchema = new Schema({
    userId: { type: Schema.Types.ObjectId, ref: 'users' },
    pairs: [String],
  });

  const numbersSchema = new Schema({
    number: { type: String},
    selected: {type: Boolean, default: false},
  });

  const games = new mongooseClient.Schema({
    numbersToChoose: [{ type: Number,  }],
    goalNumber: { type: String, },
    players: [playerSchema],
    numbers: [numbersSchema],
    time: { type: String },
    player1SelectedNumbers: { type: String },
    player1Result: { type: String },
    started: { type: Boolean,  },
    winnerId: { type: String, },
    draw: { type: String,  },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('games', games);
};
