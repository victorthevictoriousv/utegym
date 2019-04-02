<template>
  <form action="/">
    <h1>{{ register ? 'Registrera dig' : 'Logga in' }}</h1>
    <div>
      <label for="email">Email</label>
      <input type="email" name="email">
    </div>
    <div>
      <label for="password">Lösenord</label>
      <input type="password" name="password">
    </div>
    <small>Har du inte ett konto? Klicka <a @click="register = !register" href="#">här</a></small>
  </form>
</template>

<script>
export default {
  data() {
    return {
      register: false
    }
  }
}
</script>


<style lang="scss" scoped>

</style>

