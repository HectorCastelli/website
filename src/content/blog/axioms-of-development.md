---
title: "Axioms of development"
pubDate: 2023-08-18
description: "Things to keep in mind in order to write useful software"
tags: ["software", "architecture"]
---

I have been writing code for more than a decade. Languages, tools, and practices have changed and evolved during this time, however, one constant remains: My desire to create useful software.

During the course of my career, my opinions have changed regarding which practices actually contribute to useful software. In this article, I hope to share some of the things I keep in mind to have a higher chance of writing useful software.

## Think about your users

Software can only be useful if it is used. Those that interact with, or consume the outputs from, your software are your users. Their goals and feelings are the most important aspect.

Keep your users in mind when making decisions and writing code.

## Fast is better than slow; Slow is better than broken

Your users depend on your software, therefore it must be trustworthy.

Speed is great, but correctness is vital. Your code must be correct, before it is fast.

## Why is more important than how

Your code is a means to an end. Your users and yourself must not be focused on how the code works.

You must remember that your code is trying to achieve something for a reason, capture that.

Your comments, your interface, and your error-messages should all reflect the underlying reasons, not the implementation.

## Shorten the feedback loop

Your users should be able to give you feedback.

Despite your best efforts to know your users, you will fail. Therefore, you must create mechanisms that allow for your users to correct your assumptions and point to your mistakes.

Some feedback points can be automated into tests, include these in your development lifecycle and make them as quick and frequent as possible.

## Presentation matters

Because your users are important, how you present data is important.

This means that your choices on how to store the data must be aligned with how you plan on presenting it.

Differences between your presentation and your storage schema lead to more complexity, and should be chosen carefully.

### Avoid state

be stateless if possible, if not, have a single state to manage