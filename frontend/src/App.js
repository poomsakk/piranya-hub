import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import CallToAction from "./components/CallToAction";
import Page404 from "./components/Page404";
import MainPage from "./pages/MainPage/MainPage.jsx";
import { useLocation } from "react-router-dom";
import FilterPage from "./pages/filterPage/FilterPage";
import Total from './Register/total'
import ListPage from "./pages/ListPage/ListPage";
import Filter from './Filter/filter'
import LodgeInfo from './components/LodgeInfo'
import UserSignIn from "./Register/UserSignIn"
import UserSignUp from "./Register/UserSignUp"
import Dashboard from './dashboard/Dashboard'
import Edit from './dashboard/Edit';
import AboutUs from './devTeam/AboutUs'
import SearchPage from './pages/filterPage/SearchPage';

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {/* {pathname == "/" ? <Header /> : <Header />} */}
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/FilterPage" element={<FilterPage />} />
        <Route path="/Lodges" element={<ListPage />} />
        <Route path="/Lodges/:lodgeId" element={<LodgeInfo />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/CallToAction" element={<CallToAction />} />
        <Route path="/total" element={<Total />} />
        <Route path="/filter" element={<Filter />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signup" element={<UserSignUp></UserSignUp>} />
        <Route path="/signin" element={<UserSignIn></UserSignIn>} />
        <Route path="*" element={<Page404 />} />
        <Route path="/edit/:lodgeId" element={<Edit/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path='/search' element={<SearchPage></SearchPage>}></Route>
      </Routes>
    </div>
  );
}

export default App;
