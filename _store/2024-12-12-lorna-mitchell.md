---
title: >-
  API Evangelist Conversation with Lorna Mitchell, OpenAPI Specification
  Maintainer with the OpenAPI Initiative
description: >-
  Lorna Mitchell, OpenAPI Specification Maintainer with the OpenAPI Initiative,
  and overall API experience expert came by again, this time to talk about the
  intersection of OpenAPI extensions and experience. I would say our
  conversation also intersects with the last conversation I had with her about
  OpenAPI overlays, but focuses on the need to extend the spec to meet the needs
  around specific experiences, which may or may not be better addressed with
  overlays. It is all a very fascinating and ever evolving aspect of the OpenAPI
  spec world, and I am thankful to have someone so close to the spec to talk
  through and learn from at the intersection of OpenAPI extensions, overlays,
  and API experience.
date: 2024-12-12T00:00:00.000Z
guestName: Lorna Mitchell
guestRole: OpenAPI Specification Maintainer
guestCompany: OpenAPI Initiative (OAI)
guestIndustry: API Experience
guestImage: /assets/img/people/lorna-mitchell-headshot.jpg
bio: >-
  I help teams with their technical, open source, and API work. After many years
  experience software engineer and open source project maintainer, I'm now a
  technical leader and strategist in the developer tools space. I'm a top-class
  technical communicator, experienced conference speaker and published author.
  I'm on OpenAPI's Technical Steering Committee and OpenUK's board of directors.
  Most of all, I'm a glue person. I love to join dots, collaborate with and
  enable others to succeed. I show up, I work hard, and I like to make things
  happen (good things!).
obfuscated: false
summary: When to Extend the OpenAPI Specification for Different Experiences
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/api-evangelist-conversations/api-evangelist-conversations-lorna-mitchell-extensions.wav
audio_length: 90863742
youtubeId: 6EySYIfPn38
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-lorna-mitchell-openapi-spec-maintainer-with-the-openapi-initiative
duration: '0:17:10'
publish_date: '2024-12-12 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-12-11-claire-barrett-apisfirst.html
tags:
  - OpenAPI
  - Extensions
  - Overlays
  - Experience
