module.exports = {
  plugins: {
    //自动添加浏览器厂商声明前缀，用来兼容不同的浏览器
    //VueCLI已经在内部默认配置了autoprefixer
    //autoprefixer: {
    //   //browsers用来配置要兼容到的系统(浏览器)环境l/l/
    //   这个配置没有问题，但是写到这里会有控制台编译警告
    //为什么?因为 VueCLI是通过项目中的 .browserslistrc 文件来配置要兼容的环境信息的,所有要修改.browserslistrc
    // browsers: [ ' Android >= 4.0', 'i0S >= 8 ']
    // },

    'postcss-pxtorem': {
      rootValue({ file }) {  // 如果是vant的就按照375 尺寸， 如果是其他的就是按照750 
        return file.indexOf('vant') !== -1 ? 37.5 : 75;   // rootValue 的值一般是 设计稿  1/10
      },
      propList: ['*'],
    },
  },
};