import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Review6 from './Review6';

const Review5 = ({ valu, valu2, valu3, valu4, changing3 }) => {

    const [val, setval] = useState(valu);
    const [val2, setval2] = useState(valu2);
    const [val3, setval3] = useState(valu3);
    const [val4, setval4] = useState(valu4);
    const [changing4, setChanging4] = useState(changing3);

    return (
        <div >
            {changing4 == '5' ?
                <div>
                    <div className="container">
                        <input type="checkbox" className='checkbox' checked /> Pesonal Info &nbsp;
                        <input type="checkbox" className='checkbox' checked /> Experience &nbsp;
                        <input type="checkbox" className='checkbox' checked /> Education &nbsp;
                        <input type="checkbox" className='checkbox' checked /> Skills &nbsp;
                        <input type="checkbox" className='checkbox' checked /> Summary &nbsp;
                        <input type="checkbox" className='checkbox' disabled /> Review &nbsp;
                    </div><hr />
                    <div className="container home-p review-p">
                        <div className="row">
                            <h1> {val.fname} {val.lname}</h1><br />
                            <p> {val.address} , {val.city} , {val.country} ({val.zip})</p>
                            <p> {val.phone}</p>
                            <p> {val.email}</p>
                        </div>
                        <div className="row">
                            <h3>PROFESSIONAL SUMMARY</h3><div className="dotted"></div><br />
                            <p>{val4.summary}</p>
                        </div>
                        <div className="row">
                            <h3>EMPLOYEMENT HISTORY</h3><div className="dotted"></div><br />
                            <h5><b>{val2.title} , {val2.employer}</b></h5><span style={{ textAlign: 'end' }}>{val2.city}</span>
                            <p>{val2.startM} , {val2.startY} - {val2.endM} , {val2.endY}</p>
                            <p>{val2.jDesc}</p>
                        </div>
                        <div className="row">
                            <h5><b>IT Technician , International Mobilities</b></h5><span style={{ textAlign: 'end' }}>Birmigham</span>
                            <p>Oct. 2015 - Apr. 2016</p>
                            <p>Operate and maintain information systems</p>
                            <p>Facilitaing system utilization</p>
                        </div>
                        <div className="row">
                            <h3>EDUCATION</h3><div className="dotted"></div><br />
                            <h5><b>{val3.school}</b></h5><span style={{ textAlign: 'end' }}>{val3.city}</span>
                            <p>{val3.dateM}, {val3.dateY}</p>
                            <p>{val3.degree}</p>
                        </div>
                        <div className="row">
                            <h3>HONORS</h3><div className="dotted"></div><br />
                            <h5><b>IIIT Ranchi</b></h5><span style={{ textAlign: 'end' }}>Ranchi</span>
                            <p>Sep. 1999 - May 2011</p>
                            <p>CSE [DS & AI]</p>
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
                : <Review6 changing4={changing4} val={val} val2={val2} val3={val3} val4={val4} />}
        </div>
    )
}

export default Review5