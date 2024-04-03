export const menuRoute = [
  {
    id: '1',
    title: '规范',
    children: [
      {
        id: '1-1',
        title: '编码规范',
        firstWord: 'G',
        show: false,
        children: [
          {
            id: '1-1-1',
            title: '前端开发规范',
            firstWord: 'Q',
            path: '/standard/code-standard'
          },
          {
            id: '1-1-2',
            title: 'oss上传演示',
            firstWord: 'O',
            path: '/standard/oss-example'
          },
          {
            id: '1-1-3',
            title: '表格设计器演示',
            firstWord: 'B',
            path: '/standard/form-example'
          },
          {
            id: '1-1-4',
            title: '表格设计器逻辑',
            firstWord: 'B',
            path: '/standard/form-design'
          },
        ]
      },
      {
        id: '1-2',
        title: '通用样式',
        firstWord: 'T',
        show: false,
        children: [
          {
            id: '1-2-1',
            title: '海金通用包样式',
            firstWord: 'H',
            path: '/standard/universal-style'
          }
        ]
      }
    ]
  },
  {
    id: '2',
    title: '组件',
    children: [
      {
        id: '2-1',
        title: '通用包已封装组件',
        firstWord: 'T',
        show: false,
        children: [
          {
            id: '2-1-1',
            title: 'SliderCheck 滑块',
            firstWord: 'S',
            path: '/universal/SliderCheck'
          },
          {
            id: '2-1-2',
            title: 'Error 缺省页',
            firstWord: 'E',
            path: '/universal/Error'
          },
          {
            id: '2-1-3',
            title: 'FlowDrawer 流程绘制',
            firstWord: 'F',
            path: '/universal/FlowDrawer'
          },
          {
            id: '2-1-4',
            title: 'UpImg 上传图片',
            firstWord: 'U',
            path: '/universal/UpImg'
          },
          {
            id: '2-1-5',
            title: 'UpFileNew 上传文件',
            firstWord: 'U',
            path: '/universal/UpFileNew'
          },
          {
            id: '2-1-6',
            title: 'avue',
            firstWord: 'A',
            path: '/universal/avue'
          },
        ]
      },
    ]
  },
  {
    id: '3',
    title: '业务',
    children: [
      {
        id: '3-1',
        title: '发布',
        firstWord: 'F',
        show: false,
        children: [
          {
            id: '3-1-1',
            title: '打包发布',
            firstWord: 'S',
            path: '/business/publish'
          },
          {
            id: '3-1-2',
            title: '版本管理',
            firstWord: 'B',
            path: '/business/version'
          },
          {
            id: '3-1-3',
            title: 'tag管理',
            firstWord: 'T',
            path: '/business/tag'
          }
        ]
      },
      {
        id: '3-2',
        title: '业务场景',
        firstWord: 'Y',
        show: false,
        children: [
          {
            id: '3-2-1',
            title: 'Validator 校验',
            firstWord: 'V',
            path: '/business/validator'
          },
          {
            id: '3-2-2',
            title: '通用方法',
            firstWord: 'T',
            path: '/business/funcs'
          },
          {
            id: '3-2-3',
            title: '表单配置',
            firstWord: 'B',
            path: '/business/makeform'
          },
          {
            id: '3-2-4',
            title: 'iframe跨域通信',
            firstWord: 'I',
            path: '/business/vueiframe'
          }
        ]
      },
      {
        id: '3-3',
        title: '图床功能',
        firstWord: 'T',
        show: false,
        children: [
          {
            id: '3-3-1',
            title: '上传文件',
            firstWord: 'S',
            path: '/business/oss'
          },
          {
            id: '3-3-2',
            title: '文件列表',
            firstWord: 'W',
            path: '/business/watch'
          }
        ]
      },
    ]
  }
]
