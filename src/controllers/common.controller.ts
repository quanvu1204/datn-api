import { Request, Response } from 'express';
import { responseError, responseSuccess } from '../helpers/response';
import CommonRepository from '../repositories/Common.repository';

class CommonController extends CommonRepository {
    public findAll = async (req: Request<undefined, undefined, undefined, { name: string }>, res: Response) => {
        const name = req.query.name;
        const city = await this.findAllCity(name);
        return responseSuccess(res, city);
    };
}

export default CommonController;
