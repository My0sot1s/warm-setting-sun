"use strict";
const common_vendor = require("../common/vendor.js");
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  (_easycom_uni_icons2 + _component_SunButton)();
}
const _easycom_uni_icons = () => "../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
  __name: "ApplyCell",
  props: {
    cellData: Object
  },
  setup(__props) {
    const props = __props;
    function notice() {
      common_vendor.index.showToast({
        title: "操作成功！",
        duration: 2e3
      });
    }
    console.log(props);
    return (_ctx, _cache) => {
      return {
        a: props.cellData.avatar,
        b: common_vendor.t(props.cellData.task),
        c: common_vendor.p({
          type: "calendar",
          size: "5vw"
        }),
        d: common_vendor.t(props.cellData.time),
        e: common_vendor.p({
          text: "通过"
        }),
        f: common_vendor.o(notice),
        g: common_vendor.p({
          text: "驳回"
        }),
        h: common_vendor.o(notice)
      };
    };
  }
};
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/components/ApplyCell.vue"]]);
wx.createComponent(Component);
