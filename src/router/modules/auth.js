import Layout from '@/layout';

const auth = {
  path: '/auth',
  name: 'authManage',
  component: Layout,
  meta: { title: '权限系统', icon: 'el-icon-setting' },
  redirect: '/auth/user',
  children: [
    {
      path: 'user',
      name: 'user',
      component: () => import('@/views/auth/user'),
      meta: { title: '用户管理' },
    },
    {
      path: 'role',
      name: 'role',
      component: () => import('@/views/auth/role'),
      meta: { title: '角色管理' },
    },
    {
      path: 'permission',
      name: 'permission',
      component: () => import('@/views/auth/permission'),
      meta: { title: '功能管理' },
    },
  ],
};

export default auth;
