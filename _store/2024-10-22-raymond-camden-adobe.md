---
title: API Evangelist Conversation with Raymond Camden, Developer Advocate at Adobe
description: >-
  I was happy to have Raymond Camden, Developer Advocate at Adobe come by for
  another conversation. Raymond was on Breaking Changes back in the day, and
  I've been a follower of his work for well over a decade. He provided his
  obligatory plug for Adobe APIs he is an advocate for, but what is really
  motivating him was his new work at the intersection of API and AI. I don't
  have the time and budget to go to deep on AI, so I enjoy learning from someone
  who is as curious and pragmatic as I am about new technologies, a conversation
  that left me with some ideas of how I am going to use not just ChatGPT, but
  also Google Gemini for some of the API profiling work I am doing.
date: 2024-10-22T00:00:00.000Z
guestName: Raymond Camden
guestRole: Developer Advocate
guestCompany: Adobe
guestIndustry: Software
guestImage: /assets/img/people/raymond-camden-headshot.jpeg
bio: >-
  I'm an expert in developer evangelism and advocacy, web technologies, Jamstack
  and more with a passion for teaching others. I've written about, and presented
  on, technologies for the past twenty years and enjoy helping others become
  passionate about the web as well. My ideal role is as an evangelist/developer
  advocate where I can help others learn about new technologies and products. I
  write at raymondcamden.com (approximately 300K page views per month) and other
  industry publications. I've authored (and contributed to) multiple books over
  the years and speak at conferences around the world.
obfuscated: false
summary: Producing real world insights using AI APIs.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-conversations/api-evangelist-conversations-raymond-camden-adobe.wav
audio_length: 87897306
youtubeId: FutV8B9mwdE
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-raymond-camden-developer-advocate-at-adobe
duration: '0:16:37'
publish_date: '2024-10-22 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-10-22-raymond-camden-adobe.html
tags:
  - PDF
  - Images
  - AI
  - Artificial Intelligence
