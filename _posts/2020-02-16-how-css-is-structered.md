---
title: "How CSS is structered"
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
  - Fundamentals
---

# How CSS is structered

## Applying CSS to your HTML

The first thing we will look at are the three methods of applying CSS to a document.

### External stylesheet

In the [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started) we linked an external stylesheet to our page. This is the most common and useful method of attaching CSS to a document as you can link the CSS to multiple pages, allowing you to style them all with the same stylesheet. In most cases, the different pages of a site will all look pretty much the same, therefore you can use the same set of rules for the basic look and feel.

An external stylesheet is when you have your CSS written in a separate file with a `.css`extension, and you reference it from an HTML `<link>` element:

    <!DOCTYPE html>
    <html><head><meta charset="utf-8"><title>My CSS experiment</title><link rel="stylesheet" href="styles.css"></head><body><h1>Hello World!</h1><p>This is my first CSS example</p></body></html>

The CSS file might look something like this:

    h1 {
      color: blue;
      background-color: yellow;
      border: 1px solid black;
    }
    
    p {
      color: red;
    }

The `href` attribute of the `[<link>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/link)` element needs to reference a file on your filesystem.

In the example above, the CSS file is in the same folder as the HTML document, but you could place it somewhere else and adjust the specified path to suit, for example:

    <!-- Inside a subdirectory called styles inside the current directory -->
    <link rel="stylesheet" href="styles/style.css"><!-- Inside a subdirectory called general, which is in a subdirectory called styles, inside the current directory -->
    <link rel="stylesheet" href="styles/general/style.css"><!-- Go up one directory level, then inside a subdirectory called styles -->
    <link rel="stylesheet" href="../styles/style.css">

### Internal stylesheet

An internal stylesheet is where you don't have an external CSS file, but instead place your CSS inside a `[<style>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/style)` element contained inside the HTML `[<head>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/head)`.

So the HTML would look like this:

    <!DOCTYPE html>
    <html><head><meta charset="utf-8"><title>My CSS experiment</title><style>
          h1 {
            color: blue;
            background-color: yellow;
            border: 1px solid black;
          }
    
          p {
            color: red;
          }
        </style></head><body><h1>Hello World!</h1><p>This is my first CSS example</p></body></html>

This can be useful in some circumstances (maybe you're working with a content management system where you can't modify the CSS files directly), but it isn't quite as efficient as external stylesheets — in a website, the CSS would need to be repeated across every page, and updated in multiple places if changes were required.

### Inline styles

Inline styles are CSS declarations that affect one element only, contained within a `style`attribute:

    <!DOCTYPE html>
    <html><head><meta charset="utf-8"><title>My CSS experiment</title></head><body><h1 style="color: blue;background-color: yellow;border: 1px solid black;">Hello World!</h1><p style="color:red;">This is my first CSS example</p></body></html>

**Please don't do this, unless you really have to!** It is really bad for maintenance (you might have to update the same information multiple times per document), and it also mixes your presentational CSS information with your HTML structural information, making the code harder to read and understand. Keeping different types of code separated makes for a much easier job for all who work on the code.

There are a few places where inline styles are more common, or even advisable. You might have to resort to using them if your working environment is really restrictive (perhaps your CMS only allows you to edit the HTML body). You will also see them used a lot in HTML email in order to get compatibility with as many email clients as possible.

## Playing with the CSS in this article

There is a lot of CSS to play with in this article. To do so, we'd recommend creating a new directory/folder on your computer, and inside it creating a copy of the following two files:

**index.html:**

    <!DOCTYPE html>
    <html lang="en"><head><meta charset="utf-8"><title>My CSS experiments</title><link rel="stylesheet" href="styles.css"></head><body><p>Create your test HTML here</p></body></html>

**styles.css:**

    /* Create your test CSS here */
    
    p {
      color: red;
    }

Then, when you come across some CSS you want to experiment with, replace the HTML `<body>` contents with some HTML to style, and start adding CSS to style it inside your CSS file.

If you are not using a system where you can easily create files, you can instead use the interactive editor below to experiment.

Read on, and have fun!

## Selectors

