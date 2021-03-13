import { BuildOptions, Model } from 'sequelize';

export interface CustomerAttributes {
    id: string;
    email: string;
    password: string;
    firstName: string;
    lastName: string;
    sex: string;
    deleted: boolean;
    otpSecret: string;
    isActive: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface CustomerModel
    extends Model<CustomerAttributes>,
        CustomerAttributes {}
export type CustomerStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): CustomerModel;
};
