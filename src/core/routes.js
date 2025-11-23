import express from "express";
import WebhookController from "../features/webhook/controller/webhook_controller.js";
import ChatController from "../features/chat/controller/chat_controller.js";

const router = express.Router();
router.post("/webhook", WebhookController.incomingMessage);
router.get("/sendMessage", ChatController.sendMessage);

export default router;