import React, { useState } from "react";
import ViewEntry from "./ViewEntry"; // Adjust the import path as necessary
import Home from "./Home"; // Assuming you have a Home component

const JournalApp = () => {
  const [entries, setEntries] = useState([]);

  const handleEditEntry = (editedEntry) => {
    setEntries(
      entries.map((entry) =>
        entry.id === editedEntry.id ? editedEntry : entry
      )
    );
  };

  const handleDeleteEntry = (entryToDelete) => {
    setEntries(entries.filter((entry) => entry.id !== entryToDelete.id));
  };

  return (
    <div>
      <Home entries={entries} />
      <ViewEntry
        entries={entries}
        onEdit={handleEditEntry}
        onDelete={handleDeleteEntry}
      />
    </div>
  );
};

export default JournalApp;
