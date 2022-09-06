let num = 3;
//1. Save a function (code to run,parameters awaiting inputs)
function multiplyBy2(inputNumber) {
    const result = inputNumber * 2;
    return result;
}
// 2a. Call/run/invoke/execute a function (with parens) 
// and 2b. insert an input (an argument)
const output = multiplyBy2(num);
const newOutput = multiplyBy2(10)
console.log(output, newOutput)


//! The most powerful built-in Node feature of all:
//! http (and its associated build-in label in JS- also http conveniently)
// Using http feature of node to setup an socket
const server = http.createServer()
server.listen(80)
// Inbound web request => run code to send back message if inbound message => send back data
