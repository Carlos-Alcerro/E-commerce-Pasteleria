import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const SideBar = () => {
  const { authAdm } = useAuth();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10">
      <p className="font-bold text-xl">Hola: {authAdm.name}</p>
      <Link
        to="crear-proyecto"
        className="bg-sky-600 w-full text-white uppercase font-bold block mt-5  text-center rounded-lg p-3"
      >
        Nuevo Producto
      </Link>
    </aside>
  );
};

export default SideBar;
