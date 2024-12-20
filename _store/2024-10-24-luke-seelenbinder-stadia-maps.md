---
title: >-
  API Evangelist Conversation with Luke Seelenbinder, Founder & CEO of Stadia
  Maps
description: >-
  I recently sat down for a conversation with Luke Seelenbinder, Founder & CEO
  of Stadia Maps to talk about taking on Google Maps with a more sensible and
  affordable mapping solution. As I learned more about the Stadia Maps journey I
  found ourselves talking about product-led motions for companies, and what the
  meaning of APIs as a product was. Luke and Stadia maps reflects the real world
  businesses who are doing APIs that I am looking to talk with, because they
  aren't playing in the startup hustle, and actually are building a real-world
  business that is in tune with and responds to actual market forces.
date: 2024-10-24T00:00:00.000Z
guestName: Luke Seelenbinder
guestRole: Founder & CEO
guestCompany: Stadia Maps
guestIndustry: Mapping
guestImage: /assets/img/people/luke-seelenbinder-headshot.jpeg
bio: >-
  Hi, I'm Luke. I founded Stadia Maps, a map and location API provider for
  businesses that need scale, flexibility, and privacy with a healthy dose of
  common sense and humanity. Over the past 15 years, I've built tech and
  partnerships at startups and established companies, focusing on honing the
  juxtaposition of technology and humanity. I speak, write, and occasionally
  have the pleasure of joining podcasts.
obfuscated: false
summary: Product-led mapping solutions that are in sync with real world markets.
subtitle: Conversation with People Doing Interesting Things with APIs
audio_file: >-
  https://kinlane-productions2.s3.us-east-1.amazonaws.com/api-evangelist-conversations/api-evangelist-conversations-luke-seelenbinder-stadia-maps.wav
audio_length: 77783686
youtubeId: Hk-2z6dExIY
sound_cloud: >-
  https://soundcloud.com/kinlane/api-evangelist-conversation-with-luke-seelenbinder-founder-ceo-of-stadia-maps
duration: '0:14:42'
publish_date: '2024-10-24 15:00:00'
url: >-
  https://conversations.apievangelist.com/sessions/2024-10-24-luke-seelenbinder-stadia-maps.html
tags:
  - Maps
  - Mapping
  - Products
partnerImage: >-
  https://kinlane-productions2.s3.amazonaws.com/api-evangelist-partners/apimatic-banner-728.jpg
