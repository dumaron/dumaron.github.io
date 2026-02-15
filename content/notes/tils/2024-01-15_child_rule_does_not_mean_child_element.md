---
title: "Child rule does not mean child element"
date: 2024-01-15
publishdate: 2024-01-15
draft: false
alias: "child_rule_does_not_mean_child_element"
categories: 
- Notes
tags:
- CSS
- frontend
- TIL
---

I always tought that, either in SASS or in native CSS nested selector, it was possible only to refine a selector by appending attributes of child nodes. It turns out it isn't so.

In other words, whenever the `&` is used in selectors it's possible to write `body &` and it'll create a legit selector. I expected that only refinements like `& .some-children-class` would work.

This is a partial example to show the mechanism: the haiku is green, while I would have expected it to be blue.
```html
<html>
<head>
    <title>Test for CSS nesting and above selectors</title>
    <style>
        main {
            color: blue;
            body & { color: green; }
        }
    </style>
</head>
<body>
<main>
    I write, erase, rewrite<br/>
    Erase again, and then<br/>
    A poppy blooms.
</main>
</body>
</html>
```