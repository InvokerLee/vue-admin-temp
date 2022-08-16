import { asyncRoutes, constantRoutes } from '@/router';

/**
 * Use meta.role to determine if the current user has permission
 * @param roles
 * @param route
 */
function isPassed(permissionList, route) {
  if (route.hidden) {
    return true;
  } else if (route.path) {
    const per = permissionList.find(p => p.route === route.name);
    if (per) {
      route.meta.title = per.name;
      route.meta.sort = per.sort;
    }
    return !!per;
  } else {
    return false;
  }
}
/**
 * Filter asynchronous routing tables by recursion
 * @param routes asyncRoutes
 * @param roles
 */
export function filterAsyncRoutes(routes, permissionList) {
  const res = [];
  routes.forEach(route => {
    const tmp = { ...route };
    if (isPassed(permissionList, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRoutes(tmp.children, permissionList);
      }
      res.push(tmp);
    }
  });
  return res.sort((a, b) => a.meta.sort - b.meta.sort);
}

const state = {
  routes: [],
  addRoutes: [],
};

const mutations = {
  SET_ROUTES: (state, routes) => {
    state.addRoutes = routes;
    state.routes = constantRoutes.concat(routes);
  },
  SET_EMPTY_ROUTES: (state, routes) => {
    state.addRoutes = [];
    state.routes = [];
  },
};

const actions = {
  generateRoutes({ commit }, permissionList) {
    return new Promise(resolve => {
      // const accessedRoutes = filterAsyncRoutes(asyncRoutes, permissionList);
      const accessedRoutes = asyncRoutes; // *****测试代码*****
      // 没匹配到路由就转入首页
      accessedRoutes.push({
        path: '*',
        redirect: '/',
      });
      commit('SET_ROUTES', accessedRoutes);
      resolve(accessedRoutes);
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
