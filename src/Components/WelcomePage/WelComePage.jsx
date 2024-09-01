import React from "react";
import Crousal from "./Crousal";
import { Button } from "reactstrap";
import "./WelComepage.css";
import { useNavigate } from "react-router-dom";
const WelComePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };
  return (
    <div>
      <div className="Crousal">
        <Crousal />
      </div>
      <div className="container">
        <Button className="priamry" onClick={handleClick}>
          Create your travel Journal
        </Button>
      </div>
    </div>
  );
};

export default WelComePage;
