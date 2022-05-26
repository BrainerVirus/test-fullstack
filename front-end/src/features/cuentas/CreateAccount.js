import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const URI = "http://localhost:8080/cuentas/";

const CompCreateAccount = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      user: user,
      password: password,
    });
    navigate("/");
  };
  return (
    <div>
      <h3>Crear cuenta</h3>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label">Usuario</label>
          <input
            value={user}
            onChange={handleUserChange}
            type="text"
            className="form-control"
          ></input>
        </div>
        <div className="mb-3">
          <label className="form-label">Contraseña</label>
          <input
            value={password}
            onChange={handlePassChange}
            type="text"
            className="form-control"
          ></input>
        </div>
        <button type="submit" className="btn btn-primary">
          Store
        </button>
      </form>
    </div>
  );
};

export default CompCreateAccount;
