---
title: "<code>inputMode</code> HTML attribute"
alias: "inputmode-html-attribute"
date: 2026-02-14
publishdate: 2026-02-14
draft: false
categories: 
- Notes
tags:
- frontend
- TIL
- HTML
---

While working on a form with numeric inputs, I noticed Claude putting this attribute on them: `inputMode="numeric"`.

Intrigued, I looked at the [MDN page](https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Global_attributes/inputmode) and it turns out the attribute exists to support different input styles, mostly related to what a smartphone will show in the keyboard tray. It can take values like `tel`, `email`, `numeric` and so on.

The attribute's effect is limited to the keyboard, and it relies on the specific vendor to act on it. Nevertheless, I find it pretty useful to be able to change the keyboard between `numeric` and `decimal` depending on the value that needs to be entered in a form field.