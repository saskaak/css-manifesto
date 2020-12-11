---
title: 3. Group by element
---

Styles should be grouped by element, not by context or modifier. This is best demonstrated with an example of doing the exact opposite:
```scss
.person-card {
  padding: 10px 20px;
  border: 1px solid gray;

  &--tiny {
    padding: 5px 10px;

    .person-card__image {
      height: 100px;
    }
  }

  &__title {
    font-size: 24px;
  }

  &__image {
    width: 100%;
    height: 200px;
  }

  @media (min-width: 768px) {
    &--tiny {
      .person-card__image {
        height: 200px;
      }
    }

    &__title {
      font-size: 32px;
    }

    &__image {
      height: 400px;
    }

    &__expand {
      display: none;
    }
  }
}
```
Looks like pretty efficient use of the `&` parent selector, right? Like, we only had to write the block class `.person-card` once! That's cool and all but then, try to make sense of what is actually written here. How does the image behave in different contexts? What _element classes_ are defined, or even simpler, how many of them are there?

The styles for image are defined in four different places all over the file so it's difficult to form even a rough mental model of what styles are applied and when. You might think you got the number of elements right until you notice that there's one element that is only styled in the media query—and then you start second guessing if there are more, hidden somewhere deep in the nested modifier classes. And then you get headache and kind of don't want to do CSS ever again. Compare that to this:

```scss
.person-card {
  padding: 10px 20px;
  border: 1px solid gray;

  &--tiny {
    padding: 5px 10px;
  }
}

.person-card__image {
  width: 100%;
  height: 200px;

  @media (min-width: 768px) {
    height: 400px;
  }

  .person-card--tiny & {
    height: 100px;

    @media (min-width: 768px) {
      height: 200px;
    }
  }
}

.person-card__title {
  font-size: 24px;

  @media (min-width: 768px) {
    font-size: 32px;
  }
}

.person-card__expand {
  @media (min-width: 768px) {
    display: none;
  }
}
```

Now that the styles are grouped by element, answering those earlier questions has become a feasible task. Also, there's actually a nice side effect for not abusing the `&` parent selector like in the first example: you can search from your codebase by a full element class name like `.person-card__image` and find the exact spot where all styles to that element are defined.
