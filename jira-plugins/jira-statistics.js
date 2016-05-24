var fs = require('fs');

var plugins = JSON.parse(fs.readFileSync("plugins.json", 'utf8'));

var serverCount = 0;
var cloudCount = 0;
var strictServerCount = 0;
var strictCloudCount = 0;
var bothCount = 0;

plugins.forEach(function(p){
    console.log("Download count:", p.downloadCount)
    if(p.name.indexOf("Connector") != -1) {
        //console.log(p)
    //     console.log(p);
    //
    //     return;
    }
    var cloud = p.compatibleApplications[0].hostingSupport.cloud;
    var server = p.compatibleApplications[0].hostingSupport.server;

    if(cloud)
        ++cloudCount;

    if(server)
        ++serverCount;

    if(cloud && server)
        ++bothCount;

    if(cloud && !server)
        ++strictCloudCount;

    if(!cloud && server)
        ++strictServerCount;
});

console.log("serverCount:", serverCount)
console.log("cloudCount:", cloudCount)
console.log("strictServerCount:", strictServerCount)
console.log("strictCloudCount:", strictCloudCount)
console.log("bothCount:", bothCount)


 serverCount = 0;
 cloudCount = 0;
 strictServerCount = 0;
 strictCloudCount = 0;
 bothCount = 0;

plugins.forEach(function(p){
    var cloud = p.compatibleApplications[0].atlassianConnectSupport.cloud;
    var server = p.compatibleApplications[0].atlassianConnectSupport.server;

    if(cloud)
        ++cloudCount;

    if(server)
        ++serverCount;

    if(cloud && server)
        ++bothCount;

    if(cloud && !server)
        ++strictCloudCount;

    if(!cloud && server)
        ++strictServerCount;
});
console.log("")
console.log("serverCount:", serverCount)
console.log("cloudCount:", cloudCount)
console.log("strictServerCount:", strictServerCount)
console.log("strictCloudCount:", strictCloudCount)
console.log("bothCount:", bothCount)