CORS settings attributes
========================

In HTML5, some HTML elements which provide support for
[CORS](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS), such as
[`<img>`](element/img), [`<video>`](element/video) or
[`<script>`](element/script), have a `crossorigin` attribute
(`crossOrigin` property), which lets you configure the CORS requests for
the element's fetched data. These attributes are enumerated, and have
the following possible values:

Keyword

Description

`anonymous`

CORS requests for this element will not have the credentials flag set.

`use-credentials`

CORS requests for this element will have the credentials flag set; this
means the request will provide credentials.

By default (that is, when the attribute is not specified), CORS is not
used at all. The "anonymous" keyword means that there will be no
exchange of **user credentials** via cookies, client-side SSL
certificates or HTTP authentication as described in the [Terminology
section of the CORS
specification](http://www.w3.org/TR/cors/#user-credentials).

An invalid keyword and an empty string will be handled as the
`anonymous` keyword.

### Example: crossorigin with the script element {#Example_crossorigin_with_the_script_element}

You can use the following [`<script>`](element/script) element to tell a
browser to execute the `https://example.com/example-framework.js` script
without sending user-credentials.

``` {data-language="html"}
<script src="https://example.com/example-framework.js"
        crossorigin="anonymous"></script>
```

Specifications {#Specifications}
--------------

  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
  Specification                                                                                                                                               Status            Comment
  ----------------------------------------------------------------------------------------------------------------------------------------------------------- ----------------- ---------
  [HTML Living Standard\                                                                                                                                      Living Standard   
  The definition of 'CORS settings attributes' in that specification.](https://html.spec.whatwg.org/multipage/infrastructure.html#cors-settings-attributes)                     

  [HTML Living Standard\                                                                                                                                      Living Standard   
  The definition of 'crossorigin' in that specification.](https://html.spec.whatwg.org/multipage/embedded-content.html#attr-img-crossorigin)                                    
  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Browser compatibility[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data)[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data) {#Browser_compatibility}
---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

### \<script crossorigin\> {#<script_crossorigin>}

Desktop

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

Basic support

30

Yes

13

No

12

Yes

 Yes 
:   The `crossorigin` attribute was implemented in WebKit in WebKit [bug
    81438](https://bugs.webkit.org/show_bug.cgi?id=81438).

Mobile

Android webview

Chrome for Android

Edge Mobile

Firefox for Android

Opera for Android

iOS Safari

Samsung Internet

Basic support

Yes

Yes

?

14

?

?

Yes

### \<video crossorigin\> {#<video_crossorigin>}

Desktop

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

Basic support

?

Yes

12

?

?

?

Mobile

Android webview

Chrome for Android

Edge Mobile

Firefox for Android

Opera for Android

iOS Safari

Samsung Internet

Basic support

?

?

Yes

14

?

?

?

See also {#See_also}
--------

-   [Cross-Origin Resource Sharing
    (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS)

[Edit this page on
MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes$edit)

© 2005–2018 Mozilla Developer Network and individual contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\

[https://developer.mozilla.org/en-US/docs/Web/HTML/CORS\_settings\_attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/CORS_settings_attributes)
