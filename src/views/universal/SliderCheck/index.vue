<template>
  <div class="slider-check">
    <h2 class="title">SliderCheck 滑块</h2>
    <p>用于验证登陆校验等功能组件</p>
    <ElementDoc title="基本用法">
      <template #element>
        <SliderCheck></SliderCheck>
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>

    <h3>属性</h3>
    <PAttrTable :data="attrs" />
    <h3>事件</h3>
    <PEventTable :data="events" />
  </div>
</template>

<script>
import SliderCheck from './sliderCheck.vue'
import PAttrTable from '@/components/PAttrTable'
import PEventTable from '@/components/PEventTable'
import ElementDoc from '@/components/element-doc/element-doc.vue'
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

// import highlighting library
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
export default {
  components: { ElementDoc, SliderCheck, PrismEditor, PAttrTable, PEventTable },
  data() {
    return {
      code: `<SliderCheck :successFun="successFun" :errorFun="errorFun"></SliderCheck>
<script>
  export default {
    methods: {
      successFun() {},
      errorFun() {}
    }
  }
<script>`,
      attrs: [
        {
          param: 'successFun',
          desc: '成功之后的函数',
          type: 'Function',
          default: '-'
        },
        {
          param: 'successIcon',
          desc: '成功图标',
          type: 'String',
          default: 'el-icon-success'
        },
        {
          param: 'successText',
          desc: '成功文字',
          type: 'String',
          default: '验证成功'
        },
        {
          param: 'startIcon',
          desc: '开始的图标',
          type: 'String',
          default: 'el-icon-d-arrow-right'
        },
        {
          param: 'startText',
          desc: '开始的文字',
          type: 'String',
          default: '向右滑动验证'
        },
        {
          param: 'errorFun',
          desc: '失败之后的函数',
          type: 'Function',
          default: '-'
        }
      ],
      events: [
        {
          name: 'mousedown',
          desc: '滑块移动',
          param: '默认参数e'
        }
      ]
    }
  },
  methods: {
    highlighter(code) {
      return highlight(code, languages.js)
    }
  }
}
</script>

<style scoped lang="scss">
.slider-check {
    h3 {
        margin: 55px 0 20px;
        font-size: 22px;
    }
  .title {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 28px;
    margin: 30px 0 10px;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
  }
}
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
</style>
