import {
  Box,
  IconButton,
  Input,
  InputAdornment,
  Typography,
} from "@mui/material";
import styled from "styled-components";
import {
  Search as SearchIcon,
  Settings,
  Notifications,
} from "@mui/icons-material";
import { UserLogo } from "../../shared/components/UserLogo";

export const Header = () => {
  return (
    <Wrapper>
      <HeaderContent>
        <Box sx={{ display: "flex", gap: 10 }}>
          <Logo />
          <Search
            placeholder="Search for friends here..."
            startAdornment={
              <InputAdornment position="start">
                <SearchIcon style={{ color: "#6b7280" }} />
              </InputAdornment>
            }
          />
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <UserLogo />
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                marginLeft: "10px",
              }}
            >
              <Typography sx={{ fontSize: "15px", fontWeight: "bold" }}>
                Steve Rogers
              </Typography>
              <Typography sx={{ fontSize: "13px" }}>@CaptainAmerica</Typography>
            </Box>
            <Box sx={{ display: "flex", gap: 2, ml: 4 }}>
              <IconButton sx={{ ...iconButtonStyle }}>
                <Settings />
              </IconButton>
              <IconButton sx={{ ...iconButtonStyle }}>
                <Notifications />
              </IconButton>
            </Box>
          </Box>
        </Box>
      </HeaderContent>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100px;
  background-color: #a9dff9;
  padding: 0 20px;
  margin: 0;
`;

const HeaderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 90%;
  margin: 0 auto;
`;

const Logo = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 8px;
  background-image: url("/images/logo.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

const Search = styled(Input)`
  && {
    background-color: #ffffff;
    border-radius: 24px;
    padding: 8px 16px;
    width: 400px;
    margin-left: 20px;
    transition: all 0.3s ease;

    .MuiInput-input {
      padding: 8px 4px;
      font-size: 16px;
      color: #4a5568;
    }

    &:focus-within {
      width: 450px;
    }

    &::before,
    &::after {
      display: none; /* Removes the default MUI underline */
    }
  }
`;

// const UserLogo = styled.div<{
//   userPhoto?: string;
// }>`
//   width: 55px;
//   height: 55px;
//   border-radius: 8px;
//   background-image: url(${({ userPhoto }) => userPhoto || "/images/user.png"}););
//   background-size: cover;
//   background-repeat: no-repeat;
//   background-position: center;
// `;

const iconButtonStyle = {
  width: "55px",
  height: "55px",
  borderRadius: "8px",
  color: "#333333",
  backgroundColor: "#ffffff",
  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.05)",
  "&:hover": {
    backgroundColor: "#ffffff",
  },
};
