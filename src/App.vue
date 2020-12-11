<template>
  <div class="site">
    <div class="site__hero">
      <Hero />
    </div>

    <div class="site__columns">
      <div class="site__content">
        <Article
          :article="article"
          @visible="active = $event"
        />
      </div>

      <div class="site__sidebar">
        <Toc :links="tocLinks" />
      </div>

    </div>
  </div>
</template>

<script>
  import Hero from './components/Hero';
  import Article from './components/Article';
  import Toc from './components/Toc';

  import introduction from './sections/introduction.md';
  import useBem from './sections/use-bem.md';
  import oneBlockOneFile from './sections/one-block-one-file.md';
  import groupByElement from './sections/group-by-element.md';
  import blockMeansDiv from './sections/block-means-div.md';
  import dontStyleTheTags from './sections/dont-style-the-tags.md';

  export default {
    components: {
      Hero,
      Article,
      Toc,
    },
    data() {
      const article = Object.entries({
        introduction,
        useBem,
        oneBlockOneFile,
        groupByElement,
        blockMeansDiv,
        dontStyleTheTags,
      }).map(([id, section]) => ({
        ...section,
        id,
      }));

      return {
        article,
        active: null,
      };
    },
    computed: {
      tocLinks() {
        return this.article
          .map((section) => ({
            id: section.id,
            text: section.attributes.title,
            active: section.id === this.active,
          }));
      },
    },
  }
</script>

<style lang="scss">
  @import "sass/utilities";

  .site {
    font-family: $ff-body;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .site__hero {
    margin-bottom: r(64);
  }

  .site__columns {
    display: flex;
    max-width: r(1200);
    margin: 0 auto r(65);
  }

  .site__sidebar {
    display: none;
    padding: 0 r(24);
    width: percentage(1- 1 / $phi);

    @media (min-width: r(768)) {
      display: block;
    }
  }

  .site__content {
    padding: 0 r(24);
    @media (min-width: r(768)) {
      width: percentage(1 / $phi);
    }
  }
</style>
