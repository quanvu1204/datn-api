import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { CustomerDeviceStatic } from '../interfaces/customer-device';
import Sequelize from '../libraries/sequelize';
import customerModel from './customer.model';
import deviceModel from './device.model';

const CustomerDevice = <CustomerDeviceStatic>Sequelize.define('CustomerDevice', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    customerId: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    deviceId: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
});

CustomerDevice.beforeCreate((instance) => {
    instance.id = uuidv4();
});

CustomerDevice.belongsTo(deviceModel, { as: 'device', foreignKey: 'deviceId' });
deviceModel.hasMany(CustomerDevice, { as: 'customerDevice', foreignKey: 'deviceId' });
CustomerDevice.belongsTo(customerModel, { as: 'customer', foreignKey: 'customerId' });
customerModel.hasMany(CustomerDevice, { as: 'customerDevice', foreignKey: 'customerId' });

export default CustomerDevice;
