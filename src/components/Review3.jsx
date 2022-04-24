import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Review4 from './Review4';

const Review2 = ({ value_, value_2, value_3, value_4, changing1 }) => {

    const [value__, setvalue_] = useState(value_);
    const [value__2, setvalue_2] = useState(value_2);
    const [value__3, setvalue_3] = useState(value_3);
    const [value__4, setvalue_4] = useState(value_4);
    const [changing2, setChanging2] = useState(changing1);

    return (
        <div className='home-p' >
            {changing2 == '3' ?
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
                        <div className="row review-back">
                            <h2>{value__.fname} {value__.lname}</h2><br />
                        </div>
                        <div className="row">
                            <h3>INFO</h3><hr />
                            <p><b>Address:</b> <span style={{ marginLeft: 30 }}></span> {value__.address} , {value__.city} , {value__.country} ({value__.zip})</p>
                            <p><b>Phone:</b> <span style={{ marginLeft: 42 }}></span> {value__.phone}</p>
                            <p><b>Email:</b> <span style={{ marginLeft: 44 }}></span> {value__.email}</p>
                        </div>
                        <div className="row">
                            <h3>PROFESSIONAL SUMMARY</h3><hr />
                            <p>{value__4.summary}</p>
                        </div>
                        <div className="row">
                            <h3>EMPLOYMENT HISTORY</h3><hr />
                            <div className="col col-3">
                                <p><b>{value__2.startM} , {value__2.startY} - {value__2.endM} , {value__2.endY}</b></p>
                                <p><b>{value__2.city}</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{value__2.title} , {value__2.employer}</h5>
                                <p>{value__2.jDesc}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3">
                                <p><b>{value__2.startM} , {value__2.startY} - {value__2.endM} , {value__2.endY}</b></p>
                                <p><b>{value__2.city}</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{value__2.title} , {value__2.employer}</h5>
                                <p>{value__2.jDesc}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3>EDUCATION</h3><hr />
                            <div className="col col-3">
                                <p><b>{value__3.dateM}, {value__3.dateY}</b></p>
                                <p><b>{value__3.city}</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical-1"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{value__3.degree}</h5>
                                <p>{value__3.school}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3>HONORS</h3><hr />
                            <div className="col col-3">
                                <p><b>Jun. 2015 - May 2017</b></p>
                                <p><b>Ranchi</b></p>
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
                            <h3>COURSES</h3><hr />
                            <div className="col col-3">
                                <p><b>Jun. 2015 - May 2017</b></p>
                                <p><b>Coursera</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical-1"></div>
                            </div>
                            <div className="col col-8">
                                <h5>Web Development </h5>
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
                : <Review4 changing2={changing2} value__={value__} value__2={value__2} value__3={value__3} value__4={value__4} />}
        </div>
    )
}

export default Review2