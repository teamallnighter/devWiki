Global attributes
=================

**Global attributes** are attributes common to all HTML elements; they
can be used on all elements, though they may have no effect on some
elements.

Global attributes may be specified on all [HTML elements](element),
*even those not specified in the standard*. That means that any
non-standard elements must still permit these attributes, even though
using those elements means that the document is no longer
HTML5-compliant. For example, HTML5-compliant browsers hide content
marked as `<foo hidden>...</foo>`, even though `<foo>` is not a valid
HTML element.

In addition to the basic HTML global attributes, the following global
attributes also exist:

-   `xml:lang` and `xml:base` — these are inherited from the XHTML
    specifications and deprecated, but kept for compatibility purposes.
-   The multiple `aria-*` attributes, used for improving accessibility.
-   The event handler attributes: `onabort`, `onautocomplete`,
    `onautocompleteerror`, `onblur`, `oncancel`, `oncanplay`,
    `oncanplaythrough`, `onchange`, `onclick`, `onclose`,
    `oncontextmenu`, `oncuechange`, `ondblclick`, `ondrag`, `ondragend`,
    `ondragenter`, `ondragexit`, `ondragleave`, `ondragover`,
    `ondragstart`, `ondrop`, `ondurationchange`, `onemptied`, `onended`,
    `onerror`, `onfocus`, `oninput`, `oninvalid`, `onkeydown`,
    `onkeypress`, `onkeyup`, `onload`, `onloadeddata`,
    `onloadedmetadata`, `onloadstart`, `onmousedown`, `onmouseenter`,
    `onmouseleave`, `onmousemove`, `onmouseout`, `onmouseover`,
    `onmouseup`, `onmousewheel`, `onpause`, `onplay`, `onplaying`,
    `onprogress`, `onratechange`, `onreset`, `onresize`, `onscroll`,
    `onseeked`, `onseeking`, `onselect`, `onshow`, `onsort`,
    `onstalled`, `onsubmit`, `onsuspend`, `ontimeupdate`, `ontoggle`,
    `onvolumechange`, `onwaiting`.

