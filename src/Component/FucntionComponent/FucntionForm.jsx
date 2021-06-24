import React, { useState } from "react";
import "./Fucntion.css";

const FunctionForm = (props) => {
  const [form, setForm] = useState({
    username: "",
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form.username);
    console.log(form.email);
    console.log(form.password);
  };

  return (
    <div className="form">
      <h4>Funtion Form</h4>
      <form onSubmit={handleSubmit}>
        FullName <br />
        <input
          className="form__input"
          type="text"
          name="username"
          value={form.username}
          onChange={handleChange}
          placeholder={props.name}
        />
        <br />
        Email <br />
        <input
          className="form__input"
          type="text"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder={props.email}
        />
        <br />
        Password <br />
        <input
          className="form__input"
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder={props.password}
        />
        <br />
        <input className="form__button" type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default FunctionForm;
