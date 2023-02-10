const fs = require('fs');
const server = require('http').createServer();

server.on('request', (req, res) => {
    // solution 1
    // fs.readFile('./starter/test-file.txt', (err, data)=> {
    //     if (err) console.log(err);
    //     res.end(data);
    // }) //it could make the app run out and Because the node process will very quickly run out of resources and your app will quit working, everything will crash

    //solution 2: Streams if u using stream after u read one piece of data u can just write the response that u hv read to the client
    // const readable =  fs.createReadStream('./starter/test-file.txt')
    // readable.on('data', chunk => {
    //     res.write(chunk);

    // });

    // readable.on('end', () => {
    //     res.end();
    // });

    // readable.on("error", err => {
    //     res.statusCode = 500;
    //     res.end("File not found!");
    // })

    // Solution 3 the pipe will handle the speed of the data going out
    const readable =  fs.createReadStream('./starter/test-file.txt')
    readable.pipe(res);
    // readableSources.pipe(writeableDestination)


});

server.listen(8000, '127.0.0.1', () => {
    console.log('Server listening... waiting for req')
});