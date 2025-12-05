import { Outlet } from "react-router";
import NavBar from "../components/NavBar";

const AuthLayout = () => {
  return (
    <div>
      <header className="sticky top-0 mb-4 z-20">
        <NavBar />
      </header>
      <main className="w-11/12 mx-auto">
        <Outlet />
      </main>
    </div>
  );
};

export default AuthLayout;
