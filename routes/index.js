import express from "express";
import { orderNumber, getBalance } from "../controller/index.js";
const router = express.Router();

router.route("/order").post(orderNumber);
router.route("/balance").get(getBalance);

export default router;
