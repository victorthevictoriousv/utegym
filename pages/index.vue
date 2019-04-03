<template>
  <section class="section section__main">
    <div class="search">
      <label for="search">
        <svg class="search__icon" xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14">
          <path fill="#B7B7B7" d="M14.138,14 C13.9113955,14.000365 13.6945431,13.9078414 13.538,13.744 L9.722,9.912 L9.722,9.912 C8.79442143,10.6041693 7.66736445,10.976814 6.51,10.974 L6.485,10.974 C4.2676761,10.96303 2.2727099,9.62470838 1.42158744,7.57721328 C0.570464985,5.52971818 1.02884532,3.17156584 2.585,1.592 C3.60391225,0.575950387 4.98306807,0.0037283197 6.422,0 L6.446,0 C9.47512401,0.021916787 11.9217587,2.4788108 11.931,5.508 C11.9388124,6.66991951 11.5716337,7.80336886 10.884,8.74 L14.707,12.574 C14.9528749,12.8066351 15.0319336,13.1657365 14.9064887,13.4801203 C14.7810438,13.7945041 14.4764868,14.0005358 14.138,14 Z M6.429,1.1 C5.27341894,1.10210413 4.16630105,1.56455414 3.35256552,2.38504577 C2.53883,3.2055374 2.08554958,4.31644104 2.093,5.472 C2.10115887,7.89535735 4.0586923,9.86047293 6.482,9.878 L6.5,9.878 C8.88856311,9.81504954 10.7881499,7.8533706 10.7742678,5.46401844 C10.7603858,3.07466627 8.83813332,1.13519214 6.449,1.1 L6.429,1.1 Z"/>
        </svg>
      </label>
      <input type="search" name="search" placeholder="sök utegym" aria-placeholder="sök utegym">   
    </div>
    <img :src="map" alt="map">
  </section>
</template>

<script>
import map from '@/assets/img/map.png'

export default {
  data() {
    return {
      map
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';

.section__main {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.search {
  display: inline-flex;
  align-items: center; 
  background-color: #626262;
  height: 36px;
  width: 343px;
  margin-bottom: 20px;
  border-radius: 10px;

  &__icon {
    width: 40px;
    fill: red;

  }

  input {
    font-weight: 400;
    color: #b7b7b7;
  }
}
</style>
