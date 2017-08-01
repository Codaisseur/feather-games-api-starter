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

  const games = new mongooseClient.Schema({
    numbersToChoose: { type: String,  },
    goalNumber: { type: String, },
    players: [playerSchema],
    started: { type: Boolean,  },
    winnerId: { type: String, },
    draw: { type: String,  },

    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('games', games);
};
