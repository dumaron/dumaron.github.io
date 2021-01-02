---
title: "Stimulusjs and new hopes for backend frameworks"
date: 2021-01-02
publishdate: 2021-01-02
draft: false
summary: "Stimulusjs is a “modest Javascript framework for the HTML you already have”. It has a kind of MVC architecture and focuses on enhancing server-side generated HTML, allowing to gracefully inject Javascript behaviors via custom HTML attributes. Its unobtrusiveness and simplicity seem to have made it a good match for backend frameworks that want to extend their control client-side."
categories: 
- Opinions
images: 
- workers.jpg
---

{{<
  img
  src="workers.jpg"
  alt="Two silhouettes of builders on a construction site; skyscraper made of concrete on the background"
  caption=`Photo by <a target="_blank" rel="noopener" href="https://unsplash.com/@guiccunha?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Guilherme  Cunha</a> on <a target="_blank" rel="noopener" href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a>`
>}}

[Stimulusjs](https://stimulus.hotwire.dev/) is a “modest Javascript framework for the HTML you already have”. It has a kind of MVC architecture and focuses on enhancing server-side generated HTML, allowing to gracefully inject Javascript behaviors via custom HTML attributes. Its unobtrusiveness and simplicity seem to have made it a good match for backend frameworks that want to extend their control client-side.

Several tools that help backend developers (not) to write Javascript code have recently been released, and Stimulus seems to be involved in all of them:

- [StimulusReflex](https://docs.stimulusreflex.com/), the oldest of this family, integrates RoR and Stimulus; if I get it right, it  uses WebSockets to let you handle all client’s events with Ruby
- [Symfony UX](https://symfony.com/blog/new-in-symfony-the-ux-initiative-a-new-javascript-ecosystem-for-symfony), released on Dec 4, 2020, uses Stimulus to instantiate and configure from PHP complex Javascript components (charts, Dropzone, image cropping, etc)
- Stimulus 2 has been released on Dec 5
- [HOTWire](https://hotwire.dev/), made public on Dec 22, is a set of tools that includes Stimulus and allows to have a dynamic server-side rendered application with little or no Javascript

I think that, together, these releases delineate a new pattern to attempt changing how we deal with client-side Javascript, especially for people used to fat frameworks and their abundant tools. Although I’m happy to be a fronted developer, the philosophy that has shaped my tools in the last years dissatisfies me a lot, and I’m not alone in thinking so.

## A bit of history

There are two concurrent philosophies in the world of web development right now, fighting each other: one that promotes the use of monolithic and big - or “fat” - frameworks, and one that prefers light unopinionated ones. These two philosophies appeared at different times and they target different contexts and languages.

The first to appear was the fat philosophy, and it’s possible to make his birth symbolically coincide with the appearance of [Ruby on Rails](https://rubyonrails.org/). Even if written in a niche language, Ruby, it was such a step forward in terms of productivity that many developers adopted it. RoR introduced to the world of web development new concepts that shaped it in the following years: MVC architecture, convention over configuration, developer experience, etc; [the Rails doctrine](https://www.duma.website/posts/rails_doctrine/) sums up all these concepts in a marvelous form. Soon other frameworks emerged, in different languages and with slightly different conventions, but all based on the same principles: [Laravel](https://laravel.com/), [Django](https://www.djangoproject.com/), [Symfony](https://symfony.com/)… and so on.

After a few years, this model entered a crisis. Many developers felt uncomfortable working with “fat” frameworks: for someone, they were unnecessarily hard to learn; for someone else, too opinionated. Also, with the functional paradigm gaining momentum, many preferred tools that didn’t involve OO principles, often foundational in fat frameworks. This dissatisfaction was at the root of the emerging of “unopinionated” frameworks like Sinatra and Flask, which furnished developers only a small subset of the functionalities of rich ones, and ship with fewer conventions in respect to their “opinionated” counterparts.

Javascript “boom” happened during this second period, so its frameworks reflect the unopinionated philosophy. [Express](https://expressjs.com/), the most famous web framework for Node, offers very few functionalities. [React](https://reactjs.org/), the most diffused client-side framework right now, is so light that people are arguing if it can even be called “framework”, and it’s purging all its elements derived from the OO paradigm. [Vue](https://vuejs.org/) and [Angular](https://angular.io/) offer more features over React and inherit elements of the MVC framework, but are far behind in respect to their “fat” counterparts in terms of conventions and number of features. [Ember](https://emberjs.com/), the only one that has a data manipulation library built-in, doesn’t get the attention it deserves.
Also, the need to contain the size of the bundle sent to the client added one reason for the adoption of the light approach: as you might have guessed, something labeled as fat needs more to download and may result in a slower user experience on client.

Supporters of fat frameworks are in a difficult position: they need to abandon their way of working to build a modern web application. Since Javascript is a necessary building component of every web application these days they’re forced to pair their “rich” tools with the ones from the Javascript world, which are built from the opposite point of view.

Probably it’s possible to create completely functional web apps with a little or no Javascript; I’m although convinced that the user experience can be greatly improved with it; Javascript needs to be tamed, not demonized.

Some attempts have been made to build bridges between backend and frontend but no one has seen a great diffusion. However, the releases of the last months seem to outline a new pattern to approach integration based on the Stimulus library.

## A necessary change

This approach isn’t new: Phoenix’s [LiveView](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html) and Laravel’s [LiveWire](https://laravel-livewire.com/) have been out for a while, yet they have not seen great diffusion. At the same time, as a frontend developer, I’m skeptical about the power of those tools: there are so many things that need to be handled in a modern web application client that I cannot imagine how they can address all of them. Sadly, I don’t have enough time to study all these tools, so I can be wrong about that.

I’m not sold on these new solutions but I’m very happy to see supporters of the fat philosophy target the Javascript world. I believe there’s a desperate need to “make frontend developers productive again”: we need to re-learn from backend developers how to distillate good conventions and standardize them, so that we can focus on the things that really makes our application different from the other ones. The current state of Javascript tools frustrates developers like me by making them re-write solutions to the same problems again and again. The Javascript world can learn a lot from tools like Rails, Laravel, Django and the philosophy under which they were written.

On the other hand, I think that having tools that can integrate backend and frontend would be extremely helpful for people that may want (or need) to build web applications bottom-up. Right now, it’s impossible for “generalists” to create complete applications, and this puts an unfair limit on the capacity of expression of many coders. To put it with [the words of DHH](https://twitter.com/dhh/status/1341759520385675264), creator of RoR and involved in the creation of HOTWire:

> “Making tech more accessible to different ideas start by lowering the cost of participation”

I find it hard not to enjoy every achievement in that direction. Good luck, Stimulus and HotWire!

Stimulusjs:
: [https://stimulus.hotwire.dev/](https://stimulus.hotwire.dev/)

StimulusReflex:
: [https://docs.stimulusreflex.com/](https://docs.stimulusreflex.com/)

Symfony UX:
: [https://symfony.com/blog/new-in-symfony-the-ux-initiative-a-new-javascript-ecosystem-for-symfony](https://symfony.com/blog/new-in-symfony-the-ux-initiative-a-new-javascript-ecosystem-for-symfony)

HOTWire:
: [https://hotwire.dev/](https://hotwire.dev/)

LiveView:
: [https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html](https://hexdocs.pm/phoenix_live_view/Phoenix.LiveView.html)

LiveWire:
: [https://laravel-livewire.com/](https://laravel-livewire.com/)

Quoted DHH Tweet:
: [https://twitter.com/dhh/status/1341759520385675264](https://twitter.com/dhh/status/1341759520385675264)