import React from "react";
import { AppNavBar } from "../../components/Navbar/AppNavBar";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { HomePage } from "../../pages/Home/HomePage";
import { About } from "../../pages/About/About";
import { ErrorPage } from "../../pages/Notfound/ErrorPage";
import { Services } from "../../pages/Services/Services";
import { ProjectRef } from "../../pages/ProjectReference/ProjectRef";
import { REEF } from "../../pages/REEF/REEF";
import { News } from "../../pages/News/News";
import { Careers } from "../../pages/Careers/Careers";
import { Contact } from "../../pages/Contact/Contact";

const AppRouter = () => {

  return (
    <>
    
    <Router>
    <AppNavBar />
      <Routes>
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} >
          <Route path="solarEnergy/EPC" element={<Services />} />
          <Route path="solarEnergy/O&M" element={<Services />} />
          <Route path="solarEnergy/Pullout" element={<Services />} />
        </Route>
        <Route path="projectReference" element={<ProjectRef />} />
        <Route path="REEF" element={<REEF />} />
        <Route path="News" element={<News />} />
        <Route path="Careers" element={<Careers/>} />
        <Route path="ContactUs" element={<Contact />} />

        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<ErrorPage />}/>
      </Routes>
    </Router>
    </>
  );
};
export { AppRouter };
