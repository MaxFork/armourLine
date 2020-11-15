require('dotenv').config()
const express = require('express');
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bodyParser = require("body-parser");
const cors = require("cors");
const helmet = require("helmet");
const compression = require("compression");

const app = express();


// serve the react app files
app.use(express.static(`${__dirname}/client/build`));


//middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());


//port
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Backend is running on localhost:${port}`));

// connection route
app.get("/express", (req, res) => res.json({express: "YOUR EXPRESS BACKEND IS CONNECTED"}));


// email startup 

const transporter = nodemailer.createTransport(smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}))

//get route to send mail, from form
app.post("/send-mail", (req, res) => {
    const name = req.body.name;
    const subject = "";
    const email = req.body.email;
    const address = req.body.address
})