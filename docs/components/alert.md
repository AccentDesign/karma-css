# Alerts

Alert styles.

## Example

<script async src="//jsfiddle.net/karmacss/njatcx3p/embed/html,result/"></script>

## Variables

Below are the default variables, adjust any of these before you import the component.

```scss
$alert-border-darken-percent:   10% !default;
$alert-margin-bottom:           $generic-margin-bottom !default;
$alert-padding:                 1.5rem 2rem !default;
$alerts: (
  // name     background                      font-color
  success:    color-lighten("green", 35%)     $font-color,
  danger:     color-lighten("red", 30%)       $font-color,
  warning:    color-lighten("yellow", 35%)    $font-color,
  info:       color-lighten("aqua", 15%)      $font-color
) !default;
```