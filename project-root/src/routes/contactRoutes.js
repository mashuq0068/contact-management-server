const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require('mongodb');
require('dotenv').config();

const router = express.Router();
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.hxdwxas.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

async function connectMongoDB() {
    await client.connect();
    return client.db("contactHubDB").collection("contacts");
}
// POST /user
router.post('/', async (req, res) => {
    const contactCollection = await connectMongoDB();
    const user = req.body;
    const result = await contactCollection.insertOne(user);

    
    res.send(result);
});

module.exports = router;