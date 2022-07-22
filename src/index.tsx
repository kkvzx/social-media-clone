import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./components/Main";
import FirebaseContext from "./context/firebase";
import { FieldValue, firebase } from "./lib/firebase";
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue } as any}>
    <Main />
  </FirebaseContext.Provider>
);

// client side rendered app: react (cra)
// -> database which is Firebasea
// -> react-loading-skeleton
// -> styledcomponents/tailwind

// folder structure
//src
// ->components,
// ->constants,
// ->context,
// ->helpers,
// ->hooks,
// ->pages,
// -> lib (firebase is going to live in here),
// ->services (firebase function is here)
// styles (talwind's folder (app/tailwind))
