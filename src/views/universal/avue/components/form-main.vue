<template>
  <div class="main">
    <div class="header">
      <el-button type="primary" @click="showAddDialog">新增表单</el-button>
    </div>
    <avue-form ref="form" v-model="form" :option="formOption" @submit="handleSubmit" @reset-change="handleReset"> </avue-form>
    <AddColumn ref="addColumnRef" />
  </div>
</template>

<script>
import bus from '@/utils/bus'
import { formOption } from './formOption.js'
import AddColumn from './addColumn.vue'
export default {
  name: 'FormMain',
  components: { AddColumn },
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
      formOption: formOption,
      form: {},
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
      const { target: currentMenuTarget } = this.menuList.find((i) => i.name === this.currentMenu)
      return currentMenuTarget + '_' + this.currentConfiguration.target || ''
    }
  },
  mounted() {
    bus.$on('getForm', (form) => {
      const filed = this.deleteUndefined({ ...form[this.getForm] })

      this.setOption(filed)
    })
    bus.$on('getColumn', (columns) => {
      let dicData = []
      if (columns.dicData && columns.dicData.length) {
        dicData = columns.dicData.map((item) => {
          const obj = {}
          obj[item[0].label] = item[0].value
          obj[item[1].label] = item[1].value
          return obj
        })
      }
      const _columns = { ...columns }
      _columns.dicData = dicData
      const _column = [...this.formOption.column, _columns]
      const column = [...this.formOption.column, columns]
      this.formOption = {
        ...this.formOption,
        ...{ column: _column }
      }
      bus.$emit('sendColumnn', column)
    })
  },
  watch: {},
  methods: {
    showAddDialog() {
      this.$refs.addColumnRef.show()
    },
    deleteUndefined(filed) {
      for (const key in filed) {
        if (filed[key] === undefined) {
          delete filed[key]
        }
      }
      return filed
    },
    setOption(filed) {
      this.formOption = {
        ...this.formOption,
        ...filed
      }
      const _formOption = { ...this.formOption }
      delete _formOption.column
      bus.$emit('sendOption', { formOption: _formOption, type: 'option' })
    },
    handleSubmit(form, done) {
      this.$refs.form.validate((valid, done) => {
        if (valid) {
          // do something
          done && done()
        } else {
          this.$message.warining('请填写必填项')
        }
      })
      done && done()
    },
    handleReset() {}
  }
}
</script>

<style lang="scss" scoped>
.el-form-item {
  margin-bottom: 20px;
}
.header {
  margin-bottom: 20px;
}
</style>
