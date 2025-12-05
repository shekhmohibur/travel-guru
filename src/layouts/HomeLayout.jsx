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
      <div className="relative z-20">
        <header className="sticky top-0 mb-4 z-20">
            <NavBar />
        </header>
        <main className="w-11/12 mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default HomeLayout;
