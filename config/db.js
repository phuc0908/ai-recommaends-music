const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://phuc:0908@cluster0.efdp3.mongodb.net/FFFF?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connect() {
  try {
    // Connect the client to the server
    await client.connect();
    console.log("Connected to MongoDB!");
    return client; // Trả về client để sử dụng ở nơi khác
  } catch (err) {
    console.error("Connection error:", err);
    throw err;
  }
}

module.exports = { connect, client }; // Export hàm connect và client