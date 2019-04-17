export const state = () => ({
  loggedIn: false,
  name: 'Victor',
  id: '1',
  email: 'victorthevictoriousv@gmail.com',
  favorites: ['1', '2'],
  events: ['1']
})

export const getters = {
  loggedIn(state) {
    return state.loggedIn
  },
  getName(state) {
    return state.name
  },
  getFavorite(state, id) {
    return id => {
      return state.favorites.find(el => el === id)
    }
  },
  getFavorites(state) {
    return state.favorites
  }
}

export const mutations = {
  setLoggedIn(state, boolean) {
    state.loggedIn = boolean
  },
  setFavorite(state, id) {
    // Adds gym to favorite if not already in array, if so, remove gym from array
    if(state.favorites.length > 0) {
      if(!state.favorites.some(el => el === id)) {
        return state.favorites.push(id)
      } else if(state.favorites.some(el => el === id)) {
        return state.favorites.splice(state.favorites.indexOf(id), state.favorites.indexOf(id) + 1)
      } else {
        return state.favorites.push(id)
      }
    } else {
      return state.favorites.push(id)
    }
  },
  setName(state, name) {
    // Set name on user
    state.name = name
  }
}