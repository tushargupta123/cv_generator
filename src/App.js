import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import CvTemplate from './components/CvTemplate';
import './App.css';
import Footer from './components/Footer';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CvExamples from './components/CvExamples';
import CvBuild from './components/CvBuild';
import Templates from './components/Templates';
import Information from './components/Information';
import PersonalInfo from './components/PersonalInfo';
import Education from './components/Education';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Summary from './components/Summary';
import Review1 from './components/Review1';

function App() {

  const [data, setData] = useState();
  const [data2, setData2] = useState();
  const [data3, setData3] = useState();
  const [data4, setData4] = useState();
  const [changes, setChanges] = useState();

  const inputData = (e) => {
    setData(e);
  }
  const inputData2 = (e2) => {
    setData2(e2);
  }
  const inputData3 = (e3) => {
    setData3(e3);
  }
  const inputData4 = (e4) => {
    setData4(e4);
  }
  const change = (ch) => {
    setChanges(ch);
  }

  return (
    <div className="App">
      <Router >
        <Navbar />
        <Routes>
          <Route exact path='/' element={<Home />} ></Route>
          <Route exact path='/cv_template' element={<CvTemplate />} ></Route>
          <Route exact path='/cv_examples' element={<CvExamples />} ></Route>
          <Route exact path='/cv_build' element={<CvBuild />} ></Route>
          <Route exact path='/choose_template' element={<Templates change={change} />}></Route>
          <Route exact path='/information' element={<Information />}></Route>
          <Route exact path='/information/personal_info' element={<PersonalInfo inputData={inputData} />}></Route>
          <Route exact path='/information/education' element={<Education inputData3={inputData3} />}></Route>
          <Route exact path='/information/experience' element={<Experience inputData2={inputData2} />}></Route>
          <Route exact path='/information/review' element={<Review1 data={data} data2={data2} data3={data3} data4={data4} changes={changes} />}></Route>
          <Route exact path='/information/skills' element={<Skills />}></Route>
          <Route exact path='/information/summary' element={<Summary inputData4={inputData4} />}></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
