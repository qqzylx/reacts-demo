'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import ReactDom from 'react-dom';
import CommentBox from './commentBox';

ReactDom.render(
    e(CommentBox),
    document.getElementById('content')
);
