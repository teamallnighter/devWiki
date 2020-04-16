---
title: "Intro to web componants"
layout: "post"
related: true
share-on: true
header:
  image: /assets/img/languages/html@3x.png
categories:
  - HTML
tags:
  - Web Componants
  - HTML
---

## TL;DR

With Custom Elements, web developers can create new HTML tags, beef-up existing HTML tags, or extend the components other developers have authored. The API is the foundation of web components. It brings a web standards-based way to create reusable components using nothing more than vanilla JS/HTML/CSS. The result is less code, modular code, and more reuse in our apps.

## Introduction

The browser gives us an excellent tool for structuring web applications. It's called HTML. You may have heard of it! It's declarative, portable, well supported, and easy to work with. Great as HTML may be, its vocabulary and extensibility are limited. The HTML living standard has always lacked a way to automatically associate JS behavior with your markup... until now.

Custom elements are the answer to modernizing HTML, filling in the missing pieces, and bundling structure with behavior. If HTML doesn't provide the solution to a problem, we can create a custom element that does. Custom elements teach the browser new tricks while preserving the benefits of HTML.

## Defining a new element
To define a new HTML element we need the power of JavaScript!

The customElements global is used for defining a custom element and teaching the browser about a new tag. Call customElements.define() with the tag name you want to create and a JavaScript class that extends the base HTMLElement.

Example - defining a mobile drawer panel, `<app-drawer>`:

```
class AppDrawer extends HTMLElement {...}
window.customElements.define('app-drawer', AppDrawer);

// Or use an anonymous class if you don't want a named constructor in current scope.
window.customElements.define('app-drawer', class extends HTMLElement {...});
```

Example usage:

```
<app-drawer></app-drawer>
```

It's important to remember that using a custom element is no different than using a <div> or any other element. Instances can be declared on the page, created dynamically in JavaScript, event listeners can be attached, etc. Keep reading for more examples.

## Defining an element's JavaScript API

The functionality of a custom element is defined using an ES2015 class which extends HTMLElement. Extending HTMLElement ensures the custom element inherits the entire DOM API and means any properties/methods that you add to the class become part of the element's DOM interface. Essentially, use the class to create a public JavaScript API for your tag.

Example - defining the DOM interface of `<app-drawer>`:

```
class AppDrawer extends HTMLElement {

  // A getter/setter for an open property.
  get open() {
    return this.hasAttribute('open');
  }

  set open(val) {
    // Reflect the value of the open property as an HTML attribute.
    if (val) {
      this.setAttribute('open', '');
    } else {
      this.removeAttribute('open');
    }
    this.toggleDrawer();
  }

  // A getter/setter for a disabled property.
  get disabled() {
    return this.hasAttribute('disabled');
  }

  set disabled(val) {
    // Reflect the value of the disabled property as an HTML attribute.
    if (val) {
      this.setAttribute('disabled', '');
    } else {
      this.removeAttribute('disabled');
    }
  }

  // Can define constructor arguments if you wish.
  constructor() {
    // If you define a constructor, always call super() first!
    // This is specific to CE and required by the spec.
    super();

    // Setup a click listener on <app-drawer> itself.
    this.addEventListener('click', e => {
      // Don't toggle the drawer if it's disabled.
      if (this.disabled) {
        return;
      }
      this.toggleDrawer();
    });
  }

  toggleDrawer() {
    ...
  }
}

customElements.define('app-drawer', AppDrawer);
```

In this example, we're creating a drawer that has an open property, disabled property, and a toggleDrawer() method. It also reflects properties as HTML attributes.

A neat feature of custom elements is that this inside a class definition refers to the DOM element itself i.e. the instance of the class. In our example, this refers to <app-drawer>. This (😉) is how the element can attach a click listener to itself! And you're not limited to event listeners. The entire DOM API is available inside element code. Use this to access the element's properties, inspect its children (this.children), query nodes (this.querySelectorAll('.items')), etc.

Rules on creating custom elements

The name of a custom element must contain a dash (-). So <x-tags>, <my-element>, and <my-awesome-app> are all valid names, while <tabs> and <foo_bar> are not. This requirement is so the HTML parser can distinguish custom elements from regular elements. It also ensures forward compatibility when new tags are added to HTML.
You can't register the same tag more than once. Attempting to do so will throw a DOMException. Once you've told the browser about a new tag, that's it. No take backs.
Custom elements cannot be self-closing because HTML only allows a few elements to be self-closing. Always write a closing tag (<app-drawer></app-drawer>).
Custom element reactions
A custom element can define special lifecycle hooks for running code during interesting times of its existence. These are called custom element reactions.



https://www.webcomponents.org/element/vanillawc/wc-social-link