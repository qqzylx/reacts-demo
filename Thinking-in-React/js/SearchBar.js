'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var SearchBar = c({
    render: function () {
        const text = e('input', {
            type: 'text',
            placeholder: 'Search...'
        });
        const checkbox = e('input', {
            type: 'checkbox'
        });
        const p = e('p', {}, checkbox, ' ', 'Only show products in stock');
        const form = e('form', {}, text, p);

        return form;
    }
});

module.exports = SearchBar;
