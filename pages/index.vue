<template>
  <section class="section">
    <h1>Utegym</h1>
    <img :src="map" alt="map">
  </section>
</template>

<script>
import map from '@/assets/img/map.png'

export default {
  data() {
    return {
      map
    }
  }
}
</script>