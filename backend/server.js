import express from "express";
import path from "path";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import authRoute from "./routes/auth.routes.js";
import messageRoute from "./routes/message.routes.js";
import conectToMongodb from "./db/connectDb.js";
import usersRoute from "./routes/users.routes.js";
import cors from "cors";
import { app, server } from "./socket/socket.js";

const __dirname = path.resolve();
dotenv.config();
const PORT = process.env.PORT || 5000;
app.use(
  cors({
    origin: "*",
    credentials: true,
  })
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRoute);
app.use("/api/message", messageRoute);
app.use("/api/users", usersRoute);
app.use(express.static(path.join(__dirname, "/frontend/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"));
});
server.listen(PORT, () => {
  conectToMongodb();

  console.log(`Server is running on port ${PORT}`);
});
