import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
        image: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Product',
          required: true,
        },
      }
    ],
    shippingAddress: {
      name: { type: String, required: true },
      email: { type: String, required: true },
      address: { type: String, required: true },
      appartment: { type: String, required: true, default: null },
      city: { type: String, required: true },
      postalCode: { type: String, required: true },
      country: { type: String, required: true, },
      phone: { type: String, required: true, default: null },
    },
    paymentMethod: {
      type: String,
      required: true,
    },
    totalPrice: { type: Number, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    isPaid: {
      type: Boolean,
      default: false,
    },
    paidAt: { type: Date },
    isDelivered: {
      type: Boolean,
      default: false,
    },
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);

const Order = mongoose.model('Order', orderSchema);
export default Order;