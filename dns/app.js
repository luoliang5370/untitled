/**
 * Created by Administrator on 2016/10/21.
 */
var http=require("http");
var url=require("url");
var rout=require("./routs.js");
var server=http.createServer(function(req,res){
    res.writeHeader(200,{"Content-type":"text/html"});
    req.setEncoding("utf8");
    rout.routes(req,res,url.parse(req.url).pathname);
});
server.listen(3000);
console.log("启动服务。。。。");
