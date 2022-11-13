const MONGO_URI =
  "mongodb+srv://borhan:borhan123@crudnextjs.7bfwb0r.mongodb.net/?retryWrites=true&w=majority";
import mongoose from "mongoose";
const connectMongo = async () => {
  try {
    const { connection } = await mongoose.connect(MONGO_URI);
    if (connection.readyState === 1) {
      console.log("Database Connected");
    }
  } catch (error) {
    return Promise.reject(error);
  }
};

export default connectMongo;
