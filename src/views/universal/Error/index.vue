<template>
  <div class="error">
    <h2 class="title">Error 缺省页</h2>
    <ElementDoc title="基本用法">
      <template #element>
        <div>
          <el-button @click="clicktype = '404'">404</el-button>
          <el-button @click="clicktype = 'nodata'"> nodata</el-button>
          <el-button @click="clicktype = 'nopermission'">nopermission</el-button>
          <el-button @click="clicktype = 'coding'">coding</el-button>
          <el-button @click="clicktype = 'error'">error</el-button>
        </div>
        <Error :type="clicktype"></Error>
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
import ElementDoc from '@/components/element-doc/element-doc.vue'
import PAttrTable from '@/components/PAttrTable'
import Error from './error.vue'
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
// import highlighting library
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
export default {
  components: { ElementDoc, Error, PrismEditor, PAttrTable },
  data() {
    return {
      attrs: [
        {
          param: 'type',
          desc: '可选状态',
          type: 'String',
          optional: '404 nodata nopermission coding error',
          default: 'error'
        },
        {
          param: 'txt',
          desc: '可替换文案',
          type: 'String',
          default: ''
        }
      ],
      clicktype: 'error',
      code: `<Error :type="value"></Error>
<script>
export default {
  data() {
    return {
        value: 'error'
    }
  }
}
<script>`
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
.error {
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
