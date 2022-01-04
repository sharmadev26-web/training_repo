const fs = require('fs');
var getSyncResult =  () => {
   try{
    console.log("initial time..."+new Date());
    fs.mkdirSync('/tmp/hello');
    console.log("last time......"+new Date());
    console.log("dir creted success fully");
   }
   catch (err){
       console.log("throw execption"+err);
   }

}

module.exports.getSyncResult = getSyncResult;