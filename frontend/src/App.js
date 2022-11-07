import {Routes, Route} from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Banner from './components/Banner'
import Content from './components/Content'
import CallToAction from './components/CallToAction'
import Page404 from './components/Page404'
import Information from './Register/1_Information'
import Contact from './Register/8_Contact'
import Cost from './Register/4_Cost'
import Detail from './Register/5_Detail'
import Facility from './Register/2_Facility'
import Image from './Register/6_Image'
import Promotion from './Register/7_Promotion'
import Type from './Register/3_Type'
import Filter from './Filter/filter'

function App() {
  return (
    <div className='page-container'>
      <div className='content-wrap'>
        <Header/>
        <Routes>
            <Route path = "/Banner"element={<Banner />} />
            <Route path = "/Content"element={<Content />} />
            <Route path = "/CallToAction"element={<CallToAction />} />
            <Route path = "/Page404"element={<Page404 />} />
            <Route path = "/information"element={<Information />} />
            <Route path = "/contact"element={<Contact />} />
            <Route path = "/cost"element={<Cost />} />
            <Route path = "/detail"element={<Detail />} />
            <Route path = "/facility"element={<Facility />} />
            <Route path = "/image"element={<Image />} />
            <Route path = "/type"element={<Type />} />
            <Route path = "/promotion"element={<Promotion />} />
            <Route path = "/filter"element={<Filter />} />  
        </Routes>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <Footer/>
    </div>
  );
}

export default App;
