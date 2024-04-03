export default {
  namespaced: true,
  state: {
    sidebarColors: '#7cb376',
    sidebarType: 'DARK',
    navbarFixed: false,
  },
  mutations: {
    CHANGE_SIDEBAR_COLORS(state, color) {
      state.sidebarColors = color
    },
    CHANGHE_SIDEBARTYPE(state, type) {
      state.sidebarType = type
    },
    CHANGE_NAVBARFIXED(state,type) {
        state.navbarFixed = type
    },
  },
  actions: {},
  getters: {}
}
