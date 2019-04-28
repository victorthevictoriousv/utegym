<template>
  <section class="event container">
    <header>
      <div class="event__time">
        <p><span>0</span><span>1</span></p>
        <p>Dagar <br /> kvar</p>
      </div>
      <h1>Pump It Up</h1>
    </header>
    <div>
      <img class="event__hero" src="https://images.unsplash.com/photo-1528805639423-44f7d2a3b368?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="img">
      <div class="event__details">
        <div>
          19 <br /> April
        </div>
        <div>
          <h3>Skälby Utegym</h3>
          <p>18:00-20:00</p>
        </div>
      </div>
    </div>
    <footer>
      
    </footer>
  </section>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';

.event {

  header {
    display: flex;
    align-items: center;

    h1 {
      font-size: 45px;
      width: 100%;
      text-align: center;
    }
  }

  &__time {
    width: auto;
    padding: 0 8px;
  }

  &__hero {
    height: 200px;
    object-fit: cover;
    margin: 8px 0;
  }
}
</style>
