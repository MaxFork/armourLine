const express = require('express');
const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");
const bodyParser = require("body-parser");
const cors = require("cors");
const path = require("path");
const helmet = require("helmet");
const compression = require("compression");

if(process.env.NODE_ENV !== "production")
    require('dotenv').config();

const app = express();

const port = process.env.PORT || 5000;

// email startup 
const transporter = nodemailer.createTransport(smtpTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    auth: {
        user: process.env.USER,
        pass: process.env.PASS
    }
}))

// serve the react app files in production
app.use(express.static(path.join(__dirname, "client/public")));

app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "client/public", "index.html"))
});

// middlewares
app.use(helmet());
app.use(compression());
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// connection route
app.get("/express", (req, res) => {
    res.json({express: "YOUR EXPRESS BACKEND IS CONNECTED"})
});


//get route to send mail, from form
app.post("/send-mail", (req, res) => {
    const name = req.body.name;
    const subject = "";
    const email = req.body.email;
    const address = req.body.address
})

//port
app.listen(port, error => {
    if(error) throw error;
    console.log(`Backend is running on localhost:${port}`);
});
