import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true,
  },
  completed: {
    type: Boolean,
  },
});

export default mongoose.model("TodoData", TodoSchema);
