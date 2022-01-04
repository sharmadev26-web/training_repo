const path = require('path');

let getPathApiInfo = () => {
    console.log(path);

    var pathObj = path.parse(__filename);
    console.log(pathObj);

    var baseName = path.posix.basename(pathObj.dir+"/"+pathObj.base, '.js'); //we can use posix or win32 to get consistent results
    console.log(baseName);

    console.log(path.delimiter);
    console.log(path.dirname(pathObj.dir+"/"+pathObj.base, '.js'));
    console.log(path.extname("finame.js"));

    //path.format(pathObject) returns the path string from an object just oppsite to path.parse() 
    var pathFormatObj = path.format({
        root: '/',
        name: 'file',
        ext: '.txt'
    });
    console.log(pathFormatObj);
    //path.win32 - provides access to window specific implemnation of property and methods
    //path.posix - provides access to POSIX specific implemnation of property and methods
    //path.sep - return the specific path seperator for windows \ and for posix /


    //path.join([...paths])

    // Joining 2 path-segments 
    path1 = path.join("users/admin/files", "index.html"); 
    console.log(path1) 
    
    // Joining 3 path-segments 
    path2 = path.join("users", "geeks/website", "index.html"); 
    console.log(path2) 
    
    // Joining with zero-length paths 
    path3 = path.join("users", "", "", "index.html"); 
    console.log(path3)

    //path.relative()

    console.log("Current directory:", __dirname); 
    //path.resolve( [...paths] )
    // Resolving 2 path-segments 
    // with the current directory 
    path1 = path.resolve("users/admin", "readme.md"); 
    console.log(path1) 
    
    // Resolving 3 path-segments 
    // with the current directory 
    path2 = path.resolve("users", "admin", "readme.md"); 
    console.log(path2) 
    
    // Treating of the first segment 
    // as root, ignoring the current directory 
    path3 = path.resolve("/users/admin", "readme.md"); 
    console.log(path3)

    //path.normalize
}

module.exports.getPathApiInfo = getPathApiInfo;

