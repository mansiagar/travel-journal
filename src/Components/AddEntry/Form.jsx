import React, { useState, useEffect } from "react";
import "./Form.css";
import { Form, FormGroup, Label, Input, Button } from "reactstrap";
import Navigation from "../../NavBar/Navbar";
import { useNavigate } from "react-router-dom";
const AddForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    img: "",
  });
  const navigate = useNavigate();
  useEffect(() => {
    if (initialData) {
      setFormData({
        title: initialData.title || "",
        date: initialData.date || "",
        img: initialData.img || "",
      });
    }
  }, [initialData]);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
    setFormData({ title: "", date: "", img: "" });
    navigate("/src/Components/ViewEntry/ViewEntry.jsx");
  };
  const handleFileChange = (e) => {
    setFormData({ ...formData, img: e.target.files[0] });
  };
  return (
    <div>
      <Navigation />
      <div className="Container">
        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="title">Title</Label>
            <Input
              type="text"
              name="title"
              id="title"
              placeholder="Enter Title"
              value={formData.title}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="date">Date</Label>
            <Input
              type="date"
              name="date"
              id="date"
              value={formData.date}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Label for="img">Image</Label>
            <Input
              type="file"
              name="img"
              id="img"
              accept="image/*"
              onChange={handleFileChange}
            />
          </FormGroup>
          <Button type="submit" color="primary">
            {initialData ? "Update" : "Save"}
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default AddForm;
