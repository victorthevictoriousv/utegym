<template>
  <section>
    <GymCard :gym="gym" v-for="gym in this.gyms" :key="gym.name"/>
  </section> 
</template>

<script>
import GymCard from '@/components/gym/GymCard'
export default {
  components: {
    GymCard
  },
  computed: {
    gyms() {
      return this.$store.getters['gyms/getGyms']
    }
  }
}
</script>
