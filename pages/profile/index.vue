<template>
  <section class="section__profile profile">
    <header class="profile__header">
      <img :src="Forest" alt="img">
      <div class="profile__header--overlay"></div>
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

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';

.profile {
  &__header {
    position: relative;

    img {
      filter: blur(1px);
      max-height: 180px;
    }

    &--overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba($dark, .1);
    }
  }
}
</style>

