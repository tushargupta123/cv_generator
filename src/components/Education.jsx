import React, { useState } from 'react';
import education from '../images/education.jpg';
import { NavLink } from 'react-router-dom';

const Education = ({ inputData3 }) => {

  const [user, setUser] = useState({
    school: "", city: "", state: "", degree: "", dateM: "", dateY: ""
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleClick = () => {
    inputData3(user);
  }
  console.log(user);

  return (
    <div>
      <div className="container">
        <input type="checkbox" className='checkbox' checked /> Pesonal Info &nbsp;
        <input type="checkbox" className='checkbox' checked /> Experience &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Education &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Skills &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Summary &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Review &nbsp;
      </div><hr />
      <div className='container'><br />
        <h3><strong>EDUCATION</strong></h3>
        <p>Add information about your educational background.</p>
      </div>
      <div className='container info-input'>
        <div className="row">
          <div className="col col-sm-12 col-md-4">
            <p>School name </p>
            <input name='school' value={user.school} onChange={handleInputs} type="text" placeholder='Harvard University' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <p>City</p>
            <input name='city' value={user.city} onChange={handleInputs} type="text" placeholder='San Franciso' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <img src={education} className='edu-img' />
          </div>
        </div>
        <div className="row" style={{ marginTop: -10 }}>
          <div className="col col-sm-12 col-md-4">
            <p>State</p>
            <input name='state' value={user.state} onChange={handleInputs} type="text" placeholder='California' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <p>Select a degree</p>
            <select name='degree' value={user.degree} onChange={handleInputs} className='form-select' aria-label="Default select example">
              <option value="1">Select a degree</option>
              <option value="High school Diploma">High school Diploma</option>
              <option value="GED">GED</option>
              <option value="Associate of Arts">Associate of Arts</option>
              <option value="Associate of Science">Associate of Science</option>
              <option value="Associate of Applied Science">Associate of Applied Science</option>
              <option value="Beachlor of Arts">Beachlor of Arts</option>
              <option value="Beachlor of Science">Beachlor of Science</option>
              <option value="BBA">BBA</option>
              <option value="Master of Arts">Master of Arts</option>
              <option value="Master of Science">Master of Science</option>
              <option value="MBA">MBA</option>
              <option value="J.D.">J.D.</option>
              <option value="M.D.">M.D.</option>
              <option value="Ph.D.">Ph.D.</option>
            </select>
          </div>
        </div>
        <div className="row ">
          <div className="col col-sm-12 col-md-4" >
            <p>Field of Study</p>
            <input type="text" placeholder='Engineering' />
          </div>
          <div className="col col-sm-6 col-md-2 option">
            <p>Graduation date</p>
            <select name='dateM' value={user.dateM} onChange={handleInputs} className='form-select' aria-label="Default select example">
              <option value='month'>Month</option>
              <option value='January'>January</option>
              <option value='February'>February</option>
              <option value='March'>March</option>
              <option value='Aptil'>Aptil</option>
              <option value='May'>May</option>
              <option value='June'>June</option>
              <option value='July'>July</option>
              <option value='August'>August</option>
              <option value='September'>September</option>
              <option value='October'>October</option>
              <option value='November'>November</option>
              <option value='December'>December</option>
            </select>
            <input type="checkbox" className='exp-check' /> I presently attend here
          </div>
          <div className="col col-sm-6 col-md-2" >
            <select name='dateY' value={user.dateY} onChange={handleInputs} style={{ marginTop: 40 }} className='form-select' aria-label="Default select example">
              <option value="year">Year</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
              <option value="2020">2020</option>
              <option value="2019">2019</option>
              <option value="2018">2018</option>
              <option value="2017">2017</option>
              <option value="2016">2016</option>
              <option value="2015">2015</option>
              <option value="2014">2014</option>
              <option value="2013">2013</option>
              <option value="2012">2012</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-8">
            <NavLink to='/information/experience'> <button className='btn btn-info back-btn text-white' >Back</button></NavLink>
          </div>
          <div className="col col-sm-12 col-md-4">
            <NavLink to='/information/skills'><button className='btn btn-warning text-white save-btn' onClick={handleClick}><strong>Save & Next</strong></button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Education