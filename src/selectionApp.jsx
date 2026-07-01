import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Page1 from "./other_pages/tous";
import MainLayout from "./other_pages/main-layout";
import Nouveaux from "./other_pages/nouveaux";
import Tous from "./other_pages/tous";
import Recents from "./other_pages/recents";
import Ancients from "./other_pages/ancients";
import Loading from "./selectionApp/loading";

export default function SelectionApp() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Tous />} />
        <Route path="nouveaux" element={<Nouveaux />} />
        <Route path="recents" element={<Recents />} />
        <Route path="ancients" element={<Ancients />} />
      </Route>
    </Routes>
  );
}