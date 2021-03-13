import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { CustomerStatic } from '../interfaces/customer';
import Sequelize from '../libraries/sequelize';

const Customer = <CustomerStatic>Sequelize.define('Customer', {
    id: {
        type: DataTypes.UUIDV4,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    lastName: {
        type: DataTypes.STRING(50),
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING(50),
        unique: true,
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING(200),
        allowNull: false,
    },
    sex: {
        type: DataTypes.ENUM('male', 'female'),
        defaultValue: 'male',
    },
    otpSecret: {
        type: DataTypes.STRING(32),
    },
    isActive: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

Customer.beforeCreate((instance) => {
    instance.id = uuidv4();
});
Customer.prototype.toJSON = function () {
    const response = { ...this.get() };
    delete response.password;
    delete response.otpSecret;
    return response;
};

export default Customer;
