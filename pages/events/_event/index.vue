<template>
  <Event :event="this.event"/>
</template>

<script>
import Event from '@/components/event/Event'

export default {
  components: {
    Event
  },
  computed: {
    event() {
      return this.$store.getters['events/getEventById'](this.$route.query.eventId)
    }
  }
}
</script>
