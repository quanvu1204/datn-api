import { CustomerAttributes, CustomerStatic } from '../interfaces/customer';
import bcrypt from '../libraries/bcrypt';

export default class CustomerService {
    private customer: CustomerStatic;

    constructor(customer: CustomerStatic) {
        this.customer = customer;
    }

    /**
     * CUSTOMER
     */

    protected async getCustomerDetail(id: string): Promise<CustomerAttributes> {
        const customer = await this.customer.findOne({
            where: { id },
        });
        return customer;
    }

    protected async updateCustomerDetail(data: any, id: string): Promise<number> {
        const response = await this.customer.update(data, {
            where: { id },
        });
        return response[0];
    }

    protected async customerResetPassword(data: { oldPassword: string; password: string }, id: string): Promise<any> {
        const customerData = await this.customer.findOne({ where: { id } });
        const password = bcrypt.generateHashPassword(data.password);
        if (bcrypt.comparePassword(data.oldPassword, customerData.password)) {
            const response = await this.customer.update(
                { password },
                {
                    where: { id },
                }
            );
            return response[0];
        } else {
            return 'Mật khẩu cũ không chính xác!';
        }
    }
}
