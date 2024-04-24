import Login from "./features/auth/component/login";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Nav from "./features/auth/component/nav"
import Registration from "./features/auth/component/registration";
import Hello from "./features/auth/component/hello"
import Header from "./features/auth/component/header";
const router = createBrowserRouter([
  {
    path: "/",
    element: <div> <Nav/> <Hello/></div>,
  },
  {
    path: "/login",
    element: <div><Nav/> <Login/></div>,
  },
  {
    path: "/signup",
    element: <div><Nav/> <Registration/></div>,
  },
]);
function App() {
  return (
    <>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
  <Header></Header>
  <RouterProvider router={router} />

    
    </>
  );
}

export default App;
