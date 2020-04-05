# Utility Helpers

Below is a list of all the utilites and their description within Karma CSS.

## Alignment

<table>
    <tr><td><code>align-top</code></td><td>Vertically align to the top</td></tr>
    <tr><td><code>align-bottom</code></td><td>Vertically align to the bottom</td></tr>
    <tr><td><code>align-middle</code></td><td>Vertically align to the middle</td></tr>
    <tr><td><code>align-baseline</code></td><td>Vertically align to the baseline</td></tr>
</table>

## Clearfix

<table>
    <tr><td><code>clearfix</code></td><td>Clear a floating element</td></tr>
</table>

## Colour

!!! note
    The colour helpers are created from the colours defined within the variables. By adding more, these will also be created as helpers.
   
    The below are just a selection:

    - white
    - black 
    - primary 
    - secondary

    You can also get a colour by using the provided function. See the colours section for more details.

<table>
    <tr><td><code>b-white</code></td><td>Sets the background color to white</td></tr>
    <tr><td><code>b-black</code></td><td>Sets the background color to black</td></tr>
    <tr><td><code>b-primary</code></td><td>Sets the background color to primary</td></tr>
    <tr><td><code>b-secondary</code></td><td>Sets the background color to secondary</td></tr>
    <tr><td><code>c-white</code></td><td>Sets the text color to white</td></tr>
    <tr><td><code>c-black</code></td><td>Sets the text color to black</td></tr>
    <tr><td><code>c-primary</code></td><td>Sets the text color to primary</td></tr>
    <tr><td><code>c-secondary</code></td><td>Sets the text color to secondary</td></tr>
</table>

## Cursor

<table>
    <tr><td><code>disabled</code></td><td>Show the <code>not-allowed</code> cursor</td></tr>
    <tr><td><code>move</code></td><td>Show the <code>move</code> cursor</td></tr>
    <tr><td><code>pointer</code></td><td>Show the <code>pointer</code> cursor</td></tr>
</table>

## Display

<table>
    <tr><td><code>d-block</code></td><td>Display as a block element</td></tr>
    <tr><td><code>d-hidden</code></td><td>Display as a hidden element, includes <code>[x-cloak]</code> for alpine.js</td></tr>
    <tr><td><code>d-flex</code></td><td>Display as a flex element</td></tr>
    <tr><td><code>d-grid</code></td><td>Display as a grid element</td></tr>
    <tr><td><code>d-inline</code></td><td>Display as an inline element</td></tr>
    <tr><td><code>d-inline-block</code></td><td>Display as an inline block element</td></tr>
    <tr><td><code>d-inline-flex</code></td><td>Display as an inline flex element</td></tr>
    <tr><td><code>d-table</code></td><td>Display as a table element</td></tr>
    <tr><td><code>d-table-cell</code></td><td>Display as a table-cell element</td></tr>
</table>

## Flex

