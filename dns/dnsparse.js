/**
 * Created by Administrator on 2016/10/21.
 */
var dns=require("dns");
var querystring=require("querystring");
exports.gotoDns=function(req,res){
    var params="";
    req.addListener("data",function(postData){
        params+=postData;
    });
    req.addListener("end",function(){
        var params2 = querystring.parse(params);
        console.log("params['dns']:::"+params2["dns"]);
        dnsparse(params,function(domain,address){
            res.end("<html><head><meta http-equiv='Content-Type' content='text/html; charset=utf-8' />" +
                "<body>" +
                "<div>domain:<span style='color:red;'>"+domain+"</span> " +
                "ip:<span style='color:red;'>"+address.join(",")+"</span></div>" +
                "</body></head");
        });
    });
}
function dnsparse(params,callback){
    var domain=querystring.parse(params).dns;
    dns.resolve(domain,function(error,address){
        if(!address){
            address=['域名不存在'];
        }
        console.log(address);
        callback(domain,address);//设置回调函数的参数
    });
}