import { MongoClient, ServerApiVersion } from "mongodb";

const { MONGODB_URI: uri, MONGODB_DB: dbName } = process.env;

if (!uri || !dbName) {
  throw new Error("Missing MongoDB environment variables.");
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});
const clientPromise = client.connect();

const connectDB = async () => {
  try {
    const dbClient = await clientPromise;
    return dbClient.db(dbName);
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
    throw new Error("Database connection failed");
  }
};

export { client, clientPromise, connectDB };
