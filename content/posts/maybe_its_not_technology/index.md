---
title: "Maybe it's not technology"
date: 2020-05-14
publishdate: 2020-06-02
draft: false
categories: 
- Thoughts
---

{{< img src="carelman.jpg" alt="An illustration by Jacques Carelman" >}}

## Wrong direction

I had the opportunity to work for many small and medium companies.

Most of them weren't software house. Most of them weren't up to date with all the technologies of javascript's world. Typescript, Angular, and React were like echoes of distant mermaids: attractive yet too far to make the boat change direction.

I think that, startups excluded, most companies still fall under this description today. Their softwares are "old" web application written in javascript v5, jQuery and, God forbid, Bootstrap 3.

Nonetheless, as time goes on, the need for a rewrite becomes more impellent. The feature requests start to accumulate, the graphics already looked old 5 years ago, there isn't enough drag'n'drop all around.. and so on. In this context, the frontend developers might wonder if it's the right chance to adopt one of the new technologies to improve their software.

My opinion is that, oftentimes, that's a bad choice. The aspect where the software is lacking is not technology, but usability.

## Switch context

The book "The Psychology of Everyday Things" by Donald Norman was published more than 30 years ago. Nonetheless, its fundamental concepts remain completely obscure to most programmers today.

The examples he makes in the first chapter of the new edition are so true that somehow hurts. UX experts are born exactly to fill this hole in the developers' knowledge; this doesn't justify a complete ignorance of these concepts by any developer that has to build a graphic interface. It's like being a translator and knowing only one of the two or more languages involved.

A bit of knowledge of how human beings "work" and how interfaces can talk to them can dramatically improve your user's life - and indirectly yours. By overcoming the natural reluctance to work with "human stuff" a new class of enhancements becomes available.

These changes often don't need a complete rewrite of the application and can also remove some of the worst user's pain points. A developer can't improvise himself as a UX expert, but that's not required: even a little knowledge of usability can dramatically improve your user's experience.

These changes, paired with a graphical revamp, are what users and boss really need - even if they don't know yet.

## Know what you lose

New technologies are seductive but with great power comes great responsibility. By embracing modern javascript frameworks there are many aspects of the user interface that needs to be handled manually.

The best example is content loading. With a server-side rendering system, an HTML page is sent complete to the browsers. With modern SPAs it's not uncommon to have different components that make different requests and have their loadings. This new situation, without proper handling, can lead to interfaces that "pops" and flicker.
Their handling it's up to the same developer that has no knowledge of usability (no talk about graphic design).

It's not uncommon that a new frontend technology leads to worse user experience. Sadly this knowledge comes only after experience, failures, and a more complete understanding of the chosen framework.

So, if I can spare you some suffering, my advice is: learn things about humans. Do it before thinking about adopting a new technology. "The design of everyday things" or "Don't make me think" are good books and can help you understand that, maybe, your problem it's not technology.
