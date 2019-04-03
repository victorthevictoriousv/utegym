export const state = () => ({
  loggedIn: false
})

export const getters = {
  loggedIn(state) {
    return state.loggedIn
  }
}