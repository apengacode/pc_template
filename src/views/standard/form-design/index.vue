<template>
  <div>
    <OnewLevel> 表单设计器 和 表单渲染器 代码逻辑 </OnewLevel>
    <TwoLevel> GenerateForm </TwoLevel>
    <ThreeLevel> ossFileUtil 方法 </ThreeLevel>
    <Content>
      u左侧区域为字段区，右侧为编辑区 <br />
      /form/dataPacket/code/crewInterview/tree 初始根据接口返回的所有字段进行分类 <br />
    </Content>
    <ThreeLevel> 单个字段 </ThreeLevel>
    <prism-editor class="my-editor height-500" v-model="simFiled" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content>
      preset: 表示是否是预设， 1 即为预设 0 则是预定义字段 <br />
      Required: 是否必填 <br />
      paramSource: 表示字典类型， 1 表示接口返回字典， param 则是接口中对应字典的 key 值; <br />
      表示 param 是一个数据库写死的 json 字符串，使用需要先 JSON.parse(param) <br />
    </Content>
    <ThreeLevel> form 上下文 </ThreeLevel>
    <Content>
      组件在初始化时会创建一个上下文对象 <br />
      public ctx: FormCtx = createGenCtx(); <br />
    </Content>
    <prism-editor class="my-editor height-500" v-model="createGenCtx" :highlight="highlighter" readonly line-numbers></prism-editor>
    <ThreeLevel> createSection </ThreeLevel>
    <Content>
      createSection 创建渲染区块，每个块都有不同的类型 <br />
      basic、table、upload、other、evaluate、 <br />
      后面渲染器的同时会根据不同的 type 渲染不同的组件 <br />
    </Content>
    <ThreeLevel> save 保存 </ThreeLevel>
    <prism-editor class="my-editor height-500" v-model="save" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content>
      最终 emit 出去的数据如下 demo
    </Content>
    <prism-editor class="my-editor height-500" v-model="demo" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content>
      v2 版本之后，业务端的初始化模板都来自中台下发的数据进行渲染
    </Content>
    <TwoLevel> MakingForm </TwoLevel>
    <Content>
      根据之前保存的 contentConfig 和对应的 fields 进行渲染，采用的也是 avuejs 遍历 option 的形式
    </Content>
    <ThreeLevel> 细节 </ThreeLevel>

    <FourLevel> 渲染的时候有 2 个方法 </FourLevel>
    <Content>
      1. init： 数据在新增的时候 <br />
      2. initWithFields： 编辑的时候，这里会多余传入流程中保存的当前审批人的字段权限情况，所以会在组件内部构建字段权限的 map <br />
      同样的在初始化时创建了 form 上下文 <br />
    </Content>
    <FourLevel> init 方法 </FourLevel>
    <Content>
      数据分类之后会在 computed 中生成最终渲染的顺序 <br />
      html 中会根据不同的类型渲染不同的组件 <br />
    </Content>

    <FourLevel> 组件渲染 </FourLevel>
    <FourLevel> 航次号组件</FourLevel>
    <Content>
      航次号组件是一个单独开发的组件，具体位置也是在公共组件文件夹下面 <br />
      数据格式也是经过特定处理的 <br />
    </Content>
    <prism-editor class="my-editor height-500" v-model="formatValue" :highlight="highlighter" readonly line-numbers></prism-editor>

    <FourLevel> 字段权限 </FourLevel>
    <Content>
      字段权限会根据流程中返回的字段权限，遍历构建到对象中，最终会和 config 进行合并， <br />
    </Content>
  </div>
</template>

