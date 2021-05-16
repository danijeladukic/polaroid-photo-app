import React from 'react'
import { FaUser } from 'react-icons/fa'

const Comment=({id,commentText}) => {
    return (
        
        <div>
          
           <li>
               <FaUser className='user_icon_comment'/>
               {commentText}
            </li>
        </div>
            
           
        
    )
}

export default Comment
