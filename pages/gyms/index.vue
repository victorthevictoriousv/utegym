<template>
  <section>
    <Gym :gym="gym" v-for="gym in this.gyms" :key="gym.id"/>
  </section> 
</template>

<script>
import Gym from '@/components/gym/Gym'
export default {
  components: {
    Gym
  },
  computed: {
    gyms() {
      return this.$store.getters['gyms/getGyms']
    }
  }
}
</script>
