# Messages

Show a toast like message.

## Example

<script async src="//jsfiddle.net/karmacss/xsbv60Lh/embed/html,result/"></script>

## Animation

The below uses [Alpine.js](https://github.com/alpinejs/alpine) to control the showing and hiding
of the message.

<script async src="//jsfiddle.net/karmacss/k068buw1/embed/html,css,result/"></script>

## Variables

Below are the default variables, adjust any of these before you import the component.

```scss
$messages: (
  // name     background            font-color
  success:    color("green")        color("white"),
  danger:     color("red")          color("white"),
  warning:    color("yellow")       $font-color,
  info:       color("aqua")         $font-color
) !default;

// either topleft, topright, bottomleft, bottomright
$messages-position:             bottomright !default;

$message-border-radius:         $global-radius !default;
$message-margin-bottom:         1rem !default;
$message-padding:               1rem 1.5rem !default;
```