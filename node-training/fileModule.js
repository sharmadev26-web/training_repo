const fs = require('fs');

const syncFileExapmle = require('./fileAPI/syncFileExample');
const asyncFileExapmle = require('./fileAPI/asyncFileExample');
const promiseFileExapmle = require('./fileAPI/promiseBasedFileExample');

var getFSAPIInfo = ()=>{
    //syncFileExapmle.getSyncResult();
    //asyncFileExapmle.getAsyncResult();
    promiseFileExapmle.getPromiseBasedResult();
}


module.exports.getFSAPIInfo = getFSAPIInfo;