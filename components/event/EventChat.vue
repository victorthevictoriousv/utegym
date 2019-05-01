<template>
  <section class="event-chat">
    <div>
      <input name="chat" type="text" placeholder="Skriv meddelande här">
      <button>
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="18" viewBox="0 0 20 18">
          <g fill="none" fill-rule="evenodd" stroke="#BFF683" stroke-linecap="round" stroke-width="2">
            <polygon stroke-linejoin="round" points="18.962 8.804 9.981 12.704 1 16.604 3.871 8.804 1 1.004 9.981 4.904"/>
            <path d="M3.855,8.848 L18.977,8.848"/>
          </g>
        </svg>
      </button>
    </div>
    
    <ul>
      <li v-for="comment in comments" :key="comment.name + comment.comment">
        <h4>{{ comment.name }}</h4>
        <p>{{ comment.comment }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: ['comments']
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';

.event-chat {
  > div {
    display: flex;
    align-items: center;

    input {
      width: 80%;
      align-self: center;
      font-size: inherit;
      font-family: inherit;
      font-weight: 600;
      padding: 8px;
      border-radius: $border-radius-md;
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
    margin: 10px 0;
  }
}
</style>
