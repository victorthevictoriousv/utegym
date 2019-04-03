<template>
  <section class="section__login section">
    <h1 class="heading heading--lg">{{ register ? 'Registrera dig' : 'Logga in' }}</h1>
    <form class="login-form" action="/">
      <div class="login-form__input">
        <label for="email">Email</label>
        <input type="email" name="email">
      </div>
      <div class="login-form__input">
        <label for="password">Lösenord</label>
        <input type="password" name="password">
      </div>
      <small>Har du inte ett konto? Klicka <a @click="register = !register" href="#">här</a></small>
      <button>{{ register ? 'Registrera mig' : 'Logga in' }}</button>
    </form>
  </section>
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
  .login-form {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 300px;

    &__input {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  }
</style>

