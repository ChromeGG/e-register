import Hapi from '@hapi/hapi';
import { commonConfig } from './config/config.js';

const init = async () => {
  const server = Hapi.server({
    port: commonConfig.port,
    host: commonConfig.host
  });

  server.route({
    method: 'GET',
    path: '/',
    handler: (request, h) => {
      return 'Hello World!';
    }
  });

  await server.start();
  console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
  console.log(err);
  process.exit(1);
});

init();
