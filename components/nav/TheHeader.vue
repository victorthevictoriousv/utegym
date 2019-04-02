<template>
  <header class="header">
    <nuxt-link to="/">Utegym</nuxt-link>
    <svg xmlns="http://www.w3.org/2000/svg" @click="menu = !menu" width="16" height="12" viewBox="0 0 16 12">
      <path fill="none" stroke="#000" d="M0 7L16 7M0 4L16 4M0 1L16 1" transform="translate(0 2)"/>
    </svg>
    <nav v-if="menu">
      <ul>
        <nuxt-link to="/login">Logga in</nuxt-link>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menu: false
    }
  }
}
</script>

<style lang="scss" scoped>

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
