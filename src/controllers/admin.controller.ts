import { Request, Response } from 'express';
import { responseSuccess } from '../helpers/response';
import AdminRepository from '../repositories/admin.repository';

class AdminController extends AdminRepository {
    public getListCustomer = async (req: Request, res: Response) => {
        const customers = await this.getTotalCustomer();
        return responseSuccess(res, customers);
    };
}

export default AdminController;