List of global attributes {#List_of_global_attributes}
-------------------------

[`accesskey`](global_attributes/accesskey)
:   Provides a hint for generating a keyboard shortcut for the current
    element. This attribute consists of a space-separated list of
    characters. The browser should use the first one that exists on the
    computer keyboard layout.
[`autocapitalize`](global_attributes/autocapitalize)
:   Controls whether and how text input is automatically capitalized as
    it is entered/edited by the user. It can have the following values:
    -   `off` or `none`, no autocapitalization is applied (all letters
        default to lowercase)
    -   `on` or `sentences`, the first letter of each sentence defaults
        to a capital letter; all other letters default to lowercase
    -   `words`, the first letter of each word defaults to a capital
        letter; all other letters default to lowercase
    -   `characters`, all letters should default to uppercase

[`class`](global_attributes/class)
:   A space-separated list of the classes of the element. Classes allows
    CSS and JavaScript to select and access specific elements via the
    [class
    selectors](https://developer.mozilla.org/en-US/docs/Web/CSS/Class_selectors)
    or functions like the method
    [`Document.getElementsByClassName()`](https://developer.mozilla.org/en-US/docs/Web/API/Document/getElementsByClassName).
[`contenteditable`](global_attributes/contenteditable)
:   An enumerated attribute indicating if the element should be editable
    by the user. If so, the browser modifies its widget to allow
    editing. The attribute must take one of the following values:
    -   `true` or the *empty string*, which indicates that the element
        must be editable;
    -   `false`, which indicates that the element must not be editable.

[`contextmenu`](global_attributes/contextmenu)
:   The `id` of a [`<menu>`](element/menu) to use as the contextual menu
    for this element.
[`data-*`](global_attributes/data-*)
:   Forms a class of attributes, called custom data attributes, that
    allow proprietary information to be exchanged between the
    [HTML](index) and its
    [DOM](https://developer.mozilla.org/en-US/docs/Glossary/DOM)
    representation that may be used by scripts. All such custom data are
    available via the
    [`HTMLElement`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement)
    interface of the element the attribute is set on. The
    [`HTMLElement.dataset`](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset)
    property gives access to them.
[`dir`](global_attributes/dir)
:   An enumerated attribute indicating the directionality of the
    element's text. It can have the following values:
    -   `ltr`, which means *left to right*and is to be used for
        languages that are written from the left to the right (like
        English);
    -   `rtl`, which means *right to left* and is to be used for
        languages that are written from the right to the left (like
        Arabic);
    -   `auto`, which let the user agent decides. It uses a basic
        algorithm as it parses the characters inside the element until
        it finds a character with a strong directionality, then apply
        that directionality to the whole element.

[`draggable`](global_attributes/draggable)
:   An enumerated attribute indicating whether the element can be
    dragged, using the [Drag and Drop
    API](https://developer.mozilla.org/en-us/docs/DragDrop/Drag_and_Drop).
    It can have the following values:
    -   `true`, which indicates that the element may be dragged
    -   `false`, which indicates that the element may not be dragged.

 [`dropzone`](global_attributes/dropzone) 
:   An enumerated attribute indicating what types of content can be
    dropped on an element, using the [Drag and Drop
    API](https://developer.mozilla.org/en-US/docs/DragDrop/Drag_and_Drop).
    It can have the following values:
    -   `copy`, which indicates that dropping will create a copy of the
        element that was dragged
    -   `move`, which indicates that the element that was dragged will
        be moved to this new location.
    -   `link`, will create a link to the dragged data.

[`hidden`](global_attributes/hidden)
:   A Boolean attribute indicates that the element is not yet, or is no
    longer, *relevant*. For example, it can be used to hide elements of
    the page that can't be used until the login process has been
    completed. The browser won't render such elements. This attribute
    must not be used to hide content that could legitimately be shown.
[`id`](global_attributes/id)
:   Defines a unique identifier (ID) which must be unique in the whole
    document. Its purpose is to identify the element when linking (using
    a fragment identifier), scripting, or styling (with CSS).
[`inputmode`](global_attributes/inputmode)
:   Provides a hint to browsers as to the type of virtual keyboard
    configuration to use when editing this element or its contents. Used
    primarily on [`<input>`](element/input) elements, but is usable on
    any element while in `contenteditable` mode.
[`is`](global_attributes/is)
:   Allows you to specify that a standard HTML element should behave
    like a registered custom built-in element (see [Using custom
    elements](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_custom_elements)
    for more details).

**Note:**The `item*` attributes are part of the [WHATWG HTML Microdata
feature](https://html.spec.whatwg.org/multipage/microdata.html#microdata).

 [`itemid`](global_attributes/itemid) 
:   The unique, global identifier of an item.
 [`itemprop`](global_attributes/itemprop) 
:   Used to add properties to an item. Every HTML element may have an
    `itemprop` attribute specified, where an `itemprop` consists of a
    name and value pair.
 [`itemref`](global_attributes/itemref) 
:   Properties that are not descendants of an element with the
    `itemscope` attribute can be associated with the item using an
    `itemref`. It provides a list of element ids (not `itemid`s) with
    additional properties elsewhere in the document.
 [`itemscope`](global_attributes/itemscope) 
:   `itemscope` (usually) works along with `itemtype` to specify that
    the HTML contained in a block is about a particular item.
    `itemscope` creates the Item and defines the scope of the `itemtype`
    associated with it. `itemtype` is a valid URL of a vocabulary (such
    as [schema.org](https://schema.org/)) that describes the item and
    its properties context.
 [`itemtype`](global_attributes/itemtype) 
:   Specifies the URL of the vocabulary that will be used to define
    `itemprop`s (item properties) in the data structure. `itemscope` is
    used to set the scope of where in the data structure the vocabulary
    set by `itemtype` will be active.
[`lang`](global_attributes/lang)
:   Helps define the language of an element: the language that
    non-editable elements are in, or the language that editable elements
    should be written in by the user. The attribute contains one
    “language tag” (made of hyphen-separated “language subtags”) in the
    format defined in [*Tags for Identifying Languages
    (BCP47)*](https://www.ietf.org/rfc/bcp/bcp47.txt).
    [**xml:lang**](#attr-xml:lang) has priority over it.

 [`slot`](global_attributes/slot) 
:   Assigns a slot in a [shadow
    DOM](https://developer.mozilla.org/en-US/docs/Web/Web_Components/Shadow_DOM)
    shadow tree to an element: An element with a `slot` attribute is
    assigned to the slot created by the [`<slot>`](element/slot) element
    whose `name` attribute's value matches that `slot` attribute's
    value.

 [`spellcheck`](global_attributes/spellcheck) 
:   An enumerated attribute defines whether the element may be checked
    for spelling errors. It may have the following values:
    -   `true`, which indicates that the element should be, if possible,
        checked for spelling errors;
    -   `false`, which indicates that the element should not be checked
        for spelling errors.

[`style`](global_attributes/style)
:   Contains [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
    styling declarations to be applied to the element. Note that it is
    recommended for styles to be defined in a separate file or files.
    This attribute and the [`<style>`](element/style) element have
    mainly the purpose of allowing for quick styling, for example for
    testing purposes.
[`tabindex`](global_attributes/tabindex)
:   An integer attribute indicating if the element can take input focus
    (is *focusable*), if it should participate to sequential keyboard
    navigation, and if so, at what position. It can takes several
    values:
    -   a *negative value* means that the element should be focusable,
        but should not be reachable via sequential keyboard navigation;
    -   `0` means that the element should be focusable and reachable via
        sequential keyboard navigation, but its relative order is
        defined by the platform convention;
    -   a *positive value* means that the element should be focusable
        and reachable via sequential keyboard navigation; the order in
        which the elements are focused is the increasing value of the
        [**tabindex**](#attr-tabindex). If several elements share the
        same tabindex, their relative order follows their relative
        positions in the document.

[`title`](global_attributes/title)
:   Contains a text representing advisory information related to the
    element it belongs to. Such information can typically, but not
    necessarily, be presented to the user as a tooltip.
 [`translate`](global_attributes/translate) 
:   An enumerated attribute that is used to specify whether an element's
    attribute values and the values of its
    [`Text`](https://developer.mozilla.org/en-US/docs/Web/API/Text) node
    children are to be translated when the page is localized, or whether
    to leave them unchanged. It can have the following values:
    -   empty string and `"yes"`, which indicates that the element will
        be translated.
    -   `"no"`, which indicates that the element will not be translated.

Specifications {#Specifications}
--------------

  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Specification                                                                                                                      Status            Comment
  ---------------------------------------------------------------------------------------------------------------------------------- ----------------- --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  [HTML Living Standard\                                                                                                             Living Standard   
  The definition of 'Global attributes' in that specification.](https://html.spec.whatwg.org/multipage/dom.html#global-attributes)                     

  [HTML 5.2\                                                                                                                         Recommendation    Snapshot of [HTML Living Standard](https://html.spec.whatwg.org/multipage/). From [HTML 5.1](https://www.w3.org/TR/html51/), `itemid`, `itemprop`, `itemref`, `itemscope`, and `itemtype` have been added.
  The definition of 'Global attributes' in that specification.](https://www.w3.org/TR/html52/dom.html#global-attributes)                               

  [HTML 5.1\                                                                                                                         Recommendation    Snapshot of [HTML Living Standard](https://html.spec.whatwg.org/multipage/). From [HTML5](https://www.w3.org/TR/html50/), `spellcheck`, `draggable`, and `dropzone` have been added.
  The definition of 'Global attributes' in that specification.](https://www.w3.org/TR/html51/dom.html#global-attributes)                               

  [HTML5\                                                                                                                            Recommendation    Snapshot of [HTML Living Standard](https://html.spec.whatwg.org/multipage/). From [HTML 4.01 Specification](https://www.w3.org/TR/html401/), the concept of global attributes is introduced and the `dir`, `lang`, `style`, `id`, `class`, `tabindex`, `accesskey`, and `title` are now true global attributes.\
  The definition of 'Global attributes' in that specification.](https://www.w3.org/TR/html50/dom.html#global-attributes)                                `xml:lang` which was initially part of XHTML, is now also part of HTML.\
                                                                                                                                                        `hidden`, `data-*`, `contextmenu`, `contenteditable`, and `translate` have been added.

  [HTML 4.01 Specification](https://www.w3.org/TR/html401/)                                                                          Recommendation    There are no global attributes defined. Several attributes that will become global attributes in subsequent specifications are defined on a subset of elements.\
                                                                                                                                                        `class` and `style` are supported on all elements but [`<base>`](element/base), [`<basefont>`](element/basefont), [`<head>`](element/head), [`<html>`](element/html), [`<meta>`](element/meta), [`<param>`](element/param), [`<script>`](element/script), [`<style>`](element/style), and [`<title>`](element/title).\
                                                                                                                                                        `dir` is supported on all elements but [`<applet>`](element/applet), [`<base>`](element/base), [`<basefont>`](element/basefont), [`<bdo>`](element/bdo), [`<br>`](element/br), [`<frame>`](element/frame), [`<frameset>`](element/frameset), [`<iframe>`](element/iframe), [`<param>`](element/param), and [`<script>`](element/script).\
                                                                                                                                                        `id` is supported on all elements but [`<base>`](element/base), [`<head>`](element/head), [`<html>`](element/html), [`<meta>`](element/meta), [`<script>`](element/script), [`<style>`](element/style), and [`<title>`](element/title).\
                                                                                                                                                        `lang` is supported on all elements but [`<applet>`](element/applet), [`<base>`](element/base), [`<basefont>`](element/basefont), [`<br>`](element/br), [`<frame>`](element/frame), [`<frameset>`](element/frameset), [`<iframe>`](element/iframe), [`<param>`](element/param), and [`<script>`](element/script).\
                                                                                                                                                        `tabindex` is only supported on [`<a>`](element/a), [`<area>`](element/area), [`<button>`](element/button), [`<object>`](element/object), [`<select>`](element/select), and [`<textarea>`](element/textarea).\
                                                                                                                                                        `accesskey` is only supported on [`<a>`](element/a), [`<area>`](element/area), [`<button>`](element/button), [`<input>`](element/input), [`<label>`](element/label), [`<legend>`](element/legend) and [`<textarea>`](element/textarea).\
                                                                                                                                                        `title` is supported on all elements but [`<base>`](element/base), [`<basefont>`](element/basefont), [`<head>`](element/head), [`<html>`](element/html), [`<meta>`](element/meta), [`<param>`](element/param), [`<script>`](element/script), and [`<title>`](element/title).
  -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Browser compatibility[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data) {#Browser_compatibility}
------------------------------------------------------------------------------------------------------

Desktop

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

[`accesskey`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey)

Yes

Yes

Yes

Yes

Yes

Yes

[`autocapitalize`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize)

?

?

?

?

?

?

[`class`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class)

Yes

Yes

32

Yes

Yes

Yes

[`contenteditable`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable)

Yes

Yes

3

5.5

9

Yes

[`contextmenu`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu)

52

Disabled

52

Disabled

This was removed from the *Enable Experimental Web Platform Features*
due to a [Web compatibility issue](https://crbug.com/412945). In June
2017, it was removed entirely from the browsers. This is documented in
[Chromium bug 87553](https://crbug.com/87553).

Disabled From version 52: this feature is behind the
`--enable-blink-features` runtime flag (needs to be set to
`ContextMenu`).

? — 52

Disabled

Disabled Until version 52 (exclusive): this feature is behind the
`Enable experimental Web Platform features` preference. To change
preferences in Chrome, visit chrome://flags.

No

9

No

39

Disabled

39

Disabled

This was removed from the *Enable Experimental Web Platform Features*
due to a [Web compatibility issue](https://crbug.com/412945). In June
2017, it was removed entirely from the browsers. This is documented in
[Chromium bug 87553](https://crbug.com/87553).

Disabled From version 39: this feature is behind the
`--enable-blink-features` runtime flag (needs to be set to
`ContextMenu`).

? — 39

Disabled

Disabled Until version 39 (exclusive): this feature is behind the
`Enable experimental Web Platform features` preference.

No

[`data-*`
attributes](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*)

Yes

Yes

Yes

Yes

Yes

Yes

[`dir`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir)

Yes

Yes

Yes

Yes

Yes

Yes

[`draggable`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable)

Yes

Yes

2

Yes

12

Yes

[`dropzone`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dropzone)

? — 58

Prefixed

? — 58

Prefixed

Prefixed Implemented with the vendor prefix: -webkit-

No

No

No

No

No

[`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)

Yes

Yes

Yes

11

Yes

Yes

[`id`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id)

Yes

Yes

32

 32 \
? — 32 
:   `id` is a true global attribute only since Firefox 32.

Yes

Yes

Yes

[`inputmode`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode)

66

?

No

?

53

No

[`is`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is)

67

No

63

63

59

Disabled

Disabled From version 59: this feature is behind the
`dom.webcomponents.customelements.enabled` preference (needs to be set
to `true`). To change preferences in Firefox, visit about:config.

? — 59

Disabled

Disabled Until version 59 (exclusive): this feature is behind the
`dom.webcomponents.enabled` preference (needs to be set to `true`) and
the `dom.webcomponents.customelements.enabled` preference (needs to be
set to `true`). To change preferences in Firefox, visit about:config.

No

55

No

[`itemid`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid)

Yes

Yes

Yes

Yes

Yes

Yes

[`itemprop`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop)

Yes

Yes

Yes

Yes

Yes

Yes

[`itemref`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref)

Yes

Yes

Yes

Yes

Yes

Yes

[`itemscope`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope)

Yes

Yes

Yes

Yes

Yes

Yes

[`itemtype`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype)

Yes

Yes

Yes

Yes

Yes

Yes

[`lang`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang)

Yes

Yes

Yes

Yes

Yes

Yes

[`slot`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot)

53

?

63

63

59

Disabled

Disabled From version 59: this feature is behind the
`dom.webcomponents.shadowdom.enabled` preference (needs to be set to
`true`). To change preferences in Firefox, visit about:config.

? — 59

Disabled

Disabled Until version 59 (exclusive): this feature is behind the
`dom.webcomponents.enabled` preference (needs to be set to `true`) and
the `dom.webcomponents.shadowdom.enabled` preference (needs to be set to
`true`). To change preferences in Firefox, visit about:config.

?

40

10

Prefixed

10

Prefixed

Prefixed Implemented with the vendor prefix: -webkit-

[`spellcheck`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck)

9

Yes

Yes

11

Yes

Yes

[`style`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style)

Yes

Yes

Yes

Yes

Yes

Yes

[`tabindex`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex)

Yes

Yes

Yes

Yes

Yes

Yes

[`title`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title)

Yes

Yes

Yes

Yes

Yes

Yes

[`translate`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate)

No

No

No

No

No

No

Mobile

Android webview

Chrome for Android

Edge Mobile

Firefox for Android

Opera for Android

iOS Safari

Samsung Internet

[`accesskey`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/accesskey)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`autocapitalize`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/autocapitalize)

?

?

?

?

?

?

?

[`class`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/class)

Yes

Yes

Yes

32

Yes

Yes

Yes

[`contenteditable`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contenteditable)

Yes

Yes

Yes

4

Yes

Yes

?

[`contextmenu`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/contextmenu)

? — 52

Disabled

? — 52

Disabled

Disabled Until version 52 (exclusive): this feature is behind the
`Enable experimental Web Platform features` preference.

? — 52

Disabled

? — 52

Disabled

Disabled Until version 52 (exclusive): this feature is behind the
`Enable experimental Web Platform features` preference. To change
preferences in Chrome, visit chrome://flags.

No

32 — 56

32 — 56 
:   Support for the `contextmenu` attribute has been removed from
    Firefox for Android (See [bug 1424252](https://bugzil.la/1424252)).

No

No

Yes

[`data-*`
attributes](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/data-*)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`dir`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dir)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`draggable`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/draggable)

Yes

Yes

Yes

4

Yes

Yes

?

[`dropzone`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/dropzone)

? — 58

Prefixed

? — 58

Prefixed

Prefixed Implemented with the vendor prefix: -webkit-

? — 58

Prefixed

? — 58

Prefixed

Prefixed Implemented with the vendor prefix: -webkit-

No

No

No

No

Yes

[`hidden`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/hidden)

4

Yes

Yes

Yes

Yes

Yes

Yes

[`id`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/id)

Yes

Yes

Yes

32

 32 \
? — 32 
:   `id` is a true global attribute only since Firefox 32.

Yes

Yes

Yes

[`inputmode`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/inputmode)

66

66

?

No

No

No

?

[`is`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/is)

67

67

No

63

63

59

Disabled

Disabled From version 59: this feature is behind the
`dom.webcomponents.customelements.enabled` preference (needs to be set
to `true`). To change preferences in Firefox, visit about:config.

? — 59

Disabled

Disabled Until version 59 (exclusive): this feature is behind the
`dom.webcomponents.enabled` preference (needs to be set to `true`) and
the `dom.webcomponents.customelements.enabled` preference (needs to be
set to `true`). To change preferences in Firefox, visit about:config.

55

No

No

[`itemid`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemid)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`itemprop`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemprop)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`itemref`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemref)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`itemscope`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemscope)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`itemtype`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/itemtype)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`lang`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/lang)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`slot`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/slot)

53

53

?

63

63

59

Disabled

Disabled From version 59: this feature is behind the
`dom.webcomponents.shadowdom.enabled` preference (needs to be set to
`true`). To change preferences in Firefox, visit about:config.

? — 59

Disabled

Disabled Until version 59 (exclusive): this feature is behind the
`dom.webcomponents.enabled` preference (needs to be set to `true`) and
the `dom.webcomponents.shadowdom.enabled` preference (needs to be set to
`true`). To change preferences in Firefox, visit about:config.

40

10.1

6.0

[`spellcheck`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/spellcheck)

47

47

Yes

57

37

9.3

5.0

[`style`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/style)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`tabindex`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/tabindex)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`title`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/title)

Yes

Yes

Yes

Yes

Yes

Yes

Yes

[`translate`](https://developer.mozilla.org/docs/Web/HTML/Global_attributes/translate)

No

No

No

No

No

No

No

See also {#See_also}
--------

-   [`Element`](https://developer.mozilla.org/en-US/docs/Web/API/Element)
    and
    [`GlobalEventHandlers`](https://developer.mozilla.org/en-US/docs/Web/API/GlobalEventHandlers)
    interfaces that allow to query most global attributes.

[Edit this page on
MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes$edit)

© 2005–2018 Mozilla Developer Network and individual contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\

[https://developer.mozilla.org/en-US/docs/Web/HTML/Global\_attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes)
