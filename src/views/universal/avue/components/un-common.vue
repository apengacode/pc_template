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
        curd_column: {},
        curd_column_dic: {},
        curd_column_props: {},
        curd_column_common: {},
        curd_events: {},
        curd_methods: {},
        form_option: {}
      }
    }
  },
  watch: {
    form: {
      handler(newVal) {
        bus.$emit('getForm', newVal)
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    getForm() {
      const { target: currentMenuTarget } = this.menuList.find((i) => i.name === this.currentMenu)
      return currentMenuTarget + '_' + this.currentConfiguration.target || ''
    }
  },
  mounted() {},
  methods: {}
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
