'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var ProductCategoryRow = c({
    render: function () {
        const th = e('th', {
            colSpan: '2'
        }, this.props.category);
        const tr = e('tr', {}, th);

        return tr;
    }
});

module.exports = ProductCategoryRow;
