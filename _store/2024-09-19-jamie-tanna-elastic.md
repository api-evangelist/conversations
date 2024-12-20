---
title: >-
  API Evangelist Conversation with Jamie Tanna, Engineering Productivity at
  Elastic
description: >-
  Jamie and I connected on the API's You Won't Hate Slack channel, where I
  started subscribing to his blog. After reading a post on versioning, and more
  specifically why you should start the version for your API at 0.1.0 instead of
  1.0.0, I knew I needed to have him come for a conversation. I really enjoyed
  Jamie's calm and pragmatic approach to what web APIs are, what Semantic
  Versioning is, and how versioning and change management can really help us
  enable both API producers and consumers to stay aligned.
date: 2024-09-19T00:00:00.000Z
guestName: Jamie Tanna
guestRole: Engineering Productivity
guestCompany: Elastic
guestIndustry: Search
guestImage: /assets/img/people/jamie-tanna-headshot.jpeg
bio: >-
  I'm a passionate Senior Software Engineer with experience in back-end software
  development and infrastructure management, interested in solving problems,
  sharing knowledge and enabling great customer outcomes. I strongly believe in
  building reusable, Open Source first, software components with a high quality
  bar, and improving team ways of working so we can deliver better, and more
  effectively over time.
obfuscated: false
summary: Doing the work to earn the right to display version 1.0 for your API.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-conversations/api-evangelist-conversations-jamie-tanna-elastic.wav
audio_length: 82240736
youtubeId: ie6eMzCUI34
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-jamie-tanna-engineering-productivity-at-elastic
duration: '0:15:32'
publish_date: '2024-09-19 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-09-19-jamie-tanna-elastic.html
tags:
  - Search
