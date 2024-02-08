const dgram = require('dgram');
const server = dgram.createSocket('udp4');

const PORT = 12345;

server.on('message', (msg, rinfo) => {
    console.log(`Received message from ${rinfo.address}:${rinfo.port}: ${msg}`);
});

server.on('listening', () => {
    const address = server.address();
    console.log(`UDP server listening on ${address.address}:${address.port}`);
});

server.bind(PORT);

