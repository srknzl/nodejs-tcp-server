import {Socket, Server} from 'net';
import {sumArgs, multiplyArgs} from './util';

const server = new Server((socket: Socket) => {
    console.log(`Connected ${socket.remoteAddress} ${socket.remotePort}`);
});

const writeHelp = (socket: Socket): void => {
    socket.write(`
        Usage:
          1. "+" command. Sums the arguments given after "+". Arguments can be float and comma separated.
            Example: +1,2 and +-13.23,1253.2
          2. "*" command. Multiplies the arguments given after "*"
            Example: *1,0 and *-13.23,1253.2
          3. "close" command. Shutdowns the server
          4. "help" command. Prints this help
    `);
};

const PORT = 3000;

server.on('connection', socket => {
    socket.write('hello!\n');
    socket.on('data', data => {
        const message = data.toString().trim();
        if (message === 'close') {
            socket.write('ok closing, bye...');
            socket.destroy();
            server.close();
        } else if (message[0] === '+') {
            const arithmeticResult = sumArgs(message);
            if (arithmeticResult.error === null) {
                socket.write(`The sum is ${arithmeticResult.result}\n`);
            } else {
                socket.write(arithmeticResult.error);
            }
        } else if (message[0] === '*') {
            const arithmeticResult = multiplyArgs(message);
            if (arithmeticResult.error === null) {
                socket.write(`The result is ${arithmeticResult.result}\n`);
            } else {
                socket.write(arithmeticResult.error);
            }
        } else if (!message.trim()) {
            socket.write('Empty...\n');
        } else if (message.trim() === 'help') {
            writeHelp(socket);
        } else {
            socket.write('Unknown command.\n');
            writeHelp(socket);
        }
    });
    server.on('close', () => {
        socket.destroy();
    });
    socket.on('end', () => {
        console.log('client disconnected');
    });
});

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Started listening on port ${PORT}`);
});

