<template>
  <div>
    <OnewLevel> 前端规范文档初版 </OnewLevel>
    <OnewLevel> 引言 </OnewLevel>
    <Content>
      如果开发团队就一个人的话，那么自己写的代码就是规范，随着公司业务的扩展，团队不断壮大，这时候就要开始考虑协作和编码规范问题了。
    </Content>
    <ThreeLevel> 什么是规范？ </ThreeLevel>
    <Content>
      规范，名词意义上：即明文规定或约定俗成的标准，如：道德规范、技术规范等。动词意义上：是指按照既定标准、规范的要求进行操作，使某一行为或活动达到或超越规定的标准，如：规范管理、规范操作。
    </Content>
    <ThreeLevel> 为什么要有规范？ </ThreeLevel>
    <Content>
      降低新成员融入团队的成本, 同时也一定程度避免挖坑<br />
      提高开发效率、团队协作效率, 降低沟通成本；<br />
      常用页面组件结尾列表：List 详情：Detail 新增、修改：Create（可同一文件） 修改：Edit<br />
      实现高度统一的代码风格，方便review, 另外一方面可以提高项目的可维护性<br />
      规范是实现自动化的基础<br />
      规范是一个团队知识沉淀的直接输出<br />
    </Content>
    <ThreeLevel> 规范包括哪些内容？ </ThreeLevel>
    <Content>
      如前面提到的，前端协作规范并不单单指‘编码规范’，这个规范涉及到前端开发活动的方方面面，例如代码库的管理、前后端协作、代码规范、兼容性规范<br />
      不仅仅是前端团队内部需要协作，一个完整的软件生命周期内，我们需要和产品/设计、后端(或者原生客户端团队)、测试进行协作, 我们需要覆盖这些内容。<br />
    </Content>
    <TwoLevel> 命名 </TwoLevel>
    <ThreeLevel> 文件命名 </ThreeLevel>
    <Content>
      1、文件夹小写字母命名或小写字母与中划线组合命名文件名与文件所在的文件夹；禁止组件使用 form1,form2,detail
      等这种不可读太概略的命名方式，尽量使用语义化，与业务或功能相关的词来命名（比如 xxmanage, file-upload）。<br />
      2、页面组件小写字母开头驼峰命名方式(AVUE)。（postList.vue postList.option.js）<br />
      常用页面组件结尾列表：List 详情：Detail 新增、修改：Create（可同一文件） 修改：Edit<br />
      3、公共组件首字母大写驼峰命名方式，页面组件与文件夹一样（EditAddress.vue）（复用的放通用包、通用包的东西用起来！）<br />
      4、图片静态资源命名, 使用小写字母命名或小写字母与下划线组合命名（比如 imgbg.jpg， home_top_img.png）<br />
    </Content>
    <ThreeLevel> 方法命名 </ThreeLevel>
    <Content>
      1、使用驼峰命名方法<br />
      2、事件方法命名，以 on/handle 开头<br />
      3、api 请求 get 查询<br />
      4、create 创建<br />
      5、update 修改、更新<br />
      6、remove、delete 删除<br />
    </Content>
    <TwoLevel> 编码规范 </TwoLevel>
    <ThreeLevel> VUE </ThreeLevel>
    <Content> 1、props 的定义 </Content>
    <prism-editor class="my-editor height-500" v-model="props" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 2、多个属性的元素、拥有多个属性的元素，每个属性单独一行 </Content>
    <prism-editor class="my-editor height-500" v-model="attributes" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 
        3、为组件样式设置作用域（页面迭代注意写 scope） <br />
        4、多个属性的元素、拥有多个属性的元素，每个属性单独一行 
    </Content>
    <ThreeLevel> vue 放置顺序 </ThreeLevel>
    <FourLevel> vue 2.0 </FourLevel>
    <prism-editor class="my-editor height-500" v-model="attributesSortVueTwo" :highlight="highlighter" readonly line-numbers></prism-editor>
    <FourLevel> vue 3.0 </FourLevel>
    <Content> 
        components <br />
        setup <br />
        onMounted <br />
    </Content>
    <ThreeLevel> CSS </ThreeLevel>
    <FourLevel> 属性书写顺序，建议如下： </FourLevel>
    <Content> 
        定位属性：position <br />
        布局属性：display/ float/clear/visibility/overflow <br />
        自身属性：width/height/margin/padding/border/background <br />
        文本属性：color/font/text-decoration/text-aglin/vertical-align/white-space/break-word <br />
        其他：border-radius / box-shadow / text-shadow / background <br />
    </Content>
    <FourLevel> 反例 </FourLevel>
    <prism-editor class="my-editor height-500" v-model="cssbad" :highlight="highlighter" readonly line-numbers></prism-editor>
    <FourLevel> 正例 </FourLevel>
    <prism-editor class="my-editor height-500" v-model="cssgood" :highlight="highlighter" readonly line-numbers></prism-editor>
    <FourLevel> 名称中全部使用小写，用中划线（-）连接 </FourLevel>
    <Content> 
        例：xiao-lie-bian，xiao-lie-bian-child
    </Content>
    <ThreeLevel> HTML 规范 </ThreeLevel>
    <Content> 
        img 标签必须存在 alt 属性 <br />
        表单中的输入框必须设置 maxlength <br />
    </Content>
    <TwoLevel> 日常相关 </TwoLevel>
    <ThreeLevel> git 分支 </ThreeLevel>
    <Content> 
        main 分支为主分支，具有稳定性，代码是经过测试的且已具备部署生产环境的条件 <br />
        main 分支一般由 develop 分支分支合并，禁止直接对 master 分支进行直接修改。 <br />
        上线合并到 main <br />
        发版 把 main 合到 main ，再发本地代码 <br />
        本地代码推送到远程分支禁止控制台报错、debugger、console 等 <br />
        代码冲突需要双方一起解决冲突 <br />
    </Content>
    <ThreeLevel> 书写 </ThreeLevel>
    <Content> 
        复杂逻辑需要写详细的注释 <br />
        自定义工具类、函数需要注释、文档更优 <br />
        上线合并到 main <br />
        自定义业务组件需要注释、文档更优 <br />
        淘汰 var 定义变量，推荐 let、const <br />
    </Content>
    <ThreeLevel> 禁止重复导入模块 </ThreeLevel>
    <Content> 
        不能含有未使用的变量, 未使用请及时删除 <br />
        不能含有未使用的组件, 未使用请及时删除 <br />
        不能含有无用的代码块, 未使用请及时删除 <br />
    </Content>
    <ThreeLevel> 代码块嵌套禁止超过 5 层 </ThreeLevel>
    <prism-editor class="my-editor height-500" v-model="repeatIf" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 回调函数嵌套禁止超过 3 层 </Content>
    <ThreeLevel> async await </ThreeLevel>
    <prism-editor class="my-editor height-500" v-model="asyncAwait" :highlight="highlighter" readonly line-numbers></prism-editor>
  </div>
</template>

<script>
import OnewLevel from '../components/oneLevel.vue'
import TwoLevel from '../components/twoLevel.vue'
import ThreeLevel from '../components/threeLevel.vue'
import FourLevel from '../components/fourLevel.vue'
import Content from '../components/content.vue'
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
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
    TwoLevel,
    ThreeLevel,
    FourLevel,
    Content
  },
  data: () => ({
    props: `props: {
  status: String
}`,
    attributes: `<img src="https://vuejs.org/images/logo.png" alt="VueLogo" />
<MyComponent foo="a" bar="b" baz="c"/>

<img
  src="https://vuejs.org/images/logo.png"
  alt="Vue Logo"
/>
<MyComponent
  foo="a"
  bar="b"
  baz="c"
/>`,
    attributesSortVueTwo: `components: {},
props: {},
data() {},`,
    cssbad: `.box { display: block;width: 50px; }`,
    cssgood: `.box { 
  display: block;
  width: 50px;
}`,
    repeatIf: `function foo() {
  if (true) {
    if (true) {
      if (true) {
        if (true) {
          if (true) {
            if (true) {
            }
          }
        }
      }
    }
  }
}`,
    asyncAwait: `foo(async () => {
  await bar()
  await baz()
  await qux()
})`
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
