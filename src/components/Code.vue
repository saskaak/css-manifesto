<template>
  <div class="code" v-highlightjs="code">
    <code :class="['code__code', lang]">
    </code>
  </div>
</template>

<script>
  export default {
    props: {
      code: String,
      lang: String,
    }
  }
</script>

<style lang="scss">
  @import "../sass/utilities";


</style>
