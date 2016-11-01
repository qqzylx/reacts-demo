'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

var FilterableProductTable = c({
    getInitialState: function () {
        return {
            filterText: '',
            onlyInStock: false
        };
    },
    render: function () {
        const searchBar = e(SearchBar, {
            filterText: this.state.filterText,
            onlyInStock: this.state.onlyInStock,
            handleUserInput: this._handleUserInput
        });
        const productTable = e(ProductTable, {
            products: this.props.products,
            filterText: this.state.filterText,
            onlyInStock: this.state.onlyInStock
        });
        const div = e('div', {}, searchBar, productTable);

        return div;
    },
    _handleUserInput: function (filterText, onlyInStock) {
        this.setState({
            filterText: filterText,
            onlyInStock: onlyInStock
        });
    }
});

module.exports = FilterableProductTable;
