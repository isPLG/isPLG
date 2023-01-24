---
layout: $/layouts/post.astro
title: Growth Data Ecosystem - The Key to Successful a Growth Strategy
description: Growth Data plays a critical role in developing and executing a successful PLG stratrgy. Learn how our experiment generated $60k ARR applying Product, Marketing, Sales and External data.
tags:
  - plg
  - product led growth
  - data
author: Vivek Sinha
authorTwitter: 
date: 2023-01-23 15:30:00
image: https://user-images.githubusercontent.com/23644719/213772223-a2c7a99f-2d11-4616-ac0c-8076c5867ed3.jpg
category: PLG
---


## Introduction

Attempting to adopt Product Led Growth model without a sound Growth Data Strategy (Collection → Analysis → Publishing → Discussion → Action) is like flying a ✈️ without a GPS - you may end up at at your destination but it will be pure luck.

### Loops - The Core Concept of Product Led Growth

At the center of PLG lies the underpinning concept of “compounding growth”. What that means in simple terms is that your product acts as an acquisition engine. The example below demonstrates a simple scenario of how one such loop works for a business intelligence tool.

### Example: PLG in a Business Intelligence Platform**

*An artifact produced using the product can act as an asset that helps new people (prospective users) discover your product. These new prospects then sign up or further share the artifact helping more prospective users discover the product. A single artifact produced by a user on your product is able to get multiple new signups.* 

