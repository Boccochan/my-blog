import React, { useState } from "react";
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

export default () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const Button = (props: { disable: boolean }) => {
    if (props.disable) {
      return <DisbaledButton>Send</DisbaledButton>;
    } else {
      return <EnabledButton type="submit">Send</EnabledButton>;
    }
  };

  const onChangeName = (value: string) => setName(value);
  const onChangeEmail = (value: string) => setEmail(value);
  const onChangeMessage = (value: string) => setMessage(value);

  const encode = (data: any) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        name: name,
        email: email,
        message: message,
      }),
    })
      .then(() => navigate("/"))
      .catch((error: any) => alert(error));
  };

  return (
    <Form
      name="contact"
      method="post"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={handleSubmit}
    >
      <Layout>
        <Input
          placeholder="Plase enter your name"
          maxLength={30}
          onChange={(e) => onChangeName(e.target.value)}
        />
      </Layout>
      <Layout>
        <Input
          placeholder="your.email.address@gmail.com"
          type="email"
          onChange={(e) => onChangeEmail(e.target.value)}
          maxLength={256}
        />
      </Layout>
      <Layout>
        <TextArea
          placeholder="Please enter your message. English or Japanese"
          minRows={20}
          maxRows={100}
          onChange={(e: any) => onChangeMessage(e.target.value)}
        />
      </Layout>
      <Layout>
        <Button disable={!name || !email || !message} />
      </Layout>
    </Form>
  );
};
