'use strict';

import React, {
    createClass as c,
    createElement as e
} from 'react';

import ReactDom from 'react-dom';
import CommentBox from './commentBox';

ReactDom.render(
    e(CommentBox, {
        // use the valid url to simulate getting success response from server
        url: 'http://www.reactjs.cn/'
    }),
    document.getElementById('content')
);
