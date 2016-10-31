'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var ComponentForm = c({
    render: function () {
        const div = e('div', {
            className: 'commentForm'
        }, 'Hello world! I am a CommentForm without JSX');

        return div;
    }
});

module.exports = ComponentForm;
