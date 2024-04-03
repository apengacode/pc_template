<template>
  <div class="validtor">
    <h2 class="title">Validator</h2>
    <p>用于表单校验</p>
    <ElementDoc title="Form校验 (通用包)">
      <template #element>
        <el-form :model="form" :rules="rules" label-position="left" label-width="120px" label-suffix=":" status-icon style="width: 500px">
          <el-form-item label="手机号" prop="moblie">
            <el-input v-model="form.moblie" clearable></el-input>
          </el-form-item>
          <el-form-item label="电话号码" prop="phone">
            <el-input v-model="form.phone" clearable></el-input>
          </el-form-item>
          <el-form-item label="邮箱" prop="email">
            <el-input v-model="form.email" clearable></el-input>
          </el-form-item>
          <el-form-item label="URL地址" prop="URL">
            <el-input v-model="form.URL" clearable></el-input>
          </el-form-item>
          <el-form-item label="中文名[2-4位]" prop="name">
            <el-input v-model="form.name" clearable></el-input>
          </el-form-item>
          <el-form-item label="身份证号码" prop="cardId">
            <el-input v-model="form.cardId" clearable></el-input>
          </el-form-item>
          <el-form-item label="邮政编码验证" prop="zipCode">
            <el-input v-model="form.zipCode" clearable></el-input>
          </el-form-item>
          <el-form-item label="IP地址验证" prop="ip">
            <el-input v-model="form.ip" clearable></el-input>
          </el-form-item>
          <el-form-item label="两位小数判断" prop="fee">
            <el-input v-model="form.fee" clearable></el-input>
          </el-form-item>
          <el-form-item label="匹配密码" prop="pwd">
            <el-input v-model="form.pwd" clearable></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #code>
        <prism-editor class="my-editor height-500" v-model="code" :highlight="highlighter" readonly line-numbers></prism-editor>
      </template>
    </ElementDoc>
    <div class="card">
      <el-card>
        <Pre v-text="validCode"></Pre>
      </el-card>
    </div>
  </div>
</template>

<script>
import ElementDoc from '@/components/element-doc/element-doc.vue'
import { PrismEditor } from 'vue-prism-editor'
import 'vue-prism-editor/dist/prismeditor.min.css'

