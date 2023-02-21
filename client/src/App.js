import "./App.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react'

import HomePage from "./pages/Home";
import ChatPage from "./pages/Chat";

const Root = () => {
  return (
    <>
      <header>header</header>
      <Outlet />
      <footer>footer</footer>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/chats",
        element: <ChatPage />,
      },
    ],
  },
]);

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  );
}

export default App;
