"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  (_easycom_uni_nav_bar2 + _easycom_uni_easyinput2 + _component_SunButton + _easycom_uni_data_checkbox2)();
}
const _easycom_uni_nav_bar = () => "../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_data_checkbox = () => "../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_easyinput + _easycom_uni_data_checkbox)();
}
const _sfc_main = {
  __name: "login",
  setup(__props) {
    common_vendor.ref("");
    common_vendor.ref(true);
    common_vendor.ref(false);
    const useless = common_vendor.ref("");
    const protocol = common_vendor.ref([
      { text: "阅读并同意暖夕阳的《服务协议》和《个人信息保护指引》", value: 0 }
    ]);
    function toRegister() {
      common_vendor.index.navigateTo({
        url: "/pages/register/register"
      });
    }
    return (_ctx, _cache) => {
      return {
        a: common_vendor.o(toRegister),
        b: common_vendor.p({
          border: false,
          ["left-icon"]: "left",
          ["right-text"]: "注册"
        }),
        c: common_vendor.o(_ctx.input),
        d: common_vendor.o(($event) => _ctx.value = $event),
        e: common_vendor.p({
          focus: true,
          placeholder: "手机号/用户名",
          modelValue: _ctx.value
        }),
        f: common_vendor.o(($event) => _ctx.password = $event),
        g: common_vendor.p({
          type: "password",
          placeholder: "请输入密码",
          modelValue: _ctx.password
        }),
        h: common_vendor.p({
          text: "登录"
        }),
        i: common_vendor.o(($event) => useless.value = $event),
        j: common_vendor.p({
          localdata: protocol.value,
          modelValue: useless.value
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-e4e4508d"], ["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/login/login.vue"]]);
wx.createPage(MiniProgramPage);
