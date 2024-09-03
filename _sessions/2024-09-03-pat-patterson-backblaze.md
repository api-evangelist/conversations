---
title: API Evangelist Conversation with Pat Patterson, Chief Technical Evangelist at Backblaze
description: This is the first actual edition of the API Evangelist Conversation podcast with my friend Pat Patterson, the Chief Technical Evangelist at Backblaze. Always enjoy learning from Pat as we dove into the meaning behind his title, as well as how Backblaze has standardized their API around the Amazon S3 storage API--essentially treating the API as the industry standard for storage.
date: 2024-09-03
youtubeId: m2b_bhmMBSs
guestName: Pat Patterson
guestRole: Chief Technical Evangelist
guestCompany: Backblaze
guestIndustry: Storage
guestImage: /assets/img/people/pat-patterson-headshot.png
bio: Pat has evangelism experience across four enterprise software companies in the end user computing, data, integration and identity spaces.
obfuscated: false
summary: Learning more about what it means to be a technical evangelist, and how the Amazon S3 API is considered to be a standard for cloud storage.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: https://kinlane-productions2.s3.amazonaws.com/api-evangelist-conversations/api-evangelist-conversation-2024-09-03-pat-patterson-backblaze.wav
audio_length: 140133244
sound_cloud: https://soundcloud.com/kinlane/api-evangelist-conversation-with-pat-patterson-chief-technical-evangelist-at-backblaze
duration: '0:17:59'
publish_date: "2024-09-03 15:00:00"
url: https://conversations.apievangelist.com/sessions/2024-09-03-pat-patterson-backblaze.html
tags:
  - Cloud Storage
  - Amazon S3
  - Evangelism
