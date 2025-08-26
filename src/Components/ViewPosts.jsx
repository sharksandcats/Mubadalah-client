import Homepage from '../Pages/Homepage'

const ViewPosts = ({posts}) =>{

    return(
        <div className='View-Posts'>
            {posts.map((post, index) =>(

                <Homepage
                    key={index}
                    img={post.img}
                    user={post.user}
                    phone={post.phone}
                    location={post.location}
                    image={post.image}
                    like={post.likes}
                    caption={post.caption}
                />
            ))}
        </div>
    )
}

export default ViewPosts;