---
title: "What is html"
layout: "post"
related: true
share: true
header:
  image: /assets/img/languages/html@3x.png
categories:
  - HTML
tags:
  - HTML
  - beginner
---

# What is HTML

## The Basics

> Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript.

>Web browsers receive HTML documents from a web server or from local storage and render the documents into multimedia web pages. HTML describes the structure of a web page semantically and originally included cues for the appearance of the document.

## The HTML Document

The standard lay out of the HTML Doc.

```html
    <!DOCTYPE html>
    <html>
      <head>
        <title>This is a title</title>
      </head>
      <body>
        <p>Hello world!</p>
      </body>
    </html>
```

The text between `<**html**>` and `</**html**>` describes the web page, and the text between `<**body**>` and `</**body**>` is the visible page content. The markup text `<**title**>This is a title</**title**>` defines the browser page title.

The Document Type Declaration `<!DOCTYPE html>` is for HTML5. If a declaration is not included, various browsers will revert to "[quirks mode](https://en.wikipedia.org/wiki/Quirks_mode)" for rendering

## HTML Elements

HTML documents imply a structure of nested [HTML elements](https://en.wikipedia.org/wiki/HTML_element). These are indicated in the document by HTML tags, enclosed in angle brackets thus: `<**p**>`

In the simple, general case, the extent of an element is indicated by a pair of tags: a "start tag" `<**p**>` and "end tag" `</**p**>`. The text content of the element, if any, is placed between these tags.

Tags may also enclose further tag markup between the start and end, including a mixture of tags and text. This indicates further (nested) elements, as children of the parent element.

The start tag may also include attributes within the tag. These indicate other information, such as identifiers for sections within the document, identifiers used to bind style information to the presentation of the document, and for some tags such as the `<**img**>` used to embed images, the reference to the image resource.

Some elements, such as the [line break](https://en.wikipedia.org/wiki/Line_breaking_character) `<**br**>`, do not permit any embedded content, either text or further tags. These require only a single empty tag (akin to a start tag) and do not use an end tag.

Many tags, particularly the closing end tag for the very commonly used paragraph element `<**p**>`, are optional. An HTML browser or other agent can infer the closure for the end of an element from the context and the structural rules defined by the HTML standard. These rules are complex and not widely understood by most HTML coders.

The general form of an HTML element is therefore: `<**tag** attribute1="value1" attribute2="value2">''content''</**tag**>`. Some HTML elements are defined as empty elements and take the form `<**tag** attribute1="value1" attribute2="value2">`. Empty elements may enclose no content, for instance, the `<**br**>` tag or the inline `<**img**>` tag. The name of an HTML element is the name used in the tags. Note that the end tag's name is preceded by a slash character, `/`, and that in empty elements the end tag is neither required nor allowed. If attributes are not mentioned, default values are used in each case.
