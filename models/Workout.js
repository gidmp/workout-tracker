var mongoose = require("mongoose");
var Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: Date.now
    },
    exercises: [
        {
          type: {
              type: String
          },
          name: {
              type: String
          },
          duration: Number,
          weight: Number,
          reps: Number,
          sets: Number
        }
    ]
  
})

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
