import { v4 as uuidv4 } from 'uuid';
import bcrypt from '../libraries/bcrypt';

const listAdmin = [
    {
        id: uuidv4(),
        email: 'beemadmin@assistant.com',
        password: bcrypt.generateHashPassword('admin123'),
    },
];

module.exports = {
    up: async (queryInterface) => {
        try {
            const admins = [];
            for (const admin of listAdmin) {
                const record = await queryInterface.rawSelect(
                    'Admins',
                    {
                        where: {
                            email: admin.email,
                        },
                    },
                    ['id']
                );
                if (!record) {
                    admins.push(admin);
                }
            }
            if (admins.length) return queryInterface.bulkInsert('Admins', admins);
        } catch (error) {
            return Promise.resolve();
        }
    },

    down: async () => {
        return Promise.resolve();
    },
};
