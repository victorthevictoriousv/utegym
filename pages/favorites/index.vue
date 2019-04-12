<template>
  <section>
    <GymCard :gym="gym" v-for="gym in favorites" :key="gym.id" />
  </section>
  

</template>

<script>
import GymCard from '@/components/gym/GymCard'

export default {
  components: {
    GymCard
  },
  computed: {
    favorites() {
      let gyms = [];

      // Get gym based on ID/ID's fetched from user.favorites
      this.$store.getters['user/getFavorites'].forEach(favorite => {
        let gym = this.$store.getters['gyms/getGyms'].find((el) => {
          return el.id === favorite
        })

        gyms.push(gym)

      });

      return gyms
    }
  }
}
</script>