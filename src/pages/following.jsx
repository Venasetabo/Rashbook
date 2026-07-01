import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import MainLayout from "../components/shared/main-layout";

export default function Following() {
  console.log("EXECUTION DE LA PAGE FOLLOWING");
  return (
    <MainLayout>
      <h1>Following Page</h1>
    </MainLayout>
  );
}
