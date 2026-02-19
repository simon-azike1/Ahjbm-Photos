import { MongoClient } from "mongodb";
import { ObjectId } from "mongodb";

let client;
let database;

const isNoDbMode = () => process.env.NO_DB_MODE === "true";

class MemoryCursor {
  constructor(items) {
    this.items = items;
  }

  sort(sortBy = {}) {
    const [field, direction] = Object.entries(sortBy)[0] || [];
    if (!field) {
      return this;
    }
    this.items = [...this.items].sort((a, b) => {
      const aValue = a?.[field];
      const bValue = b?.[field];
      if (aValue === bValue) return 0;
      if (direction === -1) return aValue < bValue ? 1 : -1;
      return aValue > bValue ? 1 : -1;
    });
    return this;
  }

  async toArray() {
    return [...this.items];
  }
}

class MemoryCollection {
  constructor() {
    this.docs = [];
  }

  isSameId = (a, b) => String(a) === String(b);

  matches = (doc, filter = {}) =>
    Object.entries(filter).every(([key, value]) => {
      if (key === "_id") {
        return this.isSameId(doc._id, value);
      }
      return doc?.[key] === value;
    });

  clone = (doc) => JSON.parse(JSON.stringify(doc));

  async findOne(filter = {}) {
    const found = this.docs.find((doc) => this.matches(doc, filter));
    return found ? this.clone(found) : null;
  }

  find(filter = {}) {
    const items = this.docs.filter((doc) => this.matches(doc, filter)).map((doc) => this.clone(doc));
    return new MemoryCursor(items);
  }

  async insertOne(doc) {
    const _id = doc?._id || new ObjectId();
    const next = this.clone({ ...doc, _id });
    this.docs.push(next);
    return { insertedId: _id };
  }

  async updateOne(filter, update = {}) {
    const index = this.docs.findIndex((doc) => this.matches(doc, filter));
    if (index < 0) {
      return { matchedCount: 0, modifiedCount: 0 };
    }
    if (update.$set && typeof update.$set === "object") {
      this.docs[index] = { ...this.docs[index], ...this.clone(update.$set) };
    }
    return { matchedCount: 1, modifiedCount: 1 };
  }

  async deleteOne(filter) {
    const index = this.docs.findIndex((doc) => this.matches(doc, filter));
    if (index < 0) {
      return { deletedCount: 0 };
    }
    this.docs.splice(index, 1);
    return { deletedCount: 1 };
  }
}

class MemoryDatabase {
  constructor() {
    this.collections = new Map();
  }

  collection(name) {
    if (!this.collections.has(name)) {
      this.collections.set(name, new MemoryCollection());
    }
    return this.collections.get(name);
  }
}

const connectDB = async () => {
  if (isNoDbMode()) {
    database = new MemoryDatabase();
    console.log("NO_DB_MODE enabled: using in-memory database.");
    return database;
  }

  if (!process.env.MONGO_URI) {
    throw new Error("MONGO_URI is missing in environment variables. Set NO_DB_MODE=true for local in-memory mode.");
  }

  client = new MongoClient(process.env.MONGO_URI);
  await client.connect();

  const dbName = process.env.MONGO_DB_NAME || "ahjbm";
  database = client.db(dbName);

  console.log(`MongoDB Connected: ${dbName}`);
  return database;
};

export const getDB = () => {
  if (!database) {
    throw new Error("Database is not initialized. Call connectDB first.");
  }
  return database;
};

export default connectDB;
