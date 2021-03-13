import config from './env';

const createSequelizeConfigForEnv = (environment: string | undefined) => {
  switch (environment) {
    case 'production': {
      return {
        production: config.database,
      };
    }
    case 'test': {
      return {
        test: config.database,
      };
    }
    default: {
      return {
        development: config.database,
      };
    }
  }
};
module.exports = createSequelizeConfigForEnv(process.env.NODE_ENV);
