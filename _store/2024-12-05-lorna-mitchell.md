---
title: >-
  API Evangelist Conversation with Lorna Mitchell, OpenAPI Specification
  Maintainer with the OpenAPI Initiative
description: >-
  Lorna Mitchell, OpenAPI Specification Maintainer with the OpenAPI Initiative,
  and overall API experience expert came by to educate me (us) on OpenAPI
  Overlays, helping contrast with the core OpenAPI spec, as well as with Arazzo
  Workflows, sharing how it will help bring more stakeholders into the API
  lifecycle and contribute to better API experiences. Lorna is a well spring of
  knowledge when it comes to OpenAPI, but also other specifications, as well as
  Spectral and other approaches to governing APIs, and she'll be coming back
  shortly to help educate us all about the intersection of overlays with
  extensions and how it all will change API experience.
date: 2024-12-05T00:00:00.000Z
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
summary: Providing an enterprise technology platform that meets teams needs.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/api-evangelist-conversations/api-evangelist-conversations-asanka-abeysinghe.wav
audio_length: 95103248
youtubeId: IvRmwiYdA_A
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-lorna-mitchell-openapi-specification-maintainer-with-the-openapi-initiative
duration: '0:17:58'
publish_date: '2024-12-05 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-12-05-lorna-mitchell.html
tags:
  - OpenAPI
  - Overlays
  - OpenAPI Initiative
