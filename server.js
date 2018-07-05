/* eslint-disable no-console */
import server from './app';

const port = process.env.PORT || 7000;

server.listen(port, () => {
  console.log(`server listening on ${port}`);
});

