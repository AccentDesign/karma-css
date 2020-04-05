# Layout

## Containers

Containers are the most basic layout element in Karma CSS and are required when using our 
default grid system. Choose from a responsive, fixed-width container (meaning its max-width 
changes at each breakpoint) or fluid-width (meaning it’s 100% wide all the time).

While containers can be nested, most layouts do not require a nested container.

```html
<div class="container">
    <!-- Content here -->
</div>
```

Use ``container-fluid`` for a full width container, spanning the entire width of the viewport.

```html
<div class="container-fluid">
    <!-- Content here -->
</div>
```

## Responsive Breakpoints

We use a handful of media queries to create sensible breakpoints for our layouts and interfaces. 
These breakpoints are mostly based on minimum viewport widths and allow us to scale up 
elements as the viewport changes.

Karma CSS primarily uses the following media query ranges—or breakpoints—in our 
source Sass files for our layout, grid system, and components.

```scss
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Karma CSS

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```

Since we write our source CSS in Sass, all our media queries are available via Sass mixins:

```scss
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example usage:
@include media-breakpoint-up(sm) {
    .some-class {
        display: block;
    }
}
```

We occasionally use media queries that go in the other direction (the given screen size or smaller):

```scss
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767px) { ... }

// Medium devices (tablets, less than 992px)
@media (max-width: 991px) { ... }

// Large devices (desktops, less than 1200px)
@media (max-width: 1199px) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
```

Once again, these media queries are also available via Sass mixins:

```scss
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
```

There are also media queries and mixins for targeting a single segment of screen 
sizes using the minimum and maximum breakpoint widths.

```scss
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575px) { ... }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 991px) { ... }

// Large devices (desktops, 992px and up)
@media (min-width: 992px) and (max-width: 1199px) { ... }

// Extra large devices (large desktops, 1200px and up)
@media (min-width: 1200px) { ... }
```

These media queries are also available via Sass mixins:

```scss
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
```

Similarly, media queries may span multiple breakpoint widths:

```scss
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1199px) { ... }
```

The Sass mixin for targeting the same screen size range would be:

```scss
@include media-breakpoint-between(md, xl) { ... }
```

## z-indexes

As a solution to the problem of littering your css with random ``z-index: 99999;`` we have included a helper.
Within variables there is the following setting:

```scss
$z-layers: (
        'default': 1
) !default;
```

The idea is that you can define additional layers and then get the correct z-index using a built in function

```scss
// here the top layers z-index will be 2
$z-layers: (
        'top': 2
        'bottom': 1
) !default;
```

The order you put them in the array is up to you. You can then pull the correct z-index like:

```scss
.my-top-layer {
    z-index: zindex('top');
}
```