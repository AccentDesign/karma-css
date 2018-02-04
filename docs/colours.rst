.. _colours:

*******
Colours
*******

.. raw:: html

    <style>
        .color-swab {
            border-radius: .25rem;
            font-size: 95%;
            margin-bottom: 2.5rem;
            padding: 1.5rem;
        }
        .color-swab small {
            font-family: 'Inconsolata', monospace;
            text-transform: uppercase;
        }
    </style>

Colour Palette
==============

The default colours defined in Karma CSS are as follows.

Base set of colours that are required within the framework:

.. raw:: html

    <div class="row">
        <div class="col-lg-4">
            <div class="color-swab b-white c-black">white<br/><small>RGB(255, 255, 255) - #ffffff</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-black c-white">black<br/><small>RGB(17, 17, 17) - #111111</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-primary c-white">primary<br/><small>RGB(51, 195, 240) - #33c3f0</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-secondary c-black">secondary<br/><small>RGB(240, 240, 240) - #f0f0f0</small></div>
        </div>
    </div>

An alternative cool colour palette:

.. raw:: html

    <div class="row">
        <div class="col-lg-4">
            <div class="color-swab b-aqua c-black">aqua<br/><small>RGB(127, 219, 255) - #7fdbff</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-blue c-white">blue<br/><small>RGB(0, 116, 217) - #0074d9</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-navy c-white">navy<br/><small>RGB(0, 31, 63) - #001f3f</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-teal c-white">teal<br/><small>RGB(57, 204, 204) - #39cccc</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-green c-white">green<br/><small>RGB(46, 204, 64) - #2ecc40</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-olive c-white">olive<br/><small>RGB(61, 153, 112) - #3d9970</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-lime c-black">lime<br/><small>RGB(1, 255, 112) - #01ff70</small></div>
        </div>
    </div>    

An alternative warm colour palette:

.. raw:: html

    <div class="row">
        <div class="col-lg-4">
            <div class="color-swab b-yellow c-black">yellow<br/><small>RGB(255, 220, 0) - #ffdc00</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-orange c-white">orange<br/><small>RGB(255, 133, 27) - #ff851b</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-red c-white">red<br/><small>RGB(255, 65, 54) - #ff4136</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-fuchsia c-white">fuchsia<br/><small>RGB(240, 18, 190) - #f012be</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-purple c-white">purple<br/><small>RGB(177, 13, 201) - #b10dc9</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-maroon c-white">maroon<br/><small>RGB(133, 20, 75) - #85144b</small></div>
        </div>
    </div>

Base set of greyscale colours:

.. raw:: html

    <div class="row">
        <div class="col-lg-4">
            <div class="color-swab b-silver c-black">silver<br/><small>RGB(221, 221, 221) - #dddddd</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-gray c-white">gray<br/><small>RGB(170, 170, 170) - #aaaaaa</small></div>
        </div>
    </div>

Base set of popular social media colours:

.. raw:: html

    <div class="row">
        <div class="col-lg-4">
            <div class="color-swab b-facebook c-white">facebook<br/><small>RGB(59, 89, 153) - #3b5999</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-twitter c-white">twitter<br/><small>RGB(85, 172, 238) - #55acee</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-linkedin c-white">linkedin<br/><small>RGB(0, 119, 181) - #0077b5</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-googleplus c-white">googleplus<br/><small>RGB(221, 75, 57) - #dd4b39</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-instagram c-white">instagram<br/><small>RGB(228, 64, 95) - #e4405f</small></div>
        </div>
        <div class="col-lg-4">
            <div class="color-swab b-pinterest c-white">pinterest<br/><small>RGB(189, 8, 28) - #bd081c</small></div>
        </div>
    </div>

For each defined color there are two classes created ``.b-{color}`` to set the background and the 
class ``.c-{color}`` to set the colour (text).

Adding Your Own Colours
=======================

You can define additional colours in your variables. Simply add the following ``$colors`` variable:

.. code-block:: scss

    // any colours defined here will create helpers for background and text colour
    // additionally you can redefine the colours in karma by adding them here too
    // so adding `primary` will overwrite the primary colour.
    $colors: (
      "somecolor":        rgb(0,0,0),
      "othercolor":       rgb(240,230,220)
    );

Helpers
=======

There is a handy function you can use in your css to get a colour by its name: 

.. code-block:: css

       .mydiv { border-color: color("primary"); }

As well as others to either lighten, darken or apply opacity

.. code-block:: css

        // return a colour by its name and darken it by 10%
        .mydiv { background-color: color-darken(primary, 10%); }

        // return a colour by its name and lighten it by 10%
        .mydiv { background-color: color-lighten(primary, 10%); }

        // return a colour by its name and apply an alpha of .8
        .mydiv { background-color: color-a(primary, .8); }
