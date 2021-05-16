import React from 'react'
import CommentFeed from './CommentFeed'
import {useState} from 'react'

const AddCommentForm=({id, onCommenting, post})=> {
    const [commentText, setCommentText] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()
        
        
        if(!commentText){
            alert('Please add comment')
            return
        }
        
        onCommenting(id,commentText)
        
        setCommentText('')
    }
    return (
        <form className='comment_form' onSubmit={onSubmit}>
            <CommentFeed id={id} post={post} />
            <div className='comment_bar'>
                <input placeholder='Comment:'
                        class_name='comment_input' 
                        type='text'
                        value={commentText}
                        onChange={(e)=>{setCommentText(e.target.value)}}
                        
                />
                <button >Comment</button>
            </div>
        </form>
    )
}

export default AddCommentForm
