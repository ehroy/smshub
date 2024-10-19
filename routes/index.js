import express from "express";
import { orderNumber, getBalance,listFound,actionNumber } from "../controller/index.js";
const router = express.Router();

router.route("/order").post(orderNumber);
router.route("/action").post(actionNumber);
router.route("/balance").get(getBalance);
router.route("/list").get(listFound);



export default router;
