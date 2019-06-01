<template>
  <div class="article">

    <Section
      v-for="section in article"
      :key="section.id"
      v-bind="section"
    />

  </div>
</template>

<script>
  import Section from './Section';

  export default {
    components: {
      Section,
    },
    props: {
      article: Object,
    },
  }
</script>
