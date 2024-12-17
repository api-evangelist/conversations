---
title: >-
  API Evangelist Conversation with Lorna Mitchell, VP of Developer Experience at
  Redocly
description: >-
  The opinionated and deeply knowledgeable driver of API specifications and VP
  of Developer Experience at Redocly, Lorna Mitchell came by to share some
  knowledge on Redocly CLI with me. I have made an executive decision to not
  have API service providers on my podcast, opting to speak with API producer
  and consumers, but Lorna transcends her role at Redocly. Lorna is part of the
  TSC for the OpenAPI Initiative (OAI), and has deep experience across the
  specs, but more specifically across approaches to lint these specs--this is
  the knowledge I am looking to tap into during our conversation.
date: 2024-10-17T00:00:00.000Z
guestName: Lorna Mitchell
guestRole: VP of Developer Experience
guestCompany: Redocly
guestIndustry: APIs
guestImage: /assets/img/people/lorna-mitchell-headshot.jpeg
bio: >-
  An enthusiastic, organised individual with a software engineering background.
  As a Developer Advocate I listen to developers both online and IRL and then
  work to improve their experience whether by talking or by patching. I love to
  write and am a published author; I am also a very experienced and engaging
  technical conference speaker. I am passionate about open source and helping
  developers to make even more awesome things than they did already, and I’m
  happiest when my GitHub graph is green.
obfuscated: false
summary: Governance rules is more than just copying and pasting rules you found online.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-conversations/api-evangelist-conversations-lorna-mitchell-redocly.wav
audio_length: 84104708
youtubeId: I-XvwLyd_kQ
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-lorna-mitchell-vp-of-developer-experience-at-redocly
duration: '0:15:54'
publish_date: '2024-10-17 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-10-17-lorna-mitchell-redocly.html
tags:
  - Specifications
  - Command Line Interfaces
  - Rules
  - Governance
