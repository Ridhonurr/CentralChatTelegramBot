import WebhookRepositoryImpl from "../data/repositories/webhook_mysql.js";
import HandleMessage from "../domain/usecases/webhook_usecase.js";

class WebhookController{
    static async incomingMessage(req, res){
        if (!req.body) return res.status(404).json({message: "Body Required!"});
        const payload = req.body;
        console.log(JSON.stringify(payload));
        const repo = new WebhookRepositoryImpl();
        const usecase = new HandleMessage(repo);

        const result = await usecase.incoming(payload);
        return res.json({message: "OK"});
    }
}

export default WebhookController;