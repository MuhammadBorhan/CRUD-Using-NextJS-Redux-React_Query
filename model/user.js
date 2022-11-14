import { Schema, models, model } from "mongoose";

const usersSchema = new Schema({
  name: String,
  img: String,
  email: String,
  salary: Number,
  date: String,
  status: String,
});

const Users = models.user || model("user", usersSchema);

export default Users;
