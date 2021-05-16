import React from 'react'
import Post from './Post'
import AddButton from './AddButton'
import AddPost from './AddPost'



            
const Feed = ({posts, onLike, onComment, showNewShot, onNewShot, onAddToFeed,onCommenting }) =>{
    

    return (
        <div className='feed'>
            { posts.map((post)=>(
              <Post key= {post.id} post={post} onLike={onLike} onComment={onComment} onCommenting={onCommenting} />)
            )
            }
           
        <AddButton onNewShot={onNewShot} onClick={onNewShot}/>
        {   
            showNewShot ? <AddPost onNewShot={onNewShot} onAddToFeed={onAddToFeed}/>
                        : ''

        }
        
        
        </div>
    )
}

export default Feed
