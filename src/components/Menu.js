import {FaHeart, FaUser} from '../../node_modules/react-icons/fa'
const Menu=({onShowLiked}) =>{
    return (
        <span className='menu'>
         <FaHeart className='main_heart_icon' onClick={onShowLiked} />
         <FaUser className='user_icon'/>   
        </span>
    )
}
export default Menu


