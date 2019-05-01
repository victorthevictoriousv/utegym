export const state = () => ({
  events: [
    {
      id: '1',
      name: 'Pump It Up',
      creator: 'VictoriousV',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.',
      gymId: '1',
      time: '18:00-20:00',
      date: {
        day: '10',
        month: 'Maj',
        year: '2019'
      },
      comments: [
        {
          name: 'Kerstin',
          userId: '3',
          comment: 'Cras justo odio, dapibus ac facilisis in, egestas eget quam. Maecenas sed diam eget risus varius blandit sit amet non magna.',
          time: '21:00'
        },
        {
          name: 'Victor',
          userId: '1',
          comment: 'Wow hit vill jag åka igen',
          time: '21:00'
        }
      ]
    },
    {
      id: '2',
      name: 'Pump It Up',
      creator: 'VictoriousV',
      description: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Etiam porta sem malesuada magna mollis euismod. Donec id elit non mi porta gravida at eget metus. Maecenas faucibus mollis interdum.',
      gymId: '1',
      time: '18:00-20:00',
      date: {
        day: '10',
        month: 'Maj',
        year: '2019'
      },
      comments: [
        {
          name: 'Kerstin',
          userId: '3',
          comment: 'Det här var ett gutt gym!',
          time: '21:00'
        },
        {
          name: 'Victor',
          userId: '1',
          comment: 'Wow hit vill jag åka igen',
          time: '21:00'
        }
      ]
    }
  ]
})

export const getters = {
  getEvents(state) {
    return state.events
  },
  getEventById(state, id) {
    return id => {
      return state.events.find(el => el.id === id)
    }
  }
}

export const mutations = {
  addComment(state, payload) {
    let event = state.events.findIndex(event => {
      return event.id === payload.eventId
    })

    state.events[event].comments.unshift({
      name: payload.name,
      userId: payload.userId,
      comment: payload.comment,
      time: payload.time
    })
  }
}

export const actions = {
  addComment(context, payload) {
    context.commit('addComment', payload)
  }
}