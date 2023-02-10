const EventEmitter = require('events');
const http = require('http')


class Sales extends EventEmitter {
    constructor(){
        super();
    }
}


const myEmitter = new Sales();


myEmitter.on('newSale', () => {
    console.log('There was a new sale!')
});

myEmitter.on('newSale', () => {
    console.log('Customer name: Jonas')
});
myEmitter.on('newSale', stock => {
    console.log(`There are now ${stock} items left in stock.`)
});

myEmitter.emit("newSale", 90);



///////////////////////////



const server = http.createServer();

server.on('request', (req, res) => {
    console.log('Request received!');
    console.log(req.url);
    res.end('Request received!');
});

server.on('request', (req, res) => {
    console.log('Another request');
    // res.end('Another request');
});

server.on('close', () => { //that is the event that is fired when the server, as you can imagine, closes down.

    console.log('Server was closed');
    res.end('Server was closed');

});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server listening... waiting for req')
});