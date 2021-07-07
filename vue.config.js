module.exports = {
    lintOnSave: false,    //禁用eslint
    devServer:{
        proxy: {
            "/api": {
              target: "http://39.98.123.211",
            //   是否把路径中的/api 去掉
            //   pathRewrite: {"^/api" : ""}
            }
          }
    }
}