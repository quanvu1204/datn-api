import * as bodyParser from 'body-parser';
import App from './app';

const app = new App({
    port: 4000,
    middleWares: [bodyParser.json(), bodyParser.urlencoded({ extended: true, limit: '5m' })],
});

app.listen();