partnerImage: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/api-evangelist-partners/microcks-banner-728.jpg
partnerUrl: https://bit.ly/48MluZf
partnerTitle: API Mocking & Testing
conversation:
  - question: Who are you?
    answer: >-
      Hi, my name is Lorna. I am actually day job wise, I am between jobs, but
      you will know me as API enthusiast, um, documentation specialist,
      developer experience specialist, um, open source, um, cheerleader. Um, and
      I'm one of the many things that I do is I'm involved with the OpenAPI
      initiative. So I think about APIs a lot, even when I'm not paid to.
  - question: Do you do better work in between jobs?
    answer: >-
      Yeah. And I think, you know, you've got to take that moment and like, just
      do something you're right. It did ship something else really API ish. And
      in between the last job and. The one before and then this one, yeah, but I
      think also the focus, the focus time helps and I love to work on API stuff
      like I did some very cool things in my last role, but now I'm picking the
      stuff to work on. So that's also very cool. I just have everything's
      great.
  - question: What are OpenAPI Overlays?
    answer: >-
      Overlays are a way of describing repeatable changes that you make to your
      OpenAPI description. So if you have something where there's a missing
      endpoint, or that description's not quite right, or you want to ship
      another version of your OpenAPI that doesn't have those particular
      operations in it, overlays is what lets you repeatedly make that change.
  - question: What are the most common use cases for OpenAPI Overlays?
    answer: >-
      I think the one about taking out the internal endpoints is Really, really
      relevant. And this, this happens everywhere, right? And I think there's
      something there about, Oh, we can't put that in our OpenAPI description
      because we can't expose it to these people. And so we're maintaining these
      similar but slightly different descriptions. Overlays fixes that. Like,
      you've got your full fat everything in the kitchen sink that serves All of
      the possible purposes and then, you know, maybe your closest partners are
      going to get the whole thing and they're going to have access to those
      restricted endpoints. But for everyone else, you're just going to take
      out, remove those endpoints, um, and ship them a reduced, uh, And you can
      be removing individual files or fields or endpoints or whatever makes
      sense in your context. So I think filtering things out, actually, is, is
      one of the big use cases. Um, overall enriching, especially for
      organizations that generate their OpenAPI description from code. Can be a
      little bit thin in terms of rich descriptions with markdown and links and
      really lively examples. If you're, if you're generating from code, even
      with annotations, it's very difficult to get a real user experience
      richness into that workflow. Well, with overlays, you can add that in. So
      you can have like these are the endpoints and then you can replace or in
      praise. the extra data around the different fields or different endpoints.
      I think the third major use case that I, I mean, what people will build
      with overlays. We don't know, cause it's quite new, but, um, so far the
      third really big thing that I see is adding particularly extensions, but
      specific fields or metadata for a specific output destination. So hints
      for your SDK generators, you might not want to have to have that in all
      the way through the API description. Pipeline before you, before you
      generate your SDKs, you want to add the extra fields, the same going out
      to API gateways, to some extent, the same going out to docs platforms as
      well. Some of them have great extensions, but you might not want to, you
      were complaining the other day about having all the code examples as well.
      You might want to just put those in as a last stage before you publish to
      docs and not everybody might need the whole for other destinations.
  - question: Will OpenAPI Overlays move API experience forward?
    answer: >-
      I think so. And I think it also. One of the things that, that has made
      overlays like really stay with me is I think that it solves the problem
      that every organization has. Like it's difficult to generalize API advice
      because every organization is different and they're at a different place
      in their life cycle, in their terms of their API maturity, and they
      already have some sort of setup. Like most people are not in implementing
      their first APIs today. Nearly every organization has something. And
      overlays. The input is OpenAPI, you add an overlay, the output is OpenAPI.
      So it's not disruptive to what you have, it's just additive, or
      removitive, if you're filtering things out, right? So it fits in really
      well, and I, for that, and it uses things you already know, and there are
      already tools to use it. So I think it's, It, it, it massively improves
      the experience and it opens the door to getting the best from all the
      tools you can use with open API, even if you're a not design person, all
      of those metadata fields are in right at the start. Like you can still use
      all that stuff. It, it just, it brings more people in to have more
      possibilities, I think.
  - question: Will OpenAPI Overlays allow more stakeholders to get involved with APIs?
    answer: >-
      I think it really helps. And again, especially if you are not design
      first. So if it's kind of originating from server code, and then we expect
      to have everything given to us on a plate, I think if you don't bring, if
      you don't bring everyone together at the beginning and get those things
      right, then that's a, that's a big, that's a big thing. Um, and I think
      overlays, yeah, let's everybody bring their own thing. And in open API,
      we've talked a little bit in the process of working on Moonwalk about, you
      know, it's the shape of the API. Separate from the deployment details, you
      know, and maybe just because the servers are probably separate and maybe
      if you're on the sandbox server or local development, you don't have the
      same security requirements like this with the gateways and everything.
      There's a lot of deployment specific stuff. It's, it's all in open API. So
      I can see us adding that later. Had an interesting chat with, um, an NGO a
      couple of weeks ago who deploy with different gateway rules in different
      regions because they're regulated differently in those places. So you can
      just be like, okay, so this is the shape of the API. So the OpenAPI isn't
      a snapshot, it's a pipeline. And before we go out to those geographic
      regions, the last thing we do is we add those extra things with an
      overlay. One per region, and then off we go, and we're set.
  - question: Can OpenAPI Overlays be associated with API lifecycle stages?
    answer: >-
      Yeah, I think so. And I'm also seeing things like we've got everything we
      need, but we'd love to localize our API description for documentation, you
      know, like, great, then you can have an overlay that that changes the
      texty bits and publishes that without having to hold all of that within
      your open API description, you can add it with an overlay.
  - question: Can OpenAPI Overlays be part of a code-first approach to APIs?
    answer: >-
      Yeah, I think so. And I think it really closes that gaping chasm. Mm hmm.
      between, you know, how far can you go with generated code and how far can
      you go if you really design it first. And I have been very vocal. Let's,
      let's be clear about that. I have, I have criticized generated open API
      descriptions, but a lot of organizations don't have a lot of OpenAPI
      awareness. They do generate, and it means they can only do so much, or,
      yeah, the engineers have to put everything in at the start. And so that we
      can even begin to work with this OpenAPI. So I now need to stop
      criticizing people who are not designed for, I mean, I think there are
      still benefits. Right, to getting things like having technical writers in
      the room, having beautiful descriptions and examples before we build the
      thing, because then we're going to build the right thing, because we're
      not just going to be like, ah, build an endpoint that does something.
      Right, it's really, really beautifully well rounded. We know exactly where
      we're going and why. So there's still benefits to design first, but I
      think we've really increased the mileage of where you can go if you are
      generating. from a code base. And that's the entry point to your open API.
      And again, it's not a snapshot. It's a pipeline. So we start with this and
      then we do these things. And then maybe we combine them or filter them.
      They go to different destinations, different add ons for docks and
      gateways and testing and client SDK things. Um, and so we get all these
      like different versions, but we're not maintaining all those different
      versions. We're not repeating edits. We have it all in overlays and it
      just flows out every time.
  - question: What has been the tooling response to OpenAPI Overlays?
    answer: >-
      So actually, the tools existed before the specification was published with
      overlays. So I have had overlays on my mind for a long time, and you
      talked about, oh, I push things out between jobs. In the gap between the
      job I've just left and the one before that, I shipped a really basic
      overlays library, because that, even after two years of Ivan thinking
      about databases, I still had this thing where we had sort of talked about
      overlays, but it didn't exist yet. And there was a, there was a draft
      spec. Anyway, then I didn't think about it a lot more, but it, it, it
      became obvious to me earlier this year that We have tooling already,
      people have implemented that draft specification is labeled as a 1. 0, but
      it isn't an official release. And so I spent half a year cleaning that up,
      so that we could release it in support of those existing tools. So there's
      a list in the, um, we have it in the readme for the overlays project, so
      that everyone has to go and look there, and if you go and add a new tool,
      people will find it. Um, there are tools. I'm using them. You can use them
      already.
  - question: Can OpenAPI Overlays help with the OpenAPI 3.x tooling adoption?
    answer: >-
      I think so. I think it will really I think overlays is a very practitioner
      focused thing, so I can't take a lot of credit for this. The draft was
      just there, all I've done is release it, right? It's there, I know we need
      it, the hard work had been done, and we have to support those tooling.
      people by being like, yeah, this is the official, you absolutely support
      it. But it's, it opens the door to very many of those other very cool
      tools in the API space. A lot of them use extensions. A lot of them, like
      a testing tool, will need to change where your server URL is to send the
      test requests through, or to send you to a mock server. And overlays kind
      of is a great mechanism for doing that. So I think it, I think overlays
      will bring a lot for tooling and, and give us a nice add on. And I don't
      think it's a coincidence that the two of the kind of big early
      implementers for overlays are a bump. And Speakeasy. So these are two
      organizations that are really active with exciting new tools and overlay
      supports. the things that they are already doing, adding the metadata for
      their users, you know, speakeasy, it's an SDK generator. You cannot
      generate great SDKs without extensions. There are different languages need
      different hints, different metadata overlays makes that really possible to
      implement into an API workflow. Um, so I think it'll help in terms of, but
      I also think it's not the only thing that's going to make the difference.
      I think OpenAPI Initiative has had a big renaissance this year. The
      community is active. There are not 650 abandoned issues. The weekly
      technical meetings are alive and well, and sometimes a bit lively, because
      I usually chat. It's mad. Um, we have released two new standards. We're at
      more events. Like, these are the things that I'm going to educate our
      audience and help  them to be ready to use new tools. And I think that's
      part of the story for your users have to be ready. Otherwise, why would a
      tools vendor support the new version or, or try to upgrade? So it's, I
      really feel we're reinvigorating the whole landscape and this is just part
      of the story.
slug: 2024-12-05-lorna-mitchell
---