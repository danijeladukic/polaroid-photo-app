import Header from './components/Header'
import Feed from './components/Feed'

import {useState} from 'react'

const App = () => {
  const [posts, setPosts] = useState([
  {
    id:1,
    img_url:'https://miro.medium.com/max/3182/1*ZdpBdyvqfb6qM1InKR2sQQ.png',
    liked:true,
    commented: false,
    comments: ['Nice catch!',],
  },
  {
    id:2,
    img_url:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxISEhUQEhIVFRUVFRUVFRUVFxUVFRUVFRUWFhUVFRUYHSggGBolHRUVITEhJSkrLi4uFx8zODMtNygtLisBCgoKDg0OFQ8QFy0dHR0tLS0tKystLS0rLS0rLS0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLTcrLS0tLf/AABEIAK4BIgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAAAQIDBAUGB//EADYQAAIBAgMGBAUEAQQDAAAAAAABAgMRBBIhBRMxQVFhcYGRoQYUMlKxFSJCwfFictHwU4Lh/8QAGAEBAQEBAQAAAAAAAAAAAAAAAAECAwT/xAAeEQEBAQADAQEBAQEAAAAAAAAAEQECEiFRAwQxQf/aAAwDAQACEQMRAD8A0WFYnYR2rlEbDsOwy1IjYdh2HYVIiOxJILCkKwErCKhCsSYgEAxAJisMC0KwWGNIVCsFiVh2JViNgsSsFgI2CxKwWFEbASsJiiImFyLAGRG0FgkRsKxMixVRIsk2RZakRYmhiZKFYYgBHSyiaJiaONejcQsFiQ0y1mIpATbEWkIBgKkADsKwqQgGItIQhiLUhWCwxpCpCSHYYWJVgAdgsKQhhYBSEAMi2WkNsgwYBIQWC4swqwxNhccZJEq5itkWi/eLoG+XQnbfjXTPrO4kWjW8QuhVOomM578N4Z/zWdkWWSkQbN1z3CAVwFR1UNxIBc8z1G0IeYTZqpBcdxCLUidxkLjTFExOxG4mAxMVyNyspCFckgkNACGKQDEMVYLDFcWYENsi2JyI3CQxWE2JyKQxNkcwswIZFg5CuKkDYhOQsxaRKwrEcwnMi+GyDYORFlQNiuAi1mAAAVY6eYGyvMLMebNerqsuK5DMLMWp1WXC5XmDOWpFuYeYqzizgi3MGYqzkXMqRa2FynOSUhUixMkmVKRJSFItTHcpzA5gi7MJyKHUOPtX4nw9B5ZzzS+yH7pLs+UX4tAjuuZHMeOw3x7Qk7Tp1ILlLSSt3S1XuejwuOhVjnpzUovnF39ej7FRschOZQ5izlqRa5izFWcWctItchZirOLOBa5CzFWYMwIszCzFeYMwIncVyOYTYSJ3FcrzCcwRa2LMVOZFzBF2YDK8TH7l6oCkdBVQdQxqY85549kat4DqGXOJzKm41bwN4ZXMN4WMtW9DemXeCdQo1b0W9Mu8DOGY17we8MmclnCxr3gb0x70i6oG11iO9uYnVLcHWSnG/X/A3zN045m8sz6PiDY2Mq0lHD1Iwlf9yzOMnGz0UktHe3M8NL4MxCvepTzX4Xn53eXifX6Mb8UeY21tGiq7i6kE9FZyim5JWejfkeX+f9+XPlvHXq/q/m4fnxzc18r2hs+rRllqRa6P+MvB8ymjXnB3hKUX1i2n6o938WSoyw7U5q6alTytNuXBWXNa6nz9s9jwa+kfCu13Wo2m7zg7SfNp/TL+vI7O9PkmFxlSk81Obi+3PxXBrxPV7K+LFJqFaKg3pnT/AG37r+JR6/ehvDHCsmrppp81qvUlvCjVvAzmTeA6oGvOGcx70W9EG3eEXVMe8FvBEbHVI70ybwM4Gl1Rbw5+KxsKavOaiu/F+C4s4e0viiOVqjdyf8mrJLqk+LA9BtHa1Oirzl4RWspeC/s8btj4kq1rxjenDon+6X+5/wBL3OPWqym3KTbb4t6sgSgAAIPqyqj3hhVUaqjq9Gc27eC3hkVUN4Op2xq3gt4Zd4G8L1Z7Y1bwW8MjqBvC9We7WpjzmPeA6o6p2bd4RdUxOqJ1C9E39Gx1Rb0xuoGcvVnu17wW8MucM5eqdm2rjKjhKmqs4ppq6burq2h43EfC81rCpGX+5OL9dbnpM4ZyZ+eZ/mLv6bv+7Xkanw7XSbtF25J6vwOU1yZ9DznlvirLvI2STcW5NcXd2V+vAnLjEza4gABhWvBbTrUk1Tm4p62smr+DTOhh/ievH6ss13WV+q/4OIAo97hdsUqiTU4pv+LaUk+lh4za1Kk8s5WfGyTb9uB4EDXZH0DB7Sp1foknbiuD9Gac584pVZReaLaa5p2Zvwm2q1O/7s1/vvK3g76FzkPcZxZzydb4lm01GCi+t7266WMWJ2xWmknK1vt/a342LvLD17l1Dk7d2s6UFkazSbSejslxduuqPIVKspfVJvxbf5IGd5KlVqOTcpNtvi3qyIAZAAAAAAAe+zjznOi11JOPf8nZit6mSUznxh3/ACGX/V7g7OhnFnMOTuNw7g7NucM5jUE+YOn3KlbMwZjG4dxRhfmglbMwZjJuu6Fu+4qNeYMxkdMe77lqNWYMxk3YTjYUa8wsxkjC4bt9fcUa8xjx+zqdXWSalayknrb8Mlun1XqJwY309ed2hsidJZrqUeq0av1Rzz2Tpaa2sc3FbCi9YPK+nGP/AMOe8Pjec/rz4GjE4KpT+qLt14r1M5zdAAAAAAAAAAAAAAAAAAAAAAAB7RwfYEutyMZReo5VIrml6nZzGnQWn/UKniY8G1fshxl0fsBJrmGXxJw6onq9dQirKuLuEY3ejLXTlzuRnS7sCudN8LslGFxqkusvcnul/qCKXF63uOnctUWr/UQy3d/3egDUuoZByp243HGlfW78gISsFkxygl38wnG3BavuUVST5Inu9LkGpLgtfEbU7apvsmA5QZVOl1WpDNO2ifhcLyb+lp+JBOMH9o3J81Yhnnxd32LJ1NODuUJ0/Ew4jYkJO6eRvpqvQ3wd+T17kHGV+xNymXHnsXsqpDXK5R+6OvquRhPZbqXJmLF7JjJ3eknzT/JjeHxvOTzQHefw8rXVTy0ZyMZhZU5ZZLwfJrqjO5uNZuaoAAIoAAAAAAAAAAAAA9pDHxb+lIrq4qPSIQw9Phm9i+OBhxTOvjCn5hW0j+EvUlRxrs8yXkXfKxSIww/e3/qPEN4mFuPpxIfPL6UpW62Naw8ULcK3AeEZalZfcxrExVrXZdHDQvx8rjnu1/gtFfzcejMtbayjwg/NnRShbh7FMsPTfbxIMdDakJcf2vzZdLG0ra3fhcuhhaa6EnTpdhU1l+ep8vcuhi6bVgUKfT2B1KUeXoigrVKdtF+LlEK9PhJvz/5JrEUXxTXkSvRYDjOC0TLI5ecvconUpLWz8ih4qi+KkKRuvG+mvmWWi+MLnKqYukvpT9gp7VSXB+qFHWcEuEUV3kv4xaOdU210jcq/XJ/YrCkdbO/sFKulpKDZy1tx31gvVjntt8oLzJSOn8xTXKxJVV2OJ+tPnBE/19L+CFwmuu8vGyK69GlUWWSzf14Pkcept6/CCKIbW5uCfsLixslsOim/qfZvh6GDFbFktYPN2ej9eDNX64/sj7k6e2utNE8X1wKtCUdJRa8V/ZWlfgeqjtWD/iWR2jTa4exOp2eWhhZvhCXoOvhZQScla99OenU9THG030OZt+acItcpflMbx8XNcMAAw0AAAPZKU+Xui2m6nPXyRZv5corz0BVJ87eTOjB52uIlUfMjaT0k/wCxqD6thFdehJ8JvyM8cE/vfqa7Pn+Rwprj/ZRmpYOP3a9dS94ZLnfzCUJLhHTuxQcunoBJx7ilTiOMnx19BPX+OvWwojOHl4FUqTfO5ocGuTIKnLki1FU6Dto131KflpPW5vyvmkRyvhawWMksPLnqVvBt8F7m3Lbn7jVXk/YI53yL7+onhfH1udF1HxvdeAVJK3D2A50MEuROeBRthVVlx/ASxFNfyQHN+UXUm8Ea5Y6m9LolDEQb4pCjnzwQ44B/9R0nWi+EogqyfNAc2ez0UVNmvkjtuaa0Kd4lxt6iFcL5GXQccE+h1/mKa5kfnKXW3kSLXMjgn0JrBmypj6UVpJP1KHtmmuEH+Bcw9VywBKns99w/Xo/YyD24uUPclxZrUsF11M208KlSbXK35S/sitvSv9KHjtqRnSlDLaTtbpxT/obywmuIAAc2wAAB7H9SpPWzIx2rBfx9zgWQNLudGK7r25HlD3KKu3Xygl3Zx5w6Mi6bfFkV1VtSb6ewpYyo1feW8DlqnbmyDS7gdWGMqf8Am9WV1cTVbvvX6nPikuQ5VXwVkB0liprjUbB7Sn97RzVGT4sthhlzKi515/e3fuVqvP736sthSguTJOMejEKoc5t/U/Vl1Ccl/Jv1FniuQSx0lwSQPWhwb1kwdWlz9tDm1cbJ8yh1GxSOysZR6S9SNXE03wv5tnGbBMUjdVq30vp4sofiVJkrEUp36kG31ZZmCxFVZn1ZNVn1YZB7sQS+bl9z9SMsTJ8WG5JRpD1FTqPqJzZZUgkVtkVHMIkBFRsA7iuA4k60uBBMJO4CAAAAAQH/2Q==',
    liked:false,
    commented: false,
    comments: [],
  },
  {
    id:3,
    img_url:'https://memyselfandela.files.wordpress.com/2012/04/black-and-white-tips.jpg',
    liked:false,
    commented: false,
    comments: ['Wow, havent seen something like this a long time already..'],
  },
  {
    id:4,
    img_url:'http://www.hereinuk.com/wp-content/uploads/2014/03/Creative-Wallpaper-Boat-in-a-Bottle-Wallpaper-HD-Wallpapers.jpg',
    liked:false,
    commented: false,
    comments: ['Beautiful!'],
  }, {
    id:5,
    img_url:'https://r1.ilikewallpaper.net/iphone-wallpapers/download/8156/Roadscape-iphone-wallpaper-ilikewallpaper_com.jpg',
    liked:false,
    commented: false,
    comments: [''],
  },
  ])
  const [showNewShot, setShowNewShot] = useState( false )

  //Toggle like
  const toggleLike=(id)=>{
    setPosts(posts.map((post) => post.id === id
    ? {...post, liked: !post.liked} 
    : post))
  }
  //Toggle comment
  const toggleComment = (id) => {
    setPosts(posts.map((post) => post.id === id
    ? {...post, commented: !post.commented}
    : post))


  }

  //Toggle new post form
  const toggleNewShot = () => {
    setShowNewShot( !showNewShot)
  }

  //toggle Add to feed button
  const toggleAddToFeed = ({url}) =>{
    const id1 = Math.floor(Math.random() *10000) + 1
    
    
    const newPost = { id: id1 , img_url: url.toString(), comments:[]}
    
    
    setPosts([newPost,...posts])

    setShowNewShot(false)

    //window.scrollTo( 0 , 0 )
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  //toggle commenting
  const toggleCommenting = (id, comment_value) =>{
    
    posts.forEach((post) => {
              if( post.id === id)
                
                post.comments.push(comment_value)
                             
                })  
  }  

  //toggle show liked
  const toggleShowLiked= () =>{
    
    const newPost = posts.filter(post=>post.liked===true)
    setPosts(newPost)

  }
  


  return (
    <div className="App">
      <Header onShowLiked={toggleShowLiked}/>
      <Feed posts={posts} 
            onLike={toggleLike} 
            onComment={toggleComment} 
            showNewShot={showNewShot} 
            onNewShot={toggleNewShot} 
            onAddToFeed={toggleAddToFeed}
            onCommenting ={toggleCommenting}
            
      />
     
    </div>
  );

  }
export default App;
