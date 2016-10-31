'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import CommentForm from './commentForm';
import CommentList from './commentList';

var data = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is second comment"},
  {id: 3, author: "Michael Zhang", text: "This is third comment"},
];

var CommentBox = c({
    render: function () {
        const h1 = e('h1', {}, 'Comments');
        const commentList = e(CommentList, {
            data: data
        });
        const commentForm = e(CommentForm);
        const div = e('div', {
            className: 'commentBox'
        }, h1, commentList, commentForm);

        return div;
    }
});

module.exports = CommentBox;
