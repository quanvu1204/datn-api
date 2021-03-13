module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('Customers', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.INTEGER,
                autoIncrement: true,
            },
            firstName: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            lastName: {
                type: Sequelize.STRING(50),
                allowNull: false,
            },
            email: {
                type: Sequelize.STRING(50),
                unique: true,
            },
            password: {
                type: Sequelize.STRING(200),
                allowNull: false,
            },
            sex: {
                type: Sequelize.ENUM('male', 'female'),
                defaultValue: 'male',
            },
            otpSecret: {
                type: Sequelize.STRING(32),
            },
            isActive: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            deleted: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: false,
            },
            createdAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
                defaultValue: Sequelize.fn('NOW'),
            },
        });
    },

    down: async (queryInterface) => {
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
        await queryInterface.dropTable('Customers');
    },
};
