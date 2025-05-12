import express from 'express';
import { apiRegister } from '../api/apiRegister.js';

export const apiRouter = express.Router();

apiRouter.post('/api/register', apiRegister);