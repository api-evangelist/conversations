---
title: >-
  API Evangelist Conversation with Stanislav Zmiev, Tech Lead of Platform
  Engineering at Monite
description: >-
  A very focused conversation on change management and versioning with Stanislav
  Zmiev, Tech Lead of Platform Engineering at invoicing  and bill pay provider
  Monite. Stanislav had an extremely nuanced and pragmatic view of API
  versioning, which I think sets the stage for a very healthy discussion for any
  company looking to version their mission critical APIs.
date: 2024-09-04T00:00:00.000Z
youtubeId: DqO0Ez3FXSU
guestName: Stanislav Zmiev
guestRole: Tech Lead of Platform Engineering
guestCompany: Monite
guestIndustry: Invoicing
guestImage: /assets/img/people/stanislav-zmiev-headshot.jpeg
bio: >-
  Stanislav is the author of Cadwyn, the world's most sophisticated API
  Versioning framework, and in their spare time they have also authored many
  smaller open-source projects, all of which can be found via their Github
  profile.
obfuscated: false
summary: >-
  Taking a pragmatic view of how and why you should be versioning your APIs, and
  having a full accounting of the cost involved, while emulating the best
  approaches available out there today.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-conversations/api-evangelist-conversation-2024-09-03-stanislav-zmiev-monite.wav
audio_length: 89275814
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-stanislav-zmiev-tech-lead-of-platform-engineering-at-monite
duration: '0:16:05'
publish_date: '2024-09-04 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-09-040-stanislav-zmiev-monite.html
tags:
  - Invoicing
  - Bill Pay
  - Versioning
  - Financial
