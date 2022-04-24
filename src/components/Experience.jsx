import React, { useState } from 'react';
import experience from '../images/experience.jpg';
import { NavLink } from 'react-router-dom';

const Experience = ({ inputData2 }) => {
  const t1 = ' Research, document, rate, or select alternatives for web architecture or technologies. ';
  const t2 = ' Plan budgets and arrange for purchase of animals, feed, or supplies.';
  const t3 = ' Prepare and process medical insurance claim forms and records. ';
  const t4 = ' Sort materials, such as metals, glass, wood, paper or plastics, into appropriate containers for recycling.';
  const t5 = ' Prepare or review specifications or orders for the purchase of safety equipment, ensuring that proper features are present and that items conform to health and safety standards.';
  const t6 = ' Counsel or aid family members to assist them in understanding, dealing with, or supporting the client or patient. ';
  const t7 = ' Established compatibility with third party software products by developing programme for modification and integration. ';

  let id = '';

  const [user, setUser] = useState({
    employer: "", title: "", city: "", state: "", startM: "", startY: "", endM: "", endY: "", jDesc: ''
  });
  const [text, addText] = useState([]);

  let jtext = '';
  const handleClick = (list) => {
    addText(text.concat(list));
    jtext = text.toString();
    text.map((items) => {
      id += items;
      setUser({ jDesc: id });
    })
  }

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }
  console.log(user);

  const handleSaveClick = () => {
    inputData2(user);
  }

  return (
    <div className='information-p'>
      <div className="container">
        <input type="checkbox" className='checkbox' checked /> Pesonal Info &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Experience &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Education &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Skills &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Summary &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Review &nbsp;
      </div><hr />
      <div className='container'><br />
        <h3><strong>EXPERIENCE</strong></h3>
        <p>List your work experience, from the most recent to the oldest. Feel free to use our pre-written examples.</p>
      </div>
      <div className='container info-input'>
        <div className="row">
          <div className="col col-sm-12 col-md-4">
            <p>Employer </p>
            <input name='employer' value={user.employer} onChange={handleInputs} type="text" placeholder='IBM' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <p>Job Title</p>
            <input name='title' value={user.title} onChange={handleInputs} type="text" placeholder='Engineer' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <img src={experience} className='exp-img' />
          </div>
        </div>
        <div className="row" style={{ marginTop: -130 }}>
          <div className="col col-sm-12 col-md-4">
            <p>City</p>
            <input name='city' value={user.city} onChange={handleInputs} type="text" placeholder='San Franciso' />
          </div>
          <div className="col col-sm-12 col-md-4">
            <p>State</p>
            <input name='state' value={user.state} onChange={handleInputs} type="text" placeholder='California' />
          </div>
        </div>
        <div className="row ">
          <div className="col col-sm-6 col-md-2 option">
            <p>Start date</p>
            <select name='startM' value={user.startM} onChange={handleInputs} className='form-select' aria-label="Default select example">
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
          </div>
          <div className="col col-sm-6 col-md-2" >
            <select name='startY' value={user.startY} onChange={handleInputs} style={{ marginTop: 40 }} className='form-select' aria-label="Default select example">
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
          <div className="col col-sm-6 col-md-2 option">
            <p>End date</p>
            <select name='endM' value={user.endM} onChange={handleInputs} className='form-select' aria-label="Default select example">
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
            <input type="checkbox" className='exp-check' /> I presently work here
          </div>
          <div className="col col-sm-6 col-md-2" >
            <select name='endY' value={user.endY} onChange={handleInputs} style={{ marginTop: 40 }} className='form-select' aria-label="Default select example">
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
        <div className="row" >
          <div className="col col-sm-12 col-md-6">
            <p>Job description</p>
            <textarea name='jDesc' rows={15} cols={73} className='text-area' value={user.jDesc} onChange={handleInputs} placeholder='Describe your job responsibilities and achievements. You can also add and customize our career-specific, pre-written examples from the column on the right by clicking on them. Misspelled words will be automatically underlined as you write.'></textarea>
          </div>
          <div className="col col-sm-12 col-md-6">
            <div className="row career" >
              <div className="col col-sm-12 col-md-6">
                <p>Career field</p>
                <select className='form-select'>
                  <option value='1'>Accountings and finance</option>
                  <option value="2">Administrative Support</option>
                  <option value="3">Architecture</option>
                  <option value="4">Art, Fashion and Design</option>
                  <option value="5">Banking and Financial Services</option>
                  <option value="6">Computer and Technology</option>
                  <option value="7">Construction</option>
                  <option value="8">Dental</option>
                  <option value="9">Engineering</option>
                  <option value="10">Education and Teaching</option>
                  <option value="11">Healthcare</option>
                  <option value="12">Insurance</option>
                </select>
              </div>
              <div className="col col-sm-12 col-md-6">
                <p>Career subfield</p>
                <input type="text" placeholder='e.g Programmer' />
              </div>
            </div>
            <div className="row relevant">
              <div className="col">
                <p>Choose relevant pre-written skills</p>
              </div>
            </div>
            <div className="row career-2">
              <div className="col">
                <ul>
                  <div className="li-border"><li className="career-list" onClick={() => handleClick(t1)} ><span className="badge bg-badge">ADD</span>{t1} </li></div>
                  <div className="li-border"><li className="career-list" onClick={() => handleClick(t2)}><span className="badge bg-badge">ADD</span> {t2} </li></div>
                  <div className="li-border"><li className="career-list" onClick={() => handleClick(t3)}><span className="badge bg-badge">ADD</span>{t3} </li></div>
                  <div className="li-border"><li className="career-list" onClick={() => handleClick(t4)}><span className="badge bg-badge">ADD</span>{t4} </li></div>
                  <div className="li-border"><li className="career-list" onClick={() => handleClick(t5)}><span className="badge bg-badge">ADD</span>{t5}</li></div>
                  <div className="li-border"><li className="career-list" onClick={() => handleClick(t6)}><span className="badge bg-badge">ADD</span>{t6}</li></div>
                  <div className="li-border"><li className="career-list" onClick={() => handleClick(t7)}><span className="badge bg-badge">ADD</span> {t7}</li></div>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-8">
            <NavLink to='/information/personal_info'> <button className='btn btn-info back-btn text-white' >Back</button></NavLink>
          </div>
          <div className="col col-sm-12 col-md-4">
            <NavLink to='/information/education'><button className='btn btn-warning text-white save-btn' onClick={handleSaveClick}><strong>Save & Next</strong></button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Experience