<template>
    <div class="error-page">
      <img :src="info.url" alt="" />
      <p>{{ txt || info.txt }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorComponent',
    props: {
      type: {
        type: String,
        default: 'error'
      },
      txt: {
        type: String,
        default: ''
      }
    },
    computed: {
      info() {
        switch (this.type) {
          case '404':
            return {
              url: require('@/assets/images/404.png'),
              txt: '非常抱歉，您访问的页面不存在！'
            }
          case 'nodata':
            return {
              url: require('@/assets/images/nodata.png'),
              txt: '您还没添加任何数据！'
            }
          case 'nopermission':
            return {
              url: require('@/assets/images/nopermission.png'),
              txt: '非常抱歉，您无权访问该页面'
            }
          case 'coding':
            return {
              url: require('@/assets/images/coding.png'),
              txt: '系统正在升级维护中，请刷新界面或稍后访问'
            }
          default:
          case 'error':
            return {
              url: require('@/assets/images/error.png'),
              txt: '非常抱歉，服务器出错了'
            }
        }
      }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  .error-page {
    transform: translateX(65%);
    // position: absolute;
    // top: 40%;
    // left: 50%;
    width: 400px;
    img {
      width: 100%;
      height: auto;
    }
    p {
      margin-top: 20px;
      width: 100%;
      letter-spacing: 1px;
      white-space: unset;
      word-break: break-all;
      color: var(--theme);
      font-size: 16px;
      line-height: 1.5;
      text-align: center;
    }
  }
  </style>
  