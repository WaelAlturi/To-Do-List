import mongoose, { Schema } from "mongoose";

const newTask = new Schema({
  _id: mongoose.Schema.Types.ObjectId,
  task: String,
});
export default mongoose.model("Task", newTask);
