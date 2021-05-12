import { Op } from 'sequelize';
import { CityModel, CityStatic } from '../interfaces/city';

export default class CityService {
    private city: CityStatic;

    constructor(city: CityStatic) {
        this.city = city;
    }

    protected async findAllCity(name: string): Promise<CityModel> {
        try {
            const city = await this.city.findOne({
                where: { name: { [Op.iLike]: name } },
            });
            return city;
        } catch (error) {
            console.log(error);
        }
    }
}
