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
    _handleSubmit: function(e) {
        e.preventDefault();
        var author = this.state.author.trim();
        var text = this.state.text.trim();
        if (!text || ! author) {
            return;
        }

        // TODO: send request to server
        this.setState({
            author: '',
            text: ''
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

        const form = e('form', {
            className: 'commentForm',
            onSubmit: this._handleSubmit
        }, name, comment, submit);

        return form;
    }
});

module.exports = CommentForm;
