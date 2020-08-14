import React, { useState } from "react";
import styled from "styled-components";
import { theme } from "@src/styles/color";
import TextareaAutosize from "react-textarea-autosize";

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
  const [name, setName] = useState(0);
  const [email, setEmail] = useState(0);
  const [message, setMessage] = useState(0);

  const Button = (props: { disable: boolean }) => {
    if (props.disable) {
      return <DisbaledButton>Send</DisbaledButton>;
    } else {
      return <EnabledButton type="submit">Send</EnabledButton>;
    }
  };

  const onChangeName = (num: number) => setName(num);
  const onChangeEmail = (num: number) => setEmail(num);
  const onChangeMessage = (num: number) => setMessage(num);

  return (
    <Form name="contact" method="POST" data-netlify="true">
      <Layout>
        <Input
          placeholder="Plase enter your name"
          maxLength={30}
          onChange={(e) => onChangeName(e.target.value.length)}
        />
      </Layout>
      <Layout>
        <Input
          placeholder="your.email.address@gmail.com"
          type="email"
          onChange={(e) => onChangeEmail(e.target.value.length)}
          maxLength={256}
        />
      </Layout>
      <Layout>
        <TextArea
          placeholder="Please enter your message. English or Japanese"
          minRows={20}
          maxRows={100}
          onChange={(e: any) => onChangeMessage(e.target.value.length)}
        />
      </Layout>
      <Layout>
        <Button disable={!name || !email || !message} />
      </Layout>
    </Form>
  );
};
