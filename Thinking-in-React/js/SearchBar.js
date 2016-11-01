'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var SearchBar = c({
    _handleChange: function () {
        this.props.handleUserInput(
            this.refs.filterTextInput.value,
            this.refs.onlyInStockInput.checked
        );
    },

    render: function () {
        const text = e('input', {
            type: 'text',
            placeholder: 'Search...',
            value: this.props.filterText,
            ref: 'filterTextInput',
            onChange: this._handleChange
        });
        const checkbox = e('input', {
            type: 'checkbox',
            value: this.props.onlyInStock,
            ref: 'onlyInStockInput',
            onChange: this._handleChange
        });
        const p = e('p', {}, checkbox, ' ', 'Only show products in stock');
        const form = e('form', {}, text, p);

        return form;
    }
});

module.exports = SearchBar;
