import ChatRepositoryImpl from "../data/repositories/chat_repository_impl.js";
import ChatUseCase from "../domain/usecases/chat_usecase.js";

class ChatController{
    static async sendMessage(req, res){
        const {chat_id, text} = req.query;
        const repo = new ChatRepositoryImpl();
        const usecase = new ChatUseCase(repo);
        await usecase.send(chat_id, text);
        return res.json({message:"OK"});
    }
}
export default ChatController;