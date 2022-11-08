import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Banner from "./components/Banner";
import Content from "./components/Content";
import CallToAction from "./components/CallToAction";
import Page404 from "./components/Page404";
import Information from "./Register/1_Information";
import Contact from "./Register/8_Contact";
import Cost from "./Register/4_Cost";
import Detail from "./Register/5_Detail";
import Facility from "./Register/2_Facility";
import Image from "./Register/6_Image";
import Promotion from "./Register/7_Promotion";
import Type from "./Register/3_Type";
import MainPage from "./pages/MainPage/MainPage.jsx";
import { useLocation } from "react-router-dom";
import FilterPage from "./pages/filterPage/FilterPage";
import ListPage from "./pages/ListPage/ListPage";
import LodgeInfo from './components/LodgeInfo'

function App() {
  const { pathname } = useLocation();

  return (
    <div className="App">
      {/* {pathname == "/" ? <Header /> : <Header />} */}
      {pathname !== "/FilterPage" && <Header />}
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/FilterPage" element={<FilterPage />} />
        <Route path="/Lodges" element={<ListPage />} />
        <Route path="/Lodges/:lodgeId" element={<LodgeInfo />} />
        <Route path="/Banner" element={<Banner />} />
        <Route path="/Content" element={<Content />} />
        <Route path="/CallToAction" element={<CallToAction />} />
        <Route path="/information" element={<Information />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cost" element={<Cost />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/facility" element={<Facility />} />
        <Route path="/image" element={<Image />} />
        <Route path="/type" element={<Type />} />
        <Route path="/promotion" element={<Promotion />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
}

export default App;
