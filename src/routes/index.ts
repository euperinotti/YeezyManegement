import { Request, Response, Router } from "express";
import * as Rotas from '../controllers/home.controller';

const routes = Router();

routes.get('/', Rotas.home);
routes.get('/equipament', Rotas.equipament);
routes.get('/client', Rotas.client);

export default routes