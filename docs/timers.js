const express = require('express');

const app = express();

app.get('/', (req, res) => { res.send('Hi') });



app.listen(5000, () => console.log('server ready'));

// process.exit(0);
