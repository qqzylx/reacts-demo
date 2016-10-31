'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var CommentForm = c({
    render: function () {
        const name = e('input', {
            type: 'text',
            placeholder: 'Your name'
        });

        const comment = e('input', {
            type: 'text',
            placeholder: 'Say something...'
        });

        const submit = e('input', {
            type: 'submit',
            value: 'Post'
        });

        const div = e('div', {
            className: 'commentForm'
        }, name, comment, submit);

        return div;
    }
});

module.exports = CommentForm;
