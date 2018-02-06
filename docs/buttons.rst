*******
Buttons
*******

Basic
-----

All button element types and input types of ``button``, ``submit``, ``reset`` can be 
styled as buttons by adding the class ``.button``:

.. raw:: html

    <div class="mb-2h">
        <button class="button">button element</button>
        <input class="button" type="submit" value="submit input">
        <input class="button" type="button" value="button input">
        <input class="button" type="reset" value="reset input">
    </div>

.. code-block:: html

    <button class="button">button element</button>
    <input class="button" type="submit" value="submit input">
    <input class="button" type="button" value="button input">
    <input class="button" type="reset" value="reset input">
    
Non Button Types
----------------

Additionally so can anchor tags or anything else for that matter:

.. raw:: html

    <div class="mb-2h">
        <a class="button" href="#">anchor button</a>
        <span class="button">just a span</span>
        <div class="button">or a div</div>
    </div>

.. code-block:: html

    <a class="button" href="#">anchor button</a>
    <span class="button">just a span</span>
    <div class="button">or a div</div>

Coloured
--------

You can apply additional styles to buttons by adding a further class. 
There are two created out of the box ``.button-primary`` and ``.button-secondary``.

.. raw:: html

    <div class="mb-2h">
        <button class="button button-primary">button element</button>
        <button class="button button-secondary">button element</button>
    </div>

.. code-block:: html

    <button class="button button-primary">button element</button>
    <button class="button button-secondary">button element</button>

Outline Buttons
---------------

By adding the class ``.button-outline`` you can have a button with a transparent background. The text colour
is the main colour of the button.

.. raw:: html

    <div class="mb-2h">
        <button class="button button-outline">button element</button>
        <button class="button button-outline button-primary">button element</button>
    </div>

.. code-block:: html

    <button class="button button-outline">button element</button>
    <button class="button button-outline button-primary">button element</button>

Clear Buttons
-------------

By adding the class ``.button-clear`` you can have a button with a transparent background and border. The text colour
is the main colour of the button.

.. raw:: html

    <div class="mb-2h">
        <button class="button button-clear">button element</button>
        <button class="button button-clear button-primary">button element</button>
    </div>

.. code-block:: html

    <button class="button button-clear">button element</button>
    <button class="button button-clear button-primary">button element</button>

Additional colours can easily be added to your variables, you just need a name, colour and font color:

.. code-block:: scss

    // as well as the default buttons the below will create a css helper for 
    // "button-danger" that has red background and border with white text
    $buttons: (
        // name         color                          font-color
        danger:         map-get($colors, "red")        map-get($colors, "white")
    );
