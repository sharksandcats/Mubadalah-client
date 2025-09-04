import { Trash2 } from 'lucide-react';
import axios from 'axios';

import '../css/Homepage.css';
import AdminSidebar from '../Components/AdminSidebar';

const AdminHomepage = ({ postId, img, user, phone, location, image, caption}) => {

    const handleDelete = async () => {
        if (!window.confirm("Are you sure you want to delete this post?")) return;

        try {
            const response = await axios.delete(`http://localhost:5000/api/admin/posts/${postId}`);
            console.log(response.data);
            alert("Post deleted successfully");
            window.location.reload();
        } catch (err) {
            console.error(err);
            alert(err.response?.data?.error || "Failed to delete post");
        }
    };

    return (
        <div className='post'>
            <AdminSidebar/>
            <div className='post-header'>
                <div className='post-user'>
                    <img src={img} alt="Profile"/>
                    <div className='post-user-info'>
                        <p>{user}</p>
                        <p>{phone} • {location}</p>
                    </div>     
                </div>
                <div className='trash-container'>
                    <Trash2 
                        className='trash-icon'
                        onClick={handleDelete}
                    />
                </div>
            </div>

            <div className='post-image'>
                <img src={image} alt="post"/>
            </div>

            <p className='post-caption'>
                <span>{user}</span> {caption}
            </p>
        </div>
    );
}

export default AdminHomepage;
