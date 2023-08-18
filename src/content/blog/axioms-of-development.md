---
title: "Axioms of development"
pubDate: 2023-08-18
description: ""
tags: ["software", "architecture"]
---

These things make sense as rules of thumb in any level of abstraction.

These are more true for "customer-facing" software than purely mathematical or statistical programs.

## Avoid state

be stateless if possible, if not, have a single state to manage

## Shorten feedback loop

Make code easier to test, make tests fast

## Presentation matters

Data schema needs to work well with presentation, and presentation needs to be supported by schema.

Every time the presentation veers from the data schema, more complexity (parallel requests, deep fetching, joins) is added.