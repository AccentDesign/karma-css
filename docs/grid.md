
# Grid

## Intro

Karma CSS includes a powerful mobile-first flexbox grid system for building layouts of all 
shapes and sizes. It’s based on a 12 column layout and has multiple tiers, one for each 
media query range. You can use it with Sass mixins or our predefined classes

## Grid Options

See how aspects of the grid system work across multiple devices with a handy table. 
All breakpoints and container widths are configurable within the variables. 
You can add or remove breakpoints as well as the number of columns in the grid.

<table>
    <thead>
        <tr>
            <th></th>
            <th>xSmall</th>
            <th>Small</th>
            <th>Medium</th>
            <th>Large</th>
            <th>xLarge</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td></td>
            <td>< 576px</td>
            <td>≥576px</td>
            <td>≥768px</td>
            <td>≥992px</td>
            <td>≥1200px</td>
        </tr>
        <tr>
            <td>Grid behavior</td>
            <td>Horizontal at all times</td>
            <td colspan="4">Collapsed to start, horizontal above breakpoints</td>
        </tr>
        <tr>
            <td>Max container width</td>
            <td>None (auto)</td>
            <td>540px</td>
            <td>720px</td>
            <td>960px</td>
            <td>1140px</td>
        </tr>
        <tr>
            <td>Class prefix</td>
            <td><code>col-</code></td>
            <td><code>col-sm-</code></td>
            <td><code>col-md-</code></td>
            <td><code>col-lg-</code></td>
            <td><code>col-xl-</code></td>
        </tr>
        <tr>
            <td>Number of columns</td>
            <td colspan="5">12</td>
        </tr>
        <tr>
            <td>Gutter width</td>
            <td colspan="5">30px (15px on each side of a column)</td>
        </tr>
        <tr>
            <td>Nestable</td>
            <td colspan="5">Yes</td>
        </tr>
        <tr>
            <td>Offsetting</td>
            <td colspan="5">Yes</td>
        </tr>
        <tr>
            <td>Ordering</td>
            <td colspan="5">Yes</td>
        </tr>
    </tbody>
</table>

## Auto Layout

### Equal Width Columns

Here are two grid layouts that apply to every device and viewport, from `xs` to `xl`.

<script async src="//jsfiddle.net/karmacss/9b6fj5a1/embed/html,result/"></script>

### Setting One Column Width

You can also just set the width of one column and others will auto adjust

<script async src="//jsfiddle.net/karmacss/4xwbq8jv/embed/html,result/"></script>

## Responsive

### All Breakpoints

Just using `.col` or `.col-*` classes means the grid is the same across all devices.

<script async src="//jsfiddle.net/karmacss/x302pbzr/embed/html,result/"></script>

### Stacked to Horizontal

Using a single set of `.col-sm-*` classes, you can create a basic grid system that starts out stacked 
on extra small devices before becoming horizontal on desktop (small) devices.

<script async src="//jsfiddle.net/karmacss/fweqa143/embed/html,result/"></script>

### Mix and Match

Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes 
for each tier as needed. See the example below for a better idea of how it all works.

<script async src="//jsfiddle.net/karmacss/sp4z87do/embed/html,result/"></script>

## No Gutters

The gutters between columns in our predefined grid classes can be removed with `.no-gutters`. 
This removes the negative margins from `.row` and the horizontal padding from all immediate children columns.

Here’s the source code for creating these styles. Note that column overrides are scoped to only the first 
children columns and are targeted via attribute selector. While this generates a more specific selector, 
column padding can still be further customised with spacing utilities.

```scss
.no-gutters {
    margin-right: 0;
    margin-left: 0;

    > .col,
    > [class*="col-"] {
        padding-right: 0;
        padding-left: 0;
    }
}
```

In practice, here’s how it looks. Note you can continue to use this with all other predefined grid 
classes (including column widths, responsive tiers, reorders, and more).

<script async src="//jsfiddle.net/karmacss/3to0npLh/embed/html,result/"></script>

## Ordering

Use the `.order-*` for controlling the visual order of your content.

<script async src="//jsfiddle.net/karmacss/hk7obqn0/embed/html,result/"></script>

## Offsetting Columns

Move columns to the right using `.offset-md-*` classes. These classes increase the left 
margin of a column by * columns. For example, `.offset-md-4` moves `.col-md-4` over four columns.

<script async src="//jsfiddle.net/karmacss/61dgjteL/embed/html,result/"></script>
