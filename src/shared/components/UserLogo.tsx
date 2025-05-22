import { Link } from "@tanstack/react-router";
import styled from "styled-components";

type Props = {
  variant?: "small" | "medium";
  url?: string;
  id: number;
};

export const UserLogo: React.FC<Props> = ({ variant = "small", url, id }) => {
  return (
    <Link to="/profile/$id" params={{ id: id.toString() }}>
      <Logo $variant={variant} $url={url} />
    </Link>
  );
};

const Logo = styled.div<{
  $variant: "small" | "medium";
  $url?: string;
}>`
  width: ${({ $variant }) => ($variant === "small" ? "55px" : "100px")};
  height: ${({ $variant }) => ($variant === "small" ? "55px" : "100px")};
  border-radius: 8px;
  background-image: url(${({ $url }) => $url || "/images/user.png"}););
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;
