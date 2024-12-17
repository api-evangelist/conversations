---
title: >-
  API Evangelist Conversation with Pat Patterson, Chief Technical Evangelist at
  Backblaze
description: >-
  This is the first actual edition of the API Evangelist Conversation podcast
  with my friend Pat Patterson, the Chief Technical Evangelist at Backblaze.
  Always enjoy learning from Pat as we dove into the meaning behind his title,
  as well as how Backblaze has standardized their API around the Amazon S3
  storage API--essentially treating the API as the industry standard for
  storage.
date: 2024-09-03T00:00:00.000Z
youtubeId: m2b_bhmMBSs
guestName: Pat Patterson
guestRole: Chief Technical Evangelist
guestCompany: Backblaze
guestIndustry: Storage
guestImage: /assets/img/people/pat-patterson-headshot.png
bio: >-
  Pat has evangelism experience across four enterprise software companies in the
  end user computing, data, integration and identity spaces.
obfuscated: false
summary: >-
  Learning more about what it means to be a technical evangelist, and how the
  Amazon S3 API is considered to be a standard for cloud storage.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-conversations/api-evangelist-conversation-2024-09-03-pat-patterson-backblaze.wav
audio_length: 140133244
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-pat-patterson-chief-technical-evangelist-at-backblaze
duration: '0:17:59'
publish_date: '2024-09-03 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-09-03-pat-patterson-backblaze.html
tags:
  - Cloud Storage
  - Amazon S3
  - Evangelism
