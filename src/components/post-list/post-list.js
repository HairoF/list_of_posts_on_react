import React from 'react';
import PostListItem from '../post-list-item';
import {ListGroup} from 'reactstrap';

import './post-list.css';

const PostList = ({posts, onDelete, onToggleImportant, onToggleLikes}) => {
    
    const elements = posts.map((elem) => {
        if (typeof elem === 'object' && isEmpty(elem)) {
            const {id, ...elemProps} = elem;
        return(
            <li key={id} className="list-group-item">
                <PostListItem 
                {...elemProps}
                onDelete={() => onDelete(id)}
                onToggleImportant={() => onToggleImportant(id)}
                onToggleLikes={() => onToggleLikes(id)}
                />
            </li>
        )
        }
    })
    
    function isEmpty(obj) {
        for(let key in obj)
        {
            return true;
        }
        return false;
    }

    return(
        <ListGroup className="app-list">
            {elements}
        </ListGroup>
    )
}

export default PostList;