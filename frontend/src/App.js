import {Routes, Route} from 'react-router-dom'

import Header from './components/Header'
import Banner from './components/Banner'
import Content from './components/Content'
import CallToAction from './components/CallToAction'
import Page404 from './components/Page404'

import Information from './Register/Information'
import Contact from './Register/Contact'
import Cost from './Register/Cost'
import Detail from './Register/Detail'
import Facility from './Register/Facility'
import Image from './Register/Image'
import Promotion from './Register/Promotion'
import Type from './Register/Type'
import UserSignIn from './Register/UserSignIn'
import UserSignUp from './Register/UserSignUp'

function App() {
  return (
    <div>
        <Header/>
        <Routes>
            <Route path = "/Banner"element={<Banner />} />
            <Route path = "/Content"element={<Content />} />
            <Route path = "/CallToAction"element={<CallToAction />} />
            <Route path = "/Page404"element={<Page404 />} />
            <Route path = "/information"element={<Information />} />
            <Route path = "/sign-in"element={<UserSignIn />} />
            <Route path = "/sign-up"element={<UserSignUp />} />
            <Route path = "/contact"element={<Contact />} />
            <Route path = "/cost"element={<Cost />} />
            <Route path = "/detail"element={<Detail />} />
            <Route path = "/facility"element={<Facility />} />
            <Route path = "/image"element={<Image />} />
            <Route path = "/type"element={<Type />} />
            <Route path = "/promotion"element={<Promotion />} />
            
        </Routes>
    </div>
  );
}

export default App;
