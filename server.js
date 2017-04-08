import express from 'express';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

const server = express();

// server.get('/', (req,res) => {
//   res.send("Hello");
// });

server.use(express.static('public'));

server.use(sassMiddleware({
  src: path.join(__dirname, 'sass'),
  dest: path.join(__dirname, 'css')
}));

server.use(function(req, res) {
    res.status(404).send('Sorry cant find that!');
});

// Define the port.
const port = process.env.PORT || 3000;
 
// Start the HTTP(S) server.
server.listen(port, () => {
    console.log(`App listening on port ${port}!`);
});
