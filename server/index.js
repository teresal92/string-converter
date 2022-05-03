const express = require('express');
const morgan = require('morgan');

const PORT = process.env.PORT || 3001;

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded( {extended: false }));

app.get('/', (req, res) => {
  res.send({ message: 'Hello from string-converter server!' });
})

app.post('/test', (req, res) => {
  let { string_to_cut } = req.body;

  let returnString = '';

  for (let i = 2; i < string_to_cut.length - 2; i += 3) {
    let char = string_to_cut[i];
    if (char) {
      returnString += char;
    }
  }

  res.send({ 'return_string': returnString });
})

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});