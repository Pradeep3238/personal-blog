var dburl1="mongodb://127.0.0.1:27017/subscribers";
var dburl2="mongodb://127.0.0.1:27017/responses";
var mongo=require("mongojs");
var db1=mongo(dburl1);
var db2=mongo(dburl2);
console.log("Connected to mongodb");   

exports.subscribe=function(username,email,response){
    db1.subscribers.insert({"username":username,"email":email},
    function(err,subscribers){
        if(err){
            response.write("Error");
            response.end();
        }
        else if(!subscribers){
            response.write("user not found");
            response.end();
        }
        else{
            response.write("Sucss");
            response.end();
        }
    });
}
exports.feedback=function(name,mail,message,rating,response){
    db2.responses.insert({"username":name,"email":mail,"message":message,"rating":rating},
    function(err,responses){
        if(err || !responses){
            response.write("Invalid username");
            response.end();
        }
        else{
            response.write("thank you for you feedback");
            response.end();
        }
    });
}