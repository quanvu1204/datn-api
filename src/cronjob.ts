import dayjs from 'dayjs';
import * as cron from 'node-cron';
import { Op } from 'sequelize';
import deviceModel from './models/device.model';

const cronJob = cron.schedule('* * * * *', async () => {
    const device = await deviceModel.findAll({ where: { timer: { [Op.not]: null } } });
    device.map((item) => {
        const currentDate = dayjs().hour() + ':' + dayjs().minute() + ':00';
        if (currentDate === item.timer.time) {
            item.update({ status: item.timer.status === 'bật' ? 'on' : 'off' });
        }
    });
});

export default cronJob;
