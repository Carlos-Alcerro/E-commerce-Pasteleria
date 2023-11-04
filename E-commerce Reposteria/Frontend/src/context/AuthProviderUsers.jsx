import axios from "axios";
import { useState, useEffect, createContext } from "react";
import { useNavigate } from "react-router-dom";

const AuthContextUsers = createContext();

const AuthProviderUsers = ({ children }) => {
  const [authUsers, setAuthUsers] = useState({});
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const autenticarUsers = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        setLoading(false);
        return;
      }

      const config = {
        headers: {
          "Content-Type": "Application/json",
          Authorization: `Bearer ${token}`,
        },
      };

      try {
        const { data } = await axios(
          "http://localhost:3000/fiestisimo/login/",
          config
        );
        console.log("DATOS USUARIO", data);
        setAuthUsers(data);
        navigate("/InicioUsers");
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    autenticarUsers();
  }, [authUsers.role === "cliente"]);

  return (
    <AuthContextUsers.Provider
      value={{
        authUsers,
        setAuthUsers,
        loading,
      }}
    >
      {children}
    </AuthContextUsers.Provider>
  );
};

export { AuthProviderUsers };

export default AuthContextUsers;
