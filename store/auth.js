export const state = () => ({
  loggedIn: false
})

export const getters = {
  loggedIn(state) {
    return state.loggedIn
  }
}

export const mutations = {
  setLoggedIn(state, boolean) {
    state.loggedIn = boolean
  }
}