# Node.js tcp server-client playground

* Simple tcp socket server with a simple protocol.

## Usage

* Compile typescript codes with `npm run compile`
* To run server: `npm run start-server`
* To run client: `npm run start-client`

```
Usage: 
  1. "+" command. Sums the arguments given after "+". Arguments can be float and comma separated. 
    Example: +1,2 and +-13.23,1253.2 
  2. "*" command. Multiplies the arguments given after "*"
    Example: *1,0 and *-13.23,1253.2
  3. "close" command. Shutdowns the server
  4. "help" command. Prints this help

```

## Protocol

1. Messages starting with '+'. After '+', numbers listed as comma seperated.
    * Examples:
        * +2,3 -> gives 5
        * +-1,1 -> gives 0
        * +1.1,2.2 -> gives 3.3
2. Messages starting with '+'. After '+', numbers listed as comma seperated.
    * Examples:
        * *2,3 -> gives 6
        * *-1,1 -> gives -1
        * *3.14,3.14 -> gives 9.8596
        * *3.14,0 -> gives 0
3. 'close' message. Closes the server. The server script will end if there are no active connections left.

## Tests

* Tests are in [tests](./tests) folder. You can run tests with `npm test` command.