You can't talk about CSS without meeting selectors, and we have already discovered several different types in the [Getting started with CSS](https://developer.mozilla.org/en-US/docs/Learn/CSS/First_steps/Getting_started) tutorial. A selector is how we target something in our HTML document in order to apply styles to it. If your styles are not applying then it is likely that your selector does not match the thing you think it should match.

Each CSS rule starts with a selector or a list of selectors in order to tell the browser which element or elements the rules should apply to. All of the following are examples of valid selectors, or lists of selectors.

    h1
    a:link
    .manythings
    #onething
    *
    .box p
    .box p:first-child
    h1, h2, .intro

**Try creating some CSS rules that use the above selectors, and some HTML to be styled by them. If you don't know what some of the above syntax means, try searching for it on MDN!**

**Note**: You will learn a lot more about selectors in our [CSS selectors](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Selectors) tutorials, in the next module.

### Specificity

There will often be scenarios where two selectors could select the same HTML element. Consider the stylesheet below where I have a rule with a `p` selector that will set paragraphs to blue, and also a class that will set selected elements red.

    .special {
      color: red;
    }
    
    p {
      color: blue;
    }

Let's say that in our HTML document we have a paragraph with a class of `special`. Both rules could apply, so which one wins? What color do you think our paragraph will become?

    <p class="special">What color am I?</p>

The CSS language has rules to control which rule will win in the event of a collision — these are called **cascade** and **specificity**. In the below code block we have defined two rules for the `p` selector, but the paragraph ends up being colored blue. This is because the declaration that sets it to blue appears later in the stylesheet, and later styles override earlier ones. This is the cascade in action.

    p {
      color: red;
    }
    
    p {
      color: blue;
    }

However, in the case of our earlier block with the class selector and the element selector, the class will win, making the paragraph red — even thought it appears earlier in the stylesheet. A class is described as being more specific, or having more specificity than the element selector, so it wins.

**Try the above experiment for yourself — add the HTML to your experiment, then add the two `p { ... }` rules to your stylesheet. Next, change the first `p` selector to `.special`to see how it changes the styling.**

The rules of specificity and the cascade can seem a little complicated at first and are easier to understand once you have built up further CSS knowledge. In our [Cascade and inheritance](https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Cascade_and_inheritance)article, which you'll get to in the next module, I'll explain this in detail, including how to calculate specificity. For now, remember that this exists, and that sometimes CSS might not apply like you expect it to because something else in your stylesheet has a higher specificity. Identifying that more than one rule could apply to an element is the first step in fixing such issues.

## Properties and values

At its most basic level, CSS consists of two building blocks:

- **Properties**: Human-readable identifiers that indicate which stylistic features (e.g. `[font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)`, `[width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)`, `[background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)`) you want to change.
- **Values**: Each specified property is given a value, which indicates how you want to change those stylistic features (e.g. what you want to change the font, width or background color to.)

The below image highlights a single property and value. The property name is `color`, and the value `blue`.

