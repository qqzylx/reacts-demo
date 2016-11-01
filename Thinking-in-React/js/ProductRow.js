'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var ProductRow = c({
    render: function () {
        const unstocked = e('span', {
            style: {
                color: 'red'
            }
        }, this.props.product.name);
        var name = this.props.product.stocked ? this.props.product.name : unstocked;
        const td1 = e('td', {}, name);
        const td2 = e('td', {}, this.props.product.price);
        const tr = e('tr', {}, td1, td2);

        return tr;
    }
});

module.exports = ProductRow;
