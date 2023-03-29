---
title: "Lessons learned from building a CMS"
pubDate: 2018-11-05
description: "Building a CMS from scratch is a big endeavour, but is it worth it?"
tags: ['web-development', 'tooling', 'architecture']
---
I've always had trouble picking a framework and sticking to it. I would research my options and pick the one that looked to be closer to my needs. Shortly after, I would start looking around and see this vast sea of GitHub repositories, stack overflow circles and subreddits for tools and solutions that seemed to solve all my problems (until further digging proved otherwise).

Frustrated by the sheer amount of options available, I finally realized that no one out there has the same needs as I do. Hence, no way they can solve all the problems I face. If that was the case, then why choose something someone else made? After all, highly specific problems may require highly specific solutions.

On my quest to find the perfect framework I started to explore multiple options, picking up points and features I deemed life-changing. This paired with analysis would lead me to understand why that feature exists and how it's orchestrated in the background.

Just like buildings, most of the time there are plans and blueprints behind the code. But not always. Especially when a house is planned by someone that has yet to face problems. You don't know what you don't know. You can't plan a building to withstand something you never knew existed.

So, being the expert in my own problems, I felt I could do me a much better service if I just stopped looking out and started drawing from within. This is how I started to create my own Content Management System (CMS).

## My naive plan

Here is the list of features I desired:

 - Easy to deploy
 - Self-contained
 - Custom data-types
 - Easy to extend
 - Easy to "theme"
 - Easy to manage
 - Secure administrative panel
 - Low cost

As you can see, there is no real concern with an easy-to-use administrative panel. Since this would only be used by my colleagues that can't go directly to the database and edit the data through it.

## Learned lessons

Let me share with you the lessons I learned.

### Lesson 1: Auto-generation is great!

The main concern I had when coming up with how I would structure my database is the fact that I wanted to use this project for multiple end-products. Since this was the case, a single rigid table structure would be unusable.

To achieve this I decided that configuring the database should be part of configuring the application. This is why I adopted rigid model-files that describe the structure of the tables in the database and how they work together.

With technology like Sequelize, translating this from JavaScript to actual tables on an actual DB is easy. I imagine that with other ORMs the task will also be trivial.

### Lesson 2: Bare-bones comes at a cost.

What would be the point of customizing the database in a CMS if I couldn't customize the front-end to reflect my desires and data-relationships? Obviously, the answer is 'None'. So I decided to leave all the front-end customization to the end-user.

Most CMS's come with templates and a 'starter-kit' of pages but this becomes impossible if I need to have no expectations. The systems are incredibly easy to extend thanks to template engines and JS magic but I don't expect anyone to just pick it up and start working with it.

### Lesson 3: Don't try to predict too much.

In a project of this nature, it's quite understandable that I would spend half of my time thinking if what I'm about to code fits the bill for my goals and what impact it will have on other aspects of the system.

This would be perfectly acceptable if this was a solid, rigid system. But when you have to take into account that anything can be built out of this, you start to face real challenges when assessing the impact of features or style-changes.

## Conclusions

This should come as a surprise to no one but I'll say it anyway: If you don't know what you are doing, don't try to make a framework.

I don't want this article to inspire you to run out and code your own framework if you aren't ready. The nature of frameworks is that they are only as good as those who built them, and they can only serve best their creator's purposes if their creators are capable of it.

If you think your current system limits you too much and feel comfortable expanding beyond ready-made systems, by all means, do it. It will be a long journey but I guarantee that it will be worth when you finish it. *If* you finish it.

As an alternative, look for plugins that do what you want, or make one. Most modern frameworks are somewhat hackable and the experience of extending a code base someone else made is invaluable.