export const ACTIONS = {
  INIT: 'init',
  ADD_USER_METHOD: 'addUser',
  REMOVE_USER_METHOD: 'removeUser',
  LOGIN_USER_METHOD: 'loginUser',
  LOGOUT_USER_METHOD: 'logoutUser',
  GET_USERS_METHOD: 'getUsers',
}

export const state = () => ({
  users: [],
  authenticated: null,
})

export const setLocalStorageString = (key, string) => {
  localStorage.setItem(key, string);
}

export const setLocalStorageArray = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
}

export const mutations = {
  INIT: (state) => {
    state.users = JSON.parse(localStorage.getItem("users") || "[]");
    state.authenticated = localStorage.getItem("authenticated") !== 'null' ? parseInt(localStorage.getItem("authenticated")) : null;
  },
  ADD_USER: (state, data) => {
    state.users.push(data);
    state.authenticated = state.users.length - 1;
    setLocalStorageArray('users', state.users);
    setLocalStorageString('authenticated', state.authenticated);
  },
  REMOVE_USER: (state, data) => {
    state.users.splice(state.authenticated, 1);
    state.authenticated = null;
    setLocalStorageArray('users', state.users);
    setLocalStorageString('authenticated', state.authenticated);
  },
  LOGIN_USER: (state, data) => {
    state.authenticated = state.users.findIndex((u) => u.name === data.name);
    setLocalStorageArray('users', state.users);
    setLocalStorageString('authenticated', state.authenticated);
  },
  LOGOUT_USER: (state) => {
    state.authenticated = null;
    setLocalStorageArray('users', state.users);
    setLocalStorageString('authenticated', state.authenticated);
  },
  GET_USERS: (state) => {
    return state.users;
  }
}

export const actions = {
  init({commit}) {
    commit('INIT');
  },
  addUser({ commit }, data) {
    commit('ADD_USER', data);
  },
  removeUser({commit}, data) {
    commit('REMOVE_USER', data);
  },
  loginUser({commit}, data) {
    commit('LOGIN_USER', data);
  },
  logoutUser({commit}, data) {
    commit('LOGOUT_USER', data);
  },
  getUsers({commit}) {
    commit('GET_USERS');
  },
}
