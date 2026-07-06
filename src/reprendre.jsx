import { Route, Routes } from "react-router-dom";
import Hero from "./REPRENDRE/hero";
import NavBar from "./REPRENDRE/navbar";
import Application from "./REPRENDRE/Application";
import Tous from "./REPRENDRE/Links/Tous";
import Ancients from "./REPRENDRE/Links/Ancients";
import Nouveaux from "./REPRENDRE/Links/Nouveaux";
import Rencents from "./REPRENDRE/Links/Recents";
function RepRenDre() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Application />}>
          <Route index element={<Tous />} />
          <Route path="/ancients" element={<Ancients />} />
          <Route path="/nouveaux" element={<Nouveaux />} />
          <Route path="/recents" element={<Rencents />} />
        </Route>
      </Routes>
    </>
  );
}

// md:tablette
// lg:microsoft surface duo 1114
// xl:macbook 1280

export default RepRenDre;
