const { Router } = require('express');
// const Order = require('../models/Order');
const OrderService = require('../services/OrderService');

module.exports = Router()
  .post('/', async (req, res, next) => {
    try {
      const order = await OrderService.createOrder(req.body);
      res.send(order);
    } catch (err) {
      next(err);
    }
  })
  .get('/', async (req, res, next) => {
    try {
      const order = await OrderService.orders(req.body);
      res.send(order);
    } catch (err) {
      next(err);
    }
  })
  
  .get('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const order = await OrderService.orderId(id);
      res.send(order);
    } catch (err) {
      next(err);
    }
  })
  .patch('/:id', async (req, res, next) => {
    try {
      const id = req.params.id;
      const order = await OrderService.patchOrder(id, req.body.quantity);
      res.send(order);
    } catch (err) {
      next(err);
    }
  });
// .delete('/:id', async (req, res, next) => {
//   try {
//     const order = await OrderService.createOrder(req.body);
//     res.send(order);
//   } catch (err) {
//     next(err);
//   }
// });
