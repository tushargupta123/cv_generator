import React from 'react';
import { NavLink } from 'react-router-dom';

const Information = () => {
    return (
        <div className='info-p'><br /><br />
            <h3 className='text-center'>BUILDING A PERFECT CV HAS NEVER BEEN THIS EASY! </h3><br />
            <div className="container">
                <div className="row">
                    <div className="col">
                        <img src="https://cdn3.iconfinder.com/data/icons/business-102/512/paper.png" className='home-icon' />
                        <h5 className='text-center'><strong>CHOOSE YOUR TEMPLATE</strong></h5>
                        <p>Our professional resume templates are designed strictly following all industry guidelines and best practices </p>
                    </div>
                    <div className="col">
                        <img src="https://vivefitness.com/wp-content/uploads/2020/07/memberships.png" className='home-icon' />
                        <h5 className='text-center'><strong>SHOW WHAT YOU'RE MADE OF</strong></h5>
                        <p>Not finding the right words to showcase yourself? We´ve added thousands of pre-written examples and resume samples.</p><br /><br /><br />
                        <NavLink to='/information/personal_info'><button className="btn home-btn" type="submit">Create Now</button></NavLink>
                    </div>
                    <div className="col">
                        <img src="https://9clouds.com/wp-content/uploads/2019/01/9-Clouds-Manifesto-Icon2.png" className='home-icon' />
                        <h5 className='text-center'><strong>DOWNLOAD YOUR CV</strong></h5>
                        <p>Start impressing employers. Download your awesome resume and land the job you are looking for, effortlessly.  </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Information