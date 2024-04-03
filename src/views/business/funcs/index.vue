<template>
  <div class="funcs">
    <h2 class="title">常用的一些方法</h2>
    <ElementDoc title="手机号脱敏">
      <template #element>
        {{ $validate.formatTel('13057660892') }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="身份证">
      <template #element>
        {{ $validate.formatIdCard('32065419910413254') }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code1" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="转换字符串，undefined,null等转化为''">
      <template #element>
        {{ JSON.stringify($utils.parseStrEmpty(null)) }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code2" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="对象参数空值过滤">
      <template #element>
        {{ JSON.stringify($utils.paramsFilter({ a: 'aa', b: 'bb', c: '', d: 'dd' })) }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code3" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="深拷贝">
      <template #element>
        {{ JSON.stringify($utils.deepCopy({ a: 'aa', b: 'bb', c: '', d: 'dd' })) }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code4" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="返回类型">
      <template #element>
        {{ JSON.stringify($utils.checkType({ a: 'aa', b: 'bb', c: '', d: 'dd' })) }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code5" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="日期格式化">
      <template #element>
        {{ $utils.parseTime(new Date()) }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code6" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="通过流下载文件">
      <template #element>
        通用包里的方法不好使 自己封装的方法
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code7" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="通过流下载文件">
      <template #element>
        <el-button @click="$utils.windowOpen('http://www.baidu.com/', '被打开窗口的名称', 500, 500)">点我</el-button>
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code8" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="随机id">
      <template #element>
        {{ $utils.uuid() }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code9" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="base64转file对象">
      <template #element>
        <el-button @click="base64">点我看console</el-button>
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code10" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="压缩base64">
      <template #element>
        <el-button @click="base64_small">点我看console</el-button>
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code11" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="首字母大写">
      <template #element>
        {{ $utils.titleCase('abc def,efg h i j') }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code12" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="下划转驼峰">
      <template #element>
        {{ $utils.camelCase('abc_def,efg_h_i_j_') }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code13" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <ElementDoc title="对象转query">
      <template #element>
        {{ $utils.parseToUrl({ a: '123', b: '456', c: '', d: '789' }) }}
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code14" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
  </div>
</template>

<script>
import ElementDoc from '@/components/element-doc/element-doc.vue'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'
import base64url from './base64.js'
// import highlighting library
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
export default {
  name: 'Validator',
  components: { ElementDoc, PrismEditor },
  data() {
    return {
      code: "$validate.formatTel('13057660892')",
      code1: "$validate.formatIdCard('32065419910413254')",
      code2: '$utils.parseStrEmpty(null)',
      code3: "$utils.paramsFilter({a:'aa',b:'bb',c:'',d:'dd'})",
      code4: "$utils.deepCopy({a:'aa',b:'bb',c:'',d:'dd'})",
      code5: "$utils.checkType({a:'aa',b:'bb',c:'',d:'dd'})",
      code6: `2个参数 time,cFormat
              time => 时间
              cFormat => 格式化格式 默认 {y}-{m}-{d} {h}:{i}:{s}
              
      $utils.parseTime(new Date())`,
      code7: `
      //封装的方法
      downloadFileByBlob(blob, fileName = "file") {
        const blobUrl = window.URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.download = fileName || "defaultName";
        link.style.display = "none";
        link.href = blobUrl;
        // 触发点击
        document.body.appendChild(link);
        link.click();
        // 移除
        document.body.removeChild(link);
      },
    // 点击下载按钮触发的方法
    down() {
      this.$http
        .request({
          url: "/material/exportExcel", //后端返回文件流的接口请求地址
          method: "get",
          responseType: "blob", // 这里最重要,不要去掉
        })
        .then((res) => {
          this.downloadFileByBlob(
            res.data,
            想叫的名字.想要的格式
          );
        });
    }`,
      code8: `$utils.windowOpen('地址','被打开窗口的名称',窗口宽度,窗口高度)
    $utils.windowOpen('http://www.baidu.com/','被打开窗口的名称',500,500)
    `,
      code9: '$utils.uuid()',
      code10: `
    filename 默认 'img'
    $utils.base64ToFile(base64地址，filename)`,
      code11: `
      3个参数 地址 宽度 压缩质量（0-1）

     let a = this.$utils.compress(base64url, 100, 0.92);
      a.then((res) => {
        console.log("base64_big", base64url);
        console.log("base64_small", res);
      });
    `,
      code12: "$utils.titleCase('abc def,efg h i j')",
      code13: "$utils.camelCase('abc_def,efg_h_i_j_')",
      code14: "$utils.parseToUrl({a:'123',b:'456',c:'',d:'789'})"
    }
  },
  mounted() {},
  methods: {
    base64() {
      const a = this.$utils.base64ToFile(base64url)
      console.log('base64转file对象', a)
      console.log('base64转file对象', a)
    },
    base64_small() {
      const a = this.$utils.compress(base64url, 100, 0.92)
      a.then((res) => {
        console.log('base64_big', base64url)
        console.log('base64_small', res)
      })
    },
    highlighter(code) {
      return highlight(code, languages.js)
    }
  }
}
</script>

<style lang="scss" scoped>
.funcs {
  position: relative;
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
