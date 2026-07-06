import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
// import App from "./App.jsx";
// import "./i18n.js";
// import SelectionApp from "./selectionApp.jsx";
// import Newpost from "./selectionApp/addNewPost.jsx";

// import { UserProvider } from "./hooks/use-context.jsx";
import RepRenDre from "./reprendre.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
        <RepRenDre />
    </BrowserRouter>
  </StrictMode>,
);
