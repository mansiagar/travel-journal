import React from "react";
import Navigation from "../../NavBar/Navbar";
import "./ViewEntry.css";
import { Card, CardBody, CardTitle, CardSubtitle, Button } from "reactstrap";

const ViewEntry = ({ entries = [], onEdit, onDelete }) => {
  return (
    <div>
      <Navigation />
      <div className="card-container">
        {entries.length > 0 ? (
          entries.map((entry) => (
            <Card key={entry.id} style={{ width: "18rem", margin: "40px" }}>
              {entry.img && (
                <img
                  style={{ width: "17.9rem", height: "15rem" }}
                  src={URL.createObjectURL(entry.img)}
                  alt="img"
                />
              )}
              <CardBody>
                <CardTitle tag="h5">Title: {entry.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  Date: {entry.date}
                </CardSubtitle>

                <Button color="primary" onClick={() => onEdit(entry)}>
                  Edit
                </Button>
                <Button color="danger" onClick={() => onDelete(entry)}>
                  Delete
                </Button>
              </CardBody>
            </Card>
          ))
        ) : (
          <p>No entries available.</p>
        )}
      </div>
    </div>
  );
};

export default ViewEntry;
