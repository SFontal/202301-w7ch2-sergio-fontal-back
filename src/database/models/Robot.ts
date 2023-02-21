import mongoose from "mongoose";

const robotSchema = new mongoose.Schema({
  name: String,
  imageUrl: String,
  stats: {
    speed: Number,
    endurance: Number,
    creationDate: Number,
  },
});

const Robot = mongoose.model("Robot", robotSchema);

robotSchema.set("toJSON", {
  virtuals: true,
  transform(doc, ret) {
    delete ret._id;
    delete ret.__v;
  },
});

export default Robot;
