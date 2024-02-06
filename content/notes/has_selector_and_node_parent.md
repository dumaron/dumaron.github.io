---
title: ":has() pseudo-selector and current node parent"
date: 2024-02-02
publishdate: 2024-02-02
draft: false
categories: 
- Notes
tags:
- frontend
- CSS
- TIL
---

Today I was finally able to use the `:has()` pseudo-selector. I've heard about that in a superficial way through articles and comments, but I've never it in person.

Today at work I needed to implement a workaround, which consisted in **setting some CSS rules to the parent of the current node**. I've always thought it was impossible to achieve, but good folks updated [this old question on StackOverflow](https://stackoverflow.com/questions/1014861/is-there-a-css-parent-selector), explaining how `:has()` could have helped.

Here's how it is possible (not real CSS, so take it with a grain of salt):
```css
.some-class {
    color: red;

    .some-parent-class:has(&) {
        width: 100%;
    }
}
```

That was nice and worked. I wonder, however, if I could have done it in another way. Given that I'm using [styled-components](https://styled-components.com/) in this project, maybe that was really the smartest thing to do.