partnerImage: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-partners/bump-banner-728.png
partnerUrl: https://bit.ly/3MEOGa9
partnerTitle: The API doc platform for Tech Writers & Engineers
conversation:
  - question: Who are you?
    answer: Hey Ken, I'm Jamie Tanner.
  - question: What is your role?
    answer: >-
      I am a number of different things. Um, so I have ADHD, which also means
      that feeds into lots of different things. So I'm a blogger, I'm a software
      engineer. I'm a collector of open source projects. Um, uh, most notably
      recently the OAPI CodeGen, go open API to go code generator. It's all my
      big ones.
  - question: What is difference between web APIs and other APIs?
    answer: >-
      Yeah, so, um, for, there's a mix. There's both library APIs and web APIs.
      And so the library APIs, I would see as, for instance, a Go or npm package
      that has a public interface that you as a consumer will use and you will
      opt in generally to pull a new version of that dependency, which then at
      that point you would discover if anything's broken, which with a web API
      that's usually either distributed over HTTP or TCP. Um, things like
      RESTful APIs, GraphQL, um, gRPC. Those are the sorts of things that you
      don't really have as much control over. Because for the most part, a Web
      API is something managed by someone else that you get access to straight
      away. Whereas, as I mentioned, with something like a library, you pull in
      that new version of the dependency, and until you've pulled in that new
      version, you have the old version available.
  - question: What is Semantic Versioning?
    answer: >-
      So semantic versioning is a way of providing, as you say, a precise
      meaning to what a version looks like. Um, so most commonly version number
      looks like version 1.2, 0.3, and in semantic versioning it. prescribes a
      clear meaning to the one at the beginning. Uh, the first number will be
      the major version. Then the second number is the minor version, and then
      the third is the patch. And so between each of these, there's a
      hierarchical, um, and clear contract for consumers. So the idea is that
      within the patch version, you would generally, fix things, um, or
      introduce things that don't provide any public facing change. Um, the
      minor version is generally here's a new feature that we've added, um, and
      something useful for you. And then for the major version it's, we have
      broken something. So beware. Um, and so semantic versioning with web APIs
      is an interesting one because for the most part, people don't care. about
      the minor and patch version. They really just care, has something broken.
      Um, and a lot of times it's useful to know, is there a new feature
      available? But it's primarily, is everything broken? And do I have to do
      some work to integrate with you?
  - question: Why should you start an API with 0.1.0 version?
    answer: >-
      Um, so you brought up an interesting point. So, as I mentioned, the major
      version, say version one. indicates has something broken. Um, but as
      computery people, we like starting counting from zero. And so the zeroth
      major version basically says anything could be breaking here. And it gives
      you brilliant opportunity to say, I want to work out actually what my API
      looks like. What should my interface be for my customers and my users? Um,
      and it allows you to break things safely. So you still have, um, a
      communication tool in terms of there is a breaking change, um, where you
      would, for instance, if you're on your 0th minor, um, major version, you
      would bump your minor version, and that could either be a feature or a
      breaking change. So for people using your API, they need to be much more
      aware, um, and keep an eye on things a lot more. But it does also mean
      it's that you as the producer of the API can experiment. You can work out
      that something that you dreamed up at night, um, and thought was a great
      idea, actually is awful to work with for consumers who are coming from
      strongly typed languages, where they can't reasonably describe your API in
      their type system. Or it could just be things like, you know what, it, it
      just doesn't make sense. Um, the, you know, The way that your routes and
      everything are planned doesn't make a lot of sense. Um, and especially one
      of the problems, um, with web APIs is they're much harder to do breaking
      changes with. So, um, I'd say especially with like a version zero,
      introducing those breaking changes, your customers and your users are
      going to be feeling those breaking changes every time they send a request.
      Um, so at least making it clearer that you are a v0 API. Makes it so your
      consumers can maybe be a little bit more defensive and they can work out.
      Okay. Actually, I'm expecting Version 0. 7. It looks like you sending
      version 0. 11. So I'm gonna try and do as much as I can with what I
      understand But maybe they need to do some future work to actually pick up
      the new changes.
  - question: What are other ways to communicate API change?
    answer: >-
      So as well as just like the pure version number, which could be in like a
      header or a URL, there's also things like your change logs and your
      release notes. and having like long and short form means to actually
      communicate to people. Um, they're a great opportunity to very visibly,
      like top of the big release note, say, here are a load of breaking
      changes. Please be aware that these things need to be done and where
      possible, like try and make it as actionable as possible, um, to help
      people understand. Okay, these are the things I need to actually do and
      um, even sometimes you may be fixing a bug. There is a great XKCD about
      someone relying on holding down their spacebar and it heating their
      computer and they're like, oh no, I use that to keep warm. Um, and so one
      of the problems is people will start relying on Functionalities or even a
      bug fix that you put in someone may see that as actually a breaking change
      So sometimes you actually need to call out those bug fixes more carefully
      because some people may Be relying on that functionality, especially
      Before you've stabilized your API.
  - question: What API providers do versioning well?
    answer: >-
      So, I had trouble thinking up, um, some of these answers because I think
      that one of those things is you shouldn't really have to think about it,
      right? Um, and there aren't many that actually come to mind in terms of,
      oh, I love the way you do versioning. Um, but I will say, I know GitHub
      have recently Um, started doing database versioning and clarifying some of
      that stuff. Um, the way that in particular in the Kubernetes ecosystem
      does it, is they'll have like, um, V one, alpha one, V one, alpha two, V
      one, beta one, and then they will go through different variations until
      they stabilize on V one. And one of the nice things about that is that's
      very clear in like the objects that you interact with in terms of what
      version it actually is. And it gives you that control of saying, actually,
      I do not understand this version, so I'm just going to reject it, um, or
      throw an error, whatever. Um, I'm actually sorry. That does remind me, um,
      Stripe have written in the past. So Brenda Leach, um, a very brilliant
      person in the API community wrote a really good post about how Stripe does
      API versioning and they support. Every version in perpetuity and it's
      things like that like, um, for you as a consumer, you don't actually need
      to worry about versioning because they support all any of the docs that
      you see the work. Um, on the provider side though, I can imagine that is a
      very complex piece of work because you need to be able to reason about
      things in dozens of different ways over the years as your underlying
      models may have changed. You still have to think about it. In terms of,
      okay, a decade ago, we were saying this, so we still need to be able to
      represent it in this way. Yeah.
  - question: What keeps you going each day?
    answer: >-
      So I, just about a year ago, joined Elastic, and I'm on our, one of our
      platform developer experience teams. And for me, one of the things that
      keeps coming up is I enjoy trying to make things easier for people to work
      with. This was something that over the last eight ish years, I've spent a
      lot of time on APIs because it's trying to provide that good developer
      experience that is consistent for people, that provides something that you
      can just look at it and be like, Oh, okay, that, that seems reasonable.
      Generally, you want people to be writing and reading docs, but also if it
      can be somewhat straightforward to read and understand how it should look,
      um, and to provide organizational standards in a way that things look and
      feel like a single suite of APIs, even if it's built by a dozen different
      teams. Um, that's the sort of thing that kind of gets me going, trying to
      keep on building good stuff.
slug: 2024-09-19-jamie-tanna-elastic
---