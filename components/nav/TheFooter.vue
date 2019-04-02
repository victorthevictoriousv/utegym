<template>
  <footer class="footer site__footer">
    <nav class="footer__nav">
      <ul class="footer__list">
        <nuxt-link class="footer__item" tag="li" to="/favorites"><a>Favoriter</a></nuxt-link>
        <nuxt-link class="footer__item" tag="li" to="/events"><a>Events</a></nuxt-link>
        <nuxt-link class="footer__item" tag="li" to="/exercises"><a>Övningar</a></nuxt-link>
        <nuxt-link class="footer__item" tag="li" to="/profile"><a>Profil</a></nuxt-link>
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
