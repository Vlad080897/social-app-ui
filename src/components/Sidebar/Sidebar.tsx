import styled from "styled-components";
import { Button } from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import { authService } from "../../services/auth/auth.service";
import { useRouter } from "@tanstack/react-router";

const Sidebar = () => {
  const router = useRouter();

  const handleLogout = () => {
    authService.logout();
    router.navigate({ to: "/auth" });
  };

  return (
    <Wrapper>
      <LogoutButton
        size="small"
        variant="text"
        startIcon={<LogoutIcon />}
        onClick={handleLogout}
      >
        Log Out
      </LogoutButton>
    </Wrapper>
  );
};

export default Sidebar;

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  max-width: 215px;
  flex: 0 0 auto;
`;

const LogoutButton = styled(Button)`
  margin-top: auto;
  color: #f44336 !important;
  text-transform: none;

  .MuiButton-startIcon {
    color: #f44336;
  }

  &:hover {
    background-color: transparent;
  }
`;
