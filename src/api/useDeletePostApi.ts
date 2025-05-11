import { useMutation } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import api from "../services/api.service";

const routerApi = getRouteApi("/_secured/profile/$id/");

const deletePostRequest = async (profileId: string, postId: number) => {
  await api.delete(`/api/v1/social/${profileId}/posts/${postId}`);
};

export const useDeletePostApi = () => {
  const { id: profileId } = routerApi.useParams();

  const deletePost = useMutation({
    mutationFn: (postId: number) => deletePostRequest(profileId, postId),
  });

  return deletePost;
};
