# Colours

The default colours defined in Karma CSS are as follows.

## Colour Palette

### Base

Base set of colours that are required within the framework. Karma CSS by default 
depends on these colours being defined.

<script async src="//jsfiddle.net/stuartaccent/9ftazwsb/embed/result/"></script>

### Cool

An alternative cool colour palette.

<script async src="//jsfiddle.net/stuartaccent/5tu3ew2a/embed/result/"></script>

### Warm

An alternative warm colour palette.

<script async src="//jsfiddle.net/stuartaccent/41r3y0zo/embed/result/"></script>

### Greyscale

Base set of greyscale colours.

<script async src="//jsfiddle.net/stuartaccent/wzbq7ath/embed/result/"></script>

### Social Media

Base set of popular social media colours.

<script async src="//jsfiddle.net/stuartaccent/6159dcLa/embed/result/"></script>

For each defined color there are two classes created ``.b-{color}`` to set the background and the 
class ``.c-{color}`` to set the colour (text).

## Adding Your Own Colours

You can define additional colours in your variables. Simply add the following ``$colors`` variable:

```scss
// any colours defined here will create helpers for background and text colour
// additionally you can redefine the colours in karma by adding them here too
// so adding `primary` will overwrite the primary colour.
$colors: (
    "somecolor":        rgb(0,0,0),
    "othercolor":       rgb(240,230,220)
);
```

## Helpers

There is a handy function you can use in your css to get a colour by its name: 

```css
.mydiv { border-color: color("primary"); }
```

As well as others to either lighten, darken or apply opacity

```css
// return a colour by its name and darken it by 10%
.mydiv { background-color: color-darken("primary", 10%); }

// return a colour by its name and lighten it by 10%
.mydiv { background-color: color-lighten("primary", 10%); }

// return a colour by its name and apply an alpha of .8
.mydiv { background-color: color-a("primary", .8); }
```