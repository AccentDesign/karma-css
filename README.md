# Karma CSS

[![CircleCI](https://circleci.com/gh/AccentDesign/karma-css/tree/master.svg?style=svg)](https://circleci.com/gh/AccentDesign/karma-css/tree/master)
[![npm version](https://badge.fury.io/js/karma-css.svg)](https://www.npmjs.com/package/karma-css)

Karma CSS is a mobile first, responsive CSS boilerplate framework built on top of normalize and a powerful flexbox grid system.

## Our Aim

Our aim is to provide a sensible set css defaults that DO NOT impose any style on the end result. But provides enough building blocks to quickly get started and aid construction of your site. 

We support all modern browsers and back to IE10, please see the full [list](http://karmacss.com).

Minified and gzipped it weighs less than 5kb.

## Whats included?

* Normalize
* A powerful flex based grid system that has multiple configurable breakpoints and columns. See [docs](http://karmacss.com/documentation/grid)
* Variables to:
    * customize the default look of form fields, buttons, tables, fonts and more. See [docs](http://karmacss.com/documentation/variables)
    * creating of additional button styles. See [docs](http://karmacss.com/documentation/buttons)
    * defining system wide colours to use will in turn create helpers to set font and background colours to use in your html. See [docs](http://karmacss.com/documentation/colours)
    * easily keep track of z-index layers and avoid issues like `zindex:99999`. See [docs](http://karmacss.com/documentation/layout/#40)
* Several useful mixins such as:
    * responsive breakpoints
    * clearfix
    * css-triangle
    * box-shadow
    * see [docs](http://karmacss.com/documentation/mixins)
* Lots of additional helper classes. See [docs](http://karmacss.com/documentation/utilities)

## Where can I read more?

The documentation can be found at [karmacss.com](http://karmacss.com).

## Can I contribute?

We welcome all comments and contributions via [Github](https://github.com/AccentDesign/karma-css).

## Getting Started

View the [getting started guide](http://karmacss.com/documentation/getting-started/) or clone the starter project on [Github](https://github.com/AccentDesign/karma-css-starter).

All you will need to do is
```bash
$ npm install
```

and 
```bash
$ npm run watch
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
<link rel="stylesheet" href="https://unpkg.com/karma-css@latest/dist/karma.min.css">
```