// import highlighting library
import { highlight, languages } from 'prismjs/components/prism-core'
import 'prismjs/components/prism-clike'
import 'prismjs/components/prism-javascript'
import 'prismjs/themes/prism-tomorrow.css'
export default {
  name: 'Validator',
  components: { ElementDoc, PrismEditor },
  data() {
    return {
      validCode: `/**
 * 邮箱
 * @param {*} s
 */
export function isEmail(s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(
    s
  );
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile(s) {
  return /^1[3-9]\d{9}$/.test(s);
}

/**
 * 身份证脱敏
 * @param {*} s
 * @returns
 */
export function formatIdCard(s) {
  return s.replace(/^(.{4})(?:\d+)(.{4})$/, "$1******$2");
}

/**
 * 电话号码脱敏
 * @param {*} s
 * @returns
 */
export function formatTel(s) {
  return s.replace(/^(\d{3})\d{4}(\d{4})$/, "$1****$2");
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone(s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s);
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL(s) {
  return /^http[s]?:\/\/.*/.test(s);
}

/* 小写字母 */
export function isLowerCase(str) {
  const reg = /^[a-z]+$/;
  return reg.test(str);
}

/* 大写字母 */
export function isUpperCase(str) {
  const reg = /^[A-Z]+$/;
  return reg.test(str);
}

/* 大小写字母 */
export function isAlphabets(str) {
  const reg = /^[A-Za-z]+$/;
  return reg.test(str);
}

/* 验证pad还是pc */
export const isPc = function () {
  const userAgentInfo = navigator.userAgent;
  const Agents = [
    "Android",
    "iPhone",
    "SymbianOS",
    "Windows Phone",
    "iPad",
    "iPod",
  ];
  let flag = true;
  for (let v = 0; v < Agents.length; v++) {
    if (userAgentInfo.indexOf(Agents[v]) > 0) {
      flag = false;
      break;
    }
  }
  return flag;
};

/**
 * 判断姓名是否正确
 */
export function isName(name) {
  const regName = /^[\u4e00-\u9fa5]{2,4}$/;
  if (!regName.test(name)) return false;
  return true;
}

/**
 * 判断是否为整数
 */
export function isNum(num, type) {
  let regName = /[^\d.]/g;
  if (type === 1) {
    if (!regName.test(num)) return false;
  } else if (type === 2) {
    regName = /[^\d]/g;
    if (!regName.test(num)) return false;
  }
  return true;
}

/**
 * 判断是否为小数
 */
export function isFloat(num) {
  const regName1 = /^\d+(\.\d+)?$/;
  const regName2 =
    /^(-(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*)))$/;
  if (regName1.test(num) || regName2.test(num)) return true;
  return false;
}

/**
 * 判断是否为空
 */
export function isNull(val) {
  if (val instanceof Array) {
    if (val.length === 0) return true;
  } else if (val instanceof Object) {
    if (JSON.stringify(val) === "{}") return true;
  } else {
    if (
      val === "null" ||
      val == null ||
      val === "undefined" ||
      val === undefined ||
      val === ""
    )
      return true;
    return false;
  }
  return false;
}

/**
 * 判断身份证号码
 */
export function isCardId(code) {
  return /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/.test(code);
}

/*
 * 整数必须为0
 */
export function isIntEqZero(value) {
  value = parseInt(value);
  return value === 0;
}

/*
 * 判断整数value是否大于0
 * 整数必须大于0
 */
export function isIntGtZero(value) {
  value = parseInt(value);
  return value > 0;
}

/*
 * 判断整数value是否大于或等于0
 * 整数必须大于或等于0
 */
export function isIntGteZero(value) {
  value = parseInt(value);
  return value >= 0;
}

/*
 * 判断整数value是否不等于0
 * 整数必须不等于0
 */
export function isIntNEqZero(value) {
  value = parseInt(value);
  return value !== 0;
}

/*
 * 判断整数value是否不等于0
 * 整数必须小于0
 */
export function isIntLtZero(value) {
  value = parseInt(value);
  return value < 0;
}

/*
 * 判断整数value是否小于或等于0
 * 整数必须小于或等于0
 */
export function isIntLteZero(value) {
  value = parseInt(value);
  return value <= 0;
}

/*
 * 判断浮点数value是否等于0
 * 浮点数必须为0
 */
export function isFloatEqZero(value) {
  value = parseFloat(value);
  return value === 0;
}

/*
 * 判断浮点数value是否大于0
 * 浮点数必须大于0
 */
export function isFloatGtZero(value) {
  value = parseFloat(value);
  return value > 0;
}

/*
 * 判断浮点数value是否大于或等于0
 * 浮点数必须大于或等于0
 */
export function isFloatGteZero(value) {
  value = parseFloat(value);
  return value >= 0;
}

/*
 * 判断浮点数value是否不等于0
 * 浮点数必须不等于0
 */
export function isFloatNEqZero(value) {
  value = parseFloat(value);
  return value !== 0;
}

/*
 * 判断浮点数value是否小于0
 * 浮点数必须小于0
 */
export function isFloatLtZero(value) {
  value = parseFloat(value);
  return value < 0;
}

/*
 * 判断浮点数value是否小于或等于0
 * 浮点数必须小于或等于0
 */
export function isFloatLteZero(value) {
  value = parseFloat(value);
  return value <= 0;
}
/*
 * 匹配integer
 * 匹配integer
 */
export function isInteger(value) {
  // eslint-disable-next-line no-useless-escape
  return /^[-\+]?\d+$/.test(value) && parseInt(value) >= 0;
}

/*
 * 匹配数字 - 空格
 */
export function isNumStr(value) {
  // eslint-disable-next-line no-useless-escape
  return /^(\d)*$/gi.test(value);
}

/*
 * 判断数值类型，包括整数和浮点数
 * 匹配数值类型，包括整数和浮点数
 */
export function isNumber(value) {
  // eslint-disable-next-line no-useless-escape
  return /^[-\+]?\d+$/.test(value) || /^[-\+]?\d+(\.\d+)?$/.test(value);
}

/*
 * 只能输入[0-9]数字
 * 只能输入[0-9]数字
 */
export function isDigits(value) {
  return /^\d+$/.test(value);
}

/*
 * 判断英文字符
 * 只能包含英文字符。
 */
export function isEnglish(value) {
  return /^[A-Za-z]+$/.test(value);
}
/*
 * 联系电话(手机/电话皆可)验证
 * 请正确填写您的联系方式
 */
export function isTel(value) {
  var length = value.length;
  var mobile = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
  var tel = /^(\d{3,4}-?)?\d{7,9}$/g;
  return tel.test(value) || (length === 11 && mobile.test(value));
}

/*
 * 匹配qq
 * 匹配QQ
 */
export function isQq(value) {
  return /^[1-9]\d{4,12}$/;
}

/*
 * 邮政编码验证
 * 请正确填写您的邮政编码。
 */
export function isZipCode(value) {
  var zip = /^[0-9]{6}$/;
  return zip.test(value);
}

/*
 * 匹配密码，以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
 * 以字母开头，长度在6-12之间，只能包含字符、数字和下划线。
 */
export function isPwd(value) {
  return /^[a-zA-Z]\\w{6,12}$/.test(value);
}

/*
 * IP地址验证
 * 请填写正确的IP地址。
 */
export function ip(value) {
  return /^(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.)(([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))\.){2}([1-9]|([1-9]\d)|(1\d\d)|(2([0-4]\d|5[0-5])))$/.test(
    value
  );
}

/*
 * 字符验证，只能包含中文、英文、数字、下划线等字符。
 * 只能包含中文、英文、数字、下划线等字符
 */
export function stringCheck(value) {
  return /^[a-zA-Z0-9\u4e00-\u9fa5-_]+$/.test(value);
}

/*
 * 匹配汉字
 * 匹配汉字
 */
export function isChinese(value) {
  return /^[\u4e00-\u9fa5]+$/.test(value);
}

/*
 * 匹配中文
 * 匹配中文
 */
export function isChineseChar(value) {
  return /^[\u4E00-\u9FFF]+$/.test(value);
}

/*
 * 判断是否为合法字符(a-zA-Z0-9-_)
 * 判断是否为合法字符(a-zA-Z0-9-_)
 */
export function isRightfulString(value) {
  return /^[A-Za-z0-9_-]+$/.test(value);
}

// 车牌号校验
export function isPlateNo(plateNo) {
  var re = /^[\u4e00-\u9fa5]{1}[A-Z]{1}[A-Z_0-9]{5}$/;
  if (re.test(plateNo)) {
    return true;
  }
  return false;
}

// 两位小数判断
export function isFee(fee) {
  if (/^(([1-9]\d*)|(0{1}))(\.\d{1,2})?$/.test(fee)) {
    return true;
  }
  return false;
}

/**
 * @param {string} path
 * @returns {Boolean}
 */
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path);
}

`,
      code: `<el-form :model="form" :rules="rules" label-position="left" label-width="120px" label-suffix=":" status-icon style="width: 500px">
  <el-form-item label="手机号" prop="moblie">
    <el-input v-model="form.moblie" clearable></el-input>
  </el-form-item>
  <el-form-item label="电话号码" prop="phone">
    <el-input v-model="form.phone" clearable></el-input>
  </el-form-item>
  <el-form-item label="邮箱" prop="email">
    <el-input v-model="form.email" clearable></el-input>
  </el-form-item>
  <el-form-item label="URL地址" prop="URL">
    <el-input v-model="form.URL" clearable></el-input>
  </el-form-item>
  <el-form-item label="中文名[2-4位]" prop="name">
    <el-input v-model="form.name" clearable></el-input>
  </el-form-item>
  <el-form-item label="身份证号码" prop="cardId">
    <el-input v-model="form.cardId" clearable></el-input>
  </el-form-item>
  <el-form-item label="邮政编码验证" prop="zipCode">
    <el-input v-model="form.zipCode" clearable></el-input>
  </el-form-item>
  <el-form-item label="IP地址验证" prop="ip">
    <el-input v-model="form.ip" clearable></el-input>
  </el-form-item>
  <el-form-item label="两位小数判断" prop="fee">
    <el-input v-model="form.fee" clearable></el-input>
  </el-form-item>
  <el-form-item label="匹配密码" prop="pwd">
    <el-input v-model="form.pwd" clearable></el-input>
  </el-form-item>
</el-form>
<script>
  export default {
    data() {
      return {
        form: {},
        rules: {
          moblie: [{ required: true, validator: this.$validator.isMobile, trigger: 'blur' }],
          phone: [{ required: true, validator: this.$validator.isPhone, trigger: 'blur' }],
          email: [{ required: true, validator: this.$validator.isEmail, trigger: 'blur' }],
          URL: [{ required: true, validator: this.$validator.isURL, trigger: 'blur' }],
          name: [{ required: true, validator: this.$validator.isName, trigger: 'blur' }],
          cardId: [{ required: true, validator: this.$validator.isCardId, trigger: 'blur' }],
          zipCode: [{ required: true, validator: this.$validator.isZipCode, trigger: 'blur' }],
          ip: [{ required: true, validator: this.$validator.ip, trigger: 'blur' }],
          PlateNo: [{ required: true, validator: this.$validator.isPlateNo, trigger: 'blur' }],
          fee: [{ required: true, validator: this.$validator.isFee, trigger: 'blur' }],
          pwd: [{ required: true, validator: this.$validator.isPwd, trigger: 'blur' }]
        }
      }
    }
  }
<script>`,
      form: {},
      rules: {
        moblie: [{ required: true, validator: this.$validator.isMobile, trigger: 'blur' }],
        phone: [{ required: true, validator: this.$validator.isPhone, trigger: 'blur' }],
        email: [{ required: true, validator: this.$validator.isEmail, trigger: 'blur' }],
        URL: [{ required: true, validator: this.$validator.isURL, trigger: 'blur' }],
        name: [{ required: true, validator: this.$validator.isName, trigger: 'blur' }],
        cardId: [{ required: true, validator: this.$validator.isCardId, trigger: 'blur' }],
        zipCode: [{ required: true, validator: this.$validator.isZipCode, trigger: 'blur' }],
        ip: [{ required: true, validator: this.$validator.ip, trigger: 'blur' }],
        PlateNo: [{ required: true, validator: this.$validator.isPlateNo, trigger: 'blur' }],
        fee: [{ required: true, validator: this.$validator.isFee, trigger: 'blur' }],
        pwd: [{ required: true, validator: this.$validator.isPwd, trigger: 'blur' }]
      }
    }
  },
  mounted() {},
  methods: {
    highlighter(code) {
      return highlight(code, languages.js)
    }
  }
}
</script>

<style lang="scss" scoped>
.validtor {
  position: relative;
  h3 {
    margin: 55px 0 20px;
    font-size: 22px;
  }
  .title {
    font-weight: 400;
    color: #1f2f3d;
    font-size: 28px;
    margin: 30px 0 10px;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
  }
}
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
.card {
  position: absolute;
  top: 0;
  right: 0;
}
</style>
