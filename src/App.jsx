import React, { useEffect, useState } from "react";
import "./App.css";
import TopHeader from "./TopHeader";
import Sidebar from "./Sidebar";
import Content from "./Content";
export const Context = React.createContext();

export default function App() {
  const [contacts, setContacts] = useState([]);
  const [currentUser, setCurrentUser] = useState({
    firstName: "Atakan",
    lastName: "Temizkan",
    favouriteColour: "#b0f000",
    id: "0",
  });

  useEffect(() => {
    fetch("https://boolean-uk-api-server.fly.dev/AtikoSpeed/contact")
      .then((response) => response.json())
      .then(setContacts);
  }, []);

  if (contacts.length > 0) {
    return (
      <>
        <Context.Provider value={[currentUser, contacts]}>
          <TopHeader />
          <Sidebar />
          <Content />
        </Context.Provider>
      </>
    );
  }
}
