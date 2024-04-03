const booleanDic = [
  {
    label: 'true',
    value: true
  },
  {
    label: 'false',
    value: false
  }
]
const positionDic = [
  {
    label: 'left',
    value: 'left'
  },
  {
    label: 'right',
    value: 'right'
  },
  {
    label: 'center',
    value: 'center'
  }
]
// const sizeDic = [
//   {
//     label: 'medium',
//     value: 'medium'
//   },
//   {
//     label: 'small',
//     value: 'small'
//   },
//   {
//     label: 'mini',
//     value: 'mini'
//   }
// ]
const selectDic = [
  {
    label: 'input',
    value: 'input'
  },
  {
    label: 'select',
    value: 'select'
  },
  {
    label: 'cascader',
    value: 'cascader'
  },
  {
    label: 'date',
    value: 'date'
  },
  {
    label: 'datetime',
    value: 'datetime'
  }
]
const valueFormatTimeDic = [
  {
    label: 'yyyy-MM-dd',
    value: 'yyyy-MM-dd'
  },
  {
    label: 'yyyy-MM-dd HH:mm',
    value: 'yyyy-MM-dd HH:mm'
  },
  {
    label: 'yyyy-MM-dd HH:mm:ss',
    value: 'yyyy-MM-dd HH:mm:ss'
  }
]
export const configuration = {
  avue_curd: [
    { name: 'Crud', target: 'curd', status: 0 },
    { name: 'Page', target: 'page', status: 0 },
    { name: 'Option', target: 'option', status: 1 },
    { name: 'Column-字典属性', target: 'column_dic', status: 1 },
    { name: 'Column-共用属性', target: 'column_common', status: 1 },
    { name: 'Events', target: 'events', status: 0 },
    { name: 'Methods', target: 'methods', status: 0 }
  ],
  avue_form: [
    { name: 'Page', target: 'page', status: 0 },
    { name: 'Option', target: 'option', status: 1 },
    { name: 'Column', target: 'column', status: 1 }
  ]
}

export const fields = {
  curd_option: {
    common_use: [
      {
        name: 'stripe',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'border',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'index',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'indexFixed',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'indexLabel',
        type: 'input'
      },
      {
        name: 'indexWidth',
        type: 'number'
      },
      {
        name: 'menuAlign',
        type: 'select',
        dic: positionDic
      },
      {
        name: 'searchMenuSpan',
        type: 'number'
      },
      {
        name: 'align',
        type: 'select',
        dic: positionDic
      },
      {
        name: 'viewBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'editBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'delBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'card',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'menuWidth',
        type: 'number'
      },
      {
        name: 'dialogClickModal',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'searchLabelWidth',
        type: 'number'
      },
      {
        name: 'labelWidth',
        type: 'number'
      },
      {
        name: 'gutter',
        type: 'number'
      },
      {
        name: 'searchGutter',
        type: 'number'
      },
      {
        name: 'searchIcon',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'searchMenuPosition',
        type: 'select',
        dic: positionDic
      },
      {
        name: 'searchBtnText',
        type: 'input'
      },
      {
        name: 'searchBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'emptyBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'refreshBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'columnBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'searchShowBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'addBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'menu',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'selection',
        type: 'select',
        dic: booleanDic
      }
    ],
    un_common_use: [
      {
        name: 'height',
        type: 'number'
      },
      {
        name: 'header',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'searchEnter',
        type: 'select',
        dic: booleanDic
      }
    ]
  },
  curd_column_common: {
    common_use: [
      {
        name: 'label',
        type: 'input'
      },
      {
        name: 'prop',
        type: 'input'
      },
      {
        name: 'type',
        type: 'select',
        dic: selectDic
      },
      {
        name: 'hide',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'search',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'searchPlaceholder',
        type: 'input'
      },
      {
        name: 'searchValue',
        type: 'input'
      },
      {
        name: 'searchOrder',
        type: 'number'
      }
    ],
    un_common_use: [
      {
        name: 'valueFormat',
        type: 'select',
        dic: valueFormatTimeDic
      },
      {
        name: 'searchRange',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'startPlaceholder',
        type: 'input'
      },
      {
        name: 'endPlaceholder',
        type: 'input'
      },
      {
        name: 'editDisplay',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'addDisplay',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'slot',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'align',
        type: 'select',
        dic: positionDic
      },
      {
        name: 'headerAlign',
        type: 'select',
        dic: positionDic
      },
      {
        name: 'searchSpan',
        type: 'number'
      }
    ]
  },
  curd_column_dic: {
    common_use: [
      {
        name: 'dicData',
        type: 'enumerationDIY'
      },
      {
        name: 'props',
        type: 'enumeration'
      }
    ],
    un_common_use: [
      {
        name: 'dicUrl',
        type: 'input'
      },
      {
        name: 'dicQuery',
        type: 'input'
      },
      {
        name: 'dicHeaders',
        type: 'input'
      },
      {
        name: 'dicMethod',
        type: 'input'
      }
    ]
  },
  curd_page: {},
  form_option: {
    common_use: [
      {
        name: 'span',
        type: 'number'
      },
      {
        name: 'labelWidth',
        type: 'number'
      },
      {
        name: 'labelPosition',
        type: 'select',
        dic: positionDic
      }
    ],
    un_common_use: [
      {
        name: 'menuBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'submitBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'emptyBtn',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'menuSpan',
        type: 'number'
      },
      {
        name: 'tabs',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'enter',
        type: 'select',
        dic: booleanDic
      },
      {
        name: 'detail',
        type: 'select',
        dic: booleanDic
      }
    ]
  },
  form_column: {
    common_use: [],
    un_common_use: []
  }
}
