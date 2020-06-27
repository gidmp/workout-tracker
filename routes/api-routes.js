const db = require("../models");


module.exports = (app) => {
    app.get("/api/workouts", (req,res) => {
        db.Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
      
    })

    app.get("/api/workouts/:id", (req,res) => {
    })

    app.get("/api/workouts/range", (req,res) => {
    })


};