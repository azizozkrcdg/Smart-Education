import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.status(200).get('/', (req, res) => {    
  res.send('hi');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
