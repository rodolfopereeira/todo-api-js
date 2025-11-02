import app from './app.js';
import dotenv from 'dotenv';        

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log('Server rodando na porta: http://localhost:8080');
});