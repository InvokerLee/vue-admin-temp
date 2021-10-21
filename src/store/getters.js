const getters = {
  sidebar: state => state.app.sidebar,
  realname: state => state.user.userInfo.realname,
  menuList: state => state.user.userInfo.menuList,
  cachedViews: state => state.tagsView.cachedViews,
  routes: state => state.permission.routes,
  getConstByGroup: state => (group) => {
    const g = state.app.consts.find(item => item.group === group);
    const obj = {};
    if (g && g.itemList) {
      obj.itemList = g.itemList;
      g.itemList.forEach((item) => { obj[item.code] = item.name; });
    }
    return obj;
  },
};
export default getters;
