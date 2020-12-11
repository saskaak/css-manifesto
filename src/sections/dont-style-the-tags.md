---
title: 5. Don't style the tags
---

Spot the issue in the following:
```scss
div {
  color: blue;
  border: 1px solid black;
  background-color: silver;

  &:hover {
    background-color: white;
  }
}
```

The fact that such styles are applied to `div` selector is obviously ridiculous. Every time a `div` is placed anywhere, the first thing you'd have to do would be to override these styles with something actually useful. And each time you'd have to do these overrides for both the base style and the focus style. Working on this kind of a codebase would be absolutely infuriating. Now that we've established that, think about this:

```scss
button {
  color: black;
  border: 1px solid black;
  background-color: silver;

  &:hover {
    background-color: white;
  }
}
```

It's the exact same thing, but applied to `button` instead of `div`. It might seem useful at first to apply "some common styles" via html tag selectors but after you've styled six different buttons, none of which look like the original "common button", it starts to get really old. This also reduces motivation to use semantic tags like `p` or `h1` instead of `div` just because having to overwrite the "default styles" would be such a hassle.

I would argue that a [CSS Reset] and applying `box-sizing: border-box;` to everything are the only tag selectors you should probably use. Setting `body` styles with a class selector might sound ridiculous at first but at least it's consistent. And consistency is key to simplicity.

[CSS Reset]: https://github.com/shannonmoeller/reset-css
