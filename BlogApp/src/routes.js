import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/post_index';
import PostsNew from './components/posts_new';

export default (
    <Route path='/' components={App} >
        <IndexRoute component={PostsIndex} />
        <Route path='posts/new' components={PostsNew} />
    </Route>
);
