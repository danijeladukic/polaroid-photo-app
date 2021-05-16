import React from 'react'

const AddButton = ({onNewShot}) => {
    return (
        <button className='add_button' onClick={onNewShot}>
            New Shot
        </button>
    )
}
export default AddButton