import { useQuery } from "@tanstack/react-query";
import { getRouteApi } from "@tanstack/react-router";
import { postsSchema } from "../schemas/posts.schema";
import api from "../services/api.service";

const routerApi = getRouteApi("/_secured/profile/$id/");

const getPosts = async (id: string) => {
  const res = await api.get(`/api/v1/social/${id}/posts`);

  return postsSchema.parse(res.data);
};

export const usePostsApi = () => {
  const { id } = routerApi.useParams();

  console.log(id);

  const { data, refetch } = useQuery({
    queryKey: ["posts", id],
    queryFn: () => getPosts(id),
  });

  return { posts: data, refetch };
};

export default usePostsApi;
