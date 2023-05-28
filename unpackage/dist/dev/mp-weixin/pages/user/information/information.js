"use strict";
const common_vendor = require("../../../common/vendor.js");
if (!Array) {
  const _easycom_uni_nav_bar2 = common_vendor.resolveComponent("uni-nav-bar");
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_data_checkbox2 = common_vendor.resolveComponent("uni-data-checkbox");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _component_SunButton = common_vendor.resolveComponent("SunButton");
  (_easycom_uni_nav_bar2 + _easycom_uni_file_picker2 + _easycom_uni_data_checkbox2 + _easycom_uni_easyinput2 + _component_SunButton)();
}
const _easycom_uni_nav_bar = () => "../../../uni_modules/uni-nav-bar/components/uni-nav-bar/uni-nav-bar.js";
const _easycom_uni_file_picker = () => "../../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_data_checkbox = () => "../../../uni_modules/uni-data-checkbox/components/uni-data-checkbox/uni-data-checkbox.js";
const _easycom_uni_easyinput = () => "../../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
if (!Math) {
  (_easycom_uni_nav_bar + _easycom_uni_file_picker + _easycom_uni_data_checkbox + _easycom_uni_easyinput)();
}
const _sfc_main = {
  __name: "information",
  setup(__props) {
    const imageStyles = {
      height: 80,
      // 边框高度
      width: 80,
      // 边框宽度
      border: {
        // 如果为 Boolean 值，可以控制边框显示与否
        color: "#eee",
        // 边框颜色
        width: "1px",
        // 边框宽度
        style: "solid",
        // 边框样式
        radius: "50%"
        // 边框圆角，支持百分比
      }
    };
    const ratioSex = common_vendor.ref(0);
    const ratioIdentity = common_vendor.ref(0);
    const identity = common_vendor.ref([
      {
        text: "监护人",
        value: 0
      },
      {
        text: "老人",
        value: 1
      }
    ]);
    const sex = common_vendor.ref([
      {
        text: "男",
        value: 0
      },
      {
        text: "女",
        value: 1
      }
    ]);
    function back() {
      common_vendor.index.navigateBack();
    }
    return (_ctx, _cache) => {
      return common_vendor.e({
        a: common_vendor.o(back),
        b: common_vendor.p({
          border: false,
          title: "个人信息",
          ["left-icon"]: "left"
        }),
        c: common_vendor.p({
          limit: "1",
          ["del-icon"]: false,
          ["disable-preview"]: true,
          imageStyles,
          ["file-mediatype"]: "image"
        }),
        d: common_vendor.o(($event) => ratioIdentity.value = $event),
        e: common_vendor.p({
          localdata: identity.value,
          modelValue: ratioIdentity.value
        }),
        f: common_vendor.o(_ctx.input),
        g: common_vendor.o(($event) => _ctx.value = $event),
        h: common_vendor.p({
          inputBorder: false,
          placeholder: "请输入姓名",
          modelValue: _ctx.value
        }),
        i: common_vendor.o(($event) => ratioSex.value = $event),
        j: common_vendor.p({
          localdata: sex.value,
          modelValue: ratioSex.value
        }),
        k: common_vendor.o(_ctx.input),
        l: common_vendor.o(($event) => _ctx.value = $event),
        m: common_vendor.p({
          inputBorder: false,
          placeholder: "请输入身份证号",
          modelValue: _ctx.value
        }),
        n: ratioIdentity.value
      }, ratioIdentity.value ? {
        o: common_vendor.o(_ctx.input),
        p: common_vendor.o(($event) => _ctx.value = $event),
        q: common_vendor.p({
          inputBorder: false,
          placeholder: "请输入姓名",
          modelValue: _ctx.value
        }),
        r: common_vendor.o(_ctx.input),
        s: common_vendor.o(($event) => _ctx.value = $event),
        t: common_vendor.p({
          inputBorder: false,
          placeholder: "请输入手机号码",
          modelValue: _ctx.value
        }),
        v: common_vendor.o(_ctx.input),
        w: common_vendor.o(($event) => _ctx.value = $event),
        x: common_vendor.p({
          inputBorder: false,
          placeholder: "请输入地址",
          modelValue: _ctx.value
        })
      } : {}, {
        y: common_vendor.p({
          text: "保存"
        })
      });
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "C:/Workspace/code/web/uni-app/2023/warm_sun/pages/user/information/information.vue"]]);
wx.createPage(MiniProgramPage);
