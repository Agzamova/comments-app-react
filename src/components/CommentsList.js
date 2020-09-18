import React from 'react'
import Comments from './Comments'

const CommentsList = ({ comments, deleteItem }) => {
    return (
        <ul className='comment__list'>
            {comments.map(item => <Comments key={item.id} comment={item} deleteItem={deleteItem} />)}
        </ul>
    )
}

export default CommentsList