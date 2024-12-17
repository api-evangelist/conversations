---
title: API Evangelist Conversation with Greg Dennis, Senior Software Engineer at Zeil
description: >-
  Greg Dennis who was on my team at Postman, and part of my master plan to spend
  as much VC money as I could on open source API technology, came by to share
  his expert view on the diff between HTTP APIs and programming language library
  APIs. Greg is one of the caring souls who are tending to the JSON Schema
  specification, and has extensive experience developing and maintaining his
  .NET JSON Schema library--json-everything. Greg is learning more about HTTP
  API design these days, but I find his view of the art of programming language
  library API maintenance important, and something that helps expand, color, and
  shape my views as an HTTP API craftsperson.
date: 2024-11-01T00:00:00.000Z
guestName: Greg Dennis
guestRole: Senior Software Engineer
guestCompany: Zeil
guestIndustry: Jobs
guestImage: /assets/img/people/greg-dennis-headshot.jpeg
bio: >-
  Innovative Engineering Lead with a proven track record of guiding teams in
  software maintenance and development. Key strengths include - Passionate about
  open source software, Expertise in .Net, Object-Oriented Design (OOD), and
  common design patterns, extensive experience developing industry-wide
  standards and specifications, proficiency in full software engineering life
  cycle, technical writing, SOLID design principles, and Agile methodologies,
  skilled at bridging product teams and developers to create optimal solutions,
  forward-thinking approach to maximize code reuse and minimize rework. Adept at
  balancing business needs with future-focused development strategies to deliver
  high-quality, sustainable software solutions.
obfuscated: false
summary: Crafting high quality language libraries is an art.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/api-evangelist-conversations/api-evangelist-converstion-greg-dennis-zeil.mp4
audio_length: 94643074
youtubeId: Pt0DXfyxijk
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-greg-dennis-senior-software-engineer-at-zeil
duration: '0:17:53'
publish_date: '2024-10-24 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-11-01-greg-dennis-zeil.html
tags:
  - .NET
  - JSON Schema
  - Language APIs
