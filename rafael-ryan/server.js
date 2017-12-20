'use strict';

// REVIEW: There is a package here called body-parser, which is used by the provided POST route. Be sure to install that and save it as a dependency after you create your package.json.
const express = require('express');
const app = express();

const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'))

app.get('/new', (request, response) => {
  response.sendFile('/new.html', {root: './public'})
})

app.use((request, response) => response.status(404).sendFile('404.html',  {root: './public'}))

app.post('/articles', bodyParser, function(request, response) {
  // REVIEW: This route will receive a new article from the form page, new.html, and log that form data to the console. We will wire this up soon to actually write a record to our persistence layer!
  console.log(request.body);
  response.send('Record posted to server!!');
})

app.listen(PORT, () => console.log(`listening on port ${PORT}`))
