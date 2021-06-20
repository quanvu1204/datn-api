import { Request, Response } from 'express';
import { responseError, responseSuccess } from '../helpers/response';
import DeviceRepository from '../repositories/device.repository';

class DeviceController extends DeviceRepository {
    public createDevice = async (req: Request, res: Response) => {
        const device = await this.addCustomerDevice(req.body, req.user['id']);
        return responseSuccess(res, device);
    };

    public findAll = async (req: Request, res: Response) => {
        const devices = await this.findAllDevice();
        return responseSuccess(res, devices);
    };

    public findById = async (req: Request, res: Response) => {
        const devices = await this.findAllById(req.params['id']);
        return responseSuccess(res, devices);
    };

    public update = async (req: Request, res: Response) => {
        const response = await this.updateStatus(req.body);
        if (response) {
            return responseSuccess(res);
        }
        return responseError(res);
    };

    public delete = async (req: Request, res: Response) => {
        const response = await this.deleteDevice(req.params.ip);
        if (response) {
            return responseSuccess(res);
        }
        return responseError(res);
    };

    public share = async (req: Request, res: Response) => {
        const response = await this.shareDevice(req.body);
        if (response) {
            return responseSuccess(res);
        }
        return responseError(res);
    };
}

export default DeviceController;
