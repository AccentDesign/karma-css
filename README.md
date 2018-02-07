# Karma CSS

[![CircleCI](https://circleci.com/gh/AccentDesign/karma-css/tree/master.svg?style=svg)](https://circleci.com/gh/AccentDesign/karma-css/tree/master)
[![npm version](https://badge.fury.io/js/karma-css.svg)](https://www.npmjs.com/package/karma-css)

Karma CSS is a mobile first, responsive CSS boilerplate framework built on top of normalize and a powerful flexbox grid system.

## Our Aim

Our aim is to provide a sensible set css defaults that DO NOT impose any style on the end result. But provides enough building blocks to quickly get started and aid construction of your site. 

We support all modern browsers and back to IE10, please see the full [list](http://karmacss.readthedocs.io).

## Whats included?

* All fixes from Normalize.css for supported browsers 
* A powerful flex based grid system that has multiple configurable breakpoints and columns.
* Variables to:
    * customize the default look of form fields, buttons, tables, fonts and more.
    * creating of additional button styles.
    * defining system wide colours to use will in turn create helpers to set font and background colours to use in your html.
    * easily keep track of z-index layers and avoid issues like `zindex:99999`.
* Several useful mixins such as:
    * responsive breakpoints
    * clearfix
    * css-triangle
    * box-shadow
* Lots of additional helper classes.

## Samples

Though simple, with minimal effort, overriding 4 variables and adding 70 lines of css.

![sample 1](/images/sample1.png)

## Where can I read more?

The documentation can be found on [Read the Docs](http://karmacss.readthedocs.io).

## Can I contribute?

We welcome all comments and contributions via [Github](https://github.com/AccentDesign/karma-css).

## Customizing

View the [customization guide](http://karmacss.readthedocs.io/en/latest/customizing.html) or clone the starter project on [Github](https://github.com/AccentDesign/karma-css-starter).

All you will need to do is
```bash
$ npm install
```

and 
```bash
$ npm run watch-css
```

## Additional installation methods include

Npm
```bash
$ npm install karma-css
```

Bower
```bash
$ bower install karma-css
```

Git
```bash
$ git clone https://github.com/accentdesign/karma-css.git
```

Or alternatively the CDN if you only want the defaults
```html
<link rel="stylesheet" href="https://unpkg.com/karma-css@<version>/dist/karma.min.css">
```
