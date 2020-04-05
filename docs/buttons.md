# Buttons

## Basic

All button element types and input types of `button`, `submit`, `reset` can be 
styled as buttons by adding the class `.button`.

<script async src="//jsfiddle.net/stuartaccent/10h6ap4c/embed/html,result/"></script>

## Non Button Types

Additionally so can anchor tags or anything else for that matter.

<script async src="//jsfiddle.net/stuartaccent/9u2tvrjw/embed/html,result/"></script>

## Coloured

You can apply additional styles to buttons by adding a further class. 
There are two created out of the box `.button-primary` and `.button-secondary`.

<script async src="//jsfiddle.net/stuartaccent/wdhn7uo2/embed/html,result/"></script>

## Outline Buttons

By adding the class `.button-outline` you can have a button with a transparent background.
The text colour is the main colour of the button.

<script async src="//jsfiddle.net/stuartaccent/6a0r41hx/embed/html,result/"></script>

## Clear Buttons

By adding the class `.button-clear` you can have a button with a transparent background and border.
The text colour is the main colour of the button.

<script async src="//jsfiddle.net/stuartaccent/o9g246yb/embed/html,result/"></script>

## Additional Buttons

Additional colours can easily be added to your variables, you just need a name,
colour and font color:

```scss
// as well as the default buttons the below will create a css helper for 
// "button-danger" that has red background and border with white text
$buttons: (
    // name         color                          font-color
    danger:         map-get($colors, "red")        map-get($colors, "white")
);
```
