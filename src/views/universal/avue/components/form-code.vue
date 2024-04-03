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
  name: 'FormCode',
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
      html: `<avue-form ref="form" v-model="form" :option="formOption" @submit="handleSubmit" @reset-change="handleReset"> </avue-form>`,
      data: `
import { formOption } from './formOption.js'

data() {
  return {
    formOption: {},
    form: {},
  }
}`,
      methods: `
methods: {
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
`,
      option: '',
      column: ``
    }
  },
  computed: {
    getForm() {
      const { target: current_menu_target } = this.menuList.find((i) => i.name === this.currentMenu)
      return current_menu_target + '_' + this.currentConfiguration.target || ''
    }
  },
  mounted() {
    bus.$on('sendOption', ({formOption, type}) => {
      if(type === 'option') {
        this.writeOption(formOption)
      }
    })
    bus.$on('sendColumnn', (columns) => {
      this.writeColumn(columns)
    })
  },
  methods: {
    writeColumn(columns) {
      this.column = 
`
column:[
`
      columns.forEach(column => {
        for(let k in column) {
          if(column[k] === undefined) {
            delete column[k]
          }
        }
        this.column = this.column + 
`
  {
`
        for(let k in column) {
          this.column = this.column + 
`
    ${k}: ${this.getGe(column[k], k)},
`
        }
        this.column = this.column + 
`
  },
`
      })
      this.column = this.column + 
`
]
`
    },
    writeOption(formOption) {
      this.option = 
`
formOption: {
`
      for(let k in formOption) {
        this.option = this.option + 
`
  ${k}: ${formOption[k]},
`
      }
      this.option = this.option + `
}      
`
    },
    getGe(val, key) {
      if (Object.prototype.toString.call(val) === '[object Boolean]') {
        if(val) {
          return `true`
        }
        return `false`
      }
      if (Object.prototype.toString.call(val) === '[object Number]') {
        return val + ''
      }
      if (Object.prototype.toString.call(val) === '[object String]') {
        return val
      }
      if (Object.prototype.toString.call(val) === '[object Object]') {
        let str = `{
`
        for(let k in val) {
          str = str + 
`
      ${k}: ${val[k]},
`
        }
        str = str + `
    }`
        return str
      }
      if (Object.prototype.toString.call(val) === '[object Array]' && key === 'rules') {
        let str = `[
`
        val.forEach(item => {
          str = str + 
`
      {
`
          str = str + 
`
        required: ${item.required ? 'true' : 'false'},
        message: '${item.message}',
        trigger: '${item.trigger}'
      }
`
        })
        str = str + 
`
    ]`
        return str
      }
      if (Object.prototype.toString.call(val) === '[object Array]' && key === 'dicData') {
        let str = `[
`
        val.forEach(item => {
          str = str + 
`
      {
`
          str = str + 
`
        ${item[0].label}: '${item[0].value}',
        ${item[1].label}: '${item[1].value}',
`
          str = str + 
`
      },
`
        })
        str = str + 
`
    ]`
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
