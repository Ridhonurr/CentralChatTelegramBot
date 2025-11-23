class ChatUseCase{
    constructor(chatRepository){
        this.chatRepository = chatRepository;
    }

    async send(chat_id, text){
        await this.chatRepository.sendMessage(chat_id, text);
    }
}

export default ChatUseCase; 