import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import EditPaste from "./pages/EditPaste";

const App = () => {
  const [pastes, setPastes] = useState([]);

  const addPaste = (paste) => {
    setPastes([paste, ...pastes]);
  };

  const deletePaste = (id) => {
    setPastes(pastes.filter((p) => p.id !== id));
  };

  const updatePaste = (id, updated) => {
    setPastes(
      pastes.map((p) => (p.id === id ? { ...p, ...updated } : p))
    );
  };

  return (
    <>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              pastes={pastes}
              addPaste={addPaste}
              deletePaste={deletePaste}
            />
          }
        />
        <Route
          path="/edit/:id"
          element={
            <EditPaste pastes={pastes} updatePaste={updatePaste} />
          }
        />
      </Routes>
    </>
  );
};

export default App;
