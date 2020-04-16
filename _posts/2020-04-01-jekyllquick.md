---
title: "Jekyll Quickstart"
layout: "post"
related: true
share: true
header:
  image: /assets/img/languages/html@3x.png
categories:
  - jekyll
tags:
  - jekyll
  - quickstart
---

# Jekyll Quickstart

Jekyll is a static site generator. You give it text written in your favorite markup language and it uses layouts to create a static website. You can tweak how you want the site URLs to look, what data gets displayed on the site, and more.

PrerequisitesPermalink
See requirements.

Instructions Permalink
Install a full Ruby development environment.

Install Jekyll and bundler gems.

```ruby
gem install jekyll bundler
```

```ruby
Create a new Jekyll site at ./myblog.
```

```ruby
jekyll new myblog
```

Change into your new directory.

```ruby
cd myblog
```

Build the site and make it available on a local server.

```ruby
bundle exec jekyll serve
```

Browse to http://localhost:4000
If you encounter any errors during this process, see the troubleshooting page. Also, make sure you’ve installed the development headers and other prerequisites as mentioned on the requirements page.