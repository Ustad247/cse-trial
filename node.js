const express = require('express');
const app = express();

app.use(express.json());

app.post('/payment', (req, res) => {
    const paymentDetails = req.body;

    // Process the payment details (e.g., save to database, send email, etc.)
    console.log("Payment details received:", paymentDetails);

    res.status(200).json({ message: "Payment details received successfully" });
});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
