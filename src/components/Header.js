import Title from './Title'
import Menu from './Menu'
const Header=( {onShowLiked,onShowAllPosts} )=> {
    return (
        <div className='header'>
        <div></div>
           <Title onShowAllPosts={onShowAllPosts}/>
           <Menu onShowLiked={onShowLiked}/>
           
        </div>
    )
}

export default Header
