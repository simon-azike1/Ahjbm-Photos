import { Router } from "express";
import { getDB } from "../config/db.js";
import defaultContent from "../data/defaultContent.js";

const router = Router();
const COLLECTION_NAME = "site_content";

const getCollection = () => getDB().collection(COLLECTION_NAME);

const ensureContent = async () => {
  const collection = getCollection();
  let doc = await collection.findOne({});

  if (!doc) {
    const insertResult = await collection.insertOne(defaultContent);
    doc = await collection.findOne({ _id: insertResult.insertedId });
  }

  return doc;
};

router.get("/", async (_req, res) => {
  try {
    const doc = await ensureContent();
    res.json(doc);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch content.", error: error.message });
  }
});

router.put("/:section", async (req, res) => {
  try {
    const section = req.params.section;
    const allowedSections = [
      "hero",
      "about",
      "contact",
      "churchPhotography",
      "eventPhotography",
      "organizationalWork",
    ];

    if (!allowedSections.includes(section)) {
      return res.status(400).json({ message: "Invalid content section." });
    }

    if (typeof req.body !== "object" || req.body === null) {
      return res.status(400).json({ message: "Request body must be a valid JSON object or array." });
    }

    const existing = await ensureContent();
    const collection = getCollection();
    const filter = { _id: existing._id };

    await collection.updateOne(filter, {
      $set: {
        [section]: req.body,
        updatedAt: new Date().toISOString(),
      },
    });

    const updated = await collection.findOne(filter);
    return res.json(updated);
  } catch (error) {
    return res.status(500).json({ message: "Failed to update content.", error: error.message });
  }
});

export default router;
