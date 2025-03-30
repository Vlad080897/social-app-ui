import { useState } from "react";
import styled from "styled-components";

export const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setType((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <Wrapper>
      <AuthForm>
        <Title>{type}</Title>
        <Input placeholder="email" type="email" />
        <Input placeholder="password" type="password" />
        {type === "login" ? (
          <Button onClick={handleLogin}>Login</Button>
        ) : (
          <Button onClick={handleRegister}>Register</Button>
        )}

        {type === "login"
          ? "Do not have an account?"
          : "Already have an account?"}

        <Button onClick={handleToggle}>
          {type === "login" ? "Register" : "Login"}
        </Button>
      </AuthForm>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AuthForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;
  height: 300px;
  background-color: red;
`;

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

const Input = styled.input`
  width: 80%;
  height: 30px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 10px;
`;
