import { Request, Response, Router } from "express";
import { home } from '../controllers/home.controller';

const routes = Router();

routes.get('/', home);

export default routes