const express = require('express');

const app = express();

app.get('/', (request, response) => response.send({ start: 'Hello' }));

app.listen(3333);