export const state = () => ({
  events: [
    {
      id: '1',
      name: 'Pump It Up',
      gymId: '1',
      time: '18:00-20:00',
      day: '2019/04/19',
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