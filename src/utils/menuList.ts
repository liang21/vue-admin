import { Menu } from '@/typings/global';

const menuList: Menu.MenuOptions[] = [
  {
    path: '/',
    name: 'Home',
    component: 'Home',
    meta: {
      title: 'Home',
      icon: 'el-icon-s-home'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: 'About',
    meta: {
      title: 'About',
      icon: 'el-icon-s-custom'
    }
  },
  {
    path: '/user',
    name: 'User',
    component: 'User',
    meta: {
      title: 'User',
      icon: 'el-icon-s-custom'
    }
  },
  {
    path: '/user/:id',
    name: 'UserDetail',
    component: 'UserDetail',
    meta: {
      title: 'UserDetail',
      icon: 'el-icon-s-custom'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: 'NotFound',
    meta: {
      title: 'NotFound',
      icon: 'el-icon-s-custom'
    }
  }
];
export default menuList;
