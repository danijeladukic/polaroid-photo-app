import React from 'react'
import {useState} from 'react'

const AddPost = ({onAddToFeed}) => {
    const [url, setUrl] = useState('')

    const onSubmit = (e) =>{
        e.preventDefault()

        if(!url){
            alert('Please add url')
            return
        }
        
        onAddToFeed({url})
        
        setUrl('')
    }

    return (
        <form className='add_post' onSubmit={onSubmit}  >
            <input class_name='url_input' 
                    type='text' 
                    placeholder='Paste image url here:' 
                    value={url}
                    
                    onChange={(e) => setUrl(e.target.value)}
                     />
            <button className='post_button' onClick={onSubmit}>Add to feed</button>
          
        </form>
    )
}//dodat on submit u button
export default AddPost