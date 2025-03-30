import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import styled from "styled-components";
import { useLoginApi } from "../../api/useLoginApi";
import { authService } from "../../services/auth.service";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type FormValues = {
  email: string;
  password: string;
};

export const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");

  const loginFn = useLoginApi();

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const handleLogin = async (values: FormValues) => {
    const result = await loginFn.mutateAsync({
      email: values.email,
      password: values.password,
    });

    if (!result) {
      return;
    }

    authService.saveTokens(result);
    navigate({
      to: "/",
    });
  };

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
          errorMassage={errors.email}
        />
        {errors.email && <Error>{errors.email.message}</Error>}
        <Input
          {...register("password", { required: "Password is required" })}
          placeholder="password"
          type="password"
          errorMassage={errors.password}
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
  errorMassage?: FieldError;
}>`
  width: 80%;
  height: 30px;
  border: ${({ errorMassage: error }) =>
    error ? "2px solid red" : "1px solid black"};
  border-radius: 5px;
  margin-top: 10px;
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
