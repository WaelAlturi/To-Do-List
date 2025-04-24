import mongoose, { Schema } from "mongoose";

const newTask = new Schema({
  task: String,
});
export default mongoose.model("Task", newTask);
