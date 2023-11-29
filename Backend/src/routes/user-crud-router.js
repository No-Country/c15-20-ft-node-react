const express = require("express");
const UserCRUD = require("../CRUDs/UserCRUD.js");
const connectDb = require("../database/conn.js");
const jwt = require('jsonwebtoken');
require("dotenv").config();

const router = express.Router();

const userExists = async (req, res, next) => {
    await connectDb();

    const {email} = req.body;
    console.log("email", email);
    const emailExists = await UserCRUD.findUserByEmail(email);
    console.log("emailexists", emailExists);

    emailExists ? res.status(400).send("El correo ya se encuentra registrado") : next(); 
};

router.use(express.json());

router.post("/login", async (req, res) => {
    await connectDb();

    const {email, password} = req.body;
    const userList = await UserCRUD.findUsers();
    const user = userList.find((user) => user.email == email && user.password == password);

    console.log(user);

    if(!user){
        res.status(401).send("Usuario o contraseña inválido");
    } else {
        const token = jwt.sign(JSON.stringify(user), process.env.SECRET_KEY);
        res.header("authorization", token).json({token});
    };
});

router.post("/register", userExists, async (req, res) => {
    await connectDb();

    const user = req.body;
    const newUser = await UserCRUD.createUser(user);

    res.status(201).json(newUser);

});

module.exports = router;