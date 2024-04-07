import './App.css';
import LoadingBar from 'react-top-loading-bar'
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Carosuel from './components/Carosuel';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
export default function App () {
   const apikey='fcd4d243d74540a3a484645d5e252d77'
   const [progress,setProgress]=useState(0)

    return (
      <div>
        <Router>
        <LoadingBar
        color='#f11946'
        progress={progress}
        />
          <Navbar />
          <Carosuel/>
          <Routes>
          <Route exact path="/" element={<News setProgress={setProgress}  apikey={apikey}   key='general' pageSize={6} country='us' category='general'/>}></Route>
            <Route exact path="/general" element={<News setProgress={setProgress}  apikey={apikey}   key='general' pageSize={6} country='us' category='general'/>}></Route>
            <Route exact path="/sports" element={<News setProgress={setProgress}  apikey={apikey}   key='sports' pageSize={6} country='us' category='sports'/>}></Route>
            <Route exact path="/technology" element={<News setProgress={setProgress}  apikey={apikey}   key='technology' pageSize={6} country='us' category='technology'/>}></Route>
            <Route exact path="/science" element={<News setProgress={setProgress}  apikey={apikey}   key='science' pageSize={6} country='us' category='science'/>}></Route>
            <Route exact path="/health" element={<News setProgress={setProgress}  apikey={apikey}   key='health' pageSize={6} country='us' category='health'/>}></Route>
            <Route exact path="/entertaiment" element={<News setProgress={setProgress}  apikey={apikey}   key='entertaiment' pageSize={6} country='us' category='entertaiment'/>}></Route>
            <Route exact path="/business" element={<News setProgress={setProgress}  apikey={apikey}   key='business' pageSize={6} country='us' category='business'/>}></Route>
          </Routes>
        </Router>
      </div>
    )
  
}
