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
})

export const setLocalStorageArray = (key, array) => {
  localStorage.setItem(key, JSON.stringify(array));
}

export const mutations = {
  INIT: (state) => {
    state.users = JSON.parse(localStorage.getItem("users") || "[]");
  },
  ADD_USER: (state, data) => {
    state.users.push(data);
    setLocalStorageArray('users', state.users);
  },
  REMOVE_USER: (state, data) => {
    let user = state.users.findIndex((u) => u.name === data.name);
    state.users.splice(user, 1);
    setLocalStorageArray('users', state.users);
  },
  LOGIN_USER: (state, data) => {
    let user = state.users.findIndex((u) => u.name === data.name);
    state.users[user].connected = true;
    setLocalStorageArray('users', state.users);
  },
  LOGOUT_USER: (state, data) => {
    let user = state.users.findIndex((u) => u.name === data.name);
    state.users[user].connected = false;
    setLocalStorageArray('users', state.users);
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
