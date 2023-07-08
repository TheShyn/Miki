import express from 'express'
import paymentHandler from '../api/cart/payment'
import allCart from '../api/cart/all'
import editCart from '../api/cart/edit'

const route = express.Router()
route.post("/payment/", paymentHandler)
route.get("/", allCart)
route.patch("/:id", editCart)

export default route