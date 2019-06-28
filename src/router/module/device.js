import emptyPage from '@/components/empty'

let baseUrl = '/device'

let device = {
  2: {
    path: `${baseUrl}`,
    redirect: `${baseUrl}/manage`,
    name: 'Device',
    title: '设备管理',
    component: emptyPage,
    children: {
      21: {
        path: `${baseUrl}/manage`,
        name: "Manage",
        component: () => import('@/views/Home.vue'),
        title: "设备管理"
      },
      22: {
        path: `${baseUrl}/setting`,
        name: "Setting",
        component: () => import('@/views/Home.vue'),
        title: "设备设置"
      }
    }
  }
}

export default device