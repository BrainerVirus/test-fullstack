import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8080/cuentas/";

const CompEditAccount = () => {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      user: user,
      password: password,
    });
    navigate("/");
  };

  useEffect(() => {
    getCuentaById();
  }, []);

  const getCuentaById = async () => {
    const res = await axios.get(URI + id);
    setUser(res.data.user);
    setPassword(res.data.password);
  };

  const handleUserChange = (e) => {
    setUser(e.target.value);
  };
  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h3>Actualizar cuenta</h3>
      <form onSubmit={update}>
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

export default CompEditAccount;
