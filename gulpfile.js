var gulp = require('gulp');
var gutil=require('gulp-util');
var path=require('path');

// 自定义插件
var t1=require('./script/t1');
var t2=require('./script/t2');

var file=new gutil.File({
	base:path.join(__dirname,'./test/'),
	cwd:__dirname,
	path:path.join(__dirname,'./test/t1.js')
});

gulp.task('default',function  () {
	gutil.log('======打印到控制台=====');
	var newpath=gutil.replaceExtension('test/t1.js','.html');
	gutil.log(file.isStream());
	gutil.log('新替换的文件路径',newpath);
	gulp.src(file.path).pipe(t1('测试方法')).
	pipe(t2('测试打印内容'));
});

gulp.task('apitest',function  () {
	gulp.src('test/**/*.js',{
		buffer:true,//使用buffer的方式进行读写
		read:true,//如果该项被设置为 false， 那么 file.contents 会返回空值（null），也就是并不会去读取文件
		base:'test'//会加上原路径中基础部分除去本字符串
	});
});