import { AdminStatic } from '../interfaces/admin';
import { CustomerModel } from '../interfaces/customer';
import customerModel from '../models/customer.model';

export default class CustomerService {
    private admin: AdminStatic;

    constructor(admin: AdminStatic) {
        this.admin = admin;
    }

    protected async getTotalCustomer(): Promise<{ rows: CustomerModel[]; count: number }> {
        const customer = await customerModel.findAndCountAll({ where: { deleted: false } });
        return customer;
    }
}
