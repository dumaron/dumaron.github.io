---
title: "Web Components innerHTML and loading time"
date: 2024-01-30
publishdate: 2024-01-30
draft: false
categories: 
- Notes
tags:
- web components
- frontend
- javascript
- TIL
---

While approaching the first lessons of [Rob Eisenberg's Web Components course](https://www.bluespire.com/p/web-component-engineering), I stumpled upon a browser error that prevented every instance
of a web component to run:
```
Failed to construct 'CustomElement': The result must not have children"
```

After many trials and errors, it turned out that adding the `type="module"` attribute fixed the issue. But why?
I asked Rob directly [in this tweet](https://twitter.com/Duma_ron/status/1752283582368731598), and here's his answer:

> Technically, one shouldn't alter the host attributes or children in the constructor (there's a note on attributes but not children in the lesson; I'll add more on that). Though, it will work in certain scenarios. Setting innerHTML in the constructor is an example of where it will work, depending on the timing.

> For example, if you move that script tag below the use of the element itself, it will work. This is because the upgrade doesn't "interrupt" the parsing of the element itself. The parser completes its work, then the element gets defined, then the browser upgrades the element. If you move the script tag above the use of the element, then the browser will parse the element, immediately recognizing that it's defined, and attempt to upgrade it. When it upgrades it, its constructor will then alter the light dom child nodes, which will break the state of the parser, since it's in the middle of parsing that element.

> When it comes to a script of type module, this alters the timing because a script of type module is always deferred by the browser. When a script is deferred, it isn't executed until the page is finished parsing. So, you can see that also avoids the issue above.

> The example in the course uses innerHTML in this way because it's a controlled example showing the simplest possible custom element. As you progress through the course you will learn about connectedCallback, which is the lifecycle method where alterations to attributes and child elements are consistently safe from interfering with the parser.

I get it, even though it would be cool to test every possible combination of sync/async load of the js script to see how the WebC behaves. At the same time, maybe I should study the modern ways to load javascript into a web page.

Here's [a codesanbox](https://codesandbox.io/p/sandbox/web-components-exercise-help-7z9pkn?file=%2Findex.html); however, seems to have changed its subscription method, making less easy for me to spawn and edit them. Let's hope they will be preserved in public mode, but I don't have time to dig into their new model right now.