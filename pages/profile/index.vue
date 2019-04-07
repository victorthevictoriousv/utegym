<template>
  <section class="section__profile profile">
    <header class="profile__header">
      <img :src="Forest" alt="img">
      <div class="profile__header--overlay"></div>
      <div class="profile__header--user">
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="30" viewBox="0 0 28 30">
          <g fill="#FFF">
            <circle cx="14.367" cy="6.551" r="6.551"/>
            <path d="M27.855,21.419 C27.855,25.279 18.055,22.179 14.544,28.408 C11.856,33.171 -1.456,26.183 1.233,21.419 C3.146,18.029 7.192,14.43 14.544,14.43 C21.896,14.43 27.855,17.559 27.855,21.419 Z"/>
          </g>
        </svg>
        <div>
          <input ref="name" v-autowidth v-on:keydown.enter="setName" id="name" type="text" v-model="editableName">
          <label for="name" @click="setName">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28">
              <path fill="#FFF" d="M26.8705882 25.4823529L1.12941176 25.4823529C.588235294 25.4823529.164705882 25.9294118.164705882 26.4470588.164705882 26.9647059.611764706 27.4117647 1.12941176 27.4117647L26.8941176 27.4117647C27.4352941 27.4117647 27.8588235 26.9647059 27.8588235 26.4470588 27.8588235 25.9294118 27.4117647 25.4823529 26.8705882 25.4823529zM.164705882 16.9411765L.141176471 21.5294118C.141176471 21.7882353.235294118 22.0470588.423529412 22.2352941.611764706 22.4235294.847058824 22.5176471 1.10588235 22.5176471L5.67058824 22.4941176C5.92941176 22.4941176 6.16470588 22.4 6.35294118 22.2117647L22.1176471 6.44705882C22.4941176 6.07058824 22.4941176 5.45882353 22.1176471 5.05882353L17.6.494117647C17.2235294.117647059 16.6117647.117647059 16.2117647.494117647L13.0588235 3.67058824.447058824 16.2588235C.282352941 16.4470588.164705882 16.6823529.164705882 16.9411765zM16.9176471 2.56470588L20.0941176 5.74117647 18.3058824 7.52941176 15.1294118 4.35294118 16.9176471 2.56470588zM2.11764706 17.3647059L13.7411765 5.74117647 16.9176471 8.91764706 5.29411765 20.5176471 2.09411765 20.5411765 2.11764706 17.3647059 2.11764706 17.3647059z"/>
            </svg>
          </label>
        </div> 
      </div>
    </header>
    <div>
    </div>
  </section>
</template>

<script>
import Forest from '@/assets/img/forest.jpg'

export default {
  data() {
    return {
      Forest,
      editableName: ''
    }
  },
  computed: {
    name() {
      return this.$store.getters['user/getName']
    }
  },
  mounted() {
    this.editableName = this.$store.getters['user/getName']
  },
  methods: {
    setName() {
      if(this.editableName !== this.$store.getters['user/getName']) {
        this.$store.commit('user/setName', this.editableName)
      } else {
        this.$refs.name.select()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/config.scss';

.profile {
  &__header {
    position: relative;
    margin-bottom: 30px;

    img {
      filter: blur(2px);
      max-height: 150px;
    }

    &--user {
      display: flex;
      flex-direction: column;
      align-items: center;
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, 50%);

      > svg {
        width: 60px;
        height: 60px;
        margin-bottom: 10px;
      }

      // Input + Label
      div {
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
      }

      label {
        position: absolute;
        left: 100%;
        margin-left: 10px;

        svg {
          width: 16px;
          height: 16px;
        }
      }

      input {
        background: none;
        color: $white;
        font-size: inherit;
      }
    }

    &--overlay {
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 100%;
      background-color: rgba($dark, .1);
    }
  }
}
</style>

