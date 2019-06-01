# One block, one file

Each block (block, as in <b class="article__b">B</b>EM) should be in their own file, named after the block class. These block files should reside in a single flat directory, separate from the other style files (such as a variable definition file etc.).

It might be tempting to do put several related blocks in a single file, especially if those block consists of very few lines like this:

```scss
// _tags.scss

.tag {
  padding: 5px;
  border: 1px solid gray;

  &--black {
    border-color: black;
  }
}

.tag-cloud {
  display: flex;
  flex-wrap: wrap;
}
```
While tempting, consider these points before doing that:
* These kind of arbitrary groupings just add more complexity for very little benefit. What the groupings should be and where should a block belong to are mostly matters of opinion. What feels natural to you might not be such for some other developer or even your future self. Keep it simple by keeping it simple.
* In the actual final compiled CSS there are no "blocks related to site header" or whatever—just blocks. Not having any unnecessary hierarchy better represents structure of the final CSS.
* When combined with the flat directory structure, the filesystem will prevent you from creating two files with the same name. No accidental class name clashes!

This rule is actually quite obvious once you start thinking of blocks as standalone entities.
