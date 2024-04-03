<template>
  <div>
    <el-drawer ref="drawerRef" size="20%" :visible.sync="drawer" :show-close="false" :wrapperClosable="true" :before-close="handleClose">
      <div class="drawer-body">
        <div>
          <div class="drawer-header">
            <div class="drawer-title">IHaiKing UI Configurator</div>
            <div class="drawer-close" @click="handleClose"><span class="iconfont icon-close"></span></div>
          </div>
          <div class="second-title">See our dashboard options</div>
        </div>
        <div class="setting-container">
          <div class="setting-item">
            <div class="setting-item-header">Sidebar Colors</div>
            <div class="setting-item-container">
              <ul>
                <li v-for="item in sidebarColors" :key="item" :style="{ backgroundColor: item }" @click="onSettingBarClick(item)"></li>
              </ul>
            </div>
          </div>
          <div class="setting-item">
            <div class="setting-item-header">Sidebar Type</div>
            <div class="setting-item-remark">Choose between 3 different sidenav types.</div>
            <div class="setting-item-container">
              <div class="setting-bar-box">
                <div :class="['setting-bar', currentType === item ? 'current-type' : '']" v-for="item in sidebarType" :key="item" @click="onSidebarTypeClick(item)">{{ item }}</div>
              </div>
            </div>
          </div>
          <div class="setting-item" style="display: flex; align-items: center; justify-content: space-between">
            <div class="setting-item-header">Sidebar Type</div>
            <div class="setting-item-container">
              <el-switch v-model="value" active-color="#13ce66" inactive-color="#3a3a40" @change="onSidebarTypeChange"> </el-switch>
            </div>
          </div>
        </div>
        <div class="setting-footer">
          <div class="buy-btn btn">BUY NOW</div>
          <div class="view-btn btn">VIEW DOCUMENTATION</div>
          <div class="footer-text">Thank you for sharing!</div>
          <div class="share-btn-box">
            <div class="share-weibo share-btn">
              <span class="iconfont icon-xinlangweibo"></span>
              微博
            </div>
            <div class="share-csdn share-btn">
              <span class="iconfont icon-csdn"></span>
              CSDN
            </div>
          </div>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  data() {
    return {
      drawer: false,
      sidebarColors: ['#d45e7c', '#505052', '#6494e8', '#7eb579', '#f2a958', '#de6f64'],
      sidebarType: ['DARK', 'TRANSPARENT', 'WHITE'],
      currentType: '',
      value: false
    }
  },
  methods: {
    ...mapMutations('app', ['CHANGE_SIDEBAR_COLORS', 'CHANGHE_SIDEBARTYPE', 'CHANGE_NAVBARFIXED']),
    onSettingBarClick(color) {
      this.CHANGE_SIDEBAR_COLORS(color)
    },
    onSidebarTypeClick(type) {
      this.currentType = type
      this.CHANGHE_SIDEBARTYPE(type)
    },
    onSidebarTypeChange(value) {
      this.CHANGE_NAVBARFIXED(value)
    },
    show() {
      this.drawer = true
    },
    handleClose() {
      this.drawer = false
    }
  }
}
</script>
<style scoped lang="scss">
.drawer-body {
  color: #333;
  font-family: Roboto, sans-serif !important;
  padding: 0 30px 20px;
  .drawer-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .drawer-title {
      font-size: 20px;
      color: #344767;
      font-weight: 600;
    }
    .drawer-close {
      cursor: pointer;
    }
  }
  .second-title {
    color: #7b809a !important;
    font-size: 16px;
    line-height: 30px;
  }
}
.setting-container {
  margin-top: 50px;
  .setting-item {
    margin-bottom: 30px;
    &-header {
      color: #344767 !important;
      font-weight: 600;
      line-height: 1.5;
      font-size: 16px;
    }
    &-remark {
      color: #7b809a !important;
      font-size: 14px;
    }
    &-container {
      margin-top: 15px;
      .setting-bar-box {
        display: flex;
        .setting-bar {
          padding: 12px 25px;
          border: 1px solid #344767;
          border-radius: 10px;
          margin-right: 10px;
          font-size: 12px;
          font-weight: 600;
          color: #344767;
          cursor: pointer;
        }
        .current-type {
          background-color: #344767;
          color: #fff;
        }
      }

      ul {
        display: flex;
        // justify-content: space-around;
        align-items: center;
        li {
          width: 23px;
          height: 23px;
          list-style: none;
          border-radius: 50%;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
}

.setting-footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  .btn {
    width: 100%;
    cursor: pointer;
    text-align: center;
    border-radius: 8px;
    line-height: 40px;
    color: #fff;
    font-weight: 600;
  }
  .buy-btn {
    background-color: #c7345a;
  }
  .view-btn {
    color: #344767;
    border: 1px solid #344767;
    margin-top: 20px;
  }
  .footer-text {
    color: #344767;
    font-size: 16px;
    font-weight: 600;
    margin-top: 100px;
  }
  .share-btn-box {
    display: flex;
    justify-content: space-between;
    width: 70%;
    margin-top: 20px;
    color: #fff;
    font-weight: 600;
    .share-btn {
      background-color: #303d5a;
      width: 48%;
      text-align: center;
      line-height: 30px;
      border-radius: 8px;
      font-size: 12px;
      font-weight: 600;
      cursor: pointer;
      span {
        margin-right: 3px
      }
    }
  }
}
</style>
