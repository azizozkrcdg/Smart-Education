import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

// template engine
app.set('view engine', 'ejs');

// middlewares
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.status(200).render('index', {
    page_name : "index"
  });
}); 

app.get('/about', (req, res) => {
  res.status(200).render('about', {
    page_name : "about"
  });
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
