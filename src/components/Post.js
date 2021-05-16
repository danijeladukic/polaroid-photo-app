import React from 'react'
import {FaRegHeart,FaHeart, FaComment, FaRegComment} from '../../node_modules/react-icons/fa'
import AddCommentForm from './AddCommentForm'
import {useState} from 'react'

const Post = ({post, onLike, onComment,onCommenting}) => {
    const [showCommentForm, setShowCommentForm] = useState( false )
    
    return (
        <div className='post' id={post.id}>
            <img className='image'  src={post.img_url} alt='posted_photo'></img>
            <div className='image_info' liked={post.liked}>
                
                    { post.liked 
                            ? (<FaHeart className='heart_icon'    onClick= {(id) => onLike(post.id) } />)
                            : ( <FaRegHeart className='heart_icon' onClick={ (id)=> onLike (post.id)  } /> )
                     }
               
                     { post.commented 
                            ? (<FaComment className='comment_icon' 
                                            onClick={(id)=> {onComment(post.id)
                                                            setShowCommentForm(!showCommentForm)} }
                                />)
                            : (<FaRegComment className='comment_icon' onClick={(id)=> {onComment(post.id)
                                                                                    setShowCommentForm(!showCommentForm)} }
                                />)

                     }
                     
                
            </div>
          <div className='comment_block'> 
        {showCommentForm ? <AddCommentForm id={post.id} onCommenting={onCommenting} post={post}/>
            : ''
        }
        </div> 
        </div>
        
    )
}

export default Post
