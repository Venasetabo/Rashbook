import { Link } from "react-router-dom";
import MainLayout from "../components/shared/main-layout";

export default function About() {
  console.log("EXECUTION DE LA PAGE ABOUT");
  return (
    <MainLayout>
      <h1>Voici ma page à propos</h1>
      <Link to="/">Aller vers Home</Link> <br />
      <Link to="/profile">Aller vers Profile</Link>
    </MainLayout>
  );
}
