'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import Comment from './comment';


var ComponentList = c({
    render: function () {
        var comment3 = null;
        var data = this.props.data;
        if (data && data.length > 0) {
            var comments = [];
            data.forEach(function(element, index) {
                const comment = e(Comment, {
                    author: element.author
                }, element.text);

                comments[index] = comment;
            });
        }

        const div = e('div', {
            className: 'commentList'
        }, comments);

        return div;
    }
});

module.exports = ComponentList;
