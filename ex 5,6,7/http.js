var http=require("http");
function samp(request, response)
{
response.writeHead(200,{"Content-Type":"text/html"}); 
response.write("WELCOME");
response.write("<h1>KONGU ENGINEERING COLLEGE</h1>");
response.end("<html><body>Home, URL was: "+request.url+"</body></html>"); 
console.log("Request received");
}
var server=http.createServer(samp);

server.listen(8003); 