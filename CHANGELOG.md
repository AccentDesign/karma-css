# Changelog

## v2.0.1

* added new variable `$input-font-weight`

## v2.0.0

* addition of components

  - alerts
  - button-groups
  - icon-inputs
  - input-groups
  - messages
  - tooltips

## v1.9.8

* update grid styles
* use predefined linting rules for ordering
* added transition helpers
* added x-cloak for alpine.js

## v1.9.7

* fix table variations applying to child tables 
* Set muted opacity via a variable `$muted-opacity`

## v1.9.6

* fix wrong variables being passed to box-shadow mixin

## v1.9.5

* added new variables

  - `$header-font-color`

## v1.9.4

* remove block from `li`
* new utility helpers

  - `.move` cursor move

## v1.9.3

* stop date type inputs collapsing height on ios

## v1.9.2

* Re added missing webkit resets on inputs and buttons

## v1.9.1

* re publish as readme not updating

## v1.9.0

* Added scss linting
* Removed normalize and styled only supported browsers.
* Added 3 new colour functions that take in a colour name and returns

  - `color-darken()` darken
  - `color-lighten()` lighten
  - `color-a()` add an alpha

* Added `.d-grid` for `display: grid`
* Added new button classes `.button-clear` and `.button-outline` that can be applied to any base or coloured button
* Added new variables

  - `$strong-font-weight`
  - `$lead-font-weight`
  - `$small-font-size`

### Breaking Changes

* When defining colours and using the `color()` function you must wrap the name in parentheses eg `color("primary")`

## v1.8.1

* Reworked pre and code elements to work as they should with new variables

  - `$pre-font-size`
  - `$pre-padding`
  - `$pre-margin-bottom`

* Added ability to change the header font family
* Vertical align `td` and `th`
* Added new variables for definition lists

  - `$dl-margin-bottom`
  - `$dt-margin`
  - `$dd-margin`

* Added helper to hide an element on a single breakpoint

  - `hidden-xs`
  - `hidden-sm`
  - `hidden-md`
  - `hidden-lg`
  - `hidden-xl`

* Added helper `.list-style-reset` to remove `list-style`, `padding` and `margin`

## v1.8.0

* Refactor utilities into seperate files
* Removed the need for the framework to set any input heights to make them all equal heights
* Added a new variable `$input-line-height` to set the line height of form fields
* Added a new variable `$button-line-height` to set the line height of `.button` classes
* Remove unnecessary position relative from grid column
* Added variables to set `h1`-`h6` font weight, margins and line height
* Split all use of `$generic-margin-bottom` to seperate variables
* Added more control over the default button class by adding

  - `$button-default-border-color`
  - `$button-default-font-color`
  - `$button-border-width`
  - `$button-border-radius`

* Added new code variables

  - `$code-border-width`
  - `$code-border-color`
  - `$code-border-radius`
  - `$code-inline-padding`
  - `$code-block-padding`

* Added new hr variables

  - `$hr-border-width`
  - `$hr-border-color`
  - `$hr-margin`

* Added new table variable
  
  - `$table-border-width`

* Added blockquote variables
  
  - `$blockquote-padding-x`
  - `$blockquote-padding-y`
  - `$blockquote-border-left-width`
  - `$blockquote-border-left-color`

## v1.7.1

* Remove undocumented css from radios and checkboxes
* Added input placeholder color style
* Added new table variables
  
  - `$table-background-color`
  - `$table-border-color`
  - `$table-font-size`

## v1.7.0

* You only now need to define additional or overwrite existing colours and buttons within your variables
* Added a new mixin flip to flip an element on it's x/y/both axis's
* Added new css helpers
  
  - `.flip-x`
  - `.flip-y`
  - `.flip-both`

* Fix bug with anchor transition speed using wrong variable
* Three new variables have been created to control transitions

  - `$link-transition`
  - `$button-transition`
  - `$input-transition`

* ul and ol styles are now in the variables

### Breaking Changes

* Mixin `abs-position` renamed to `position` and has additional optional parameter `$position`
* Mixin `vertical-align` has been replaced with `centerer`

### Depreciated

* `$link-transition-speed`
* `$button-transition-speed`
* `$input-transition-speed`

## v1.6.2

* Remove font size in code element
* Remove bottom margin on last child of blockquote

## v1.6.1

* Refactor `img-fluid` to use a mixin

## v1.6.0

* Added content columns mixin
* Added code font to all `code`, `kbd`, `pre`, `samp` elements

## v1.5.1

* Added `.no-print` helper

## v1.5.0

* Added mixin responsive-ratio
* Removed margin top from pre
* Added modernizr mixin for touch-hover
* Added modernizr mixin for transition-no-touch
* Added animation speeds for forms, links & buttons
* Added colour palette from http://clrs.cc/
* Added colour palette for social media from https://www.materialui.co/socialcolors
* Added `.h1` > `.h6`

## v1.4.1

* Added `$code-font-family` variable

## v1.4.0

* Added 4 new mixin to build inputs

  - `input`
  - `input-width`
  - `input-size`
  - `input-focus`

* Added 1 new mixin to build buttons

  - `button-size`

* Added some default values to the mixin button-hover
* Added a transition to input focus
* Added some flex and margin auto helpers

### Breaking Changes

* variable `$input-border-focus` has been replaced with `$input-border-color-focus`
* Renaming of helper classes
  
  - `.hidden` > `.d-hidden`
  - `.inline` > `.d-inline`
  - `.inline-block` > `.d-inline-block`
  - `.block` > `.d-block`
  - `.flex` > `.d-flex`
  - `.display-table` > `.d-table`
  - `.display-table-cell` > `.d-table-cell`

The originals have been moved into a `utilities/_helpers-depreciated.scss` which you can include in your own project
to avoid renaming any. `@include "karma-css/scss/utilities/helpers-depreciated";`

## v1.3.6

* Added new mixin to vertical align elements using translate -50%

## v1.3.5

* Removed font size in nested ul's due to ever decreasing in deeply nested 

## v1.3.4

* Added variable `$input-use-full-width` to set either the `max-width:100%` or `width:100%`
* Added new mixin `input-width` to get the above value

## v1.3.3

* Added 3 new mixin to build buttons

  - `button`
  - `button-color-variation`
  - `button-hover`

* Created sample blog and thumbnail listing page

## v1.3.2

* Removed duplicate blockquote margin bottom from core
* Added variable `$generic-margin-bottom` for `pre`, `dl`, `figure`, `table`, `p`, `ul`, `ol`, `form`, `blockquote`
* Added variable `$header-margin-bottom` for `h1`-`h6`
* Added variable `$button-default-bg-color` for the base button

## v1.3.1

* Added default button examples to test.html
* Added basic grid examples to test.html
* Fixed 0px lint warning
* Removed vertical align from button due to odd inline issue
* Added variable `$input-font-color` to set all `inputs`, `selects`, `textareas`
* Added variable `$input-margin-bottom` to set all `inputs`, `selects`, `textareas`, `fieldsets`

## v1.3.0

* Added new variable `$input-background-focus` for when an `input`, `select` or `textarea` has focus
* Removed `push-*` and `pull-*` grid classes in favour of `order-*`
* Simplified gutter widths to single variable `$grid-gutter-width`

## v1.2.3

* Added new variables that allow all form fields to be styled
* Reduced margins on `hr`, `ul` and `ol`
* Removed awkward defaults on inputs and textareas for ios
