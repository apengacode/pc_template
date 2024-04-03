<template>
  <div>
    <OnewLevel> 表单设计器说明 </OnewLevel>
    <TwoLevel> 功能参考 业务组件表单设计器 </TwoLevel>
    <Content> 整体功能实现 在 GenerateFormOms 里面配置 表单的 字段和布局， 在 MakingForm 生成可以录入 保存 提交的功能模板 </Content>
    <TwoLevel> 数据结构说明 </TwoLevel>
    <ThreeLevel> 结构 </ThreeLevel>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban1.png" alt="">
    </div>

    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban11.png" alt="">
    </div>

    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban12.png" alt="">
    </div>

    <FourLevel> a、contentConfig 对象 </FourLevel>
    <Content> 根据type类型区分块盒子的功能 == basic 基础信息 输入框 和下拉 == table 默认表格 == other 其他 == upload 附件 </Content>
    <FourLevel> b、fields 字段类型和属性 </FourLevel>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban2.png" alt="">
    </div>

    <FourLevel> c、dicts 字典 </FourLevel>
    <Content> 用于下拉的 </Content>

    <FourLevel> d、configSort 排序 </FourLevel>
    <Content> 用于下拉的 </Content>
    <FourLevel> 其他说明 </FourLevel>
    <Content> 1、预定义字段 (旧版：固定不可拖拽) 可拖拽 2、预设字段 (旧版：固定不可拖拽) 可拖拽 </Content>
    <TwoLevel> 代码说明 </TwoLevel>
    <ThreeLevel> 1、GenerateFormOms </ThreeLevel>
    <Content> 入口页面 index.vue </Content>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban4.jpeg" alt="">
    </div>
    <prism-editor class="my-editor height-500" v-model="GenerateFormOms" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 基础信息块(普通) other.vue 判断 可拖拽 </Content>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban3.png" alt="">
    </div>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban7.png" alt="">
    </div>
    <prism-editor class="my-editor height-500" v-model="other" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 附件块 upload.vue </Content>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban5.png" alt="">
    </div>
    <prism-editor class="my-editor height-500" v-model="upload" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 存 占位提示 功能 </Content>
    <Content> 表格块 table.vue </Content>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban6.png" alt="">
    </div>
    <prism-editor class="my-editor height-500" v-model="table" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 类似 avue 的 字段格式 </Content>
    <ThreeLevel> 2、MakingForm </ThreeLevel>
    <Content> 普通块 </Content>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban8.png" alt="">
    </div>
    <prism-editor class="my-editor height-500" v-model="MakingForm" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 使用的 avueform 去渲染，通过 option.js 方法取过滤 展示 模板的字段 （具体看代码） </Content>
    <Content> 附件块 </Content>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban9.png" alt="">
    </div>
    <prism-editor class="my-editor height-500" v-model="file" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 附件 按照 类型去引入的 具体可以看下 MakingForm 组件 引入了 “uploadImg” ? “UpImg” ？ "UpFileNew" </Content>
    <Content> 具体 在 组件包 componentsByEnv </Content>
    <Content> 表格块 </Content>
    <div>
      <img src="http://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/common/webplat/muban10.png" alt="">
    </div>
    <prism-editor class="my-editor height-500" v-model="tablee" :highlight="highlighter" readonly line-numbers></prism-editor>
    <Content> 使用 avue-crud 的表格功能，option.js 去渲染列字段和类型 </Content>
    <Content> 其他说明 核心代码 handleColumn.js / 回显的一些操作 ，大概的流程设计是这样的。 </Content>
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
    GenerateFormOms: `<!-- 渲染主体 -->
<component
  v-for="sec in sortedList"
  :is="componentsMap[sec.type]"
  :id="sec.id"
  :key="sec.id"
  :showSectionDelBtn="true"
></component>`,
    other: `<draggable
  v-model="local"
  class=""
  v-bind="{
    group: { name: 'formlist', pull: false },
    ghostClass: 'ghost',
    animation: 200,
    handle: '.drag-widget',
  }"
  :move="move"
  @add="handleWidgetAdd"
  @update="handleWidgetUpdate"
>
  <transition-group
    name="fade"
    tag="div"
    class="box"
    :class="other_id"
  >
    <div
      v-for="item in local"
      key="item.fieldName"
      class="box-item"
      :style="'flex:0 1 (item.formFieldLength * 100) / 4%;'"
      @click="selectThis(item.fieldName)"
    >
      <div class="inner" :class="{ active: active === item.fieldName }">
        <div class="des">
          {{ item.fieldTxt }}
        </div>
        <div v-if="active === item.fieldName" class="handle-btn">
          <i class="el-icon-delete" @click="delItem(item.fieldName)" />
        </div>
        <div v-if="active === item.fieldName" class="view-drag">
          <i class="el-icon-rank drag-widget" />
        </div>
      </div>
      /div>
  </transition-group>
</draggable>`,
    upload: `<div class="box">
  <div class="demo">
    <i class="el-icon-paperclip" />
    <span>文件名: ****</span>
  </div>
</div>`,
    table: `table
  ref="crud"
  class="crud-table required-form"
  :header-cell-class-name="() => 'crud-table-head'"
  :cell-class-name="() => 'crud-cell'"
  :option="tableOption"
  :data="group.value"
  @row-update="update"
  @row-save="create"
  @row-del="del"
  @row-click="handleClick"
>
  <template v-for="col in requiredColumns" #['$ {col.fieldName}Header']>
    <span :key="col.fieldName" class="required-label">{{
      col.fieldTxt
    }}</span>
  </template>
  <template #menuLeft="{ size }">
    <el-button
      icon="iconfont icon-add"
      type="primary"
      :size="size"
      @click="rowCellAdd"
      >新增</el-button
    >
  </template>
  <template #menu="{ size, row, index }">
    <el-button
      type="text"
      icon="el-icon-delete"
      :size="size"
      @click="del(row, index)"
      >删除</el-button
    >
  </template>
  <template slot="empty"> 暂无数据！ </template>
</avue-crud>`,
    MakingForm: `<avue-form ref="form" v-model="formData" :option="basicOption"  />`,
    file: `<component
  :is="handle(data.formFieldType)"
  :disabled="isDisabled"
  :list.sync="formData[field.fieldName]"
  :file-size="15"
  :limit="5"
  :file-type="fileType"
  :show-loading="false"
/>
methods: {
  handle(data) {
    return data === "uploadImg" ? "UpImg" : "UpFileNew";
  },
}`,
    tablee: `<avue-crud
  ref="crud"
  class="crud-table required-form"
  :header-cell-class-name="() => 'crud-table-head'"
  :cell-class-name="() => 'crud-cell'"
  :option="tableOption"
  :data="group.value"
  @row-update="update"
  @row-save="create"
  @row-edit="edit"
  @row-del="del"
>
  <template #menuLeft="{ size }">
    <el-button
      v-if="action !== 'view'"
      icon="iconfont icon-add"
      type="primary"
      :size="size"
      @click="rowCellAdd"
    >
      新增
    </el-button>
  </template>
  <template v-for="item in slotList" #['$ {item.prop}Form']="scope">
    <avue-select
      v-if="item.type === 'select'"
      :key="item.prop"
      :size="scope.size"
      v-model="scope.row[item.prop]"
      :placeholder="item.placeholder"
      :dic="item.dicData"
      :disabled="initialPreset.includes(scope.row.rowid)"
    />
    <el-input
      v-else-if="item.type === 'input'"
      :key="item.prop"
      v-model="scope.row[item.prop]"
      :size="scope.size"
      :placeholder="item.placeholder"
      :maxlength="formConfig.input"
      :disabled="initialPreset.includes(scope.row.rowid)"
    />
    <span v-else :key="item.prop">暂不支持</span>
  </template>
  <template #c_make_table_menu="scope">
    <el-button
      v-if="hasDelBtn(scope)"
      type="text"
      :size="scope.size"
      @click="del(scope)"
    >
      删除
    </el-button>
  </template>
  <template slot="empty"> 暂无数据！</template>
</avue-crud>`,
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
img {
  margin: 10px 0;
}
</style>
