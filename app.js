import express from 'express';
import dotenv from 'dotenv';
import pageRoute from "./routes/pageRoute.js";

const app = express();
dotenv.config();

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));

app.use('/', pageRoute); 


const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
