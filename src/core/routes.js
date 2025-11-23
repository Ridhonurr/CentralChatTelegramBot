import express from "express";
import WebhookController from "../features/webhook/controller/webhook_controller.js";

const router = express.Router();
router.post("/webhook", WebhookController.incomingMessage);

export default router;