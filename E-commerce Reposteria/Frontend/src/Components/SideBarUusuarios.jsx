import { Link } from "react-router-dom";
import useAuthUsers from "../hooks/useAuthUsers";

const SideBarUusuarios = () => {
  const { authUsers } = useAuthUsers();
  return (
    <aside className="md:w-80 lg:w-96 px-5 py-10">
      <p className="font-bold text-xl">Hola Cliente: {authUsers.name}</p>
      <Link
        to="crear-proyecto"
        className="bg-sky-600 w-full text-white uppercase font-bold block mt-5  text-center rounded-lg p-3"
      >
        Mas visitados{" "}
      </Link>
    </aside>
  );
};

export default SideBarUusuarios;
