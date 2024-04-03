<template>
  <div class="app-page" :style="{color: sidebarType === 'DARK' ? '#fff' : '#37373d'}">
    <nav class="navigation">
      <div
        class="nav-main element"
        ref="navMainRef"
        :style="{ width: !menuDrawerShow ? '65px' : '250px' }"
        @mouseenter="navMouseEnter"
        @mouseleave="navMouseLeave"
      >
        <div class="nav-login">Plat</div>
        <div class="nav-user nav-common">
          <div :class="['menu-item', activeMenu === userInfo.username ? 'active' : '']" @click="userShow">
            <div class="menu-item-left">
              <div class="menu-item-avatar">
                <img :src="userInfo.avatar" alt="" />
              </div>
              <div class="menu-item-content" v-show="menuDrawerShow">{{ userInfo.username }}</div>
            </div>
            <div class="menu-item-icon" v-if="userInfo.children && userInfo.children.length">
              <i class="el-icon-arrow-down"></i>
            </div>
          </div>
          <div class="menu-item-children" ref="useChildren">
            <div
              :class="['menu-item', activeMenu === item.title ? 'active' : '']"
              :style="{ backgroundColor: activeSubMenu === item.path ? sidebarColors : '' }"
              v-for="item in userInfo.children"
              :key="item.title"
              @click="userItemClick(item)"
            >
              <div class="menu-item-left">
                <div class="menu-item-sort">{{ item.firstWord }}</div>
                <div class="menu-item-content" v-show="menuDrawerShow">{{ item.title }}</div>
              </div>
              <div class="menu-item-icon" v-if="item.children && item.children.length">
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
          </div>
        </div>
        <div class="nav-common" v-for="k in menuRouter" :key="k.id">
          <div class="common-title">{{ k.title }}</div>
          <div v-for="(item, index) in k.children" :key="item.id">
            <div :class="['menu-item', 'no-margin', activeMenu === item.id ? 'active' : '']" @click="menuItemClick(item, index)">
              <div class="menu-item-left">
                <div class="menu-item-sort">{{ item.firstWord }}</div>
                <div class="menu-item-content" v-show="menuDrawerShow">{{ item.title }}</div>
              </div>
              <div class="menu-item-icon" v-if="item.children && item.children.length">
                <i class="el-icon-arrow-down"></i>
              </div>
            </div>
            <div class="menu-children" :ref="item.id">
              <div
                :class="['menu-item']"
                :style="{ backgroundColor: activeSubMenu === jtem.path ? sidebarColors : '' }"
                v-for="jtem in item.children"
                :key="jtem.id"
                @click="subMenuClick(jtem)"
              >
                <div class="menu-item-left">
                  <div class="menu-item-sort">{{ jtem.firstWord }}</div>
                  <div class="menu-item-content" v-show="menuDrawerShow">{{ jtem.title }}</div>
                </div>
                <div class="menu-item-icon" v-if="jtem.children && jtem.children.length">
                  <i class="el-icon-arrow-down"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <div class="app-main" :style="{ width: menuDrawerShow ? 'calc(100vw - 280px)' : 'calc(100vw - 95px)' }">
      <div :class="['app-main-header', navbarFixed ? 'navbar-fixed' : '']" :style="{width: navbarFixed ? !menuDrawerShow ? 'calc(100vw - 135px)' : 'calc(100vw - 320px)' : menuDrawerShow ? 'calc(100vw - 300px)' : 'calc(100vw - 120px)'}">
        <div class="app-breadcrumb">
          <div class="breadcrumb">
            <div class="breadcrumb-box">
              <div class="router-home">
                <span class="iconfont icon-home"></span>
              </div>
              <span v-if="firstRouter">/</span>
              <div class="first-router" v-if="firstRouter">{{ firstRouter.meta.title }}</div>
              <span v-if="secondRouter">/</span>
              <div class="second-router" v-if="secondRouter">{{ secondRouter.meta.title }}</div>
            </div>
            <div class="breadcrumb-title">{{ title }}</div>
          </div>
          <div class="drawer-toggler" @click="handleToggler">
            <span v-show="menuDrawer" class="iconfont icon-menuoff"></span>
            <span v-show="!menuDrawer" class="iconfont icon-menuon"></span>
          </div>
        </div>
        <div class="app-tool-bar">
          <div class="tool-search">
            <el-input placeholder="Search here" size="small"></el-input>
          </div>
          <div class="tool-user">
            <span class="iconfont icon-1USER"></span>
          </div>
          <div class="tool-setting" @click="onShowSetting"><span class="iconfont icon-setting-filling"></span></div>
          <div class="tool-light"><span class="iconfont icon-tongzhi"></span></div>
        </div>
      </div>
      <div class="app-main-container" :style="{paddingTop: navbarFixed ? '110px' : ''}">
        <router-view />
      </div>
    </div>
    <Setting ref="settingRef" />
  </div>
