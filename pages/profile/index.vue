<template>
  <section>
    <h1 class="heading heading--lg">Profil</h1>
    <div>
      <label for="name"></label>
      <input id="name" type="text" v-model="this.name">
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    name() {
      return this.$store.getters['user/getName']
    }
  }
}
</script>
