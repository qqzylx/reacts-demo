'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

var CommentForm = c({
    getInitialState: function () {
        return {
            author: '',
            text: ''
        };
    },
    _handleAuthorChange: function (e) {
        this.setState({
            author: e.target.value
        });
    },
    _handleTextChange: function (e) {
        this.setState({
            text: e.target.value
        });
    },
    render: function () {
        const name = e('input', {
            type: 'text',
            placeholder: 'Your name',
            value: this.state.author,
            onChange: this._handleAuthorChange
        });

        const comment = e('input', {
            type: 'text',
            placeholder: 'Say something...',
            value: this.state.text,
            onChange: this._handleTextChange
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
