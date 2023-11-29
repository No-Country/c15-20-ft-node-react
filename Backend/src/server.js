const express = require("express");
const PORT = 3001;
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const serviceRouter = require("./routes/service-crud-router");
const productRouter = require("./routes/product-crud-router");

const app = express();

app.use("/services", serviceRouter);
app.use("/products", productRouter);

app.use(express.json());


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