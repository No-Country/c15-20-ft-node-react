const express = require("express");
const PORT = 3001;
const app = express();
const connectDb = require("./database/conn.js")
const Service = require("./database/models/services")

app.post("/test", async (req, res) => {
    await connectDb();

    const service = req.body;
    const newService = new Service(service);
    const insertedService = await newService.save();

    res.status(201).json(insertedService);
})

app.listen(PORT, () => {
    console.log("Server listen in " + PORT)
})