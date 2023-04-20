const mongoose = require('mongoose');
const genres = require('./routes/genres');
const customers = require('./routes/customers');
const movies = require('./routes/movies');
const employees = require('./routes/employees');
const excels = require('./routes/excels');
const express = require('express');
const app = express();
const cors=require('cors')

mongoose.connect('mongodb://localhost:27017/ExcelDb')
  .then(() => console.log('Connected to MongoDB...'))
app.use(express.json());
app.use(cors())
// app.use('/api/genres', genres);
// app.use('/api/customers', customers);
// app.use('/api/movies', movies);
// app.use('/api/employees', employees);
app.use('/api/excels', excels);

const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));