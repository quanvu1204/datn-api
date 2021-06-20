import { DeviceAttributes, DeviceModel, DeviceStatic } from '../interfaces/device';
import customerDeviceModel from '../models/customer-device.model';
import customerModel from '../models/customer.model';
import { CustomerDevice, CustomerDeviceAttributes, CustomerDeviceModel } from '../interfaces/customer-device';
import { v4 as uuidv4 } from 'uuid';

export default class DeviceService {
    private device: DeviceStatic;

    constructor(device: DeviceStatic) {
        this.device = device;
    }

    protected async findAllDevice(): Promise<{
        rows: DeviceModel[];
        count: number;
    }> {
        try {
            const device = await this.device.findAndCountAll();
            return device;
        } catch (error) {
            console.log(error);
        }
    }

    protected async findAllById(
        id: string
    ): Promise<{
        rows: CustomerDeviceModel[];
        count: number;
    }> {
        try {
            const device = await customerDeviceModel.findAndCountAll({ where: { customerId: id }, include: { model: this.device, as: 'device' } });
            return device;
        } catch (error) {
            console.log(error);
        }
    }

    protected async addCustomerDevice(params: DeviceAttributes, id: string): Promise<CustomerDeviceAttributes> {
        try {
            let customerDevice;
            const findDevice = await this.device.findOne({ where: { ip: params.ip } });
            if (findDevice) {
                customerDevice = await customerDeviceModel.create({ id: uuidv4(), customerId: id, deviceId: findDevice.id, deleted: false });
            } else {
                const device = await this.device.create({ ...params });
                customerDevice = await customerDeviceModel.create({ id: uuidv4(), customerId: id, deviceId: device.id, deleted: false });
            }
            return customerDevice;
        } catch (error) {
            console.log(error);
        }
    }

    protected async updateStatus(params: DeviceAttributes): Promise<number> {
        try {
            const device = await this.device.update({ status: params.status }, { where: { ip: params.ip } });
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

    protected async shareDevice(params: { emailShared: string; deviceId: string }): Promise<CustomerDeviceAttributes> {
        try {
            const findCustomer = await customerModel.findOne({ where: { email: params.emailShared } });
            if (findCustomer) {
                const customerDevice = await customerDeviceModel.create({ id: uuidv4(), customerId: findCustomer.id, deviceId: params.deviceId, deleted: false });
                return customerDevice;
            } else return undefined;
        } catch (error) {
            console.log(error);
        }
    }
}
