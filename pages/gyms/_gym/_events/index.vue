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
      let events = []
      this.$store.getters['gyms/getGymById'](this.$route.query.id).events.forEach(element => {
        events.push(this.$store.getters['events/getEventById'](element))
      })

      return events
    }
  }
}
</script>
