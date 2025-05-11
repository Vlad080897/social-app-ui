import { useMutation } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import api from "../services/api.service";

const routerApi = getRouteApi("/_secured/profile/$id/");

const createPostRequest = async ({
  formData,
  profileId,
}: {
  formData: FormData;
  profileId?: string;
}) => {
  const res = await api.post(`/api/v1/social/${profileId}/posts/`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

  return res.data;
};

const useCreatePostApi = () => {
  const { id: profileId } = routerApi.useParams();

  const createPostFn = useMutation({
    mutationFn: (formData: FormData) => {
      return createPostRequest({
        profileId,
        formData,
      });
    },
  });

  return createPostFn;
};

export default useCreatePostApi;
