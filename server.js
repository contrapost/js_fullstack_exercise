/**
 * Created by alexandershipunov on 10/02/2017.
 */

import config from './config';
import apiRouter from './api';


import express from 'express';

const server = express();

server.set('view engine', 'ejs');

server.get('/', (req, res) => {
    res.render('index', {
        content: ''
    });
});


server.use('/api', apiRouter);

server.use(express.static('public'));

server.listen(config.port, () => {
    console.info('Express listening on port', config.port);
});





// ****************** Previous exercises **********************
// Modules
// import fs from 'fs';

/*import config, { nodeEnv, logStars} from'./config'

 console.log(config, nodeEnv);

 logStars('Function');*/

// HTTPS
/*
 import https from 'https';

 https.get('https://www.lynda.com', res => {
 console.log('Response status code is', res.statusCode);

 res.on('data', chunk => {
 console.log(chunk.toString());
 });
 });*/


// Server with core
/*
 import http from 'http';

 const server = http.createServer((req, res) => {
 res.write('Hello HTTP!\n');
 setTimeout(() => {
 res.write('I can stream!\n');
 res.end();
 }, 3000);
 });

 server.listen(8080);*/

// Instead of 'server.use('/api', apiRouter);'
/*
 server.get('/about.html', (req, res) => {
 fs.readFile('./about.html', (err, data) => {
 res.send(data.toString());
 });
 });
 */


/*server.get('/', (req, res) => {
 res.send('Hello Express\n');
 });*/

// Instead of:
/*
server.get('/', (req, res) => {
    res.render('index', {
        content: '...'
    });
});*/
