import { Request, Response, Router } from "express";
import { home } from '../controllers/home.controller';

const route = Router();

route.get('/', home);

export default route