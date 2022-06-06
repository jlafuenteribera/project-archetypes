import winston, { Logger } from 'winston';
import { Format } from 'logform';

class CustomLogger {
  private customFormat: Format;
  public logger: Logger;

  public constructor() {
    this.customFormat = winston.format.printf(({ level, message, label, timestamp }): string => {
      return `${timestamp} [${label}] ${level}: ${message}`;
    });
    this.logger = winston.createLogger({
      level: process.env['LOG_LEVEL'],
      format: winston.format.combine(
        winston.format.label({ label: 'api-node' }),
        winston.format.timestamp(),
        this.customFormat
      ),
      transports: [new winston.transports.File({ filename: 'api-node.log' })]
    });

    if (process.env['NODE_ENV'] !== 'production') {
      this.logger.add(
        new winston.transports.Console({
          format: winston.format.combine(winston.format.colorize(), this.customFormat)
        })
      );
    }
  }
}

export default new CustomLogger().logger;