conversation:
  - question: Who are you?
    answer: >-
      Hi everybody. I'm Lorna. I'm an API enthusiast. I would say, um, been
      working mostly in APIs as a backend software developer for many years. I'm
      on the technical steering committee for open API. I write and speak about
      APIs and about developer experience. And yeah, I'm an open source
      maintainer and I love all this stuff.
  - question: What is an OpenAPI extension?
    answer: >-
      OpenAPI specification supports what we call extensions and they used to be
      called vendor extensions. So you'll sometimes hear them called that way.
      Although now. They're really not vendor specific. A lot of, often a lot of
      vendors will support the same extension. So within your OpenAPI
      description, that will be the x whatever fields that you see, [00:02:00]
      um, where people are taking, adding data, which isn't officially described
      in OpenAPI, but makes sense for their use case. A good example is if
      you've done documentation, generated readable, human readable docs from
      your API. Using an open API description, you might have used the x logo
      extension to add your logo into the resulting web page that gets created.
  - question: How do OpenAPI extensions impact API experience?
    answer: >-
      Extensions really round out the API experience. I think there's a lot that
      you can do with API experience just with the core field. So, things like
      using good descriptions, using good examples, that's a big part of the
      experience. But where the extensions go a little bit further is where
      you're improving something that can be [00:03:00] quite specific. Um, so
      it might be that you're adding particular extensions for your API gateway
      or for your SDK code gen. Those are really good examples. Um, we talked
      about, I already mentioned docs. You see this X display name field used a
      lot in tags because we have A tag label and a description, but doesn't
      really have a human readable name. Um, it might do in 3. 2, I have a
      proposal out. Um, but of course we can't promise because it's not released
      yet. So those are common things where this just makes things clearer,
      nicer, easier for the user. And in some cases, The tool destinations
      really benefit from information that might not be in every open API
      description that you might not be able to infer, maybe if you're
      generating it, and maybe, I mean, if someone hasn't seen the discussion we
      had about overlays, this would be a good thing to look back at, because
      you could use an [00:04:00] overlay just to add the appropriate fields
      for, for example, generating, um, an SDK in a particular tech stack. Cause
      every tech stack benefits from having its own notification, uh, its own
      extensions.
  - question: When should you extend the OpenAPI spec?
    answer: >-
      I think knowing what the core spec does is a really great starting point
      and I'm happy that you called that out. I sometimes see extensions where I
      know this exists. But maybe you haven't seen it or you're using a tool
      that doesn't support it. If you're stuck on an outdated version of OpenAPI
      itself. So if you're on 3. 0 or I still see 2. 0 places, then you will be
      using extensions to [00:05:00] fill in functionality that's in the newer
      versions, but you don't have access to it yet. Um, and in that case, if
      rather than adding an extension now, I would consider grading because that
      will give you a bunch of tools that are ready to work with. The new way to
      do it. A great example is webhooks. I do see 3. 0 specifications that use
      the X dash webhooks, which a few tools support, but if you upgraded to 3.
      1, all the tools would support just webhooks.
  - question: How do you name your OpenAPI extension?
    answer: >-
      Yeah, I definitely would still prefix with a vendor. Yeah. extension, like
      you see the X dash Amazon API gateway things. That makes sense because
      even another API gateway might not adopt those standards as it does make
      sense to prefix. Um, I think if you're doing something incredibly generic,
      like we had, um, X deprecated for a while and now deprecated as a field in
      the specification itself, um, that doesn't need to be vendor prefix. Like
      this works for everybody. It works for a bunch of different tools. So the
      more niche it is, the more I'd be tempted to try and make clear whose it
      is. I think there's a big gap in [00:07:00] OpenAPI, which we're already
      looking at and talking about, but, um, I just want to acknowledge that
      it's there, is that we have a very empty registry of extensions. Um, and
      it would be good to round up the ones that we know are in active use, and
      try and describe how they should be used. Because otherwise you get the
      situation where the same x something, um, contains completely different
      data structures, um, expected by different tools, and if we could just
      write something down, then You know, there's two ways to do something, or
      probably ten ways. If we all did it the same way, the whole point of
      OpenAPI is to help us to interoperate and give the community a huge choice
      of tools for everything that they do. And that really helps that. I know
      that you've been looking at a lot of different organizations OpenAPI
      descriptions. I'm guessing you see quite a lot of extensions used.
  - question: >-
      If you extend the OpenAPI spec should you come present extension to
      community?
    answer: >-
      I think so. But again, I think it depends on the use case. You know, if
      you're extending your, um, Open API description in a way that you think
      lots of other people wanna extend it, or if you expect other tools or
      other organizations could make use of this, then yes, I think you should
      be sharing that more widely. Um, and that's evidenced. I am sure you are
      seeing multiple extensions called something similar but not quite, or.
      Like we just said, returning different data structures for essentially the
      same function. So that's where having a registry and nailing down your
      version of the, how you would like us all to standardize on it. You know,
      I don't think people understand that OpenAPI, you know, we have the open
      technical meetings every week. Um, and people can just come and advocate
      for what they want. And when people suggest or ask for new, new fields or.
      [00:10:00] other additions in future versions of the specification. If we
      can see that it's widely used as an extension right now, like, Oh, well,
      then we definitely need it. Um, if it's not super niche or only for one
      tiny narrow use case or something, then yeah, it should be in the
      definition. And if we can see it used consistently across a bunch of
      different organizations, As an extension, that shows me that there's a
      real use case. It's well understood and we should just adopt it. So there
      are some things which the extension just eventually leads to official
      adoption at the next minor release, which is when we can add fields.
  - question: Should people come to the OAI TSC meetings to discuss extensions?
    answer: >-
      I think definitely bring them to the meeting or use the discussions, the
      GitHub discussions on the main specification repo, because I think hearing
      that conversation. Um, in, as part of the main project really informs how
      we think about what can change. Yes, there are a bunch of extensions that
      I think, you, now we have overlays, you might only want to have them in
      overlays. The example that we both gave here, which is the SDK generators
      really benefit from a lot of additional metadata per destination
      technology stack. Right? All the API matic extensions, the speakeasy
      extensions. That differs for which language it is you're generating.
      [00:12:00] Um, and OpenAPI descriptions can be enormous because they've
      got all this extra stuff that's just for one Destination output. Um, I've
      been talking a lot this year about OpenAPI pipelines, about having a
      description and then enhancing it or filtering it down to something
      smaller, as appropriate for each audience or output. Overlays, where you
      add just the correct description. annotations or extensions for a specific
      generator. And this is where you keep it. You keep it here in the get
      ready to do Ruby, boom, Ruby. Um, we don't have to have that, all of that
      inside our open API description all the time. I think that's magic. And I
      think, so I think overlays is huge and also allows more people to add more
      extensions at different stages of the life cycle. It also allows us as API
      consumers. To take an open API description and patch it as we [00:13:00]
      need to. Um, if it's for whatever reason, not perfect for the thing we
      were going to use it for. So I think it empowers consumers as well as
      producers.
  - question: Should we be talking about API experience instead of the API lifecycle?
    answer: >-
      Yeah, I think so. And I think there's also something there around. Being
      able to look at your OpenAPI description through different lifecycle
      lenses. So where are we? You know, I often [00:15:00] hear, oh, I can't
      document this, um, super secret experimental endpoint that we just added,
      but we don't want everyone to know. So we cannot describe it in the
      OpenAPI description. And it's like, now you can, but you need to tag it
      or, you know, add the experimental tag or label or whatever. Okay. So that
      in an overlay, you can filter it before you publish it to that wider
      audience, but you can still see it in your internal docs preview and kind
      of get your stakeholders into the conversation. So all of those, I can't
      add this, I can't change that. It's, you know, it's generated and
      therefore nothing can be done, especially some of those older generators.
      Um, None of that's true. And we can repeatedly make those changes with
      overlays and so stuff like the life cycles. Um, and the different stages
      of the operations. I think it really opens the door.
slug: 2024-12-11-claire-barrett-apisfirst
---