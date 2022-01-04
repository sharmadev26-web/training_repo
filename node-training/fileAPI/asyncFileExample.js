const fs = require('fs');
var getAsyncResult =  () => {
    try{
        console.log("initial time sync..."+new Date());
        fs.mkdir('/temp/hello', () => {
            console.log("last time sync......"+new Date());
            console.log("dir creted success fully");
        });
        console.log("final time sync......"+new Date());
       }
    catch (err){
           console.log("throw execption syncs...."+err);
    }

}

module.exports.getAsyncResult = getAsyncResult;