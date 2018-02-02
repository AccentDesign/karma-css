****
Grid
****

Intro
=====

Karma CSS includes a powerful mobile-first flexbox grid system for building layouts of all 
shapes and sizes. It’s based on a 12 column layout and has multiple tiers, one for each 
media query range. You can use it with Sass mixins or our predefined classes

.. _grid-options:

Grid Options
============

See how aspects of the grid system work across multiple devices with a handy table. 
All breakpoints and container widths are configurable within the variables. 
You can add or remove breakpoints as well as the number of columns in the grid.

+---------------------------+-------------------------+-------------+-------------+-------------+-------------+
|                           | xSmall                  | Small       | Medium      | Large       | xLarge      |
+---------------------------+-------------------------+-------------+-------------+-------------+-------------+
|                           | < 576px                 | ≥576px      | ≥768px      | ≥992px      | ≥1200px     |
+===========================+=========================+=============+=============+=============+=============+
| Grid behavior             | Horizontal at all times | Collapsed to start, horizontal above breakpoints      |
+---------------------------+-------------------------+-------------+-------------+-------------+-------------+
| Max container width	    | None (auto)             | 540px       | 720px       | 960px       | 1140px      |
+---------------------------+-------------------------+-------------+-------------+-------------+-------------+
| Class prefix	            | ``col-``                | ``col-sm-`` | ``col-md-`` | ``col-lg-`` | ``col-xl-`` |
+---------------------------+-------------------------+-------------+-------------+-------------+-------------+
| Number of columns         | 12                                                                              |
+---------------------------+---------------------------------------------------------------------------------+
| Gutter width	            | 30px (15px on each side of a column)                                            |
+---------------------------+---------------------------------------------------------------------------------+
| Nestable                  | Yes                                                                             |
+---------------------------+---------------------------------------------------------------------------------+
| Offsetting                | Yes                                                                             |
+---------------------------+---------------------------------------------------------------------------------+
| Ordering                  | Yes                                                                             |
+---------------------------+---------------------------------------------------------------------------------+

Auto Layout
===========

Equal width
-----------

Here are two grid layouts that apply to every device and viewport, from ``xs`` to ``xl``.

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row">
            <div class="col">1 of 2</div>
            <div class="col">1 of 2</div>
        </div>
        <div class="row">
            <div class="col">1 of 3</div>
            <div class="col">1 of 3</div>
            <div class="col">1 of 3</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col">1 of 2</div>
            <div class="col">1 of 2</div>
        </div>
        <div class="row">
            <div class="col">1 of 3</div>
            <div class="col">1 of 3</div>
            <div class="col">1 of 3</div>
        </div>
    </div>

Setting one column width
------------------------

You can also just set the width of one column and others will auto adjust

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row">
            <div class="col">1 of 3</div>
            <div class="col-6">2 of 3 (wider)</div>
            <div class="col">3 of 3</div>
        </div>
        <div class="row">
            <div class="col">1 of 3</div>
            <div class="col-5">2 of 3 (wider)</div>
            <div class="col">3 of 3</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col">1 of 3</div>
            <div class="col-6">2 of 3 (wider)</div>
            <div class="col">3 of 3</div>
        </div>
        <div class="row">
            <div class="col">1 of 3</div>
            <div class="col-5">2 of 3 (wider)</div>
            <div class="col">3 of 3</div>
        </div>
    </div>

Responsive
==========

All breakpoints
---------------

Just using ``.col`` or ``.col-*`` classes means the grid is the same across all devices.

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row">
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
        </div>
        <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
            <div class="col">col</div>
        </div>
        <div class="row">
            <div class="col-8">col-8</div>
            <div class="col-4">col-4</div>
        </div>
    </div>

Stacked to horizontal
---------------------

Using a single set of ``.col-sm-*`` classes, you can create a basic grid system that starts out stacked 
on extra small devices before becoming horizontal on desktop (medium) devices.

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row">
            <div class="col-sm-8">col-sm-8</div>
            <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col-sm-8">col-sm-8</div>
            <div class="col-sm-4">col-sm-4</div>
        </div>
        <div class="row">
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
            <div class="col-sm">col-sm</div>
        </div>
    </div>

Mix and match
-------------

Don’t want your columns to simply stack in some grid tiers? Use a combination of different classes 
for each tier as needed. See the example below for a better idea of how it all works.

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row">
            <div class="col col-md-8">.col .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div class="row">
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div class="row">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col col-md-8">.col .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div class="row">
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
        <div class="row">
            <div class="col-6">.col-6</div>
            <div class="col-6">.col-6</div>
        </div>
    </div>

No Gutters
==========

The gutters between columns in our predefined grid classes can be removed with ``.no-gutters``. 
This removes the negative margins from ``.row`` and the horizontal padding from all immediate children columns.

Here’s the source code for creating these styles. Note that column overrides are scoped to only the first 
children columns and are targeted via attribute selector. While this generates a more specific selector, 
column padding can still be further customised with spacing utilities.

.. code-block:: scss

    .no-gutters {
        margin-right: 0;
        margin-left: 0;

        > .col,
        > [class*="col-"] {
            padding-right: 0;
            padding-left: 0;
        }
    }

In practice, here’s how it looks. Note you can continue to use this with all other predefined grid 
classes (including column widths, responsive tiers, reorders, and more).

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row no-gutters">
            <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row no-gutters">
            <div class="col-12 col-sm-6 col-md-8">.col-12 .col-sm-6 .col-md-8</div>
            <div class="col-6 col-md-4">.col-6 .col-md-4</div>
        </div>
    </div>

Ordering
========

Use the ``.order-*`` for controlling the visual order of your content.

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row">
            <div class="col order-md-2">.col .order-md-2</div>
            <div class="col order-md-1">.col .order-md-1</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col order-md-2">.col .order-md-2</div>
            <div class="col order-md-1">.col .order-md-1</div>
        </div>
    </div>

Offsetting Columns
==================

Move columns to the right using ``.offset-md-*`` classes. These classes increase the left 
margin of a column by * columns. For example, ``.offset-md-4`` moves ``.col-md-4`` over four columns.

.. raw:: html

    <div class="example-grid">
    <div class="container">
        <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 offset-md-4 c-red">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>
    </div>
    </div>

.. code-block:: html

    <div class="container">
        <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
        </div>
        <div class="row">
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
            <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
        </div>
        <div class="row">
            <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
        </div>
    </div>
