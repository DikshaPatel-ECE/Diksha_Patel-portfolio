const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

module.exports = async (req, res) => {
    if (req.method !== "POST") {
        return res.status(405).json({
            message: "Method not allowed"
        });
    }

    try {
        const { name, email, message } = req.body;

        const data = await resend.emails.send({
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

        return res.status(200).json({
            success: true,
            message: "Message sent successfully!"
        });

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: "Failed to send message"
        });
    }
};