![example-PLG-growth-loops-in-action](https://user-images.githubusercontent.com/23644719/214160685-c773494f-e237-4e8c-bc1f-f0ba30359d61.png)

---

### Growth Coefficient

This concept of incrementally increasing growth is often referred to as a “**growth *loop***”. Measuring the success of these loops requires measuring how well are your loops able to achieve new conversions. 

This number is often referred to as the “viral coefficient”. I hate the term `viral` and I’ll refer to it as the `growth` coefficient.

## Why PLG `requires` Data?

PLG is almost entirely based on the concept of **loops** and their application in various **product flows](https://isplg.com/blog/what-is-plg/)**.

Before we get into how data guides PLG, there is just one thing that we need to state as clearly as we possibly can. 

**PLG is a company strategy**. 

> PLG is company strategy and for it to be successful, various parts of the business need to align towards a common outcome.

You can read more about it in our previous post, **[What is PLG](https://isplg.com/blog/what-is-plg/)**. If you prefer to rather listen, we go over this in our first episode of **[isPLG podcast](https://isplg.com/podcast/introducing-isplg/)**.

A solid PLG Strategy demands a clear understanding of where these growth loops apply in your product, personalizing them based on user metadata, measuring the performance of existing loops and discovering opportunities to create new loops. All of that requires web, product, marketing, sales and external data.

## Growth Data Ecosystem

Growth Data can come from various parts of the business and can be grouped into the following 4 categories:

1. **Product Analytics**: This includes data around the usage of tye products. The raw form of product data is often event based - i.e. each page view, click, action, milestone etc are specifically tagged with unique identifiers. Each such event is a row in the database. Both raw event data and aggregated forms of it are critical to the growth function.
    1. **Aggregated Product data** is often found the form of Monthly Active Users, Daily Active Users, Churn Rate, Retention Rate, Activation Rate and so on. 
    
    2. **Raw Product Data** is often used to measure experiment success, usage of a particular feature, to connect a sequence of events and measure their frequency, and, in advanced use cases, to deliver near real-time personalization. These are the metrics and use cases you are less likely to hear unless you work closely with the Growth or Analytics teams.
    
    Making both raw and aggregated product data available for teams requires a solid ETL strategy and tool selection. A Head of Growth Data should focus on this and work with the Data Engineering team(s) to make it available for Growth and other teams to use.
    
2. **Web Analytics Data** is everything that you are capturing about how visitors spend time in your website. It includes the marketing website and often also the product website. Know what content visitors are interacting with, which signup buttons are working well, which placement of call to action is the best, which step of the signup flow has high abandonment rate are some of the typical questions that Web Analytics Data can answer. 

Many refrain from adding web analytics tools to their SaaS app (i.e. what you see after you log in) for privacy and speed concerns. Personally, I think that school of thought is plain foolish. 

You see, product analytics tools are designed as logging tools recording every action independently. You need to use complex SQL over terabytes of log type data to join those individual actions and recreate the sequence of events that you are interested in.

The design and generic implementation of Web Analytics products like Google Analytics makes it extremely easy to measure the performance of in product funnels / loops / workflows. This saves hours in writing complex SQL queries to get that same insight from product analytics tools.


3. **Marketing Analytics Data** refers to data from systems (like Mailchimp, Hubspot, Clearbit, LinkedIn Ads, Social Channels etc) that shows how existing users, newsletter subscribers, B2B leads, event attendees etc are engaging with your content when the outreach channel is not your own website. Marketing data is beyond essential for both New Users as well as Existing Users.

    1. **New Users:** For acquiring new users, it's essential to understand what content and in what channel is working well. 
    For example: A 1000 word article may work very well on reddit while failing to get any engagement on Facebook. Furthermore, how new users use the platform and whether they turn into long term users are essential to understand the true value of the acquisition channel from which they were acquired.
    
    2. **Existing Users:** The successful adoption of a SaaS platform requires Onboarding, Engagement, Activation, Churn Prevention and Monetization campaigns. Each of these are typically delivered via email as well as in product prompts. 
    For example: A user who hasn't opened any onboarding emails since sign up may not be able to realize the full value proposition of your product. An analysis of engagement with emails can point to who the ideal customers of a business are. They can also function as signals for Churn Prevention campaigns like in-product banners or Customer Success outreach.
    
4. **Sales Analytics Data** is the data that a business collects about their existing B2B customers, the existing contracts and subscriptions, leads they are currently engaging with to sell, the leads that they are “warming up” for future pipeline, companies or accounts of their interest etc. B2B is where most SaaS tools make the “big money”. The sales process involves humans and human workflows. It is essential to measure the speed and effectiveness of these workflows. Specifically for Growth objectives, it is critical to record and analyze what drives B2B sales snd what.

5. **External Data** refers to additional data that a business acquires (paid or public) in order to gain a higher level of visibility on account (i.e. a company), users and topics of interest. A few examples here are:
    1. **Data Enrichment** tools like Clearbit provide a host of information about a person, a company and an anonymous web visitor with simple inputs like an email address or ip address.
    2. **Intent Signals** are third party data that can give you an idea about which companies are looking to purchase a solution that you are selling.

---

## How does it all come together in practice?

Growth Data plays a major role in the development of a solid PLG Strategy and the execution of Growth initiatives. When applied efficiently, Growth Data can not only describe the performance of the business but also reveal hidden growth opportunities that may exist within the product.

![Growth-Data-Ecosystem-is-the-backbone-of-a-solid-PLG-strategy](https://user-images.githubusercontent.com/23644719/214161031-bb6269c3-9c9a-4e46-bcdd-8b13c8a8c3cb.svg)

Some of the usual applications of Growth Data that you may be familiar with are:

- **Reporting & Monitoring:** Reporting on user growth, engagement, feature adoption, retention and off-product engagement are essential to keep tabs on how the business is performing. A rigorous reporting process can usually identify adverse trends before they become a problem. A good practice that successful Growth Data teams follow is to hold a Monthly Business Review (MBR) to go over adverse trends in cross-functional setting.

- **Determining Growth Coefficient:** Success of various growth centric features require the use of web, product, marketing and sales data to calculate the operating coefficient of your growth loops. Like one monitors the temperatures near a nuclear reactor for early signs of leak, a growth leader must keep an eye on the growth coefficients of major growth centric features for early signs of success, failure and cannibalization by other features.

- **Customer Journey Mapping:** Mapping how users discover your product, become active users, find extended use case cases, upgrade/downgrade plans and become a high-value Sales account requires stitching together Web, Product, Marketing and Sales data to built an end-to-end picture of a user's journey. Mapping this journey can provide valuable insights about bottlenecks, slow activation, points of churn, and prime monetization opportunities. Needless to say, it is **CRITICAL** for developing growth loops (or funnels if applicable) at the right points of customer journey.

Beyond that, here is a **real life case study** of the critical role data plays in Growth initiatives and how various parts of the business contribute to achieve a common growth objective.

## Case Study: How we made $60k ARR in a week with PQLs

Back in 2019, Amandeep and I were discussing **how we could increase upgrades from free to paid plans at GitHub**. We had just finished delivering a machine learning based lead scoring algorithm that reduced Sales Team’s workload by 70% while increasing the % of qualified leads handed off to them. Essentially, our algorithm was seriously good at predicting if a lead qualifies for a Sales touch from a human. We figured we could use a similar methodology to *identify Product Qualified Leads (PQL) and reach out to them with a proposition to upgrade*.

One unique characteristic that set our team apart from others is that we would **think like product owners, analyze data like data scientists and execute like software engineers**. You will see the elements of these throughout this case study.

### The problem 
As a part of monitoring that we had set up, we noticed a we noticed a moderate decline in the revenue originating from one of the plan upgrades. Upon further research we understood that this decline started after a recent change in pricing plans which made our freemium offering a lot more robust.

### How we surfaced the problem
We discussed this in our periodic Monthly Business Review (MBR) and brought it to the attention of the senior most leadership.

### Our proposed solution 
We don’t jump to solutions. Instead, we proposed that we run an experiment where we offer incentivized upgrades to a select part of the audience who may be “sitting on the fence” about upgrading. We identify the audience using Machine Learning. 

Within 8 business days, we had the algorithm that could predict with 80% accuracy whether someone would upgrade. Read more about the data and methodology below.

### The data 
This project involved many different data sources from the Growth Data Ecosystem:

- **Product Analytics Data:** To get feature usage data.
- **Web Analytics Data:** To get information about the path/journey that a customer takes to reach upgrade. This is how we found the golden nugget (keep reading to know!).
- **Transactions/Subscription/Payments data:** To understand the current spend of a customer.
- **Marketing data:** To understand if a customer has engaged with marketing content/emails/events before. This, for us, signaled an appetite to learn and explore - a precursor to an upgrade!
- **External Data:** We used a variety of data sources like Clearbit, etc. to get data elements about a customer's business association like company size, revenue and other dimensions.

### Methodology 
We spent a few days purely on research and then went into execution. What we wanted to do was gain a deep understanding of what makes a customer upgrade to a new plan, how can we quantify those signals into variables, and how can we use those variables to then predict the likelihood of a customer upgrading. Once we had that likelihood, we would then start thinking about marketing interventions that we could leverage.

- **Study our pricing plans** in detail to understand limitations of each plan and possible needs that could lead to an upgrade. We walked through various product workflows end to end by creating test accounts and experiencing first hand the routes of upgrades.

- **Study the Product Analytics data** to catalog where and how various feature usage data is stored. In this process, we also documented the various joins and aggregations that we would need to build  existing variables that can point to high usage or a need to upgrade.

- **Prepared 87 variables on every customer**. These variables were carefully selected based on our research and some of them actually came from a previous project that we did on Lead Scoring.

- **Built the ML model** that predicted with about 80% accuracy whether a customer was going to upgrade. This was no accident or a stroke of luck that we ended up with a high accuracy. It was the result of a deep understanding of the product and feature usage that we developed during the days we spend studying the product.

- **Engaged with other teams** to develop experiments and marketing interventions. We didn’t just go in blind - we had top not suggestions of how we could leverage this knowledge, where exactly on the website we could present an upgrade proposition, how we could maximize the outcomes from this experiment.

### Execution
This is how different parts of the business came together to make this initiative a success:

- **Growth Analytics (my team):** After we identified the opportunity initially, **we spent the first few days studying the pricing plans, the product UI and workflows - no data, no modeling.** 

We used the knowledge to build bespoke features from the **Web Analytics** data. An example of one such feature was “Clicks on the Wiki button” which counted the number of times a user has clicked on the “Upgrade” button present in the settings panel under the Wiki section. You see, Wiki was a feature on paid plans. And this button was the last stop on the “path” of 20% of all upgrades!

We used a live dataset from a previous project that contained feature usage data (**Product Analytics**) for users and organizations.

We then leveraged our Data Science expertise to build an ML model that was, in theory, able to predict with 80% accuracy whether the customer is going to upgrade.

- **Product**: We worked with the product team to determine some ways we could target the users. In addition, we also had to gain the trust of the product team and convince them that the product experience in no way will be hampered. We discussed a few implementation options and finally decided to go with a “% or $ discount” or “extended trial” type of offer that isn’t shown in the form of banners.

- **Growth Engineering:** We then went to Growth Engineering team to discuss some ways to implement this from both a placement of the offer as well as the backend implementation of the discount or extended trial. Upon discussion, it became clear that an extended trial required extensive backend work in billing and invoicing systems. So, we landed on a much simplified way of implementation - a simple % off. We decided to set up a 3 legged experiment:
    - Arm 1: Control (do nothing)
    - Arm 2: 0% off
    - Arm 3: 30% off
    - Arm 4: 50% off
    
    After further discussions and due to technical challenges, we decided that the 0% and 30% were overkill and possibly best fit for a followup experiment. So, we ended up with two arms: `Control` and `50% off for 6 months`.
    
    Now came the question of the placement of this “% discount” proposition. This is where all the research we did in the early days of the project came in handy. We placed the 50% off text right in that “Upgrade” button in the Wiki section of the settings panel. Something like, `Upgrade (enjoy 50% off)`
    
- **Marketing:** We worked with the marketing team to make sure this proposition was visible to folks even if they didn’t visit the settings page that during the experiment period. Marketing team developed an awesome email that went out to the folks in the 50% off experiment on day 1 , day3, and day 7 (if they hadn’t upgraded by then). About 30% of all the upgrades in the experiment originated from the day 3 and day 7 email reminders.

**The results:** This project was so successful that we ended the experiment in 7 days - we had the confirmation that we needed. And, we had generated $60k in incremental ARR from only 300 customers.

This was a complex project methodically spearheaded by a Growth team but required active involvement and timely deliverables by Product, Growth Engineering and Marketing teams. **We** **followed a solid PLG approach, tapped into a monetization loop (the Wiki button), leveraged both product and marketing channels and delivered revenue**.

## Final Thoughts

We went over the Growth Data Ecosystem and the paradigm of data collection, monitoring, periodic reviews, cross-functional discussions and cross-functional execution. A key to unlocking the potential that is sitting idle and dormant in your data is integration - the ability to connect various data sources to build a complete picture of a customer’s interaction with your product. Finally, since PLG is a business strategy (and not just a Product or Growth strategy) there is just one central pillar on which the probability of success stands - the **Leadership commitment**.
