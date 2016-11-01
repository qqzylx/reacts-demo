'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var Comment = c({
    render: function () {
        const h2 = e('h2', {
            className: 'commentAuthor'
        }, this.props.author);
        const div = e('div', {
            className: 'comment'
        }, h2, this.props.children);

        return div;
    }
});

module.exports = Comment;
