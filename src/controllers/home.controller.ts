import { Request, Response } from 'express';
import path from 'path';

export const home = (req: Request, res: Response) => {
    res.render(path.join(__dirname, '../views/pages/index.ejs'));
}