---
path: "/blog/redis-and_mem_caching"
date: "2019-06-04"
title: "Filling gaps in my backend skills 1 - redis and mem caching"
author: "hameed"
tags: ""
---

Through my journy in the development industry i have been descovering more and more.
tried to develop and enhance my skills in frontend, backend and even cross platform mobile development

though i felt i can see the bigger picture and i did, but i decided to put more time to invest in my backend skills.

so this is my first article about the tech and skills i miss as a backend developer.

#### Server Side Mem-Caching

Server side caching is the technique used to cache commonly used data on server to decrease the hits on the DB whenever the data is needed but there is another use cases we will discuss in this article

#### Use cases

##### Decreasing response time 
As data is cached in server memory this allows the server to have a better data retrival performance and this should lead to a faster response time.

##### Avoiding repeated computation 
As if we working on a dashboard that shows the total revenue in the previous month. with large data this is an expensive computation so we can do it once and caching it.

##### Reducing DB hits
As mitioned above we can reduce DB hits if we cached frequently required data, so simple can't explain more.

#### When NOT to use

1. As you can see if the required data is missing we will have to hit the database and caching it and this may lead to increasing the response.

2. Caching so many data will also lead to bad performance

3. If cached data are frequently modified this can lead to unconsistency
because you will need to recache data every time you pdate this data in the database
other problem is syncronization in case of disturbted systems probably you will have out dated cache in a place or other 

#### Caching Techniques
In fact i don't know how many caching policy are there but i learned the most commonly used ones

1. write through
2. write back


#### Introducing Redis

As mentioned in the official page :
Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache and message broker.

##### Example
in progress ...
