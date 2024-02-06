---
title: "Better viewport units for responsive design"
date: 2024-02-01
publishdate: 2024-02-01
draft: false
categories: 
- Notes
tags:
- responsive
- frontend
- CSS
- TIL
---

**The issue is**: using `100vh` as a rule to measure the whole viewport height is just faulty on mobile. Ona side note, I belive most of the times this is a bad idea, and people actually want something different, but let's avoid this topic. 

I encountered this issue again today, where one of the web apps I work on has `100vh` but now has also the need to be more mobile-friendly.

After a couple of polite curses, I leared about the `svh` unit on StackOverflow. After that, a colleague of mine suggestes `dvh` too, so it was time for me to discover these new units. I mean, I've heard about them in the past, but I never had the change to dig into them enough.

`dvh` stands for _dynamic window height_ and takes into account the possible scrollbars and the url bar visible on mobile devices. The "dynamic" part happens when the url bar progressively disappear, usually using some sort of animanimation, whenever the page is scrolled down on mobile. Very useful!

`svh` stands for _smallest window height_ and just return the smallest possible height, which is enough most of the times and allows to avoid some swappy animations related to the change of `dvh` unit.

This video was particularly useful to learn precisely what they do and when to use them. The guy is cool, might be good to follow him.
{{< youtube veEqYQlfNx8 >}}

I ended up using `dvh`, even though it's not what is suggested in the video. The end result was better, but there's probably something I still don't understand.