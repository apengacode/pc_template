<template>
  <div class="main">
    <avue-crud
      ref="crud"
      class="crud-table"
      :option="tableOption"
      :data="list"
      :page.sync="page"
      :search.sync="searchForm"
      :table-loading="loading"
      :header-cell-class-name="() => 'crud-table-head'"
      :cell-class-name="() => 'crud-cell'"
      @on-load="getList()"
      @search-change="searchChange"
      @refresh-change="getList()"
      @search-reset="searchChange"
    >
      <template #searchMenu="{ size }">
        <el-button type="primary" :size="size" @click="searchChange">查 询</el-button>
        <el-button type="primary" plain :size="size" @click="resetForm">重 置</el-button>
      </template>
      <template #menuLeft>
        <el-button type="primary" icon="el-icon-plus" @click="handleAdd">新增</el-button>
      </template>

      <template #menu="{ row, size }">
        <el-button type="text" :size="size" v-if="!row.$cellEdit">详情 </el-button>
        <el-button type="text" :size="size" v-if="!row.$cellEdit">编辑 </el-button>
        <el-button type="text" :size="size">删除 </el-button>
        <el-button type="text" :size="size" v-if="row.$cellEdit">保存 </el-button>
      </template>
      <template slot="empty"> 暂无数据！ </template>
    </avue-crud>
  </div>
</template>

<script>
import { tableOption } from './tableOption'
import bus from '@/utils/bus'
export default {
  name: 'CurdMain',
  props: {
    currentMenu: {
      type: String,
      default: ''
    },
    currentConfiguration: {
      type: Object,
      default: {}
    }
  },
  data() {
    return {
      tableOption: tableOption,

      page: {
        currentPage: 1,
        pageSize: 10,
        total: 100
      },
      list: [{ avue: 'avue' }],
      searchForm: {},
      loading: false,

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
      ]
    }
  },

  computed: {
    getForm() {
      const { target: current_menu_target } = this.menuList.find((i) => i.name === this.currentMenu)
      return current_menu_target + '_' + this.currentConfiguration.target || ''
    }
  },
  mounted() {
    bus.$on('getForm', (form) => {
      const filed = { ...form[this.getForm] }
      this.setColumn({ ...form['curd_column_common'] })
      this.setColumnDic({ ...form['curd_column_dic'] })
      if (this.getForm === 'curd_option') {
        this.setOption(filed)
      }
      if (this.getForm === 'curd_column_common') {
        this.setColumn(filed)
      }
      if (this.getForm === 'curd_column_dic') {
        this.setColumnDic(filed)
      }
    })
  },
  watch: {
    list: {
      handler(newVal, oldVal) {
        bus.$emit('sendList', newVal)
      },
      immediate: true,
      deep: true
    }
  },
  methods: {
    getList() {},
    searchChange(form, done) {
      done && done()
    },
    resetForm() {},
    handleAdd() {
      this.list.push({
        avue: 'avue' + this.list.length,
        $cellEdit: true
      })
      this.tableOption.column[0].cell = true
      this.setColumn(this.tableOption.column[0])
    },
    deleteUndefined(filed) {
      for (let key in filed) {
        if (filed[key] === undefined) {
          delete filed[key]
        }
      }
      return filed
    },
    setOption(filed) {
      this.tableOption = {
        ...this.tableOption,
        ...this.deleteUndefined(filed)
      }
      bus.$emit('sendOption', this.tableOption)
    },
    setColumn(filed) {
      this.$set(this.tableOption.column, 0, {
        ...this.tableOption.column[0],
        ...this.deleteUndefined(filed)
      })
      bus.$emit('sendColumn', this.tableOption.column[0])
    },
    setColumnDic(filed) {
      if (filed.dicData && filed.dicData.length) {
        let array = [...filed.dicData]
        let arr = []
        array.forEach((i) => {
          let obj = {}
          obj[i[0].label] = i[0].value
          obj[i[1].label] = i[1].value
          arr.push(obj)
        })
        filed.dicData = arr
      }
      if (filed.props && (!filed.props.label || !filed.props.value)) {
        delete filed.props
      }
      this.$set(this.tableOption.column, 0, {
        ...this.tableOption.column[0],
        ...this.deleteUndefined(filed)
      })
      bus.$emit('sendColumn', this.tableOption.column[0])
    }
  }
}
</script>

<style lang="scss" scoped></style>
