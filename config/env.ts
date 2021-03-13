import dotenv from 'dotenv';

export const Environment = {
    Test: 'test',
    Production: 'production',
    Development: 'development',
};

function getEnvironmentFilePath() {
    switch (process.env.NODE_ENV) {
        case Environment.Test:
            return './.env.test';
        case Environment.Production:
            return './.env.prod';
        default:
            return './.env';
    }
}

// Load environment from env file
dotenv.config({
    path: getEnvironmentFilePath(),
});

const poolConfig = {
    max: 100,
    min: 0,
    idle: 20000,
    acquire: 20000,
    evict: 30000,
    handleDisconnects: true,
};

const database = {
    username: process.env.DB_USERNAME ? process.env.DB_USERNAME : 'postgres',
    password: process.env.DB_PASSWORD ? process.env.DB_PASSWORD : '1234', // if blank then set null
    database: process.env.DB_NAME ? process.env.DB_NAME : 'beemassistant',
    host: process.env.DB_HOST ? process.env.DB_HOST : 'localhost',
    pool: poolConfig,
    dialect: 'postgres',
    logging: process.env.NODE_ENV === Environment.Development,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : 5432,
    timezone: '+00:00',
};

export default {
    /**
     * Application environment mode either developement or production or test
     * @type {String}
     */
    environment: process.env.NODE_ENV,

    /**
     * Database connection for each environment
     * @type {Object}
     */
    database,

    jwtSecret: process.env.JWT_SECRET,
    jwtExpiresIn: '20d',

    /**
     * Mail server information
     * @type {Object}
     */
    mailServer: process.env.EMAIL_SERVER,
    mailPort: process.env.EMAIL_PORT,
    mailAuthUserName: process.env.EMAIL_AUTH_USERNAME,
    mailAuthPassword: process.env.EMAIL_AUTH_PASSWORD,
    senderEmail: process.env.SENDER_EMAIL,
    senderName: process.env.SENDER_NAME,
    sysAdminEmail: process.env.SYS_ADMIN_MAIL,

    salt: process.env.SALT,
};
