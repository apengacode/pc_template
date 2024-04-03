<template>
  <div>
    <ThreeLevel> scrollBar </ThreeLevel>
    <prism-editor class="my-editor height-500" v-model="scrollBar" :highlight="highlighter" readonly line-numbers></prism-editor>
    <ThreeLevel> element-ui </ThreeLevel>
    <prism-editor class="my-editor height-500" v-model="element" :highlight="highlighter" readonly line-numbers></prism-editor>
    <ThreeLevel> global </ThreeLevel>
    <prism-editor class="my-editor height-500" v-model="global" :highlight="highlighter" readonly line-numbers></prism-editor>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import ThreeLevel from '../components/threeLevel.vue'
import 'vue-prism-editor/dist/prismeditor.min.css'

// import highlighting library
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
export default {
  components: {
    PrismEditor,
    ThreeLevel,
  },
  data: () => ({
    scrollBar: `&::-webkit-scrollbar-track-piece {
  background: #d3dce6;
}
&::-webkit-scrollbar-thumb {
  background: #99a9bf;
  border-radius: 20px;
}
&::-webkit-scrollbar {
  width: 6px;
  height: 10px;
}`,
    element: `@import "./common/mixin.scss";
// iconfont
.el-button [class*="iconfont"] + span {
  margin-left: 5px;
}

.el-table .el-table__body-wrapper {
  @include scrollBar();
}

.el-textarea__inner,
.el-input__inner {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  &::placeholder {
    font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
      "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
  }
}
// body .el-table th.gutter {
//   display: table-cell !important;
// }

// body .el-table colgroup.gutter {
//   display: table-cell !important;
// }

// table {
//   width: 100% !important;
// }
// 修复table fixed列下边框消失
.el-table {
  tr {
    line-height: 0 !important;
  }
}
.el-table__fixed {
  height: calc(100% - 11px) !important;
}
.el-table__fixed::before {
  height: 0px !important;
}

.fullscreen-upload-loading {
  z-index: 54321!important;
}`,
    global: `body {
  height: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  text-rendering: optimizeLegibility;
  font-family: PingFang SC, Helvetica Neue, Helvetica, Hiragino Sans GB,
    Microsoft YaHei, Arial, sans-serif;
  overflow: hidden;
}

label {
  font-weight: 700;
}

html {
  height: 100%;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}

.no-padding {
  padding: 0px !important;
}

.padding-content {
  padding: 4px 0;
}

a:focus,
a:active {
  outline: none;
}

a,
a:focus,
a:hover {
  cursor: pointer;
  color: inherit;
  text-decoration: none;
}

div:focus {
  outline: none;
}

.fr {
  float: right;
}

.fl {
  float: left;
}

.pr-5 {
  padding-right: 5px;
}

.pl-5 {
  padding-left: 5px;
}

.block {
  display: block;
}

.pointer {
  cursor: pointer;
}

//main-container全局样式

.text-center {
  text-align: center;
}

.link-type,
.link-type:focus {
  color: #337ab7;
  cursor: pointer;

  &:hover {
    color: rgb(32, 160, 255);
  }
}

/** 基础通用 **/
.pt5 {
  padding-top: 5px;
}
.pr5 {
  padding-right: 5px;
}
.pb5 {
  padding-bottom: 5px;
}
.mt5 {
  margin-top: 5px;
}
.mr5 {
  margin-right: 5px;
}
.mb5 {
  margin-bottom: 5px;
}
.mb8 {
  margin-bottom: 8px;
}
.ml5 {
  margin-left: 5px;
}
.mt10 {
  margin-top: 10px;
}
.mr10 {
  margin-right: 10px;
}
.mb10 {
  margin-bottom: 10px;
}
.ml0 {
  margin-left: 10px;
}
.mt20 {
  margin-top: 20px;
}
.mr20 {
  margin-right: 20px;
}
.mb20 {
  margin-bottom: 20px;
}
.m20 {
  margin-left: 20px;
}

.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
h1,
h2,
h3,
h4,
h5,
h6 {
  font-family: inherit;
  font-weight: 500;
  line-height: 1.1;
  color: inherit;
}
.iconfont {
  speak: none;
  font-style: normal;
  font-weight: 400;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  vertical-align: baseline;
  display: inline-block;
  font-size: 14px;
  -webkit-font-smoothing: antialiased;
}`
  }),
  methods: {
    highlighter(code) {
      return highlight(code, languages.js)
    }
  }
}
</script>
<style>
/* required class */
.my-editor {
  /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
  background: #2d2d2d;
  color: #ccc;

  /* you must provide font-family font-size line-height. Example: */
  font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
  font-size: 14px;
  line-height: 1.5;
  padding: 5px;
  margin-bottom: 10px;
}

/* optional class for removing the outline */
.prism-editor__textarea:focus {
  outline: none;
}

/* not required: */
.height-300 {
  height: 300px;
}
</style>
