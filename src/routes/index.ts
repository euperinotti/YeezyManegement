import { Request, Response, Router } from "express";
import { home } from '../controllers/homeController';
import { clients } from "../controllers/clientsController"

const routes = Router();

routes.get('/', home);
routes.get('/equipaments');
routes.post('/equipaments');
routes.get('/clients', clients);

export default routes