<script>
// import Prism Editor
import { PrismEditor } from 'vue-prism-editor'
import OnewLevel from '../components/oneLevel.vue'
import TwoLevel from '../components/twoLevel.vue'
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
    TwoLevel,
    ThreeLevel,
    FourLevel,
    Content
  },
  data: () => ({
  simFiled: `{
  content: null
  defaultValue: null
  edit: 1
  fieldLength: 5 // 字段长度
  fieldName: "result3" // 字段对应数据库字段的名称
  fieldPacketId: null
  fieldTxt: "面试结果3" // 中文名
  fieldType: "varchar"
  formFieldLength: 1
  formFieldType: "select"// 前端渲染的组件类型
  groupKey: "面试内容" // 分区名
  help: null
  id: "19"
  multiple: 0
  packetId: "2"
  param: "[{"label":"优秀","value":"1"},{"label":"良好","value":"2"},{"label":"一般","value":"3"},{"label":"不称职","value":"4"}]"
  paramSource: 2
  placeholder: null
  preset: 0
  required: 0
  sortOrder: 5
  tableFields: null  
}`,
  createGenCtx: `export interface FormCtx {
  // 上下文id
  id: number
  // 用来表示是否渲染的标志
  isInit: boolean
  // 暂时没用
  version: string
  // fields存档
  fields: PackField[]
  // fieldId 对应 field 的map， 方便根据id及时拿到field
  fieldMap: Map<string, PackField>
  // 对应字典列表
  dictList: any[]
  // 排序列表
  sort: string[]
  // id对应的设计块
  data: Map<string, SecCtx>
  // 设计块组成的数组
  groups: SecCtx[]
  other: SecCtx[]
  // 是否是中台设计器
  omsType: string
  sideGroups?: any
  contentGroups?: any

  // 旧数据的数据适配器
  initConfigAdapter: (data: ContentConfig[], fields: PackField[], type?: string) => void
  // 初始化数据
  initData: (data: SecCtx[], fields: PackField[]) => void
  pushSecToData: (data: any, needSort?: boolean) => void
  pushFieldToCtx: (field: PackField) => void
  // 根据fields进行分组
  setFields: (fields: PackField[], platform?: PlatForm) => void
  createOther: (type?: SecType) => any
  // 创建块
  createSection: (data: any) => SecCtx
  // 根据类型过滤
  filterByType: (type: SecType) => SecCtx[]
  getGroupByType: (type: SecType) => SecCtx | undefined
  getGroupById: (id: string) => SecCtx | undefined
  // 获取排序后的数据块
  getSortedList: () => SecCtx[]
  delOtherItem: (id: string) => void
  // 返回最终保存到后端的配置
  toConfig: () => any
  // 兼容旧版本content的方法
  compatiableOldConfig: () => any
}`,
    save: `let [config, compatiable] = this.ctx.toConfig()
let obj = {
  info: this.info,
  formDicts: config.dictList,
  contentConfig: config.data.map((item: any) => {
    return {
      key: item.id,
      groupKey: item.name,
      type: item.type,
      fields: item.field || (item.fields && item.fields.join(',')) || '',
      tableValue: item.value ? JSON.stringify(item.value) : ''
    }
  })
}
this.$emit('save', obj)`,
    demo: `[
  {
    "key": "evaluate_113",
    "groupKey": "整体评价",
    "type": "evaluate",
    "fields": "113",
    "tableValue": ""
  },
  {
    "key": "upload_1126",
    "groupKey": "附件",
    "type": "upload",
    "fields": "114",
    "tableValue": ""
  },
  {
    "key": "table_115",
    "groupKey": "培训内容",
    "type": "table",
    "fields": "115",
    "tableValue": "[{"$cellEdit":true,"$index":0,"content":"555556","remark":"","result":"","rowid":"3d2aa82b2857024dc028f312a3e78c4e","$result":""},{"$cellEdit":true,"$index":1,"content":"456564654","remark":"","result":"","rowid":"73e508f0713597479779eaf747b961bd","$result":""},{"$cellEdit":true,"$index":2,"content":"123548","remark":"","result":"","rowid":"7b5e8bcf0383504e73082150fa8f7a43","$result":""}]"
  },
  {
    "key": "basic_56",
    "groupKey": "基本信息",
    "type": "basic",
    "fields": "100,101,102,103,104,105,106,107,108,109,110,111,112",
    "tableValue": ""
  }
]`,
    formatValue: `const formatValue = {
  voyage_numbers: val,
  value: option?.label
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
