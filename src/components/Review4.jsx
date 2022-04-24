import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Review5 from './Review5';

const Review4 = ({ value__, value__2, value__3, value__4, changing2 }) => {

    const [valu, setValue] = useState(value__);
    const [valu2, setValue2] = useState(value__2);
    const [valu3, setValue3] = useState(value__3);
    const [valu4, setValue4] = useState(value__4);
    const [changing3, setChanging3] = useState(changing2);

    return (
        <div className='home-p' >
            {changing3 == '4' ?
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
                            <h1 className='review-heading'><b>{valu.fname} {valu.lname}</b></h1><br />
                        </div>
                        <div className="row" style={{ textAlign: 'center' }}>
                            <hr />
                            <div className="col col-4">
                                <img src="https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/335_Telegram_logo-512.png" alt="" className='side-img' />&nbsp;&nbsp;  {valu.address} , {valu.city} , {valu.country} ({valu.zip})
                            </div>
                            <div className="col col-4">
                                <img src="https://assets.website-files.com/5b56ef44314bb999a9cfbb9e/5b61a7d9225e93c86d0f3314_phone_blue.svg" alt="" className="side-img" />&nbsp;&nbsp; {valu.phone}
                            </div>
                            <div className="col col-4">
                                <img src="https://www.iconpacks.net/icons/2/free-mail-icon-2560-thumb.png" alt="" className="side-img" />&nbsp;&nbsp; {valu.email}
                            </div>
                        </div>
                        <hr />
                        <div className="row">
                            <h3 className='sub-head'>PROFESSIONAL SUMMARY</h3>
                            <p>{valu4.summary}</p>
                        </div>
                        <div className="row">
                            <h3 className='sub-head'>EMPLOYMENT HISTORY</h3>
                            <div className="col col-3">
                                <p><b>{valu2.startM} , {valu2.startY} - {valu2.endM} , {valu2.endY}</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{valu2.title} , {valu2.employer} , {valu2.city}</h5>
                                <p>{valu2.jDesc}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3">
                                <p><b>Oct , 2015 - Apr  , 2016</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical"></div>
                            </div>
                            <div className="col col-8">
                                <h5>IT Technician , International Mobilites , Birmingham</h5>
                                <p>Operate and maintain information systems</p>
                                <p>Facilitating system utilization</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className='sub-head'>EDUCATION</h3>
                            <div className="col col-3">
                                <p><b>{valu3.dateM}, {valu3.dateY} </b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical-1"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{valu3.degree}</h5>
                                <p>{valu3.school}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className='sub-head'>HONORS</h3>
                            <div className="col col-3">
                                <p><b>Jun. 2015 - May 2017</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical-1"></div>
                            </div>
                            <div className="col col-8">
                                <h5>B.Tech in CSE [DS & AI] </h5>
                                <p>IIIT Ranchi</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3 className='sub-head'>COURSES</h3><hr />
                            <div className="col col-3">
                                <p><b>Jun. 2015 - May 2017</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical-1"></div>
                            </div>
                            <div className="col col-8">
                                <h5>Web Development </h5>
                                <p>Coursera</p>
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
                : <Review5 changing3={changing3} valu={valu} valu2={valu2} valu3={valu3} valu4={valu4} />}
        </div>
    )
}

export default Review4