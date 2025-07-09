const express = require('express');
const app = express();
const usersRoute = require('./users');

app.use(express.json());
app.use('/users', usersRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server jalan di http://localhost:${PORT}`);
});