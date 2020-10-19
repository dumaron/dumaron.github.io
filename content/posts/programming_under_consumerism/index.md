---
title: "Programming under consumerism"
date: 2020-10-17
publishdate: 2020-10-17
draft: false
categories: 
- Thoughts
images: 
- building2.jpeg
---

{{<
  img
  src="building2.jpg"
  alt="detail of a wood furniture made by Eric Diven"
>}}

I've thought a lot lately about consumerism and how we produce software today. I've tried many times to order my thoughts, but doubts and not enough time are preventing me to find a position that I'm satisfied with. I have decided to release this write prematurely to use it as a foundation for discussion, in the hope that my ideas get sorted.

Consumerism is a complex phenomenon; I have a lot to learn before I'm able to talk about it in a more comprehensive way. Nonetheless, I think it's clear that it concerns not only how society consumes things, but also how society *produces* things.

Producers are involved in consumerism as much as consumers are. They "[encourage the acquisition of goods and services in ever-increasing amounts](https://en.wikipedia.org/wiki/Consumerism)" without thinking about the consequences of this attitude, which ranges from the environment to psychology.

Companies are forced to shape their production process to maintain modern rhythms:

- *they increase the release rate of new products* (or new models of products) even if there's no need for them;
- *they use premature obsolescence* in order to ensure new bought in the short term;
- *they foster a sense of need for their products in consumers* to create desire and to make them buy.

The world is complex and these statements have their exceptions; nonetheless, I consider them valid most of the time. The world of software production suffers from the same pressures of other sectors, and it carries the same flaws too. What I'm wondering is if developers, in their individuality, can influence how they produce software.

I don't think consumerism can be treated separately from the context where it originates, so I don't  believe it will disappear without a radical review of our economy. However, I think it would be wrong to ditch completely small improvements. Daily individual action can, with limits, have an impact on society and it can coexist with a commitment for a more systematic change.

My question is: what can we do? What actions can be taken to resist and mutiny against these practices? What is useful and what is futile, in perspective with a more radical point of view?

I'm still thinking about it; up to now I've found three possible small actions that, if adopted, can improve a little our production process:

- resit rewriting software that already exists;
- resist writing software that has inadequate previous analysis;
- take (and pretend) time to learn from previous solutions.

## Resit rewriting software that already exists

I think many programmers tend to resolve problems already solved by the community many times.

For a developer who has experienced the "javascript fatigue" like me, this concept isn't new. For the ones who weren't there, let me resume: during that period there were daily releases of new javascript tools, every time with little or no difference from the previous ones. Frameworks, CSS systems, state management libraries.. the number of releases was unbearable.

Honestly, the existence of many of these tolls wasn't justified; on the opposite, they made harm to the community by foraging balkanization.

Also, the choice to create many new libraries with little or no difference from the previous ones resulted in a tremendous waste of time and other resources by the javascript community. Every author had to face the same problems, pitfalls, and lessons the other had faced; while it can be a great exercise, during the javascript fatigue this phenomenon went out of control.

The community agreed on considering the fatigue period ended (specially after there are 3 winners in the framework field), but the effects in some sub-regions of the javascript ecosystem are still present. At this moment there are more than five ([1](https://react-hook-form.com/) [2](https://formik.org/) [3](https://final-form.org/react) [4](https://redux-form.com/) [5](https://github.com/tannerlinsley/react-form)) active form libraries only in the React world, and we can't know how many closed source ones are being used. Ironically, I have built my own (closed source) form library at work. We made an internal evaluation and thought that a custom library would have suited our needs better.

While building it, I made the same mistakes the other authors have made: I saw it from the commits of other libraries. Also, by looking at them, I was able to prevent other future problems I would have encountered... what a surprise. Right now, my form library looks like a little Frankenstein's monster: it turned out that my abilities weren't better than the sum of the many programmers that worked together to make those libraries better.

How much time have I wasted by reinventing the wheel, only to give my users a deluding product? I could have chosen an already existing solution and, by slightly bending my architecture to it, I could have given a more complete product, with documentation, bugfix, and updates done by the collectivity. I could have reinvested my time to improve the library I've chosen, so the entire community could have taken advantage of my work and we could have move together towards better products. In a sense, we can say that we could have moved forward as humanity in its complex; I know that to link the human race to React's form may sound a bit dramatic, but I think you get the point.

How often we see programmers work on problems already addressed by existing software, only to "make it in language $x"? Or because they wanted an "unopinionated" solution? Or, simply, because they'll "do it better"? How much time and money are constantly wasted due to this bad habit? How many energies are we subtracting to collective projects that can let us beneficiate from the work of each other and improve our life and our software?

I think that's a shame, and it's programmers' duty to prevent waste and to decide to invest in the community instead of committing a sin of ego and believe to be able to emancipate from the collectivity.

## Resist writing software that has inadequate previous analysis

Even though there's a chance that the "facebook but for ponies" that your company/client has committed to you reach global success and resolve real problems in our society, you may legitimately have doubts about that, whatever role you have in the production process.

Programmers must leave the path to specific figures that know better the market and humans, like UXs and market analysts. With that said, many times those figures aren't included in teams, specially in small companies where they're considered too expensive.

In these situations, problems and inconsistencies are so big and sparkling that no one involved should feel inadequate to criticize them. It's not a programmer task to perform the analysis, but he/she can try to resist working on software that is obviously doomed from the beginning.

Inadequate analysis has effects on how the final software will impact its users too. Even if useful, software with graphic interfaces need to be designed by someone who knows about psychology, usability and user interfaces. Many softwares can actually be useful, but they end up in being designed by developers also in their "human" aspects; interaction design and usability are considered an unmotivated cost (or not considered at all) and all the job is left to programmers and graphic designers.

That leads to software that is comfortless at best, dangerous at worst. If a worker is forced daily to use a tool that gets in his way instead of helping him, consequences in his quality of life will show up quickly. If the potentially dangerous and super expensive medical instrumentation the 8-hour-work tired doctor is using on you provides a user interface that easily leads to errors.. you got the point.

By doing what it's in our hands to resist working on software that has inadequate analysis of usefulness and usability, a developer is just preventing the waste of time and, potentially, worsening of someone else's life.

## Take (and pretend) time to learn from previous solutions

In the rush to produce new products at an ever-increasing speed, contempt for previous solutions is often showed. This is a natural part of the process to instill need and desire. Describing the old product as obsolete, or even poorly designed in the first place, make buying a new one seems more reasonable.

This is just an advertising operation and, in my opinion, it must be condemned when found. But there is another subtle aspect of this point that is worth reporting: even the ones responsible for building new solutions show complete disrespect for old software.

I've seen many times programs that replace old ones without offering all the same features. A seducing aspect and new technologies under the hood are wrongly considered enough to justify new releases, which actually are motivated by a compulsive need to produce unneeded things.

I'm not against new releases if they include new features or are better designed to suit user's needs and goals; but what we often see are just graphic reworks that don't include the knowledge the old software had incorporated during his lifetime.

A software life is composed of many iterations where user's needs lead to constant change. A program that has been used for some years gained an intrinsic knowledge about his user's real necessities; this knowledge is a distillate of human centered design, which has formed during the natural interactions between consumers and producers.

Discarding this knowledge is to disrespect users and force the repetition of learning iteration. It's a waste of time and it develops frustration in our product's user. We should respect old software and, by doing so, free our product from the mistakes of the past and offer pleasing and productive experiences.

We show respect to old programs by taking enough time to learn from them. Interiorizing the knowledge "crystallized" inside them can be seen as a waste of time and money; now I believe it's the opposite.
