---
title: "Why everyone needs to talk about roadmaps"
pubDate: 2025-07-10
description: "How can you make your team effectively use your roadmap?"
tags: ["career", "planning"]
---
Over the course of the years, the way we build software has changed.
Starting at the waterfall approach -that emphasized planning and process over flexibility-, passing through a rebellious phase that culminates with the introduction of a more agile mindset -that adopted more streamlined processes that put communication and flexibility at the forefront.

This story, however, is only true for those that succeeded in shedding their dusty process-heavy skins. For most, it all stopped with *Scrum*, or more accurately, *scrum-fall*.

So, unless you are working at one of those hip and cool companies that is truly agile, you probably are familiar with the woes of planning. This article is my attempt at convincing you, regardless of your role in the planning process, that you should throw away some of the process, and leverage communication instead.

Let's assume you already know enough about your users to make informed decisions. (Otherwise, we might as well roll a dice for every planning decision you face, and the odds of you choosing the most impactful change are about the same.)

In this context, armed with the knowledge and the research regarding the value and the impact of the possible changes, how do you choose the order we should tackle things?

## Document value and impact

First, capture the expected value and impact. Write this down in a way that is easy to reference and compare. Exact values are not recommended, abstract it away to a level where you can still compare two options, without getting stuck comparing things that are orders of magnitude below your target.

For example, given the following features and their expected impact:

| Feature | Revenue Growth | Users Impacted |
| --- | --- | --- |
| Feature 1 | $12000 | 60% |
| Feature 2 | $12500 | 50% |
| Feature 3 | $5000 | 90% |

You may want to represent these values with a lower resolution:

| Feature | Revenue Growth | Users Impacted |
| --- | --- | --- |
| Feature 1 | Big | Medium |
| Feature 2 | Big | Medium |
| Feature 3 | Medium | Big |

This saves you time discussing if the 10% impact of the extra 10% of your users from "Feature 1" really is more important than the $500 from "Feature 2". Instead, you can agree that they are equivalent.

## Prioritize across features

Now that you have the means to compare and decide which features should be first, make sure to not simply sequence them without giving it some thought.

Aside hard-dependencies, when most of your options are parallelized, you want to look at them at a higher level and identify opportunities: **Problems that have the same root cause**; **Features that address the same problem**; **Features that simplify other features**; **Smaller implementations that validate unknowns**. These are the types of things you want to highlight and communicate.

## The most important part

Make sure all of this is not only captured and shared in small circles. Disseminate the information and make sure that not a single key is pressed without the awareness of the value and impact of the work.

Keep an open channel to spread this information, as well a channel to challenge it. You don't want to be the only one allowed to think about clever solutions or edge-cases. Let your team contribute with their own ideas and insights. Sometimes, only those closer to the code or to the customers can see opportunities.

## And when your plan ultimately falls apart...

All of this communication and information now allows your team, at every level, to make responsible decisions.

We know plans don't always come to fruition and that blockers can appear for a multitude of reasons. With this knowledge at-hand, your team is allowed to make informed decisions, even during a crisis.

When the time comes that something needs to be prioritized, or that an unforeseen problem appears, you will be glad that your team know the value expected, as well as what else they [can **not** do](https://taylor.town/shave-a-yak).