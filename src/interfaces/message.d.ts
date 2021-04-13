import { BuildOptions, Model } from 'sequelize';

export interface MessageAttributes {
    id: string;
    customerId: string;
    isBot: boolean;
    message: string;
    deleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface MessageModel
    extends Model<MessageAttributes>,
        MessageAttributes {}
export type MessageStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): MessageModel;
};
