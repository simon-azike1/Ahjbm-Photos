import { ObjectId } from "mongodb";
import { getDB } from "../config/db.js";

const isValidId = (id) => ObjectId.isValid(id);

const withTimestamps = (payload, isCreate = true) => {
  const now = new Date().toISOString();
  if (isCreate) {
    return { ...payload, createdAt: now, updatedAt: now };
  }
  return { ...payload, updatedAt: now };
};

const createCrudController = (collectionName) => {
  const collection = () => getDB().collection(collectionName);

  const list = async (_req, res) => {
    try {
      const items = await collection().find({}).sort({ createdAt: -1 }).toArray();
      return res.json(items);
    } catch (error) {
      return res.status(500).json({ message: `Failed to fetch ${collectionName}.`, error: error.message });
    }
  };

  const getById = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidId(id)) {
        return res.status(400).json({ message: "Invalid id." });
      }

      const item = await collection().findOne({ _id: new ObjectId(id) });
      if (!item) {
        return res.status(404).json({ message: `${collectionName} item not found.` });
      }
      return res.json(item);
    } catch (error) {
      return res.status(500).json({ message: `Failed to fetch ${collectionName} item.`, error: error.message });
    }
  };

  const create = async (req, res) => {
    try {
      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "Request body must be a valid object." });
      }

      const payload = withTimestamps(req.body, true);
      const result = await collection().insertOne(payload);
      const created = await collection().findOne({ _id: result.insertedId });
      return res.status(201).json(created);
    } catch (error) {
      return res.status(500).json({ message: `Failed to create ${collectionName} item.`, error: error.message });
    }
  };

  const update = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidId(id)) {
        return res.status(400).json({ message: "Invalid id." });
      }

      if (!req.body || typeof req.body !== "object") {
        return res.status(400).json({ message: "Request body must be a valid object." });
      }

      const { _id, ...rest } = req.body;
      const payload = withTimestamps(rest, false);

      const filter = { _id: new ObjectId(id) };
      const result = await collection().updateOne(filter, { $set: payload });

      if (!result.matchedCount) {
        return res.status(404).json({ message: `${collectionName} item not found.` });
      }

      const updated = await collection().findOne(filter);
      return res.json(updated);
    } catch (error) {
      return res.status(500).json({ message: `Failed to update ${collectionName} item.`, error: error.message });
    }
  };

  const remove = async (req, res) => {
    try {
      const { id } = req.params;
      if (!isValidId(id)) {
        return res.status(400).json({ message: "Invalid id." });
      }

      const result = await collection().deleteOne({ _id: new ObjectId(id) });
      if (!result.deletedCount) {
        return res.status(404).json({ message: `${collectionName} item not found.` });
      }

      return res.json({ message: `${collectionName} item deleted.` });
    } catch (error) {
      return res.status(500).json({ message: `Failed to delete ${collectionName} item.`, error: error.message });
    }
  };

  return { list, getById, create, update, remove };
};

export default createCrudController;