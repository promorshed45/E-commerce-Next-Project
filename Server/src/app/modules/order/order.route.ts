import express from "express";
import { OrderController } from "./order.controller";
import { auth } from "../../middleware/auth";

const router = express.Router();

router.post('/', auth('user'), OrderController.createOrder)
router.get('/',OrderController.getOrerSearchByEmail)
router.get('/my-orders', auth('user'), OrderController.getUserOrders)



export const OrderRoute = router;

