---
title: "Your split backlog is failing your team"
pubDate: 2023-08-07
description: "How poorly-communicated priorities poison organizations and lead to under-performing teams"
tags: ["planning", "software"]
---

As companies scale, the size of initiatives they can take on increases,
as does the complexity. The scales of teams (their size, and diversity) forces
companies to reconsider how they communicate the intent and strategy behind
their product changes.

## Starting with a backlog

The common approach to capture the scope and communicate the priority of work
items is the backlog: A sorted list containing all work items required to be
completed, ordered by a combination of value, priority, timeliness, and feasibility.

This backlog should be a guide for the teams executing the work. Additionally,
a healthy organization will allow for teams to make decisions regarding how they
execute the work from the backlog. Some examples of these decisions are:

- **Changing the execution order**: Given two work items of similar scope and
  value, but one of them is blocked, the team will chose to take the unblocked
  one and postpone the other;
- **Discovering details**: Given a work item that is not clearly understood,
  the team may choose to delay the execution, and spend more time trying to
  discover the missing or incomplete information;
- **Cancelling work**: Given a work item that implements a feature that already
  exists elsewhere, the team will cancel the immediate work item and spend their
  energy elsewhere.

## Dealing with complexity

As the nature of work increase in complexity, things get harder to prioritize.
Since [humans like to categorize](https://www.scientificamerican.com/article/wired-for-categorization/),
the "categorized backlog" appears as a way to simplify the prioritization and
planning process.
This pattern usually manifests with the creation of "parallel" backlogs,
managed by different group of stakeholders, which cover one area or type of work.

Two very frequent occurrences are: Product vs. [Tech-Debt](https://martinfowler.com/bliki/TechnicalDebt.html);
and the "one backlog per feature" approach.
If you work on a multidisciplinary team, these probably exist within your organization.

Categorizing is useful, and the benefits are apparent for conversations regarding scope, relative value, and priority:

- By keeping similar items together, the discovery of details regarding scope, user-base, or impact is easier. The likelihood of those involved having expertise, or access to experts, greatly improves the quality of the analysis regarding work items.
- When the resources required or the impact are similar, the stakeholders are able to hold more focused conversations when negotiating the order of work items.

The reasoning is clear: **Working on similar items allows for better, or at least more predictable, information quality**.

## The undesirable effects

Unfortunately, this approach has three common side-effects: Alienated stakeholders; Short-sighted prioritization; and Confusion regarding priorities.

### Stakeholder alienation

Stakeholders accountable for specific areas of a backlog may be alienated to the needs of other stakeholder or the organization. As they work on refining and prioritizing their specific section of the backlog, their view (and subsequently the way they communicate) regarding priorities becomes biased.

A common consequence of this is the use of "First-priority", without the full context of the other initiatives. This, in turn, results in a loss of credibility and impact regarding the information presented.

### Short-sighted prioritization

Stakeholders accountable for specific areas of a backlog may be alienated to the needs of other stakeholder or the organization. This loss of visibility regarding the impact to the overall organization can lead to missed opportunities or an incorrect perspective regarding value.

Visibility of other team's work is also important to identify opportunities to gain more with less: do less repeated work, increase return on investment, free up resources.

This is a risk when conversations happen too late, or not at all.

### Confusing priorities

Contrary to the effect on those discovering work items, teams executing work items will still deal with the full complexity and scope of the multiple work items.

Additionally, as priorities are presented, there may be no clear way to distinguish which of the "first priorities" is the *firstest*.

## An example

Imagine a retailer that has physical and digital presence. In this retailer, two groups of stakeholders are refining features, one focusing on the digital experience, and one focusing on the physical experience. The two teams have their own way of visualizing their features, separated from the other group.

This is the (aggregated) list of initiatives for each stakeholder group:

| Stakeholder group | Initiative               | Revenue growth | Prerequisites   |
| :---------------: | ------------------------ | :------------: | --------------- |
|      Group 1      | Time-based notifications |       3%       |                 |
|      Group 1      | Targeted emails          |       2%       |                 |
|      Group 2      | In-store digital coupons |      10%       | Targeted emails |
|      Group 2      | Store greeters           |       1%       |                 |

Keep in mind that a table like the one above is not available to any of those involved, and is here to illustrate the scenario to you, the reader.

For the first group, the "Time-based notifications" initiative should be the first priority. While for the second group, the "In-store digital coupons" is the way to go, but needs some work to happen before it can be delivered.

Without the collaboration between the two groups of stakeholders, the teams involved in the execution hear the following statements:

> First group: Team, please focus on time-based notifications as your top priority.

> Second group: Team, we want you to enable in-store digital coupons as soon as possible. We know this requires targeted emails, so please tackle that first.

With this level of information, the correct course of action is not clear to the team, and therefore there is risk that it will not be executed.

### Likely outcomes and their risks

Let's assume that:

- the team only has the capacity to execute on two of these initiatives immediately;
- all initiatives are about the same in terms of effort required;
- the team believes wants their choice to make both groups of stakeholders happy;

With this in mind, here are the likely choices and their implications:

#### Scenario one

The team picks "Time-based notifications" first, since it doesn't have dependencies and was explicitly asked for by the stakeholders of group one.

Then, then they choose "Store greeters" second, as it is the only task from group two without dependencies.

![Scenario one][scenario-one]

This means that the most important activity from the second group is now blocked by it's dependency for an extra cycle, meaning that the value add is delayed and the business suffers for it.

#### Scenario two

The team chooses to execute "Targeted emails" to tackle the dependency first.

Since that task is also an ask the first group of stakeholder, they also add "Store greeters" from the second group of stakeholders.

![Scenario two][scenario-two]

Regardless of the intentions, the first group of stakeholders may feel like their priorities were not heard. The team is also more stressed, which affects the business due to [lower productivity, lower quality, and higher attrition](https://arxiv.org/pdf/1701.05789.pdf).

## Consequences

Despite the mistakes in the above example being simple to spot, things are often more complicated in the real world. Additionally, some of the effects are more subtle, and much more threatening to the life of an organization.

### Creating inequity

When the responsibility of executing work items is assigned to the teams, the stakeholders retain accountability. However, due to the lack of clarity, things that might be obvious to the stakeholders are not to the teams. This means that those responsible for the work are unclear on the priorities that those accountable will ultimately judge them on.

### Harms psychological safety

The inequity opens the door for toxic behaviors between the stakeholders and the teams. This harms psychological safety in the organization.

### Fostering risk avoidance

Psychological safety is [essential for innovation](https://www.thoughtworks.com/en-es/insights/blog/product-innovation/psychological-safety-product-innovation). By harming it, teams are discouraged from sharing ideas, questions, concerns or making mistakes.

The fear of making mistakes leads teams to avoid taking risks whenever possible.

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
- ["Why Multitasking Doesn't Work" by Douglas Merrill](https://www.forbes.com/sites/douglasmerrill/2012/08/17/why-multitasking-doesnt-work/).

In reality, teams work with more fluidity, and implementing quotas can make it
difficult to make the right choice. Forcing this constraint on the teams will
lead to frustration, or worse, wasted effort.
Instead, define goals for your team at a time-resolution larger than their
unit-of-planning, which is usually sprints. Importantly, these goals should be
feasible, even when taking into account all the other initiatives that will be
worked on.

### 👍 Do: Provide clear information

Make sure that the teams are able to access the relevant information to make the
correct calls.

Document the expected value, impact, and the dependencies.
Prefer searchable and linkable formats that facilitate the discovery of this
information instead of relying on word-of-mouth or fractured sources of
information. Regardless of how your team works, the reasons behind the execution
should be clear.

Usually, this boils down to "delete your multiple excel files and use your
JIRA tickets".

### 🙅 Do not: Ask for work before prioritization

Do not fall back into the previous model, where each stakeholder fights for
attention and confuses the teams regarding what's next in the roadmap.

For some teams, this means "align with the project manager first," using them as
a safety layer in front of the team. For others, it means refusing to work on
unprioritized initiatives.

### 👍 Do: Allow teams to safely decide

Allow teams to make decisions based on the information provided, without fearing
for their jobs if they make a mistake.
Foster [psychological safety](https://www.themuse.com/advice/effective-teams-psychological-safety-in-the-workplace),
and make sure that when things don't go as planned, you learn from the mistakes
and move past them without assigning blame.

## Revisiting the Example

In the example, the way priorities were communicated was not clear and the team
implementing the changes was the one ultimately making the decision on which
feature they would tackle first, without the necessary knowledge to do so.

If the mitigating measures above were implemented, the conversations to
determine priorities could have been closer to the optimal choice.

When analyzing all initiatives together (as we did with the table of all the
initiatives and their values), we would see that the most valuable piece was
"In-store digital coupons".
We would also notice that it requires the work for "Targeted emails" to be
complete before it begins.

The team picks "Targeted emails" first, to tackle the dependency of the
most-valuable feature. This enables the business to deliver massive value in the
next period.

Since the priorities are clear and the team feels empowered to make a
non-obvious choice:
To minimize context changes and to avoid blocking, the team chooses to
tackle "Time-based notifications" next.
This means that in the next period, "In-store digital coupons" and "Store greeters"
would be tackled together.
This in theory also reduced cognitive load for the next cycle.

![Revisited roadmap][revisited-roadmap]

[scenario-one]: /images/content/blog/your-split-backlog-is-failing-your-team/scenario-one.mmd.svg "Scenario one: The most valuable feature is left to the last moment, and the business suffers for it."
[scenario-two]: /images/content/blog/your-split-backlog-is-failing-your-team/scenario-two.mmd.svg "Scenario two: The team tries to balance stakeholders and they suffer with change of context."
[revisited-roadmap]: /images/content/blog/your-split-backlog-is-failing-your-team/revisited-scenario.mmd.svg "A possible solution: The team focuses on similar tasks, ensuring that value is delivered timely and with less stress."
