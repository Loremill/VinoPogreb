var path = require('path'),
    misc = require('./misc');

var model = {};

model.serverRoot = path.join(__dirname, 'Blog');

model.hostPort = 81;

model.hostName = 'localhost:' + model.hostPort;

model.dynamicExt = '.html';

model.indexName = 'index' + model.dynamicExt;

model.isDynamicFile = function(file){
    return (path.extname(file) === model.dynamicExt);
};

model.getFsPath = function(rPath){
    return path.join(model.serverRoot, rPath);
};

model.getFileData = function(file){
console.log(file+"CONTENT");

var markdown = require('markdown').markdown;
    var fs=require("fs");
    var sat=fs.readFileSync(file,"qur");
    var a=markdown.toHTML(sat);

    return {
        'content': misc.getFile(file),
        'title': path.basename(file, model.dynamicExt),
        'host': model.hostName
    };
};

model.templateFile = model.getFsPath('/template' + model.dynamicExt);

model.template = misc.getFile(model.templateFile);

module.exports = model;
