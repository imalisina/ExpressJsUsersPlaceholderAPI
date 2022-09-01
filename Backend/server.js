const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/users', require('./Routes/UsersRoutes'));

const PORT = 5000;
app.listen(PORT, () => console.log(`Server Running On Port ${PORT}`));