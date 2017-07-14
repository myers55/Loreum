const express = require('express');
const server = express();
var loremIpsum = require('lorem-ipsum'),
    output = loremIpsum({
        count: 5

        , units: 'paragraphs'
        , format: 'html'



    });

server.get('/', function (request, response) {

    response.send(output);
});

server.listen(3000, function () {
    console.log('Successfully started express application')
});