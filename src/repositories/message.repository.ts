import { MessageAttributes, MessageStatic } from '../interfaces/message';

export default class MessageService {
    private message: MessageStatic;

    constructor(message: MessageStatic) {
        this.message = message;
    }

    protected async getAllMessage(id: string): Promise<MessageAttributes[]> {
        const messages = await this.message.findAll({ where: { customerId: id }, order: [['createdAt', 'DESC']] });
        return messages;
    }

    protected async addMessage(params: MessageAttributes, id: string): Promise<MessageAttributes> {
        try {
            const messages = await this.message.create({ ...params, customerId: id });
            return messages;
        } catch (error) {
            console.log(error);
        }
    }
}
