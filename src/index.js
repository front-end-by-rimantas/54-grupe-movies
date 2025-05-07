import express from 'express';
import { pageRouter } from './router/pageRouter.js';

const app = express();
app.use('/', pageRouter);

app.listen(5412, () => {
    console.log(`Serveris: http://localhost:5412`);
});