</template>
<script>
import { menuRoute } from './router'
import Setting from './components/setting.vue'
import { mapState } from 'vuex'
export default {
  name: 'Layout',
  components: { Setting },
  data() {
    return {
      activeMenu: '',
      activeSubMenu: '',
      menuDrawerShow: true,
      menuDrawer: true,
      userInfo: {
        username: 'Chunpeng Du',
        avatar: require('./avatar.jpg'),
        show: false,
        children: [
          {
            title: 'My Profile',
            path: '',
            firstWord: 'MP'
          },
          {
            title: 'Setting',
            path: '',
            firstWord: 'S'
          },
          {
            title: 'Logput',
            path: '',
            firstWord: 'L'
          }
        ]
      },
      title: '',
      firstRouter: {},
      secondRouter: {}
    }
  },
  watch: {
    $route: {
      handler(route) {
        // 展开菜单
        this.menuRouter.forEach((item) => {
          if (item.children && item.children.length) {
            item.children.forEach((jtem) => {
              if (jtem.children && jtem.children.length) {
                jtem.children.forEach((ktem) => {
                  if (ktem.path === route.path) {
                    this.$nextTick(() => {
                      jtem.show = false
                      this.menuItemClick(jtem)
                    })
                  }
                })
              }
            })
          }
        })
        this.activeSubMenu = route.path

        this.title = route.meta.title
        this.firstRouter = route.matched[0]
        this.secondRouter = route.matched[1]
      },
      immediate: true,
      deep: true
    },
    sidebarType: {
      handler(type) {
        this.$nextTick(() => {
          if (type === 'DARK') {
            this.$refs.navMainRef.style.backgroundColor = '#37373d'
          } else if(type === 'TRANSPARENT') {
            this.$refs.navMainRef.style.backgroundColor = 'rgba(0,0,0,0)'
          } else if(type === 'WHITE') {
            this.$refs.navMainRef.style.backgroundColor = '#fff'
          }
        })
      },
      immediate: true,
      deep: true
    }
  },
  computed: {
    ...mapState('app', ['sidebarColors', 'sidebarType', 'navbarFixed']),
    menuRouter() {
      return menuRoute
    }
  },
  mounted() {},
  methods: {
    onShowSetting() {
      this.$refs.settingRef.show()
    },
    subMenuClick(jtem) {
      if (this.activeSubMenu === jtem.path) return
      this.activeSubMenu = jtem.path
      this.$router.push(jtem.path)
    },
    menuItemClick(item) {
      this.activeMenu = ''
      if (this.activeMenu == item.id) {
        this.activeMenu = ''
      } else {
        this.activeMenu = item.id
      }
      if (item.show) {
        this.$refs[item.id][0].style.height = 0 + 'px'
      } else {
        this.$refs[item.id][0].style.height = 60 * item.children.length + 'px'
      }
      item.show = !item.show
      // 关闭所有展开的菜单
      this.menuRouter.forEach((i) => {
        i.children.forEach((j) => {
          if (j.id !== item.id) {
            j.show = false
            this.$refs[j.id][0].style.height = 0 + 'px'
          }
        })
      })
    },
    userShow() {
      if (this.activeMenu == this.userInfo.username) {
        this.activeMenu = ''
      } else {
        this.activeMenu = this.userInfo.username
      }
      if (this.userInfo.show) {
        this.$refs.useChildren.style.height = 0 + 'px'
      } else {
        this.$refs.useChildren.style.height = 60 * this.userInfo.children.length + 'px'
      }
      this.userInfo.show = !this.userInfo.show
    },
    userItemClick(item) {
      this.activeMenu = item.title
      this.activeSubMenu = item.path
    },
    /**
     * menuDrawerShow 菜单
     */
    navMouseEnter() {
      if (this.menuDrawer) return
      this.menuDrawerShow = true
    },
    navMouseLeave() {
      if (this.menuDrawer) return
      this.menuDrawerShow = false
    },
    handleToggler() {
      this.menuDrawer = !this.menuDrawer
      if (!this.menuDrawer) {
        this.menuDrawerShow = false
      } else {
        this.menuDrawerShow = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
.app-page {
  width: 100vw;
  height: 100vh;
  background-color: #eef0f3;
  display: flex;
  color: #fff;
}
.navigation {
  // background-color: pink;
  padding: 20px 10px 20px 20px;
  height: 100%;
  box-sizing: border-box;

  .nav-main {
    width: 250px;
    transition: all 300ms;
    height: calc(100vh - 40px);
    border-radius: 10px;
    overflow-y: scroll;
    box-sizing: border-box;
    .nav-login {
      font-size: 14px;
      font-weight: 600;
      text-align: center;
      height: 72px;
      line-height: 72px;
      border-bottom: 1px solid #54545a;
    }
    .nav-common {
      padding: 10px 15px;
      border-bottom: 1px solid #54545a;
      .common-title {
        padding: 10px 0 20px 10px;
        font-weight: 700;
        font-size: 14px;
      }
      .active {
        background-color: hsla(0, 0%, 78%, 0.2);
      }
      .active-sub-menu {
        background-color: #6da967;
      }
      .active-sub-menu:hover {
        background-color: #6da967 !important;
      }
      .menu-item:hover {
        background-color: hsla(0, 0%, 78%, 0.2);
      }
      .menu-item-children {
        height: 0px;
        transition: all 300ms;
        overflow: hidden;
      }
      .menu-children {
        height: 0px;
        transition: all 300ms;
        overflow: hidden;
      }
      .no-margin {
        // margin-bottom: 0px !important;
      }
      .menu-item {
        padding: 10px 15px;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: space-between;
        border-radius: 5px;
        margin-bottom: 10px;
        .menu-item-left {
          display: flex;
          align-items: center;
          .menu-item-sort {
            width: 40px;
            height: 30px;
            line-height: 30px;
          }
          .menu-item-avatar {
            width: 40px;
            img {
              border-radius: 50%;
              width: 30px;
              height: 30px;
              display: block;
            }
          }
        }
      }
      .menu-item:nth-last-child(1) {
        margin-bottom: 0px;
      }
    }
  }
}
.app-main {
  // background-color: aqua;
  width: calc(100vw - 280px);
  transition: all 300ms;
  height: 100vh;
  min-width: 1700px;
  padding: 30px 10px;
  color: #333;
  overflow-y: scroll;
  .navbar-fixed {
    // width: calc(100vw - 320px);
    background-color: #fff;
    position: fixed;
    padding: 17px 0;
    border-radius: 13px;
  }
  .app-main-header {
    display: flex;
    align-items: center;
    margin-bottom: 20px;
    .app-breadcrumb {
      padding-left: 20px;
      flex: 0.5;
      display: flex;
      align-items: center;
      .breadcrumb {
        display: flex;
        align-items: center;
        flex-direction: column;
        align-items: flex-start;
        margin-right: 40px;
        .breadcrumb-box {
          display: flex;
          align-items: center;
          vertical-align: middle;
          .router-home {
            cursor: pointer;
            span {
              color: #888d95;
              font-size: 18px;
            }
          }
          .first-router {
            font-size: 14px;
            color: #afb2c1 !important;
          }
          span {
            color: #afb2c1 !important;
            margin: 0 5px;
          }
          .second-router {
            font-size: 14px;
            color: #344767 !important;
          }
        }
        .breadcrumb-title {
          margin-top: 3px;
          color: #344767;
          font-size: 16px;
          font-weight: 700;
        }
      }
      .drawer-toggler {
        span {
          font-size: 20px;
          cursor: pointer;
        }
      }
    }
    .app-tool-bar {
      flex: 0.5;
      display: flex;
      justify-content: flex-end;
      align-items: center;
      div {
        margin: 0 15px;
        span {
          cursor: pointer;
        }
      }
    }
  }
  .app-main-container {
    transition: all 300ms;
  }
}
</style>
