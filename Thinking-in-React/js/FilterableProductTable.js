'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import SearchBar from './SearchBar';
import ProductTable from './ProductTable';

var FilterableProductTable = c({
    render: function () {
        const searchBar = e(SearchBar);
        const productTable = e(ProductTable, {
            products: this.props.products
        });
        const div = e('div', {}, searchBar, productTable);

        return div;
    }
});

module.exports = FilterableProductTable;