partnerUrl: https://bit.ly/3NyONos
partnerTitle: Maximize API Adoption
conversation:
  - question: Who are you?
    answer: >-
      I'm Luke. I'm founder and CEO of Stadia Maps. And we offer a map and
      location API service for developers to use to integrate location into any
      part of their products. My background really goes back to starting as a
      technical developer. I've been using APIs kind of from the beginning of my
      career. Um, mostly at startups, creating. Products that consume APIs,
      creating APIs as a product. And now for the last few years I focused on
      creating a company with an API as the primary product.
  - question: What makes you think that you can take on Google Maps?
    answer: >-
      Well, I would like to say it's because we had this grand plan of, of
      absolute dominance and we knew we could do it. But at the end of the day,
      we actually were just kind of naive and we had a problem and we thought we
      could solve it. We, if you, anyone has used Google maps, um, you can look
      at their pricing over the last 10 years and 10 years ago, it was pretty
      much free. And so almost every developer in the world had used Google maps
      API for something. Um, and then about eight years ago, they changed that
      and they went from, Free to costing quite a lot. And that hit a company I
      was working at pretty hard. Um, there was a very small part of the site
      that was very useful, um, but really couldn't justify a cost of hundreds
      of dollars a month. And my co founder and I looked at the problem and
      said, there's this great source of data called open street map. Um, why
      don't we see if we can solve this problem for, uh, the company we're
      working at and then. Because we really wanted to create a company at the
      same time. We said, why not make stadium apps? Why not sell this API to
      everyone else? Cause everyone else is having this problem too. And out of
      that, we created kind of our first two APIs, which was mapping and then
      routing. And we kept. Thinking, well, no one's stopping us. So let's keep
      doing this. People are buying. Let's, let's create something real here.
      And so fast forward eight years, um, we were crazy, uh, but it actually
      ended up working out in the end.]
  - question: What are your thoughts on product-led growth?
    answer: >-
      It's a really good question. We actually were definitely product led for
      the vast majority of our, um, Time. And even now we're, we're mostly
      product led growth. Um, we've listened to clients quite a bit and our
      product roadmap has been less about us having a grand vision of this is
      exactly what we want to build, but more about listening to the clients we
      have today and making sure that we're building the next thing they need.
      Um, and when you look at that in terms of pricing, um, what thing we've
      always tried to do from the beginning is. When we look at building a new
      service, sure. We look at the, the service market for that particular
      product. Let's say it's a particular kind of map. Um, but we also look at
      it from French first principles. We ask. What should this cost? If we just
      look at it in, in raw terms, what is the actual technical requirements to
      go into this product? What are the data requirements? What are the kind of
      operational requirements? And then from there come to a number that gives
      us a really solid margin and then build the product knowing this is the
      target we want to be able to hit. Let's see how we can architect systems
      to hit this target. And that's led us to do some very interesting things
      over the course of Kind of life as a company. Um, everyone would tell you
      not to build a CDN. Um, I would tell you not to build a CDN, but we
      actually ended up building a CDN very early on in the company. And we
      still run on the same CDN because one of the key cost inputs for map tiles
      is. The cost of delivering them to the client, which is mostly bandwidth
      and request count, which when you have map tiles, they tend to be really
      high number of requests and really large amount of bandwidth. You put that
      together and people end up with CDN bills that are more, much higher than
      any other application. And so we ended up building a CDN, creating a much
      better cost of kind of delivering the product than our competitors. And
      that's allowed us to price very competitively in the market. Um, we have
      had price changes because obviously things cost more than they cost eight
      years ago. Um, but when you look at kind of the amount we cost relative to
      the markets, we've been trying to keep that quite consistent. And so that
      when companies come to us. They know they can start for a reasonable
      price. And then as they scale, they can stay in kind of an economically
      viable solution. So good
  - question: What does APIs as a product mean?
    answer: >-
      It means that our primary, the thing we primarily sell is not our
      dashboard or analytics. It is endpoints for developers to use. What we
      track people using is number of API requests. Um, what we. Cell is credits
      to get access to APIs. Um, and so basically everything we bill for comes
      down to. The API is a product. Um, and then that's to get different kinds
      of data because fundamentally an API is a request and a response. So if
      you look at our map API, it's a request for a part of the world at some
      scale and a response with the data for that part of the world, or if you
      look at our, uh, Geocoding service. It's a request with a search string.
      For instance, you search for Paris, France, and you get back a response,
      which is Jason. And it says Paris, France is at these coordinates. It's in
      this country. It's in this continent. These are this. Postal code, things
      like that. And that's to me what an API is a product looks like. It's
      actually kind of the, the raw technical, um, details of a request
      response, and that's the fundamental business unit that you're kind of
      selling.
  - question: What is your biggest challenge with APIs?
    answer: >-
      I think when you look at it, the first biggest challenge we hit was the
      technical, we had to start with what is amounts to gigabytes or terabytes
      of data and reduce it to something that's fast, efficient, reliable. Um,
      and that's the problem we really solved for the first probably four or
      five years of the company. And at that point, being technical founders, we
      realized that we'd spent five years building a product. And. Um, and so
      really the challenge has been as technical founders to learn how to market
      and sell this fantastic product that we built. Um, and I think if you look
      at a lot of technical find founders, it's the same growing process of you
      start with a great product and then you realize only 10 percent of the
      people that should be using it or using it. And you think, well, I'll add
      this feature. And then those. Other 90 percent of people will come because
      someone will talk about us. And then eventually you realize no one's going
      to talk about you. You have to go talk about yourself and go out and get
      people to be interested in, in what you've built. And that's really the
      challenge right now is we have quite a few customers, quite a few users,
      but actually getting out. To all the customers that could potentially
      benefit from what we've built at Stadia Maps.
  - question: Are you consumers just developers or business stakeholders?
    answer: >-
      I think through most of the life of the company, we have crafted what we,
      what we've built for developers. We are developers, so it's easiest for us
      to speak to other developers. And quite frequently, customers do come to
      us. Through kind of the development team. Um, but I think you're, you're
      right. That's quite a bit of the messaging and the kind of work we've done
      so far has been targeted at developers. And as we grow, it's going to have
      to also target the people making the decisions and do a better job of
      communicating the same values that developers need to communicate.
      Understand more intuitively because it's kind of what developers do every
      day is work with APIs and, and convert those same values into messaging
      that a business decision maker will understand.
  - question: What keeps you going each day?
    answer: >-
      I think it, it's really started because I love maps. Um, I've loved maps
      since I was a kid and the idea of being able to create something so visual
      and so, uh, aesthetically pleasing and then create a business out of that,
      it's just. It really is a kind of self supporting cycle of building a cool
      map, seeing people use it. And that's really grown from just loving maps
      to helping companies and fundamentally people solve problems. And I think
      as a technologist, that's what I've always tried to do is Take technology
      and use it to solve problems, not just create technology for its own sake
      and creating a company is really the best way in my mind to do that
      because you get instant feedback. People give you money because you're
      solving their problems and you get to use that as a feedback loop to then
      create a better product that solves more problems for more people.
slug: 2024-10-24-luke-seelenbinder-stadia-maps
---