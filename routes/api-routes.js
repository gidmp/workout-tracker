const db = require("../models");


module.exports = (app) => {
    app.get("/api/workouts/", (req,res) => {
        db.Workout.find({})
        .sort({ date: -1 })
        .then(dbWorkout => {
            res.json(dbWorkout);
        })
        .catch(err => {
            res.status(400).json(err);
        });
      
    })

    app.put("/api/workouts/:id", (req,res) => {
    })

    app.post("/api/workouts/", (req,res) => {
    })

    app.get("/api/workouts/range", (req,res) => {
    })


};