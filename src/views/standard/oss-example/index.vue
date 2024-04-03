<template>
  <div>
    <OnewLevel> OSS 文件上传演示 </OnewLevel>
    <ThreeLevel> ossFileUtil 方法 </ThreeLevel>
    <Content>
      uploadFile 方法: <br />
      file: 文件流<br />
      isRandomName： 是否生成随机名<br />
      needTokenUrl： 上传成功后是不是要返回鉴权后的 url<br />
      signatureUrl 方法:<br />
      url： 鉴权链接<br />
      expiresTimeUnitIsSecond： 过期时间长度 单位是秒<br />
      method： 鉴权链接请求方式;默认是 get<br />
      getImageSelfStyle 方法：<br />
      url： 鉴权链接<br />
      process：<br />
      缩放 'image/resize,m_fixed,w_100,h_100’<br />
      裁剪 'image/crop,w_100,h_100,x_100,y_100,r_1’<br />
      旋转 'image/rotate,90’<br />
      锐化 'image/sharpen,100’<br />
      水印 'image/watermark,text_SGVsbG8g5Zu-54mH5pyN5YqhIQ’<br />
      格式转换 'image/format,png’<br />
      图片信息 ‘image/info’<br />
    </Content>
    <ThreeLevel> 图床 </ThreeLevel>
    <FourLevel> downloadFileAndToken Component </FourLevel>
    <prism-editor class="my-editor height-500" v-model="downloadFileAndToken" :highlight="highlighter" readonly line-numbers></prism-editor>
    <FourLevel> elImageAddToken Component </FourLevel>
    <prism-editor class="my-editor height-500" v-model="elImageAddToken" :highlight="highlighter" readonly line-numbers></prism-editor>
    <FourLevel> image Component </FourLevel>
    <prism-editor class="my-editor height-500" v-model="imageComponent" :highlight="highlighter" readonly line-numbers></prism-editor>
    <FourLevel> OssFileHosjoyUpload Component </FourLevel>
    <prism-editor class="my-editor height-500" v-model="OssFileHosjoyUpload" :highlight="highlighter" readonly line-numbers></prism-editor>

  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import OnewLevel from '../components/oneLevel.vue'
// import TwoLevel from '../components/twoLevel.vue'
import ThreeLevel from '../components/threeLevel.vue'
import FourLevel from '../components/fourLevel.vue'
import Content from '../components/content.vue'
import 'vue-prism-editor/dist/prismeditor.min.css'

// import highlighting library
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
export default {
  components: {
    PrismEditor,
    OnewLevel,
    // TwoLevel,
    ThreeLevel,
    FourLevel,
    Content
  },
  data: () => ({
    downloadFileAndToken: `// isPreview 是预览打开 window.open 
// file-name 下载文件名
// file-url 下载文件路径
// a-link-words a标签内展示文字 
// is-type
main是带主色调的普通文字 default是普通文字 btn是标准的下载小（inline的样式）按钮
<downloadFileAddToken isPreview :file-name="ktem.fileName" :file-url="ktem.fileUrl" :a-link-words="ktem.fileName" is-type="main" />`,
    elImageAddToken: `// fileUrl 单个文件的url todo：不支持多个图片来回切
// fit 同elImage
<elImageAddToken :fileUrl="item.fileUrl" :fit="'contain'"></elImageAddToken>`,
    imageComponent: `// fileUrl 单个文件的url 同image 默认且并不支持修改。默认参数image/resize,m_fixed,w_100,h_100,解决加载慢问题
<ImageAddToken :file-url="example.fileUrl" />`,
    OssFileHosjoyUpload: `// HosjoyUpload 一样使用，入参等几乎一样
<OssFileHosjoyUpload
  v-model="obj.riskCheckProjectDocPos"
  :showPreView="false"
  :fileSize="20"
  :fileNum="100"
  :limit="100"
  :action="action"
  :uploadParameters="uploadParameters"
  @successCb="
    () => {
      handleSuccessCb(obj)
    }
  "
  @successArg="
    (val) => {
      handleSuccessArg(val)
    }
  "
>
  <el-button type="primary">上 传</el-button>
</OssFileHosjoyUpload>`,
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
