<template>
  <div class="hero">
    <transition
      :duration="4000"
      appear
    >
      <h1 class="hero__logo">
        <span class="hero__css">Simpler CSS</span>
      </h1>
    </transition>
  </div>
</template>

<style lang="scss">
  @import "../sass/utilities";

  $breakpoint: r(600);

  @function scaled($size, $factor: 0.1) {
    @return calc(#{r($size)} + #{$size * $factor}vw);
  }

  .hero {
    height: 100vh / $phi;
    display: flex;
    justify-content: center;
    background-color: $color-primary;
  }

  .hero__logo {
    position: relative;
    margin: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: $ff-display;
  }

  .hero__css {
    position: absolute;
    font-size: scaled(64);
    font-weight: bold;
    color: $color-white;

    .v-enter & {
      opacity: 0;
    }

    .v-enter-active & {
      transition: opacity 1s;
    }
  }

  .hero__manifesto {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: scaled(6);
    font-size: scaled(12);
    letter-spacing: scaled(12);
    text-transform: uppercase;
    color: #ffffff;

    .v-enter & {
      padding-left: scaled(4);
      letter-spacing: scaled(8);
      opacity: 0;
    }

    .v-enter-active & {
      transition: letter-spacing 4s ease-out, padding-left 4s ease-out, opacity 1s;
    }
  }
</style>
