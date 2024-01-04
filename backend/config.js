
// config.js
const { MongoClient, ServerApiVersion } = require('mongodb');

// Replace 'your-secret-key' with your actual secret key
const secret = 'your-secret-key';

// Replace <password> with your actual MongoDB Atlas password
const uri = "mongodb+srv://aondoaver:6vxENVGECN2ySyAU@cluster0.q0i1kih.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

// Function to connect to MongoDB and return the client
async function connectToMongoDB() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();
    console.log("Connected to MongoDB Atlas");
    return client;
  } catch (error) {
    console.error("Error connecting to MongoDB Atlas:", error);
    throw error;
  }
}

module.exports = {
  secret,
  connectToMongoDB,
};
