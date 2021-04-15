module.exports = {
    up: async (queryInterface, Sequelize) => {
        /**
         * Add altering commands here.
         *
         * Example:
         * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
         */
        await queryInterface.createTable('Messages', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
            },
            customerId: {
                type: Sequelize.UUID,
                allowNull: false,
            },
            isBot: {
                type: Sequelize.BOOLEAN,
                defaultValue: false,
                allowNull: true,
            },
            message: {
                type: Sequelize.TEXT,
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
