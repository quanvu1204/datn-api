import { Request, Response } from 'express';
import { generateToken } from '../libraries/passports';
import { responseSuccess, responseError } from '../helpers/response';
import MessageRepository from '../repositories/message.repository';

class MessageController extends MessageRepository {
    public getAll = async (req: Request, res: Response) => {
        const messages = await this.getAllMessage(req.user['id']);
        return responseSuccess(res, messages);
    };

    public create = async (req: Request, res: Response) => {
        const messages = await this.addMessage(req.body, req.user['id']);
        return responseSuccess(res, messages);
    };
}

export default MessageController;
