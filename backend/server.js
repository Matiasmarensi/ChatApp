import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import conectToMongodb from "./db/connectDb.js";
import cookieParser from "cookie-parser";

const app = express();
dotenv.config();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);

app.listen(PORT, () => {
  conectToMongodb();

  console.log(`Server is running on port ${PORT}`);
});
