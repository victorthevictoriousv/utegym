<template>
  <footer class="footer site__footer">
    <nav class="footer__nav">
      <ul class="footer__list">
        <li class="footer__item">
          <nuxt-link to="/favorites">Favoriter</nuxt-link>
        </li>
        <li class="footer__item">
          <nuxt-link class="footer__item" to="/events">Events</nuxt-link>
        </li>
        <li class="footer__item">
          <nuxt-link class="footer__item" to="/exercises">Övningar</nuxt-link>
        </li>
        <li class="footer__item">
          <nuxt-link class="footer__item" to="/profile">Profil</nuxt-link>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import "@/assets/scss/config.scss";

.footer {
  background: linear-gradient($gradient-blue, $gradient-dark);

  &__nav {
    width: 100%;
  }
  
  &__list {
    display: flex;
    width: 100%;
    height: 100%;
  }

  &__item {
    display: flex;
    flex: 1 1 25%;
    height: 100%;
    justify-content: center;
    align-items: center;
  }
}
</style>
