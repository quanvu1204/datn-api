import { nanoid } from 'nanoid';

import otp from '../libraries/otp';
import mail from '../libraries/mail';
import bcrypt from '../libraries/bcrypt';

import { CustomerAttributes, CustomerModel, CustomerStatic } from '../interfaces/customer';
import constants from '../commons/constants';

export default class AuthService {
    private customer: CustomerStatic;

    constructor(customer: CustomerStatic) {
        this.customer = customer;
    }

    /**
     * CUSTOMER
     */

    protected async findCustomerByEmail(email: string): Promise<CustomerAttributes> {
        const customer = await this.customer.findOne({
            where: {
                email,
            },
        });
        return customer;
    }

    protected async updateCustomerByEmail(email: string, data: any): Promise<[number, CustomerModel[]]> {
        const customer = await this.customer.update(data, { where: { email } });
        return customer;
    }

    protected async checkAuthenticationData(email: string, password: string): Promise<CustomerAttributes | undefined> {
        const customer = await this.findCustomerByEmail(email);
        if (!customer || (password && !bcrypt.comparePassword(password, customer.password))) {
            return undefined;
        }
        return customer;
    }

    protected async createNewCustomer(customerData: CustomerAttributes): Promise<CustomerAttributes | undefined> {
        const customer = await this.findCustomerByEmail(customerData.email);

        if (!customer) {
            customerData.otpSecret = nanoid();
            customerData.password = bcrypt.generateHashPassword(customerData.password);
            const createdCustomer = await this.customer.create(customerData);
            return createdCustomer;
        }

        return undefined;
    }

    protected sendEmailVerificationCode(email: string, otpSecret: string): void {
        const mailOptions = {
            to: email,
            subject: constants.mailTemplate.subject,
            template: constants.mailTemplate.verificationCode,
            data: {
                code: otp.generate(otpSecret),
            },
        };

        mail.requestSendMail(mailOptions);
    }
}
