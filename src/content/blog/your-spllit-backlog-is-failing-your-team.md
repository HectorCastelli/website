---
title: "Your split backlog is failing your team"
pubDate: 2023-07-24
description: "How poorly communicated priorities poison organizations and lead to underperforming teams"
tags: ["planning", "software"]
---

As companies scale, the size of initiatives they can take-on increases, as does the complexity. While ad-hoc decisions could work for small companies, the scale of teams (their size, and diversity) forces companies to reconsider how they communicate intent and strategy regarding their product changes.

## Starting with a backlog

The common approach to capture the scope and communicate the priority of work items is the backlog: A sorted list containing all work items required to be completed, ordered by a combination of value, priority, timeliness, and feasibility.

This backlog is meant to be used by the teams executing the work as a guide. A healthy organization will allow for teams to make decisions regarding how they execute the work from the backlog. Some examples of this are:

- **Changing the execution order**: Given two work items of similar scope and value, but one of them is blocked, the team will chose to take the unblocked one and postpone the other;
- **Discovering details**: Given a work item that is not clearly understood, the team may choose to delay it's execution, and spend more time trying to discover the missing or incomplete information;
- **Cancelling work**: Given a work item that implements a feature that already exists elsewhere, the team will cancel the immediate work item and spend their energy elsewhere.

## Dealing with complexity

As the nature of work increase in complexity, things get harder to prioritize. Since [humans like to categorize](https://www.scientificamerican.com/article/wired-for-categorization/), the "categorized backlog" appears as a way to simplify the prioritization and planning of work. This pattern usually appears with the creation of "parallel" backlogs, managed by different group of stakeholders, which cover one area or type of work.

Two very frequent occurrences are: Product vs. [Tech-Debt](https://martinfowler.com/bliki/TechnicalDebt.html); and the "one backlog per feature" approach. If you work on a multidisciplinary team, these probably exist within your organization.

Categorizing is useful, and the benefits are apparent for conversations regarding scope, relative value, and priority:

- By keeping similar items together, the discovery of details regarding scope, user-base, or impact is easier. The likelihood of those involved having expertise, or access to experts, greatly improves the quality of the analysis regarding work items.
- When the resources required or the impact are similar, the stakeholders are able to hold more focused conversations when negotiating the order of work items.

The reasoning is clear: **Working on similar items allows for better, or at least more predictable, information quality**.

## The undesirable effects

Unfortunately, this approach has three common side-effects: Alienated stakeholders; Short-sighted prioritization; and Confusion regarding priorities.

### Stakeholder alienation

Stakeholders accountable for specific areas of a backlog may be alienated to the needs of other stakeholder or the organization. As they work on refining and prioritizing their specific section of the backlog, their view (and subsequently the way they communicate) regarding priorities becomes biased.

One very common manifestation of this is the usage of "First-priority", without the full context of the other initiatives. This, in turn, results in a loss of credibility and impact regarding the information presented.

### Short-sighted prioritization

Stakeholders accountable for specific areas of a backlog may be alienated to the needs of other stakeholder or the organization. This loss of visibility regarding the impact to the overall organization can lead to missed opportunities or an incorrect perspective regarding value.

Visibility of other team's work is also important to identify opportunities to gain more with less: do less repeated work, increase return on investment, free up resources.

This is a risk when conversations happen too late, or not at all.

### Confusing priorities:

Contrary to the effect on those discovering work items, teams executing work items will still deal with the full complexity and scope of the multiple work items.

Additionally, as priorities are presented, there may be no clear way to distinguish which of the "first priorities" is the *firstest*.

### An example:

Imagine a retailer that has physical and digital presence. In this retailer, two groups of stakeholders are refining features, one focusing on the digital experience, and one focusing on the physical experience. The two teams have their own way of visualizing their features, separated from other groups.

This is the (aggregated) list of initiatives for each stakeholder group:

| Stakeholder group | Initiative | Revenue growth | Prerequisites |
| :---: | --- | :---: | --- |
| Group A | Time-based notifications | 3% | | 
| Group A | Targeted emails | 2% | | 
| Group B | In-store digital coupons | 10% | Targeted emails | 
| Group B | Store greeters | 1% | | 

For "Group A", the "Time-based notifications" initiative should be the first priority. While for "Group B", the "In-store digital coupons" is the way to go, but needs some work to happen before it can be delivered.

Without the collaboration between the two groups of stakeholders, the teams involved in the execution will hear the following statements:

> Group A: Team, please focus on time-based notifications as your top priority.

> Group B: Team, we want you to enable in-store digital coupons as soon as possible. We know this requires targeted emails, so please tackle that first.

## Consequences

### Create inequity

When the responsibility of executing work items is assigned to the teams, the stakeholders retain accountability. However, due to the lack of clarity, things that might be obvious to the stakeholders are not to the teams. This means that those responsible for the work are unclear on the priorities that those accountable will ultimately judge them on.

### Harming psychological safety

The inequity opens the door for toxic behaviors between the stakeholders and the teams. This harms psychological safety in the organization.

### Fostering risk avoidance

Psychological safety is [essential for innovation](https://www.thoughtworks.com/en-es/insights/blog/product-innovation/psychological-safety-product-innovation). By harming it, teams are discouraged from sharing ideas, questions, concerns or making mistakes.

The fear of making mistakes encourages teams to take as little risk as possible.

### Poisoning communication

Poor communication regarding priority causes communication with stakeholders to be poisoned. By failing to clarity priorities and value, teams lose trust in their stakeholders.

This impact is not only present while the undesirable side-effects are present, but also afterwards (and in some cases even after switching companies or teams). This means that extra effort will be needed to regain trust.

## Mitigating

### 👍 Do: Analyze initiatives holistically

Include in your processes checkpoints, where the multiple initiatives are discussed as a whole by all stakeholder groups. For those organizations that do some form of capacity planning, this is a good moment to hold these conversations.

In these conversations the matters regarding **scope and impact should already be clear**, and the stakeholders should focus instead on identifying dependencies and opportunities for minimizing duplicate work.

### 🙅 Do not: Assign quotas

When communicating with the teams, avoid communication that relies on "quotas" for each feature. This approach relies on the misconception that multitasking works, but it doesn't:

- ["You Can’t Multitask, So Stop Trying" by Paul Atchley](https://hbr.org/2010/12/you-cant-multi-task-so-stop-tr)
- ["Why human brains are not designed to multi-task" by Julia Thomas](https://brainfodder.org/multi-tasking-doesnt-work/)
- ["Multitasking isn't working: a science-backed approach to a better day" by Allaya Cooks-Campbell](https://www.betterup.com/blog/multitasking)
- ["Why Multitasking Doesn't Work" by Douglas Merrill](https://www.forbes.com/sites/douglasmerrill/2012/08/17/why-multitasking-doesnt-work/).

Realistically, teams work with more fluidity and quotas make it difficult to make the right choice. Forcing this constraint on the teams will lead to frustration, or worse, wasted effort. Instead, define goals -These should be feasible, even when taking into account all the other initiatives that will be worked on- for your team at a time-resolution larger than their unit-of-planning, which is usually sprints.

### 👍 Do: Allow teams to safely decide

Make sure that the teams are able to access the relevant information to make the correct calls.

Document the expected value, impact, and the dependencies. Prefer searchable and linkable formats that facilitate the discovery of this information instead of relying on word-of-mouth or fractured sources of information. Regardless of how your team works, the reasons behind the execution should be clear.

Usually, this boils down to "delete your multiple excel files and use your JIRA tickets".