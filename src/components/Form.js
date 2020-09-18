import React from 'react'

const Form = ({ addComment, addAuthor, addText, author, text }) => {
    return (
        <div className='add__comment'>
            <form className='form'>
                <fieldset className='form__field'>
                    <legend className='form__title'>Add a new comment</legend>
                    <input 
                        className='form__input'
                        type='text' 
                        placeholder="Author's name"
                        onChange={addAuthor}
                        value={author}
                    />
                    <textarea
                        className='form__textinput'
                        placeholder='Your comment here'
                        onChange={addText}
                        value={text}
                    />
                    <button 
                        className='form__btn'
                        type='button' 
                        onClick={() => addComment()}>Add
                    </button>
                </fieldset> 
            </form>
        </div>
    )
}

export default Form