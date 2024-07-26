import mongoose from "mongoose";

const conectToMongodb = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("connected to mongodb");
  } catch (error) {
    console.log("error connecting to mongodb", error.message);
  }
};

export default conectToMongodb;
