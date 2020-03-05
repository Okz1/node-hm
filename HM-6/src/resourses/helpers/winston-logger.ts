import * as winston from 'winston';

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        new winston.transports.Console({
            level: 'debug',
            handleExceptions: true
        })
    ],
    exitOnError: false
});

export function winstonLogger(msg: string, err: number, arg: any) {
    logger.log({
        level: 'error',
        message: `Error occurred: in ${msg} with args: ${arg} error number: ${err} `
    });
}

export function appLogger(err: any, req: any, res:any, next: any) {
    if (err) {
        winstonLogger('app', err.stack, null);
    }
    logger.log({
        level: 'info',
        message: `Http method ran: ${req.body}`
    });
    next();
}
