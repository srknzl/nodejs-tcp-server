import {Socket} from 'net';

const socket = new Socket();

socket.connect({
    port: 3000,
    host: '127.0.0.1'
}, () => {
    console.log('Connected!');
    process.stdin.pipe(socket);
});

socket.on('data', data => {
    console.log(data.toString());
});

socket.on('error', error => {
    console.log(error.toString());
});

socket.on('end', () => {
    console.log('Connection closed by server.');
});

socket.on('close', had_error => {
    console.log('Socket closed.');
});
