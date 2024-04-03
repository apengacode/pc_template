export const STANDARD_PATHS = [
    {
      id: '1',
      title: '编码规范',
      children: [
        { title: '前端开发规范', path: '/standard/code-standard' },
        { title: 'oss上传演示', path: '/standard/oss-example' },
        { title: '表格设计器演示', path: '/standard/form-example' },
        { title: '表格设计器逻辑', path: '/standard/xunhang/form-design?docs=index' }
        // { title: "oss上传演示", path: "/standard/oss-example" },
      ]
    },
    {
      id: '2',
      title: '通用样式',
      children: [{ title: '海金通用包通用样式', path: '/standard/universal-style' }]
    }
    // {
    //     id: '4',
    //     title: 'oss上传',
    //     children: [
    //         { title: 'oss上传演示', path: '/standard/oss-example' }
    //     ]
    // }
    // {
    //     id: '3',
    //     title: '通用文字',
    //     children: [
    //         { title: 'Validator 校验', path: '/standard/general-words' }
    //     ]
    // }
  ]
  
  export const DOCUMENTS_PATHS = [
    {
      id: '12',
      title: '组件',
      groups: [
        {
          title: '通用包已封装组件',
          children: [
            { title: 'SliderCheck 滑块', path: '/universal/SliderCheck' },
            { title: 'Error 缺省页', path: '/universal/Error' },
            { title: 'FlowDrawer 流程绘制', path: '/universal/FlowDrawer' },
            { title: 'UpImg 上传图片', path: '/universal/UpImg' },
            { title: 'UpFileNew 上传文件', path: '/universal/UpFileNew' },
            { title: 'avue', path: '/avue' }
          ]
        }
      ]
    }
    // {
    //   id: "13",
    //   title: "验证",
    //   groups: [
    //     {
    //       title: "validators",
    //       children: [
    //         { title: "OSS 上传", path: "/documents/ossFileHosjoyUpload" },
    //       ],
    //     },
    //     {
    //       title: "Table",
    //       children: [{ title: "好程工综合表格", path: "/documents/hosjoyTable" }],
    //     },
    //   ],
    // },
  ]
  
  export const BUSINESS_PATHS = [
    {
      id: '111',
      title: '发布',
      children: [
        { title: '打包发布', path: '/business/publish' },
        { title: '版本管理', path: '/business/version' },
        { title: 'tag管理', path: '/business/tag' }
      ]
    },
    {
      id: '112',
      title: '业务场景',
      children: [
        { title: 'Validator 校验', path: '/business/validator' },
        { title: '通用方法', path: '/business/funcs' },
        { title: '表单配置', path: '/business/makeform' },
        { title: 'iframe跨域通信', path: '/business/vueiframe' }
      ]
    },
    {
      id: '114',
      title: '图床功能',
      children: [
        { title: '上传文件', path: '/business/oss' },
        { title: '文件列表', path: '/business/watch' }
      ]
    }
  ]
  