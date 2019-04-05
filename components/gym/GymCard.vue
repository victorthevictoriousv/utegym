<template>
  <section>
    <header><h1>{{ name }}</h1></header>
    <div>{{ rate }}</div>
    <p>{{ adress }}</p>
    <div v-if="events"></div>
    <nav>
      <a :href="directions">Directions</a>
      <ul>
        <li>{{ facebook }}</li>
        <li>{{ whatsapp }}</li>
        <li>Heart</li>
      </ul>
    </nav>
  </section>
</template>

<script>
export default {
  data() {
    return {
      name: 'Victor',
      rate: '5',
      address: 'Erik Dahlbergsväg 1',
      events: false,
      directions: 'https://www.google.com/maps/place/Erik+Dahlbergs+v%C3%A4g,+Kalmar/data=!4m2!3m1!1s0x4657d19d20fc5adf:0xe9a8c245ef88711a?sa=X&ved=2ahUKEwiq8uTg4LnhAhUGxqYKHWfTDgoQ8gEwAHoECAoQAQ',
      facebook: 'facebook',
      whatsapp: 'whatsapp'
    }
  }
}
</script>

