import { AdminStatic } from '../interfaces/admin';
import { CustomerModel } from '../interfaces/customer';
import customerDeviceModel from '../models/customer-device.model';
import customerModel from '../models/customer.model';
import deviceModel from '../models/device.model';

export default class CustomerService {
    private admin: AdminStatic;

    constructor(admin: AdminStatic) {
        this.admin = admin;
    }

    protected async getTotalCustomer(): Promise<{ rows: CustomerModel[]; count: number }> {
        const customer = await customerModel.findAndCountAll({
            where: { deleted: false },
            include: [{ model: customerDeviceModel, as: 'customerDevice', attributes: ['id'], include: [{ model: deviceModel, as: 'device' }] }],
        });
        return customer;
    }
}
