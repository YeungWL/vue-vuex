export const routes = [
  {
    path: '/',
    name: 'index',
    redirect: '/home',
    component: _ => import('views/layout/layout'),
    children: [
      {
        path: '/home',
        name: 'home',
        component: _ => import('views/test')
      }
    ]
  },
  {
    path: '/login',
    name: 'login',
    component: _ => import('views/login/login')
  }
]
