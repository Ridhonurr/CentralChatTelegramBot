import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

class ChatUseCase { 
    TOKEN_BOT = process.env.TOKEN_BOT;
    constructor(chatRepository){
        this.chatRepository = chatRepository;
    }

    async sendToBot(chat_id, text){
        const body = {
            chat_id,
            text
        };
     
        const url = `https://api.telegram.org/bot${this.TOKEN_BOT}/sendMessage`;
        await axios.post(
            url,
            body
        )
        return;
    }
    async send(chat_id, text){
        await this.chatRepository.sendMessage(chat_id, text);
        await this.sendToBot(chat_id,text);
    }
}

export default ChatUseCase; 