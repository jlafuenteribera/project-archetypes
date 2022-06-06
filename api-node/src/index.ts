import app from './app';
import logger from './config/logger';

app.listen(app.get('port'), '0.0.0.0', (): void => {
  logger.info('Puerto: ' + app.get('port'));
});
