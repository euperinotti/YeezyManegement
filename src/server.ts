import express, { Request, Response, Router } from 'express';
import mainRoutes from './routes/index';

const app = express();
const port = 3333;

app.set('view engine', 'ejs');
app.use(express.static("./public"));
app.use(mainRoutes);

app.listen(port, () => console.log(`Server is runnig at port ${port}`));