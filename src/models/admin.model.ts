import { DataTypes, Sequelize } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { AdminStatic } from '../interfaces/admin';
import sequelizeInstance from '../libraries/sequelize';

const AdminModel = function (sequelize: Sequelize): AdminStatic {
    const Admin = <AdminStatic>sequelize.define('Admin', {
        id: {
            type: DataTypes.UUIDV4,
            primaryKey: true,
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
        deleted: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    });
    Admin.beforeCreate((instance) => {
        instance.id = uuidv4();
    });
    return Admin;
};

export default AdminModel(sequelizeInstance);
