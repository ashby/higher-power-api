const cfg =  {
    SERVER_PORT: 3200,
    ROOT_URL: '/higher-power',
    ENVIRONMENT: 'dev'
};

switch ( process.env.NODE_ENV ) {
    case 'production':
    case 'ci':
        cfg.PRISMA_SERVER = 'http://prisma:4466';
        break;
    case 'test':
        cfg.PRISMA_SERVER = 'http://localhost:32769';'';
        break;
    default:
        cfg.PRISMA_SERVER = 'http://localhost:32669';
}

process.env.PRISMA_SERVER = cfg.PRISMA_SERVER;
const envPrefix = cfg.ENVIRONMENT === 'prod' ? '' : `${cfg.ENVIRONMENT === 'ci' ? 'dev' : cfg.ENVIRONMENT}.`;
cfg.SERVER_URL = `https://${envPrefix}api.cloud${cfg.ROOT_URL}`;

module.exports = cfg;
