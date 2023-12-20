---
title: "A case for ergonomic architectures"
pubDate: 2018-10-25
description: "Why developer ergonomics matter when talking about architecture? How do they translate to cost?"
tags: ['architecture', 'tooling']
---
Regardless of scope, time or budget, software needs to be built, and delivered. So what happens when you have to compromise?

Necessary drawbacks are a common concept. We learn that a product can't be good, durable and cheap at the same time, and when faced with the choice, we have to "pick two". But is this necessarily true? *Maybe*.

In software projects those three aspects usually translate to cost, stability and efficacy. This view, however, is very shallow. There are other aspects that factor into the effort and success of software that is built today, and some of it will only manifests tomorrow.

## So, how do we prioritize?

Sometimes, these aspects are essential for your clients, and choosing which ones to prioritize is slightly easier. However, for most projects, all these aspects share a fairly uniform importance and priority. So, how do you know where to invest more time? How do you organize your efforts?

Well, let me give you an answer. Not **the** answer. Just one possible answer:

> Invest into architecture and focus on developer's ergonomics.

While this may all sound silly to you now, I guarantee that this will all make sense when I'm done.

## The complexities of software

Your software will be developed by human beings. And the truth is that we all make mistakes when left alone to do so. So, how do you prevent errors, flaws, leaks, etc? Easy! Don't let them happen.

Software architecture is incredibly important for managing these complexities. From how robust your software is to failures, to how easy it is to extend and change. All aspects relevant to the developers can be correlated to architectural decisions that were made, consciously or not, at some point in time.

## Concern where concern is warranted

You should plan your software like you'd plan for a battle. Divide responsibilities and conquer the problems with the appropriate force.

Clear separation of concerns and responsibilities are very important to drive clarity. Need to query a database and show a chart somewhere? Break it down further: Extract the data in one place, manipulate it in another, display it in yet another place.

This clear separation enables you to break down your code in smaller sections, each with their appropriate level of abstraction. And, as a bonus, if you separated things correctly, you don't need to worry about huge rewrites if your data changes.

If you are thinking that that's awesome, let me push that point even further. Remember all those separate, single-concern functions you are making? Guess how easy it is to write unit tests for them? *Very* easy.

When you stop writing tests that "query a database and shows a chart on the application" and you start making tests for "query a database", "process data into chart-format", "show chart in the front-end" your tests not only become way simpler, they are also way better as documentation.

You can not only achieve stable and secure software with properly separated responsibilities, you can also make your development life much much easier and safe.

Don't set yourself up for failure. Invest more time and budget into making a robust system. Making a good foundation is hard, but you will not regret it after you start stacking functionality on top of it. It's important to deliver. And deliver fast. So invest in your tools and let your developers be as efficient as they can be.

Don't waste your time with weird tangled code-bases. In 10 years you will thank me when you don't have to hire a Senior developer just to read your software. Make your life simpler now and in the future.