partnerImage: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-partners/tyk-banner-728.png
partnerUrl: https://bit.ly/47QycFN
partnerTitle: The universal API management tool for REST, GraphQL, gRPC and Async APIs
conversation:
  - question: Who are you?
    answer: >-
      Hi Ken. Hi everyone. So my name is Lorna. I have been attempting to
      explain APIs for develop, to developers for a really, really long time.
      Um, um, right now my interest is very much in APIs, improving practice in
      APIs, working with open API. And my day job is I'm VP of developer
      experience at Redocly.
  - question: What is Redocly CLI?
    answer: >-
      Ah, I'm going to talk for five minutes and then you're still going to
      wonder what it does. Cause it actually does a lot of different things. So
      Redocly CLI, it's an open source multi tool for all of your API things.
      And its origin is very much in open API. But we have really good support
      now for async API and for the newer Arrazzo format as well. So you're
      going to use Redocly CLI for, um, managing your files. So if you have an
      enormous open API description and you want to keep that in smaller files,
      we have a tool for splitting it. You can easily bundle it back together.
      If you have a bunch of open APIs, you can combine them. Um, we have.
      Amazing linting that I think we're going to drill a little bit more into
      that and how we have built in rules, um, configurable rules, and also some
      of the extensibility in OpenAPI for OpenAPI linting that you can put in,
      um, also for the other formats. Um, We have a bunch of decorators, so this
      is the transform step as your descriptions, whatever the format, go
      through a series of changes. You know, they don't arrive fully formed and
      perfect, usually there's work to do. Before we publish, even if it's just
      filtering in or out certain end points before you publish. Um, I think
      Redocly is most famous for open source Redoc, which is kind of that
      original three panel API reference layout powered by open API. Um, so
      yeah, the CLI will drive your docs as well. Um, little known feature of
      Redocly CLI. Also comes with, um, an open API core library. So you can
      programmatically include it in your JavaScript or TypeScript applications
      if you'd like. I like it on CLI. So I typically use it that way.
  - question: How do you handle references?
    answer: >-
      Yeah, we think we are. And so I, I think. I don't want to get too deep
      into the, the internals of this thing, but, um, the way that the read
      darkly tooling handles all of these data structures and the real, the
      reason that we can then add the same, like, amazing features to the
      different data structures. Data structures, different types is that we
      pass everything into a big data structure. Um, and then everything is
      applied typically like a visitor pattern. You can go around and visit all
      the nodes and say like, Oh, you're a parameters node. Well, then we'll go
      and look this stuff up and maybe apply this transform. So it's got this
      very sort of clear context aware sense of where you are and what kind of a
      thing this is when you're either. Linting it, reporting on it, or actually
      changing it as well. Um, and this is my most fun thing. You know, we added
      the data structure for our art. So, but straight away, I'm like, would you
      like that in JSON? How about markdown? Because it's built into an existing
      linting tool. So it has all of that. Um, I think the refs. Yeah, we have a
      pretty good handle on it. There are some strange corner cases, um, and I
      think we're always looking to hear what doesn't work. Um, but in general,
      I would say, yeah, we have a pretty good handle on it. And one big thing
      that we have, so I was a reductly CLI user. In my previous API lives
      before I came to work on this tool as my day job. Um, and one thing I've
      always enjoyed is if you do use that, um, split structure or having your
      open API. In manageable sized files where they just refer to each other,
      you can do your linting in that deconstructed structure. So you don't have
      to bundle. Um, and the reason that matters is then, you know, where the
      error actually was because you still have your real file structure. So
      yes, I think we have pretty good rep support.
  - question: How does rules linting apply beyond just OpenAPI?
    answer: >-
      Honestly, I think you could, you could drop in. Spectral for most of what
      Redocly CLI has, because they have just shipped the Orazzo support there
      as well. Um, but whatever you're doing with Spectral, you can drop in
      Redocly CLI. There are other linters. And the thing I always say to
      people, even though I work for a vendor, like if you have a linting tool
      that meets your needs, don't switch from one to the other. Um, like you
      have your API standards, they're really important. Um, However you express
      those programmatically for linting doesn't matter. Um, but I think there's
      enormous value in having something that can support the new formats, but
      also has the extensibility for you to bring that, to fit your API
      standards even further. Um, I think one thing that I really appreciate is
      Redocly CLI has the ability to describe additional types. Now, this is
      really important in something like async API. Which has what feels like a
      constant moving target of protocols. And sometimes those protocols can
      refer to more protocols. Um, so if there is anything that we don't have in
      our built in support, which is in its early days, right? I think we only
      ship the AC case. PI support about a year ago, and they've done a major
      release since. So we've got two major versions in there. The fact that
      you, we have the plugin architecture, you can add additional types, you
      can add additional roles. You can add additional transforms. We call them
      decorators. You can build a very complex pipeline. And I think whether
      you're using async API, open API. Um, all right. So that's really
      important. And with those newer non open API formats, you know, we, we
      tried not to rush with mandating lots of built in rules and recommended
      standards and stuff, because we're, we know we have early adopters that we
      work with that are excited to have this functionality. We're looking to
      hear their feedback and see what they build. We have, um, a project called
      the ReadOtterly CLI Cookbook. Um, people, and it's an open source tool,
      right? It's an, it's a public repository. People share their extensions.
      Um, and so we can, we have our customers and users community learning from
      each other. Um, and I think that's been. a really big win where it's not
      all on us to kind of show what can be done. I see some great use cases um
      from the community and from our customers and i'm like Could you just
      share that in the cookbook and then everyone can use it. Yeah
  - question: Is Redocly extensible?
    answer: >-
      Yeah, you, yeah, you definitely can. And I think. That's super important.
      I'm already on record as saying that I thought really recommend that you
      do not use anybody's recommended rule set. Um, because one size doesn't
      fit all the rough common patterns. There were good practices, you know,
      you share a lot of this good advice, but downloading an existing rule set
      and not really starting from your own API standards needs, I think it's a
      mistake. And I think everybody should be. At least combining different
      sets of built in rules or borrowed examples, um, to build the right
      standards for them.
  - question: What is the future of API governance?
    answer: >-
      So in Redocly CLI, just because I was just talking about it, I'll round
      that conversation off by saying, uh, we have some new built in errata
      rules coming for you and the way that those, all those different formats
      combine, allowing you to set up like rules for each type of API
      description, as well as individual ones and maybe grouping rule sets. I
      think there's more work to do there. Some stuff. Is planned or I've seen
      it and some stuff I think we need. Um, so you can kind of expect those
      things to come as well in open API itself. So I'm on the technical
      steering committee for open API. I spend a lot of time there. I love being
      a maintainer on a project that everybody uses, whether they love it, hate
      it, ignore it, like it's fine. Um, coming up pretty soon, we're going to
      have some patch releases on the main open API. So if you are using 3. 0 or
      3. 1, we have patch releases, which will be the least exciting thing ever,
      um, because that's the point of a patch release. We don't change things,
      but there's lots of additional examples, text clarification and those
      things. Mostly driven by issues that we've received since those versions
      were released, which is a few years ago now. So, shiny new release. Um, I
      expect there also to be a minor release 3. 2 in the coming months. That
      does have some small changes. You'll see some additional optional fields
      coming in. There's some pretty cool stuff. If you are using, um, any of
      the auth workflows or tags, that is one to keep an eye on, um, and maybe I
      can come back and give you the full rundown when we commit to that
      release. Um, you may have heard about Moonwalk, the OpenAPI 4. 0 plans.
      Those are still plans. Um, and I think we'll hear more about that as it
      takes shape. Um, and what else is going on? Arazzo is released already.
      Um, and I also expect another new standard from OpenAPI soon, which is
      overlays. So overlays solves the problem where you have an OpenAPI
      description. That isn't perfect. It needs to change in some way. Maybe you
      need to remove some end points. Change a description. Maybe you're
      translating your API reference documentation. There's a bunch of
      modifications. Those need to be repeatable because when the API changes,
      the API description changes, and you probably need to reapply those.
      Overlay solves that problem. We've had a draft for 1. 0 for a really long
      time, um, but no official release. There are some tools that support it
      already. And so we're making that release official and you'll see the 1.
      0. 0. soon.
  - question: How do people get involved with the OpenAPI specification?
    answer: >-
      The best place to start is the open API initiative website. So we're open
      APIs. Org and that has links to everything that you need. Um, there's
      Learn do open apis.org, which has a bunch of resources and that is great.
      If you are learning more, we have spec.open apis.org. If you wanna look
      up, um, the reference for the specifications as we publish them. Um, we
      are very active on GitHub our org is. So come and find us. Everything's
      done in the open. It's an open standard. And there's also a very lively
      Slack community for open API, and you can get an invite there.Um, to that
      and find out when all our public meetings are again from the main website,
      OpenAPI. org.
slug: 2024-10-17-lorna-mitchell-redocly
---