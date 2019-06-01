# Don't style the tags

Consider this madness:
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

That's obviously ridiculous. Every time a div is placed anywhere, the first thing we'd have to do would be to override these ridiculous styles with something actually useful. And each time we'd have to do these overrides for both the base style and the focus style. Working on this kind of a codebase would be absolutely infuriating, no question. Now that that's established, think about this:

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

It's the exact same thing, but somehow almost every CSS codebase I've ever worked on has something akin to this. It might seem useful at first to apply "some common styles" via html tag selectors but after you've styled six different buttons, none of which look like the original "common button", it starts to get really old. You start to substitute semantic tags like p or h1-h6 with divs just because overriding the "default styles" would be such a hassle.

I would argue that a [CSS Reset] and applying `box-sizing: border-box;` to everything are the only tag selectors you should probably use. Setting body styles with a `.body` selector might sound ridiculous at first but at least it's consistent. And consistency is key to simplicity.

[CSS Reset]: https://github.com/shannonmoeller/reset-css
