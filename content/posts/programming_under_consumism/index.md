---
title: "Programming under consumism"
date: 2020-07-30
publishdate: 2020-07-30
draft: true
categories: 
- Thoughts
---

I've thought a lot lately about consumerism and how we produce software today.

Consumerism is a complex phenomenon. I've got many things to learn before I'm able to talk about it in a more comprehensive way. One thing that, nonetheless, I think is clear, is that it affects not only how society consume things, but also how society *produce* things.

Producers are involved in consumerism as much as consumers are. They "encourages the acquisition of goods and services in ever-increasing amounts" without thinking about the consequences of this attitude, which ranges from environment to psychology.

Companies are forced to shape their internal process of production in order to maintain modern rhytms of production:

- *they increase the release rate of new products* (or new models of their products) even if there's no actual need for them;
- *they use premature obsolescence* in order to ensure new boughts in the short term;
- *they foster a sense of need for their products in consumers* to compensate non-necessity expressed by them.

World is complex and this statements has their own exceptions; nonetheless I consider them true most of the times. The world of software production suffers from the same pressions of the others sectors, and it carries the same flaws too. What I'm wondering is if programmers, in their individual dimension, can have an influence on what they create daily.

I don't think that consumerism can be treated separately from the context where it originates, so I don't  believe it can be cured without a radical review of our economic system. However, I think it would be wrong to ditch completely small improvements. Daily individual action, with its own limits, can have an impact on society and it can cohexists with a commitment for a more sistematic change.

My question is: there's a space where for individual programmers to take action against consumerism? What can we do? What actions can be taken in order to resist and mutiny against these practices? Are that actions useful or they're futile in respect to a more radical point of view?

I'm still thinking about it; up to now I think I've found three possible small actions that, if adopted, can improve a little society:

- resit rewriting softwares that already exist;
- resist writing software without an adequate analysis about user's;
- take time to learn about previous solutions.

## Don't rewrite code that already exists

I think many programmers have the tendency to rewrite pieces of code to resolve problem already resolved by the community many times.

For a programmer like me who has experienced the "javascript fatigue" this concept isn't new. For the ones who weren't there, let me resume: during that period there were daily releases of new javascript tools, every time with little difference from the previous ones. Frameworks, css systems, form libraries, state management paradigms.. the rate of release was unbearable.

Honestly, the existence of many of those software wasn't justified at all; on the countrary, all those libraries/framework make harm to the community by foragins balcanization.

Also, the choice to create many new libraries with little or no difference from the previous ones resulted in a enormous waste of time and other resources by the javascript community. Every author had to face the exactly same problems, pitfalls and lessons the other had faced; while this process can be a great exercise, during the javascript fatigue this phenomenon went out of control.

The community agree on considering the fatigue period ended (specially after there are 3 clearly winners in the framework fields), but the effects in some sub-regions of the javascript ecosystem are still present. At this moment there are more than seven (1 2 3 4 5 6 7) form libraries only in the React world, and we can't know how many closed source form libraries are being used today; however, I have built my own (closed source) form library at work. We made an internal evaluation and tought that a custom form would have better suited our needs.

In the process of building it I made the exact same mistakes the other authors have made: I've saw it from the commits of other libraries. Also, by looking at them, I was able to prevent other future problems I would surely had to address... what a surprise. Right now my form library looks like a little Frankenstein's monster; it turns out that my own abilities weren't better that the sum of the many programmers that worked togheter to make those libraries better.

How much time have I wasted by reinventing the wheel, only to give my users a deluding product? I could have chosen an already existing solution and, by slightly binding my architecture to it, I could have given a more complete product, with documentation, bugfix and updates done by the collectivity. I could have reinvested my time to improve the library I've chosen, so the entire community could have take advantage from my work and we could have move togheter towards better products. In a sense, we can say that we could have moved forward as humanity in its complex; I know that to link human race to React's form may sound a bit dramatic, but I think you get the point.

How often we see programmers work on problem already addressed by existing software, only in order to "make it in language $x"? Or because they wanted an "unopinionated" solution? Or, simply, because they'll "do it better"? How much time and money are costantly wasted due to this bad habit? How many energies are we subtracting to collective projects that can let us beneficiate from the work of each other and improve our life and our software?

I think that's a shame, and it's programmers duty to prevent waste and to decide to invest in the community instead of committing a sin of ego and belive to be able to emancipace from the collectivity.

## Resist writing software that have inadequate previous analysis

Even though there's a chance that the "facebook but for ponies" that your company/client has committed to you reach global success and resolve real problems in our society, you may legitimaly have doubts about that, whatever role you have in the production process.

Programmers must leave the path to specific figures that knows better how the market and humans work like UXs and market analysts. With that said, many times those figures aren't included in teams, expecially in small companies where they're considered too expensive.

In these situations, problems and inconsistencies are so big and sparkling that no one involved should feel inadequate to criticize them. It's not a programmer task to actually perform the analysis, but he/she can try to resist on working on softwares that are clearly doomed from the beginning.

Inadequate analysis has effects on how the final software will impact its users too. Even if useful, a software with a graphic interface needs to be designed by someone who know about psycology, usability and user interfaces. Many softwares can be actually useful, but they ends up in being designed programmers even in their "human" aspects; interaction design and usability are considered an unmotivated cost (or not considered at all) and all the job is left to programmers and graphic designers.

That leads to softwares that are comfortless at best, dangerous at worst. If a worker is forced to use daily a software that get in his way instead of helping him, consequences in his quality of life will shows up quickly. Also, if the potentially dangerous and super expensive medical instrumentation a 8-hour-work tired doctor is using on you provides a user interface that easily leads to errors.. you got the point.

I often find myself making comparison with house builders: should a builder stop working when he find out that the projects of what he's building makes no sense? Should he stop if he finds out that this building may easily collapse on his inhabitants? If he has no buildings projects, he has to accept to make them itself even if he's not educated nor trained to do so? I fear that in the real world it's not easy to answer these questions, but in the field of programming probably these answers wuold be exactly the opposite of the ones that should ideally be given.

By doing what it's in our hand to resist working on software that has inadeqate analysis of usefulness and usabilty, a programmer is just preventing a waste of time and, potentially, the worsening of someone else's life.

## Take time to learn about previous solutions

This action works both ways: if you're a programmer it's your duty to analyze previous solutions, but also you have to pretend the time to do so.



