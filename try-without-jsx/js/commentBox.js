'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import CommentForm from './commentForm';
import CommentList from './commentList';

require('es6-promise').polyfill();
require('isomorphic-fetch');

var simulateData = [
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is second comment"},
  {id: 3, author: "Quanqiang Zhang", text: "This is third comment"},
];

var CommentBox = c({
    getInitialState: function () {
        return {data: []};
    },
    componentDidMount: function () {
        var self = this;
        fetch(this.props.url, {
            method: 'GET'
        }).then(function(res) {
            console.log(res.status);
            console.log(res);

            // don't care result from request, just use the simulateData
            self.setState({data: simulateData});
        }).catch(function(err) {
            console.log('fetch error');

            // don't care result from request, just use the simulateData
            self.setState({data: simulateData});
        });
    },
    render: function () {
        const h1 = e('h1', {}, 'Comments');
        const commentList = e(CommentList, {
            data: this.state.data
        });
        const commentForm = e(CommentForm);
        const div = e('div', {
            className: 'commentBox'
        }, h1, commentList, commentForm);

        return div;
    }
});

module.exports = CommentBox;
