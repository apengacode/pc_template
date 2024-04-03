<template>
  <div class="code">
    <el-tabs type="border-card" class="avue-table">
      <el-tab-pane label="html">
        <Pre v-text="html"></Pre>
      </el-tab-pane>
      <el-tab-pane label="data">
        <Pre v-text="data"></Pre>
      </el-tab-pane>
      <el-tab-pane label="methods">
        <Pre v-text="methods"></Pre>
      </el-tab-pane>
      <el-tab-pane label="options.js">
        <Pre v-text="option"></Pre>
      </el-tab-pane>
      <el-tab-pane label="column">
        <Pre v-text="column"></Pre>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'CurdCode',
  props: {
    currentMenu: {
      type: String,
      default: ''
    },
    currentConfiguration: {
      default: {}
    }
  },
  data() {
    return {
      menuList: [
        {
          icon: 'icon-hosjoy_goods',
          name: 'avue_curd',
          target: 'curd'
        },
        {
          icon: 'icon-hosjoy_goods',
          name: 'avue_form',
          target: 'form'
        }
      ],
      list: ``,
      html: `<avue-crud ref="crud" class="crud-table" :option="tableOption" :data="list" :page.sync="page" 
  :search.sync="searchForm" :table-loading="loading" :header-cell-class-name="() => 'crud-table-head'"
  :cell-class-name="() => 'crud-cell'" @on-load="getList()" @search-change="searchChange" @refresh-change="getList()"
  @search-reset="searchChange">
  <template #searchMenu="{ size }">
    <el-button type="primary" :size="size" @click="searchChange">查 询</el-button>
    <el-button type="primary" plain :size="size" @click="resetForm">重 置</el-button>
  </template
  <template #menuLeft>
    <el-button type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
  </template>
  <template #menu="{ row, size }">
    <el-button type="text" :size="size">详情
    </el-button>
    <el-button type="text" :size="size">编辑
    </el-button>
    <el-button type="text" :size="size">删除
    </el-button>
  </template>
  <template slot="empty"> 暂无数据！ </template>
</avue-crud>`,
      option: ``,
      data: `data() {
  return {
    list: ,
    searchForm: {},
    loading: false,
    page: {
      currentPage: 1,
      pageSize: 10,
      total: 0
    },
  }
}
      `,
      column: ``,
      methods: `methods: {
  getList() { },
  searchChange(form,done) {
    done && done()
  },
  resetForm() { },
  handleAdd() {
    this.list.push({
    avue: 'avue' + this.list.length,
      $cellEdit: true
    })
    this.tableOption.column[0].cell = true
  },
}
      `
    }
  },
  computed: {
    getForm() {
      const { target: current_menu_target } = this.menuList.find((i) => i.name === this.currentMenu)
      return current_menu_target + '_' + this.currentConfiguration.target || ''
    }
  },
  mounted() {
    bus.$on('sendOption', (option) => {
      const key = Object.keys(option)
      this.option = ``
      key.forEach((i) => {
        this.option =
          this.option +
          i +
          ':' +
          this.getGe(option[i]) +
          `
    `
      })
      this.option =
        `export function tableOption() {
  const self = this
  return createTableOption({
  ` +
        this.option +
        `})
  }`
    })
    bus.$on('sendColumn', (column) => {
      for (let k in column) {
        if (!column[k]) {
          delete column[k]
        }
      }
      const key = Object.keys(column)
      this.column = ``
      key.forEach((i) => {
        this.column =
          `` +
          this.column +
          i +
          ':' +
          this.getGe(column[i], i) +
          `
`
      })
      this.column =
        `column: [{
` +
        this.column +
        `}]`
    })
    bus.$on('sendList', (list) => {
      let str = `[`
      list.forEach((i) => {
        const keys = Object.keys(i)
        str =
          str +
          `
      {
        `
        keys.forEach((key) => {
          str = str + key + `: ` + i[key] + `,`
        })
        str =
          str +
          `
      }`
      })
      str =
        str +
        `
    ]`
      this.data = `data() {
  return {
    list: ,
    searchForm: {},
    loading: false,
    page: {
      currentPage: 1,
      pageSize: 10,
      total: 0
    },
  }
}
      `
      this.data = this.data.slice(0, 29) + str + this.data.slice(29)
    })
  },
  methods: {
    getGe(val, key) {
      if (typeof val === 'boolean') {
        if (val == true) {
          return 'true'
        }
        if (val == false) {
          return 'false'
        }
      }
      if (typeof val === 'string') {
        return val
      }
      if (typeof val === 'number') {
        return val + ''
      }
      if (Object.prototype.toString.call(val) === '[object Array]' && key === 'dicData') {
        let str = ``
        str = str + `[`
        if (val.length) {
          val.forEach((i) => {
            const key = Object.keys(i)
            str =
              str +
              `
  { 
    ${key[0]}: ` +
              i[key[0]] +
              `,
    ${key[1]}: ${i[key[1]]},
  },
`
          })
          str = str + `]`
          return str
        }
        return `[]`
      }
      if (Object.prototype.toString.call(val) === '[object Object]' && key === 'props') {
        let str = `{`
        str =
          str +
          `
  label: ${val.label},
  value: ${val.value}
}`
        return str
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.avue-table {
  height: 100%;
}
.avue-table ::v-deep .el-tabs__content {
  height: 100%;
  overflow-y: scroll;
  padding-bottom: 40px;
  box-sizing: border-box;
}
.code {
  width: 100%;
  height: 50%;
}
</style>
