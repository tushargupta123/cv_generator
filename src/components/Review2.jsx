import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Review3 from './Review3';

const Review2 = ({ value, value2, value3, value4, changing }) => {

    const [value_, setValue] = useState(value);
    const [value_2, setValue2] = useState(value2);
    const [value_3, setValue3] = useState(value3);
    const [value_4, setValue4] = useState(value4);
    const [changing1, setChanging1] = useState(changing);

    return (
        <div className='home-p' >
            {changing1 == '2' ?
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
                            <h2>{value_.fname} {value_.lname}</h2><br />
                        </div>
                        <div className="row">
                            <h3>INFO</h3><hr />
                            <p><b>Address:</b> <span style={{ marginLeft: 30 }}></span> {value_.address} , {value_.city} , {value_.country} ({value_.zip})</p>
                            <p><b>Phone:</b> <span style={{ marginLeft: 42 }}></span> {value_.phone}</p>
                            <p><b>Email:</b> <span style={{ marginLeft: 44 }}></span> {value_.email}</p>
                        </div>
                        <div className="row">
                            <h3>PROFESSIONAL SUMMARY</h3><hr />
                            <p>{value_4.summary}</p>
                        </div>
                        <div className="row">
                            <h3>EMPLOYMENT HISTORY</h3><hr />
                            <div className="col col-3">
                                <p><b>{value_2.startM} , {value_2.startY} - {value_2.endM} , {value_2.endY}</b></p>
                                <p><b>{value_2.city}</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{value_2.title} , {value_2.employer}</h5>
                                <p>{value_2.jDesc}</p>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col col-3">
                                <p><b>{value_2.startM} , {value_2.startY} - {value_2.endM} , {value_2.endY}</b></p>
                                <p><b>{value_2.city}</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{value_2.title} , {value_2.employer}</h5>
                                <p>{value_2.jDesc}</p>
                            </div>
                        </div>
                        <div className="row">
                            <h3>EDUCATION</h3><hr />
                            <div className="col col-3">
                                <p><b>{value_3.dateM}, {value_3.dateY}</b></p>
                                <p><b>{value_3.city}</b></p>
                            </div>
                            <div className="col col-1">
                                <div className="s-vertical-1"></div>
                            </div>
                            <div className="col col-8">
                                <h5>{value_3.degree}</h5>
                                <p>{value_3.school}</p>
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
                : <Review3 changing1={changing1} value_={value_} value_2={value_2} value_3={value_3} value_4={value_4} />}
        </div>
    )
}

export default Review2