import {
  PhotoCameraBackOutlined,
  PostAddOutlined,
  VideoCallOutlined,
} from "@mui/icons-material";
import {
  Box,
  Divider,
  Icon,
  TextareaAutosize,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import { usePosts } from "../../hooks/usePosts";

const CreatePost = () => {
  const { content, updateContent, images, uploadImage, handleCreatePost } =
    usePosts();

  return (
    <Box
      sx={{
        width: "100%",
        height: "220px",
        padding: "10px",
        boxSizing: "border-box",
        backgroundColor: "#ffffff",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: "100px",
          width: "100%",
          height: "100px",
          justifySelf: "left",
        }}
      >
        <UploadBox onClick={handleCreatePost}>
          <Image>
            <Icon>
              <PostAddOutlined />
            </Icon>
          </Image>
          <Typography>Create Post</Typography>
        </UploadBox>
        <UploadBox>
          <label htmlFor="photo-upload">
            <input
              id="photo-upload"
              type="file"
              style={{ display: "none" }}
              multiple
              onChange={uploadImage}
            />
            <Image>
              <PhotoCameraBackOutlined />
            </Image>
          </label>
          <Typography
            component="label"
            htmlFor="photo-upload"
            sx={{ cursor: "pointer" }}
          >
            Upload photo
          </Typography>
        </UploadBox>
        <UploadBox>
          <Image>
            <VideoCallOutlined />
          </Image>
          <Typography>Upload video</Typography>
        </UploadBox>
      </Box>
      <Divider sx={{ width: "100%" }} />
      {images.map((_, index) => {
        return (
          <Box key={index}>
            <img src={undefined} alt={`Image ${index + 1}`} />
          </Box>
        );
      })}
      <Box
        sx={{
          width: "100%",
          padding: "10px",
        }}
      >
        <TextareaAutosize
          style={{
            width: "100%",
            resize: "none",
            border: "none",
            backgroundColor: "#f1fafe",
            padding: "10px",
            boxSizing: "border-box",
          }}
          maxRows={5}
          minRows={5}
          placeholder="Write something here..."
          value={content}
          onChange={(e) => updateContent(e.target.value)}
        />
      </Box>
    </Box>
  );
};

export default CreatePost;

const Image = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffee93;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;
`;

const UploadBox = styled(Box)`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 8px 12px;
  border-radius: 8px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: translateY(-2px);

    /* Change Image background on parent hover */
    ${Image} {
      background-color: #ffe066;
      transform: scale(1.05);
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    /* Change Typography on parent hover */
    label {
      color: #1976d2;
      font-weight: 500;
    }
  }
`;
