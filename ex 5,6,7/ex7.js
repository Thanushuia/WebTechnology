import { createServer } from 'http';
import { myDateTime } from './module1';
createServer((req,res)=>{
    
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write("<h1>The date and time are currently: </h1>"+myDateTime());
    res.end();

}).listen(8008);
console.log("Server running.");
