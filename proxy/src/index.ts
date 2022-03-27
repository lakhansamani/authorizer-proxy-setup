import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import proxy from 'express-http-proxy';

const main = async () => {
  try {
    // create express app
    const app: express.Application = express();

    // add cors middleware
    app.use(cors());

    // add json body parser
    app.use(bodyParser.json());

    app.use('/', express.static('public'));

    app.use(proxy('http://localhost:8080', {}));

    // bind port and start server
    const port: number = parseInt(process.env.PORT || '3000', 10);
    app.listen(port, () => {
      console.log(`🚀 server started on port: ${port}`);
    });
  } catch (error) {
    console.error(error);
  }
};

main();
