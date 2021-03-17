import { Request, Response } from 'express';
import { generateToken } from '../libraries/passports';
import { responseSuccess, responseError } from '../helpers/response';
import CustomerRepository from '../repositories/customer.repository';

class CustomerController extends CustomerRepository {
    public getDetail = async (req: Request, res: Response) => {
        console.log(req.user);
        const customerData = await this.getCustomerDetail(req.user['id']);
        if (customerData) {
            return responseSuccess(res, customerData);
        }
        return responseError(res);
    };
    public updateCustomer = async (req: Request, res: Response) => {
        const customerData = await this.updateCustomerDetail(req.body, req.user['id']);
        if (customerData) {
            return responseSuccess(res, customerData);
        }
        return responseError(res, 0);
    };
}

export default CustomerController;
