/**
 * Created by Administrator on 2016/10/21.
 */
var url=require("url");
var fs=require("fs");
exports.gotoIndex=function (req,res){
    var readPath=url.parse("dns.html").pathname;
    var fileContent=fs.readFileSync(readPath);
    res.end(fileContent);
}