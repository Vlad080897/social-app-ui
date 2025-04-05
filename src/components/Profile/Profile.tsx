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

const Profile = () => {
  return (
    <Wrapper>
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
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image>
              <Icon>
                <PostAddOutlined />
              </Icon>
            </Image>
            <Typography>Create Post</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image>
              <PhotoCameraBackOutlined />
            </Image>
            <Typography>Upload photo</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
            <Image>
              <VideoCallOutlined />
            </Image>
            <Typography>Upload video</Typography>
          </Box>
        </Box>
        <Divider sx={{ width: "100%" }} />
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
          />
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Profile;

const Wrapper = styled.div`
  height: 100%;
`;

const Image = styled(Box)`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #ffee93;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
