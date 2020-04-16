---
title: "HTML Attributes"
layout: "post"
related: true
share: true
header:
  image: /assets/img/languages/html@3x.png
categories:
  - html
tags:
  - html Attributes
  - beginner
---
# Attributes

Elements can also have attributes, which look like this:

![https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png](https://mdn.mozillademos.org/files/9345/grumpy-cat-attribute-small.png)

Attributes contain extra information about the element that you don't want to appear in the actual content. In this case, the **`class`** attribute allows you to give the element an identifying name, that can be used later to target the element with style information and other things.

An attribute should have:

- A space between it and the element name (or the previous attribute, if the element already has one or more attributes).
- The attribute name, followed by an equal sign.
- An attribute value, with opening and closing quote marks wrapped around it.

## Adding attributes to an element

Another example of an element is `[<a>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/a)` — this stands for "anchor" and will make the piece of text it wraps around into a hyperlink. This can take a number of attributes, but several are as follows:

- **`href`**: This attribute's value specifies the web address that you want the link to point to; where the browser navigates to when the link is clicked. For example, `href="https://www.mozilla.org/"`.
- **`title`**: The `title` attribute specifies extra information about the link, such as what page is being linked to. For example, `title="The Mozilla homepage"`. This will appear as a tooltip when the element is hovered over.
- **`target`**: The `target` attribute specifies the browsing context that will be used to display the link. For example, `target="_blank"` will display the link in a new tab. If you want to display the link in the current tab, just omit this attribute.

Edit the line below in the *Input* area to turn it into a link to your favorite website.

1. First, add the `<a>` element.
2. Second, add the `href` attribute and the `title` attribute.
3. Lastly, specify the `target` attribute to open the link in the new tab.

You'll be able to see your changes update live in the *Output* area. You should see a link that when hovered over displays the value of the `title` attribute, and when clicked, navigates to the web address in the `href` attribute. Remember that you need to include a space between the element name, and each attribute.

If you make a mistake, you can always reset it using the *Reset* button. If you get really stuck, press the *Show solution* button to see the answer.

## Boolean attributes

You'll sometimes see attributes written without values — this is perfectly allowed. These are called Boolean attributes, and they can only have one value, which is generally the same as the attribute name. As an example, take the `[disabled](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-disabled)` attribute, which you can assign to form input elements, if you want them to be disabled (greyed out) so the user can't enter any data in them.

    <input type="text" disabled="disabled">

As shorthand, it is perfectly allowable to write this as follows (we've also included a non-disabled form input element for reference, to give you more of an idea what is going on):

    <!-- using the disabled attribute prevents the end user from entering text into the input box -->
    <input type="text" disabled><!-- The user can enter text into the follow input, as it doesn't contain the disabled attribute -->
    <input type="text">

## Omitting quotes around attribute values

When you look around the World Wide Web, you'll come across a number of strange markup styles, including attribute values without quotes. This is allowable in certain circumstances, but will break your markup in others. For example, if we revisit our link example from earlier, we could write a basic version with only the `href` attribute, like this:

    <a href=https://www.mozilla.org/>favorite website</a>

However, as soon as we add the `title` attribute in this style, things will go wrong:

    <a href=https://www.mozilla.org/ title=The Mozilla homepage>favorite website</a>

At this point the browser will misinterpret your markup, thinking that the `title` attribute is actually three attributes — a title attribute with the value "The", and two Boolean attributes, `Mozilla` and `homepage`. This is obviously not what was intended, and will cause errors or unexpected behavior in the code, as seen in the live example below. Try hovering over the link to see what the title text is!

Our advice is to always include the attribute quotes — it avoids such problems, and results in more readable code too.

## Single or double quotes

In this article you'll notice that the attributes are all wrapped in double quotes. You might however see single quotes in some people's HTML code. This is purely a matter of style, and you can feel free to choose which one you prefer. Both the following lines are equivalent:

    <a href="http://www.example.com">A link to my example.</a><a href='http://www.example.com'>A link to my example.</a>

You should however make sure you don't mix them together. The following will go wrong!

    <a href="http://www.example.com'>A link to my example.</a>

If you've used one type of quote in your HTML, you can include the other type of quote inside your attribute values without causing any problems:

    <a href="http://www.example.com" title="Isn't this fun?">A link to my example.</a>

However if you want to include a quote, within the quotes where both the quotes are of the same type (single quote or double quote), you'll have to [use HTML entities](https://developer.mozilla.org/en-US/docs/Learn/HTML/Introduction_to_HTML/Getting_started#Entity_references_Including_special_characters_in_HTML) for the quotes. For example, this will break:

    <a href='http://www.example.com' title='Isn't this fun?'>A link to my example.</a>

So you need to do this:

    <a href='http://www.example.com' title='Isn&#39;t this fun?'>A link to my example.</a>