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
// ----------------
// Node auto-runs the code(function) for us a request arrives from a user
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
    functionsToSetOutgoingData.end("Welcome to Twitter")
}
//1. We don't know when the inbound request would come - we have to rely on Node to Trigger JS code to run
//2. JavaScript is single-threaded & synchronous. All slow work (e.g.speaking to a database) is done by Node in the background(more on this letter)


//! -- Calling a Function Under the Hood
//? Two parts to calling a function - executing its code and inserting input(arguments)
// In multiplyBy2(3) the argument is 3 and we, the developer, inserted it
// Node not only will auto-run our function at the right moment, it will also automatically 
// insert whatever the relevant data is as the additional argument(input)
// Sometimes it will even insert a set of functions in an object(as an argument) which give us direct access to
// the message (in Node) being sent back to the user and allows us to add data to that message

//! Request & Response with Node
//? Messages are sent in HTTP format - The 'protocol' for browser-server interaction
// HTTP message: Request line(url, method), Headers, Body(optional)

const tweets = ["hi", 'emoji', 'hello', 'emoji2', 'emoji3'];
function doOnIncoming(incomingData, functionsToSetOutgoingData) {
    const tweetNeeded = incomingData.url.slice(8) - 1
    functionsToSetOutgoingData.end(tweets[tweetNeeded]);
}
//! Response Headers
//? Our return message is also in HTTP format
// We can use the body to send the data and headers to send important metadata
// In the headers we can include info on the format of the data being sent back -e.g. it's html so to load it as a webpage