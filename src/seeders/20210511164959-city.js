import { v4 as uuidv4 } from 'uuid';

const cities = [
    {
        name: 'An Giang',
        id: uuidv4(),
        locationKey: 351821,
    },
    {
        name: 'Bà Rịa - Vũng Tàu',
        id: uuidv4(),
        locationKey: 352095,
    },
    {
        name: 'Bắc Giang',
        id: uuidv4(),
        locationKey: 352098,
    },
    {
        name: 'Bắc Kạn',
        id: uuidv4(),
        locationKey: 352107,
    },
    {
        name: 'Bạc Liêu',
        id: uuidv4(),
        locationKey: 352113,
    },
    {
        name: 'Bắc Ninh',
        id: uuidv4(),
        locationKey: 352118,
    },
    {
        name: 'Bến Tre',
        id: uuidv4(),
        locationKey: 352226,
    },
    {
        name: 'Bình Định',
        id: uuidv4(),
        locationKey: 352233,
    },
    {
        name: 'Bình Dương',
        id: uuidv4(),
        locationKey: 352249,
    },
    {
        name: 'Bình Phước',
        id: uuidv4(),
        locationKey: 352259,
    },
    {
        name: 'Bình Thuận',
        id: uuidv4(),
        locationKey: 352262,
    },
    {
        name: 'Cà Mau',
        id: uuidv4(),
        locationKey: 352499,
    },
    {
        name: 'Cần Thơ',
        id: uuidv4(),
        locationKey: 352508,
    },
    {
        name: 'Cao Bằng',
        id: uuidv4(),
        locationKey: 352511,
    },
    {
        name: 'Đà Nẵng',
        id: uuidv4(),
        locationKey: 352954,
    },
    {
        name: 'Đắk Lắk',
        id: uuidv4(),
        locationKey: 352955,
    },
    {
        name: 'Đắk Nông',
        id: uuidv4(),
        locationKey: 352969,
    },
    {
        name: 'Điện Biên',
        id: uuidv4(),
        locationKey: 353001,
    },
    {
        name: 'Đồng Nai',
        id: uuidv4(),
        locationKey: 353027,
    },
    {
        name: 'Đồng Tháp',
        id: uuidv4(),
        locationKey: 353033,
    },
    {
        name: 'Gia Lai',
        id: uuidv4(),
        locationKey: 353265,
    },
    {
        name: 'Hà Giang',
        id: uuidv4(),
        locationKey: 353389,
    },
    {
        name: 'Hà Nam',
        id: uuidv4(),
        locationKey: 353404,
    },
    {
        name: 'Hà Nội',
        id: uuidv4(),
        locationKey: 353412,
    },
    {
        name: 'Hà Tĩnh',
        id: uuidv4(),
        locationKey: 353418,
    },
    {
        name: 'Hải Dương',
        id: uuidv4(),
        locationKey: 353501,
    },
    {
        name: 'Hải Phòng',
        id: uuidv4(),
        locationKey: 353511,
    },
    {
        name: 'Hậu Giang',
        id: uuidv4(),
        locationKey: 353560,
    },
    {
        name: 'Thành phố Hồ Chí Minh',
        id: uuidv4(),
        locationKey: 353981,
    },
    {
        name: 'Hòa Bình',
        id: uuidv4(),
        locationKey: 353983,
    },
    {
        name: 'Hưng Yên',
        id: uuidv4(),
        locationKey: 353992,
    },
    {
        name: 'Khánh Hòa',
        id: uuidv4(),
        locationKey: 354222,
    },
    {
        name: 'Kiến Giang',
        id: uuidv4(),
        locationKey: 4493,
    },
    {
        name: 'Kon Tum',
        id: uuidv4(),
        locationKey: 354243,
    },
    {
        name: 'Lai Châu',
        id: uuidv4(),
        locationKey: 353000,
    },
    {
        name: 'Lâm Đồng',
        id: uuidv4(),
        locationKey: 354287,
    },
    {
        name: 'Lạng Sơn',
        id: uuidv4(),
        locationKey: 354293,
    },
    {
        name: 'Lào Cai',
        id: uuidv4(),
        locationKey: 354305,
    },
    {
        name: 'Long An',
        id: uuidv4(),
        locationKey: 354474,
    },
    {
        name: 'Nam Định',
        id: uuidv4(),
        locationKey: 355085,
    },
    {
        name: 'Nghệ An',
        id: uuidv4(),
        locationKey: 355417,
    },
    {
        name: 'Ninh Bình',
        id: uuidv4(),
        locationKey: 355447,
    },
    {
        name: 'Ninh Thuận',
        id: uuidv4(),
        locationKey: 355455,
    },
    {
        name: 'Phú Thọ',
        id: uuidv4(),
        locationKey: 355588,
    },
    {
        name: 'Phú Yên',
        id: uuidv4(),
        locationKey: 355600,
    },
    {
        name: 'Quảng Bình',
        id: uuidv4(),
        locationKey: 355698,
    },
    {
        name: 'Quảng Nam',
        id: uuidv4(),
        locationKey: 355711,
    },
    {
        name: 'Quảng Ngãi',
        id: uuidv4(),
        locationKey: 355727,
    },
    {
        name: 'Quảng Ninh',
        id: uuidv4(),
        locationKey: 355737,
    },
    {
        name: 'Quảng Trị',
        id: uuidv4(),
        locationKey: 355759,
    },
    {
        name: 'Sóc Trăng',
        id: uuidv4(),
        locationKey: 355938,
    },
    {
        name: 'Sơn La',
        id: uuidv4(),
        locationKey: 355945,
    },
    {
        name: 'Tây Ninh',
        id: uuidv4(),
        locationKey: 356171,
    },
    {
        name: 'Thái Bình',
        id: uuidv4(),
        locationKey: 356177,
    },
    {
        name: 'Thái Nguyên',
        id: uuidv4(),
        locationKey: 356182,
    },
    {
        name: 'Thanh Hóa',
        id: uuidv4(),
        locationKey: 356184,
    },
    {
        name: 'Thừa Thiên-Huế',
        id: uuidv4(),
        locationKey: 356204,
    },
    {
        name: 'Tiền Giang',
        id: uuidv4(),
        locationKey: 356216,
    },
    {
        name: 'Trà Vinh',
        id: uuidv4(),
        locationKey: 356248,
    },
    {
        name: 'Tuyên Quang',
        id: uuidv4(),
        locationKey: 356319,
    },
    {
        name: 'Vĩnh Long',
        id: uuidv4(),
        locationKey: 356354,
    },
    {
        name: 'Vĩnh Phúc',
        id: uuidv4(),
        locationKey: 356357,
    },
    {
        name: 'Yên Bái',
        id: uuidv4(),
        locationKey: 356425,
    },
];

module.exports = {
    up: async (queryInterface) => {
        try {
            return queryInterface.bulkInsert('Cities', cities);
        } catch (error) {
            return Promise.resolve();
        }
    },

    down: async () => {
        return Promise.resolve();
    },
};
