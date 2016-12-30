/**
 * Created by Administrator on 2016/9/7.
 */
var http = require("http");
var url = require("url");
function start(route){
    function onRequest(request,response){
        var pathname = url.parse(request.url).pathname;
        console.log("Request for "+ pathname +" received");

        route(pathname);

        response.writeHead( 200,
            {'Content-Type': 'text/plain'});
        response.write("Hello world");
        response.end();
    }
    http.createServer(onRequest).listen(8888);
    console.log('Server running at http://127.0.0.1:8888/');
}
exports.start = start;



