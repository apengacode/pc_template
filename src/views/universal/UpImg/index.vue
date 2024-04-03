<template>
  <div class="up-img">
    <h2 class="title">SliderCheck 滑块</h2>
    <p>用于验证登陆校验等功能组件</p>
    <ElementDoc title="基本用法">
      <template #element>
        <UpImg :list.sync="industryForm.companyUrl" :disabled="isDisabled" :limit="1" :file-size="fileSize" :file-type="['png']"> </UpImg>
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>

    <h3>属性</h3>
    <PAttrTable :data="attrs" />
  </div>
</template>

<script>
//   import SliderCheck from './sliderCheck.vue'
import PAttrTable from '@/components/PAttrTable'
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
  // components: { ElementDoc, SliderCheck, PrismEditor, PAttrTable, PEventTable },
  components: { PAttrTable, ElementDoc, PrismEditor },
  data() {
    return {
      isDisabled: false,
      industryForm: {
        companyUrl: []
      },
      fileSize: 10,
      code: `<UpImg :list.sync="industryForm.companyUrl" :disabled="isDisabled" :limit="1" :file-size="fileSize" :file-type="['png']"> </UpImg>
<script>
  export default {
    data() {
        return {
            isDisabled: false,
            industryForm: {
                companyUrl: []
            },
            fileSize: 10,
        }
    }
  }
<script>
      
      `,
      attrs: [
        {
          param: 'list',
          desc: '上传图片字段值',
          type: 'Array',
          default: '[]'
        },
        {
          param: 'disabled',
          desc: '是否可以编辑',
          type: 'Boolean',
          default: 'false'
        },
        {
          param: 'limit',
          desc: '上传图片的最大数量',
          type: 'Number',
          default: '2'
        },
        {
          param: 'fileSize',
          desc: '上传图片的大小限制(MB)',
          type: 'Number',
          default: '5'
        },
        {
          param: 'fileType',
          desc: '上传图片的类型',
          type: 'Array',
          default: '["png","jpg","jpeg","gif"]'
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
.up-img {
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
