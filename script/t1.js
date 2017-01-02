var tpl=require('./template');

module.exports=tpl({
    PLUGIN_NAME:'t1',//插件名称,根据gulp规范要求异常中带插件名称
    argsTrue:function (arguments) {//返回参数是否合法的判断
      return arguments.length>=1;
    },
    doPlagin:function  (gutil,file,enc,content) {
    /*对文本进行处理的函数,
    file-文件信息对象:https://github.com/gulpjs/vinyl
    gutil-gulp工具类
    enc-编码
    content-文件内容*/
      return content+"this is my plagin 1";
    }
});