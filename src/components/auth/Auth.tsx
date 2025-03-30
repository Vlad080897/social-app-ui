import { useState } from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type FormValues = {
  email: string;
  password: string;
};

export const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleLogin = () => {};

  const handleRegister = () => {};

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setType((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <Wrapper>
      <AuthForm>
        <Title>{type}</Title>
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address",
            },
          })}
          placeholder="email"
          type="email"
          error={!!errors.email}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Input
          {...register("password", { required: "Password is required" })}
          placeholder="password"
          type="password"
          error={!!errors.password}
        />
        {errors.password && <Error>{errors.password.message}</Error>}
        {type === "login" ? (
          <Button onClick={handleSubmit(handleLogin)}>Login</Button>
        ) : (
          <Button onClick={handleSubmit(handleRegister)}>Register</Button>
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
`;

const Title = styled.h1`
  text-align: center;
  text-transform: capitalize;
`;

const Input = styled.input<{
  error: boolean;
}>`
  width: 80%;
  height: 30px;
  border: ${({ error }) => (error ? "2px solid red" : "1px solid black")};
  border-radius: 5px;
`;

const Button = styled.button`
  width: 100px;
  height: 30px;
  margin-top: 10px;
`;

const Error = styled.span`
  width: 80%;
  color: red;
`;
