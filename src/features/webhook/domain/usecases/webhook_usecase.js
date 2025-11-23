class HandleMessage {
    constructor(webhookRepository){
        this.webhookRepository = webhookRepository;
    }

    async incoming(payload){
        await this.webhookRepository.handleIncomingMessage(payload);
        return "OK"
    }
}


export default HandleMessage;