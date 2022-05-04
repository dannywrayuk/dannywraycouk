---
id: features
title: all current markdown features
---

# All current features

# h1

## h2

### h3

This is _italic_ this is **Bold** this is **_Bold and Italic_**

- Milk
- Bread
  - Wholegrain
- Butter

1. Tidy the kitchen
2. Prepare ingredients
3. Cook delicious things

This is some `inline` code

```
This is a code block
It will display things exactly as they're written

    including
            indentation
```

It should work most of the time.

> But don't quote me on that

this is a [link](http://www.google.com), so is [this](http://www.youtube.com).

---

# GFM

## Autolink literals

www.example.com, https://example.com, and contact@example.com.
example.com

## Footnote

A note[^1]

[^1]: Big note.

## ~Strikethrough~

~one~ or ~~two~~ tildes.

## Table

| a   | b     |   c |  d  |
| --- | :---- | --: | :-: |
| hey | there | its | me  |

### Long Table

| a   | b                                                                                                  | c   | d   |
| --- | -------------------------------------------------------------------------------------------------- | --- | --- |
| hey | hello there its me i am a long table entry how do i look. I'm trying to make this as long as i can | its | me  |

## Tasklist

- [ ] To do
- [x] Done
  - [ ] Another

code highlight

```js
function $initHighlight(block, cls) {
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
             ` class="${cls}"`;
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }

  return (
    <div>
      <web-component>{block}</web-component>
    </div>
  )
}

export  $initHighlight;
```
