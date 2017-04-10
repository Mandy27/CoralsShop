import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';
import apiRouter from './api';

const server = express();

// server.get('/', (req,res) => {
//   res.send("Hello");
// });

server.use(express.static('public'));
server.use('/api', apiRouter);

server.get('*', (req , res , next) => {
    // if (req.url === '/inventory') return next();
    res.sendFile(path.join(__dirname+'/public/index.html'))
});

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'css')
}));

server.use(function(req, res) {
    res.status(404).send("<h2>404 ERROR: Sorry we can't find that page!!!</h2>");
});

// Define the port.
const port = process.env.PORT || 3000;
 
// Start the HTTP(S) server.
server.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
