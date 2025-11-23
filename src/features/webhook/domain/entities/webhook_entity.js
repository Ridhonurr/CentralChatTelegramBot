class WebhookEntity {
    constructor(update_id, message){
        this.update_id = update_id;
        this.message = message;
    }
}

class MessageEntity {
    constructor({
        message_id, 
        chat_id,
        is_bot, 
        first_name, 
        username, 
        type, 
        date, 
        text
    }){
        this.message_id = message_id;
        this.chat_id = chat_id;
        this.is_bot = is_bot;
        this.first_name = first_name;
        this.username = username;
        this.type = type;
        this.date = date;
        this.text = text
    }
}

class WebhookMessageMapper{
    toEntity(payload){
        const msg = payload.message;

        const messageEntity = new MessageEntity({
            message_id: msg.message_id,
            chat_id: msg.chat.id,
            is_bot: msg.from.is_bot,
            first_name: msg.from.first_name,
            username: msg.from.username,
            type: msg.chat.type,
            date: msg.date,
            text: msg.text
        });

        return new WebhookEntity(payload.update_id, messageEntity);
    }
}

export {WebhookEntity, MessageEntity, WebhookMessageMapper}