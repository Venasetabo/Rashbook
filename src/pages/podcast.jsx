import { Link } from "react-router-dom";
import MainLayout from "../components/shared/main-layout";

export default function Podcast() {
  console.log("EXECUTION DE LA PAGE PODCAST");
  return (
    <MainLayout>
      <h1>Voici ma page de Podcast</h1>
      <Link to="/services">Aller vers services</Link> <br />
      <Link to="/profile">Aller vers Profil</Link>
    </MainLayout>
  );
}
