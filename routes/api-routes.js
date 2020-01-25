const router = require("express").Router();
const Workout = require("../models").Workout;

router.get("/api/workouts", function(req, res) {
  Workout.find({})
    .then(workouts => {
      res.send(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", function(req, res) {
  Workout.find({})
    .then(workouts => {
      res.send(workouts);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", function(req, res) {
  const id = req.params.id;
  const workout = req.body;
  Workout.findOneAndUpdate(
    { _id: id },
    { $push: { exercises: workout } },
    { new: true }
  ).then(results => {
    res.send(results);
  });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({
    exercises: [req.body]
  }).then(newWorkout => {
    res.send(newWorkout);
  });
});

module.exports = router;