!!! note
    Use all the below with ``d-flex`` on the container of the items to be flexed.

    A good resource on flex can be found at [css-tricks.com](https://css-tricks.com/snippets/css/a-guide-to-flexbox/).

<table>
    <tr><td><code>flex-row</code></td><td>Sets the direction to row</td></tr>
    <tr><td><code>flex-column</code></td><td>Sets the direction to column</td></tr>
    <tr><td><code>flex-row-reverse</code></td><td>Sets the direction to row reverse</td></tr>
    <tr><td><code>flex-column-reverse</code></td><td>Sets the direction to column reverse</td></tr>
</table>
<table>
    <tr><td><code>justify-content-start</code></td><td>Justify child items to start</td></tr>
    <tr><td><code>justify-content-end</code></td><td>Justify child items to end</td></tr>
    <tr><td><code>justify-content-center</code></td><td>Justify child items to center</td></tr>
    <tr><td><code>justify-content-between</code></td><td>Justify child items to between</td></tr>
    <tr><td><code>justify-content-around</code></td><td>Justify child items to end</td></tr>
</table>
<table>
    <tr><td><code>align-items-start</code></td><td>Align child items to start</td></tr>
    <tr><td><code>align-items-end</code></td><td>Align child items to end</td></tr>
    <tr><td><code>align-items-center</code></td><td>Align child items to center</td></tr>
    <tr><td><code>align-items-basline</code></td><td>Align child items to basline</td></tr>
    <tr><td><code>align-items-stretch</code></td><td>Align child items to stretch</td></tr>
</table>
<table>
    <tr><td><code>flex-nowrap</code></td><td>Single-line which may cause the container to overflow</td></tr>
    <tr><td><code>flex-wrap</code></td><td>Lulti-lines, direction is defined by <code>flex-direction</code></td></tr>
    <tr><td><code>flex-wrap-reverse</code></td><td>Multi-lines, opposite to direction defined by <code>flex-direction</code></td></tr>
</table>

## Float

<table>
    <tr><td><code>pull-left</code></td><td>Float an element to the left</td></tr>
    <tr><td><code>pull-right</code></td><td>Float an element to the right</td></tr>
</table>

## Image

<table>
    <tr><td><code>img-fluid</code></td><td>Make an image responsive and use the full width but no more</td></tr>
</table>

## Lists

<table>
    <tr><td><code>list-style-none</code></td><td>Remove bullets from lists <code>ul</code> and <code>ol</code></td></tr>
    <tr><td><code>list-style-reset</code></td><td>Remove list style, padding and margin from lists <code>ul</code> and <code>ol</code></td></tr>
</table>

## Overflow

<table>
    <tr><td><code>noscroll</code></td><td>Sets overflow to hidden</td></tr>
    <tr><td><code>scroll-x</code></td><td>Allow scrolling horizontally when required</td></tr>
</table>

## Position

<table>
    <tr><td><code>fixed</code></td><td>Sets position to fixed</td></tr>
    <tr><td><code>relative</code></td><td>Sets position to relative</td></tr>
    <tr><td><code>absolute</code></td><td>Sets position to absolute</td></tr>
</table>

## Print

<table>
    <tr><td><code>no-print</code></td><td>Hides this element when printing</td></tr>
</table>

## Sizing

<table>
    <tr><td><code>full-height</code></td><td>Sets the height to 100%</td></tr>
    <tr><td><code>full-visual-height</code></td><td>Sets the height to 100% if the visual height</td></tr>
    <tr><td><code>full-width</code></td><td>Sets the width to 100%</td></tr>
    <tr><td><code>max-full-width</code></td><td>Sets the maximum width to 100%</td></tr>
</table>

## Spacing

<table>
    <tr><td><code>margin-zero</code></td><td>Sets margin to zero</td></tr>
    <tr><td><code>m-auto</code></td><td>Sets margin to auto</td></tr>
    <tr><td><code>mt-auto</code></td><td>Sets margin top to auto</td></tr>
    <tr><td><code>mr-auto</code></td><td>Sets margin right to auto</td></tr>
    <tr><td><code>mb-auto</code></td><td>Sets margin bottom to auto</td></tr>
    <tr><td><code>ml-auto</code></td><td>Sets margin left to auto</td></tr>
    <tr><td><code>push-auto</code></td><td>Sets margin left and right to auto</td></tr>
</table>

## Text

<table>
    <tr><td><code>text-left</code></td><td>Sets text alignment to left</td></tr>
    <tr><td><code>text-right</code></td><td>Sets text alignment to right</td></tr>
    <tr><td><code>text-center</code></td><td>Sets text alignment to center</td></tr>
    <tr><td><code>text-just</code></td><td>Sets text alignment to justify</td></tr>
    <tr><td><code>strong</code></td><td>Sets font weight as <code>$strong-font-weight</code></td></tr>
    <tr><td><code>lead</code></td><td>Sets font weight to <code>$lead-font-weight</code></td></tr>
    <tr><td><code>muted</code></td><td>Sets the opacity as <code>$muted-opacity</code></td></tr>
    <tr><td><code>nowrap</code></td><td>Stops the text from wrapping</td></tr>
    <tr><td><code>small</code></td><td>Sets the font size to <code>$small-font-size</code></td></tr>
    <tr><td><code>uppercase</code></td><td>Makes the text uppercase</td></tr>
    <tr><td><code>text-shadow</code></td><td>Applies a shadow to the text</td></tr>
</table>

## Transform

<table>
    <tr><td><code>flip-x</code></td><td>Flips an element on its horizontal axis</td></tr>
    <tr><td><code>flip-y</code></td><td>Flips an element on its vertical axis</td></tr>
    <tr><td><code>flip-both</code></td><td>Flips an element on both axis</td></tr>
</table>

## Transition

<table>
    <tr>
        <td><code>preload-transitions</code></td>
        <td>Sets all transitions to none, tipically used during page loads then removed when loaded to stop a flickering effect. See usage below.</td>
    </tr>
</table>

```html
<body class="preload-transitions">
    <!-- place at end of body -->
    <script type="text/javascript">
        document.addEventListener("DOMContentLoaded",function(){
            let node = document.querySelector(".preload-transitions");
            node.classList.remove("preload-transitions");
        });
    </script>
</body>
```

## Visibility

!!! note
    The below depends on the configured grid breakpoints <code>xs</code>, <code>sm</code>, <code>md</code>, <code>lg</code>, <code>xl</code>

    For more details on breakpoints see the grid section.

<table>
    <tr><td><code>hidden-xs</code></td><td>Hide this element on the xs breakpoint only</td></tr>
    <tr><td><code>hidden-sm</code></td><td>Hide this element on the sm breakpoint only</td></tr>
    <tr><td><code>hidden-md</code></td><td>Hide this element on the md breakpoint only</td></tr>
    <tr><td><code>hidden-lg</code></td><td>Hide this element on the lg breakpoint only</td></tr>
    <tr><td><code>hidden-xl</code></td><td>Hide this element on the xl breakpoint only</td></tr>
    <tr><td><code>hidden-xs-down</code></td><td>Hide this element on the xs breakpoint and lower</td></tr>
    <tr><td><code>hidden-sm-down</code></td><td>Hide this element on the sm breakpoint and lower</td></tr>
    <tr><td><code>hidden-md-down</code></td><td>Hide this element on the md breakpoint and lower</td></tr>
    <tr><td><code>hidden-lg-down</code></td><td>Hide this element on the lg breakpoint and lower</td></tr>
    <tr><td><code>hidden-xl-down</code></td><td>Hide this element on the xl breakpoint and lower</td></tr>
    <tr><td><code>hidden-xs-up</code></td><td>Hide this element on the xs breakpoint and higher</td></tr>
    <tr><td><code>hidden-sm-up</code></td><td>Hide this element on the sm breakpoint and higher</td></tr>
    <tr><td><code>hidden-md-up</code></td><td>Hide this element on the md breakpoint and higher</td></tr>
    <tr><td><code>hidden-lg-up</code></td><td>Hide this element on the lg breakpoint and higher</td></tr>
    <tr><td><code>hidden-xl-up</code></td><td>Hide this element on the xl breakpoint and higher</td></tr>
</table>