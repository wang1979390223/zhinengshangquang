
const user = {
  state: {
    // token: getToken(),
    uid: null,
    name: '',
    avatar: '',
    roles: [],
    permissions: [],
    deptId: '',
    deptName: '',
    postKeys: '',
    type: '',
    nickName: ''
  },

  mutations: {
    SET_TOKEN: (state, token) => {
      state.token = token
    },
    SET_NAME: (state, name) => {
      state.name = name
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    },
    SET_UID: (state, uid) => {
      state.uid = uid
    },
    SET_DEPT: (state, dept) => {
      state.deptId = dept.deptId
      state.deptName = dept.deptName
    },
    SET_POST_KEYS: (state, keys) => {
      state.postKeys = keys
    },
    SET_TYPE: (state, keys) => {
      state.type = keys
    },
    SET_NICKNAME: (state, name) => {
      state.nickName = name
    }
  },

  actions: {
    // actions
  }
}

export default user