partnerImage: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-partners/apimatic-banner-728.jpg
partnerUrl: https://bit.ly/3NyONos
partnerTitle: Maximize API Adoption
conversation:
  - question: Who are you?
    answer: I am Raymond Camden. Welcome Ray.
  - question: What is your role?
    answer: I am a senior developer evangelist for Adobe.
  - question: What are you working on?
    answer: >-
      Too many different things. So my main like nine to five, uh, I was hired
      by the Acrobat services team, uh, which is a group of APIs related to
      document management. And I like to be honest when I talk about it and say,
      it's not. It's not cool, it's not awesome, but it's super practical. It's
      all kind of stuff like, you know, we're getting millions of documents and
      word, et cetera, and we want to, uh, consolidate on PDF. So we allow you
      to go from office to PDF at scale. Um, Again, not, not fun, but like super
      practical. Um, you need to do, you have millions of documents and you want
      to offer samples online because you sell eBooks. Uh, we can do things like
      splitting PDFs. So you can shove out like the first 10 pages, whatever.
      Uh, everything that you could do in Acrobat, the kind of slice and dice
      PDFs and stuff we have APIs for. Um, and very easy to use, uh, very
      simple. Very practical. Uh, there are some kind of cool ones where you
      could do things like use word as a kind of a template language and create
      dynamic PDFs and stuff like that. Uh, but. That's like my, my, my main
      thing, the main area where I work as an evangelist. I also am involved
      with our Firefly APIs as well. Um, these are the more fun ones to be
      honest, where, uh, you can do a lot of things with images. So, you know,
      from basic text to image, uh, to doing things at scale such that. I need
      to create banner ads and advertising in multiple formats, multiple
      languages, uh, with multiple different styles, uh, our Firefly or
      Photoshop they allow you to automate a lot of that, which, which I think
      is really, really neat. And one of the more practical uses, uh, for Gen
      AI, thirdly, my kind of third area, uh, API wise, anyway, uh, I've been
      doing a lot of Gen AI, uh, Uh, research on the Gemini platform from
      Google. Um, mainly because they were free. Like, honestly, like that's the
      only reason, uh, I know chat GPT, like they, they're number one, but you
      have to pay 20 bucks, which. Is I spend more on that on beer. Uh, but I
      didn't want to buy it. Like I just, I didn't, I didn't want to spend money
      to honestly like evangelize their product for them. And when Google
      announced their APIs and I could play with it for free, like that was it,
      I just went crazy into there. Um, I'll call out Cloudflare, Cloudflare
      also has a good free tier for AI stuff as well.
  - question: What can you do with Cloudflare?
    answer: >-
      uh, they have integrations with a couple of different models. So, uh, I
      last looked at it a year ago. I didn't realize it was that long. Um,
      they're serverless, they're, they're, they're serverless product, just
      workers. Is great in general, again, like a stupid free tier. Um, and they
      added native support to do AI stuff. And again, like a year ago, I did a
      quick test, sent a prompt, got a response. It just plain worked. Um, and
      again, very, very generous free tier, uh, over there.
  - question: What are you building?
    answer: >-
      Um, it's funny. Like when I first started, for some reason, I really
      wanted to be practical, which if you've been following me for a while,
      that's not at all. Um, if I find some new API, I will build something
      impractical with it. I'll have fun, but I kind of figure. I blog about it.
      I show you how easy to use. My use case is stupid, but hopefully you dear
      reader can have a practical, uh, use case based on what I showed you. Uh,
      and when I was playing with Gen AI, this is back early. A lot of the
      examples were frivolous. It was, you know, chatting and people would share
      fun examples. I would as well. And along with a not wanting to pay money
      for it be, I was, I felt like I should do something practical with it. Um,
      so. My initial experiments were just kind of like, kind of very basic.
      Here's some data, give me something back. Um, and then of course I went
      silly with it, but I. Started with basic prompts and just gradually
      learned a bit more. Um, especially like I got into it with Gemini right
      when their API came out. So as they added more stuff to it, I use that as
      an excuse to learn. So multimodal stuff, for example, uh, when they added
      APIs for that, that's when I learned multimodal calls and gen AI.
  - question: What benefits are there using the API over the UI?
    answer: >-
      Uh, so I think there's a couple answers to that. Uh, so Gemini has a great
      UI. They have an AI studio. Um, and I do a lot of prototyping there, but
      it's mostly a sanity check. Like I want to try this particular prompt. Um,
      So without writing code, even though it may be 5, 10 minutes, you know,
      real short, I'll go to AI studio. I'll do the prompt, you know, kind of
      hard coded, um, static example. And if I see, okay, I'm getting some
      logical out of this. This may work. Then I look at, um, writing code. Uh,
      one thing you find out with gen AI pretty quickly that the code is not
      hard at all. Um, it's, it's trivial. Like I remember that my first call to
      Gemini within like 30 minutes of looking at the doc and the code, less
      than that, I had it working. I could pass a prompt and get something back.
      That's when you learn that the prompt is incredibly important. The code is
      like just stupid. Post type calls. Um, it's a lot. I'm showing my age
      here. Uh, I started in, uh, back in dev with, with cold fusion. And one of
      the things that cold fusion did was make it really easy to talk to a
      database. And it did like, it was, you know, once you set it up, you
      could. Write SQL in your code and get stuff back. It was really, really
      simple. Then you learn writing good SQL, writing performance SQL, having
      your database set up. That was a like years and years of stuff that you
      had to learn. So gen AI, the code part for the most part has been next to
      nothing. Thinking about how to craft that has been a lot more work. And
      that's, I think kind of unique in the API space because typically you
      don't Think that much about arguments. Like if I'm doing imagery sizing,
      like, okay, I care about the size. Uh, but for Gen AI, you've spent way
      more time thinking about your prompt and thinking about the system
      instructions and all that I find it to be way, way more important than
      kind of what I'm used to typically when working with APIs.
  - question: Are semantics important to AI?
    answer: >-
      Yeah, so Jim and I has done some good work in that respects in terms of,
      uh, being able to spend, uh, send JSON  schema. Uh, so you can get kind of
      very precise, like, like one of the first things I found out. Gen AI is, I
      would just give you a blob of text back and it was cool text. But if you
      wanted like particular aspects of that, if you wanted to treat it like
      data and not just like human speaking, initially it was really hard to do
      that, like you could ask for JSON and sometimes it would just do random
      stuff, uh, with, with the Gemini, uh, being able to do JSON schema, you
      could say, I want an array of objects that has this key and this key, and
      you fill it in exactly like that. Uh, the blog posts I did two hours ago.
      Um, shows an example of that where in the first iteration, I was asking
      for insights and I got a great paragraph, a text back perfect. But then I
      wanted each insight by itself and I use a JSON schema to say you will give
      me an array of strings. And that gave me exactly that. The next iteration
      was, I want an array of insights, but for each insight, I want you to tell
      me if it's positive, negative, or neutral. And again, using JSON Schema, I
      was able to define, like, these are the exact strings that you will use
      when you return data. So that, that's been great, uh, for me for those
      type of demos.
  - question: How much time are you spending working with AI?
    answer: >-
      It changes every day, pretty much. Uh, you know, so part of the evangelist
      role is working with engineering, providing feedback, um, giving advice
      about how we should release stuff. And I do that for the Acrobat folks. I
      do that, uh, kind of unofficially. On the Firefly side as well. Um, and
      the Gen AI stuff is just general research. It's obviously. Becoming very,
      very important. So, um, it's, I, I kind of hit separate things each week
      in terms of what I'm researching. So the blog post from like two hours
      ago, uh, was an example of that, where it was just, uh, I had a web app
      for a stream. I did. This showing JavaScript charting and I'd build some
      sample, um, some sample sales data for the chart. And I saw a great blog
      post, uh, by, and give me a second. I want to make sure I say her name
      correctly. Uh, by Elizabeth, Elizabeth Siegel, uh, where she actually used
      cloud fare. Cloudflare's worker AI stuff to build a dashboard and added
      insights via AI into the dashboard. I thought that was an amazing idea. So
      I took my, just my one simple chart, took the exact same data, uh, and
      passed it to Gemini. And so now I have this web page that has a nice chart
      on top, but if you're like a CTO and just like, I don't want to look at a
      chart, that's too much work, uh, it has stuff like, you know, donut sales
      are going up, uh, banana sales are going down, apples are going up until
      the fall, whatever, uh, Stuff like that.Um, again, a big, huge thank you
      to her because it's awesome. I think to kind of mix those different, um,
      ways of showing data, um, on, on, on one web
slug: 2024-10-22-raymond-camden-adobe
---