const express = require('express');
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");

if(process.env.NODE_ENV !== "production") require('dotenv').config();

const app = express();

//middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// serve the react app files in production
if(process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "client/build")));

    app.get("*", function(request, response) {
        response.sendFile(path.join(__dirname, "client/build", "index.html"))
    });
}

//port
const port = process.env.PORT || 5000;
app.listen(port, error => {
    if(error) throw error;
    console.log(`Backend is running on localhost:${port}`);
});

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