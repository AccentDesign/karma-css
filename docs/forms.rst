*****
Forms
*****

Form elements carry some very simple styles just to make them feel consistent, 
all input and select elements by default are the same height as buttons. 
This way they can be placed next to each other without looking odd.

Sample Form
===========

.. raw:: html

    <form>
        <div class="row">
            <div class="col-md-6">
                <label>Your name</label>
                <input class="full-width" type="text" placeholder="Bilbo Baggins">
            </div>
            <div class="col-md-6">
                <label>Date of birth</label>
                <input class="full-width" type="date">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <label>Your email</label>
                <input class="full-width" type="email" placeholder="test@mailbox.com">
            </div>
            <div class="col-md-6">
                <label>Reason for contacting</label>
                <select class="full-width">
                    <option value="">--------</option>
                    <option value="Option 1">Questions</option>
                    <option value="Option 2">Admiration</option>
                    <option value="Option 3">Can I get your number?</option>
                </select>
            </div>
        </div>
        <label>Message</label>
        <textarea class="full-width" placeholder="Hi Dave …"></textarea>
        <input class="button button-primary" type="submit" value="Submit Form">
    </form>

.. code-block:: html

    <form>
        <div class="row">
            <div class="col-md-6">
                <label>Your name</label>
                <input class="full-width" type="text" placeholder="Bilbo Baggins">
            </div>
            <div class="col-md-6">
                <label>Date of birth</label>
                <input class="full-width" type="date">
            </div>
        </div>
        <div class="row">
            <div class="col-md-6">
                <label>Your email</label>
                <input class="full-width" type="email" placeholder="test@mailbox.com">
            </div>
            <div class="col-md-6">
                <label>Reason for contacting</label>
                <select class="full-width">
                    <option value="">--------</option>
                    <option value="Option 1">Questions</option>
                    <option value="Option 2">Admiration</option>
                    <option value="Option 3">Can I get your number?</option>
                </select>
            </div>
        </div>
        <label>Message</label>
        <textarea class="full-width" placeholder="Hi Dave …"></textarea>
        <input class="button button-primary" type="submit" value="Submit Form">
    </form>

Cusomizing
==========

There are lots of variables to control the likes of padding, background, borders, width and more.

Please see the :ref:`variables` section for the full list.
