import enLocale from 'element-ui/lib/locale/lang/en'

const en = {
  ...enLocale,
  text: 'centent',
  menu: [
    {
      title: 'English',
      key: '1',
      icon: 'el-icon-message',
      display: true,
      children: [
        {
          key: '1-1',
          title: 'English',
          path: '/',
          display: true,
          icon: ''
        }, {
          key: '1-2',
          title: 'English',
          path: '/test',
          display: true,
          icon: ''
        }, {
          key: '1-4',
          title: 'English',
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
      title: 'English',
      icon: 'el-icon-menu',
      key: '2',
      display: true,
      children: [
        {
          key: '2-1',
          title: 'English',
          path: '/',
          display: true,
          icon: ''
        }, {
          key: '1-3',
          title: 'English',
          display: true,
          children: [
            {
              key: '1-3-1',
              title: 'English',
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

export default en
