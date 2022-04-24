import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Review2 from './Review2';

const Review1 = ({ data, data2, data3, data4, changes }) => {

  const [value, setValue] = useState(data);
  const [value2, setValue2] = useState(data2);
  const [value3, setValue3] = useState(data3);
  const [value4, setValue4] = useState(data4);
  const [changing, setChanging] = useState(changes);
  return (
    <div >
      {changing == '1' ?
        <div>
          <div className="container">
            <input type="checkbox" className='checkbox' checked /> Pesonal Info &nbsp;
            <input type="checkbox" className='checkbox' checked /> Experience &nbsp;
            <input type="checkbox" className='checkbox' checked /> Education &nbsp;
            <input type="checkbox" className='checkbox' checked /> Skills &nbsp;
            <input type="checkbox" className='checkbox' checked /> Summary &nbsp;
            <input type="checkbox" className='checkbox' disabled /> Review &nbsp;
          </div><hr />
          <div className="container review-p">
            <div className="row">
              <div className="col col-8">
                <div className="row">
                  <h2>{value.fname} {value.lname}</h2>
                </div>
                <div className="row">
                  <div className="col col-1">
                    <img src="https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-11/256/left-writing-hand.png" className='side-img' />
                    <div className="vertical-1"></div>
                  </div>
                  <div className="col col-11">
                    <h3>Professional summary</h3>
                    <p>{value4.summary}</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: 10 }}>
                  <div className="col col-1">
                    <img src="https://cdn3.iconfinder.com/data/icons/business-vol-1/72/19-512.png" alt="" className='side-img' />
                    <div className="vertical-2"></div>
                  </div>
                  <div className="col col-11">
                    <h3>Employement history</h3><br />
                    <h5>{value2.title} at {value2.employer}, {value2.city}, {value2.state}</h5>
                    <p>{value2.startM},{value2.startY} - {value2.endM}, {value2.endY}</p><br />
                    <p>{value2.jDesc}</p><br />
                    <h5>IT Technician at International Mobilities, Birmingham</h5>
                    <p>October,2015 - April,2016</p><br />
                    <p>Operate and maintain information systems</p>
                    <p>Facilitating system utilization</p>
                  </div>
                </div>
                <div className="row" style={{ marginTop: 10 }}>
                  <div className="col col-1">
                    <img src="https://www.pngfind.com/pngs/m/5-55817_education-icon-png-photo-free-education-icon-png.png" alt="" className='side-img' />
                    <div className="vertical-3"></div>
                  </div>
                  <div className="col col-11">
                    <h3>Education</h3>
                    <h5>{value3.degree}, {value3.school}</h5>
                    <p>{value3.dateM} , {value3.dateY}</p><br />
                    <h5>12<sup>th</sup>, School of Birmingham</h5>
                    <p>September 2011 - May 2014</p><br />
                    <h5>10<sup>th</sup>, Bourville Secondary School </h5>
                    <p>September 1999 - May 2011</p><br />
                  </div>
                </div>
              </div>
              <div className="col col-1">
                <div className="vertical"></div>
              </div>
              <div className="col col-3 review-side">
                <div className="row">
                  <h3>&#9675; Personal info &#9675;</h3><br /><br /><br />
                  <h5>Phone</h5>
                  <p>{value.phone}</p><br />
                  <h5>Address</h5>
                  <p>{value.address}, {value.city} , {value.country} ({value.zip})</p><br />
                  <h5>Email</h5>
                  <p>{value.email}</p>
                </div>
                <div className="row">
                  <h3>&#9675; Skills &#9675;</h3><br /><br /><br />
                  <h5>XHTML</h5>
                  <p>&#9733;&#9733;&#9733;&#9733;&#9734;</p><br />
                  <h5>Javascript</h5>
                  <p>&#9733;&#9733;&#9733;&#9733;&#9733;</p><br />
                  <h5>CSS</h5>
                  <p>&#9733;&#9733;&#9733;&#9734;&#9734;</p><br />
                  <h5>Visual Basics</h5>
                  <p>&#9733;&#9733;&#9734;&#9734;&#9734;</p>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col col-sm-12 col-md-8">
                <NavLink to='/information/summary'> <button className='btn btn-info back-btn text-white' >Back</button></NavLink>
              </div>
              <div className="col col-sm-12 col-md-4">
                <button className='btn btn-warning text-white download-btn'><strong> <img src="https://th.bing.com/th/id/R.cf9c6bacb312f84aa76be26f187355bb?rik=2P8tBHJzzpnhlg&riu=http%3a%2f%2ficons.iconarchive.com%2ficons%2fdesignbolts%2fthin-download%2f512%2fFast-Download-icon.png&ehk=zLfanxwA0m7X3hND8Uscr8Q8TkyXHJQAH3gaOYjJkEk%3d&risl=&pid=ImgRaw&r=0" alt="" className='download-img' /> Download</strong></button>
              </div>
            </div>
          </div>
        </div>
        : <Review2 changing={changing} value={value} value2={value2} value3={value3} value4={value4} />}
    </div>
  )
}

export default Review1