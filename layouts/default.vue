<template>
  <div class="site">
    <TheHeader />
    <main class="site__main">
      <div class="site__content">
        <nuxt />
      </div>
    </main> 
    <TheFooter />
  </div>
</template>

<script>
import TheHeader from '@/components/nav/TheHeader'
import TheFooter from '@/components/nav/TheFooter'

export default {
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style lang="scss">
@import "@/assets/scss/config.scss";
@import "@/assets/scss/elements.scss";
@import "@/assets/scss/layout.scss";
@import "@/assets/scss/helpers.scss";
</style>
