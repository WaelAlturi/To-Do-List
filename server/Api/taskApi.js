import exprss from "express";
import task from "../Models/task.js";
import mongoose from "mongoose";

const route = exprss.Router();

route.get("/", (req, res) => {
  try {
    task
      .find({})
      .then((tasks) => {
        res.status(200).json(tasks);
      })
      .catch((e) => {
        res.status(400).json({
          message: e.message,
        });
      });
  } catch (error) {
    console.log(error.message);
  }
});
route.post("/newtask", (req, res) => {
  try {
    task.findOne({ task: req.body.newtask }).then((check) => {
      if (check) {
        res.status(401).json({
          message: "This Task is Already in your list",
        });
      } else {
        const newTask = new task({
          _id: new mongoose.Types.ObjectId(),
          task: req.body.newtask,
        });
        newTask
          .save()
          .then(
            res.status(200).json({
              message: "New Task Is on The List ",
              task: newTask,
            })
          )
          .catch((e) => {
            res.status(400).json({
              message: e.message,
            });
          });
      }
    });
  } catch (error) {
    console.log(error.message);
  }
});
route.delete("/:_id", (req, res) => {
  task
    .findByIdAndDelete(req.params._id)
    .then(() => {
      res.status(201).json({
        message: "List is Deleted",
      });
    })
    .catch((e) => {
      res.status(404).json({
        message: e.message,
      });
    });
});
export default route;
