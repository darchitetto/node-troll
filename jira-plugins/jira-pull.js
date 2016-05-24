var fs = require('fs')
var request = require('request-json');
var client = request.createClient('https://marketplace.atlassian.com/rest/1.0/plugins/search');

var plugins = [];
var currentKeyCount = -1;

function getData(offset, max, callback) {
    console.log("offset:", offset);
    console.log("currentKeyCount:", currentKeyCount);
    console.log("Plugin Count:", plugins.length);
    console.log("\n");

    // if(offset >= max) {
    if(keyCount() == currentKeyCount) {
        callback();
        return;
    }
    else {
        currentKeyCount = keyCount();
    }

    var adjustedOffset = offset * 50;
    client.get("??q=&limit=50&offset=" + adjustedOffset, function (err, res, body) {
        plugins = plugins.concat(body.plugins);

        fs.writeFileSync('plugins' + offset + '.json', JSON.stringify(plugins), 'utf8');
        fs.writeFileSync('plugins.json', JSON.stringify(plugins), 'utf8');
        
        getData(++offset, max, callback);
    });
}

getData(0, 2, function() {
    console.log(plugins.length);
    console.log("keyCount:", keyCount());
});


function keyCount(){
    var lookup = {};
    plugins.map(function(p){
        lookup[p.pluginKey] = p;
    });

    return Object.keys(lookup).length;
}