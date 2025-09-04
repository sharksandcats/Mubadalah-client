import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState, useEffect} from 'react';

import AdminSidebar from '../Components/AdminSidebar';
import '../css/AdminProfile.css'


function AdminProfile() {

  const [admin, setAdmin] = useState({name: '', email: '', password: ''});
  const username = 'admin';

  const BASE_URL = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    const fetchAdmin = async() => {
      try{
        const response = await fetch(`${BASE_URL}/api/admin/${username}`);
        if(!response.ok){
          console.log("failed to fetch admin");
        }
        const data = await response.json();
        setAdmin(data);
      }catch(err){
        console.log(err);
        alert(err.message)
      }
    }
    fetchAdmin();
  }, [username])

  return (
    <div className='admin-profile-container'>
        <AdminSidebar/>
        <Form.Control className= 'field' type="text" value={admin.name} readOnly />
        <Form.Control className= 'field' type="text" value={admin.email} readOnly />
        <Form.Control className= 'field' type="text" value={admin.password} readOnly />
    </div>
  );
}

export default AdminProfile;