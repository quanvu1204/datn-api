import { BuildOptions, Model } from 'sequelize';

export interface CityAttributes {
    id: string;
    name: boolean;
    locationKey: number;
    deleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CityModel
    extends Model<CityAttributes>,
        CityAttributes {}
export type CityStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CityModel;
};
