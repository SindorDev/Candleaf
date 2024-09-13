import { Navigate, Outlet, useParams, useRoutes } from "react-router-dom";
import { lazy, useEffect } from "react";
import "./App.css";
const Menu = lazy(() => import("./routes/home/Menu"))
const Details = lazy(() => import("./routes/details/Details"))
const Login = lazy(() => import("./routes/auth/login/Login"))
const Register = lazy(() => import("./routes/auth/register/Register"))
const CartProducts = lazy(() => import("./routes/cartProduct/CartProducts"))
const Profile = lazy(() => import("./routes/profile/Profile"))
import { useSelector } from "react-redux";
import { SuspenseElement as Suspense } from "./utils/index";

function App() {
  const { token } = useSelector((state: any) => state.auth);
  const params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [params])
  return useRoutes([
    {
      path: "/",
      element: (
        <Suspense>
          <Menu />
        </Suspense>
      ),
    },
    {
      path: "/product/:id",
      element: (
        <Suspense>
          <Details />
        </Suspense>
      ),
    },
    {
      path: "/auth",
      element: token ? (
        <Navigate to="/" />
      ) : (
        <Suspense>
          <Outlet />
        </Suspense>
      ),
      children: [
        {
          index: true,
          element: (
            <Suspense>
              <Login />
            </Suspense>
          ),
        },
        {
          path: "register",
          element: (
            <Suspense>
              <Register />
            </Suspense>
          ),
        },
      ],
    },
    {
      path: "/cartProduct",
      element: (
        <Suspense>
          <CartProducts />
        </Suspense>
      ),
    },
    {
      path: "/profile",
      element: token ? (
        <Suspense>
          <Profile />
        </Suspense>
      ) : (
        <Navigate to="/auth" />
      ),
    },
  ]);
}

export default App;
