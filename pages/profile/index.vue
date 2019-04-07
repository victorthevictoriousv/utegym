<template>
  <section>
    <header>
      <img :src="Forest" alt="">
      <h1 class="heading heading--lg">Profil</h1>
    </header>
    <div>
      <label for="name"></label>
      <input id="name" type="text" v-model="this.name">
    </div>
  </section>
</template>

<script>
import Forest from '@/assets/img/forest.jpg'
export default {
  data() {
    return {
      Forest
    }
  },
  computed: {
    name() {
      return this.$store.getters['user/getName']
    }
  }
}
</script>
