'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

var ProductTable = c({
    render: function () {
        const thName = e('th', {}, 'Name');
        const thPrice = e('th', {}, 'Price');
        const trTitle = e('tr', {}, thName, thPrice);
        const thead = e('thead', {}, trTitle);
        var rows =[];
        var lastCategory = null;
        this.props.products.forEach(function (product) {
            if (product.category !== lastCategory) {
                var productCategoryRow = e(ProductCategoryRow, {
                    category: product.category,
                    key: product.category
                });
                rows.push(productCategoryRow);
            }
            var productRow = e(ProductRow, {
                product: product,
                key: product.name
            });
            rows.push(productRow);
            lastCategory = product.category;
        });
        var tbody = e('tbody', {}, rows);
        var table = e('table', {}, thead, tbody);

        return table;
    }
});

module.exports = ProductTable;
