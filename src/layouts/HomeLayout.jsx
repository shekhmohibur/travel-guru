import NavBar from "../components/NavBar";
import background from "../assets/Rectangle 1.png";
import { Outlet } from "react-router";

const HomeLayout = () => {
  return (
    <div className="relative min-h-screen">
      {/* BACKGROUND IMAGE */}
      <img
        src={background}
        alt="background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/70 z-10"></div>
      <div className="relative z-20 w-11/12 mx-auto">
        <header className="sticky top-0 py-4">
          <NavBar />
        </header>
        <main>
          <Outlet/>
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
