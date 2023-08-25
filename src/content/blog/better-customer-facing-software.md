---
title: "Better customer-facing software"
pubDate: 2023-08-18
description: "Things to keep in mind in order to always write useful software"
tags: ["software", "architecture"]
---

I have been writing code for more than a decade. Languages, tools, and practices have changed and evolved during this time, however, one constant remains: the desire to create useful software.

During the course of my career, my opinions have changed regarding which practices actually contribute to useful software. In this article, I hope to share some of the things I keep in mind to have a higher chance of writing useful software.

## Think about your users

Software can only be useful if it is used. Those that interact with, or consume the outputs from, your software are your users. Their goals and feelings are the most important aspect.

Keep your users in mind when making decisions and writing code.

## Be open to feedback

Your users should be able to give you feedback.

Despite your best efforts to know your users, you will fail. Therefore, you must create mechanisms that allow for your users to correct your assumptions and point your mistakes.

Integrate your user into the software development lifecycle, and integrate user feedback as early as possible.

## Why is more important than how

Your code is a means to an end. Your users and yourself must not be focused on how the code works.

You must remember that your code is trying to achieve something for a reason, capture that.

Your comments, your interface, and your error-messages should all reflect the underlying reasons, not the implementation.

## Fast is better than slow; Slow is better than broken

Your users depend on your software, therefore it must be trustworthy.

Speed is great, but correctness is vital. Your code must be correct, before it is fast.

Integrate correctness checks into your workflow, and make them as quick and frequent as possible.

## Presentation matters

Because your users are important, how you present data is important.

This means that your choices on how to store the data must be aligned with how you plan on presenting it.

Differences between your presentation and your storage schema lead to more complexity, and should be chosen carefully.

## Avoid state

Stateful code must maintain and update data during its operations. This adds more complexity when developing, testing and updating code.

Whenever possible, avoid depending on the state. Additionally, when avoiding state is impossible for the application, separate the code that manages state from the code that consumes/processes it.

## Some techniques to implement today

While the ideas I've presented are general and tool-independent, there are tools and practices in the wild that you can adopt today to better align with these points.

| Technique                                        | What it brings to the table                                                         |
| :----------------------------------------------- | :---------------------------------------------------------------------------------- |
| [Empathy mapping][empathy-map]                   | Document what we know of the users needs and feelings.                              |
| [Stakeholder interviews][stakeholder-interviews] | Capture user-feedback from a larger group without loosing (too much) comparability. |
| [Plain language][plain-language]                 | Improves clarity and readability of written text.                                   |
| [Continuous Testing][continuous-testing]         | Standardize your testing process and increase the frequency of execution.           |
| [UI Prototypes][ui-prototype]                    | Explores usability and guides design of code and data schema.                       |
| [Functional][funcitonal-thinking] core           | Ensures that state manipulation is not performed as part of core logic.             |

[empathy-map]: https://www.mindtools.com/abtn3bi/empathy-mapping
[stakeholder-interviews]: https://cognition.happycog.com/article/better-stakeholder-interviews
[plain-language]: https://www.plainlanguage.gov/resources/articles/elements-of-plain-language/
[continuous-testing]: https://www.techwell.com/techwell-insights/2015/08/part-pipeline-why-continuous-testing-essential
[ui-prototype]: https://agilemodeling.com/artifacts/uiprototype.htm
[funcitonal-thinking]: https://nealford.com/functionalthinking.html