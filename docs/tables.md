# Tables

## Basic

Tables carry some very simple styles just to make them feel consistent, 
they have a width of 100% so they fill their parent element.

<script async src="//jsfiddle.net/stuartaccent/etbnr73v/embed/html,result/"></script>

## Styling

There are several additional classes that can be applied to tables:

* ``table-bordered`` apply a border to the table
* ``table-hover`` highlight row on hover
* ``table-striped`` alternating row background colors
* ``table-headed`` add background color to the header

All colors are defined in variables. Example with all additional classes.

<script async src="//jsfiddle.net/stuartaccent/b5ewtam2/embed/html,result/"></script>

## Responsive

Tables dont work well on smaller screens, one way of fixing this is to wrap the 
table in a div with auto scrolling. This will enable the table to take up as 
much space as needed and enable you to scroll left and right.

```html
<div class="scroll-x"><table>...</table></div>
```