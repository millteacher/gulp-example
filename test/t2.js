var tpl=require('./template');

tpl.setConfig({
  PLUGIN_NAME:'t2',
  argsTrue:function (arguments) {
    console.log("参数",arguments);
  },
  doPlagin:function  (gutil,file,enc,content) {
    gutil.log(content);
    return content;
  }
});

module.exports=tpl.doPlagin