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

    protected async customerResetPassword(data: { password: string }, id: string): Promise<number> {
        const password = bcrypt.generateHashPassword(data.password);
        const response = await this.customer.update(
            { password },
            {
                where: { id },
            }
        );
        return response[0];
    }
}
