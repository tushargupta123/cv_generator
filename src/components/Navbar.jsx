import React from 'react';
import { FacebookFilled, GoogleSquareFilled, GithubFilled } from '@ant-design/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <NavLink class="navbar-brand" style={{ marginLeft: 100 }} to="/"> <img src="https://milformatos.com/wp-content/uploads/2016/04/CV-ICON.png" height='40px' width='40px' style={{ marginTop: -15, marginRight: 5 }} /><span className='logo'>Professional CV</span> </NavLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginLeft: 150, marginTop: 8 }}>
              <li class="nav-item">
                <NavLink class="nav-link" aria-current="page" to="/cv_template" style={{ marginRight: 100 }}> <span className="nav-links">CV Templates</span> </NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link" to="/cv_examples" style={{ marginRight: 100 }}> <span className="nav-links">CV examples</span></NavLink>
              </li>
              <li class="nav-item">
                <NavLink class="nav-link " to="/cv_build"> <span className="nav-links">Build CV</span></NavLink>
              </li>
              <li class="nav-item">
                <button type="button" style={{ marginTop: -9 }} class="btn nav-btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Sign up
                </button>
                <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalLabel">Sign up </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                      </div>
                      <div class="modal-body">
                        <FacebookFilled className='signup-icons' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signup with Facebook<br /><br />
                        <GoogleSquareFilled className='signup-icons' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signup with Google<br /><br />
                        <GithubFilled className='signup-icons' />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Signup with Github<br /><br />
                        <hr /><p style={{ marginLeft: 220 }}>OR</p><hr />
                      </div>
                      <form action='/' className='container'>
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><strong>Email : </strong></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="email"
                          name='email'
                        /><br />< br />
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label><strong>Password : </strong></label>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                        <input
                          type="password"
                          name="password"
                        /><br /><br />
                        <div class="modal-footer">
                          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                          <button type="submit" class="btn btn-warning">Sign up</button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar