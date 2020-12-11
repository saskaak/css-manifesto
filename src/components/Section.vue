<template>
  <div class="section">
    <div
      :id="id"
      class="section__anchor"
    ></div>

    <h2>{{title}}</h2>
    <div v-html="content"></div>
  </div>
</template>

<script>
  export default {
    props: {
      id: String,
      title: String,
      content: String,
    },
  }
</script>

<style lang="scss">
  @import "../sass/utilities";

  .section {
    @include clip-margins();

    p {
      margin: 1em 0;
      line-height: 1.75;
      font-size: r(18);
    }

    ul {
      font-size: r(18);
      margin: 1em 0;
      padding-left: r(32);
      line-height: 1.75;
    }

    li {
      position: relative;

      &::before {
        content: "\2022";
        position: absolute;
        width: r(32);
        left: r(-32);
        text-align: center;
        color: #c3c3c3;
      }

      & + & {
        margin-top: r(8);
      }
    }

    em {
      font-style: italic;
    }

    a {
      color: $color-text;
    }

    h2 {
      font-size: r(24);
      font-weight: bold;
      margin-top: r(64);
      margin-bottom: r(24);
      color: #777777;
    }

    code {
      font-family: $ff-code;
      background: $color-light;
      padding: r(3) r(6);
      margin: 0 r(3);
      border-radius: r(4);
      color: $color-secondary;
      font-size: r(16);

    }

    pre {
      margin: r(32) 0;
      padding: r(16) r(20);
      background-color: $color-light;

      code {
        margin: 0;
        padding: 0;
        white-space: pre;
        font-family: $ff-code;
        font-size: r(16);
        line-height: 1.4;
        color: rgba($color-text, 0.7);

        .punctuation {
          color: rgba($color-text, 0.5);
        }

        .property {
          color: $color-primary;
        }

        .selector {
          color: $color-text;
        }

        .comment {
          color: rgba($color-text, 0.5);
        }

        .rule {
          color: $color-secondary;
        }

        .parent {
          color: $color-secondary;
        }
      }
    }
  }

  .section__anchor {
    position: relative;
    top: r(-24)
  }
</style>
