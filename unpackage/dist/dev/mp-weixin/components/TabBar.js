"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "TabBar",
  props: {
    centerText: String,
    rightText: String,
    centerUrl: String,
    rightUrl: String
  },
  setup(__props) {
    const props = __props;
    console.log(props);
    const rightIcon = common_vendor.computed(() => {
      if (props.rightText === "我的") {
        return "person";
      } else {
        return "gear";
      }
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          type: "home",
          size: "30"
        }),
        b: common_vendor.p({
          type: "vip",
          size: "30"
        }),
        c: common_vendor.t(props.centerText),
        d: props.centerUrl,
        e: common_vendor.p({
          type: common_vendor.unref(rightIcon),
          size: "30"
        }),
        f: common_vendor.t(props.rightText),
        g: props.rightUrl
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/components/TabBar.vue"]]);
wx.createComponent(Component);
