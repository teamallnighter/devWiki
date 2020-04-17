---
title: "LANDING"
layout: splash
permalink: /splash-page/
date: 2020-04-17
header:
  overlay_color: "#000"
  overlay_filter: "0.5"
  overlay_image: https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80
  actions:
    - label: "Enter"
      url: "https://devwiki.io/categories/"
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
excerpt: "Everything I've learned about web development.... so far"
intro: 
  - excerpt: 'When I started learning about web development I realized there was A LOT of information around. However, it is all over the place. This site was my idea to start gathering this information to one place."`'
feature_row:
  - image_path: https://images.unsplash.com/photo-1542831371-32f555c86880?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80
    image_caption: "Image courtesy of [RXspawn@Unsplash](https://unsplash.com/@rxspawn)"
    alt: "Notes and Articles"
    title: "Notes and Articles"
    excerpt: "Notes from my classes, articles I have found and anything I may want to reference later"
  - image_path: https://images.unsplash.com/photo-1529101091764-c3526daf38fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2091&q=80
    alt: "Cheatsheets"
    title: "Cheat Sheets"
    excerpt: "Quick references to just about anything you would need for webdev."
    url: "#test-link"
    btn_label: "Cheat Sheets"
    btn_class: "btn--primary"
  - image_path: https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    title: "DevDocs"
    excerpt: "A scraper that goes to MDN and pulls data back to the site."
feature_row2:
  - image_path: https://images.unsplash.com/photo-1554306274-f23873d9a26c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80
    alt: "placeholder image 2"
    title: "Placeholder Image Left Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Left aligned with `type="left"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row3:
  - image_path: https://images.unsplash.com/photo-1552308995-2baac1ad5490?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    alt: "placeholder image 2"
    title: "Placeholder Image Right Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Right aligned with `type="right"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
feature_row4:
  - image_path: https://images.unsplash.com/photo-1580927752452-89d86da3fa0a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1650&q=80
    alt: "placeholder image 2"
    title: "Placeholder Image Center Aligned"
    excerpt: 'This is some sample content that goes here with **Markdown** formatting. Centered with `type="center"`'
    url: "#test-link"
    btn_label: "Read More"
    btn_class: "btn--primary"
---

{% include feature_row id="intro" type="center" %}

{% include feature_row %}

{% include feature_row id="feature_row2" type="left" %}

{% include feature_row id="feature_row3" type="right" %}

{% include feature_row id="feature_row4" type="center" %}