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
          id: '3',
          comment: 'Det här var ett gutt gym!',
        },
        {
          name: 'Victor',
          id: '1',
          comment: 'Wow hit vill jag åka igen'
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
          id: '3',
          comment: 'Det här var ett gutt gym!',
        },
        {
          name: 'Victor',
          id: '1',
          comment: 'Wow hit vill jag åka igen'
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