partnerImage: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-partners/apimatic-banner-728.jpg
partnerUrl: https://bit.ly/3NyONos
partnerTitle: Maximize API Adoption
conversation:
  - question: Who are you?
    answer: >-
      Hi, i'm greg dennis. Uh, my current role is with a startup called
      zeal.That's z e i l in new zealand Uh, we're reimagining what a job board
      can be by focusing primarily on creating an enjoyable candidate experience
      By reducing job application rework and incorporating useful and functional
      AI to help candidates develop their careers Uh, it's jobs, but smarter. My
      role is building direct integrations [00:01:00] with the various AI, um,
      the various HR systems that companies use to manage their people in active
      roles In order to help reduce their workload when posting jobs.
  - question: What is the difference between HTTP APIs and programming language APIs?
    answer: >-
      So my, uh, my primary experience with APIs comes with, uh, libraries. Um,
      I'm, as you mentioned, I'm heavily involved in JSON schema. Um, and as
      part of that involvement, I build a set of, uh, open source libraries, uh,
      in. net. So they're published on nuget. org. Um, and, uh, The idea that an
      API, uh, when I, when I hear API, I typically just think of a web API, but
      when I really think about what an API is, I realized that it's, there are
      so many more different kinds of API. And one of the things that I, Really
      have focused on in developing my libraries is what that experience is when
      using the library. Um, when I first started this journey, uh, I [00:03:00]
      was actually being introduced to the Jason syntax. Uh, from the, from the
      get go, um, at the time, the premier Jason library and dot net was Newton
      soft Jason. And, uh, it has, it recently surpassed 5 billion downloads,
      which is just absolutely incredible. Um, but it focused heavily on
      serialization, which is getting the Jason directly into like a domain
      model. That you might have for your business, um, kind of an object
      oriented model. Whereas what I needed was a Jason Dom model where I could
      load in the Jason, I can parse it, mess with the Jason content and then
      just spit out a new string. I didn't need an object oriented model. I just
      needed something to represent the Jason. And while it had that, I couldn't
      figure out how to [00:04:00] do it. So I built a new library. Uh, to do
      that and, um, later on, I learned what serialization is and I understood
      what Newton soft was trying to do and what it was trying to do. It makes a
      lot of sense now, but without that context, it wasn't very intuitive. So
      that was my first experience with. Um, with a, a library API, um, I've got
      some other examples, uh, if, if you want to dive into those, um, but
      that's, that's pretty much what I think of. What I think of APIs is, is
      the library experience.
  - question: How long have you been developing programming language library APIs?
    answer: >-
      So I started that, that initial, um, JSON DOM library was called Manatee
      JSON. And, um, I think I started that one almost a decade ago at this
      point. Uh, it is since, uh, it over time it evolved to include
      serialization, Jason schema, Jason path, and a number of other things that
      it supported. Um, and it was all bound up in one package. Um, when dot net
      released its own, uh, Jason modeling system, uh, system dot text dot
      Jason, um, it was effectively replacing Newton soft as the de facto, uh,
      Jason, uh, system to be used in dot net. And so I thought that was a great
      opportunity to, uh, take my manatee, Jason and retire it and start fresh.
      And I now have a, uh, a project called Jason everything, uh, you can find
      the website at Jason, everything. net it's, uh, Various libraries,
      [00:06:00] uh, are on NuGet, um, but all the functionality is split out in
      different libraries so you can pick what you want and you don't have to
      get all of the functionality. Uh, you just take what you need.
  - question: Do programming language libraries offer more of a buffet of resources?
    answer: >-
      I think so. I think being able to, to take. Only the functionality that
      you need is, uh, is much more beneficial than having to take all the
      functionality. Um, like you mentioned stripe. If if I just want to
      interact with payments directly, you know, I just want to be able to post
      a payment and get the payments that. That, um, that I've previously
      posted. I can't, I can't download their SDK and only get those things. I
      download their SDK and I get, uh, access to their entire API. Um, in order
      to access just those things, I would have to write the client code myself,
      um, which is less of a lesser, or it's just a. Lesser experience to do
      that.
  - question: Where did you learn to build programming language libraries?
    answer: >-
      It's actually, I learned to, I learned it by doing it, um, in building my
      libraries, I always functioned primarily on function, uh, if it doesn't
      work, right, there's no point in doing it. Um, but beyond that, I wanted
      to make something that was intuitive and almost enjoyable to use. APIs, I
      think by their nature are a creative work. Um, when you're designing an
      API, um, you want to make sure that, uh, I think, I guess the gold
      standard for an API would be, Being able to use the API and know what it
      does without having to go look at the documentation. Um, and so I always
      tried to make the usability of my libraries such that they didn't have to
      go look at the documentation. Of course, I would still write
      documentation. Um, but the goal was. You know, make it available, make it
      so that they didn't have to go, uh, look at the docs.Iif they could use
      the library just by downloading it, and it's, you know, [00:09:00] the
      IntelliSense is there to see what methods are there and it all makes sense
      that way. That is the primary, uh, the primary experience that you.
  - question: Do you have feedback loop with your consumers?
    answer: >-
      I would love to have feedback loops with [00:10:00] with my users. Um,
      unfortunately, I don't. And I'm the only thing I can take from that is
      that people are finding it useful, um, and intuitive enough that they
      don't feel like they have to come ask questions. I do get the occasional
      question, um, and I'll point them to the documentation or, you know, if
      it's not there, I'll answer, I'll answer the question and then I'll go add
      it to the docs. Um, but then I can take that and kind of tweak the, the
      user interface. It is basically a user interface. Um, I can tweak the API
      to, um, make that a little bit easier. Um, but. I always, I do think that,
      um, simpler is better. So, um, like if you, if you're building a web API
      and all you really need to do is expose access to the data that, that
      [00:11:00] you're, that you're hosting, maybe a CRUD API is really the
      best. Thing for you to do. Um, I think I see a lot of uh, a lot of library
      developers will try to be overly creative with how you uh, how you go
      about interacting with with their library and There there are there's
      there's credibility in that But I don't I don't think it helps usability
      and for me, usability is, is, uh, number one.
  - question: Why is JSON Schema important to your work?
    answer: >-
      So, I really just became interested in JSON Schema because it was another
      thing that I could do with JSON. Um, I was looking to expand the Manatee.
      json library that I was working on and, um, JSON Schema had started up
      again after having been silent for a while and I was like, this looks
      pretty neat. It was very heavily. Focused on validation of Jason data, and
      it's and that's basically what it is. It's a Jason based, [00:13:00] uh,
      not really a syntax. It's a Jason based mechanism for, um, working with
      and validating. Jason data. Um, that's what it started as now people use
      it for all kinds of code generation, documentation, generation, um, form.
      Yeah. And it's just so much that, that people have found use for it. Um,
      so now the challenge that, uh, we in the org are. Or faced with is how do
      we incorporate or, um, adjust the specification to allow for all of those
      other use cases that that people, um, have found for it. since Henry has
      moved on from, uh, JSON Schema into the OpenAPI world, uh, I've been, uh,
      left as the primary author. On the specification, uh, I've been doing a
      lot of work getting edits in and clarifications so that we can move into a
      new stable, um, a stable era for Jason schema or focusing on stability
      between versions. Um, which is a big complaint that we've had from, from,
      uh, users before. Um, but yeah, we've got a lot of, uh, a lot of PRs in,
      in place and in progress, and I've got a bunch of stuff that I still need
      to change and hopefully we'll have something out, uh, early next year.
  - question: Is it better to have open source as a side project?
    answer: >-
      Um, you know, so you hired me at postman to work on Jason schema for full
      time. And that was great. Um, I really did enjoy it, but I find that I
      found that my passion for the project diminished. Um, it was a, uh, it was
      a passion project. It's something that I did on the side, uh, and then it
      became my job. And, um, as so many people have found, I've seen a lot of
      like woodworking YouTubers who have [00:17:00] said, you know, this is my
      passion. I'm going to make it my job on YouTube and blah, blah, blah. And,
      uh, that was, and then, and then eventually they, Kind of burn out on it.
      And, um, I was starting to experience that stuff as well. So I think, uh,
      in the end, postman pulling back their sponsorship of, of the individuals
      behind Jason schema ended up being actually a really good thing for me
      because, um, I took some time off of it. Found a job and, um, I found
      that, uh, the, the passion that I had before with, uh, with editing and
      writing the specification and, um, helping the community understand what
      we're trying to do and, and, uh, work with it and everything. And now
      that. Now that it's something that I do when I want to do it, I find
      myself actually wanting to do it more.
slug: 2024-11-01-greg-dennis-zeil
---