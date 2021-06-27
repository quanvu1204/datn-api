import { BuildOptions, Model } from 'sequelize';

export interface DeviceAttributes {
    id: string;
    name: string;
    ip: string;
    status: string;
    timer: { status: string; time: string };
    deleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface DeviceModel extends Model<DeviceAttributes>, DeviceAttributes {}
export class Device extends Model<DeviceModel, DeviceAttributes> {}
export type DeviceStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): DeviceModel;
};
