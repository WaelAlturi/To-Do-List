import exprss from "express";
import task from "../Models/task.js";

const route = exprss.Router();

route.post("/newtask", (req, res) => {
  try {
    task.findOne({ task: req.body.task }).then((check) => {
      if (check) {
        res.status(401).json({
          message: "This Task is Already in your list",
        });
      } else {
        const newTask = new task({
          task: req.body.task,
        });
        newTask
          .save()
          .then(
            res.status(200).json({
              message: "New Task Is on The List ",
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
export default route;
