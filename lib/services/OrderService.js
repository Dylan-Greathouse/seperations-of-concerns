const Order = require('../models/Order');
const { sendSms } = require('../utils/twilio');

module.exports = class OrderService {
  //send a text and store the order

  static async createOrder({ quantity }) {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `New Order received for ${quantity}`
    );

    //store the order
    const order = await Order.insert({ quantity });

    return order;
  }

  static async orders() {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      'Your orders received'
    );

    //store the order
    const order = await Order.select();

    return order;
  }

  static async orderId(id) {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `An Order received for ${id}`
    );

    //store the order
    const order = await Order.selectId(id);

    return order;
  }

  static async patchOrder(id, quantity) {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `An Order changed for ${id}`
    );

    //store the order
    const order = await Order.patchId(id, quantity);

    return order;
  }

  static async deleteOrder(id) {
    //send text
    await sendSms(
      process.env.ORDER_HANDLER_NUMBER,
      `An Order changed for ${id}`
    );

    //store the order
    const order = await Order.deleteId(id);

    return order;
  }
};
