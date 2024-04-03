module.exports = {
    sideTheme: 'theme-sea',
    // 是否系统布局配置
    showSettings: false,
    // 是否显示顶部导航
    topNav: false,
    // 是否显示 tagsView
    tagsView: false,
    // 是否固定头部
    fixedHeader: true,
    // 是否显示logo
    sidebarLogo: true,
    // 是否显示动态标题
    dynamicTitle: true,
    /**
     * @type {string | array} 'production' | ['production', 'development']
     * @description Need show err logs component.
     * The default is only used in the production env
     * If you want to also use it in dev, you can pass ['production', 'development']
     */
    errorLog: 'production',
    // 网页标题
    title: '船岸一体经营管理平台',
    // token名
    token: 'tim_token',
    // token前缀
    tokenPrefix: 'bearer',
    // token存储主域名
    domain: 'localhost',
    // 是否可以切换租户
    tenant: false,
    // 生产环境 static存放cdn地址
    staticPath: 'https://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/shoreside/html/main/',
    // 操作手册cdn地址
    handbookUrl: 'https://ihaiking.oss-cn-shanghai.aliyuncs.com/cdn/handbook/land-V2.3.4.pdf',
    // 上传地址
    uploadUrl: '/oss/upload/sturgeon',
    // 下载地址
    downloadUrl: '/oss/download/sturgeon',
    // 是否开启锁屏
    lockOnOff: false,
    // 锁屏时间
    lockTime: 1000 * 30 * 60,
    // 是否启用消息模块
    msg: true,
    // 子应用列表
    microApps: [
      {
        name: 'certificate',
        entry: process.env.VUE_APP_MICRO_CERT,
        activeRule: '/modules/certificate'
      },
      // {
      //   name: "product",
      //   entry: process.env.VUE_APP_MICRO_PRODUCT,
      //   activeRule: "/modules/product",
      // },
      {
        name: 'file',
        entry: process.env.VUE_APP_MICRO_FILE,
        activeRule: '/modules/file'
      },
      {
        name: 'system',
        entry: process.env.VUE_APP_MICRO_SYSTEM,
        activeRule: '/modules/system'
      },
      // {
      //   name: "msg",
      //   entry: process.env.VUE_APP_MICRO_MSG,
      //   activeRule: "/modules/msg",
      // },
      {
        name: 'voyageno',
        entry: process.env.VUE_APP_MICRO_VOYAGENO,
        activeRule: '/modules/voyageno'
      },
      {
        name: 'oils',
        entry: process.env.VUE_APP_MICRO_OILS,
        activeRule: '/modules/oils'
      },
      {
        name: 'crew',
        entry: process.env.VUE_APP_MICRO_CREW,
        activeRule: '/modules/crew'
      },
      {
        name: 'ba',
        entry: process.env.VUE_APP_MICRO_BA,
        activeRule: '/modules/ba'
      },
      {
        name: 'knowledge',
        entry: process.env.VUE_APP_MICRO_KD,
        activeRule: '/modules/knowledge'
      },
      {
        name: 'stock',
        entry: process.env.VUE_APP_MICRO_STOCK,
        activeRule: '/modules/stock'
      },
      {
        name: 'crm',
        entry: process.env.VUE_APP_MICRO_CRM,
        activeRule: '/modules/crm'
      }
    ]
  }
  