partnerImage: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-partners/bump-banner-728.png
partnerUrl: https://bit.ly/3MEOGa9
partnerTitle: The API doc platform for Tech Writers & Engineers
conversation:
  - question: Who are you?
    answer: |
      I am Pat Patterson.
  - question: What is your role?
    answer: >
      I have the wonderful, grandiose title of Chief Technical Evangelist at
      Backblaze.
  - question: Why do you use the title technical evangelist?
    answer: >
      I focus on our cloud object storage product, Backblaze B2, and a lot of my
      audience are developers, but a lot of them are not. They might be DevOps
      engineers or admins, so I chose that title to emphasize that broad reach.
  - question: What industry do you work in?
    answer: >
      We were founded in 2007, doing Mac and PC backup, and successfully did
      that for a few years. And the founders realized, "Wow, we've built a cloud
      storage platform for backing up people's laptops. We could generalize this
      into cloud object storage." And so they did that, in 2016, and then added
      an S3-compatible API in 2020. And here we are today with thousands of
      customers happily backing up, storing media, writing whole applications
      around cloud object storage on Backblaze.
  - question: What do you mean by S3-compatible storage?
    answer: >
      So, S3 was the original cloud web service, in 2006. It was the very first
      Amazon web service, and they defined an API. I'm not going to get into the
      details of whether or not it's RESTful, but it's a relatively simple
      interface for uploading data for storage in Amazon's cloud. So they
      obviously had fantastic first-mover advantage there. As more cloud
      providers came along, I saw this pattern: some of them, as Backblaze did,
      brought up cloud storage and maybe had their own API that was similar to
      S3, but there were so many utilities and applications that used Amazon's
      S3 API that the market coalesced around it as a de facto standard. And
      I've got to be fair to the guys, AWS did a great job with that API. The
      authentication is... Actually, that's a good topic to talk about later,
      how authentication happens with S3, because they made different choices
      from other products that were around at the time, but it's very amenable
      to third party providers providing their own cloud object storage. And
      then even Amazon's own SDKs and CLI and so on, you can just override the
      endpoint URL and use them with Backblaze or MinIO, or whatever other
      object storage that you happen to be using. 
  - question: Is the Amazon S3 API a standard?
    answer: >
      It's interesting. This whole industry relies on Amazon's documentation,
      which is more or less accurate. We don't have a W3C or whatever, issuing
      these things - on a date, with a public process, the documents are there.
      And then, tomorrow, Amazon could announce, "Oh, here's a new S3 feature,
      and this is how it works, and these are the parameters." And then, we'll
      look at it and say, "Okay." Well, we won't necessarily jump on day one and
      say, "Oh, wow, scramble. Implement this!", but we'll look at it, "Amazon's
      done this. Is this something our customers need? Is this relevant to our
      space here?" And ultimately, "We'd better implement this; there's customer
      demand here, we can implement this." It's an interesting situation to be
      in; S3 compatibility is defined very dynamically. If your customer tests a
      particular product and it works, then, for their purposes, it's
      S3-compatible. There is no official test harness that you can run and get
      a stamp of approval from AWS.
  - question: How long have you been an evangelist?
    answer: >
      I'd say twenty years now. When I started, there wasn't even that title. I
      think there was probably one evangelist in the industry and it was Guy
      Kawasaki at Apple, probably, at that time. I think my title was something
      like technical architect, and I was working on single sign-on at Sun
      Microsystems, God rest its soul. We made a decision to open source that
      project, and the director of engineering pointed at me and said, "Pat,
      you're good at talking to people. You be the community guy." There was a
      bit of learning from other projects; Open source was a big thing at Sun at
      the time, and you had Glassfish and these other projects, OpenSolaris, but
      there was a lot of just making it up as you went along, building a
      community around an open source product; that was 2004. So that's really
      what I've been doing for the past 20 years, educating hands-on technical
      professionals on how best to use a particular platform, technology, you
      name it. 
  - question: What is the most effective tool in your API toolbox?
    answer: >
      Code. I would say sample code is just essential. What I love about my job
      is that I'm continually coding, in many different programming languages.
      And I get a bit confused now, sometimes I start putting semicolons in my
      Python and things like that. As a teaching aid, didactic aid, I suppose I
      could say, code is invaluable. If you can give somebody something that
      runs, that solves something close to their problem, they've got a starting
      point that they can work from. These days, when you can not only point
      somebody at a GitHub repo, but you can point them at a Docker image that
      has a running version of that code, they can get started immediately. So,
      there is nothing better than working code for teaching a new concept. 
  - question: What is a priority for you right now?
    answer: >
      It's really explaining the new features that we are releasing. So, again,
      that's coding, that's part of it. But also there is technical writing,
      writing articles, presenting webinars. It's bringing that together because
      this job, as you know, is way more than just sitting and writing sample
      code. There's a Venn diagram of people who really understand a particular
      technology and then people who would be comfortable standing up in front
      of 500 hungry developers and explaining it, and that intersection is quite
      narrow. That's what I'm always doing. It's like balancing: I could go deep
      and write code and have a lot of fun, but if I do that for too long, I'm
      not actually communicating it, sending it out there. People forget who you
      are if you go dark for too long. On the other hand, if you're out on the
      road at conferences and networking and glad-handing, you get out of touch
      with what's happening in the technology. So, all the time I'm balancing
      those two sides in order to do my job for the company. I'm not like a
      sales guy with an ARR target, but the intention of hiring an evangelist is
      they have a positive effect on your revenue. 
  - question: What keeps you going each day?
    answer: >
      It's really the interaction with the community, actually having a sense
      that you're making a difference, solving problems, answering questions and
      getting that feedback that what you've created has worth and meaning and
      is making a difference. That's huge for me. It cannot be a one way street.
      Anybody that's had a conversation with me will be so bored! Another way I
      describe this role, it's like you're a bridge between product teams within
      the company and that external community of hands-on technical
      professionals: developers, DevOps, admins. On one side of the bridge,
      there's that outbound role of, "Hey, here's the new feature. Here's some
      sample code. Here's a webinar that explains how to do it, and you can ask
      questions at the end." But on the other side of the street, you're
      bringing back in those experiences, that feedback, the fact that, "Oh,
      this is great, but it doesn't really handle this common condition. This
      feature works great for production, but the developer experience is a bit
      lacking." As an evangelist, you're not part of the community, you're in
      the community. And having those interactions, bringing that experience
      back is very, very rewarding.
slug: 2024-09-03-pat-patterson-backblaze
---