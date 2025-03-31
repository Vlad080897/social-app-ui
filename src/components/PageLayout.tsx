import { Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import styled from "styled-components";
import { Header } from "./Header/Header";
import Recommendations from "./Recommendations/Recommendations";
import Sidebar from "./Sidebar/Sidebar";

function PageLayout() {
  return (
    <>
      <Header />
      <PageLayoutWrapper>
        <Sidebar />
        <OuterWrapper>
          <Outlet />
        </OuterWrapper>
        <Recommendations />
      </PageLayoutWrapper>
      <TanStackRouterDevtools position="bottom-right" />
    </>
  );
}

const PageLayoutWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const OuterWrapper = styled.div`
  height: 100%;
  background-color: #eef8ff;
  flex: 1 1 auto;
`;

export default PageLayout;
