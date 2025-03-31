import { useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { FieldError, useForm } from "react-hook-form";
import styled from "styled-components";
import { useLoginApi } from "../../api/useLoginApi";
import { authService } from "../../services/auth/auth.service";
import { useSignupApi } from "../../api/useSignupApi";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

type FormValues = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
};

export const Auth = () => {
  const [type, setType] = useState<"login" | "register">("login");

  const navigate = useNavigate();

  const loginFn = useLoginApi();
  const signup = useSignupApi();

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

    if (!result) return;

    authService.saveTokens(result);
    navigate({ to: "/" });
  };

  const handleRegister = async (values: FormValues) => {
    const result = await signup.mutateAsync(values);

    if (!result) return;

    setType("login");
  };

  const handleToggle = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setType((prev) => (prev === "login" ? "register" : "login"));
  };

  return (
    <Wrapper>
      <AuthCard>
        <Title>{type === "login" ? "Welcome Back" : "Create Account"}</Title>
        <Subtitle>
          {type === "login" ? "Sign in to continue" : "Join our community"}
        </Subtitle>

        <FormGroup>
          <Label>Email</Label>
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: EMAIL_REGEX,
                message: "Invalid email address",
              },
            })}
            placeholder="Enter your email"
            type="email"
            errorMassage={errors.email}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </FormGroup>

        <FormGroup>
          <Label>Password</Label>
          <Input
            {...register("password", { required: "Password is required" })}
            placeholder="Enter your password"
            type="password"
            errorMassage={errors.password}
          />
          {errors.password && <Error>{errors.password.message}</Error>}
        </FormGroup>

        {type === "register" && (
          <>
            <FormGroup>
              <Label>Username</Label>
              <Input
                placeholder="Choose a username"
                {...register("username", {
                  required: "Username is required",
                })}
                errorMassage={errors.username}
              />
              {errors.username && <Error>{errors.username.message}</Error>}
            </FormGroup>

            <TwoColumnLayout>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  placeholder="Your first name"
                  {...register("firstName", {
                    required: "First name is required",
                  })}
                  errorMassage={errors.firstName}
                />
                {errors.firstName && <Error>{errors.firstName.message}</Error>}
              </FormGroup>

              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  placeholder="Your last name"
                  {...register("lastName", {
                    required: "Last name is required",
                  })}
                  errorMassage={errors.lastName}
                />
                {errors.lastName && <Error>{errors.lastName.message}</Error>}
              </FormGroup>
            </TwoColumnLayout>
          </>
        )}

        <PrimaryButton
          onClick={handleSubmit(
            type === "login" ? handleLogin : handleRegister
          )}
        >
          {type === "login" ? "Sign In" : "Sign Up"}
        </PrimaryButton>

        <Divider>
          <DividerText>OR</DividerText>
        </Divider>

        <ToggleText>
          {type === "login"
            ? "Don't have an account yet?"
            : "Already have an account?"}
        </ToggleText>
        <SecondaryButton onClick={handleToggle}>
          {type === "login" ? "Create Account" : "Sign In"}
        </SecondaryButton>
      </AuthCard>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f7f9fc;
  padding: 20px;
`;

const AuthCard = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 450px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
  padding: 40px;
  transition: all 0.3s ease;
`;

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: #333;
  margin: 0 0 8px 0;
  text-align: center;
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #666;
  margin: 0 0 30px 0;
  text-align: center;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 100%;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 600;
  color: #444;
  margin-bottom: 8px;
`;

const Input = styled.input<{
  errorMassage?: FieldError;
}>`
  width: 100%;
  height: 48px;
  padding: 0 16px;
  font-size: 15px;
  border: ${({ errorMassage: error }) =>
    error ? "2px solid #ff5252" : "1px solid #dfe1e5"};
  border-radius: 8px;
  background-color: ${({ errorMassage: error }) =>
    error ? "rgba(255, 82, 82, 0.05)" : "white"};
  transition: all 0.2s ease;

  &:focus {
    outline: none;
    border-color: ${({ errorMassage: error }) =>
      error ? "#ff5252" : "#4285f4"};
    box-shadow: ${({ errorMassage: error }) =>
      error
        ? "0 0 0 2px rgba(255, 82, 82, 0.2)"
        : "0 0 0 2px rgba(66, 133, 244, 0.2)"};
  }

  &::placeholder {
    color: #9aa0a6;
  }
`;

const TwoColumnLayout = styled.div`
  display: flex;
  gap: 20px;
`;

const PrimaryButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: #4285f4;
  color: white;
  font-size: 16px;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  margin-top: 10px;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #3367d6;
  }

  &:active {
    transform: scale(0.98);
  }
`;

const SecondaryButton = styled.button`
  width: 100%;
  height: 48px;
  background-color: transparent;
  color: #4285f4;
  font-size: 16px;
  font-weight: 600;
  border: 2px solid #4285f4;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(66, 133, 244, 0.05);
  }

  &:active {
    transform: scale(0.98);
  }
`;

const Error = styled.span`
  color: #ff5252;
  font-size: 13px;
  margin-top: 6px;
  font-weight: 500;
`;

const Divider = styled.div`
  display: flex;
  align-items: center;
  margin: 30px 0;
  width: 100%;

  &::before,
  &::after {
    content: "";
    flex: 1;
    height: 1px;
    background-color: #e0e0e0;
  }
`;

const DividerText = styled.span`
  padding: 0 16px;
  color: #777;
  font-size: 14px;
  font-weight: 500;
`;

const ToggleText = styled.p`
  color: #666;
  font-size: 15px;
  text-align: center;
  margin-bottom: 15px;
`;
