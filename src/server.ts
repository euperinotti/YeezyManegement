import express, { Request, Response, Router } from 'express';

const server = express();

const port = 3333;
const route = Router();

route.get('/', (req, res) => {
    // res.send(`gay kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk`);
    res.json({
        message: "mal vindo"
    });
})

server.use(route);

server.listen(port, () => console.log(`server is runnig at port ${port}`));