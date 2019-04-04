<template>
  <section class="section__login section">
    <h1 :class="'heading heading--lg ' + (register ? 'peach' : 'blue')">{{ register ? 'Registrera dig' : 'Logga in' }}</h1>
    <form class="login-form" action="/">
      <div class="login-form__input">
        <label for="email">Email</label>
        <input type="email" name="email">
      </div>
      <div class="login-form__input">
        <label for="password">Lösenord</label>
        <input type="password" name="password">
      </div>
      <small>{{ (register ? 'Har du redan ett konto? ' : 'Har du inte ett konto? ') + 'Klicka ' }}<a @click="register = !register" href="#">här</a></small>
      <button :class="'login-form__button ' + (register ? 'peach--bg' : 'blue--bg')">{{ register ? 'Registrera mig' : 'Logga in' }}</button>
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
@import '@/assets/scss/config.scss';

.section__login {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  width: 100%;

  h1 {
    margin-bottom: 40px;
  }
}

.blue {
  color: $blue;

  &--bg {
    background-color: $blue;
  }
}

.peach {
  color: $peach;

  &--bg {
    background-color: $peach;
  }
}

.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90%;
  max-width: 400px;

  > :not(:last-child) {
    margin-bottom: 20px;
  }

  &__input {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    label {
      width: 150px;
      font-weight: 700;
    }

    input {
      background-color: transparent;
      color: $white;
      font-size: inherit;
    }
  }

  &__button {
    padding: 10px 20px;
  }
}
</style>

