import { useMutation } from "@tanstack/react-query";
import { signupSchema } from "../schemas/auth.schema";
import api from "../services/api.service";

type Params = {
  email: string;
  password: string;
  username: string;
  firstName: string;
  lastName: string;
};

const signupRequest = async (
  params: Params & { first_name: string; last_name: string }
) => {
  const res = await api.post("/api/v1/social/auth/signup", params);

  return signupSchema.parse(res.data);
};

export const useSignupApi = () => {
  const signup = useMutation({
    mutationFn: (params: Params) =>
      signupRequest({
        ...params,
        first_name: params.firstName,
        last_name: params.lastName,
      }),
  });

  return signup;
};
