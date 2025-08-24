import { useState } from 'react'

import Profile from '../Pages/Profile'
import Homepage from '../Pages/Homepage'

const ViewPosts = () =>{

    const [activeTab, setActiveTab] = useState("posts")

    return(
        <div>
            <Profile 
            activeTab={activeTab} 
            onTabChange={setActiveTab}
            />

            <div className='profile-content'>
                {activeTab === "posts" && <Homepage/>}
                {activeTab === "saved" && <p>meow</p>}
            </div>

        </div>
    )
}

export default ViewPosts;