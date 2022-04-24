import React, { useState } from 'react';
import summary from '../images/summary.jpg';
import { NavLink } from 'react-router-dom';

const Summary = ({ inputData4 }) => {

  const t1 = ' Seasoned investment professional offering 20+ years of expertise in the areas of investment strategy and asset allocation.  Success managing billions of dollars across multiple ...';
  const t2 = 'Financial Analyst equipped with the tools and knowledge needed to advance into senior-level roles within innovative, growth-driven companies.  Expert at developing and tracking budget expenses and strong ability to analyze and organize large data sets.  Deep technical knowledge with proficient use of QuickBooks and Excel programs.';
  const t3 = 'Recent graduate outfitted with a Bachelor of Science in Accounting and 2 years of internship experience as a Jr. Accountant.  In-depth knowledge and use of accounting software to include Intuit, Zoho Books, FreshBooks, and Xero.  Extreme attention to detail and ability to multitask within fast-paced environments. ';
  const t4 = ' Customer-oriented licensed Massage Therapist specializing in deep tissue, Swedish, sports massage, hot stone therapy, and reflexology.  Equipped with personal massage table, oils, linens, and music, dedicated to providing high-levels of service at every encounter.  Willing to work as a contractor or full-time therapist within a hotel spa.';
  const t5 = ' Talented, progressive, licensed Stylist with over 20 years of experience working in high-end salons within Beverly Hills.  Expert in women’s cuts, color, and style including up do’s, highlights, and treatments.  Additional experience providing beauty consultations, makeovers, and wardrobe styling.';
  const t6 = ' Sales and marketing guru with in-depth knowledge and experience working as a beauty brand ambassador for select MLS (Multi-Level Sales) platforms.  Independent representative responsible for generating leads, conducting follow-ups, hosting sales events and parties, and recruiting and training ambassadors.  Outgoing, enthusiastic professional with outstanding communication skills and strong ability to identify, develop, and cultivate strategic relationships.  Motivated and eager to utilize skills gained through experience to join a reputable, growth-oriented cosmetics company. ';
  const t7 = 'Visionary, results-driven marketing manager with over 10 years of experience driving business and revenue growth through the development and execution of strategic campaigns specifically for wellness retreats and spas.  Proficient in digital marketing, advertising, website development, brand strategy, and media campaigns and promotions. ';

  let id = '';

  const [user, setUser] = useState({
    summary: "",
  });
  const [text, addText] = useState([]);

  let jtext = '';
  const handleClick = (list) => {
    addText(text.concat(list));
    jtext = text.toString();
    text.map((items) => {
      id += items;
      setUser({ summary: id });
    })
  }

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
  }

  const handleSaveClick = () => {
    inputData4(user);
  }

  return (
    <div className='information-p'>
      <div className="container">
        <input type="checkbox" className='checkbox' checked /> Pesonal Info &nbsp;
        <input type="checkbox" className='checkbox' checked /> Experience &nbsp;
        <input type="checkbox" className='checkbox' checked /> Education &nbsp;
        <input type="checkbox" className='checkbox' checked /> Skills &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Summary &nbsp;
        <input type="checkbox" className='checkbox' disabled /> Review &nbsp;
      </div><hr />
      <div className='container'><br />
        <h3>PROFESSIONAL <strong>SUMMARY</strong></h3>
        <p>Write a short summary telling more about yourself, your strengths and experience. Feel free to use our pre-written examples.</p>
      </div>
      <div className="container info-input">
        <div className="row" >
          <div className="col col-sm-12 col-md-4">
            <p>Summary</p>
            <textarea rows={14} cols={47} className='text-area' name='summary' onChange={handleInputs} value={user.summary} placeholder='Write a short summary about yourself, your experience, skills and achievements. You can add and customize tailored, pre-written examples from the column on the right by clicking on them. Misspelled words will be automatically underlined as you write.' required></textarea>
          </div>
          <div className="col col-sm-12 col-md-4">
            <div className="row career" >
              <div className="col col-sm-12 col-md-6" style={{ paddingTop: 8, paddingLeft: 50 }}>
                <p>Career field</p>
              </div>
              <div className="col col-sm-12 col-md-6" style={{ marginLeft: -50 }}>
                <select className='form-select'>
                  <option value="13">Choose</option>
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
            </div>
            <div className="row relevant">
              <div className="col">
                <p>Choose relevant pre-written summary points.</p>
              </div>
            </div>
            <div className="row career-3">
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
          <div className="col col-sm-12 col-md-4">
            <img src={summary} className='sum-img' />
          </div>
        </div>
        <div className="row">
          <div className="col col-sm-12 col-md-8">
            <NavLink to='/information/skills'> <button className='btn btn-info back-btn text-white' >Back</button></NavLink>
          </div>
          <div className="col col-sm-12 col-md-4">
            <NavLink to='/information/review'><button className='btn btn-warning text-white save-btn' onClick={handleSaveClick}><strong>Save & Next</strong></button></NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Summary