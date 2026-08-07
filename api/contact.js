const { Resend } = require("resend");

const resend = new Resend(process.env.portfolio);

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    try {
        const { name, email, message } = req.body;

        const { data, error } = await resend.emails.send({
            from: "Portfolio <onboarding@resend.dev>",
            to: ["pateldiksha2007@gmail.com"],
            subject: `New Portfolio Message from ${name}`,
            replyTo: email,
            html: `
                <h2>New Message from Portfolio</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <h3>Message:</h3>
                <p>${message}</p>
            `
        });

        if (error) {
            console.error("RESEND ERROR:", error);

            return res.status(500).json({
                success: false,
                message: "Email failed",
                error: error.message
            });
        }

        console.log("EMAIL SENT:", data);

        return res.status(200).json({
            success: true,
            message: "Message sent successfully!"
        });

    } catch (error) {
        console.error("SERVER ERROR:", error);

        return res.status(500).json({
            success: false,
            message: "Failed to send message"
        });
    }
};