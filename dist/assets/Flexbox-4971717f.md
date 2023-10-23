# Flexbox notes

## 1. Properties for the Parent (flex container)

### 1.1 Basics

&thinsp;

`display: flex`

- Defines a flex container; inline or block depending on the given value. It enables a flex context for all its direct children.

`flex-direction: row | row-reverse | column | column-reverse`

- Establishes the **main-axis**, thus defining the **direction** of flex items.
- Flexbox is a single-direction layout concept (aside from optional wrapping).
- Think of flex items as primarily laying out either in **horizontal rows** or **vertical columns**.

`flex-wrap: nowrap | wrap | wrap-reverse`

- Flex items will all try to fit onto one line. You can change by allowing the items to wrap.

`flex-flow: column wrap`

- Shorthand for the `flex-direction` and `flex-wrap`.

&thinsp;

### 1.2 Positioning

&thinsp;

```
justify-content: flex-start | flex-end | center | space-between | space-around | space-evenly | start | end | left | right
```

- Defines the alignment along the **main axis**.

```sass
align-items: stretch | flex-start | flex-end | center | baseline | first baseline | last baseline | start | end | self-start | self-end + ... safe | unsafe
```

- Defines the alignment along the **cross axis**.

```sass
align-content: flex-start | flex-end | center | space-between | space-around | space-evenly | stretch | start | end | baseline | first baseline | last baseline + ... safe | unsafe;
```

- Aligns a flex container’s lines within when there is extra space in the cross-axis (???), similar to how `justify-content` aligns individual items within the main-axis.

&thinsp;

### 1.3 Difference between `align-items` and `align-content`

&thinsp;

- `align-content` is for multi line flexible boxes and determines the **spacing between lines**
  - When there is only one line, `align-content` has no effect
- `align-content` doesn't interfere with items in a row but **with rows itself**
- `align-content` only works if there is `flex-wrap: wrap`
- `align-content` has higher priority than `align-items` if there are multiple `flex-line`
  - and if there is more than one `flex-line` in container
  - `flex-line` is a row or a column of flex items in a flex container
- `align-items` determines how the items as a whole are aligned within the container

&thinsp;

### 1.4 Gap, row-gap, and column-gap

&thinsp;

```sass
gap: 10px;
gap: 10px 20px; /* row-gap column gap */
row-gap: 10px;
column-gap: 20px;
```

- `gap` controls the space between flex items.
- It applies to spacing **only between items** not on the outer edges.

&thinsp;

## 2. Properties for the Children (flex items)

&thinsp;

`order: 5; /* default is 0 */`

- By default, flex items are laid out in the source order.
- However, the `order` property controls the order in which they appear in the flex container.

`flex-grow: 4; /* default 0 */`

- Defines the ability for a flex item to grow if necessary
- It accepts a unitless value that serves as a proportion
- It dictates what amount of the available space inside the flex container the item should take up
- Sort of - if there is space left:
  - `flex-grow` orders a priority of which items can take up the remaining space
  - The greater the value, the higher the priority

`flex-shrink: 3; /* default 1 */`

- Defines the ability for a flex item to shrink if necessary.
- Analogous to `flex-grow`

`flex-basis: | auto; /* default auto */`

Defines the default size of an element before the remaining space is distributed.
It can be a length (e.g. 20%, 5rem, etc.) or a keyword.

- The `auto` keyword means “look at my width or height property”
- The `content` keyword means “size it based on the item’s content”
- This keyword isn’t well supported yet, so it’s hard to test and harder to know what its brethren `max-content`, `min-content` and `fit-content` do.

```sass
flex: none | [ <'flex-grow'> <'flex-shrink'>? || <'flex-basis'> ]
```

- This is the shorthand for `flex-grow,` `flex-shrink` (optional) and `flex-basis` (optional) combined.
- The default is `0 1 auto`
  - If you set it with a single number value, like `flex: 5;`, that changes the `flex-basis` to 0%,
    - It’s like setting `flex-grow: 5; flex-shrink: 1; flex-basis: 0%;`
- **It is recommended that you use this shorthand property** rather than set the individual properties. The shorthand sets the other values intelligently.
  - Ok dumb dumb.

`align-self: auto | flex-start | flex-end | center | baseline | stretch;`

- Allows the default alignment (or the one specified by `align-items`) to be overridden for individual flex items.
- See the `align-items` explanation to understand the available values.
