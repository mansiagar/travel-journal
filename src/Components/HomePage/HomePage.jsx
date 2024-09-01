import React from "react";
import Navigation from "../../NavBar/Navbar";
import "./HomePage.css";
import { Card, CardBody, CardTitle, CardSubtitle } from "reactstrap";
const Home = ({ entries }) => {
  return (
    <div>
      <Navigation />
      <div className="card-container">
        {entries && entries.length > 0 ? (
          entries.map((entry) => (
            <div key={entry.id}>
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
                </CardBody>
              </Card>

              {/* Render other entry details */}
            </div>
          ))
        ) : (
          <p>No entries available.</p>
        )}
      </div>
    </div>
  );
};

export default Home;
