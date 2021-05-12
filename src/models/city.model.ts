import { DataTypes } from 'sequelize';
import { v4 as uuidv4 } from 'uuid';
import { CityStatic } from '../interfaces/city';
import Sequelize from '../libraries/sequelize';

const City = <CityStatic>Sequelize.define('City', {
    id: {
        type: DataTypes.UUIDV4,
        primaryKey: true,
    },
    name: {
        type: DataTypes.TEXT,
    },
    locationKey: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    deleted: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    },
});

City.beforeCreate((instance) => {
    instance.id = uuidv4();
});

export default City;
