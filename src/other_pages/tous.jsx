import { useState } from "react";
import Contact from "../selectionApp/contact";
import Fetch from "../selectionApp/fetch";
import LandingPage from "../selectionApp/landingPage";
import Navbar from "../selectionApp/navbar";
import Footer from "../selectionApp/footer";
import Searchbox from "../selectionApp/searchBox";

export default function Tous() {
  return (
    <>
      <Searchbox placeholder={"tous"} />
      <LandingPage
        img={"/public/profil1.jpg"}
        title={
          "I'M WEB DESIGNER, I DO CREATE LAYERS IN DIFFERENT WAY  BY USING MODERN TOOLS SUCH AS ADOBE PHOTOSHOP, CANVA, FIGMA AND OTHERS..."
        }
        sub_title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at dolore cum quis, cupiditate esse laudantium accusamus sunt pariatur hic recusandae culpa eos eveniet voluptas temporibus ratione sed beatae ipsam. Repellat neque fugiat velit? Placeat odit voluptatibus ullam repudiandae praesentium accusamus nihil dolore a suscipit consequatur sunt quaerat, iure expedita assumenda asperiores neque veritatis qui perferendis ex? Eius, accusamus at!Cupiditate reprehenderit porro saepe dignissimos. Quod reiciendis nostrum assumenda excepturi. Facere molestias necessitatibus quas veniam tempore? Inventore saepe id accusantium dolor assumenda ipsum, blanditiis similique nostrum dolorem dolorum tempore nesciunt.Voluptatem sunt, porro ullam at voluptates voluptatum, veniam exercitationem molestias perspiciatis temporibus amet soluta reprehenderit corrupti saepe id quod velit! A at, corrupti vitae totam molestias excepturi eveniet non facilis.ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat quis aperiam neque ullam porro sint ea cum iste praesentium rem mollitia quibusdam delectus necessitatibus, error impedit repellat numquam cupiLorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci et nulla omnis porro aspernatur, incidunt reprehenderit reiciendis perspiciatis consequatur provident sit sed laboriosam odit quisquam labore ullam. Voluptatem, maxime."
        }
        postedAt={"11/01/2023"}
        postedBy={"Telusko"}
      />

      <LandingPage
        img={"/public/profil2.png"}
        title={
          "JE SUIS AMISSA 'YANGYA LA FEMME DE CHRISPIN MKANGYA MNYACI DEPUIS 2025 ON A DEJA UN ENFANT QUI EST APPELE TATAIANA, NOTRE BEBE QUE DIEU NOUS A BENIS ET NOUS A OFFERT UN CADEAU POUR NOTRE AMOUR"
        }
        sub_title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at dolore cum quis, cupiditate esse laudantium accusamus sunt pariatur hic recusandae culpa eos eveniet voluptas temporibus ratione sed beatae ipsam. Repellat neque fugiat velit? Placeat odit voluptatibus ullam repudiandae praesentium accusamus nihil dolore a suscipit consequatur sunt quaerat, iure expedita assumenda asperiores neque veritatis qui perferendis ex? Eius, accusamus at!Cupiditate reprehenderit porro saepe dignissimos. Quod reiciendis nostrum assumenda excepturi. Facere molestias necessitatibus quas veniam tempore? Inventore saepe id accusantium dolor assumenda ipsum, blanditiis similique nostrum dolorem dolorum tempore nesciunt.Voluptatem sunt, porro ullam at voluptates voluptatum, veniam exercitationem molestias perspiciatis temporibus amet soluta reprehenderit corrupti saepe id quod velit! A at, corrupti vitae totam molestias excepturi eveniet non facilis.ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat quis aperiam neque ullam porro sint ea cum iste praesentium rem mollitia quibusdam delectus necessitatibus, error impedit repellat numquam cupiLorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci et nulla omnis porro aspernatur, incidunt reprehenderit reiciendis perspiciatis consequatur provident sit sed laboriosam odit quisquam labore ullam. Voluptatem, maxime"
        }
        postedAt={"09/10/2025"}
        postedBy={"Amissa"}
      />
      <LandingPage
        img={"/public/profil3.jpg"}
        title={
          "KEYSON MY NAME, I'M WEB DEVELOPPER WITH TEN YEARS OF EXPERIENCE AT PAWEB-C COMPANY, I WAS HIRED IN 2024 AT THIS COMPANY FOR TECHNOLOGY ACTIVITY WHERE I HAVE FOUND Rashmond Alfred and Chrispin Mk."
        }
        sub_title={
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi at dolore cum quis, cupiditate esse laudantium accusamus sunt pariatur hic recusandae culpa eos eveniet voluptas temporibus ratione sed beatae ipsam. Repellat neque fugiat velit? Placeat odit voluptatibus ullam repudiandae praesentium accusamus nihil dolore a suscipit consequatur sunt quaerat, iure expedita assumenda asperiores neque veritatis qui perferendis ex? Eius, accusamus at!Cupiditate reprehenderit porro saepe dignissimos. Quod reiciendis nostrum assumenda excepturi. Facere molestias necessitatibus quas veniam tempore? Inventore saepe id accusantium dolor assumenda ipsum, blanditiis similique nostrum dolorem dolorum tempore nesciunt.Voluptatem sunt, porro ullam at voluptates voluptatum, veniam exercitationem molestias perspiciatis temporibus amet soluta reprehenderit corrupti saepe id quod velit! A at, corrupti vitae totam molestias excepturi eveniet non facilis.ipsum dolor sit amet consectetur adipisicing elit. Dolorum quaerat quis aperiam neque ullam porro sint ea cum iste praesentium rem mollitia quibusdam delectus necessitatibus, error impedit repellat numquam cupiLorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet adipisci et nulla omnis porro aspernatur, incidunt reprehenderit reiciendis perspiciatis consequatur provident sit sed laboriosam odit quisquam labore ullam. Voluptatem, maxime"
        }
        postedAt={"01/02/2026"}
        postedBy={"Kyeson"}
      />
    </>
  );
}
