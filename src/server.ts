import express, { Request, Response, Router } from 'express';
import mainRoutes from './routes/index';

const server = express();
const port = 3333;

server.use(express.static("public"));

server.use(mainRoutes);

server.listen(port, () => console.log(`Server is runnig at port ${port}`));