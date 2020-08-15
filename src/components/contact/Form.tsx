import React from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import TextareaAutosize from "react-textarea-autosize";
import { navigate } from "gatsby";

const Form = styled.form`
  width: 100%;
`;

const Layout = styled.div`
  position: relative;
  margin-right: auto;
  margin-left: auto;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 20px;
`;

const Input = styled.input`
  font-weight: 300;
  width: 90%;
  border: 1px solid ${theme.colors.graySuperLight};
  border-radius: 2px;
  padding: 8px;
`;

const TextArea = styled(TextareaAutosize)`
  font-weight: 300;
  width: 90%;
  border: 1px solid ${theme.colors.graySuperLight};
  border-radius: 2px;
  padding: 8px;
  height: 500px;
  resize: vertical;
`;

const DisbaledButton = styled.div`
  display: inline-block;
  text-align: center;
  font-weight: 300;
  width: 90%;
  border: 1px solid ${theme.colors.graySuperLight};
  background-color: ${theme.colors.graySuperLight};
  border-radius: 5px;
  padding: 8px;
  color: ${theme.colors.whiteSuperLight};
`;

const EnabledButton = styled.button`
  width: 90%;
  border: 1px solid ${theme.colors.blueLight};
  background-color: ${theme.colors.blueLight};
  border-radius: 5px;
  padding: 8px;
  color: ${theme.colors.graySuperLight};
`;

function encode(data: any) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const Button = (props: { state: any }) => {
  if (
    !props.state["name"] ||
    !props.state["email"] ||
    !props.state["message"]
  ) {
    return <DisbaledButton>Send</DisbaledButton>;
  } else {
    return <EnabledButton type="submit">Send</EnabledButton>;
  }
};

export default class Contact extends React.Component {
  constructor(props: any) {
    super(props);
    this.state = {};
  }

  handleChange = (e: any) => {
    console.log(this.state);
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e: any) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...this.state,
      }),
    })
      .then(() => navigate("/"))
      .catch((error) => alert(error));
  };

  render() {
    return (
      <Form
        name="contact"
        method="post"
        action="/thanks/"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={this.handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p hidden>
          <label>
            Don’t fill this out:{" "}
            <input name="bot-field" onChange={this.handleChange} />
          </label>
        </p>
        <Layout>
          <Input
            type="text"
            name="name"
            placeholder="Plase enter your name"
            maxLength={30}
            onChange={this.handleChange}
          />
        </Layout>
        <Layout>
          <Input
            name="email"
            placeholder="your.email.address@gmail.com"
            type="email"
            onChange={this.handleChange}
            maxLength={256}
          />
        </Layout>
        <Layout>
          <TextArea
            placeholder="Please enter your message. English or Japanese"
            minRows={20}
            maxRows={100}
            name="message"
            onChange={this.handleChange}
          />
        </Layout>
        <Layout>
          <Button state={this.state} />
        </Layout>
      </Form>
    );
  }
}