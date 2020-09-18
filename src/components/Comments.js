import React from 'react'

const Comments = ({ comment, deleteItem }) => {
    return (
        <li className='comment__item'>
            <h2 className='comment__author'>{comment.author}</h2>
            <p className='comment__text'>{comment.text}</p>
            <div className='comment__details'>
                <p className='details__data'>{comment.date} {comment.time}</p>
                <button 
                    onClick={() => deleteItem(comment.id)} 
                    className='details__btn'
                >delete
                </button>
            </div>
        </li>
    )
}

export default Comments