import express from 'express';
import App from './app';

const app = new App({
    port: 4000,
    middleWares: [express.json({ limit: '50mb' }), express.urlencoded({ limit: '50mb', extended: true })],
});

app.listen();
