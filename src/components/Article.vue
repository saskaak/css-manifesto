<template>
  <div class="article">

    <div
      v-for="section in article"
      :key="section.id"
      ref="sections"
      class="article__section"
    >
      <Section
        :title="section.attributes.title"
        :content="section.html"
        :id="section.id"
      />
    </div>

  </div>
</template>

<script>
  import Section from './Section';

  export default {
    components: {
      Section,
    },
    props: {
      article: Array,
    },
    mounted() {
      this.updateActive();
      window.addEventListener('scroll', this.updateActive);
    },
    destroyed() {
      window.removeEventListener('scroll', this.updateActive);
    },
    methods: {
      updateActive() {
        const index = this.article
          .filter((section, i) => {
            const element = this.$refs.sections[i];
            return element.getBoundingClientRect().top <= 32;
          })
          .length - 1;
        this.$emit('visible', this.article[Math.max(0, index)].id);
      }
    },
  }
</script>

<style lang="scss">
  @import "../sass/utilities";

  .article__section {
    & + & {
      margin-top: r(80);
    }
  }
</style>
