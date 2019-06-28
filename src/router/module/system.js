import emptyPage from '@/components/empty'

let baseUrl = '/system'

let system = {
  1:{
    path: `${baseUrl}`,
    redirect: `${baseUrl}/monitor`,
    name: 'System',
    title: '系统管理',
    component: emptyPage,
    children: {
      11:{
        path: `${baseUrl}/monitor`,
        name: 'Monitor',
        title: '资源监控',
        component: () => import('@/views/Home.vue')
      },
      12:{
        path: `${baseUrl}/org`,
        name: 'Org',
        title: '机构管理',
        component: () => import('@/views/Home.vue')
      },
      13:{
        path: `${baseUrl}/person`,
        name: 'Person',
        title: '人员管理',
        component: () => import('@/views/Home.vue')
      },
      14:{
        path: `${baseUrl}/role`,
        name: 'Role',
        title: '角色权限',
        component: () => import('@/views/Home.vue')
      }
    }
  },
}

export default system