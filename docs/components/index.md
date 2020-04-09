# Getting Started

All components and their default styles have been built into a single css file. 
So if you do not want the scss included in your project or dont need to adjust any of
the default variables you can link the css directly in.

```html
<link rel="stylesheet" href="https://unpkg.com/karma-css@latest/dist/karma-components.min.css">
```

## Building from Source

After following the [customisation guide](../customizing.md) you can include the
components after the core import from karma.

```scss
/* ensure you import your own variables here before ours */
@import "variables";

/* karma core files */
@import "node_modules/karma-css/scss/variables";
@import "node_modules/karma-css/scss/import";

/* karma components */
@import "node_modules/karma-css/scss/components/alert";
@import "node_modules/karma-css/scss/components/button-group";
@import "node_modules/karma-css/scss/components/icon-input";
@import "node_modules/karma-css/scss/components/input-group";
@import "node_modules/karma-css/scss/components/message";
@import "node_modules/karma-css/scss/components/tooltip";

/* add your custom modules here */

/* karma utility helpers - probably best at the end of the stylesheet */
@import "node_modules/karma-css/scss/utilities";
```