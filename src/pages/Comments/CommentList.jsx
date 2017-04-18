import React from 'react';
import Comment from './Comment';

export default function(props) {
    const { data } = props;
    return (
        <div className="commentList">
            {data.map((item, i) => (
                <Comment author={item.author} key={i}>{ item.text }</Comment>
            ))}
        </div>
    )
}
