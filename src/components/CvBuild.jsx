import React from 'react';
import { CheckOutlined } from '@ant-design/icons';
import Templates from './Templates';
import { NavLink } from 'react-router-dom';

const Home = () => {
  return (
    <div className='home-p'>
      <div className="container">
        <div className="row" >
          <div className="col" style={{ marginTop: 140 }}>
            <b><h1>Make a Job-Getting CV in Minutes With Our Free & Simple CV Builder </h1></b><br /><br />
            <h5><CheckOutlined style={{ fontSize: 30, color: 'red' }} /> Easily Customizable , HR-approved , ready-to-use templates</h5><br></br>
            <h5><CheckOutlined style={{ fontSize: 30, color: 'red' }} /> Step-by-step guidance and expert tips to create a targeted, job-scoring CV</h5><br></br>
            <h5><CheckOutlined style={{ fontSize: 30, color: 'red' }} /> Free industry-specific, pre-written examples you can add with the click of a button</h5><br></br>
            <NavLink to='/choose_template'><button className="btn home-btn" type="submit">Create my CV </button></NavLink>
          </div>
          <div className="col"><img src="https://www.designbolts.com/wp-content/uploads/2018/10/Free-Professional-Resume-Template-in-DOC-PSD-Ai-Format-3.jpg" className='home-img' /> </div>
        </div>
      </div><br /><br /><br />
      <div className="container">
        <div className="row">
          <h3 id='build'>Professional CV Templates that Hiring Managers Love</h3><hr />
          <Templates />
        </div>
      </div>
      <br /><br /><br />
      <div className="container">
        <div className="row">
          <h3 >How Professional CV generator Will Help You Land The Job You Want</h3><hr /><br /><br />
          <div className="col">
            <h4>1. Gain Access to HR-Approved & ATS-Friendly Resume Templates</h4>
            <p>Making a professional resume is a breeze with our HR-approved resume templates. Forget about spending hours formatting your resume—our resume templates will do the heavy lifting for you. Each one is designed not only to exceed hiring managers’ expectations, but also bypass pesky Applicant Tracking Software (ATS) that flags poorly formatted resumes.</p>
          </div>
          <div className="col">
            <img src='https://resumebuild.com/wp-content/uploads/2021/11/screenshot-1.png' className='home-scr' />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src='https://resumebuild.com/wp-content/uploads/2021/11/screenshot-2.png' className='home-scr' />
          </div>
          <div className="col">
            <h4>2. Get the Guidance You Need to Make the Perfect Resume</h4>
            <p>Our easy-to-use online resume builder has been fine-tuned by HR experts to create a resume that lands you the job you want. You’ll find step-by-step guidance throughout the entire builder, expert tips, and dozens of industry-specific job description bullet points to make your resume shine. Thanks to its streamlined design, you’ll be done and dusted in just 15 minutes.</p>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h4>3. Our Resumes Are Easily Customizable and Downloadable</h4>
            <p>Adding a personal touch to your resume couldn’t be simpler with our resume builder. Whether you want to change your resume’s font, text size, header size, or add or delete sections, our resume builder has you covered. Once you’re done, instantly download your brand new resume in MS Word and PDF formats at the click of a button. It’s really that easy!</p>
          </div>
          <div className="col">
            <img src='https://resumebuild.com/wp-content/uploads/2021/11/screenshot-3.png' className='home-scr' />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <img src='https://resumebuild.com/wp-content/uploads/2021/11/screenshot-4.png' className='home-scr' />
          </div>
          <div className="col">
            <h4>4. Discover What Hiring Managers Really Want With Our Resume Samples</h4>
            <p>Do you ever wish you could see what a professional resume in your industry looks like? At Resume Build, we truly believe your successes are ours. That’s why we asked our HR experts to create hundreds of industry-specific resume samples for you to freely view. Go on, take a peek today.</p>
          </div>
        </div>
      </div><br /><br /><br />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card" >
              <img src="https://resumebuild.com/wp-content/uploads/2021/11/icon-resume-examples.svg" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">CV Examples</h5>
                <p className="card-text">Sharpen your resume by taking a look at our thousands of industry-specific resume examples. Made by HR-experts, our resume examples make it crystal clear what your resume should look and sound like. Whatever industry and role you’re applying for, we have relevant resume examples you can turn to for guidance.</p>
                <NavLink to="/cv_examples" className="btn btn-warning">Read more</NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src="	https://resumebuild.com/wp-content/uploads/2021/11/icon-resume-templates.svg" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CV Templates</h5>
                <p className="card-text">Impress hiring managers from the get-go with our expertly made resume templates. Designed in consultation with HR professionals, our stunning resume templates tick all the boxes they’re looking for. Simply choose your favorite, and our resume builder will guide you step-by-step to create the perfect resume. All you need is 15 minutes!</p>
                <NavLink to="/cv_template" className="btn btn-warning">Read more</NavLink>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card" >
              <img src="	https://resumebuild.com/wp-content/uploads/2021/11/icon-resume-resources.svg
" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">CV Generator</h5>
                <p className="card-text">Set yourself up for success by familiarizing yourself with precisely what hiring managers are after. Get the inside scoop on what HR professionals really think with our ever-expanding library of resources for job seekers. Our articles are bursting with expert tips and insights to help you score your dream job, faster.</p>
                <a href='#build' className="btn btn-warning">Read more</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home