conversation:

    - question: Who are you?
      answer: I am Pat Patterson.

    - question: What is your role?
      answer: So I have the wonderful grandiose title of chief technical evangelist at Backblaze. 

    - question: Why do you use the title technical evangelist?
      answer: So, um, so I focus on our cloud object storage product, Backblaze B2, and a lot of the, my audience are developers, but a lot of them. Are not so they might be DevOps engineers admins and so I kind of chose that title to kind of, uh, emphasize that broad reach.

    - question: What industry do you work in?
      answer: Yeah. So we were founded, gosh, 2007, I think doing Mac and PC backup and successfully did that for a few years. And, and the founders realized, wow, we've built a cloud storage platform for backing up people's laptops.
      
      We could, uh, generalize this into cloud object storage. And so they, uh, they did that, I think in 2016, and then added an S3 compatible API in 2020. And, uh, here we are today with, uh, thousands of customers happily backing up, storing media, [00:02:00] writing whole applications around, uh, cloud object storage on that place.

    - question: What do you mean by S3 compatible storage?
      answer: So, you know, S3 was the original, uh, cloud web service, right? I think 2006, it was the very first Amazon web service and, um, they defined an API, uh, quite a simple, um, I'm not going to get into the details of whether or not it's restful, but a, a relatively simple, uh, for, uh, uploading data for storage in Amazon's, uh, cloud.
      
      So, uh, you know, that, that, uh, they obviously had fantastic first mover advantage there. Um, and, you know, as more, uh, cloud providers came along, I [00:03:00] saw this pattern of, um, uh, You know, some of them, uh, as Backblaze did, uh, you know, brought up cloud storage and maybe had their, uh, S3. But, uh, there were so many, uh, utilities and applications that used Amazon's S3 API, um, that, uh, The, I think the market kind of coalesced around it as a de facto standard.
      
      And, you know, I got to be fair to the guys, you know, AWS, uh, did a great job with that API, you know, the authentication, um, is, uh, you know, we can get it, actually, that's a good topic to talk about later, how authentication happens with S3, because it's like, they, they took different, uh, made different choices from like other products that were around at the time, but, um, it's very.
      
      Uh, amenable to, um, you know, third party providers providing their own cloud object storage. And then even Amazon's own SDKs and CLI and so on. You can just override the endpoint URL and use them with Blaze or MinIO, whatever other, uh, object. Storage that you happen to be using. 

    - question: Is the Amazon S3 API a standard?
      answer: It's interesting. So, you know, this whole industry relies, basically relies on Amazon's documentation, which is more or less accurate. So, um, you know, we, we, we, we, we don't have, um, You know, a W3C or whatever, you know, issuing these things on a date with a public process, you know, the [00:05:00] documents are there. And then, I don't know, tomorrow, Amazon could announce, Oh, here's a new S3 feature.
      
      And this is how it works. And these are the parameters. And then, uh, you know, we'll look at it and say, Okay, well, we won't necessarily jump on day one and say, Oh, wow, you know, scramble. Implement this, but we'll look at it. Amazon's done this. Um, is this something our customers need? Is this relevant to our space here?
      
      Um, and you know, ultimately we'd better implement this, you know, cut this customer demand here. We can implement this. And so. Uh, it's an interesting situation to be in, like it's, it's very much, um, S3 compatibility is, uh, is, is defined very dynamically, you know, your, your customer tests a particular product and it works then for their purposes, it's S3 compatible.
      
      There is no, uh, official test harness that you can run and get a stamp of approval from AWS. 

    - question: How long have you been an evangelist?
      answer: Well, when I started, there wasn't even that title. I think there was probably one evangelist in the industry and it was Guy Kawasaki at, at Apple, probably at that time. You know, I was, I think my title was something like technical architect and I was working on, um, single sign on at Sun Microsystems called Rest It Soul.
      
      And, um, we made a decision to open source that project and the. Director of engineering pointed at me and said, Pat, you're good at talking to people. You be the community guy. And there was, there was a bit of learning [00:08:00] from other projects. You know, open source was a big thing at Sun at the time, and you had glassfish and these other, uh, projects, open Solaris, but there was a lot of just making it up as you went along.
      
      Went along, you know, building a community around an open source product. Um, and that's really, that was 2004. So that's really what I've been doing for the past 20 years is, um, educating hands on technical professionals on how best to use a particular platform technology, um, you name it. 

    - question: What is the most effective tool in your API toolbox?
      answer: Uh, code. I would say, um, sample code is just essential. I mean, that's what I love about my job is that I'm continually coding, uh, in many different programming languages. And I get a bit confused now, sometimes I start putting semicolons in my Python and things like that. Um, but it really, you know, as a, as a.
      
      Teaching aid, um, didactic aid, I suppose I could say. Uh, code is invaluable. If you can give somebody, uh, something that runs, that solves something close to their problem. They've got a starting point that they can, they can work from. And, uh, you know, these days when you can not only, you know, point somebody at GitHub repo, you can point somebody at a Docker image that has a running version of that code.
      
      And so that, you know, they can, they can get started, uh, immediately. So, yeah, I mean, I, I, I. There is nothing better than, than working code for teaching a new concept. 

   - question: What is a priority for you right now?
     answer: Um, so it is, um, really explaining the new features that we are releasing. So again, that's coding. That's part of that. But also there is, uh, technical writing, writing articles, uh, presenting webinars. So it's bringing that together because, you know, this job, as you know, uh, is way more than just like sitting and like writing sample code.
   
     Um, I often talk about the, um, there's an There's been a diagram of people who really understand a particular technology and then people who would be comfortable standing up in front of 500, uh, hungry developers and explaining it. And that intersection is quite narrow. And that's what I'm [00:11:00] always doing.

     It's like balancing this, um, you know, I could go deep and write code and have a lot of fun. But if I do that for too long, I'm not actually communicating it, sending it out there. People forget like who you are if you go dark for too long. Um, on the other hand, if you're kind of out on the road at conferences and like, you know, networking and glad handing, um, you get out of touch with what's happening in the technology.

     So all the time I'm, um, You know, balancing those two sides in order to do my job for, you know, the company, which, although it doesn't, you know, I'm not like a sales guy with an ARR target, the intention of hiring an evangelist is they have a positive effect on your revenue. 

   - question: What keeps you going each day?
     answer: It's really the interaction with the community, you know, actually having a sense that you're making a difference and solving problems and answering questions and getting that feedback that, um, you know, what you've, what you've created has worth and meaning and is making a difference.
     
     I mean, that's, that's huge for me. I couldn't, you know, It cannot be a one way, uh, street and you know, that's another way. I, um, gosh, anybody that's had a conversation with me will be just like, so bored. Another way I describe this role. It's like you're a bridge between, uh, you know, product teams within the company and that external community.
     
     Hands on technical professionals, so developers, DevOps, admins. And on one side of the [00:13:00] bridge, you know, there's that outbound role of, Hey, here's the new feature. Here's some sample code. You know, here's a, uh, webinar that explains how to do it. And you can ask questions at the end, but on the other side of the street, you're bringing back in those experiences that feedback, the fact that, Oh, this is great.
     It doesn't really handle this common condition. You know, this, this feature works great for, uh, production, but the developer experience is a bit lacking, you know, all of that. Um, you know, being, um, in that not part, you know, as an evangelist, you're not part of the community or you're in the community. And, but, you know, having those interactions, bringing that experience back is, uh, Very, very rewarding.
---