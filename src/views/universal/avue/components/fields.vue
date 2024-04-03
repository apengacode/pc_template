<template>
  <div class="fields">
    <el-form ref="form" :model="form" label-width="150px" label-position="left">
      <div class="field-item" v-for="field in fields" :key="field.name">
        <el-form-item class="avue-form-item" v-if="field.type === 'input'" :label="field.name">
          <el-input v-model="form[getForm][field.name]" size="small"></el-input>
        </el-form-item>

        <el-form-item class="avue-form-item" v-if="field.type === 'number'" :label="field.name">
          <el-input-number v-model.number="form[getForm][field.name]" size="small" controls-position="right"></el-input-number>
        </el-form-item>

        <el-form-item class="avue-form-item" v-if="field.type === 'enumerationDIY'" :label="field.name">
          <el-row v-for="(item, index) in form[getForm][field.name]" :key="index">
            <el-col :span="16" style="margin-right: 10px">
              <el-row>
                <el-col :span="11" style="margin-right: 10px">
                  <el-input v-model="item[0].label" size="small" controls-position="right" placeholder="label"></el-input>
                </el-col>
                <el-col :span="1">:</el-col>
                <el-col :span="11">
                  <el-input v-model="item[0].value" size="small" controls-position="right" placeholder="value"></el-input>
                </el-col>
              </el-row>

              <el-row>
                <el-col :span="11" style="margin-right: 10px">
                  <el-input v-model="item[1].label" size="small" controls-position="right" placeholder="label"></el-input>
                </el-col>
                <el-col :span="1">:</el-col>
                <el-col :span="11">
                  <el-input v-model="item[1].value" size="small" controls-position="right" placeholder="value"></el-input>
                </el-col>
              </el-row>
            </el-col>
            <el-col :span="6">
              <i class="el-icon-circle-plus" style="margin-right: 10px; cursor: pointer" @click="addSelectRow(field.name)" v-if="index === 0"></i>
              <i class="el-icon-remove" style="cursor: pointer" @click="subSelectRow(field.name, index)"></i>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item class="avue-form-item" v-if="field.type === 'enumeration'" :label="field.name">
          <el-row>
            <el-col :span="10" style="margin-right: 10px">
              <el-input v-model="form[getForm][field.name]['label']" size="small" controls-position="right" placeholder="label"></el-input>
            </el-col>
            <el-col :span="10">
              <el-input v-model="form[getForm][field.name]['value']" size="small" controls-position="right" placeholder="value"></el-input>
            </el-col>
          </el-row>
        </el-form-item>

        <el-form-item class="avue-form-item" v-if="field.type === 'select'" :label="field.name">
          <el-select v-model="form[getForm][field.name]">
            <el-option v-for="dic in field.dic" :key="dic.value" :label="dic.label" :value="dic.value"></el-option>
          </el-select>
        </el-form-item>
      </div>
    </el-form>
  </div>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'Fields',
  props: {
    fields: {
      default: []
    },
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
      form: {
        curd_curd: {},
        curd_page: {},
        curd_option: {},
        curd_column_dic: {
          dicData: [
            [
              { label: 'label', value: '是' },
              { label: 'value', value: '1' }
            ]
          ],
          props: {}
        },
        curd_column_props: {},
        curd_column_common: {
          label: 'avue',
          prop: 'avue',
          search: true
        },
        curd_events: {
          dicData: [
            { label: 'label', value: '是' },
            { label: 'value', value: '1' }
          ]
        },
        curd_methods: {},
        form_option: {
          labelWidth: 80
        }
      }
    }
  },
  watch: {
    form: {
      handler(newVal) {
        bus.$emit('getForm', { ...newVal })
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    getForm() {
      const { target: current_menu_target } = this.menuList.find((i) => i.name === this.currentMenu)
      return current_menu_target + '_' + this.currentConfiguration.target || ''
    }
  },
  mounted() {},
  methods: {
    addSelectRow(name) {
      if (name === 'dicData') {
        this.form[this.getForm][name].push([
          { label: '', value: '' },
          { label: '', value: '' }
        ])
      }
    },
    subSelectRow(name, index) {
      if (name === 'dicData') {
        this.form[this.getForm][name].splice(index, 1)
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.fields {
  height: 100%;

  .field-item {
    margin: 10px 0;
  }

  .title {
    padding: 10px 20px;
    font-weight: bold;
  }
}

.avue-form-item ::v-deep .el-input,
.el-input-number {
  width: 100% !important;
  margin-left: 0;
}
</style>
