var memFs = require('mem-fs');
var editor = require('mem-fs-editor');

var store = memFs.create();
var fs = editor.create(store);

fs.write('somefile.js', 'var a = 3;');
var content=fs.read('somefile.js');
console.log(content);
//做最后的提交,才会写入到磁盘,之前的读写都是在内存中进行
fs.commit(function  () {//commit方法第一个可选参数是过滤器,可以放gulp的插件
	console.log(arguments.length);
});