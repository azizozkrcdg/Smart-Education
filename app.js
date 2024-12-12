import express, { urlencoded } from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import pageRoute from './routes/pageRoute.js';
import courseRoute from './routes/courseRoute.js';
import e from 'express';

const app = express();
dotenv.config();

// db connect
connectDB();

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/', pageRoute);
app.use('/courses', courseRoute);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
