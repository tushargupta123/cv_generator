import React, { useState } from 'react';
import personal_info from '../images/personal_info.jpg';
import { NavLink } from 'react-router-dom';

const PersonalInfo = ({ inputData }) => {

  const [user, setUser] = useState({
    fname: "", lname: "", address: "", city: "", zip: "", country: "", email: "", phone: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleClick = () => {
    inputData(user);
  }

  return (
    <div className='information-p'>
      <div className="container">
        <input type="checkbox" className='checkbox' disabled /> Pesonal Info &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Experience &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Education &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Skills &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Summary &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Review &nbsp;
      </div><hr />
      <div className="container"><br />
        <h3><pre className='information-p'>COMPLETE  YOUR  <strong>CV  HEADING</strong></pre></h3>
        <p>Employers will use this information to contact you.</p>
      </div>
      <div className="container info-input">
        <div className="row">
          <div className="col col-sm-12 col-md-4">
            <p>First name</p>
            <input type="text" name='fname' value={user.fname} onChange={handleInputs} placeholder='John' required />
          </div>
          <div className="col col-sm-12 col-md-4">
            <p>Last name</p>
            <input type="text" name='lname' value={user.lname} onChange={handleInputs} placeholder='doe' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <img src={personal_info} className='info-img' />
          </div>
        </div>
        <div className="row" style={{ marginTop: -170 }}>
          <div className="col col-sm-12 col-md-8">
            <p>Address</p>
            <input type="text" name='address' value={user.address} onChange={handleInputs} placeholder='60,Collings st.' />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-4">
            <p>City</p>
            <input type="text" name='city' value={user.city} onChange={handleInputs} placeholder='New York' />
          </div>
          <div className="col col-sm-12 col-md-2">
            <p>ZIP Code</p>
            <input type="number" name='zip' value={user.zip} onChange={handleInputs} placeholder='144601' />
          </div>
          <div className="col col-sm-12 col-md-2">
            <p>Country</p>
            <input type="text" name='country' value={user.country} onChange={handleInputs} placeholder='India' />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-4">
            <p>Email address</p>
            <input type="text" name='email' value={user.email} onChange={handleInputs} placeholder='john_doe@example.com' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <p>Phone</p>
            <input type="text" name='phone' value={user.phone} onChange={handleInputs} placeholder='xxxx-xxx-xxx' />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-8">
            <button className='btn btn-info back-btn text-white' disabled>Back</button>
          </div>
          <div className="col col-sm-12 col-md-4">
            <NavLink to='/information/experience'><button className='btn btn-warning text-white save-btn' onClick={handleClick}><strong>Save & Next</strong></button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonalInfo