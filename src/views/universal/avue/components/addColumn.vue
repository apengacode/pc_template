<template>
  <div>
    <el-dialog title="add-column" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
      <div>
        <el-form ref="form" v-model="form" :rules="rules" label-width="100px" label-position="center">
          <el-row>
            <el-col :span="12">
              <el-form-item label="label">
                <el-input v-model="form.label" placeholder="label"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="prop">
                <el-input v-model="form.prop" placeholder="prop"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="type">
                <el-select v-model="form.type" placeholder="type">
                  <el-option v-for="item in typeMap" :key="item.label" :label="item.label" :value="item.label"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="disabled">
                <el-select v-model="form.disabled" placeholder="disabled">
                  <el-option label="true" :value="true"></el-option>
                  <el-option label="false" :value="false"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="value" placeholder="value">
                <el-input v-model="form.value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="span">
                <el-input-number placeholder="span" v-model="form.span" controls-position="right" :min="0" :max="12"></el-input-number>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="labelWidth">
                <el-input-number v-model="form.labelWidth" controls-position="right" :min="0"></el-input-number>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="labelPosition">
                <el-select v-model="form.labelPosition">
                  <el-option v-for="item in positionMap" :key="item.label" :label="item.label" :value="item.label"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="12">
              <el-form-item label="props.label" placeholder="props.label">
                <el-input v-model="form.props.label"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label="props.value">
                <el-input v-model="form.props.value"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="padding: 0 0 10px 0">
              <el-button type="text" size="small" @click="addRule">新增rule</el-button>
            </el-col>
          </el-row>
          <el-row v-for="(item, index) in form.rules" :key="item.id">
            <el-col :span="7">
              <el-form-item label="required">
                <el-select v-model="item.required">
                  <el-option label="true" :value="true"></el-option>
                  <el-option label="false" :value="false"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="message">
                <el-input v-model="item.message"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="7">
              <el-form-item label="trigger">
                <el-select v-model="item.trigger">
                  <el-option label="blur" value="blur"></el-option>
                  <el-option label="change" value="change"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col class="center" :span="3"><i class="el-icon-delete" style="cursor: pointer" @click="subRule(index)"></i></el-col>
          </el-row>
          <el-row>
            <el-col :span="24" style="padding: 0 0 10px 0">
              <el-button type="text" size="small" @click="addDicData">新增dicData</el-button>
            </el-col>
          </el-row>
          <div style="display: flex; align-items: center" v-for="(item, index) in form.dicData">
            <div>
              <el-row style="margin-bottom: 10px; display: flex; align-items: center">
                <el-col :span="11">
                  <el-input v-model="item[0].label" size="small" placeholder="label"></el-input>
                </el-col>
                <el-col :span="1" style="text-align: center">:</el-col>
                <el-col :span="11">
                  <el-input v-model="item[0].value" size="small" placeholder="value"></el-input>
                </el-col>
              </el-row>
              <el-row style="margin-bottom: 10px; display: flex; align-items: center">
                <el-col :span="11">
                  <el-input v-model="item[1].label" size="small" placeholder="label"></el-input>
                </el-col>
                <el-col :span="1" style="text-align: center">:</el-col>
                <el-col :span="11">
                  <el-input v-model="item[1].value" size="small" placeholder="value"></el-input>
                </el-col>
              </el-row>
            </div>
            <div @click="subDicData(index)"><i class="el-icon-delete"></i></div>
          </div>
        </el-form>
      </div>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleEmit">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import bus from '@/utils/bus'
export default {
  name: 'AddColumn',
  data() {
    return {
      dialogVisible: false,
      form: {
        label: '',
        prop: '',
        props: {
          label: '',
          value: ''
        },
        rules: [],
        dicData: []
      },
      positionMap: [{ label: 'left' }, { label: 'center' }, { label: 'right' }],
      typeMap: [
        { label: 'input' },
        { label: 'number' },
        { label: 'select' },
        { label: 'cascader' },
        { label: 'date' },
        { label: 'datetime' },
        { label: 'checkbox' },
        { label: 'radio' },
        { label: 'switch' }
      ],
      rules: {
        label: [{ required: true, message: '请输入label', trigger: 'blur' }],
        prop: [{ required: true, message: '请输入prop', trigger: 'blur' }]
      }
    }
  },
  methods: {
    handleClose() {
      this.dialogVisible = false
    },
    show() {
      this.dialogVisible = true
    },
    addRule() {
      this.form.rules.push({
        id: +new Date(),
        required: null,
        message: '',
        trigger: ''
      })
    },
    subRule(index) {
      this.form.rules.splice(index, 1)
    },
    handleEmit() {
      let _form = {...this.form}
      if(!_form.dicData.length) {
        delete _form.dicData
      }
      if(!_form.rules.length) {
        delete _form.rules
      }
      if(!_form.props.label && !_form.props.value ) {
        delete _form.props
      }
      for (let k in _form) {
        if (!_form[k]) {
          delete _form[k]
        }
      }
      bus.$emit('getColumn', _form)
      this.dialogVisible = false
    },
    addDicData() {
      this.form.dicData.push([
        { label: '', value: '' },
        { label: '', value: '' }
      ])
    },
    subDicData(index) {
      this.form.dicData.splice(index, 1)
    }
  }
}
</script>
<style lang="scss" scoped>
.center {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px !important;
}
</style>
