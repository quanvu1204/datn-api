import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { MessageStatic } from '../interfaces/message';
import Sequelize from '../libraries/sequelize';

const Message = <MessageStatic>Sequelize.define('Message', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    customerId: {
        type: DataTypes.UUIDV4,
        allowNull: false,
    },
    isBot: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

Message.beforeCreate((instance) => {
    instance.id = uuidv4();
});

export default Message;
