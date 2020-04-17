@font-face.font-family
======================

The `font-family` CSS descriptor allows authors to specify the font
family for the font specified in an [`@font-face`](../@font-face) rule.

Related [at-rule](../at-rule)

[`@font-face`](../@font-face)

[Initial value](../initial_value)

`n/a (required)`

Media

all

[Computed value](../computed_value)

as specified

Canonical order

the unique non-ambiguous order defined by the formal grammar

Syntax {#Syntax}
------

``` {data-language="css"}
/* <string> values */
font-family: "font family";
font-family: 'another font family';

/* <custom-ident> value */
font-family: examplefont;
```

### Values {#Values}

`<family-name>`
:   Specifies the name of the font family.

### Formal syntax {#Formal_syntax}

``` {.syntaxbox}
<family-name>where <family-name> = <string> | <custom-ident>+
```

Examples {#Examples}
--------

``` {data-language="css"}
@font-face {
  font-family: examplefont;
  src: url('examplefont.ttf');
}
```

Specifications {#Specifications}
--------------

  -----------------------------------------------------------------------------------------------------------------------------------------------------------------
  Specification                                                                                                     Status                     Comment
  ----------------------------------------------------------------------------------------------------------------- -------------------------- --------------------
  [CSS Fonts Module Level 3\                                                                                        Candidate Recommendation   Initial definition
  The definition of 'font-family' in that specification.](https://drafts.csswg.org/css-fonts-3/#font-family-desc)                              
  -----------------------------------------------------------------------------------------------------------------------------------------------------------------

Browser compatibility[Update compatibility data on GitHub](https://github.com/mdn/browser-compat-data) {#Browser_compatibility}
------------------------------------------------------------------------------------------------------

Desktop

Chrome

Edge

Firefox

Internet Explorer

Opera

Safari

Basic support

4

12

3.5

6

9

3.1

Mobile

Android webview

Chrome for Android

Edge Mobile

Firefox for Android

Opera for Android

iOS Safari

Samsung Internet

Basic support

2.2

?

12

4

12

3.1

Yes

[Edit this page on
MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family$edit)

© 2005–2018 Mozilla Developer Network and individual contributors.\
Licensed under the Creative Commons Attribution-ShareAlike License v2.5
or later.\

[https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/font-family)
