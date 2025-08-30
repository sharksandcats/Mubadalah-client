import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';

import AdminSidebar from '../Components/AdminSidebar';
import '../css/AdminProfile.css'


function AdminProfile() {
  return (
    <div className='admin-profile-container'>
        <AdminSidebar />
        <Form.Control className= 'field' type="text" placeholder="Maya" readOnly />
        <Form.Control className= 'field' type="text" placeholder="maya@gmail.com" readOnly />
        <Form.Control className= 'field' type="text" placeholder="••••••••••" readOnly />
    </div>
  );
}

export default AdminProfile;