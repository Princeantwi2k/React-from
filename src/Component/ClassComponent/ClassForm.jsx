import React, { Component } from "react";
import "./ClassForm.css";

class ClassForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const value = e.target.value;
    const name = e.target.name;

    this.setState({ [name]: value });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("FullName: " + this.state.username);
    console.log("Email: " + this.state.email);
    console.log("Password: " + this.state.password);
  }

  render() {
    return (
      <div>
        <form className="Class-form" onSubmit={this.handleSubmit}>
          <h4>Class Form</h4>
          FullName: <br />
          <input
            className="form_input"
            name="username"
            type="text"
            value={this.state.username}
            onChange={this.handleChange}
            placeholder={this.props.name}
          />
          <br />
          Email: <br />
          <input
            className="form_input"
            name="email"
            type="text"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder={this.props.email}
          />
          <br />
          Password: <br />
          <input
            className="form_input"
            name="password"
            type="password"
            value={this.state.password}
            onChange={this.handleChange}
            placeholder={this.props.password}
          />
          <br />
          <input className="form_button" type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}

export default ClassForm;
