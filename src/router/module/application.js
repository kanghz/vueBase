import emptyPage from '@/components/empty'

let baseUrl = '/application'

let application = {
  3: {
    path: `${baseUrl}`,
    redirect: `${baseUrl}/all`,
    name: 'Application',
    title: '应用管理',
    component: emptyPage,
    children: {
      31: {
        path: `${baseUrl}/all`,
        name: "All",
        component: () => import('@/views/Home.vue'),
        title: "全部应用"
      },
      32: {
        path: `${baseUrl}/base`,
        name: "Base",
        component: () => import('@/views/Home.vue'),
        title: "AI基础应用"
      },
      33: {
        path: `${baseUrl}/scene`,
        name: "Scene",
        component: () => import('@/views/Home.vue'),
        title: "AI场景应用"
      }
    }
  }
}

export default application