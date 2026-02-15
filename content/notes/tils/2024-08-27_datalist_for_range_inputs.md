---
title: "<code>datalist</code> for range inputs"
alias: "datalist-for-range-input"
date: 2024-08-27
publishdate: 2024-08-27
draft: false
categories: 
- Notes
tags:
- frontend
- CSS
- TIL
- HTML
---

The `datalist` tag has surprised me at least a couple time already. While I still consider native HTML inputs as inadequate and too rigid, I admit that thanks to the `datalist` tag the UX can improve a bit.

Today I was how far the native range inputs are from for [ElasticUI range inputs](https://eui.elastic.co/#/forms/range-sliders), the one I currently use. I stumbled upon the MDN Web docs page and particularly [on the `list` attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input/range#list): it can contain the `id` of a `datalist` component and to enhance the user experience of the input. It seems the only three ways these two tags can interact are:
1. show marks under the range slider
2. show labels under the marks
3. create magnetic fields near the markers to ease moving the cursor over them

The aspect is more or less this:
```html
<label for="tempB">Choose a comfortable temperature:</label><br />
<input type="range" id="tempB" name="temp" list="values" />

<datalist id="values">
  <option value="0" label="very cold!"></option>
  <option value="25" label="cool"></option>
  <option value="50" label="medium"></option>
  <option value="75" label="getting warm!"></option>
  <option value="100" label="hot!"></option>
</datalist>
```

This comes at least close to what we have in many design system. If I only got more ways to change the CSS of the slider...