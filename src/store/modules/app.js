import Cookies from 'js-cookie';
import { getConsts } from '@/api/login';

const state = {
  sidebar: {
    opened: Cookies.get('sidebarStatus') ? !!+Cookies.get('sidebarStatus') : true,
    withoutAnimation: false,
  },
  consts: [], // 常量
};

const mutations = {
  TOGGLE_SIDEBAR: state => {
    state.sidebar.opened = !state.sidebar.opened;
    state.sidebar.withoutAnimation = false;
    if (state.sidebar.opened) {
      Cookies.set('sidebarStatus', 1);
    } else {
      Cookies.set('sidebarStatus', 0);
    }
  },
  CLOSE_SIDEBAR: (state, withoutAnimation) => {
    Cookies.set('sidebarStatus', 0);
    state.sidebar.opened = false;
    state.sidebar.withoutAnimation = withoutAnimation;
  },
  SET_CONSTS: (state, consts) => {
    state.consts = consts;
  },
};

const actions = {
  toggleSideBar({ commit }) {
    commit('TOGGLE_SIDEBAR');
  },
  closeSideBar({ commit }, { withoutAnimation }) {
    commit('CLOSE_SIDEBAR', withoutAnimation);
  },
  getConsts({ commit, state }) {
    new Promise((resolve, reject) => {
      getConsts().then(response => {
        const { data } = response;
        commit('SET_CONSTS', data);
      }).catch(() => {});
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