partnerImage: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-partners/bump-banner-728.png
partnerUrl: https://bit.ly/3MEOGa9
partnerTitle: The API doc platform for Tech Writers & Engineers
conversation:
  - question: Who are you?
    answer: >-
      Hi, my name is Dennis Loves Me. I'm a tech lead of platform engineering at
      Monite. I am, uh, I guess, uh, I also love APIs. I love making them good,
      but not just the APIs. Uh, I also do open source. I do publications, uh,
      podcasts, uh, conferences, all sorts of things. Essentially, I just love
      the technology. And, uh, I love talking about APIs.
  - question: Why is API change management important?
    answer: >-
      Well, it's not always important, I guess. Um, So when you have a very
      small API that is used only by internal clients, especially repository as
      you, you know, they've got the same kind of deployment as you, then
      managing API changes is easy, you know, you just change things at the same
      time, or, you know, You do them in three steps of like, you know,
      extending the API, then, um, changing, switching your client, and then,
      uh, switching your API, removing, uh, what you had in the old one. It's
      very simple, but once your API becomes public, Once your API starts being
      used by external clients, and especially once your company is built around
      your API, which is the case for some companies which call themselves API
      first company, that's where we have the problem. Because every time we
      mismanage anything regarding our API, for example, if we change it, uh, at
      a breaking change, our clients are going to be broken, our clients are
      going to lose money. Same goes for when, for example, you know, we're not
      doing it accidentally, but you know, we, we decided that we want to change
      something about it, you know, a new feature, whatever, but the feature,
      uh, is a breaking change in the API. You know, it requires new arguments
      or we're renaming something again, even if we tell our clients beforehand,
      if they miss it, or if anything else happens, they're going to be broken.
      They're going to be losing money. And as a result, we're also doing it.
      So. Which is why we're taking great care of making sure that our clients
      never break.
  - question: What is API versioning?
    answer: >-
      Essentially, API versioning in its simplest form is saying, okay, this
      for, uh, this version of API has these endpoints with these schemas,
      whatever we were returning this things. And then we add like a path, uh,
      variable of say, where we say V2 of the same path. It's going to have
      different endpoints or, you know, different response, uh, responses or
      whatever, different business logic. And we just say that this endpoint
      exists in this API, this, and another endpoint exists in that API. So
      essentially it's having two versions, two, uh, instances of your API
      deployed at the same time. And there are like a billion ways to do this,
      but, uh, nobody tells you which these ways are.
  - question: Why did you build your versioning solution as open-source?
    answer: >-
      I guess, uh, calling, calling us just the payments API is not enough. Uh,
      Monite does everything regarding to invoicing and documents. Essentially,
      we, uh, we are embedded invoicing, where we are a super app that does
      integrations with, uh, accounting providers, payments providers, all sorts
      of things. So we do a lot more than just payments. Uh, but yeah, the, um,
      The reason, the reason I built it is as an API first company that Monad
      is, we take great care of our APIs. And we have multiple clients that are
      using it, using different versions of it. And at some point, we started
      trying out the basic solutions, you know, Oh, let's, let's just copy this
      code for one version, you know, paste it and let's see how it goes. You
      know, the, the, the simplest approach. We were, we were also thinking
      about, oh, should we use semantic versioning or date based versioning?
      Where should we put it? We decided to put it into the header instead of
      the path. But instead, we should have thought, well, how do you actually
      manage these versions? It's because when you copy them, um, after five
      versions, you have five times the code and that is impossible to manage.
      That, that becomes really bad. I've heard of people doing 20, uh, versions
      like this. Happily, this wasn't us. Um, for us, it has become so painful
      that at some point I decided to, you know, look elsewhere. I decided to
      look at how other companies do it. That's when I found, uh, what Stripe
      does. And, uh, essentially I spoke with, uh, Brander Leach, the guy, one
      of, one of the guys managing it at Stripe, uh, before, you know, I, we,
      we, we discussed how versioning could be done and that's where I got the
      idea for the framework that I built. It's called Cadwin. Essentially,
      it's, it does rolling API version. Our developers support, and Stripe does
      a similar thing, I guess, Uh, our developers support only the latest
      version of the API, And they describe, every time they make a breaking
      change, Every time they, uh, make a new version, They describe the
      difference between the previous version and this version. This allows us
      to essentially know how the versions have been changed. What has been
      breaking and as a result, we, we have a tool that allows us to
      Automatically convert every version into every other version as a result
      Our developers have to support only one version, but our clients are
      getting all of them at once if our client wants version from 2022 I guess
      2023 But I guess, uh, 2022 is not used anymore, so we've already
      discontinued it. But, uh, all of the versions that are active, that are
      used by someone, you can, you know, you can freely use it or upgrade. And,
      uh, oftentimes it allows us to even ship features to older versions. So
      you don't even have to upgrade to get some of the new features. And I
      guess this is the biggest thing about it. It's cheap and easy to support.
  - question: What is the cost of API versioning?
    answer: >-
      Well, so the, the most expensive part of it, I guess, is building such a
      framework. It, it took me, you know, incredible amount of time to, uh, get
      it just right. Uh, thankfully, Catwin has all sorts of documentation on
      how to build such a framework because nobody ever described it. So it's
      probably going to be easier, but after you build it, you, you start
      running into unforeseen problems. Uh, you know, you're like, okay, we're
      just changing our versions. But then all of a sudden you realize that in
      some versions, well, in some newer versions, the data is a little bit
      different. The data, your data might have a different structure and your
      developers, especially if they have never versioned, they're running into
      this state of, um, thinking that versioning data is fine, that now we're
      versioning everything, not just, uh, the API con. And that's, uh, where
      you start getting into the problems of, Oh, the client created this thing
      on version one, but then in version three, three, they started trying to
      use it and some errors and then the reverse is also true. They created a
      version two, three, but then started using version one, whatever it's,
      it's crazy. And so my recommendation to anybody, any startup, any company
      that is, uh, you know, thinking of doing versioning, be careful. It comes
      with a huge price. It's incredibly steep. And, uh, yes, it allows you to
      make, like, the perfect API in terms of the design. It allows you to
      change your design at any time without affecting your clients. It allows
      you to, you know, make it pretty, make it easy to, you know, uh, to
      evolve. But the initial investment of, uh, learning, you know, teaching
      your, uh, developers how to work with, of managing these API change logs,
      Of, uh, building the framework of, uh, you know, managing all these
      versions. Sometimes it's, it's a work of art, you know, to, to create a
      new version without breaking old stuff because your data might simply be
      incompatible. So my recommendation, think very carefully. And for smaller
      startups, I would, uh, suggest, you know, to postpone it until they have
      more money, more developers until they have shipped the actual product.
      Because if my belief is that even the, if the product is not perfect. And
      at the API level, if, um, it, if it fulfills its purpose, if we can sell
      it, then we should sell it first and only then should we, you know, make
      the API beautiful,
  - question: Is the Stripe API a standard when it comes to versioning?
    answer: >-
      So, Stripe is a big name that allows, that allows Cadwin to, that allows
      me to say, Hey guys, you know how these guys do it really well? Well,
      we're doing the same thing. This is, this is essentially, uh, me just, uh,
      you know, trying to explain who we were, uh, who I was following when, uh,
      developing, um, I think Stripe is at the top of the industries, you know,
      somewhere at the top in terms of the API quality in terms of the story
      they tell with the, their API and most of the, um, providers in terms of,
      you know, FinTech in one way or another are inspired by Stripe. So if
      Stripe, you know, starts doing something tomorrow, I'm sure there will be
      20 more companies that start doing the same thing. Simply because, yeah,
      they are a big name and their APIs are of a high quality. Should every
      company follow that? I don't think so. I think that, uh, the companies
      should first consider what they need specifically for their product. Uh,
      and that's, that includes, you know, V4. If you, if you're sure that you
      have the money right now and that your business model is really fit for
      API first, then yeah, good, follow Stripe in their, uh, version. It's
      good, and I I failed to find any better approach. There are similar
      approaches. There are approaches that are really good for internal
      clients, but for external clients, I don't think there is anything that
      beats them just yet. At least publicly.
  - question: What motivates you?
    answer: >-
      I guess it's two things. Um, I, mainly one. I really like the people
      around me and, um, when I was contributing to open source, it was always
      because of someone. It was always because, you know, I wanted to solve
      someone's problems. Uh, some of the time it's me, but most of the time
      it's my colleagues or the people in open source that I see, you know,
      complaining about stuff. And, you know, the feeling of bringing, you know,
      Bringing the solution to someone and solving their, maybe not just a
      business problem, but a tooling, a technological problem where, you know,
      a developer just becomes a tiny bit happy, happier working on your
      tooling. That's the feeling that drives me and that drove me throughout.
      And I guess that's, that's why I became a platform engineer in the first
      place, because, you know, your clients are so close to you, it's a, you
      know, you're always getting this fast feedback.
slug: 2024-09-040-stanislav-zmiev-monite
---