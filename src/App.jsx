import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route, HashRouter } from "react-router-dom";
import WelComePage from "./Components/WelcomePage/WelComePage";
import HomePage from "./Components/HomePage/HomePage";
//import AddEntry from "./Components/AddEntry/AddEntry";
import ViewEntry from "./Components/ViewEntry/ViewEntry";
import AddForm from "./Components/AddEntry/Form";
function App() {
  // const [entry, setEntry] = useState([]);

  // const handleFormSubmit = (formData) => {
  //   setEntry([...entry, formData]);
  // };

  const [entries, setEntries] = useState([]);
  const [currentEntry, setCurrentEntry] = useState(null);

  const handleFormSubmit = (formData) => {
    if (currentEntry) {
      setEntries(
        entries.map((entry) =>
          entry.id === currentEntry.id ? { ...entry, ...formData } : entry
        )
      );
    } else {
      setEntries([...entries, { ...formData, id: Date.now() }]);
    }
    setCurrentEntry(null);
  };

  const handleEdit = (entry) => {
    console.log("Editing entry:", entry); // entry show in console
    setCurrentEntry(entry);
  };

  const handleDelete = (entryToDelete) => {
    setEntries(entries.filter((entry) => entry.id !== entryToDelete.id));
  };

  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<WelComePage />} />
        <Route
          path="/src/Components/HomePage/HomePage.jsx"
          element={<HomePage entries={entries} />}
        />
        {/* <Route
          path="/src/Components/AddEntry/AddEntry.jsx"
          element={<AddEntry />}
        /> */}

        <Route
          path="/src/Components/AddEntry/Form.jsx"
          element={
            <AddForm onSubmit={handleFormSubmit} initialData={currentEntry} />
          }
        />
        <Route
          path="/src/Components/ViewEntry/ViewEntry.jsx"
          element={
            <ViewEntry
              entries={entries}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </HashRouter>
  );
}

export default App;
