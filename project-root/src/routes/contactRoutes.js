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
// POST/contacts
router.post('/', async (req, res) => {
    const contactCollection = await connectMongoDB();
    const contact = req.body;
    const result = await contactCollection.insertOne(contact);

    
    res.send(result);
});
// GET/contacts
router.get('/' , async(req , res) => {
    const contactCollection = await connectMongoDB()
    const cursor = contactCollection.find()
    const result = await cursor.toArray()
    res.send(result)

})

// PATCH /contacts/:id
router.patch('/:id', async (req, res) => {
    const contactCollection = await connectMongoDB();
    const id = req.params.id;
    const contact = req.body;
    const filter = { _id: new ObjectId(id) };
    const options = { upsert: true };
    const updatedContact = {
        $set: {
            name: contact.contactName,
            phone: contact.phone,
            email: contact.email,
            address: contact.address,
            profilePicture: contact.profilePicture,
           
        },
    };
    const result = await contactCollection.updateOne(filter, updatedContact, options);
    res.send(result);
});

// DELETE / contacts/:id
router.delete('/:id' , async(req , res) => {
    const contactCollection = await connectMongoDB()
     const id = req.params.id
     const query = {_id : new ObjectId(id)}
     const result = await contactCollection.deleteOne(query)
     res.send(result)
})
module.exports = router;