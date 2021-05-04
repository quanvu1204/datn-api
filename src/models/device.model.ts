import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { DeviceStatic } from '../interfaces/device';
import Sequelize from '../libraries/sequelize';

const Device = <DeviceStatic>Sequelize.define('Device', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING(100),
    },
    ip: {
        type: DataTypes.STRING(32),
    },
    status: {
        type: DataTypes.ENUM('off', 'on'),
        defaultValue: 'off',
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
});

Device.beforeCreate((instance) => {
    instance.id = uuidv4();
});

export default Device;
