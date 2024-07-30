import express from "express";
import { getUsersSideBar } from "../controllers/users.controller.js";
import protectRoute from "../middleware/protectRoute.js";
const routes = express.Router();

routes.get("/", protectRoute, rewrwer, getUsersSideBar);

export default routes;
