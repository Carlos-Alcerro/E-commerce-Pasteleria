import { Outlet, Navigate } from "react-router-dom";
import HeaderUsers from "../Components/HeaderUsers";
import SideBarUusuarios from "../Components/SideBarUusuarios";
import Spinner from "../Components/Spinner";
import useAuthUsers from "../hooks/useAuthUsers";

const RutaProtegidaUsuarios = () => {
  const { authUsers, loading } = useAuthUsers();
  if (loading) return <Spinner />;

  return (
    <>
      {authUsers.role === "cliente" ? (
        <div className="bg-gray-100">
          <HeaderUsers />
          <div className="md:flex md:min-h-screen">
            <SideBarUusuarios />

            <main className="flex-1 p-10">
              <Outlet />
            </main>
          </div>
        </div>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default RutaProtegidaUsuarios;
