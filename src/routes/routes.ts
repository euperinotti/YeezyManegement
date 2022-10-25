import { Request, Response, Router } from "express";
import path from 'path';

const route = Router();

route.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../pages/index.html'));
})

export default route