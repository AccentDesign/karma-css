**********
Typography
**********

Font
====

The base type is ``Open Sans`` at 15px over 1.6 line height (24px), html is set to 62.5% 
so that all the REM measurements throughout Karma CSS are based on 10px sizing. 
So basically 1.5rem = 15px.

Headings
========

All heading ``h1`` through to ``h6`` are available.

.. raw:: html

    <div class="mb-2h">
    <h1>h1. Karma heading</h1>
    <h2>h2. Karma heading</h2>
    <h3>h3. Karma heading</h3>
    <h4>h4. Karma heading</h4>
    <h5>h5. Karma heading</h5>
    <h6>h6. Karma heading</h6>
    </div>

.. code-block:: html

    <h1>h1. Karma heading</h1>
    <h2>h2. Karma heading</h2>
    <h3>h3. Karma heading</h3>
    <h4>h4. Karma heading</h4>
    <h5>h5. Karma heading</h5>
    <h6>h6. Karma heading</h6>

Use the included utility classes to recreate the small secondary heading text

.. raw:: html

    <div class="mb-2h">
    <h1>h1. Karma heading <small class="muted">with some small faded text</small></h1>
    </div>

.. code-block:: html

    <h1>h1. Karma heading <small class="muted">with some small faded text</small></h1>

Inline Text
===========

.. raw:: html

    <div class="mb-2h">
    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
    <p>You can also insert a <a>link</a> in the text.</p>
    </div>

.. code-block:: html

    <p>You can use the mark tag to <mark>highlight</mark> text.</p>
    <p><del>This line of text is meant to be treated as deleted text.</del></p>
    <p><s>This line of text is meant to be treated as no longer accurate.</s></p>
    <p><ins>This line of text is meant to be treated as an addition to the document.</ins></p>
    <p><u>This line of text will render as underlined</u></p>
    <p><small>This line of text is meant to be treated as fine print.</small></p>
    <p><strong>This line rendered as bold text.</strong></p>
    <p><em>This line rendered as italicized text.</em></p>
    <p>You can also insert a <a>link</a> in the text.</p>

Blockquote
==========

Blockquotes have also been styled.

.. raw:: html

    <blockquote>
        <p class="margin-zero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>

.. code-block:: html

    <blockquote>
        <p class="margin-zero">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    </blockquote>

You can also add additional content and apply additional styles.

.. raw:: html

    <blockquote>
        <h3>Some header</h3>
        <p class="margin-zero muted">This is some text that has been muted.</p>
    </blockquote>

.. code-block:: html

    <blockquote>
        <h3>Some header</h3>
        <p class="margin-zero muted">This is some text that has been muted.</p>
    </blockquote>

Address
=======

Address have basic styles

.. raw:: html

    <div class="mb-2h">
    <address>
        Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> 
        Visit us at:<br>
        Example.com<br>
        Box 564, Disneyland<br>
        USA
    </address>
    </div>

.. code-block:: html

    <address>
        Written by <a href="mailto:webmaster@example.com">Jon Doe</a>.<br> 
        Visit us at:<br>
        Example.com<br>
        Box 564, Disneyland<br>
        USA
    </address>

Lists
=====

Unordered lists have basic styles

.. raw:: html

    <ul>
        <li>Unordered lists have basic styles</li>
        <li>They use the circle list style
            <ul>
                <li>Nested lists styled to feel right</li>
                <li>Can nest either type of list into the other</li>
            </ul>
        </li>
        <li>Just more list items mama san</li>
    </ul>

.. code-block:: html

    <ul>
        <li>Unordered lists have basic styles</li>
        <li>They use the circle list style
            <ul>
                <li>Nested lists styled to feel right</li>
                <li>Can nest either type of list into the other</li>
            </ul>
        </li>
        <li>Just more list items mama san</li>
    </ul>

As well as ordered lists

.. raw:: html

    <ol>
        <li>Ordered lists also have basic styles</li>
        <li>They use the decimal list style
            <ul>
                <li>Ordered and unordered can be nested</li>
                <li>Can nest either type of list into the other</li>
            </ul>
        </li>
        <li>Last list item just for the fun</li>
    </ol>

.. code-block:: html

    <ol>
        <li>Ordered lists also have basic styles</li>
        <li>They use the decimal list style
            <ul>
                <li>Ordered and unordered can be nested</li>
                <li>Can nest either type of list into the other</li>
            </ul>
        </li>
        <li>Last list item just for the fun</li>
    </ol>

Horizontal Rule
===============

.. raw:: html

    <p>Some text before the rule</p>
    <hr>
    <p>Some text after the rule</p>

.. code-block:: html

    <p>Some text before the rule</p>
    <hr>
    <p>Some text after the rule</p>