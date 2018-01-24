---
path: "/blog/gatsby-blog"
date: "2018-01-21"
title: "Getting to know GatsbyJS on an intimate level"
---

Gatsby is a React-based static site generator, and the framework used to develop this site. If you are familiar at all with React, then it will be super easy to learn and use. It takes very little time to go from nothing to a minimal personal site or blog.. I pinky promise that this isn't sponsored content - GatsbyJS really is just that nice to use. It also has a mature plugin ecosystem, so there is tons of batteries-included functionality that you can get for free after a bit of googling or browsing [Awesome Gatsby](https://www.gatsbyjs.org/docs/awesome-gatsby/).

The only wrinkle of the gatsby ecosystem that I wasn't already familiar with was GraphQL. GraphQL is used by gatsby and its plugins for any procedural or dynamic data querying that you need. I use it here to get dynamically sized images (see the hero image on the homepage), and to generate blog pages from markdown files. This specific blog post is actually just a markdown file that I checked into the site's repository! After I spent some time reading about GraphQL, integrating it into my Gatsby setup was straightforward.

There are already tons of blog posts about setting up GatsbyJS, written by better authors than me, and with more complex configurations mine. So I won't do a deep dive on how to use or how to emulate the shitty design of this site, but feel free to peruse the source code on [GitHub](https://github.com/dcowen91/home). Now, the next step for me is to make this site actually look good, and to write an actually interesting blog post.
