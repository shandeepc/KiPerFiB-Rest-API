const whitelist = ['http://127.0.0.1'];
const corsOptions = {
    origin: (origin, callback) => {
        if (whitelist.indexOf(origin) !== -1 || !origin) {
            callback(null, true)
        } else {
            callback(new Error('Not allowed by CORS'));
            logger.error(`Not allowed by CORS, Origin --> ${origin}`);
        }
    },
    optionsSuccessStatus: 200
}

module.exports = corsOptions;