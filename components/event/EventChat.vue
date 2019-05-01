<template>
  <section class="event-chat">
    <div>
      <textarea name="chat" type="text" placeholder="Skriv meddelande här" v-model="message" />
      <button @click.prevent="sendMessage">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
          <g fill="none" fill-rule="evenodd" stroke="#BFF683" stroke-linecap="round" stroke-width="2">
            <polygon stroke-linejoin="round" points="18.962 8.804 9.981 12.704 1 16.604 3.871 8.804 1 1.004 9.981 4.904"/>
            <path d="M3.855,8.848 L18.977,8.848"/>
          </g>
        </svg>
      </button>
    </div>
    
    <ul>
      <li :class="comment.userId === $store.getters['user/getUserId'] ? 'me' : 'others'" v-for="comment in comments" :key="comment.name + comment.comment">
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.comment }}</p>
        <p><small>{{ comment.time }}</small></p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['comments'],
  data() {
    return {
      message: ''
    }
  },
  methods: {
    sendMessage() {
      if ( this.message.length > 0 ) {
        let time = new Date()

        let payload = {
          eventId: this.$route.query.eventId,
          gymId: this.$route.query.gymId,
          userId: this.$store.getters['user/getUserId'],
          comment: this.message,
          name: this.$store.getters['user/getName'],
          time: time.getHours() + ':' + time.getMinutes()
        }

        this.$store.dispatch('events/addComment', payload)

        this.message = ''
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';

.event-chat {
  > div {
    display: flex;
    align-items: center;

    textarea {
      width: 80%;
      align-self: center;
      font-size: inherit;
      font-family: inherit;
      font-weight: 600;
      padding: 8px;
      border-radius: $border-radius-md;
      border: none;

      &:active, &:focus {
        outline: none;
        border: none;
        font-size: inherit;
      }
    }

    button {
      width: 20%;
      display: flex;
      align-items: center;
    }

    svg {
      width: 100%;
    }
  }

  > ul {
    display: flex;
    flex-direction: column;
    margin: 10px 0;

    li {
      display: flex;
      flex-direction: column;
      position: relative;
      padding: 10px;
      max-width: 80%;

      p {
        color: $dark;
        margin: 4px 0 2px;
      }

      p:last-of-type {
        text-align: right;
        color: $grey;
      }
    }

    > :not(:first-child) {
      margin: 10px 0;
    }

    .me {
      align-self: flex-end;
      background-color: $peach;
      border-top-left-radius: $border-radius-md;
      border-bottom-left-radius: $border-radius-md;
      border-bottom-right-radius: $border-radius-md;
      margin-right: 15px;

      &::after {
        content: '';
        position: absolute;
        width: 0; 
        height: 0; 
        border-top: 0px solid transparent;
        border-bottom: 15px solid transparent;
        border-left: 15px solid $peach;
        left: 100%;
        top: 0;
      }
    }

    .others {
      align-self: flex-start;
      background-color: $green;
      margin-left: 15px;
      border-top-right-radius: $border-radius-md;
      border-bottom-left-radius: $border-radius-md;
      border-bottom-right-radius: $border-radius-md;

      &::before {
        content: '';
        position: absolute;
        width: 0; 
        height: 0; 
        border-top: 0px solid transparent;
        border-bottom: 15px solid transparent; 
        border-right: 15px solid $green; 
        right: 100%;
        top: 0;
      }
    }
  }
}
</style>
