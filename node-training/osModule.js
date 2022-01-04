const os = require('os');

var getOSAPIInfo = () => {
    //The operating system-specific end-of-line marker
   var eol =  os.EOL;
   console.log(`OS EOL property value: ${eol}`);

   //Returns the operating system CPU architecture for which the Node.js binary was compiled
   console.log(`OS arch property value: ${os.arch()}`);

   //Contains commonly used operating system-specific constants for error codes, process signals, and so on.
   var constants = os.constants;
   //console.log(constants);

   //console.log(os.cpus());

   console.log(os.freemem());

   console.log(os.totalmem());
    
   //console.log(os.getPriority());  //v10.10.0

   console.log(os.homedir());

   console.log(os.hostname());

   //console.log(os.networkInterfaces());

   console.log(os.platform());

   console.log(os.release());

   console.log(os.tmpdir());

   console.log(os.userInfo());


}



module.exports.getOSAPIInfo = getOSAPIInfo;