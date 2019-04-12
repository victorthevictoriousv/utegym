<template>
  <Gym :gym="gym" />
</template>

<script>
import Gym from '@/components/gym/Gym'

export default {
  components: {
    Gym
  },
  computed: {
    gym() {
      let id = this.$route.query.id

      return this.$store.getters['gyms/getGymById'](id)
    }
  }
}
</script>
