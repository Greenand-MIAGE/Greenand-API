import app from './server';
import config from '../config.json';
import log from '../src/logger';

// Start the application by listening to specific port
const port = Number(process.env.PORT || config.PORT || 8080);
app.listen(port, () => {
  log.info(`Express application started on port: ${port}`)
});
