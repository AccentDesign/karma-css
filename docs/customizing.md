# Customizing

## Getting Started

The quickest possible way to get started is to 
[download the quickstart project](https://github.com/AccentDesign/karma-css-starter/archive/master.zip)
from Github, all you need to do 
is run ``npm install`` and ``npm run watch-css``.

## File Structure

If possible, avoid modifying the core files. You should create your own stylesheet 
that imports Karma CSS so you can extend it. We'll assume you installed it via package manager like npm, 
you’ll have a file structure that looks like this:

```
your-project/
├── dist
├── scss
│   ├── _variables.scss
│   ├── style.scss
└── node_modules
    └── karma-css
        └── scss
```

## Importing

In your ``style.scss``, you’ll import Karma’s source files. Copy the below as a starting point:

```scss
/* ensure you import your own variables here before ours */
@import "variables";

/* karma core files */
@import "node_modules/karma-css/scss/variables";
@import "node_modules/karma-css/scss/import";

/* add your custom modules here */

/* karma utility helpers - probably best at the end of the stylesheet */
@import "node_modules/karma-css/scss/utilities";
```

## Variables

All of our variables have the option ``!default`` meaning it is only used if the variable is not set.
This allows you to overwrite any variable you choose. See more on :ref:`variables`.

Variables like ``$colors`` and ``$buttons`` do have defaults they will append if not set.
For buttons you will always have a primary and secondary, and all colours within karma will be added as well.

Of course this does not stop you from changing the primary colour used or the button called primary. We only set
what you have not.

## Adding Colours

Say you want to add the colour ``whitesmoke``, in your ``_variables.scss`` all you need is:

```scss
$colors: (
    "whitesmoke": rgb(245, 245, 245)
);
```

This will be available with all the others.

## Compiling The CSS

Of course you can compile it with what ever means you wish. We use ``autoprefixer`` 
to add browser prefixes for the likes of IE10. So bear that in mind when you decide.
