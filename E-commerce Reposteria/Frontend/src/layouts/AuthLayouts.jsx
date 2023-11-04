import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

const AuthLayouts = () => {
  return (
    <main className="px-3 lg:px-10">
      <Navbar />
      <hr />
      <div className="container mx-10">
        <Outlet />
      </div>
    </main>
  );
};

export default AuthLayouts;
