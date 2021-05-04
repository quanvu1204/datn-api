import { DeviceAttributes, DeviceStatic } from '../interfaces/device';
import customerDeviceModel from '../models/customer-device.model';
import { CustomerDeviceAttributes } from '../interfaces/customer-device';
import { v4 as uuidv4 } from 'uuid';

export default class DeviceService {
    private device: DeviceStatic;

    constructor(device: DeviceStatic) {
        this.device = device;
    }

    protected async addCustomerDevice(params: DeviceAttributes, id: string): Promise<CustomerDeviceAttributes> {
        try {
            const device = await this.device.create({ ...params });
            const customerDevice = await customerDeviceModel.create({ id: uuidv4(), customerId: id, deviceId: device.id, deleted: false });
            return customerDevice;
        } catch (error) {
            console.log(error);
        }
    }

    protected async updateStatus(params: DeviceAttributes): Promise<number> {
        try {
            const device = await this.device.update({ name: params.name }, { where: { ip: params.ip } });
            return device[0];
        } catch (error) {
            console.log(error);
        }
    }

    protected async deleteDevice(ip: string): Promise<number> {
        try {
            const device = await this.device.findOne({ where: { ip } });
            await customerDeviceModel.destroy({ where: { deviceId: device.id } });
            const res = await this.device.destroy({ where: { ip } });
            return res;
        } catch (error) {
            console.log(error);
        }
    }
}
