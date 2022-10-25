import express, { Request, Response, Router } from 'express';
import mainRoutes from './routes/routes';

const server = express();

const port = 3333;

server.use(mainRoutes);

server.listen(port, () => console.log(`server is runnig at port ${port}`));