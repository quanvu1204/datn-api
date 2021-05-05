import { Request, Response } from 'express';
import { responseError, responseSuccess } from '../helpers/response';
import AdminRepository from '../repositories/admin.repository';

class AdminController extends AdminRepository {
    public getListCustomer = async (req: Request, res: Response) => {
        const customers = await this.getTotalCustomer();
        return responseSuccess(res, customers);
    };

    public deleteCustomer = async (req: Request, res: Response) => {
        const customer = await this.deleteCustomerById(req.params.id);
        if (customer) {
            return responseSuccess(res);
        }
        return responseError(res);
    };
    public deleteDevice = async (req: Request, res: Response) => {
        const device = await this.deleteDeviceById(req.params.id);
        if (device) {
            return responseSuccess(res);
        }
        return responseError(res);
    };
}

export default AdminController;
