const orderModel = require("../model/orderModel");

exports.createOrder = async (req, res) => {
    try {
        const cartItems = req.body;

        if (!cartItems || cartItems.length === 0) {
            return res.status(400).json({ success: false, message: "Cart is empty" });
        }

        const amount = cartItems
            .reduce((acc, item) => acc + item.products.price * item.qty, 0)
            .toFixed(2);

        const status = "pending";

        const order = await orderModel.create({ cartItems, amount, status });

        res.status(201).json({
            success: true,
            message: "Order inserted successfully",
            order,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message,
        });
    }
};
