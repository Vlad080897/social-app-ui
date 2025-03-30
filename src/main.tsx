import { createRouter, RouterProvider } from "@tanstack/react-router";
import ReactDOM from "react-dom/client";
import { routeTree } from "./routeTree.gen.ts";
import { makeRouterContext } from "./context/routerContext.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const routerContext = makeRouterContext();

const queryClient = new QueryClient();

const router = createRouter({
  routeTree,
  context: routerContext,
  defaultPreload: "intent",
  scrollRestoration: true,
});

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

const rootElement = document.getElementById("root")!;

if (!rootElement.innerHTML) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}
