const express = require("express");
const PORT = 3001;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const connectDb = require("./database/conn.js");
const Service = require("./database/models/serviceModel.js");
const ServiceCRUD = require("./ServiceCRUD.js");

const app = express();

app.use(express.json());

app.get("/test", async (req, res) => {
    await connectDb();

    const userList = await ServiceCRUD.findServices();

    res.status(200).json(userList);
});

app.post("/test", async (req, res) => {
    await connectDb();

    const service = req.body;
    const newService = await ServiceCRUD.createService(service);

    res.status(201).json(newService);
});

app.delete("/test", async (req, res) => {
    await connectDb();

    const {id} = req.params;

    console.log(req.params);

    const deletedService = await ServiceCRUD.deleteServiceById(id);

    res.status(200).json(deletedService);

});

app.put("/test", async (req, res) => {
    await connectDb();

    const {id} = req.params;
    const data = req.body;

    const updatedService = await ServiceCRUD.updateService(id, data);

    res.status(200).json(updatedService);
});


// app.post('/register', async (req, res) => {
//   const hashedPassword = await bcrypt.hash(req.body.password, 10);
//   const user = new User({
//     username: req.body.username,
//     password: hashedPassword,
//   });
//   await user.save();
//   res.sendStatus(201);
// });
// app.post('/login', async (req, res) => {
//   const user = await User.findOne({ username: req.body.username });
//   if (user && await bcrypt.compare(req.body.password, user.password)) {
//     const token = jwt.sign({ id: user._id }, 'secret key', { expiresIn: '1h' });
//     res.json({ token });
//   } else {
//     res.sendStatus(401);
//   }
// });
// app.get('/profile', async (req, res) => {
//   const authHeader = req.headers['authorization'];
//   const token = authHeader && authHeader.split(' ')[1];
//   if (!token) return res.sendStatus(401);
//   jwt.verify(token, 'secret key', (err, user) => {
//     if (err) return res.sendStatus(403);
//     res.json({ id: user.id });
//   });
// });

app.listen(PORT, () => {
    console.log("Server listen in " + PORT)
});