![https://mdn.mozillademos.org/files/16498/declaration.png](https://mdn.mozillademos.org/files/16498/declaration.png)

A property paired with a value is called a *CSS declaration*. CSS declarations are put within *CSS Declaration Blocks*. This next image shows our CSS with the declaration block highlighted.

![https://mdn.mozillademos.org/files/16499/declaration-block.png](https://mdn.mozillademos.org/files/16499/declaration-block.png)

Finally, CSS declaration blocks are paired with *selectors* to produce *CSS Rulesets* (or *CSS Rules*). Our image contains two rules, one for the `h1` selector and one for the `p` selector. The rule for `h1` is highlighted.

![https://mdn.mozillademos.org/files/16500/rules.png](https://mdn.mozillademos.org/files/16500/rules.png)

Setting CSS properties to specific values is the core function of the CSS language. The CSS engine calculates which declarations apply to every single element of a page in order to appropriately lay it out and style it. What is important to remember is that both properties and values are case-sensitive in CSS. The property and value in each pair is separated by a colon (`:`).

**Try looking up different values of the following properties, and writing CSS rules that apply them to different HTML elements:**

- **`[font-size](https://developer.mozilla.org/en-US/docs/Web/CSS/font-size)`**
- **`[width](https://developer.mozilla.org/en-US/docs/Web/CSS/width)`**
- **`[background-color](https://developer.mozilla.org/en-US/docs/Web/CSS/background-color)`**
- **`[color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)`**
- **`[border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)`**

**Important**: If a property is unknown or if a value is not valid for a given property, the declaration is deemed *invalid* and is completely ignored by the browser's CSS engine.

**Important**: In CSS (and other web standards), US spelling has been agreed on as the standard to stick to where language uncertainty arises. For example, `color` should *always*be spelled `color`. `colour` won't work.

### Functions

While most values are relatively simple keywords or numeric values, there are some possible values which take the form of a function. An example would be the `calc()` function. This function allows you to do simple math from within your CSS, for example:

`<div class="outer"><div class="box">The inner box is 90% - 30px.</div></div>.outer { border: 5px solid black;
}
.box { padding: 10px; width: calc(90% - 30px); background-color: rebeccapurple; color: white;
}`

This renders like so:

**Open in CodePenOpen in JSFiddle**

A function consists of the function name, and then some brackets into which the allowed values for that function are placed. In the case of the `calc()` example above I am asking for the width of this box to be 90% of the containing block width, minus 30 pixels. This isn't something I can calculate ahead of time and just enter the value into the CSS, as I don't know what 90% will be. As with all values, the relevant page on MDN will have usage examples so you can see how the function works.

Another example would be the various values for `[transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)`, such as `rotate()`.

`<div class="box"></div>.box { margin: 30px; width: 100px; height: 100px; background-color: rebeccapurple; transform: rotate(0.8turn)
}`

The output from the above code looks like this:

**Open in CodePenOpen in JSFiddle**

**Try looking up different values of the following properties, and writing CSS rules that apply them to different HTML elements:**

- **`[transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)`**
- **`[background-image](https://developer.mozilla.org/en-US/docs/Web/CSS/background-image)`, in particular gradient values**
- **`[color](https://developer.mozilla.org/en-US/docs/Web/CSS/color)`, in particular rgb/rgba/hsl/hsla values**

## @rules

As yet, we have not encountered `[@rules](https://developer.mozilla.org/en-US/docs/Web/CSS/At-rule)` (pronounced "at-rules"). These are special rules giving CSS some instruction on how to behave. Some `@rules` are simple with the rule name and a value. For example, to import an additional stylesheet into your main CSS stylesheet you can use `@import`:

    @import 'styles2.css';

One of the most common `@rules` you will come across is `@media`, which allows you to use [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries) to apply CSS only when certain conditions are true (e.g. when the screen resolution is above a certain amount, or the screen is wider than a certain width).

In the below CSS, we have a stylesheet that gives the `<body>` element a pink background color. However, we then use `@media` to create a section of our stylesheet that will only be applied in browsers with a viewport wider than 30em. If the browser is wider than 30em then the background color will be blue.

    body {
      background-color: pink;
    }
    
    @media (min-width: 30em) {
      body {
        background-color: blue;
      }
    }

You will encounter other `@rules` throughout these tutorials.

**See if you can add a media query to your CSS that changes styles based on the viewport width. Change the width of your browser window to see the result.**

## Shorthands

Some properties like `[font](https://developer.mozilla.org/en-US/docs/Web/CSS/font)`, `[background](https://developer.mozilla.org/en-US/docs/Web/CSS/background)`, `[padding](https://developer.mozilla.org/en-US/docs/Web/CSS/padding)`, `[border](https://developer.mozilla.org/en-US/docs/Web/CSS/border)`, and `[margin](https://developer.mozilla.org/en-US/docs/Web/CSS/margin)` are called **shorthand properties** — this is because they allow you to set several property values in a single line, saving time and making your code neater in the process.

For example, this line:

    /* In 4-value shorthands like padding and margin, the values are applied
       in the order top, right, bottom, left (clockwise from the top). There are also other 
       shorthand types, for example 2-value shorthands, which set padding/margin
       for top/bottom, then left/right */
    padding: 10px 15px 15px 5px;

Does the same thing as all these together:

    padding-top: 10px;
    padding-right: 15px;
    padding-bottom: 15px;
    padding-left: 5px;

Whereas this line:

    background: red url(bg-graphic.png) 10px 10px repeat-x fixed;

Does the same thing as all these together:

    background-color: red;
    background-image: url(bg-graphic.png);
    background-position: 10px 10px;
    background-repeat: repeat-x;
    background-scroll: fixed;

We won't attempt to teach these exhaustively now — you'll come across many examples later on in the course, and you are advised to look up the shorthand property names in our [CSS reference](https://developer.mozilla.org/en-US/docs/Web/CSS/Reference) to find out more.

**Try adding the above declarations to your CSS to see how it affects the styling of your HTML. Try experimenting with some different values.**

**Warning**: While shorthands often allow you to miss out values, they will then reset any values that you do not include to their initial values. This ensures that a sensible set of values are used. However, this might be confusing if you were expecting the shorthand to only change the values you passed in.

## Comments

As with HTML, you are encouraged to make comments in your CSS, to help you understand how your code works when coming back to it after several months, and to help others coming to the code to work on it understand it.

Comments in CSS begin with `/*` and end with `*/`. In the below code block I have used comments to mark the start of different distinct code sections. This is useful to help you navigate your codebase as it gets larger — you can search for the comments in your code editor.

    /* Handle basic element styling */
    /* -------------------------------------------------------------------------------------------- */
    body {
      font: 1em/150% Helvetica, Arial, sans-serif; 
      padding: 1em; 
      margin: 0 auto; 
      max-width: 33em;
    }
    
    @media (min-width: 70em) {
      /* Let's special case the global font size. On large screen or window,
         we increase the font size for better readability */
      body {
        font-size: 130%;
      }
    }
    
    h1 {font-size: 1.5em;}
    
    /* Handle specific elements nested in the DOM  */
    /* -------------------------------------------------------------------------------------------- */
    div p, #id:first-line {
      background-color: red; 
      border-radius: 3px;
    }
    
    div p {
      margin: 0; 
      padding: 1em;
    }
    
    div p + p {
      padding-top: 0;
    }

Comments are also useful for temporarily *commenting out* certain parts of the code for testing purposes, for example if you are trying to find which part of your code is causing an error. In the next example I have commented out the rules for the `.special` selector.

    /*.special { 
      color: red; 
    }*/
    
    p { 
      color: blue; 
    }

**Add some comments to your CSS, to get used to using them.**

## Whitespace

White space means actual spaces, tabs and new lines. In the same manner as HTML, the browser tends to ignore much of the whitespace inside your CSS; a lot of the whitespace is just there to aid readability.

In our first example below we have each declaration (and rule start/end) on its own line — this is arguably a good way to write CSS, as it makes it easy to maintain and understand:

    body {
      font: 1em/150% Helvetica, Arial, sans-serif;
      padding: 1em;
      margin: 0 auto;
      max-width: 33em;
    }
    
    @media (min-width: 70em) {
      body {
        font-size: 130%;
      }
    }
    
    h1 {
      font-size: 1.5em;
    }
    
    div p,
    #id:first-line {
      background-color: red;
      border-radius: 3px;
    }
    
    div p {
      margin: 0;
      padding: 1em;
    }
    
    div p + p {
      padding-top: 0;
    }

You could write exactly the same CSS like so, with most of the whitespace removed — this is functionally identical to the first example, but I'm sure you'll agree that it is somewhat harder to read:

    body {font: 1em/150% Helvetica, Arial, sans-serif; padding: 1em; margin: 0 auto; max-width: 33em;}
    @media (min-width: 70em) { body {font-size: 130%;} }
    
    h1 {font-size: 1.5em;}
    
    div p, #id:first-line {background-color: red; border-radius: 3px;}
    div p {margin: 0; padding: 1em;}
    div p + p {padding-top: 0;}

The code layout you choose is usually a personal preference, although when you start to work in teams, you may find that the existing team has its own styleguide that specifies an agreed convention to follow.

The whitespace between the properties and their values you need to be careful of in CSS.

For example, the following declarations are valid CSS:

    margin: 0 auto;
    padding-left: 10px;

But the following are invalid:

    margin: 0auto;
    padding- left: 10px;