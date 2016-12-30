/**
 * Created by Administrator on 2016/10/21.
 */
var dnsParse=require("./dnsparse.js");
var index=require("./index.js");
exports.routes=function(req,res,pathName){
    switch(pathName){
        //进入dns解析
        case "/parse":
            dnsParse.gotoDns(req,res);
            break;
        //跳转到首页
        default:
            index.gotoIndex(req,res);
            break;
    }
}