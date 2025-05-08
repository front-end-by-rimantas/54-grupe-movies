import express from 'express';
import { PageHome } from '../pages/PageHome.js';
import { Page404 } from '../pages/Page404.js';
import { PageMovies } from '../pages/PageMovies.js';

export const pageRouter = express.Router();

pageRouter.get('/', (req, res) => res.send(new PageHome().render()));
pageRouter.get('/movies', (req, res) => res.send(new PageMovies().render()));
pageRouter.get('/movies/:movieTitle', (req, res) => res.send(new PageMovies().render()));
pageRouter.get('/movies-by-category', (req, res) => res.send(new PageMovies().render()));
pageRouter.get('/movies-by-category/:categoryName', (req, res) => res.send(new PageMovies().render()));
pageRouter.get('*error', (req, res) => res.send(new Page404().render()));