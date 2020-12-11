<template>
  <div class="toc">
    <ol>
      <li
        v-for="link in links"
        :key="link.text"
      >
        <a
          :class="['toc__link', {'toc__link--active': link.active}]"
          :href="`#${link.id}`"
          v-smooth-scroll
        >
          {{link.text}}
        </a>
      </li>
    </ol>
  </div>
</template>

<script>
  export default {
    props: {
      links: Array,
    },
  }
</script>

<style lang="scss">
  @import "../sass/utilities";

  .toc {
    top: r(24);
    position: sticky;
  }

  .toc__link {
    border-left: r(4) solid $color-light;
    padding: r(8) r(24) r(8);
    display: block;
    font-size: r(18);
    text-decoration: none;
    color: $color-text;

    &--active {
      color: $color-primary;
      border-color: $color-primary;
    }
  }
</style>
