import { Link } from "react-router-dom"

export default function Profil(){
    console.log("EXECUTION DE LA PAGE PROFIL");
    return (
        <>

            <h1>Voici ma page profil</h1>

            <Link to="/">Aller vers Home</Link> <br />
            <Link to="/services">Aller vers services</Link>
        </>
    )
}