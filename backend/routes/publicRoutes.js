import { Router } from "express";
import {
  teamController,
  projectController,
  eventController,
  serviceController,
  blogController,
  contactController,
} from "../controllers/adminControllers.js";

const router = Router();

router.get("/team", teamController.list);
router.get("/projects", projectController.list);
router.get("/events", eventController.list);
router.get("/services", serviceController.list);
router.get("/blogs", blogController.list);
router.get("/contact", contactController.list);

export default router;
