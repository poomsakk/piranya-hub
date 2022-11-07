import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
// import Footer from './components/Footer'
import Banner from './components/Banner'
import Content from './components/Content'
import CallToAction from './components/CallToAction'
import Page404 from './components/Page404'
import Total from './Register/total'
import Filter from './Filter/filter'
import UserSignIn from "./Register/UserSignIn"
import UserSignUp from "./Register/UserSignUp"

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/Banner" element={<Banner />} />
        <Route path="/" element={<Content />} />
        <Route path="/CallToAction" element={<CallToAction />} />
        <Route path="/Page404" element={<Page404 />} />
        <Route path = "/total"element={<Total />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/signup" element={<UserSignUp></UserSignUp>} />
        <Route path="/signin" element={<UserSignIn></UserSignIn>} />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
