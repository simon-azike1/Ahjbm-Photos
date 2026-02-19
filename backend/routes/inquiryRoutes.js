import { Router } from "express";
import { getDB } from "../config/db.js";

const router = Router();
const COLLECTION_NAME = "inquiries";

const getCollection = () => getDB().collection(COLLECTION_NAME);

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, service, eventDate, message } = req.body || {};

    if (!name || !email || !service || !message) {
      return res.status(400).json({
        message: "name, email, service, and message are required.",
      });
    }

    const doc = {
      name,
      email,
      phone: phone || "",
      service,
      eventDate: eventDate || "",
      message,
      status: "new",
      createdAt: new Date().toISOString(),
    };

    const insertResult = await getCollection().insertOne(doc);
    return res.status(201).json({
      message: "Inquiry created.",
      id: insertResult.insertedId,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to create inquiry.",
      error: error.message,
    });
  }
});

router.get("/", async (_req, res) => {
  try {
    const inquiries = await getCollection()
      .find({})
      .sort({ createdAt: -1 })
      .toArray();

    return res.json(inquiries);
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch inquiries.",
      error: error.message,
    });
  }
});

export default router;
