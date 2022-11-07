import { Request, Response, Router } from "express";
import * as Rotas from '../controllers/home.controller';

const routes = Router();

routes.get('/', Rotas.home);
routes.get('/equipaments', Rotas.equipament);
routes.get('/clients', Rotas.client);
routes.get('/login', Rotas.login);
routes.get('/config', Rotas.configdb);

export default routes