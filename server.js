const express = require("express");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname));

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: "pateldiksha2007@gmail.com",
        pass: "jwdv twmv anrg sglo"
    }
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/contact", async (req, res) => {

    const { name, email, message } = req.body;

    try {

        await transporter.sendMail({

            from: "pateldiksha2007@gmail.com",

            to: "pateldiksha2007@gmail.com",

            subject: "🚀 New Portfolio Message",

            text: `
Name: ${name}

Email: ${email}

Message:
${message}
            `

        });

        console.log(req.body);

        res.send("Message Sent Successfully 🎉");

    } catch (err) {

        console.log(err);

        res.send("Error Sending Mail");

    }

});

app.listen(3000, () => {
    console.log("✅ Server Running on http://localhost:3000");
});