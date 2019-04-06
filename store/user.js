export const state = () => ({
  loggedIn: false,
  name: 'Victor',
  id: '1',
  email: 'victorthevictoriousv@gmail.com',
  favorites: [],
  events: []
})

export const getters = {
  loggedIn(state) {
    return state.loggedIn
  },
  getName(state) {
    return state.name
  }
}

export const mutations = {
  setLoggedIn(state, boolean) {
    state.loggedIn = boolean
  }
}