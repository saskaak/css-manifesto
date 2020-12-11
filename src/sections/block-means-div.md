---
title: 4. Block means div
---

Blocks are standalone entities. This means that whatever is happening around a block is not a concern of the block itself—blocks should behave the same regardless of their context. In the this example, a bit of context has gotten into the styles of a block:

```scss
.hero {
  display: flex;
  align-items: center;
  min-height: 300px;
  background-color: gray;
  padding: 40px 20px;
  margin-bottom: 20px;

  @media (min-width: 768px) {
    min-height: 350px;
    margin-bottom: 50px;
  } 
}

.hero__title {
  font-size: 32px;
  margin-bottom: 10px;
}

.hero__subtitle {
  font-size: 24px;
}
```

It might not be obvious at first, but the culprit is that bottom margin applied to the `.hero`. The problem with those are that when we want to use this hero in a different context we might need different margins too.

Changing the margins later would get ugly. Using negative margins in surrounding blocks means that now your context becomes concerned of the inner workings of the block. Doing that for n different margins on n different breakpoints most likely leads to errors. You could add modifier classes for each context, but that would just be backwards.

A better way to handle spacing between different blocks is to apply them to the parent block like this:

```scss
.template-article-layout {
  background-color: silver;
  padding-bottom: 45px;
}

// .hero will be wrapped in this
.template-article-layout__hero {
  margin-bottom: 30px;

  @media (min-width: 768px) {
    margin-bottom: 50px;
  }
}

.template-article-layout__content {
  margin-bottom: 45px;
}
```

So what saying "block means div" tries to communicate is that *when viewed from outside, a block should behave like an unstyled div* with arbitrary content. Blocks that adhere to this constraint can be easily composed without having to delve into the inner workings of that block.
