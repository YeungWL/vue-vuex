import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import { menuList } from 'assets/js/menu'

const cn = {
  ...zhLocale,
  text: '哈哈哈哈',
  menu: [
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
}
console.log(cn)

export default cn
