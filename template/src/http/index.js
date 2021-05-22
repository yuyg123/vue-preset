// import live from './interface/live';

/**
 * 以live模块为示例
 * 页面中调用接口  this.$live.get5MinuteRainData(config)
 * @param Vue
 */
const install = (Vue) => {
  if (install.installed) {
    return;
  }
  install.installed = true;

  Object.defineProperties(Vue.prototype, {
    // 注意哦，此处挂载在 Vue 原型的 $api 对象上
    // $live: {
    //   get() {
    //     return live;
    //   },
    // },

  });
};

export default install;
