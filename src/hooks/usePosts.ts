import { useState } from "react";
import useCreatePostApi from "../api/useCreatePostApi";
import usePostsApi from "../api/usePostsApi";
import { useOwner } from "./useOwner";
import { useDeletePostApi } from "../api/useDeletePostApi";

export const usePosts = () => {
  const [postValue, setPostValue] = useState("");
  const [images, setImages] = useState<Blob[]>([]);

  const creator = useOwner();

  const { posts, refetch: refetchPosts } = usePostsApi();
  const { mutateAsync: createPostAsync } = useCreatePostApi();
  const { mutateAsync: deletePostAsync } = useDeletePostApi();

  const handleCreatePost = async () => {
    const formData = new FormData();

    formData.append("content", postValue);
    formData.append("creator", String(creator.id));
    formData.append("title", "");

    images.forEach((image) => {
      formData.append("file", image);
    });

    createPostAsync(formData).then(() => {
      setPostValue("");
      setImages([]);
      refetchPosts();
    });
  };

  const handleDeletePost = (postId: number) => {
    deletePostAsync(postId).then(() => {
      refetchPosts();
    });
  };

  const uploadImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;

    const newFile = e.target.files[0];

    try {
      // const formattedImage = await readAndCompressImage(newFile, {
      //   maxHeight: 500,
      //   maxWidth: 500,
      //   quality: 1,
      //   mimeType: "image/jpeg",
      //   debug: true,
      // });

      setImages((prev) => [...prev, newFile]);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    posts,
    content: postValue,
    images,
    handleCreatePost,
    updateContent: setPostValue,
    uploadImage,
    handleDeletePost,
  };
};
