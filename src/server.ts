import express, { Request, Response, Router } from 'express';
import mainRoutes from './routes/index';
import path from 'path';

const app = express();
const port = 3333;

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use('/public', express.static("public"));
app.use(mainRoutes);

app.listen(port, () => console.log(`Server is runnig at port ${port}`));