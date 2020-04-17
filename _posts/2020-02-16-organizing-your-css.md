---
title: "Organizing your CSS"
layout: "post"
related: true
share: true
related: true
header:
  image: /assets/img/languages/html@3x.png
categories:
  - CSS
tags:
  - css
  - Organization
  - Fundamentals
---

# Organizing your CSS

## Tips to keep your CSS tidy

Here are some general suggestions for ways to keep your stylesheets organised and tidy.

### Does your project have a coding style guide?

If you are working with a team on an existing project, the first thing to check is whether the project has an existing style guide for CSS. The team style guide should always win over your own personal preferences. There often isn't a right or wrong way to do things, but consistency is important.

For example, have a look at the [CSS guidelines for MDN code examples](https://developer.mozilla.org/en-US/docs/MDN/Contribute/Guidelines/Code_guidelines/CSS).

### Keep it consistent

If you get to set the rules for the project or are working alone, then the most important thing to do is to keep things consistent. Consistency can be applied in all sorts of ways, such as using the same naming conventions for classes, choosing one method of describing color, or maintaining consistent formatting (for example will you use tabs or spaces to indent your code? If spaces, how many spaces?)

Having a set of rules you always follow reduces the amount of mental overhead needed when writing CSS, as some of the decisions are already made.

### Formatting readable CSS

There are a couple of ways you will see CSS formatted. Some developers put all of the rules onto a single line, like so:

    .box { background-color: #567895; }
    h2 { background-color: black; color: white; }

Other developers prefer to break everything onto a new line:

    .box {
      background-color: #567895;
    }
    
    h2 {
      background-color: black;
      color: white;
    }

CSS doesn't mind which one you use. We personally find it is more readable to have each property and value pair on a new line.

### Comment your CSS

Adding comments to your CSS will help any future developer work with your CSS file, but will also help you when you come back to the project after a break.

    /* This is a CSS comment
    It can be broken onto multiple lines. */

A good tip is to add a block of comments between logical sections in your stylesheet too, to help locate different sections quickly when scanning through, or even give you something to search for to jump right into that part of the CSS. If you use a string which won't appear in the code you can jump from section to section by searching for it — below we have used `||`.

    /* || General styles */
    
    ...
    
    /* || Typography */
    
    ...
    
    /* || Header and Main Navigtion */
    
    ...

You don't need to comment every single thing in your CSS, as much of it will be self-explanatory. What you should comment are the things where you made a particular decision for a reason.

You may have used a CSS property in a specific way to get around older browser incompatibilities, for example:

    .box {
      background-color: red; /* fallback for older browsers that don't support gradients */
      background-image: linear-gradient(to right, #ff0000, #aa0000);
    }

Perhaps you followed a tutorial to achieve something, and the CSS is a little non-obvious. In that case you could add the URL of the tutorial to the comments. You will thank yourself when you come back to this project in a year or so, and can vaguely remember there was a great tutorial about that thing, but where is it?

### Create logical sections in your stylesheet

It is a good idea to have all of the common styling first in the stylesheet. This means all of the styles which will generally apply unless you do something special with that element. You will typically have rules set up for:

- `body`
- `p`
- `h1`, `h2`, `h3`, `h4`, `h5`
- `ul` and `ol`
- The `table` properties
- Links

In this section of the stylesheet we are providing default styling for the type on the site, setting up a default style for data tables and lists and so on.

    /* || GENERAL STYLES */
    
    body { ... }
    
    h1, h2, h3, h4 { ... }
    
    ul { ... }
    
    blockquote { ... }

After this section we could define a few utility classes, for example a class that removes the default list style for lists we're going to display as flex items or in some other way. If you have a few things you know you will want to apply to lots of different elements, they can come in this section.

    /* || UTILITIES */
    
    .nobullets {
      list-style: none;
      margin: 0;
      padding: 0;
    }
    
    ...

Then we can add everything that is used sitewide. That might be things like the basic page layout, the header, navigation styling, and so on.

    /* || SITEWIDE */
    
    .main-nav { ... }
    
    .logo { ... }

Finally we will include CSS for specific things, broken down by the context, page or even component in which they are used.

    /* || STORE PAGES */
    
    .product-listing { ... }
    
    .product-box { ... }

By ordering things in this way, we at least have an idea in which part of the stylesheet we will be looking for something that we want to change.

### Avoid overly-specific selectors

If you create very specific selectors you will often find that you need to duplicate chunks of your CSS to apply the same rules to another element. For example, you might have something like the below selector, which applies the rule to a `<p>` with a class of `box` inside an `<article>`with a class of `main`.

    article.main p.box {
      border: 1px solid #ccc;
    }

If you then wanted to apply the same rules to something outside of `main`, or to something other than a `<p>`, you would have to add another selector to these rules or create a whole new ruleset. Instead, you could create a class called `box` and apply that anywhere.

    .box {
      border: 1px solid #ccc;
    }

There will be times when making something more specific makes sense, however this will generally be an exception rather than usual practice.

### Break large stylesheets into multiple smaller ones

In particular in cases where you have very different styles for distinct parts of the site, you might want to have a stylesheet that includes all the global rules and then smaller ones that include the specific rules needed for those sections. You can link to multiple stylesheets from one page, and the normal rules of the cascade apply, with rules in stylesheets linked later coming after rules in stylesheets linked earlier.

For example, we might have an online store as part of the site, with a lot of CSS used only for styling the product listings and forms needed for the store. It would make sense to have those things in a different stylesheet, only linked to on store pages.

This can make it easier to keep your CSS organised, and also means that if multiple people are working on the CSS you will have fewer situations where two people need to work on the same stylesheet at once, leading to conflicts in source control.

## Other tools that can help

CSS itself doesn't have much in the way of in-built organisation, therefore you need to do the work to create consistency and rules around how you write CSS. The web community has also developed various tools and approaches that can help you to manage larger CSS projects. As they may be helpful for you to investigate, and you are likely to come across these things when working with other people, we've included a short guide to some of these.

### CSS methodologies

Instead of needing to come up with your own rules for writing CSS, you may benefit from adopting one of the approaches already designed by the community and tested across many projects. These methodologies are essentially CSS coding guides that take a very structured approach to writing and organising CSS. Typically they tend to result in more verbose use of CSS than you might have if you wrote and optimised every selector to a custom set of rules for that project.

However, you do gain a lot of structure by adopting one and, as many of these systems are very widely used, other developers are more likely to understand the approach you are using and be able to write their CSS in the same way, rather than having to work out your own personal methodology from scratch.

### OOCSS

Most of the approaches that you will encounter owe something to the concept of Object Oriented CSS (OOCSS), an approach made popular by [the work of Nicole Sullivan](https://github.com/stubbornella/oocss/wiki). The basic idea of OOCSS is to separate your CSS into reusable objects, which can be used anywhere you need on your site. The standard example of OOCSS is the pattern described as [The Media Object](https://developer.mozilla.org/en-US/docs/Web/CSS/Layout_cookbook/Media_objects). This is a pattern with a fixed size image, video or other element on one side, and flexible content on the other. It's a pattern we see all over websites for comments, listings, and so on.

If you are not taking an OOCSS approach you might create custom CSS for the different places this pattern is used, for example creating a class called `comment` with a bunch of rules for the component parts, then a class called `list-item` with almost the same rules as the `comment`class except for some tiny differences. The differences between these two components is that the list-item has a bottom border, and images in comments have a border whereas list-item images do not.

    .comment {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }
    
    .comment img {
      border: 1px solid grey;
    }
    
    .comment .content {
      font-size: .8rem;
    }
    
    .list-item {
      display: grid;
      grid-template-columns: 1fr 3fr;
      border-bottom: 1px solid grey;
    }
    
    .list-item .content {
      font-size: .8rem;
    }

In OOCSS, you would create one pattern called `media` that would have all of the common CSS for both patterns — a base class for things that are generally the shape of the media object. Then we'd add an additional class to deal with those tiny differences, thus extending that styling in specific ways.

    .media {
      display: grid;
      grid-template-columns: 1fr 3fr;
    }
    
    .media .content {
      font-size: .8rem;
    }
    
    .comment img {
      border: 1px solid grey;
    }
    
     .list-item {
      border-bottom: 1px solid grey;
    }

In your HTML the comment would need both the `media` and `comment` classes applied:

    <div class="media comment"><img /><div class="content"></div></div>

The list-item would have `media` and `list-item` applied:

    <ul><li class="media list-item"><img /><div class="content"></div></li></ul>

The work that Nicole Sullivan did in describing this approach and promoting it means that even people who are not strictly following an OOCSS approach today will generally be reusing CSS in this way — it has entered our understanding as a good way to approach things in general.

### BEM

BEM stands for Block Element Modifier. In BEM a block is a standalone entity such as a button, menu, or logo. An element is something like a list item or a title that is tied to the block it is in. A modifier is a flag on a block or element that changes the styling or behavior. You will be able to recognise code that uses BEM due to the extensive use of dashes and underscores in the CSS classes. For example, look at the classes applied to this HTML from the page about [BEM Naming conventions](http://getbem.com/naming/):

    <form class="form form--theme-xmas form--simple"><input class="form__input" type="text" /><input
        class="form__submit form__submit--disabled"type="submit" /></form>

The additional classes are similar to those used in the OOCSS example, however they use the strict naming conventions of BEM.

BEM is widely used in larger web projects and many people write their CSS in this way. It is likely that you will come across examples, even in tutorials, that use BEM syntax, without mentioning why the CSS is structured in such a way.

To read more about the system read [BEM 101](https://css-tricks.com/bem-101/) on CSS Tricks.

### Other common systems

There are a large number of these systems in use. Other popular approaches include [Scalable and Modular Architecture for CSS (SMACSS)](http://smacss.com/), created by Jonathan Snook, [ITCSS](https://itcss.io/) from Harry Roberts, and [Atomic CSS (ACSS)](https://acss.io/), originally created by Yahoo!. If you come across a project that uses one of these approaches then the advantage is that you will be able to search and find many articles and guides to help you understand how to code in the same style.

The disadvantage of using such a system is that they can seem overly complex, especially for smaller projects.

### Build systems for CSS

Another way to organise CSS is to take advantage of some of the tooling that is available for front-end developers, which allows you to take a slightly more programmatic approach to writing CSS. There are a number of tools which we refer to as *pre-processors* and *post-processors*. A pre-processor runs over your raw files and turns them into a stylesheet, whereas a post-processor takes your finished stylesheet and does something to it — perhaps to optimize it in order that it will load faster.

Using any of these tools will require that your development environment can run the scripts that do the pre and post-processing. Many code editors can do this for you, or you can install command line tools to help.

The most popular pre-processor is [Sass](https://sass-lang.com/). This is not a Sass tutorial, so I will briefly explain a couple of the things that Sass can do, which are really helpful in terms of organisation, even if you don't use any of the other Sass features.

### Defining variables

CSS now has native [custom properties](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties), making this feature increasingly less important, however one of the reasons you might use Sass is to be able to define all of the colors and fonts used in a project as settings, then use that variable around the project. This means that if you realise you have used the wrong shade of blue, you only need change it in one place.

If we created a variable called `$base-color` as in the first line below, we could then use it through the stylesheet anywhere that required that color.

    $base-color: #c6538c;
    
    .alert {
      border: 1px solid $base-color;
    }

Once compiled to CSS, you would end up with the following CSS in the final stylesheet.

    .alert { 
      border: 1px solid #c6538c; 
    }

### Compiling component stylesheets

I mentioned above that one way to organise CSS is to break down stylesheets into smaller stylesheets. When using Sass you can take this to another level and have lots of very small stylesheets — even going as far as having a separate stylesheet for each component. By using the include functionality in Sass these can then all be compiled together into one, or a small number of stylesheets to actually link into your website.

You can see how one developer approaches the problem in [this blog post](https://www.lauraleeflores.com/blog/how-to-organize-your-css-files).

**Note**: A simple way to try out Sass is to use [CodePen](https://codepen.io/) — you can enable Sass for your CSS in the Settings for a Pen, and CodePen will then run the Sass parser for you, in order that you can see the resulting webpage with regular CSS applied. Sometimes you will find that CSS tutorials have used Sass rather than plain CSS in their CodePen demos, so it is handy to know a little bit about it.

### Post-processing for optimization

If you are concerned about adding size to your stylesheets by adding a lot of additional comments and whitespace for example, then a post-processing step could be to optimize the CSS by stripping out anything unneccessary in the production version. An example of a post-processor solution for doing this would be [cssnano](https://cssnano.co/).