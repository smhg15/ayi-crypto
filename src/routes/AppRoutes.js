import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../views/Home'
import CoinsTable from '../views/CoinsTable'
import SingleCryptoProfileContainer from "../container/SingleCryptoProfileContainer";
import News from '../views/News'
import About from '../views/About'
import Header from "../sections/Header";
import NavBar from "../sections/NavBar";
import Footer from "../sections/Footer";
import NotFoundPage from '../views/NotFoundPage';

function AppRoutes() {
  return (
      <>
    <Header/>
    <Router>
    <NavBar/>
			<Routes> {/* <Switch> */}
                <Route index element={<Home/>} />
				<Route path='/coinsTable' element={<CoinsTable/>}/>			
                <Route path='/coinsProfile/:position' element={<SingleCryptoProfileContainer/>}/>			
                <Route path='/news' element={<News/>}/>			
                <Route path='/about' element={<About/>}/>
                <Route path="*" element={<NotFoundPage/>}/>		
			</Routes>
	</Router>
{/*     <Footer/> */}
    </>
  );
}

export default AppRoutes;
