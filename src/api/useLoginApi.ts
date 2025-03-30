import { useMutation } from "@tanstack/react-query";
import api from "../services/api.service";
import { loginSchema } from "../schemas/auth.schema";

const loginRequest = async (email: string, password: string) => {
  const res = await api.post("/api/v1/social/auth/login", {
    email,
    password,
  });

  return loginSchema.parse(res.data);
};

export const useLoginApi = () => {
  const loginFn = useMutation({
    mutationFn: ({ email, password }: { email: string; password: string }) => {
      return loginRequest(email, password);
    },
  });

  return loginFn;
};
