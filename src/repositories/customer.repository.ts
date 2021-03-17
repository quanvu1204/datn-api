import { CustomerAttributes, CustomerStatic } from '../interfaces/customer';

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

    /**
     * CUSTOMER
     */

    protected async updateCustomerDetail(data: any, id: string): Promise<number> {
        const response = await this.customer.update(data, {
            where: { id },
        });
        return response[0];
    }
}
