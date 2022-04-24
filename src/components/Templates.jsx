import React from 'react';
import { NavLink } from 'react-router-dom';

const Templates = ({ change }) => {

  const handleClick = (e) => {
    change(e);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col">
            <NavLink to='/information'><img className='cv-templates' src='https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv20.jpg' onClick={() => handleClick("6")} /></NavLink>
            <span className='badge bg-warning template-badge'>Simple</span><br></br><br></br>
            <p className='home-p' >Blending a classic single column layout with helpful color accents and dividers for ease of reading, the Simple CV template is a balanced choice.</p>
          </div>
          <div className="col">
            <NavLink to='/information'><img className='cv-templates' src="https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv14.jpg" onClick={() => handleClick("4")} /></NavLink>
            <span className='badge bg-primary template-badge'>Professional</span><br></br><br></br>
            <p className='home-p'>If you’re looking for a design that is subtle, elegant, and combines the best of the old and new, the Professional CV template is the perfect choice.</p>
          </div>
          <div className="col">
            <NavLink to='/information'><img className='cv-templates' src="	https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv6.jpg" onClick={() => handleClick("5")} /></NavLink>
            <span className='badge bg-dark template-badge'>Cool</span><br></br><br></br>
            <p className='home-p'>For a CV that’s a bit more creative and fun, the Cool CV template uses a twin column design and eye-catching icons to differentiate sections.</p>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col">
            <NavLink to='/information'><img className='cv-templates' src='https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv5.jpg' onClick={() => handleClick("1")} /></NavLink>
            <span className='badge bg-info template-badge'>Modern</span><br></br><br></br>
            <p className='home-p'>This CV template gives you clearly defined sections while keeping an understated black and white color scheme.</p>
          </div>
          <div className="col">
            <NavLink to='/information'><img className='cv-templates' src="https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv1.jpg" onClick={() => handleClick("2")} /></NavLink>
            <span className='badge bg-secondary template-badge'>Contemporary</span><br></br><br></br>
            <p className='home-p'>With slim but bold lines and a classic single column design, the Contemporary CV template has presence and impact sure to leave an impression.</p>
          </div>
          <div className="col">
            <NavLink to='/information'><img className='cv-templates' src="	https://resumebuild.com/wp-content/uploads/2018/12/carousel_cv19.jpg" onClick={() => handleClick("3")} /></NavLink>
            <span className='badge bg-danger template-badge'>Creative</span><br></br><br></br>
            <p className='home-p'>For a balance between lighthearted creative and serious profesional, the Creative CV template offers visualizations and a functional two column design.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Templates