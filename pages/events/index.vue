<template>
  <section>
    <EventCard :event="event" v-for="event in this.events" :key="event.id" />
  </section>
</template>

<script>
import EventCard from '@/components/event/EventCard'

export default {
  components: {
    EventCard
  },
  computed: {
    events() {
      return this.$store.getters['events/getEvents']
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
