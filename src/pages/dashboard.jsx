import { useState, memo } from "react";
import MainLayout from "../components/shared/main-layout";
import Forums from "../components/all-forums";

 function Dashboard() {
  console.log("EXECUTION DE LA PAGE DASHBOARD");
  return (
    <MainLayout>
      <Forums />
    </MainLayout>
  );
}

export default memo(Dashboard);