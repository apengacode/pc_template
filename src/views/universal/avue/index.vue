<template>
  <div class="page">
    <header>avue低代码</header>
    <div class="page-container">
      <div class="avue-menu">
        <div class="menu">
          <div
            :class="['menu-item', currentMenu === item.name ? 'active-menu' : '']"
            v-for="item in menuList"
            :key="item.name"
            @click="menuChange(item.name)"
          >
            <div class="menu-item-icon">
              <i :class="['icon', 'iconfont', item.icon]"></i>
            </div>
            <div class="menu-item-name">{{ item.name }}</div>
          </div>
        </div>
      </div>
      <div class="avue-configuration">
        <div class="configuration">
          <div
            :class="['configuration-item', currentConfiguration.name === item.name ? 'active-configuration' : '']"
            v-for="item in configuration"
            :key="item.name"
            @click="configurationChange(item)"
          >
            <div class="configuration-item-name">{{ item.name }}</div>
            <div class="configuration-item-icon">
              <i class="icon iconfont icon-hosjoy_right"></i>
            </div>
          </div>
        </div>
      </div>
      <div class="avue-main">
        <el-card class="main-card">
          <CurdMain v-if="currentMenu === 'avue_curd'" :currentMenu="currentMenu" :currentConfiguration="currentConfiguration" />
          <FormMain v-if="currentMenu === 'avue_form'" :currentMenu="currentMenu" :currentConfiguration="currentConfiguration" />
        </el-card>
        <CurdCode v-if="currentMenu === 'avue_curd'" :currentMenu="currentMenu" :currentConfiguration="currentConfiguration" />
        <FormCode v-if="currentMenu === 'avue_form'" :currentMenu="currentMenu" :currentConfiguration="currentConfiguration" />
      </div>
      <div class="avue-fields">
        <div class="fields">
          <el-tabs type="border-card" class="avue-table">
            <el-tab-pane label="常用">
              <Fields :fields="fields['common_use']" :currentMenu="currentMenu" :currentConfiguration="currentConfiguration" />
            </el-tab-pane>
            <el-tab-pane label="不常用">
              <un-common :fields="fields['un_common_use']" :currentMenu="currentMenu" :currentConfiguration="currentConfiguration" />
            </el-tab-pane>
          </el-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { configuration, fields } from './const'
import Fields from './components/fields.vue'
import CurdMain from './components/curd-main.vue'
import FormMain from './components/form-main.vue'
import CurdCode from './components/curd-code.vue'
import FormCode from './components/form-code.vue'
import UnCommon from './components/un-common.vue'
export default {
  name: 'Avue',
  components: { Fields, CurdMain, FormMain, CurdCode, FormCode, UnCommon },
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
      currentMenu: 'avue_curd',
      currentConfiguration: { name: 'Option', target: 'option' }
    }
  },
  computed: {
    configuration() {
      return configuration[this.currentMenu]
    },
    fields() {
      const { target: currentMenuTarget } = this.menuList.find((i) => i.name === this.currentMenu)
      return fields[currentMenuTarget + '_' + this.currentConfiguration.target] || {}
    }
  },
  mounted() {
  },
  methods: {
    menuChange(name) {
      this.currentMenu = name
    },
    configurationChange(val) {
      if (!val.status) {
        this.$message.warning('暂未开放')
        return
      }
      this.currentConfiguration = val
    }
  }
}
</script>

<style lang="scss" scoped>
@import './style/avue.scss';
</style>
