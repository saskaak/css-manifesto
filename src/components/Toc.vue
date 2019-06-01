<template>
  <div class="toc">
    <ol class="toc__list">
      <li
        v-for="link in links"
        class="toc__item"
        :key="link.text"
      >
        <a
          class="toc__link"
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
    border-left: r(4) solid $color-primary
  }

  .toc__list {
    padding-left: r(24);
  }

  .toc__item {
    font-size: r(18);

    & + & {
      margin-top: r(12);
    }
  }

  .toc__link {
    text-decoration: none;
    color: $color-text;

    &:hover {
      color: $color-primary;
    }
  }
</style>
