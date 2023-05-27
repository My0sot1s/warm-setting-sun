"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/login/login.js";
  "./pages/register/register.js";
  "./pages/choose-service/choose-service.js";
  "./pages/my/my.js";
  "./pages/information/information.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.warn(
      "当前组件仅支持 uni_modules 目录结构 ，请升级 HBuilderX 到 3.1.0 版本以上！"
    );
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/App.vue"]]);
const SunButton = () => "./components/SunButton.js";
const TabBar = () => "./components/TabBar.js";
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.component("SunButton", SunButton);
  app.component("TabBar", TabBar);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
