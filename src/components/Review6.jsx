import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const Review6 = ({ val, val2, val3, val4, changing4 }) => {

    const [val_, setval] = useState(val);
    const [val_2, setval2] = useState(val2);
    const [val_3, setval3] = useState(val3);
    const [val_4, setval4] = useState(val4);
    const [changing5, setChanging5] = useState(changing4);
    console.log(val_2);
    console.log(val_3);

    return (
        <div >
            {changing5 == '6' ?
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
                            <h1 style={{ color: 'rgb(175, 104, 241)' }}> {val_.fname} {val_.lname}</h1><br />
                            <p> {val_.address} , {val_.city} , {val_.country} ({val_.zip})</p>
                            <p> {val_.phone}</p>
                            <p> {val_.email}</p>
                        </div>
                        <div className="row">
                            <h3>PROFESSIONAL SUMMARY</h3><div className="dotted"></div><br />
                            <p>{val_4.summary}</p>
                        </div>
                        <div className="row">
                            <h3>EMPLOYEMENT HISTORY</h3><div className="dotted"></div><br />
                            <h5><b>{val_2.title} , {val_2.employer}</b></h5><span style={{ textAlign: 'end' }}>{val_2.city}</span>
                            <p style={{ color: 'rgb(175, 104, 241)' }}>{val_2.startM} , {val_2.startY} - {val_2.endM} , {val_2.endY}</p>
                            <p>{val_2.jDesc}</p>
                        </div>
                        <div className="row">
                            <h5><b>IT Technician , International Mobilities</b></h5><span style={{ textAlign: 'end' }}>Birmigham</span>
                            <p style={{ color: 'rgb(175, 104, 241)' }}>Oct. 2015 - Apr. 2016</p>
                            <p>Operate and maintain information systems</p>
                            <p>Facilitaing system utilization</p>
                        </div>
                        <div className="row">
                            <h3>EDUCATION</h3><div className="dotted"></div><br />
                            <h5><b>{val_3.school}</b></h5><span style={{ textAlign: 'end' }}>{val_3.city}</span>
                            <p style={{ color: 'rgb(175, 104, 241)' }}>{val_3.dateM}, {val_3.dateY}</p>
                            <p>{val_3.degree}</p>
                        </div>
                        <div className="row">
                            <h3>HONORS</h3><div className="dotted"></div><br />
                            <h5><b>IIIT Ranchi</b></h5><span style={{ textAlign: 'end' }}>Ranchi</span>
                            <p style={{ color: 'rgb(175, 104, 241)' }}>Sep. 1999 - May 2011</p>
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
                : <></>}
        </div>
    )
}

export default Review6

