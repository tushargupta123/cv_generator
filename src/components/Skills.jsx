import React, { useState } from 'react';
import skills from '../images/skills.jpg';
import { NavLink } from 'react-router-dom';
import dustbin from '../images/dustbin.png';

const Skills = () => {

  const [skill, setSkill] = useState([
    { sname: '', soption: '' },
    { sname: '', soption: '' },
    { sname: '', soption: '' },
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...skill];
    values[index][event.target.name] = event.target.value;
    setSkill(values);
  };

  // TO ADD MORE FIELDS WE SIMPLY TAKE PREVIOUS FIELD AND THEN ADD ANOTHER OBJECT TO THAT STATE.
  const handleAdd = () => {
    setSkill([...skill, { sname: '', soption: '' }])
  };

  const handleRemove = (index) => {
    const values = [...skill];
    values.splice(index, 1);
    setSkill(values);
  }

  return (
    <div>
      <div className="container">
        <input type="checkbox" className='checkbox' checked /> Pesonal Info &nbsp;
        <input type="checkbox" className='checkbox' checked /> Experience &nbsp;
        <input type="checkbox" className='checkbox' checked /> Education &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Skills &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Summary &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Review &nbsp;
      </div><hr />
      <div className='container'><br />
        <h3><strong>SKILLS</strong></h3>
        <p>Highlight your top skills.</p>
      </div>
      <div className="container info-input">
        <div className="row">
          <div className="col col-sm-12 col-md-8">
            <form>
              {skill.map((user, index) => (
                <div key={index}>
                  <div className="row" style={{ marginTop: 10 }}>
                    <div className="col col-sm-6 col-md-6">
                      <p>Skill</p>
                      <input type="text" name='sname' value={user.sname} onChange={event => handleChangeInput(index, event)} placeholder='Project Management' />
                    </div>
                    <div className="col col-sm-5 col-md-5">
                      <p>Level</p>
                      <select className="form-select">
                        <option value="1" name='soption' >&#9733; &#9734; &#9734; &#9734; &#9734; - Novice</option>
                        <option value="2" name='soption'>&#9733; &#9733; &#9734; &#9734; &#9734; - Beginner</option>
                        <option value="3" name='soption'>&#9733; &#9733; &#9733; &#9734; &#9734; - Skillful</option>
                        <option value="4" name='soption'>&#9733; &#9733; &#9733; &#9733; &#9734; - Experienced</option>
                        <option value="5" name='soption'>&#9733; &#9733; &#9733; &#9733; &#9733; - Expert</option>
                      </select>
                    </div>
                    <div className="col col-sm-1 col-md-1">
                      <img src={dustbin} className='dustbin' onClick={() => handleRemove(index)} />
                    </div>
                  </div>
                </div>
              ))}
            </form>
          </div>
          <div className="col col-sm-12 col-md-4">
            <img src={skills} className='skill-img' />
          </div>
          <div className="row">
            <div className="col col-sm-12 col-md-4">
              <NavLink to='/information/education'> <button className='btn btn-info back-btn text-white' >Back</button></NavLink>
            </div>
            <div className="col col-sm-12 col-md-4">
              <button className='btn skill-btn' onClick={handleAdd} >+ ADD MORE SKILLS</button>
            </div>
            <div className="col col-sm-12 col-md-4">
              <NavLink to='/information/summary'><button className='btn btn-warning text-white save-btn' ><strong>Save & Next</strong></button></NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills