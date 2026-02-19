import { Router } from "express";
import createCrudRouter from "./crudRoutesFactory.js";
import {
  teamController,
  projectController,
  eventController,
  serviceController,
  blogController,
  contactController,
} from "../controllers/adminControllers.js";

const router = Router();

router.use("/team", createCrudRouter(teamController));
router.use("/project", createCrudRouter(projectController));
router.use("/projects", createCrudRouter(projectController));
router.use("/events", createCrudRouter(eventController));
router.use("/services", createCrudRouter(serviceController));
router.use("/blogs", createCrudRouter(blogController));
router.use("/contact", createCrudRouter(contactController));

export default router;
