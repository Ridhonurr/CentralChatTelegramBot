import { MessageEntity, WebhookMessageMapper } from "../../domain/entities/webhook_entity.js";
import WebhookRepository from "../../domain/repositories/webhook_repository.js";

class WebhookRepositoryImpl extends WebhookRepository {
    async handleIncomingMessage(payload){
        const message = new WebhookMessageMapper().toEntity(payload);
        console.log(message);
    }
}

export default WebhookRepositoryImpl;