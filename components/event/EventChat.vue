<template>
  <section>
    <input type="text">
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

</style>
