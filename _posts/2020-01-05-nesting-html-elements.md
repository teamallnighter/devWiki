---
title: "Nesting HTML Elements"
layout: "post"
related: true
share: true
header:
  image: /assets/img/languages/html@3x.png
categories:
  - html
tags:
  - HTML
  - beginner
  - Nesting Elements
  - HTML Elements
---
# Nesting elements

Elements can be placed within other elements too — this is called **nesting**. If we wanted to state that our cat is **very** grumpy, we could wrap the word "very" in a `[<strong>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)` element, which means that the word is to be strongly emphasized:

    <p>My cat is <strong>very</strong> grumpy.</p>

You do however need to make sure that your elements are properly nested: in the example above, we opened the `p` element first, then the `strong` element, therefore we have to close the `strong` element first, then the `p`. The following is incorrect:

    <p>My cat is <strong>very grumpy.</p></strong>

The elements have to open and close correctly, so they are clearly inside or outside one another. If they overlap like above, then your web browser will try to make a best guess at what you were trying to say, and you may well get unexpected results. So don't do it!

### Block versus inline elements

There are two important categories of elements in HTML which you should know about. They are block-level elements and inline elements.

- Block-level elements form a visible block on a page — they will appear on a new line from whatever content went before it, and any content that goes after it will also appear on a new line. Block-level elements tend to be structural elements on the page that represent, for example, paragraphs, lists, navigation menus, footers, and so on. A block-level element wouldn't be nested inside an inline element, but it might be nested inside another block-level element.
- Inline elements are those that are contained within block-level elements and surround only small parts of the document’s content, not entire paragraphs and groupings of content. An inline element will not cause a new line to appear in the document; they would normally appear inside a paragraph of text, for example an `[<a>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)` element (hyperlink) or emphasis elements such as `[<em>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)` or `[<strong>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/strong)`.

Take the following example:

    <em>first</em><em>second</em><em>third</em><p>fourth</p><p>fifth</p><p>sixth</p>

`[<em>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/em)` is an inline element, so as you can see below, the first three elements sit on the same line as one another with no space in between. On the other hand, `[<p>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/p)` is a block-level element, so each element appears on a new line, with space above and below each (the spacing is due to default [CSS styling](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS) that the browser applies to paragraphs).

**Note**: HTML5 redefined the element categories in HTML5: see [Element content categories](https://html.spec.whatwg.org/multipage/indices.html#element-content-categories). While these definitions are more accurate and less ambiguous than the ones that went before, they are a lot more complicated to understand than "block" and "inline", so we will stick with these throughout this topic.

**Note**: The terms "block" and "inline", as used in this topic, should not be confused with [the types of CSS boxes](https://developer.mozilla.org/en-US/docs/Learn/CSS/Introduction_to_CSS/Box_model#Types_of_CSS_boxes) with the same names. While they correlate by default, changing the CSS display type doesn't change the category of the element and doesn't affect which elements it can contain and which elements it can be contained in. One of the reasons why HTML5 dropped these terms was to prevent this rather common confusion.

**Note**: You can find useful reference pages that include lists of block and inline elements — see [Block-level elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Block-level_elements) and [Inline elements](https://developer.mozilla.org/en-US/docs/Web/HTML/Inline_elements).