import { DeleteOutline } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useIsOwner } from "../../hooks/useIsOwner";
import { Post } from "../../schemas/posts.schema";
import { UserLogo } from "../../shared/components/UserLogo";
import { useOwner } from "../../hooks/useOwner";

type Props = {
  posts?: Post[];
  handleDeletePost: (postId: number) => void;
};

const Posts: React.FC<Props> = ({ posts, handleDeletePost }) => {
  const owner = useOwner();
  const isOwner = useIsOwner();

  return posts?.map((post) => {
    return (
      <Box
        key={post.id}
        sx={{
          width: "100%",
          height: "auto",
          minHeight: "100px",
          padding: "10px",
          boxSizing: "border-box",
          backgroundColor: "#ffffff",
          borderRadius: "4px",
          display: "flex",
          gap: 2,
          mb: 5,
          mt: 5,
        }}
      >
        <UserLogo url={post.creator.photos[0]?.url} id={post.creator.id} />
        <Box sx={{ width: "100%" }}>
          <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
            <Typography>
              {post.creator.firstName} {post.creator.lastName}
            </Typography>
            <Typography sx={{ fontSize: "13px", color: "#6b7280" }}>
              @{post.creator.username.toLowerCase()}
            </Typography>
          </Box>
          <Box sx={{ mt: 1, width: "100%" }}>
            <Typography>{post.content}</Typography>
          </Box>
          <Box>
            {post.photos.map((photo) => (
              <img key={photo.id} src={photo.url} alt="" />
            ))}
          </Box>
        </Box>
        {(isOwner || owner.id === post.creator.id) && (
          <IconButton onClick={() => handleDeletePost(post.id)}>
            <DeleteOutline color="error" />
          </IconButton>
        )}
      </Box>
    );
  });
};

export default Posts;
