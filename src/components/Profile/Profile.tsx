import styled from "styled-components";
import { usePosts } from "../../hooks/usePosts";
import CreatePost from "./CreatePost";
import Posts from "./Posts";

const Profile = () => {
  console.log("heree");

  const { posts, handleDeletePost } = usePosts();

  return (
    <Wrapper>
      <CreatePost />
      <Posts posts={posts} handleDeletePost={handleDeletePost} />
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  height: 100%;
  max-height: 100vh;
  overflow-x: auto;
`;
