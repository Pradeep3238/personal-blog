var module=require("./module");
var http=require("http");
var url=require("url");
var query=require("querystring");
var fs=require('fs');
http.createServer(function(request,response){
    var data="";
    request.on('data',function(chunk){
        data+=chunk;
    });
    request.on("end",function(){
        var name=query.parse(data)["username"];
        console.log(name);
        var mail=query.parse(data)["email"];
        console.log(mail);
        var message=query.parse(data)["message"]
        console.log(message)
        var rating=query.parse(data)["rating"];
        if(request.url==="/feedback"){
            module.feedback(name,mail,message,rating,response);
        }
        if(request.url==="/subscribe"){
            module.subscribe(name,mail,response);
        }
    });
}).listen(8001);
console.log("Server Running");