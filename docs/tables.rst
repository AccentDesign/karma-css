******
Tables
******

Basic
=====

Tables carry some very simple styles just to make them feel consistent, 
they have a width of 100% so they fill their parent element.

.. raw:: html

    <div class="scroll-x">
    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Created by</th>
            <th class="text-right">Created at</th>
            <th class="text-right">Cost</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="nowrap"><a href="#">Some Thing</a></td>
            <td>Foo</td>
            <td class="nowrap">by Bilbo Baggins</td>
            <td class="nowrap text-right">23 minutes ago</td>
            <td class="text-right">£100.00</td>
        </tr>
        <tr>
            <td class="nowrap"><a href="#">Another Thing</a></td>
            <td>Bar</td>
            <td class="nowrap">by Frodo Baggins</td>
            <td class="nowrap text-right">1 hour ago</td>
            <td class="text-right">£99.00</td>
        </tr>
        <tr>
            <td class="nowrap"><a href="#">Summit Else</a></td>
            <td>Wiz</td>
            <td class="nowrap">by Gandalf</td>
            <td class="nowrap text-right">01/01/2017 08:23 AM</td>
            <td class="text-right">£50.00</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td class="text-right"></td>
            <td class="text-right">£249.00</td>
        </tr>
        </tfoot>
    </table>
    </div>

.. code-block:: html

    <table>
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Created by</th>
            <th class="text-right">Created at</th>
            <th class="text-right">Cost</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="nowrap"><a href="#">Some Thing</a></td>
            <td>Foo</td>
            <td class="nowrap">by Bilbo Baggins</td>
            <td class="nowrap text-right">23 minutes ago</td>
            <td class="text-right">£100.00</td>
        </tr>
        <tr>
            <td class="nowrap"><a href="#">Another Thing</a></td>
            <td>Bar</td>
            <td class="nowrap">by Frodo Baggins</td>
            <td class="nowrap text-right">1 hour ago</td>
            <td class="text-right">£99.00</td>
        </tr>
        <tr>
            <td class="nowrap"><a href="#">Summit Else</a></td>
            <td>Wiz</td>
            <td class="nowrap">by Gandalf</td>
            <td class="nowrap text-right">01/01/2017 08:23 AM</td>
            <td class="text-right">£50.00</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td class="text-right"></td>
            <td class="text-right">£249.00</td>
        </tr>
        </tfoot>
    </table>
    
Styling
=======

There are several additional classes that can be applied to tables:

* ``table-bordered`` apply a border to the table
* ``table-hover`` highlight row on hover
* ``table-striped`` alternating row background colors
* ``table-headed`` add background color to the header

All colors are defined in :ref:`variables`. Example with all additional classes:

.. raw:: html

    <div class="scroll-x">
    <table class="table-headed table-bordered table-striped table-hover">
        <thead>
        <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Created by</th>
            <th class="text-right">Created at</th>
            <th class="text-right">Cost</th>
        </tr>
        </thead>
        <tbody>
        <tr>
            <td class="nowrap"><a href="#">Some Thing</a></td>
            <td>Foo</td>
            <td class="nowrap">by Bilbo Baggins</td>
            <td class="nowrap text-right">23 minutes ago</td>
            <td class="text-right">£100.00</td>
        </tr>
        <tr>
            <td class="nowrap"><a href="#">Another Thing</a></td>
            <td>Bar</td>
            <td class="nowrap">by Frodo Baggins</td>
            <td class="nowrap text-right">1 hour ago</td>
            <td class="text-right">£99.00</td>
        </tr>
        <tr>
            <td class="nowrap"><a href="#">Summit Else</a></td>
            <td>Wiz</td>
            <td class="nowrap">by Gandalf</td>
            <td class="nowrap text-right">01/01/2017 08:23 AM</td>
            <td class="text-right">£50.00</td>
        </tr>
        </tbody>
        <tfoot>
        <tr>
            <td>Total</td>
            <td></td>
            <td></td>
            <td class="text-right"></td>
            <td class="text-right">£249.00</td>
        </tr>
        </tfoot>
    </table>
    </div>

.. code-block:: html

    <table class="table-headed table-bordered table-striped table-hover">
        ...
    </table>

Responsive
==========

Tables dont work well on smaller screens, one way of fixing this is to wrap the 
table in a div with auto scrolling. This will enable the table to take up as 
much space as needed and enable you to scroll left and right.

.. code-block:: html

    <div class="scroll-x"><table>...</table></div>

Check out the above table at a smaller screen resolution. The class nowrap was deliberately added to force it wider.