export const menuList = [
  {
    title: '导航一',
    key: '1',
    icon: 'el-icon-message',
    display: true,
    children: [
      {
        key: '1-1',
        title: '选项1',
        path: '/',
        display: true,
        icon: ''
      }, {
        key: '1-2',
        title: '选项2',
        path: '/test',
        display: true,
        icon: ''
      }, {
        key: '1-3',
        title: '选项3',
        path: '/test1',
        display: false,
        icon: ''
      }, {
        key: '1-4',
        title: '选项4',
        display: true,
        children: [
          {
            key: '1-4-1',
            title: 'test',
            display: true,
            icon: ''
          }, {
            key: '1-4-2',
            title: 'test',
            display: false,
            icon: ''
          }
        ]
      }, {
        key: '1-5',
        title: '选项5',
        display: true,
        children: [
          {
            key: '1-5-1',
            title: 'test',
            display: true,
            icon: ''
          }, {
            key: '1-5-2',
            title: 'test',
            display: true,
            icon: ''
          }
        ]
      }
    ]
  },
  {
    title: '导航二',
    icon: 'el-icon-menu',
    key: '2',
    display: true,
    children: [
      {
        key: '2-1',
        title: '选项1',
        path: '/',
        display: true,
        icon: ''
      }, {
        key: '2-2',
        title: '选项2',
        path: '/test',
        display: true,
        icon: ''
      }, {
        key: '1-3',
        title: '选项4',
        display: true,
        children: [
          {
            key: '1-3-1',
            title: 'test',
            display: true,
            icon: ''
          }, {
            key: '1-3-2',
            title: 'test',
            display: true,
            icon: ''
          }
        ]
      }
    ]
  }
]
