import React from 'react'
import Comment from './Comment'

const CommentFeed= ({id,post}) => {
    return (
        <ul className='comment_feed'>
            {
             post.comments.map((comment)=>(
               
               <Comment key= { Math.floor(Math.random() *10000) + 1} commentText={comment} id={id} />
                        
            ))}
        </ul>
    )
}

export default CommentFeed
