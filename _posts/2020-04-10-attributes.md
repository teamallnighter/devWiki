Attributes
==========

Elements in HTML have **attributes**; these are additional values that
configure the elements or adjust their behavior in various ways to meet
the criteria the users want.

Attribute list {#Attribute_list}
--------------

+--------------------------+--------------------------+--------------------------+
| Attribute Name           | Elements                 | Description              |
+==========================+==========================+==========================+
| `accept`                 | [`<form>`](element/form) | List of types the server |
|                          | ,                        | accepts, typically a     |
|                          | [`<input>`](element/inpu | file type.               |
|                          | t)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `accept-charset`         | [`<form>`](element/form) | List of supported        |
|                          |                          | charsets.                |
+--------------------------+--------------------------+--------------------------+
| `accesskey`              | [Global                  | Defines a keyboard       |
|                          | attribute](global_attrib | shortcut to activate or  |
|                          | utes)                    | add focus to the         |
|                          |                          | element.                 |
+--------------------------+--------------------------+--------------------------+
| `action`                 | [`<form>`](element/form) | The URI of a program     |
|                          |                          | that processes the       |
|                          |                          | information submitted    |
|                          |                          | via the form.            |
+--------------------------+--------------------------+--------------------------+
| `align`                  | [`<applet>`](element/app | Specifies the horizontal |
|                          | let),                    | alignment of the         |
|                          | [`<caption>`](element/ca | element.                 |
|                          | ption),                  |                          |
|                          | [`<col>`](element/col),  |                          |
|                          | [`<colgroup>`](element/c |                          |
|                          | olgroup),                |                          |
|                          | [`<hr>`](element/hr),    |                          |
|                          | [`<iframe>`](element/ifr |                          |
|                          | ame),                    |                          |
|                          | [`<img>`](element/img),  |                          |
|                          | [`<table>`](element/tabl |                          |
|                          | e),                      |                          |
|                          | [`<tbody>`](element/tbod |                          |
|                          | y),                      |                          |
|                          | [`<td>`](element/td),    |                          |
|                          | [`<tfoot>`](element/tfoo |                          |
|                          | t)                       |                          |
|                          | , [`<th>`](element/th),  |                          |
|                          | [`<thead>`](element/thea |                          |
|                          | d),                      |                          |
|                          | [`<tr>`](element/tr)     |                          |
+--------------------------+--------------------------+--------------------------+
| `allow`                  | [`<iframe>`](element/ifr | Specifies a              |
|                          | ame)                     | feature-policy for the   |
|                          |                          | iframe.                  |
+--------------------------+--------------------------+--------------------------+
| `alt`                    | [`<applet>`](element/app | Alternative text in case |
|                          | let),                    | an image can't be        |
|                          | [`<area>`](element/area) | displayed.               |
|                          | ,                        |                          |
|                          | [`<img>`](element/img),  |                          |
|                          | [`<input>`](element/inpu |                          |
|                          | t)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `async`                  | [`<script>`](element/scr | Indicates that the       |
|                          | ipt)                     | script should be         |
|                          |                          | executed asynchronously. |
+--------------------------+--------------------------+--------------------------+
| `autocapitalize`         | [Global                  | Controls whether and how |
|                          | attribute](global_attrib | text input is            |
|                          | utes)                    | automatically            |
|                          |                          | capitalized as it is     |
|                          |                          | entered/edited by the    |
|                          |                          | user.                    |
+--------------------------+--------------------------+--------------------------+
| `autocomplete`           | [`<form>`](element/form) | Indicates whether        |
|                          | ,                        | controls in this form    |
|                          | [`<input>`](element/inpu | can by default have      |
|                          | t),                      | their values             |
|                          | [`<textarea>`](element/t | automatically completed  |
|                          | extarea)                 | by the browser.          |
+--------------------------+--------------------------+--------------------------+
| `autofocus`              | [`<button>`](element/but | The element should be    |
|                          | ton),                    | automatically focused    |
|                          | [`<input>`](element/inpu | after the page loaded.   |
|                          | t),                      |                          |
|                          | [`<keygen>`](element/key |                          |
|                          | gen),                    |                          |
|                          | [`<select>`](element/sel |                          |
|                          | ect),                    |                          |
|                          | [`<textarea>`](element/t |                          |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `autoplay`               | [`<audio>`](element/audi | The audio or video       |
|                          | o),                      | should play as soon as   |
|                          | [`<video>`](element/vide | possible.                |
|                          | o)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `bgcolor`                | [`<body>`](element/body) | Background color of the  |
|                          | ,                        | element.                 |
|                          | [`<col>`](element/col),  |                          |
|                          | [`<colgroup>`](element/c | **Note:** This is a      |
|                          | olgroup),                | legacy attribute. Please |
|                          | [`<marquee>`](https://de | use the CSS              |
|                          | veloper.mozilla.org/en-U | [`background-color`](htt |
|                          | S/docs/Web/HTML/Element/ | ps://developer.mozilla.o |
|                          | marquee),                | rg/en-US/docs/Web/CSS/ba |
|                          | [`<table>`](element/tabl | ckground-color)          |
|                          | e),                      | property instead.        |
|                          | [`<tbody>`](element/tbod |                          |
|                          | y),                      |                          |
|                          | [`<tfoot>`](element/tfoo |                          |
|                          | t),                      |                          |
|                          | [`<td>`](element/td),    |                          |
|                          | [`<th>`](element/th),    |                          |
|                          | [`<tr>`](element/tr)     |                          |
+--------------------------+--------------------------+--------------------------+
| `border`                 | [`<img>`](element/img),  | The border width.        |
|                          | [`<object>`](element/obj |                          |
|                          | ect),                    | **Note:** This is a      |
|                          | [`<table>`](element/tabl | legacy attribute. Please |
|                          | e)                       | use the CSS              |
|                          |                          | [`border`](https://devel |
|                          |                          | oper.mozilla.org/en-US/d |
|                          |                          | ocs/Web/CSS/border)      |
|                          |                          | property instead.        |
+--------------------------+--------------------------+--------------------------+
| `buffered`               | [`<audio>`](element/audi | Contains the time range  |
|                          | o),                      | of already buffered      |
|                          | [`<video>`](element/vide | media.                   |
|                          | o)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `challenge`              | [`<keygen>`](element/key | A challenge string that  |
|                          | gen)                     | is submitted along with  |
|                          |                          | the public key.          |
+--------------------------+--------------------------+--------------------------+
| `charset`                | [`<meta>`](element/meta) | Declares the character   |
|                          | ,                        | encoding of the page or  |
|                          | [`<script>`](element/scr | script.                  |
|                          | ipt)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `checked`                | [`<command>`](element/co | Indicates whether the    |
|                          | mmand),                  | element should be        |
|                          | [`<input>`](element/inpu | checked on page load.    |
|                          | t)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `cite`                   | [`<blockquote>`](element | Contains a URI which     |
|                          | /blockquote),            | points to the source of  |
|                          | [`<del>`](element/del),  | the quote or change.     |
|                          | [`<ins>`](element/ins),  |                          |
|                          | [`<q>`](element/q)       |                          |
+--------------------------+--------------------------+--------------------------+
| `class`                  | [Global                  | Often used with CSS to   |
|                          | attribute](global_attrib | style elements with      |
|                          | utes)                    | common properties.       |
+--------------------------+--------------------------+--------------------------+
| `code`                   | [`<applet>`](element/app | Specifies the URL of the |
|                          | let)                     | applet's class file to   |
|                          |                          | be loaded and executed.  |
+--------------------------+--------------------------+--------------------------+
| `codebase`               | [`<applet>`](element/app | This attribute gives the |
|                          | let)                     | absolute or relative URL |
|                          |                          | of the directory where   |
|                          |                          | applets' .class files    |
|                          |                          | referenced by the code   |
|                          |                          | attribute are stored.    |
+--------------------------+--------------------------+--------------------------+
| `color`                  | [`<basefont>`](element/b | This attribute sets the  |
|                          | asefont),                | text color using either  |
|                          | [`<font>`](element/font) | a named color or a color |
|                          | ,                        | specified in the         |
|                          | [`<hr>`](element/hr)     | hexadecimal \#RRGGBB     |
|                          |                          | format.                  |
|                          |                          |                          |
|                          |                          | **Note:** This is a      |
|                          |                          | legacy attribute. Please |
|                          |                          | use the CSS              |
|                          |                          | [`color`](https://develo |
|                          |                          | per.mozilla.org/en-US/do |
|                          |                          | cs/Web/CSS/color)        |
|                          |                          | property instead.        |
+--------------------------+--------------------------+--------------------------+
| `cols`                   | [`<textarea>`](element/t | Defines the number of    |
|                          | extarea)                 | columns in a textarea.   |
+--------------------------+--------------------------+--------------------------+
| `colspan`                | [`<td>`](element/td),    | The colspan attribute    |
|                          | [`<th>`](element/th)     | defines the number of    |
|                          |                          | columns a cell should    |
|                          |                          | span.                    |
+--------------------------+--------------------------+--------------------------+
| `content`                | [`<meta>`](element/meta) | A value associated with  |
|                          |                          | `http-equiv` or `name`   |
|                          |                          | depending on the         |
|                          |                          | context.                 |
+--------------------------+--------------------------+--------------------------+
| `contenteditable`        | [Global                  | Indicates whether the    |
|                          | attribute](global_attrib | element's content is     |
|                          | utes)                    | editable.                |
+--------------------------+--------------------------+--------------------------+
| `contextmenu`            | [Global                  | Defines the ID of a      |
|                          | attribute](global_attrib | [`<menu>`](element/menu) |
|                          | utes)                    | element which will serve |
|                          |                          | as the element's context |
|                          |                          | menu.                    |
+--------------------------+--------------------------+--------------------------+
| `controls`               | [`<audio>`](element/audi | Indicates whether the    |
|                          | o),                      | browser should show      |
|                          | [`<video>`](element/vide | playback controls to the |
|                          | o)                       | user.                    |
+--------------------------+--------------------------+--------------------------+
| `coords`                 | [`<area>`](element/area) | A set of values          |
|                          |                          | specifying the           |
|                          |                          | coordinates of the       |
|                          |                          | hot-spot region.         |
+--------------------------+--------------------------+--------------------------+
| `crossorigin`            | [`<audio>`](element/audi | How the element handles  |
|                          | o),                      | cross-origin requests    |
|                          | [`<img>`](element/img),  |                          |
|                          | [`<link>`](element/link) |                          |
|                          | ,                        |                          |
|                          | [`<script>`](element/scr |                          |
|                          | ipt),                    |                          |
|                          | [`<video>`](element/vide |                          |
|                          | o)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `csp`                    | [`<iframe>`](element/ifr | Specifies the Content    |
|                          | ame)                     | Security Policy that an  |
|                          |                          | embedded document must   |
|                          |                          | agree to enforce upon    |
|                          |                          | itself.                  |
+--------------------------+--------------------------+--------------------------+
| `data`                   | [`<object>`](element/obj | Specifies the URL of the |
|                          | ect)                     | resource.                |
+--------------------------+--------------------------+--------------------------+
| `data-*`                 | [Global                  | Lets you attach custom   |
|                          | attribute](global_attrib | attributes to an HTML    |
|                          | utes)                    | element.                 |
+--------------------------+--------------------------+--------------------------+
| `datetime`               | [`<del>`](element/del),  | Indicates the date and   |
|                          | [`<ins>`](element/ins),  | time associated with the |
|                          | [`<time>`](element/time) | element.                 |
+--------------------------+--------------------------+--------------------------+
| `decoding`               | [`<img>`](element/img)   | Indicates the preferred  |
|                          |                          | method to decode the     |
|                          |                          | image.                   |
+--------------------------+--------------------------+--------------------------+
| `default`                | [`<track>`](element/trac | Indicates that the track |
|                          | k)                       | should be enabled unless |
|                          |                          | the user's preferences   |
|                          |                          | indicate something       |
|                          |                          | different.               |
+--------------------------+--------------------------+--------------------------+
| `defer`                  | [`<script>`](element/scr | Indicates that the       |
|                          | ipt)                     | script should be         |
|                          |                          | executed after the page  |
|                          |                          | has been parsed.         |
+--------------------------+--------------------------+--------------------------+
| `dir`                    | [Global                  | Defines the text         |
|                          | attribute](global_attrib | direction. Allowed       |
|                          | utes)                    | values are ltr           |
|                          |                          | (Left-To-Right) or rtl   |
|                          |                          | (Right-To-Left)          |
+--------------------------+--------------------------+--------------------------+
| `dirname`                | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<textarea>`](element/t |                          |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `disabled`               | [`<button>`](element/but | Indicates whether the    |
|                          | ton),                    | user can interact with   |
|                          | [`<command>`](element/co | the element.             |
|                          | mmand),                  |                          |
|                          | [`<fieldset>`](element/f |                          |
|                          | ieldset),                |                          |
|                          | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<keygen>`](element/key |                          |
|                          | gen),                    |                          |
|                          | [`<optgroup>`](element/o |                          |
|                          | ptgroup),                |                          |
|                          | [`<option>`](element/opt |                          |
|                          | ion),                    |                          |
|                          | [`<select>`](element/sel |                          |
|                          | ect),                    |                          |
|                          | [`<textarea>`](element/t |                          |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `download`               | [`<a>`](element/a),      | Indicates that the       |
|                          | [`<area>`](element/area) | hyperlink is to be used  |
|                          |                          | for downloading a        |
|                          |                          | resource.                |
+--------------------------+--------------------------+--------------------------+
| `draggable`              | [Global                  | Defines whether the      |
|                          | attribute](global_attrib | element can be dragged.  |
|                          | utes)                    |                          |
+--------------------------+--------------------------+--------------------------+
| `dropzone`               | [Global                  | Indicates that the       |
|                          | attribute](global_attrib | element accept the       |
|                          | utes)                    | dropping of content on   |
|                          |                          | it.                      |
+--------------------------+--------------------------+--------------------------+
| `enctype`                | [`<form>`](element/form) | Defines the content type |
|                          |                          | of the form date when    |
|                          |                          | the `method` is POST.    |
+--------------------------+--------------------------+--------------------------+
| `for`                    | [`<label>`](element/labe | Describes elements which |
|                          | l),                      | belongs to this one.     |
|                          | [`<output>`](element/out |                          |
|                          | put)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `form`                   | [`<button>`](element/but | Indicates the form that  |
|                          | ton),                    | is the owner of the      |
|                          | [`<fieldset>`](element/f | element.                 |
|                          | ieldset),                |                          |
|                          | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<keygen>`](element/key |                          |
|                          | gen),                    |                          |
|                          | [`<label>`](element/labe |                          |
|                          | l),                      |                          |
|                          | [`<meter>`](element/mete |                          |
|                          | r),                      |                          |
|                          | [`<object>`](element/obj |                          |
|                          | ect),                    |                          |
|                          | [`<output>`](element/out |                          |
|                          | put),                    |                          |
|                          | [`<progress>`](element/p |                          |
|                          | rogress),                |                          |
|                          | [`<select>`](element/sel |                          |
|                          | ect),                    |                          |
|                          | [`<textarea>`](element/t |                          |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `formaction`             | [`<input>`](element/inpu | Indicates the action of  |
|                          | t),                      | the element, overriding  |
|                          | [`<button>`](element/but | the action defined in    |
|                          | ton)                     | the                      |
|                          |                          | [`<form>`](element/form) |
|                          |                          | .                        |
+--------------------------+--------------------------+--------------------------+
| `headers`                | [`<td>`](element/td),    | IDs of the `<th>`        |
|                          | [`<th>`](element/th)     | elements which applies   |
|                          |                          | to this element.         |
+--------------------------+--------------------------+--------------------------+
| `height`                 | [`<canvas>`](element/can | Specifies the height of  |
|                          | vas),                    | elements listed here.    |
|                          | [`<embed>`](element/embe | For all other elements,  |
|                          | d),                      | use the CSS              |
|                          | [`<iframe>`](element/ifr | [`height`](https://devel |
|                          | ame),                    | oper.mozilla.org/en-US/d |
|                          | [`<img>`](element/img),  | ocs/Web/CSS/height)      |
|                          | [`<input>`](element/inpu | property.                |
|                          | t),                      |                          |
|                          | [`<object>`](element/obj | **Note:** In some        |
|                          | ect),                    | instances, such as       |
|                          | [`<video>`](element/vide | [`<div>`](element/div),  |
|                          | o)                       | this is a legacy         |
|                          |                          | attribute, in which case |
|                          |                          | the CSS                  |
|                          |                          | [`height`](https://devel |
|                          |                          | oper.mozilla.org/en-US/d |
|                          |                          | ocs/Web/CSS/height)      |
|                          |                          | property should be used  |
|                          |                          | instead.                 |
+--------------------------+--------------------------+--------------------------+
| `hidden`                 | [Global                  | Prevents rendering of    |
|                          | attribute](global_attrib | given element, while     |
|                          | utes)                    | keeping child elements,  |
|                          |                          | e.g. script elements,    |
|                          |                          | active.                  |
+--------------------------+--------------------------+--------------------------+
| `high`                   | [`<meter>`](element/mete | Indicates the lower      |
|                          | r)                       | bound of the upper       |
|                          |                          | range.                   |
+--------------------------+--------------------------+--------------------------+
| `href`                   | [`<a>`](element/a),      | The URL of a linked      |
|                          | [`<area>`](element/area) | resource.                |
|                          | ,                        |                          |
|                          | [`<base>`](element/base) |                          |
|                          | ,                        |                          |
|                          | [`<link>`](element/link) |                          |
+--------------------------+--------------------------+--------------------------+
| `hreflang`               | [`<a>`](element/a),      | Specifies the language   |
|                          | [`<area>`](element/area) | of the linked resource.  |
|                          | ,                        |                          |
|                          | [`<link>`](element/link) |                          |
+--------------------------+--------------------------+--------------------------+
| `http-equiv`             | [`<meta>`](element/meta) | Defines a pragma         |
|                          |                          | directive.               |
+--------------------------+--------------------------+--------------------------+
| `icon`                   | [`<command>`](element/co | Specifies a picture      |
|                          | mmand)                   | which represents the     |
|                          |                          | command.                 |
+--------------------------+--------------------------+--------------------------+
| `id`                     | [Global                  | Often used with CSS to   |
|                          | attribute](global_attrib | style a specific         |
|                          | utes)                    | element. The value of    |
|                          |                          | this attribute must be   |
|                          |                          | unique.                  |
+--------------------------+--------------------------+--------------------------+
| `importance`             | [`<iframe>`](element/ifr | Indicates the relative   |
|                          | ame),                    | fetch priority for the   |
|                          | [`<img>`](element/img),  | resource.                |
|                          | [`<link>`](element/link) |                          |
|                          | ,                        |                          |
|                          | [`<script>`](element/scr |                          |
|                          | ipt)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `integrity`              | [`<link>`](element/link) | Security Feature that    |
|                          | ,                        | allows browsers to       |
|                          | [`<script>`](element/scr | verify what they fetch.  |
|                          | ipt)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `ismap`                  | [`<img>`](element/img)   | Indicates that the image |
|                          |                          | is part of a server-side |
|                          |                          | image map.               |
+--------------------------+--------------------------+--------------------------+
| `itemprop`               | [Global                  |                          |
|                          | attribute](global_attrib |                          |
|                          | utes)                    |                          |
+--------------------------+--------------------------+--------------------------+
| `keytype`                | [`<keygen>`](element/key | Specifies the type of    |
|                          | gen)                     | key generated.           |
+--------------------------+--------------------------+--------------------------+
| `kind`                   | [`<track>`](element/trac | Specifies the kind of    |
|                          | k)                       | text track.              |
+--------------------------+--------------------------+--------------------------+
| `label`                  | [`<track>`](element/trac | Specifies a              |
|                          | k)                       | user-readable title of   |
|                          |                          | the text track.          |
+--------------------------+--------------------------+--------------------------+
| `lang`                   | [Global                  | Defines the language     |
|                          | attribute](global_attrib | used in the element.     |
|                          | utes)                    |                          |
+--------------------------+--------------------------+--------------------------+
| `language`               | [`<script>`](element/scr | Defines the script       |
|                          | ipt)                     | language used in the     |
|                          |                          | element.                 |
+--------------------------+--------------------------+--------------------------+
| `lazyload`               | [`<img>`](element/img),  | Indicates if the element |
|                          | [`<iframe>`](element/ifr | should be loaded lazily. |
|                          | ame)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `list`                   | [`<input>`](element/inpu | Identifies a list of     |
|                          | t)                       | pre-defined options to   |
|                          |                          | suggest to the user.     |
+--------------------------+--------------------------+--------------------------+
| `loop`                   | [`<audio>`](element/audi | Indicates whether the    |
|                          | o),                      | media should start       |
|                          | [`<bgsound>`](element/bg | playing from the start   |
|                          | sound),                  | when it's finished.      |
|                          | [`<marquee>`](https://de |                          |
|                          | veloper.mozilla.org/en-U |                          |
|                          | S/docs/Web/HTML/Element/ |                          |
|                          | marquee),                |                          |
|                          | [`<video>`](element/vide |                          |
|                          | o)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `low`                    | [`<meter>`](element/mete | Indicates the upper      |
|                          | r)                       | bound of the lower       |
|                          |                          | range.                   |
+--------------------------+--------------------------+--------------------------+
| `manifest`               | [`<html>`](element/html) | Specifies the URL of the |
|                          |                          | document's cache         |
|                          |                          | manifest.                |
+--------------------------+--------------------------+--------------------------+
| `max`                    | [`<input>`](element/inpu | Indicates the maximum    |
|                          | t),                      | value allowed.           |
|                          | [`<meter>`](element/mete |                          |
|                          | r),                      |                          |
|                          | [`<progress>`](element/p |                          |
|                          | rogress)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `maxlength`              | [`<input>`](element/inpu | Defines the maximum      |
|                          | t),                      | number of characters     |
|                          | [`<textarea>`](element/t | allowed in the element.  |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `minlength`              | [`<input>`](element/inpu | Defines the minimum      |
|                          | t),                      | number of characters     |
|                          | [`<textarea>`](element/t | allowed in the element.  |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `media`                  | [`<a>`](element/a),      | Specifies a hint of the  |
|                          | [`<area>`](element/area) | media for which the      |
|                          | ,                        | linked resource was      |
|                          | [`<link>`](element/link) | designed.                |
|                          | ,                        |                          |
|                          | [`<source>`](element/sou |                          |
|                          | rce),                    |                          |
|                          | [`<style>`](element/styl |                          |
|                          | e)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `method`                 | [`<form>`](element/form) | Defines which            |
|                          |                          | [HTTP](https://developer |
|                          |                          | .mozilla.org/en-US/docs/ |
|                          |                          | Web/HTTP)                |
|                          |                          | method to use when       |
|                          |                          | submitting the form. Can |
|                          |                          | be `GET` (default) or    |
|                          |                          | `POST`.                  |
+--------------------------+--------------------------+--------------------------+
| `min`                    | [`<input>`](element/inpu | Indicates the minimum    |
|                          | t),                      | value allowed.           |
|                          | [`<meter>`](element/mete |                          |
|                          | r)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `multiple`               | [`<input>`](element/inpu | Indicates whether        |
|                          | t),                      | multiple values can be   |
|                          | [`<select>`](element/sel | entered in an input of   |
|                          | ect)                     | the type `email` or      |
|                          |                          | `file`.                  |
+--------------------------+--------------------------+--------------------------+
| `muted`                  | [`<audio>`](element/audi | Indicates whether the    |
|                          | o),                      | audio will be initially  |
|                          | [`<video>`](element/vide | silenced on page load.   |
|                          | o)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `name`                   | [`<button>`](element/but | Name of the element. For |
|                          | ton),                    | example used by the      |
|                          | [`<form>`](element/form) | server to identify the   |
|                          | ,                        | fields in form submits.  |
|                          | [`<fieldset>`](element/f |                          |
|                          | ieldset),                |                          |
|                          | [`<iframe>`](element/ifr |                          |
|                          | ame),                    |                          |
|                          | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<keygen>`](element/key |                          |
|                          | gen),                    |                          |
|                          | [`<object>`](element/obj |                          |
|                          | ect),                    |                          |
|                          | [`<output>`](element/out |                          |
|                          | put),                    |                          |
|                          | [`<select>`](element/sel |                          |
|                          | ect),                    |                          |
|                          | [`<textarea>`](element/t |                          |
|                          | extarea),                |                          |
|                          | [`<map>`](element/map),  |                          |
|                          | [`<meta>`](element/meta) |                          |
|                          | ,                        |                          |
|                          | [`<param>`](element/para |                          |
|                          | m)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `novalidate`             | [`<form>`](element/form) | This attribute indicates |
|                          |                          | that the form shouldn't  |
|                          |                          | be validated when        |
|                          |                          | submitted.               |
+--------------------------+--------------------------+--------------------------+
| `open`                   | [`<details>`](element/de | Indicates whether the    |
|                          | tails)                   | details will be shown on |
|                          |                          | page load.               |
+--------------------------+--------------------------+--------------------------+
| `optimum`                | [`<meter>`](element/mete | Indicates the optimal    |
|                          | r)                       | numeric value.           |
+--------------------------+--------------------------+--------------------------+
| `pattern`                | [`<input>`](element/inpu | Defines a regular        |
|                          | t)                       | expression which the     |
|                          |                          | element's value will be  |
|                          |                          | validated against.       |
+--------------------------+--------------------------+--------------------------+
| `ping`                   | [`<a>`](element/a),      |                          |
|                          | [`<area>`](element/area) |                          |
+--------------------------+--------------------------+--------------------------+
| `placeholder`            | [`<input>`](element/inpu | Provides a hint to the   |
|                          | t),                      | user of what can be      |
|                          | [`<textarea>`](element/t | entered in the field.    |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `poster`                 | [`<video>`](element/vide | A URL indicating a       |
|                          | o)                       | poster frame to show     |
|                          |                          | until the user plays or  |
|                          |                          | seeks.                   |
+--------------------------+--------------------------+--------------------------+
| `preload`                | [`<audio>`](element/audi | Indicates whether the    |
|                          | o),                      | whole resource, parts of |
|                          | [`<video>`](element/vide | it or nothing should be  |
|                          | o)                       | preloaded.               |
+--------------------------+--------------------------+--------------------------+
| `radiogroup`             | [`<command>`](element/co |                          |
|                          | mmand)                   |                          |
+--------------------------+--------------------------+--------------------------+
| `readonly`               | [`<input>`](element/inpu | Indicates whether the    |
|                          | t),                      | element can be edited.   |
|                          | [`<textarea>`](element/t |                          |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `rel`                    | [`<a>`](element/a),      | Specifies the            |
|                          | [`<area>`](element/area) | relationship of the      |
|                          | ,                        | target object to the     |
|                          | [`<link>`](element/link) | link object.             |
+--------------------------+--------------------------+--------------------------+
| `required`               | [`<input>`](element/inpu | Indicates whether this   |
|                          | t),                      | element is required to   |
|                          | [`<select>`](element/sel | fill out or not.         |
|                          | ect),                    |                          |
|                          | [`<textarea>`](element/t |                          |
|                          | extarea)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `reversed`               | [`<ol>`](element/ol)     | Indicates whether the    |
|                          |                          | list should be displayed |
|                          |                          | in a descending order    |
|                          |                          | instead of a ascending.  |
+--------------------------+--------------------------+--------------------------+
| `rows`                   | [`<textarea>`](element/t | Defines the number of    |
|                          | extarea)                 | rows in a text area.     |
+--------------------------+--------------------------+--------------------------+
| `rowspan`                | [`<td>`](element/td),    | Defines the number of    |
|                          | [`<th>`](element/th)     | rows a table cell should |
|                          |                          | span over.               |
+--------------------------+--------------------------+--------------------------+
| `sandbox`                | [`<iframe>`](element/ifr | Stops a document loaded  |
|                          | ame)                     | in an iframe from using  |
|                          |                          | certain features (such   |
|                          |                          | as submitting forms or   |
|                          |                          | opening new windows).    |
+--------------------------+--------------------------+--------------------------+
| `scope`                  | [`<th>`](element/th)     | Defines the cells that   |
|                          |                          | the header test (defined |
|                          |                          | in the `th` element)     |
|                          |                          | relates to.              |
+--------------------------+--------------------------+--------------------------+
| `scoped`                 | [`<style>`](element/styl |                          |
|                          | e)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `selected`               | [`<option>`](element/opt | Defines a value which    |
|                          | ion)                     | will be selected on page |
|                          |                          | load.                    |
+--------------------------+--------------------------+--------------------------+
| `shape`                  | [`<a>`](element/a),      |                          |
|                          | [`<area>`](element/area) |                          |
+--------------------------+--------------------------+--------------------------+
| `size`                   | [`<input>`](element/inpu | Defines the width of the |
|                          | t),                      | element (in pixels). If  |
|                          | [`<select>`](element/sel | the element's `type`     |
|                          | ect)                     | attribute is `text` or   |
|                          |                          | `password` then it's the |
|                          |                          | number of characters.    |
+--------------------------+--------------------------+--------------------------+
| `sizes`                  | [`<link>`](element/link) |                          |
|                          | ,                        |                          |
|                          | [`<img>`](element/img),  |                          |
|                          | [`<source>`](element/sou |                          |
|                          | rce)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `slot`                   | [Global                  | Assigns a slot in a      |
|                          | attribute](global_attrib | shadow DOM shadow tree   |
|                          | utes)                    | to an element.           |
+--------------------------+--------------------------+--------------------------+
| `span`                   | [`<col>`](element/col),  |                          |
|                          | [`<colgroup>`](element/c |                          |
|                          | olgroup)                 |                          |
+--------------------------+--------------------------+--------------------------+
| `spellcheck`             | [Global                  | Indicates whether spell  |
|                          | attribute](global_attrib | checking is allowed for  |
|                          | utes)                    | the element.             |
+--------------------------+--------------------------+--------------------------+
| `src`                    | [`<audio>`](element/audi | The URL of the           |
|                          | o),                      | embeddable content.      |
|                          | [`<embed>`](element/embe |                          |
|                          | d),                      |                          |
|                          | [`<iframe>`](element/ifr |                          |
|                          | ame),                    |                          |
|                          | [`<img>`](element/img),  |                          |
|                          | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<script>`](element/scr |                          |
|                          | ipt),                    |                          |
|                          | [`<source>`](element/sou |                          |
|                          | rce),                    |                          |
|                          | [`<track>`](element/trac |                          |
|                          | k),                      |                          |
|                          | [`<video>`](element/vide |                          |
|                          | o)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `srcdoc`                 | [`<iframe>`](element/ifr |                          |
|                          | ame)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `srclang`                | [`<track>`](element/trac |                          |
|                          | k)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `srcset`                 | [`<img>`](element/img),  | One or more responsive   |
|                          | [`<source>`](element/sou | image candidates.        |
|                          | rce)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `start`                  | [`<ol>`](element/ol)     | Defines the first number |
|                          |                          | if other than 1.         |
+--------------------------+--------------------------+--------------------------+
| `step`                   | [`<input>`](element/inpu |                          |
|                          | t)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `style`                  | [Global                  | Defines CSS styles which |
|                          | attribute](global_attrib | will override styles     |
|                          | utes)                    | previously set.          |
+--------------------------+--------------------------+--------------------------+
| `summary`                | [`<table>`](element/tabl |                          |
|                          | e)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `tabindex`               | [Global                  | Overrides the browser's  |
|                          | attribute](global_attrib | default tab order and    |
|                          | utes)                    | follows the one          |
|                          |                          | specified instead.       |
+--------------------------+--------------------------+--------------------------+
| `target`                 | [`<a>`](element/a),      |                          |
|                          | [`<area>`](element/area) |                          |
|                          | ,                        |                          |
|                          | [`<base>`](element/base) |                          |
|                          | ,                        |                          |
|                          | [`<form>`](element/form) |                          |
+--------------------------+--------------------------+--------------------------+
| `title`                  | [Global                  | Text to be displayed in  |
|                          | attribute](global_attrib | a tooltip when hovering  |
|                          | utes)                    | over the element.        |
+--------------------------+--------------------------+--------------------------+
| `translate`              | [Global                  | Specify whether an       |
|                          | attribute](global_attrib | element’s attribute      |
|                          | utes)                    | values and the values of |
|                          |                          | its `Text` node children |
|                          |                          | are to be translated     |
|                          |                          | when the page is         |
|                          |                          | localized, or whether to |
|                          |                          | leave them unchanged.    |
+--------------------------+--------------------------+--------------------------+
| `type`                   | [`<button>`](element/but | Defines the type of the  |
|                          | ton),                    | element.                 |
|                          | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<command>`](element/co |                          |
|                          | mmand),                  |                          |
|                          | [`<embed>`](element/embe |                          |
|                          | d),                      |                          |
|                          | [`<object>`](element/obj |                          |
|                          | ect),                    |                          |
|                          | [`<script>`](element/scr |                          |
|                          | ipt),                    |                          |
|                          | [`<source>`](element/sou |                          |
|                          | rce),                    |                          |
|                          | [`<style>`](element/styl |                          |
|                          | e),                      |                          |
|                          | [`<menu>`](element/menu) |                          |
+--------------------------+--------------------------+--------------------------+
| `usemap`                 | [`<img>`](element/img),  |                          |
|                          | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<object>`](element/obj |                          |
|                          | ect)                     |                          |
+--------------------------+--------------------------+--------------------------+
| `value`                  | [`<button>`](element/but | Defines a default value  |
|                          | ton),                    | which will be displayed  |
|                          | [`<option>`](element/opt | in the element on page   |
|                          | ion),                    | load.                    |
|                          | [`<input>`](element/inpu |                          |
|                          | t),                      |                          |
|                          | [`<li>`](element/li),    |                          |
|                          | [`<meter>`](element/mete |                          |
|                          | r),                      |                          |
|                          | [`<progress>`](element/p |                          |
|                          | rogress),                |                          |
|                          | [`<param>`](element/para |                          |
|                          | m)                       |                          |
+--------------------------+--------------------------+--------------------------+
| `width`                  | [`<canvas>`](element/can | For the elements listed  |
|                          | vas),                    | here, this establishes   |
|                          | [`<embed>`](element/embe | the element's width.     |
|                          | d),                      |                          |
|                          | [`<iframe>`](element/ifr | **Note:** For all other  |
|                          | ame),                    | instances, such as       |
|                          | [`<img>`](element/img),  | [`<div>`](element/div),  |
|                          | [`<input>`](element/inpu | this is a legacy         |
|                          | t),                      | attribute, in which case |
|                          | [`<object>`](element/obj | the CSS                  |
|                          | ect),                    | [`width`](https://develo |
|                          | [`<video>`](element/vide | per.mozilla.org/en-US/do |
|                          | o)                       | cs/Web/CSS/width)        |
|                          |                          | property should be used  |
|                          |                          | instead.                 |
+--------------------------+--------------------------+--------------------------+
| `wrap`                   | [`<textarea>`](element/t | Indicates whether the    |
|                          | extarea)                 | text should be wrapped.  |
+--------------------------+--------------------------+--------------------------+

Content versus IDL attributes {#Content_versus_IDL_attributes}
-----------------------------

In HTML, most attributes have two faces: the **content attribute** and
the **IDL attribute**.

The content attribute is the attribute as you set it from the content
(the HTML code) and you can set it or get it via
[`element.setAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/setAttribute)
or
[`element.getAttribute()`](https://developer.mozilla.org/en-US/docs/Web/API/Element/getAttribute).
The content attribute is always a string even when the expected value
should be an integer. For example, to set an [`<input>`](element/input)
element's `maxlength` to 42 using the content attribute, you have to
call `setAttribute("maxlength", "42")` on that element.

The IDL attribute is also known as a JavaScript property. These are the
attributes you can read or set using JavaScript properties like
`element.foo`{.moz-txt-verticalline}. The IDL attribute is always going
to use (but might transform) the underlying content attribute to return
a value when you get it and is going to save something in the content
attribute when you set it. In other words, the IDL attributes, in
essence, reflect the content attributes.

Most of the time, IDL attributes will return their values as they are
really used. For example, the default `type` for
[`<input>`](element/input) elements is "text", so if you set
`input.type="foobar"`, the `<input>` element will be of type text (in
the appearance and the behavior) but the "type" content attribute's
value will be "foobar". However, the `type` IDL attribute will return
the string "text".

IDL attributes are not always strings; for example, `input.maxlength` is
a number (a signed long). When using IDL attributes, you read or set
values of the desired type, so `input.maxlength` is always going to
return a number and when you set `input.maxlength` ,it wants a number.
If you pass another type, it is automatically converted to a number as
specified by the standard JavaScript rules for type conversion.

IDL attributes can [reflect other
types](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes)
such as unsigned long, URLs, booleans, etc. Unfortunately, there are no
clear rules and the way IDL attributes behave in conjunction with their
corresponding content attributes depends on the attribute. Most of the
time, it will follow [the rules laid out in the
specification](https://www.whatwg.org/specs/web-apps/current-work/multipage/urls.html#reflecting-content-attributes-in-idl-attributes),
but sometimes it doesn't. HTML specifications try to make this as
developer-friendly as possible, but for various reasons (mostly
historical), some attributes behave oddly (`select.size`, for example)
and you should read the specifications to understand how exactly they
behave.

See also {#See_also}
--------

-   [HTML elements](element)

[Edit this page on
MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes$edit)

© 2005–2018 Mozilla Developer Network and individual contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\

[https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes)
