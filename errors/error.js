module.exports.dbError = function (err) {
  if (err.code === 404) {
    //测试环境时pouchDB无法找到适用的本地缓存适配器
    return;
  } else {
    console.log(err);
  }
}