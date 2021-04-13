import { MessageAttributes, MessageStatic } from '../interfaces/message';
import { v4 as uuidv4 } from 'uuid';

export default class MessageService {
    private message: MessageStatic;

    constructor(message: MessageStatic) {
        this.message = message;
    }

    protected async getAllMessage(id: string): Promise<MessageAttributes[]> {
        const messages = await this.message.findAll({ where: { customerId: id }, order: [['createAt', 'DESC']] });
        return messages;
    }

    protected async addMessage(params: MessageAttributes, id: string): Promise<MessageAttributes> {
        const messages = await this.message.create({ ...params, customerId: id });
        return messages;
    }
}
