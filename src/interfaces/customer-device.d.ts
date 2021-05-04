import { BuildOptions, Model } from 'sequelize';

export interface CustomerDeviceAttributes {
    id: string;
    customerId: string;
    deviceId: string;
    deleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CustomerDeviceModel extends Model<CustomerDeviceAttributes>, CustomerDeviceAttributes {}
export class CustomerDevice extends Model<CustomerDeviceModel, CustomerDeviceAttributes> {}
export type CustomerDeviceStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CustomerDeviceModel;
};
