import { BuildOptions, Model } from 'sequelize';

export interface AdminAttributes {
    id: string;
    email: string;
    password: string;
    deleted: boolean;
    createdAt?: Date;
    updatedAt?: Date;
}

export interface AdminModel extends Model<AdminAttributes>, AdminAttributes {}
export class Admin extends Model<AdminModel, AdminAttributes> {}
export type AdminStatic = typeof Model & {
    new (values?: object, options?: BuildOptions): AdminModel;
};
