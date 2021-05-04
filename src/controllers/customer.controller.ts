import { Request, Response } from 'express';
import { generateToken } from '../libraries/passports';
import { responseSuccess, responseError } from '../helpers/response';
import CustomerRepository from '../repositories/customer.repository';
import bcrypt from '../libraries/bcrypt';

class CustomerController extends CustomerRepository {
    public getDetail = async (req: Request, res: Response) => {
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

    public resetPassword = async (req: Request, res: Response) => {
        const customerData = await this.getCustomerDetail(req.user['id']);
        if (customerData) {
            if (bcrypt.comparePassword(req.body.oldPassword, customerData.password)) {
                await this.customerResetPassword(req.body, req.user['id']);
                return responseSuccess(res, customerData);
            }
        }
        return responseError(res, null, 400, 'Mật khẩu cũ không chính xác!');
    };
}

export default CustomerController;
